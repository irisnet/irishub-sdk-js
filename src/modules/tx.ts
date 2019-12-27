import { Sdk } from '../sdk';
import Crypto from './crypto';
import * as is from 'is_js';
import * as types from '../types';
import SdkError from '../errors';

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
  broadcastTxAsync(signedTx: object): types.ResultBroadcastTx {
    return this.broadcastTx(signedTx, 'broadcast_tx_async');
  }

  /**
   * Broadcast tx sync
   * @param signedTx The tx object with signature
   * @returns The result object of broadcasting
   */
  broadcastTxSync(signedTx: object): types.ResultBroadcastTx {
    return this.broadcastTx(signedTx, 'broadcast_tx_sync');
  }

  /**
   * Broadcast tx and wait for it to be included in a block.
   * @param signedTx The tx object with signature
   * @returns The result object of broadcasting
   */
  broadcastTxCommit(signedTx: object): types.ResultBroadcastTxCommit {
    const result = this.sdk.config.rpcClient.request(
      'broadcast_tx_commit',
      signedTx
    );

    // Check tx error
    if (result.check_tx.code > 0) {
      const err = new SdkError('Check tx error');
      err.code = result.check_tx.code;
      err.log = result.check_tx.log;
      throw err;
    }

    // Deliver tx error
    if (result.deliver_tx.code > 0) {
      const err = new SdkError('Deliver tx error');
      err.code = result.deliver_tx.code;
      err.log = result.deliver_tx.log;
      throw err;
    }

    return result;
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
  ): types.ResultBroadcastTx {
    // Only accepts 'broadcast_tx_sync' and 'broadcast_tx_async'
    if (is.not.inArray(method, ['broadcast_tx_sync', 'broadcast_tx_async'])) {
      throw new Error(`Unsupported broadcast method: ${method}`);
    }

    const result = this.sdk.config.rpcClient.request(method, signedTx);

    if (result.code > 0) {
      const err = new SdkError(result.data);
      err.code = result.code;
      err.log = result.log;
      throw err;
    }

    return result;
  }
}
