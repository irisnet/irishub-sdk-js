import { PubKey } from '@irisnet/amino-js/types';
import { Coin, Msg, TxValue } from './types';

/** @TODO document */
export interface StdTx extends TxValue {
  msg: Msg[];
  fee: StdFee;
  signatures: StdSignature[];
  memo: string;
}

/** @TODO document */
export interface StdFee {
  amount: Coin[];
  gas: string;
}

/** @TODO document */
export interface StdSignature {
  pub_key: PubKey;
  signature: string;
  account_number: string;
  sequence: string;
}
