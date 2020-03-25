import { Client } from '../client';
import * as is from 'is_js';
import * as types from '../types';
import { SdkError } from '../errors';
import { Utils, Crypto } from '../utils';
import { marshalTx } from '@irisnet/amino-js';
import { bytesToBase64 } from '@tendermint/belt';

/**
 * Tx module allows you to sign or broadcast transactions
 *
 * @category Modules
 */
export class Tx {
  /** @hidden */
  private client: Client;
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
  ): Promise<types.TxResult> {
    // Build Unsigned Tx
    const unsignedTx = this.client.auth.newStdTx(msgs, baseTx);

    const fee = await this.client.utils.toMinCoins(unsignedTx.value.fee.amount);
    unsignedTx.value.fee.amount = fee;

    // Sign Tx
    const signedTx = await this.sign(unsignedTx, baseTx.from, baseTx.password);
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
  ): Promise<types.TxResult> {
    signedTx = this.marshal(signedTx);
    const txBytes = marshalTx(signedTx);
    switch (mode) {
      case types.BroadcastMode.Commit:
        return this.broadcastTxCommit(txBytes);
      case types.BroadcastMode.Sync:
        return this.broadcastTxSync(txBytes).then(response => {
          return this.newTxResult(response.hash);
        });
      default:
        return this.broadcastTxAsync(txBytes).then(response => {
          return this.newTxResult(response.hash);
        });
    }
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
    offline = false
  ): Promise<types.Tx<types.StdTx>> {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    if (is.empty(password)) {
      throw new SdkError(`Password of the key can not be empty`);
    }
    if (!this.client.config.keyDAO.decrypt) {
      throw new SdkError(`Decrypt method of KeyDAO not implemented`);
    }
    if (
      is.undefined(stdTx) ||
      is.undefined(stdTx.value) ||
      is.undefined(stdTx.value.msg)
    ) {
      throw new SdkError(`Msgs can not be empty`);
    }
    const keyObj = this.client.config.keyDAO.read(name);
    if (!keyObj) {
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
      const addr = keyObj.address;
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
      msgs,
      sequence: sig.sequence,
    };

    // Signing
    const privKey = this.client.config.keyDAO.decrypt(keyObj.privKey, password);
    const signature = Crypto.generateSignature(
      Utils.str2hexstring(JSON.stringify(Utils.sortObject(signMsg))),
      privKey
    );
    sig.signature = signature.toString('base64');
    sig.pub_key = Crypto.getPublicKeySecp256k1FromPrivateKey(privKey);
    stdTx.value.signatures[0] = sig;
    return stdTx;
  }

  /**
   * Broadcast tx async
   * @param txBytes The tx bytes with signatures
   * @returns
   */
  private broadcastTxAsync(
    txBytes: Uint8Array
  ): Promise<types.ResultBroadcastTxAsync> {
    return this.broadcastTx(txBytes, types.RpcMethods.BroadcastTxAsync);
  }

  /**
   * Broadcast tx sync
   * @param txBytes The tx bytes with signatures
   * @returns The result object of broadcasting
   */
  private broadcastTxSync(
    txBytes: Uint8Array
  ): Promise<types.ResultBroadcastTxAsync> {
    return this.broadcastTx(txBytes, types.RpcMethods.BroadcastTxSync);
  }

  /**
   * Broadcast tx and wait for it to be included in a block.
   * @param txBytes The tx bytes with signatures
   * @returns The result object of broadcasting
   */
  private broadcastTxCommit(txBytes: Uint8Array): Promise<types.TxResult> {
    return this.client.rpcClient
      .request<types.ResultBroadcastTx>(types.RpcMethods.BroadcastTxCommit, {
        tx: bytesToBase64(txBytes),
      })
      .then(response => {
        // Check tx error
        if (response.check_tx && response.check_tx.code > 0) {
          throw new SdkError(response.check_tx.log, response.check_tx.code);
        }

        // Deliver tx error
        if (response.deliver_tx && response.deliver_tx.code > 0) {
          throw new SdkError(response.deliver_tx.log, response.deliver_tx.code);
        }

        if (response.deliver_tx && response.deliver_tx.tags) {
          response.deliver_tx.tags = Utils.decodeTags(response.deliver_tx.tags);
        }
        return {
          hash: response.hash,
          height: response.height,
          gas_wanted: response.deliver_tx?.gas_wanted,
          gas_used: response.deliver_tx?.gas_used,
          info: response.deliver_tx?.info,
          tags: response.deliver_tx?.tags,
        };
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
    if (
      is.not.inArray(method, [
        types.RpcMethods.BroadcastTxSync,
        types.RpcMethods.BroadcastTxAsync,
      ])
    ) {
      throw new SdkError(`Unsupported broadcast method: ${method}`);
    }

    return this.client.rpcClient
      .request<types.ResultBroadcastTxAsync>(method, {
        tx: bytesToBase64(txBytes),
      })
      .then(response => {
        if (response.code && response.code > 0) {
          throw new SdkError(response.data, response.code);
        }

        return response;
      });
  }

  private marshal(stdTx: types.Tx<types.StdTx>): types.Tx<types.StdTx> {
    const copyStdTx: types.Tx<types.StdTx> = stdTx;
    Object.assign(copyStdTx, stdTx);
    stdTx.value.msg.forEach((msg, idx) => {
      if (msg.marshal) {
        copyStdTx.value.msg[idx] = msg.marshal();
      }
    });
    return copyStdTx;
  }

  private newTxResult(
    hash: string,
    height?: number,
    deliverTx?: types.ResultTx
  ): types.TxResult {
    return {
      hash,
      height,
      gas_wanted: deliverTx?.gas_wanted,
      gas_used: deliverTx?.gas_used,
      info: deliverTx?.info,
      tags: deliverTx?.tags,
    };
  }
}
