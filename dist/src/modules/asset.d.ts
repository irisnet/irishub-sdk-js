import { Client } from '../client';
import * as types from '../types';
/**
 * IRISHub allows individuals and companies to create and issue their own tokens.
 *
 * [More Details](https://www.irisnet.org/docs/features/asset.html)
 *
 * @category Modules
 * @since v0.17
 */
export declare class Asset {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Query details of a token
     * @param symbol The token symbol
     * @returns
     * @since v0.17
     */
    queryToken(symbol: string): Promise<types.Token>;
    /**
     * Query details of a group of tokens
     * @param owner The optional token owner address
     * @returns
     * @since v0.17
     */
    queryTokens(owner?: string): Promise<types.Token[]>;
    /**
     * Query the asset related fees
     * @param symbol The token symbol
     * @returns
     * @since v0.17
     */
    queryFees(symbol: string): Promise<types.TokenFees>;
    /**
     * Get coin name by denom
     *
     * **NOTE:** For iris units in irishub v0.17, only support `iris` and `iris-atto`
     *
     * @param denom
     * @since v0.17
     */
    private getCoinName;
}
