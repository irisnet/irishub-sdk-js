import { Client } from '../client';
import * as types from '../types';
import { DepositRequest, WithdrawRequest, SwapOrderRequest, Coin } from '../types';
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
    private formatUniABSPrefix;
    /** @hidden */
    private mathConfig;
    /** @hidden */
    private math;
    /** @hidden */
    constructor(client: Client);
    /**
     *
     * Query liquidity by id
     * @param id The liquidity id
     * @returns
     * @since v1.0
     */
    queryLiquidity(id: string): Promise<types.Liquidity>;
    /**
     * Add liquidity by exact iris amount, calculated token and liquidity amount
     * @param request Add liquidity request
     * @param baseTx
     * @returns
     * @since v1.0
     */
    deposit(request: DepositRequest, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Remove liquidity by exact liquidity amount, calculated iris and token amount
     * @param request Remove liquidity request
     * @param baseTx
     * @returns
     * @since v1.0
     */
    withdraw(request: WithdrawRequest, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Swap coin by exact output, calculated input
     * @param request Buy order request
     * @param baseTx
     * @returns
     * @since v1.0
     */
    buy(request: SwapOrderRequest, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Swap coin by exact input, calculated output
     * @param request Sell order request
     * @param baseTx
     * @returns
     * @since v1.0
     */
    sell(request: SwapOrderRequest, baseTx: types.BaseTx): Promise<types.TxResult>;
    private getUniDenomFromDenoms;
    /**
     * Calculate the amount of another token to be received based on the exact amount of tokens sold
     * @param exactSoldCoin sold coin
     * @param soldTokenDenom received token's denom
     * @returns output token amount to be received
     * @since v1.0
     */
    calculateWithExactInput(exactSoldCoin: Coin, boughtTokenDenom: string): Promise<number>;
    /**
     * Calculate the amount of the token to be paid based on the exact amount of the token to be bought
     * @param exactBoughtCoin
     * @param soldTokenDenom
     * @return: input amount to be paid
     * @since v1.0
     */
    calculateWithExactOutput(exactBoughtCoin: Coin, soldTokenDenom: string): Promise<number>;
    /**
     * Calculate token amount and liquidity amount of the deposit request by exact standard token amount
     * @param exactStdAmt Exact standard token amount to be deposited
     * @param calculatedDenom The token denom being calculated
     * @returns The [[DepositRequest]], max_token = -1 means the liquidity pool is empty, users can deposit any amount of the token
     * @since v1.0
     */
    calculateDeposit(exactStdAmt: number, calculatedDenom: string): Promise<DepositRequest>;
    /**
     * Calculate how many tokens can be withdrawn by exact liquidity amount
     * @param exactWithdrawLiquidity Exact liquidity amount to be withdrawn
     * @returns The [[WithdrawRequest]]
     * @since v1.0
     */
    calculateWithdraw(exactWithdrawLiquidity: Coin): Promise<WithdrawRequest>;
    private calculateDoubleWithExactInput;
    private calculateDoubleWithExactOutput;
    private getInputPrice;
    private getOutputPrice;
}
