import { Client } from '../client';
import * as types from '../types';
import {
  MsgAddLiquidity,
  AddLiquidityRequest,
  RemoveLiquidityRequest,
  MsgRemoveLiquidity,
  SwapOrderRequest,
  MsgSwapOrder,
} from '../types';

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
  constructor(client: Client) {
    this.client = client;
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
}
