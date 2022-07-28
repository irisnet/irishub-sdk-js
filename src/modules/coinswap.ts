import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as types from '../types';
import { SdkError, CODES } from '../errors';
import { json } from 'mathjs';

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
   * add liquidity
   * @param max_token Upper limit of Token of mortgages acceptable to users
   * @param exact_standard_amt Number of standard specified by the user
   * @param min_liquidity The minimum number of liquid securities acceptable to the user
   * @param deadline The validity period of this transaction
   * @param baseTx { types.BaseTx }
   * @returns
   */
  async addLiquidity(
    max_token: types.Coin,
    exact_standard_amt: string,
    min_liquidity: string,
    deadline: number,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgAddLiquidity,
        value: {
          max_token,
          exact_standard_amt,
          min_liquidity,
          deadline,
          sender
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }


  /**
   * remove liquidity
   * @param withdraw_liquidity The minimum number of liquid securities acceptable to the user
   * @param min_token  Upper limit of Token of mortgages acceptable to users
   * @param min_standard_amt Number of standard specified by the user
   * @param deadline The validity period of this transaction
   * @param baseTx { types.BaseTx }
   * @returns
  */
  async removeLiquidity(
    withdraw_liquidity: types.Coin,
    min_token: string,
    min_standard_amt: string,
    deadline: number,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgRemoveLiquidity,
        value: {
          withdraw_liquidity,
          min_token,
          min_standard_amt,
          deadline,
          sender
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * swap order
   * @param input The token sold by the user
   * @param output The token that the user buys back
   * @param deadline The validity period of this transaction
   * @param is_buy_order buy or sell
   * @param baseTx { types.BaseTx }
   * @returns
  */
  async swapOrder(
    input: types.Coin,
    output: types.Coin,
    is_buy_order:boolean,
    deadline: number,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const address = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgSwapOrder,
        value: {
          input: {address,coin:input},
          output: {address,coin: output},
          deadline,
          is_buy_order
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }


  /**
   *
   * Query liquidity by id
   * @param id The liquidity id
   * @returns
  */
  queryLiquidity(id: string): Promise<types.Liquidity> {
    if (!id) {
      throw new SdkError("id can ont be empty");
    }
    const request = new types.coinswap_query_pb.QueryLiquidityPoolRequest();
    request.setLptDenom(id);

    return this.client.rpcClient.protoQuery(
      '/irismod.coinswap.Query/LiquidityPool',
      request,
      types.coinswap_query_pb.QueryLiquidityPoolResponse
    );
  }

}
