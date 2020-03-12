import { Tag } from './types'

/** BroadcastTx Result, compatible with `Sync` and `Async` */
export interface ResultBroadcastTxAsync {
  code: number;
  data: string;
  log: string;
  hash: string;
}

/** SDK Tx Result */
export interface TxResult {
  hash: string;
  height?: number;
  gas_used?: number;
  gas_wanted?: number;
  info?: string;
  tags?: Tag[];
}

/** BroadcastTx Result */
export interface ResultBroadcastTx {
  hash: string;
  check_tx?: ResultTx;
  deliver_tx?: ResultTx;
  height?: number;
}

/** BroadcastTx inner result */
export interface ResultTx {
  code: number;
  data: string;
  log: string;
  gas_used: number;
  gas_wanted: number;
  info: string;
  tags: Tag[];
}
