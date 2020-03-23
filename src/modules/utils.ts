import { Client } from '../client';
import * as types from '../types';
import * as mathjs from 'mathjs';

/**
 * Utils for the IRISHub SDK
 * @category Modules
 */
export class Utils {
  /** @hidden */
  private client: Client;
  private tokenMap: Map<string, types.Token>;
  private mathConfig = {
    number: 'BigNumber', // Choose 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64, // 64 by default, only applicable for BigNumbers
  };
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
   */
  async toMinCoin(coin: types.Coin): Promise<types.Coin> {
    return new Promise<types.Coin>((resolve, reject) => {
      const amt = this.math.bignumber!(coin.amount);
      const token = this.tokenMap.get(coin.denom);
      if (token) {
        if (coin.denom === token.min_unit) return resolve(coin);
        return resolve({
          denom: token.min_unit,
          amount: this.math.multiply!(
            amt,
            this.math.pow!(10, token.scale)
          ).toString(),
        });
      }

      // If token not found in local memory, then query from the blockchain
      this.client.asset
        .queryToken(coin.denom)
        .then(token => {
          this.tokenMap.set(coin.denom, token);
          return this.toMinCoin(coin).then(coin => {
            resolve(coin);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Convert the coin array to min unit
   * @param coins Coin array to be converted
   * @returns
   */
  async toMinCoins(coins: types.Coin[]): Promise<types.Coin[]> {
    return new Promise<types.Coin[]>(resolve => {
      const promises = new Array<Promise<types.Coin>>();
      coins.forEach(amt => {
        const promise = this.toMinCoin(amt);
        promises.push(promise);
      });
      Promise.all(promises).then(coins => {
        resolve(coins);
      })
    });
  }

  /**
   * Convert the coin object to main unit
   *
   * @returns
   */
  async toMainCoin(coin: types.Coin): Promise<types.Coin> {
    return new Promise<types.Coin>((resolve, reject) => {
      const amt = this.math.bignumber!(coin.amount);
      const token = this.tokenMap.get(coin.denom);
      if (token) {
        if (coin.denom === token.symbol) return resolve(coin);
        return resolve({
          denom: token.symbol,
          amount: this.math.divide!(
            amt,
            this.math.pow!(10, token.scale)
          ).toString(),
        });
      }

      // If token not found in local memory, then query from the blockchain
      this.client.asset
        .queryToken(coin.denom)
        .then(token => {
          this.tokenMap.set(coin.denom, token);
          return this.toMainCoin(coin).then(coin => {
            resolve(coin);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Convert the coin array to main unit
   * @param coins Coin array to be converted
   * @returns
   */
  async toMainCoins(coins: types.Coin[]): Promise<types.Coin[]> {
    return new Promise<types.Coin[]>(resolve => {
      const promises = new Array<Promise<types.Coin>>();
      coins.forEach(amt => {
        const promise = this.toMainCoin(amt);
        promises.push(promise);
      });
      Promise.all(promises).then(coins => {
        resolve(coins);
      });
    });
  }
}
