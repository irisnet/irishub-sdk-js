import { MsgSend } from './bank';

/** @TODO document */
export interface Msg {
  type: string;
  value: MsgSend;
}

/** @TODO document */
export interface MsgValue {}

/** @TODO document */
export interface Tx<T> {
  type: string;
  value: T;
}

/** @TODO document */
export interface TxValue {}

/** @TODO document */
export interface Coin {
  denom: string;
  amount: string;
}

export interface JSONRPCResponse<T> {
  jsonrpc: string;
  id:      string;
  error:   JsonRpcError;
  result:  T;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data: string;
}
