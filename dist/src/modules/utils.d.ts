import { Client } from '../client';
import * as types from '../types';
/**
 * Utils for the IRISHub SDK
 * @category Modules
 * @since v0.17
 */
export declare class Utils {
    /** @hidden */
    private client;
    /** @hidden */
    private tokenMap;
    /** @hidden */
    private mathConfig;
    /** @hidden */
    private math;
    /** @hidden */
    constructor(client: Client);
    /**
     * Convert the coin object to min unit
     *
     * @param coin Coin object to be converted
     * @returns
     * @since v0.17
     */
    toMinCoin(coin: types.Coin): Promise<types.Coin>;
    /**
     * Convert the coin array to min unit
     * @param coins Coin array to be converted
     * @returns
     * @since v0.17
     */
    toMinCoins(coins: types.Coin[]): Promise<types.Coin[]>;
    /**
     * Convert the coin object to main unit
     *
     * @returns
     * @since v0.17
     */
    toMainCoin(coin: types.Coin): Promise<types.Coin>;
    /**
     * Convert the coin array to main unit
     * @param coins Coin array to be converted
     * @returns
     * @since v0.17
     */
    toMainCoins(coins: types.Coin[]): Promise<types.Coin[]>;
}
