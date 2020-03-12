import { Client } from '../client';
import * as types from '../types';
import * as is from 'is_js';

/**
 * Auth module is only used to build `StdTx`
 *
 * @category Modules
 */
export class Auth {
  /** @hidden */
  private client: Client;
  /** @hidden */
  defaultStdFee: types.StdFee;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
    const fees: types.Coin[] = [
      { denom: 'iris-atto', amount: this.client.config.fee },
    ];
    this.defaultStdFee = {
      amount: fees,
      gas: this.client.config.gas,
    };
  }

  /**
   * Generate a new `StdTx` which is a standard way to wrap Msgs with Fee and Signatures.
   *
   * **NOTE:** The first signature is the fee payer
   *
   * @param msgs Msgs to be sent
   * @param baseTx Base params of the transaction
   * @param sigs Signatures of the transaction, defaults to []
   * @param memo Memo of the transaction
   *
   * @returns
   */
  newStdTx(
    msgs: types.Msg[],
    baseTx: types.BaseTx,
    sigs: types.StdSignature[] = [],
    memo = ''
  ): types.Tx<types.StdTx> {
    const stdFee: types.StdFee = { amount: [], gas: '' };
    Object.assign(stdFee, this.defaultStdFee); // Copy from default std fee

    if (baseTx.fee && is.not.empty(baseTx.fee)) {
      stdFee.amount = [{ denom: 'iris-atto', amount: baseTx.fee }];
    }
    if (baseTx.gas && is.not.empty(baseTx.gas)) {
      stdFee.gas = baseTx.gas;
    }
    return {
      type: 'irishub/bank/StdTx',
      value: {
        msg: msgs,
        fee: stdFee,
        signatures: sigs,
        memo,
      },
    };
  }
}
