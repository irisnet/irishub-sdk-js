import { MsgSend } from './bank';

/** @TODO document */
export interface Msg {
  type: string;
  value: MsgSend;
}

/** @TODO document */
export interface Tx {
  type: string;
  value: TxValue;
}

/** @TODO document */
export interface TxValue {}

/** @TODO document */
export interface Coin {
  denom: string;
  amount: string;
}
