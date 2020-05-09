import { Client } from '../client';
import * as types from '../types';
import * as mathjs from 'mathjs';
import * as is from 'is_js';
import {
  MsgAddLiquidity,
  DepositRequest,
  WithdrawRequest,
  MsgRemoveLiquidity,
  SwapOrderRequest,
  MsgSwapOrder,
  STD_DENOM,
  Coin,
} from '../types';
import { SdkError } from '../errors';

/**
 * Implementation of the [Constant Product Market Maker Model](https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf) token exchange protocol on IRISHub.
 *
 * [More Details](https://www.irisnet.org/docs/features/coinswap.html)
 *
 * @category Modules
 */
export class Coinswap {
  /** @hidden */
  private client: Client;
  /** @hidden */
  private formatUniABSPrefix = 'uni:';
  /** @hidden */
  private mathConfig = {
    number: 'BigNumber', // Choose 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64, // 64 by default, only applicable for BigNumbers
  };
  /** @hidden */
  private math: Partial<mathjs.MathJsStatic>;

  /** @hidden */
  constructor(client: Client) {
    this.client = client;
    this.math = mathjs.create(mathjs.all, this.mathConfig);
  }

  /**
   *
   * Query liquidity by id
   * @param id The liquidity id
   * @returns
   * @since v1.0
   */
  queryLiquidity(id: string): Promise<types.Liquidity> {
    return this.client.rpcClient.abciQuery<types.Liquidity>(
      'custom/coinswap/liquidity',
      {
        id,
      }
    );
  }

