import { Client } from '../client';
import * as types from '../types';

/**
 * IRISHub allows individuals and companies to create and issue their own tokens.
 *
 * [More Details](https://www.irisnet.org/docs/features/asset.html)
 *
 * @category Modules
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
   */
  queryToken(symbol: string): Promise<types.Token> {
    return this.client.rpcClient.abciQuery<types.Token>('custom/asset/token', {
      Symbol: symbol,
    });
  }

  /**
   * Query details of a group of tokens
   * @param owner The token owner address
   * @returns
   */
  queryTokens(owner: string): Promise<types.Token[]> {
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
   */
  queryFees(symbol: string): Promise<types.TokenFees> {
    return this.client.rpcClient.abciQuery<types.TokenFees>(
      'custom/asset/fees',
      {
        Symbol: symbol,
      }
    );
  }
}
