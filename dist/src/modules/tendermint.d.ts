import { Client } from '../client';
import * as types from '../types';
/**
 * Tendermint module provides tendermint rpc queriers implementation
 *
 * @category Modules
 * @since v0.17
 */
export declare class Tendermint {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Get a block info at a certain height or the latest height
     * @param height The block height
     * @returns
     * @since v0.17
     */
    queryBlock(height?: number): Promise<types.Block>;
    /**
     * Get a block result at a certain height or the latest height
     * @param height The block height
     * @returns
     * @since v0.17
     */
    queryBlockResult(height?: number): Promise<types.BlockResult>;
    /**
     * Query tx info by hash
     * @param hash The tx hash
     * @returns
     * @since v0.17
     */
    queryTx(hash: string): Promise<types.QueryTxResult>;
    /**
     * Query validator set at a certain height or the latest height
     * @param height The block height
     * @returns
     * @since v0.17
     */
    queryValidators(height?: number): Promise<types.QueryValidatorResult>;
    /**
     * Search txs
     *
     * **Note:** Known issues on pagination
     *
     * @returns
     * @since v0.17
     */
    searchTxs(conditions: types.EventQueryBuilder, page?: number, size?: number): Promise<types.SearchTxsResult>;
}
