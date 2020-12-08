import { AxiosRequestConfig } from 'axios';
/**
 * Tendermint JSON RPC Client
 * @since v0.17
 */
export declare class RpcClient {
    /** @hidden */
    private instance;
    /** @hidden */
    private config;
    /**
     * Initialize Tendermint JSON RPC Client
     * @param url Rpc address of irishub node
     * @param config The other configurations, refer to { [[AxiosRequestConfig]] }
     * @returns
     * @since v0.17
     */
    constructor(config: AxiosRequestConfig);
    /**
     * Post Tendermint JSON RPC Request
     *
     * @param method Tendermint RPC method
     * @param params Request params
     * @returns
     * @since v0.17
     */
    request<T>(method: string, params?: object): Promise<T>;
    /**
     * Tendermint ABCI protobuf Query
     *
     * @param path Querier path
     * @param protoRequest protobuf Request
     * @param protoResponse protobuf Response so if "protoResponse" exists, well deserialize "ABCI Response" with "protoResponse" and return json object, else return base64 string
     * @returns
     * @since v0.17
     */
    protoQuery(path: string, protoRequest?: any, protoResponse?: any): Promise<any>;
    /**
     * Tendermint ABCI Query
     *
     * @param path Querier path
     * @param data Input params
     * @param height Use a specific height to query state at (this can error if the node is pruning state)
     * @returns
     * @since v0.17
     */
    abciQuery<T>(path: string, data?: object, height?: number): Promise<T>;
    /**
     *
     * @param key The store key
     * @param storeName The store name
     * @param height Block height to query, omit to get most recent provable block
     * @returns
     * @since v0.17
     */
    queryStore<T>(key: Uint8Array, storeName: string, height?: number): Promise<T>;
}