  /**
   * Add liquidity by exact iris amount, calculated token and liquidity amount
   * @param request Add liquidity request
   * @param baseTx
   * @returns
   * @since v1.0
   */
  async deposit(
    request: DepositRequest,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgAddLiquidity(request, from)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Remove liquidity by exact liquidity amount, calculated iris and token amount
   * @param request Remove liquidity request
   * @param baseTx
   * @returns
   * @since v1.0
   */
  async withdraw(
    request: WithdrawRequest,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgRemoveLiquidity(request, from)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Swap coin by exact output, calculated input
   * @param request Buy order request
   * @param baseTx
   * @returns
   * @since v1.0
   */
  async buy(
    request: SwapOrderRequest,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const msgs: types.Msg[] = [new MsgSwapOrder(request, true)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Swap coin by exact input, calculated output
   * @param request Sell order request
   * @param baseTx
   * @returns
   * @since v1.0
   */
  async sell(
    request: SwapOrderRequest,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const msgs: types.Msg[] = [new MsgSwapOrder(request, true)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  private getUniDenomFromDenoms(denom1: string, denom2: string): string {
    if (denom1 === denom2) {
      throw new SdkError('input and output denomination are equal');
    }
    if (denom1 !== STD_DENOM && denom2 !== STD_DENOM) {
      throw new SdkError(
        `standard denom: '${STD_DENOM}', denom1: '${denom1}', denom2: '${denom2}'`
      );
    }
    if (denom1 === STD_DENOM) {
      return this.formatUniABSPrefix + denom2;
    }
    return this.formatUniABSPrefix + denom1;
  }

  /**
   * Calculate the amount of another token to be received based on the exact amount of tokens sold
   * @param exactSoldCoin sold coin
   * @param soldTokenDenom received token's denom
   * @returns output token amount to be received
   * @since v1.0
   */
  async calculateWithExactInput(
    exactSoldCoin: Coin,
    boughtTokenDenom: string
  ): Promise<number> {
    if (exactSoldCoin.denom !== STD_DENOM && boughtTokenDenom !== STD_DENOM) {
      return this.calculateDoubleWithExactInput(
        exactSoldCoin,
        boughtTokenDenom
      );
    }
    const uniDenom = this.getUniDenomFromDenoms(
      exactSoldCoin.denom,
      boughtTokenDenom
    );
    const reservePool = await this.queryLiquidity(uniDenom);
    let inputReserve: number;
    let outputReserve: number;
    if (reservePool.standard.denom === exactSoldCoin.denom) {
      inputReserve = Number(reservePool.standard.amount);
      outputReserve = Number(reservePool.token.amount);
    } else {
      inputReserve = Number(reservePool.token.amount);
      outputReserve = Number(reservePool.standard.amount);
    }

    if (is.not.positive(inputReserve)) {
      throw new SdkError(
        `liquidity pool insufficient funds: ['${inputReserve}${exactSoldCoin.denom}']`
      );
    }
    if (is.not.positive(outputReserve)) {
      throw new SdkError(
        `liquidity pool insufficient funds: ['${outputReserve}${boughtTokenDenom}']`
      );
    }

    const boughtAmt = this.getInputPrice(
        Number(exactSoldCoin.amount),
        inputReserve,
        outputReserve,
        Number(reservePool.fee)
    );

    if (is.above(Number(boughtAmt), outputReserve)) {
      throw new SdkError(
          `liquidity pool insufficient balance of '${boughtTokenDenom}', only bought: '${outputReserve}', got: '${inputReserve}'`
      );
    }

    return boughtAmt
  }

  /**
   * Calculate the amount of the token to be paid based on the exact amount of the token to be bought
   * @param exactBoughtCoin
   * @param soldTokenDenom
   * @return: input amount to be paid
   * @since v1.0
   */
  async calculateWithExactOutput(
    exactBoughtCoin: Coin,
    soldTokenDenom: string
  ): Promise<number> {
    if (exactBoughtCoin.denom !== STD_DENOM && soldTokenDenom !== STD_DENOM) {
      return this.calculateDoubleWithExactOutput(
        exactBoughtCoin,
        soldTokenDenom
      );
    }
    const uniDenom = this.getUniDenomFromDenoms(
      exactBoughtCoin.denom,
      soldTokenDenom
    );
    const reservePool = await this.queryLiquidity(uniDenom);
    let inputReserve: number;
    let outputReserve: number;
    if (reservePool.standard.denom === soldTokenDenom) {
      inputReserve = Number(reservePool.standard.amount);
      outputReserve = Number(reservePool.token.amount);
    } else {
      inputReserve = Number(reservePool.token.amount);
      outputReserve = Number(reservePool.standard.amount);
    }
    if (is.not.positive(inputReserve)) {
      throw new SdkError(
        `liquidity pool insufficient funds, actual ['${inputReserve}${soldTokenDenom}']`
      );
    }
    if (is.not.positive(outputReserve)) {
      throw new SdkError(
        `liquidity pool insufficient funds, actual ['${outputReserve}${exactBoughtCoin.denom}']`
      );
    }
    if (is.above(Number(exactBoughtCoin.amount), outputReserve)) {
      throw new SdkError(
        `liquidity pool insufficient balance of '${exactBoughtCoin.denom}', user expected: '${exactBoughtCoin.amount}', got: '${outputReserve}'`
      );
    }

    const paidAmt = this.getOutputPrice(
      Number(exactBoughtCoin.amount),
      inputReserve,
      outputReserve,
      Number(reservePool.fee)
    );

    if (is.infinite(paidAmt)) {
      throw new SdkError(
          `infinite amount of '${soldTokenDenom}' is required`
      );
    }

    return paidAmt;
  }

  /**
   * Calculate token amount and liquidity amount of the deposit request by exact standard token amount
   * @param exactStdAmt Exact standard token amount to be deposited
   * @param calculatedDenom The token denom being calculated
   * @returns The [[DepositRequest]], max_token = -1 means the liquidity pool is empty, users can deposit any amount of the token
   * @since v1.0
   */
  async calculateDeposit(
    exactStdAmt: number,
    calculatedDenom: string
  ): Promise<DepositRequest> {
    const reservePool = await this.queryLiquidity(
      this.getUniDenomFromDenoms(STD_DENOM, calculatedDenom)
    );

    // Initiate default deposit request, max_token = -1 means the liquidity pool is empty, users can deposit any amount of the token
    const depositRequest: DepositRequest = {
      exact_standard_amt: exactStdAmt,
      max_token: { denom: calculatedDenom, amount: '-1' },
      min_liquidity: exactStdAmt,
      deadline: 10000, // default 10s
    };

    if (
      is.positive(Number(reservePool.standard.amount)) &&
      is.positive(Number(reservePool.token.amount))
    ) {
      // ∆t = ⌊(∆i/i) * t⌋ + 1
      const deltaTokenAmt =
        this.math.floor!(
          this.math.multiply!(
            this.math.divide!(exactStdAmt, Number(reservePool.standard.amount)),
            Number(reservePool.token.amount)
          )
        ) + 1;
      depositRequest.max_token = {
        denom: calculatedDenom,
        amount: String(deltaTokenAmt),
      };
    }

    return depositRequest;
  }

  /**
   * Calculate how many tokens can be withdrawn by exact liquidity amount
   * @param exactWithdrawLiquidity Exact liquidity amount to be withdrawn
   * @returns The [[WithdrawRequest]]
   * @since v1.0
   */
  async calculateWithdraw(
    exactWithdrawLiquidity: Coin
  ): Promise<WithdrawRequest> {
    const reservePool = await this.queryLiquidity(exactWithdrawLiquidity.denom);

    // Initiate default withdraw request
    const withdrawRequest: WithdrawRequest = {
      min_standard_amt: 0,
      min_token: 0,
      withdraw_liquidity: exactWithdrawLiquidity,
      deadline: 10000, // default 10s
    };

    if (
      is.positive(Number(reservePool.standard.amount)) &&
      is.positive(Number(reservePool.token.amount))
    ) {
      // ∆i = ⌊(∆l/l) * i⌋
      const deltaStdAmt = this.math.floor!(
        this.math.multiply!(
          this.math.divide!(
            Number(exactWithdrawLiquidity.amount),
            Number(reservePool.liquidity.amount)
          ),
          Number(reservePool.standard.amount)
        )
      );
      withdrawRequest.min_standard_amt = deltaStdAmt;

      // ∆t = ⌊(∆l/l) * t⌋
      const deltaTokenAmt = this.math.floor!(
        this.math.multiply!(
          this.math.divide!(
            Number(exactWithdrawLiquidity.amount),
            Number(reservePool.liquidity.amount)
          ),
          Number(reservePool.token.amount)
        )
      );
      withdrawRequest.min_token = deltaTokenAmt;
    }

    return withdrawRequest;
  }

  private async calculateDoubleWithExactInput(
    exactSoldCoin: Coin,
    boughtTokenDenom: string
  ): Promise<number> {
    const boughtStandardAmount = await this.calculateWithExactInput(
      exactSoldCoin,
      STD_DENOM
    );
    const boughtTokenAmt = await this.calculateWithExactInput(
      { denom: STD_DENOM, amount: String(boughtStandardAmount) },
      boughtTokenDenom
    );
    return boughtTokenAmt;
  }

  private async calculateDoubleWithExactOutput(
    exactBoughtCoin: Coin,
    soldTokenDenom: string
  ): Promise<number> {
    const soldStandardAmount = await this.calculateWithExactOutput(
      exactBoughtCoin,
      STD_DENOM
    );
    const soldTokenAmt = await this.calculateWithExactOutput(
      { denom: STD_DENOM, amount: String(soldStandardAmount) },
      soldTokenDenom
    );
    return soldTokenAmt;
  }

  // getInputPrice returns the amount of coins bought (calculated) given the input amount being sold (exact)
  // The fee is included in the input coins being bought
  // https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf
  private getInputPrice(
    inputAmt: number,
    inputReserve: number,
    outputReserve: number,
    fee: number
  ): number {
    const deltaFee = 1 - fee;
    const inputAmtWithFee = this.math.multiply!(inputAmt, deltaFee);
    const numerator = this.math.multiply!(inputAmtWithFee, outputReserve);
    const denominator = this.math.add!(
      this.math.floor!(inputReserve),
      inputAmtWithFee
    );
    return this.math.floor!(Number(this.math.divide!(numerator, denominator)));
  }

  // getOutputPrice returns the amount of coins sold (calculated) given the output amount being bought (exact)
  // The fee is included in the output coins being bought
  private getOutputPrice(
    outputAmt: number,
    inputReserve: number,
    outputReserve: number,
    fee: number
  ): number {
    const deltaFee = 1 - fee;
    const numerator = this.math.multiply!(inputReserve, outputAmt);
    const denominator = this.math.multiply!(
      this.math.subtract!(outputReserve, outputAmt),
      deltaFee
    );
    return this.math.floor!(Number(this.math.divide!(numerator, denominator))) + 1;
  }
}
