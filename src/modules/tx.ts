import { Sdk } from '../sdk';
import * as is from 'is_js';
import * as types from '../types';
import SdkError from '../errors';
import { Crypto } from '../utils/crypto';
import * as Amino from '@irisnet/amino-js';
import { marshalTx } from '@irisnet/amino-js';
import { base64ToBytes, bytesToBase64 } from '@tendermint/belt';
import Utils from '../utils/utils';

export class Tx {
  sdk: Sdk;
  constructor(sdk: Sdk) {
    this.sdk = sdk;
  }

  /**
   * Broadcast tx async
   * @param signedTx The tx object with signature
   * @returns The result object of broadcasting
   */
  broadcastTxAsync(
    signedTx: types.Tx<types.StdTx>
  ): Promise<types.ResultBroadcastTxAsync> {
    return this.broadcastTx(signedTx, 'broadcast_tx_async');
  }

  /**
   * Broadcast tx sync
   * @param signedTx The tx object with signature
   * @returns The result object of broadcasting
   */
  broadcastTxSync(
    signedTx: types.Tx<types.StdTx>
  ): Promise<types.ResultBroadcastTxAsync> {
    return this.broadcastTx(signedTx, 'broadcast_tx_sync');
  }

  /**
   * Broadcast tx and wait for it to be included in a block.
   * @param signedTx The tx object with signature
   * @returns The result object of broadcasting
   */
  broadcastTxCommit(
    signedTx: types.Tx<types.StdTx>
  ): Promise<types.ResultBroadcastTx> {
    const txBytes = marshalTx(signedTx);
    return this.sdk.config.rpcClient
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
   * @param signedTx The tx object with signature
   * @returns The result object of broadcasting
   */
  private broadcastTx(
    signedTx: types.Tx<types.StdTx>,
    method: string
  ): Promise<types.ResultBroadcastTxAsync> {
    // Only accepts 'broadcast_tx_sync' and 'broadcast_tx_async'
    if (is.not.inArray(method, ['broadcast_tx_sync', 'broadcast_tx_async'])) {
      throw new Error(`Unsupported broadcast method: ${method}`);
    }

    const txBytes = Amino.marshalTx(signedTx);
    return this.sdk.config.rpcClient
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

  /**
   * Single sign a transaction
   *
   * @param unsignedTx StdTx with no signatures
   * @param name Name of the key to sign the tx
   * @param password Password of the key
   * @returns { Promise<types.Tx<types.StdTx>> } The signed tx
   */
  async sign(
    unsignedTx: types.Tx<types.StdTx>,
    name: string,
    password: string
  ): Promise<types.Tx<types.StdTx>> {
    if (is.empty(name)) {
      throw new Error(`Name of the key can not be empty`);
    }
    if (is.empty(password)) {
      throw new Error(`Password of the key can not be empty`);
    }
    if (
      is.undefined(unsignedTx) ||
      is.undefined(unsignedTx.value) ||
      is.undefined(unsignedTx.value.msg)
    ) {
      throw new Error(`Msgs can not be empty`);
    }
    const keystore = this.sdk.config.keyDAO.read(name);
    if (!keystore) {
      throw new Error(`Key with name '${name}' not found`);
    }

    // Build msg to sign
    const addr = keystore.address;
    const account = await this.sdk.bank.getAccount(addr);
    const msgs: types.MsgValue[] = [];
    unsignedTx.value.msg.forEach(msg => {
      msgs.push(msg.value);
    });
    const signMsg: types.StdSignMsg = {
      account_number: account.account_number,
      chain_id: this.sdk.config.chainId,
      fee: unsignedTx.value.fee,
      memo: unsignedTx.value.memo,
      msgs: msgs,
      sequence: account.sequence,
    };

    // Signing
    const privKey = Crypto.getPrivateKeyFromKeyStore(keystore, password);
    const signature = Crypto.generateSignature(
      Utils.str2hexstring(JSON.stringify(Utils.sortObject(signMsg))),
      privKey
    );

    const sigs: types.StdSignature[] = [
      {
        pub_key: account.public_key,
        account_number: account.account_number,
        sequence: account.sequence,
        signature: signature.toString('base64'),
      },
    ];

    unsignedTx.value.signatures = sigs;

    return unsignedTx;
  }
}
