import { Client } from '../client';
import * as types from '../types';
import * as mathjs from 'mathjs';

/**
 * Utils for the IRISHub SDK
 * @category Modules
 * @since v0.17
 */
export class Utils {
  /** @hidden */
  private client: Client;
  /** @hidden */
  private tokenMap: Map<string, types.Token>;
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
    this.tokenMap = new Map<string, types.Token>();
    this.math = mathjs.create(mathjs.all, this.mathConfig);
  }

  /**
   * Convert the coin object to min unit
   *
   * @param coin Coin object to be converted
   * @returns
   * @since v0.17
   */
  async toMinCoin(coin: types.Coin): Promise<types.Coin> {
    const amt = this.math.bignumber!(coin.amount);
    const token = this.tokenMap.get(coin.denom);
    if (token) {
      if (coin.denom === token.min_unit) return coin;
      return {
        denom: token.min_unit,
        amount: this.math.multiply!(
          amt,
          this.math.pow!(10, token.scale)
        ).toString(),
      };
    }

    // If token not found in local memory, then query from the blockchain
    return this.client.token.queryToken(coin.denom).then(token => {
      if (token) {
        this.tokenMap.set(coin.denom, token!);
      }
      return this.toMinCoin(coin);
    });
  }

  /**
   * Convert the coin array to min unit
   * @param coins Coin array to be converted
   * @returns
   * @since v0.17
   */
  async toMinCoins(coins: types.Coin[]): Promise<types.Coin[]> {
    const promises = new Array<Promise<types.Coin>>();
    coins.forEach(amt => {
      const promise = this.toMinCoin(amt);
      promises.push(promise);
    });
    return Promise.all(promises).then(coins => {
      return coins;
    });
  }

  /**
   * Convert the coin object to main unit
   *
   * @returns
   * @since v0.17
   */
  async toMainCoin(coin: types.Coin): Promise<types.Coin> {
    const amt = this.math.bignumber!(coin.amount);
    const token = this.tokenMap.get(coin.denom);
    if (token) {
      if (coin.denom === token.symbol) return coin;
      return {
        denom: token.symbol,
        amount: this.math.divide!(
          amt,
          this.math.pow!(10, token.scale)
        ).toString(),
      };
    }

    // If token not found in local memory, then query from the blockchain
    return this.client.token.queryToken(coin.denom).then(token => {
      if (token) {
        this.tokenMap.set(coin.denom, token!);
      }
      return this.toMainCoin(coin);
    });
  }

  /**
   * Convert the coin array to main unit
   * @param coins Coin array to be converted
   * @returns
   * @since v0.17
   */
  async toMainCoins(coins: types.Coin[]): Promise<types.Coin[]> {
    const promises = new Array<Promise<types.Coin>>();
    coins.forEach(amt => {
      const promise = this.toMainCoin(amt);
      promises.push(promise);
    });
    return Promise.all(promises).then(coins => {
      return coins;
    });
  }
}
