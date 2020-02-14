import { Client } from '../client';
import * as is from 'is_js';
import * as types from '../types';
import SdkError from '../errors';
import { Crypto } from '../utils/crypto';
import * as Amino from '@irisnet/amino-js';
import { marshalTx } from '@irisnet/amino-js';
import { base64ToBytes, bytesToBase64 } from '@tendermint/belt';
import Utils from '../utils/utils';

/**
 * Tx module allows you to sign or broadcast transactions
 * 
 * @category Modules
 */
export class Tx {
  /** @hidden */
  client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Build, sign and broadcast the msgs
   * @param msgs Msgs to be sent
   * @param baseTx
   * @returns
   */
  async buildAndSend(
    msgs: types.Msg[],
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    // Build Unsigned Tx
    const unsignedTx = this.client.auth.newStdTx(msgs, baseTx);
    console.log(JSON.stringify(unsignedTx));
    // Sign Tx
    const signedTx = await this.sign(unsignedTx, baseTx.from, baseTx.password);
    console.log(JSON.stringify(signedTx));

    // Broadcast Tx
    return this.broadcast(signedTx, baseTx.mode);
  }

  /**
   * Broadcast a tx
   * @param signedTx The tx object with signatures
   * @param mode Broadcast mode
   * @returns
   */
  broadcast(
    signedTx: types.Tx<types.StdTx>,
    mode?: types.BroadcastMode
  ): Promise<types.ResultBroadcastTx> {
    signedTx = this.marshal(signedTx);
    const txBytes = marshalTx(signedTx);
    switch (mode) {
      case types.BroadcastMode.Commit:
        return this.broadcastTxCommit(txBytes);
      case types.BroadcastMode.Sync:
        return this.broadcastTxSync(txBytes).then(response => {
          return types.newResultBroadcastTx(response.hash);
        });
      default:
        return this.broadcastTxAsync(txBytes).then(response => {
          return types.newResultBroadcastTx(response.hash);
        });
    }
  }

  /**
   * Broadcast tx async
   * @param txBytes The tx bytes with signatures
   * @returns
   */
  private broadcastTxAsync(
    txBytes: Uint8Array
  ): Promise<types.ResultBroadcastTxAsync> {
    return this.broadcastTx(txBytes, 'broadcast_tx_async');
  }

  /**
   * Broadcast tx sync
   * @param txBytes The tx bytes with signatures
   * @returns The result object of broadcasting
   */
  private broadcastTxSync(
    txBytes: Uint8Array
  ): Promise<types.ResultBroadcastTxAsync> {
    return this.broadcastTx(txBytes, 'broadcast_tx_sync');
  }

  /**
   * Broadcast tx and wait for it to be included in a block.
   * @param txBytes The tx bytes with signatures
   * @returns The result object of broadcasting
   */
  private broadcastTxCommit(
    txBytes: Uint8Array
  ): Promise<types.ResultBroadcastTx> {
    return this.client.rpcClient
      .request<types.ResultBroadcastTx>('broadcast_tx_commit', {
        tx: bytesToBase64(txBytes),
      })
      .then(response => {
        // Check tx error
        if (response.check_tx && response.check_tx.code > 0) {
          throw new SdkError(
            'Check tx error',
            response.check_tx.code,
            response.check_tx.log
          );
        }

        // Deliver tx error
        if (response.deliver_tx && response.deliver_tx.code > 0) {
          throw new SdkError(
            'Deliver tx error',
            response.deliver_tx.code,
            response.deliver_tx.log
          );
        }

        return response;
      });
  }

  /**
   * Broadcast tx sync or async
   * @private
   * @param signedTx The tx object with signatures
   * @returns The result object of broadcasting
   */
  private broadcastTx(
    txBytes: Uint8Array,
    method: string
  ): Promise<types.ResultBroadcastTxAsync> {
    // Only accepts 'broadcast_tx_sync' and 'broadcast_tx_async'
    if (is.not.inArray(method, ['broadcast_tx_sync', 'broadcast_tx_async'])) {
      throw new SdkError(`Unsupported broadcast method: ${method}`);
    }

    return this.client.rpcClient
      .request<types.ResultBroadcastTxAsync>(method, {
        tx: bytesToBase64(txBytes),
      })
      .then(response => {
        if (response.code && response.code > 0) {
          throw new SdkError(response.data, response.code, response.log);
        }

        return response;
      });
  }

  private marshal(stdTx: types.Tx<types.StdTx>): types.Tx<types.StdTx> {
    let copyStdTx: types.Tx<types.StdTx> = stdTx;
    Object.assign(copyStdTx, stdTx);
    stdTx.value.msg.forEach((msg, idx, array) => {
      if (msg.marshal) {
        copyStdTx.value.msg[idx] = msg.marshal();
      }
    });
    return copyStdTx;
  }

  /**
   * Single sign a transaction
   *
   * @param stdTx StdTx with no signatures
   * @param name Name of the key to sign the tx
   * @param password Password of the key
   * @param offline Offline signing, default `false`
   * @returns The signed tx
   */
  async sign(
    stdTx: types.Tx<types.StdTx>,
    name: string,
    password: string,
    offline: boolean = false
  ): Promise<types.Tx<types.StdTx>> {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    if (is.empty(password)) {
      throw new SdkError(`Password of the key can not be empty`);
    }
    if (
      is.undefined(stdTx) ||
      is.undefined(stdTx.value) ||
      is.undefined(stdTx.value.msg)
    ) {
      throw new SdkError(`Msgs can not be empty`);
    }
    const keystore = this.client.config.keyDAO.read(name);
    if (!keystore) {
      throw new SdkError(`Key with name '${name}' not found`);
    }

    const msgs: object[] = [];
    stdTx.value.msg.forEach(msg => {
      if (msg.getSignBytes) {
        msgs.push(msg.getSignBytes());
      }
    });

    if (!offline) {
      // Query account info from block chain
      const addr = keystore.address;
      const account = await this.client.bank.queryAccount(addr);
      const sigs: types.StdSignature[] = [
        {
          pub_key: account.public_key,
          account_number: account.account_number,
          sequence: account.sequence,
          signature: '',
        },
      ];

      stdTx.value.signatures = sigs;
    }

    // Build msg to sign
    const sig: types.StdSignature = stdTx.value.signatures[0];
    const signMsg: types.StdSignMsg = {
      account_number: sig.account_number,
      chain_id: this.client.config.chainId,
      fee: stdTx.value.fee,
      memo: stdTx.value.memo,
      msgs: msgs,
      sequence: sig.sequence,
    };

    // Signing
    const privKey = Crypto.getPrivateKeyFromKeyStore(keystore, password);
    console.log(JSON.stringify(Utils.sortObject(signMsg))); // Test signbytes
    const signature = Crypto.generateSignature(
      Utils.str2hexstring(JSON.stringify(Utils.sortObject(signMsg))),
      privKey
    );
    stdTx.value.signatures[0].signature = signature.toString('base64');
    return stdTx;
  }
}
