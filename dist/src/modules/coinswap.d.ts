import { Client } from '../client';
import * as types from '../types';
/**
 * Implementation of the [Constant Product Market Maker Model](https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf) token exchange protocol on IRISHub.
 *
 * [More Details](https://www.irisnet.org/docs/features/coinswap.html)
 *
 * @category Modules
 */
export declare class Coinswap {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * add liquidity
     * @param max_token Upper limit of Token of mortgages acceptable to users
     * @param exact_standard_amt Number of standard specified by the user
     * @param min_liquidity The minimum number of liquid securities acceptable to the user
     * @param deadline The validity period of this transaction
     * @param baseTx { types.BaseTx }
     * @returns
     */
    addLiquidity(max_token: types.Coin, exact_standard_amt: string, min_liquidity: string, deadline: number, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * remove liquidity
     * @param withdraw_liquidity The minimum number of liquid securities acceptable to the user
     * @param min_token  Upper limit of Token of mortgages acceptable to users
     * @param min_standard_amt Number of standard specified by the user
     * @param deadline The validity period of this transaction
     * @param baseTx { types.BaseTx }
     * @returns
    */
    removeLiquidity(withdraw_liquidity: types.Coin, min_token: string, min_standard_amt: string, deadline: number, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * swap order
     * @param input The token sold by the user
     * @param output The token that the user buys back
     * @param deadline The validity period of this transaction
     * @param is_buy_order buy or sell
     * @param baseTx { types.BaseTx }
     * @returns
    */
    swapOrder(input: types.Coin, output: types.Coin, is_buy_order: boolean, deadline: number, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     *
     * Query liquidity by id
     * @param id The liquidity id
     * @returns
    */
    queryLiquidity(id: string): Promise<types.Liquidity>;
}
