import { Tx, Tag } from './types';
import { StdTx } from './auth';
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
/** Tx query result */
export interface QueryTxResult {
    hash: string;
    height: string;
    index: number;
    tx_result: QueryTxInnerResult;
    tx: Tx<StdTx>;
}
/** Tx query inner result */
export interface QueryTxInnerResult {
    code: string;
    log: string;
    gasWanted: string;
    gasUsed: string;
    tags: Tag[];
}
/** Txs search result */
export interface SearchTxsResult {
    txs: QueryTxResult[];
    total_count: string;
}
