/**
 * Base Msg
 * @hidden
 */
export interface Msg {
    type: string;
    value: any;
    getSignBytes?(): object;
    marshal?(): Msg;
}
/**
 * Base Tx
 * @hidden
 */
export interface Tx<T extends TxValue> {
    type: string;
    value: T;
}
/** Abstract Tx Value */
export interface TxValue {
}
/**
 * Base Coin
 * @hidden
 */
export interface Coin {
    denom: string;
    amount: string;
}
/**
 * Base JSONRPCResponse
 * @hidden
 */
export interface JSONRPCResponse<T> {
    jsonrpc: string;
    id: string;
    error: JsonRpcError;
    result: T;
}
/**
 * JsonRpc Error
 */
export interface JsonRpcError {
    code: number;
    message: string;
    data: string;
}
/**
 * Base Pubkey
 * @hidden
 */
export interface Pubkey {
    type: string;
    value: string;
}
/** Tag struct */
export interface Tag {
    key: string;
    value: string;
}
