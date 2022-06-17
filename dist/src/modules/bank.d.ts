import { Client } from '../client';
import * as types from '../types';
/**
 * This module is mainly used to transfer coins between accounts,
 * query account balances, and provide common offline transaction signing and broadcasting methods.
 * In addition, the available units of tokens in the IRIShub system are defined using [coin-type](https://www.irisnet.org/docs/concepts/coin-type.html).
 *
 * [More Details](https://www.irisnet.org/docs/features/bank.html)
 *
 * @category Modules
 * @since v0.17
 */
export declare class Bank {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Send coins
     * @param to Recipient bech32 address
     * @param amount Coins to be sent
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    send(to: string, amount: types.Coin[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * multiSend coins
     * @param to Recipient bech32 address
     * @param amount Coins to be sent
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    multiSend(to: string, amount: types.Coin[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Balance queries the balance of a single coin for a single account.
     * @param address is the address to query balances for.
     * @param denom is the coin denom to query balances for.
     */
    queryBalance(address: string, denom: string): Promise<object>;
    /**
     * AllBalances queries the balance of all coins for a single account.
     * @param address is the address to query balances for.
     */
    queryAllBalances(address: string, height?: string): Promise<object>;
    /**
     * TotalSupply queries the total supply of all coins.
     */
    queryTotalSupply(pagination?: types.Pagination): Promise<object>;
    /**
     * SupplyOf queries the supply of a single coin.
     * @param denom is the coin denom to query balances for.
     */
    querySupplyOf(denom: string): Promise<object>;
    /**
     * Params queries the parameters of x/bank module.
     */
    queryParams(): Promise<object>;
    /**
     * DenomsMetadata queries the client metadata of a given coin denomination.
     */
    queryDenomMetadata(denom: string): Promise<object>;
    /**
     * DenomsMetadata queries the client metadata for all registered coin denominations.
     */
    queryDenomsMetadata(pagination?: types.Pagination): Promise<object>;
}
