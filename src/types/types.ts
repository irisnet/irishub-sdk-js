/** @TODO document */
export interface Msg {
  type: string;
  value: object;
  getSignBytes(): object;
}

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

export interface Pubkey {
  type: string;
  value: string;
}