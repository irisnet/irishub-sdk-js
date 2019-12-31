export interface AbciQueryRequest {
  path: string;
  data?: string;
  height?: number;
  prove?: boolean;
}

export interface AbciQueryResponse {
  response: AbciQueryResponseValue;
}

export interface AbciQueryResponseValue {
  value: string;
  code: number;
  log: string;
  codespace: string;
}