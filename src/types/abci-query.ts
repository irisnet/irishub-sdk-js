/** 
 * ABCI Query Params
 * @hidden
 */
export interface AbciQueryRequest {
  /** Querier path */
  path: string;
  /** Input params */
  data?: string;
  /** TODO */
  height?: number;
  /** TODO */
  prove?: boolean;
}

/** 
 * ABCI Query Response 
 * @hidden
 */
export interface AbciQueryResponse {
  response: AbciQueryResponseValue;
}

/** 
 * ABCI Query Inner Response
 * @hidden
 */
export interface AbciQueryResponseValue {
  value: string;
  code: number;
  log: string;
  codespace: string;
}