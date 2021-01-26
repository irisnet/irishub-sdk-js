import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Utils } from '../utils';
import { SdkError, CODES } from '../errors';
import * as is from 'is_js';
import * as types from '../types';

/**
 * Tendermint JSON RPC Client
 * @since v0.17
 */
export class RpcClient {
  /** @hidden */
  private instance: AxiosInstance;
  /** @hidden */
  private config: AxiosRequestConfig;

  /**
   * Initialize Tendermint JSON RPC Client
   * @param url Rpc address of irishub node
   * @param config The other configurations, refer to { [[AxiosRequestConfig]] }
   * @returns
   * @since v0.17
   */
  constructor(config: AxiosRequestConfig) {
    if (is.empty(config)) {
      throw new SdkError('RpcClient Config not initialized');
    }
    if (is.empty(config.baseURL)) {
      throw new SdkError('baseURL of RpcClient cannot be empty');
    }
    if (is.empty(config.timeout)) {
      config.timeout = 2000; // Set default timeout
    }

    config.url = '/'; // Fixed url

    this.config = config;
    this.instance = axios.create(config);
  }

  /**
   * Post Tendermint JSON RPC Request
   *
   * @param method Tendermint RPC method
   * @param params Request params
   * @returns
   * @since v0.17
   */
  request<T>(method: string, params: object = {}): Promise<T> {
    const data = {
      jsonrpc: '2.0',
      id: 'jsonrpc-client',
      method,
      params,
    };
    return this.instance
      .post<types.JSONRPCResponse<T>>(this.config.baseURL!, data)
      .then(response => {
        const res = response.data;
        // Internal error
        if (res.error) {
          console.error(res.error);
          throw new SdkError(res.error.message, res.error.code);
        }

        return res.result;
      });
  }

  /**
   * Tendermint ABCI protobuf Query
   *
   * @param path Querier path
   * @param protoRequest protobuf Request
   * @param protoResponse protobuf Response so if "protoResponse" exists, well deserialize "ABCI Response" with "protoResponse" and return json object, else return base64 string
   * @returns
   * @since v0.17
   */
  protoQuery(path: string, protoRequest?: any, protoResponse?: any): Promise<any/* object | string | null*/> {
    const params: types.AbciQueryRequest = {
      path,
    };
    if (protoRequest && protoRequest.serializeBinary) {
      params.data = Buffer.from(protoRequest.serializeBinary()).toString('hex');
    }
    return this.request<types.AbciQueryResponse>(
      types.RpcMethods.AbciQuery,
      params
    ).then(response => {
      if (response && response.response) {
        if (response.response.value) {
          if (protoResponse) {
            try{
              return protoResponse.deserializeBinary(response.response.value).toObject();
            }catch(err){
              console.error(`protobuf deserialize  error from ${path}`);
              return response.response.value;
            }
          }else{
            return response.response.value;
          }
        } else if (response.response.code) {
          throw new SdkError(response.response.log, response.response.code);
        } else{
          return null;
        }
      }
      throw new SdkError(`Internal Error from ${path}:${response.response.log}`);
    });
  }

  /**
   * Tendermint ABCI Query
   *
   * @param path Querier path
   * @param data Input params
   * @param height Use a specific height to query state at (this can error if the node is pruning state)
   * @returns
   * @since v0.17
   */
  abciQuery<T>(path: string, data?: object, height?: number): Promise<T> {
    const params: types.AbciQueryRequest = {
      path,
    };
    if (data) {
      params.data = Utils.obj2hexstring(data);
    }
    if (height) {
      params.height = String(height);
    }

    return this.request<types.AbciQueryResponse>(
      types.RpcMethods.AbciQuery,
      params
    ).then(response => {
      if (response && response.response) {
        if (response.response.value) {
          const value = Buffer.from(
            response.response.value,
            'base64'
          ).toString();
          try{
            return JSON.parse(value).value;
          }catch(err){
            return value;
          }
          // const res = JSON.parse(value);
          // if (!res) return {};
          // if (res.type && res.value) return res.value;
          // return res;
        } else if (response.response.code) {
          throw new SdkError(response.response.log, response.response.code);
        } else{
          return null;
        }
      }
      throw new SdkError(`Internal Error from ${path}:${response.response.log}`);
    });
  }

  /**
   *
   * @param key The store key
   * @param storeName The store name
   * @param height Block height to query, omit to get most recent provable block
   * @returns
   * @since v0.17
   */
  queryStore<T>(
    key: Uint8Array,
    storeName: string,
    height?: number
  ): Promise<T> {
    const path = `/store/${storeName}/key`;
    const params = {
      path,
      data: Utils.ab2hexstring(key),
      height: height ? String(height) : '0',
    };
    return this.request(types.RpcMethods.AbciQuery, params);
  }
}
