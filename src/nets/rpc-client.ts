import * as Amino from '@irisnet/amino-js';
import { base64ToBytes, bytesToBase64 } from '@tendermint/belt';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Utils from '../utils/utils';
import SdkError from '../errors';
import * as is from 'is_js';
import * as types from '../types';

export default class RpcClient {
  instance: AxiosInstance;

  /**
   * Initialize Tendermint JSON RPC Client
   * @param url Rpc address of irishub node
   * @param config The other configurations, refer to { AxiosRequestConfig }
   * @returns { RpcClient }
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
   * @returns {T}
   */
  request<T>(method: string, params: object = {}): Promise<T> {
    const data = {
      jsonrpc: '2.0',
      id: 'jsonrpc-client',
      method: method,
      params: params,
    };

    return this.instance
      .request<types.JSONRPCResponse<T>>({
        data: data,
      })
      .then(response => {
        const res = response.data;

        // Internal error
        if (res.error) {
          throw new SdkError(res.error.message, res.error.code, res.error.data);
        }

        return res.result;
      });
  }
}
