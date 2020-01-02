import { PubKey } from '@irisnet/amino-js/types';
import { Coin, Msg, TxValue, MsgValue } from './types';

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

export interface BaseTx {
  from: string;
  password: string;
  gas?: string | undefined;
  fee?: string | undefined;
  memo?: string | undefined;
  mode?: BroadcastMode | undefined;
}

export enum BroadcastMode {
  Sync = 0,
  Async,
  Commit,
}

export interface StdSignMsg {
  account_number: string;
  chain_id: string;
  fee: StdFee;
  memo: string;
  msgs: MsgValue[];
  sequence: string;
}
