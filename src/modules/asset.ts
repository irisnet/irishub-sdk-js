import { Client } from '../client';
import * as types from '../types';
import * as is from 'is_js';
import { SdkError } from '../errors';

/**
 * IRISHub allows individuals and companies to create and issue their own tokens.
 *
 * [More Details](https://www.irisnet.org/docs/features/asset.html)
 *
 * @category Modules
 * @since v0.17
 */
export class Asset {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query details of a token
   * @param symbol The token symbol
   * @returns
   * @since v0.17
   */
  queryToken(symbol: string): Promise<types.fToken> {
    if (is.empty(symbol)) {
      throw new SdkError('symbol can not be empty');
    }
    return this.client.rpcClient.abciQuery<types.fToken>('custom/asset/token', {
      TokenId: this.getCoinName(symbol),
    });
  }

  /**
   * Query details of a group of tokens
   * @param owner The optional token owner address
   * @returns
   * @since v0.17
   */
  queryTokens(owner?: string): Promise<types.Token[]> {
    return this.client.rpcClient.abciQuery<types.Token[]>(
      'custom/asset/tokens',
      {
        Owner: owner,
      }
    );
  }

  /**
   * Query the asset related fees
   * @param symbol The token symbol
   * @returns
   * @since v0.17
   */
  queryFees(symbol: string): Promise<types.TokenFees> {
    return this.client.rpcClient.abciQuery<types.TokenFees>(
      'custom/asset/fees',
      {
        Symbol: symbol,
      }
    );
  }

  /**
   * Get coin name by denom
   *
   * **NOTE:** For iris units in irishub v0.17, only support `iris` and `iris-atto`
   *
   * @param denom
   * @since v0.17
   */
  private getCoinName(denom: string): string {
    denom = denom.toLowerCase();

    if (denom === types.IRIS || denom === types.IRIS_ATTO) {
      return types.IRIS;
    }

    if (
      !denom.startsWith(types.IRIS + '-') &&
      !denom.endsWith(types.MIN_UNIT_SUFFIX)
    ) {
      return denom;
    }

    return denom.substr(0, denom.indexOf(types.MIN_UNIT_SUFFIX));
  }
}
