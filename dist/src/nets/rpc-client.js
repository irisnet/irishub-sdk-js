"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const utils_1 = require("../utils");
const errors_1 = require("../errors");
const is = require("is_js");
const types = require("../types");
/**
 * Tendermint JSON RPC Client
 * @since v0.17
 */
class RpcClient {
    /**
     * Initialize Tendermint JSON RPC Client
     * @param url Rpc address of irishub node
     * @param config The other configurations, refer to { [[AxiosRequestConfig]] }
     * @returns
     * @since v0.17
     */
    constructor(config) {
        if (is.empty(config)) {
            throw new errors_1.SdkError('RpcClient Config not initialized');
        }
        if (is.empty(config.baseURL)) {
            throw new errors_1.SdkError('baseURL of RpcClient cannot be empty');
        }
        if (is.empty(config.timeout)) {
            config.timeout = 2000; // Set default timeout
        }
        config.url = '/'; // Fixed url
        this.config = config;
        this.instance = axios_1.default.create(config);
    }
    /**
     * Post Tendermint JSON RPC Request
     *
     * @param method Tendermint RPC method
     * @param params Request params
     * @returns
     * @since v0.17
     */
    request(method, params = {}) {
        const data = {
            jsonrpc: '2.0',
            id: 'jsonrpc-client',
            method,
            params,
        };
        return this.instance
            .post(this.config.baseURL, data)
            .then(response => {
            const res = response.data;
            // Internal error
            if (res.error) {
                console.error(res.error);
                throw new errors_1.SdkError(res.error.message, res.error.code);
            }
            return res.result;
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
    abciQuery(path, data, height) {
        const params = {
            path,
        };
        if (data) {
            params.data = utils_1.Utils.obj2hexstring(data);
        }
        if (height) {
            params.height = String(height);
        }
        return this.request(types.RpcMethods.AbciQuery, params).then(response => {
            if (response && response.response) {
                if (response.response.value) {
                    const value = Buffer.from(response.response.value, 'base64').toString();
                    const res = JSON.parse(value);
                    if (!res)
                        return {};
                    if (res.type && res.value)
                        return res.value;
                    return res;
                }
                else if (response.response.code) {
                    console.error(response.response);
                    throw new errors_1.SdkError(response.response.log, response.response.code);
                }
            }
            console.error(response);
            throw new errors_1.SdkError('Internal Error', errors_1.CODES.Internal);
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
    queryStore(key, storeName, height) {
        const path = `/store/${storeName}/key`;
        const params = {
            path,
            data: utils_1.Utils.ab2hexstring(key),
            height: height ? String(height) : '0',
        };
        return this.request(types.RpcMethods.AbciQuery, params);
    }
}
exports.RpcClient = RpcClient;
//# sourceMappingURL=rpc-client.js.map