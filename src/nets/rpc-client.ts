import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Utils } from '../utils';
import { SdkError } from '../errors';
import * as is from 'is_js';
import * as types from '../types';

/**
 * Tendermint JSON RPC Client
 */
export class RpcClient {
  /** @hidden */
  instance: AxiosInstance;

  /**
   * Initialize Tendermint JSON RPC Client
   * @param url Rpc address of irishub node
   * @param config The other configurations, refer to { [[AxiosRequestConfig]] }
   * @returns
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

    this.instance = axios.create(config);
  }

  /**
   * Post Tendermint JSON RPC Request
   *
   * @param method Tendermint RPC method
   * @param params Request params
   * @returns
   */
  request<T>(method: string, params: object = {}): Promise<T> {
    const data = {
      jsonrpc: '2.0',
      id: 'jsonrpc-client',
      method,
      params,
    };
    return this.instance
      .request<types.JSONRPCResponse<T>>({
        data,
      })
      .then(response => {
        const res = response.data;

        // Internal error
        if (res.error) {
          console.log(res.error);
          throw new SdkError(res.error.message, res.error.code);
        }

        return res.result;
      });
  }

  /**
   * Tendermint ABCI Query
   *
   * @param path Querier path
   * @param data Input params
   * @returns
   */
  abciQuery<T>(path: string, data?: object): Promise<T> {
    const params: types.AbciQueryRequest = {
      path,
    };
    if (data) {
      params.data = Utils.obj2hexstring(data);
    }

    return this.request<types.AbciQueryResponse>(
      types.RpcMethods.AbciQuery,
      params
    ).then(response => {
      if (response.response) {
        if (response.response.value) {
          const value = Buffer.from(
            response.response.value,
            'base64'
          ).toString();
          const res = JSON.parse(value);

          if (!res) return {};
          if (res.type && res.value) return res.value;
          return res;
        } else if (response.response.code) {
          throw new SdkError('Bad Request', response.response.code);
        }
      }
      throw new SdkError('Bad Request');
    });
  }
}
