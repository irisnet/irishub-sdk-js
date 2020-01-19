import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import Utils from '../utils/utils';
import * as types from '../types';
import * as is from 'is_js';

const addressStoreKeyPrefix = 'account:';

export class Auth {
  client: Client;
  defaultStdFee: types.StdFee;

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
