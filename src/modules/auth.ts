import { Sdk } from '../sdk';
import { Crypto } from '../utils/crypto';
import Utils from '../utils/utils';
import * as types from '../types';
import * as is from 'is_js';

const addressStoreKeyPrefix = 'account:';

export class Auth {
  sdk: Sdk;
  defaultStdFee: types.StdFee;

  constructor(sdk: Sdk) {
    this.sdk = sdk;
    const fees: types.Coin[] = [
      { denom: 'iris-atto', amount: this.sdk.config.fee },
    ];
    this.defaultStdFee = {
      amount: fees,
      gas: this.sdk.config.gas,
    };
  }

  newStdTx(
    msgs: types.Msg[],
    baseTx: types.BaseTx,
    sigs: types.StdSignature[] = [],
    memo: string = ''
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
        memo: memo,
      },
    };
  }

}
