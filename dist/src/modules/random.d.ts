import { Client } from '../client';
import * as types from '../types';
/**
 * @category Modules
 * @since v0.17
 */
export declare class Random {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Query the random information by the specified reqID
     *
     * @param reqID The ID of the random request
     * @returns
     * @since v0.17
     */
    queryRandom(reqID: string): Promise<types.RandomInfo>;
    /**
     * Query random requests of a specified block height
     *
     * @param height The block height
     * @returns
     * @since v0.17
     */
    queryRequest(height: number): Promise<types.RandomRequest>;
    /**
     * Request a random number
     *
     * @param blockInterval The block interval to wait for generating the random number
     * @param baseTx
     * @since v0.17
     */
    request(blockInterval: number, baseTx: types.BaseTx): Promise<types.TxResult>;
}
