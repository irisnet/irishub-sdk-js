import { Sdk } from '../sdk';
import * as is from 'is_js';
import * as types from '../types';
import SdkError from '../errors';
import { Crypto } from '../utils/crypto';
import * as Amino from '@irisnet/amino-js';

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
  broadcastTxAsync(signedTx: object): Promise<types.ResultBroadcastTxAsync> {
    return this.broadcastTx(signedTx, 'broadcast_tx_async');
  }

  /**
   * Broadcast tx sync
   * @param signedTx The tx object with signature
   * @returns The result object of broadcasting
   */
  broadcastTxSync(signedTx: object): Promise<types.ResultBroadcastTxAsync> {
    return this.broadcastTx(signedTx, 'broadcast_tx_sync');
  }

  /**
   * Broadcast tx and wait for it to be included in a block.
   * @param signedTx The tx object with signature
   * @returns The result object of broadcasting
   */
  broadcastTxCommit(signedTx: object): Promise<types.ResultBroadcastTx> {
    return this.sdk.config.rpcClient
      .request<types.ResultBroadcastTx>('broadcast_tx_commit', signedTx)
      .then(response => {
        // Check tx error
        if (response.check_tx && response.check_tx.code > 0) {
          const err = new SdkError('Check tx error');
          err.code = response.check_tx.code;
          err.log = response.check_tx.log;
          throw err;
        }

        // Deliver tx error
        if (response.deliver_tx && response.deliver_tx.code > 0) {
          const err = new SdkError('Deliver tx error');
          err.code = response.deliver_tx.code;
          err.log = response.deliver_tx.log;
          throw err;
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
    signedTx: object,
    method: string
  ): Promise<types.ResultBroadcastTxAsync> {
    // Only accepts 'broadcast_tx_sync' and 'broadcast_tx_async'
    if (is.not.inArray(method, ['broadcast_tx_sync', 'broadcast_tx_async'])) {
      throw new Error(`Unsupported broadcast method: ${method}`);
    }

    return this.sdk.config.rpcClient
      .request<types.ResultBroadcastTxAsync>(method, signedTx)
      .then(response => {
        console.log(response);
        if (response.code && response.code > 0) {
          const err = new SdkError(response.data);
          err.code = response.code;
          err.log = response.log;
          throw err;
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
   * @returns The signed tx
   */
  sign(unsignedTx: types.Tx<types.StdTx>, name: string, password: string): void {
    if (is.empty(name)) {
      throw new Error(`Name of the key can not be empty`);
    }
    if (is.empty(password)) {
      throw new Error(`Password of the key can not be empty`);
    }
    const keystore = this.sdk.config.keyDAO.read(name);
    if (!keystore) {
      throw new Error(`Key with name '${name}' not found`);
    }

    const addr = keystore.address;
    const privKey = Crypto.getPrivateKeyFromKeyStore(keystore, password);

    const txBytes = Amino.marshalTx(unsignedTx, true);
    // const signature = Crypto.generateSignature(txBytes.toString(), privKey);
    // unsignedTx.value.signatures[0] = signature;
  }
}
