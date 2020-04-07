import { Client } from '../client';
import * as types from '../types';
import * as mathjs from 'mathjs';
import * as is from 'is_js';
import {
  MsgAddLiquidity,
  AddLiquidityRequest,
  RemoveLiquidityRequest,
  MsgRemoveLiquidity,
  SwapOrderRequest,
  MsgSwapOrder,
  IRIS,
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
  async addLiquidity(
    request: AddLiquidityRequest,
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
  async removeLiquidity(
    request: RemoveLiquidityRequest,
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
    if (denom1 !== IRIS && denom2 !== IRIS) {
      throw new SdkError(
        `standard denom: '${IRIS}', denom1: '${denom1}', denom2: '${denom2}'`
      );
    }
    if (denom1 === IRIS) {
      return this.formatUniABSPrefix + denom2;
    }
    return this.formatUniABSPrefix + denom1;
  }

  /**
   * Calculate the amount of another token to be received based on the exact amount of tokens sold
   * @param exactSoldCoin sold coin
   * @param soldTokenDenom received token's denom
   * @returns token amount that will to be received
   */
  async calculateWithExactInput(
    exactSoldCoin: Coin,
    boughtTokenDenom: string
  ): Promise<number> {
    if (exactSoldCoin.denom !== IRIS && boughtTokenDenom !== IRIS) {
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
        `liquidity pool insufficient funds, actual ['${inputReserve}${exactSoldCoin.denom}']`
      );
    }
    if (is.not.positive(outputReserve)) {
      throw new SdkError(
        `liquidity pool insufficient funds, actual ['${outputReserve}${boughtTokenDenom}']`
      );
    }
    if (is.above(Number(exactSoldCoin.amount), inputReserve)) {
      throw new SdkError(
        `liquidity pool insufficient balance of '${exactSoldCoin.denom}', user expected: '${exactSoldCoin.amount}', got: '${inputReserve}'`
      );
    }
    return this.getInputPrice(
      Number(exactSoldCoin.amount),
      inputReserve,
      outputReserve,
      Number(reservePool.fee)
    );
  }

  /**
   * Calculate the amount of the token to be paid based on the exact amount of the token to be bought
   * @param exactBoughtCoin
   * @param soldTokenDenom
   * @return: actual amount of the token to be paid
   */
  async calculateWithExactOutput(
    exactBoughtCoin: Coin,
    soldTokenDenom: string
  ): Promise<number> {
    if (exactBoughtCoin.denom !== IRIS && soldTokenDenom !== IRIS) {
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

    return this.getOutputPrice(
      Number(exactBoughtCoin.amount),
      inputReserve,
      outputReserve,
      Number(reservePool.fee)
    );
  }

  private async calculateDoubleWithExactInput(
    exactSoldCoin: Coin,
    boughtTokenDenom: string
  ): Promise<number> {
    const boughtStandardAmount = await this.calculateWithExactInput(
      exactSoldCoin,
      IRIS
    );
    const boughtTokenAmt = await this.calculateWithExactInput(
      { denom: IRIS, amount: String(boughtStandardAmount) },
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
      IRIS
    );
    const soldTokenAmt = await this.calculateWithExactOutput(
      { denom: IRIS, amount: String(soldStandardAmount) },
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
    const inputAmtWithFee = this.math.multiply!(inputAmt, fee);
    const numerator = this.math.multiply!(inputAmtWithFee, outputReserve);
    const denominator = this.math.add!(
      this.math.floor!(inputReserve),
      inputAmtWithFee
    );
    return Number(this.math.divide!(numerator, denominator));
  }

  // getOutputPrice returns the amount of coins sold (calculated) given the output amount being bought (exact)
  // The fee is included in the output coins being bought
  private getOutputPrice(
    outputAmt: number,
    inputReserve: number,
    outputReserve: number,
    fee: number
  ): number {
    const numerator = this.math.multiply!(inputReserve, outputAmt);
    const denominator = this.math.multiply!(
      this.math.subtract!(outputReserve, outputAmt),
      fee
    );
    return Number(this.math.divide!(numerator, denominator));
  }
}
