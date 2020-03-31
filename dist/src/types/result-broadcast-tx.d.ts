/** BroadcastTx Result, compatible with `Sync` and `Async` */
export interface ResultBroadcastTxAsync {
    code: number;
    data: string;
    log: string;
    hash: string;
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
    tags: string[];
}
export declare function newResultBroadcastTx(hash: string, check_tx?: ResultTx, deliver_tx?: ResultTx, height?: number): ResultBroadcastTx;
