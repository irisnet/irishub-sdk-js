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
export class Token {
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
  queryToken(symbol: string): Promise<types.Token> {
    if (is.empty(symbol)) {
      throw new SdkError('symbol can not be empty');
    }
    return this.client.rpcClient.abciQuery<types.Token>('custom/token/token', {
      Symbol: this.getCoinName(symbol),
    });
  }

  /**
   * Query issue a new token
   * @param IssueTokenTxParam
   * @returns
   */
  async issueToken(
    token: types.IssueTokenTxParam,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const owner = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgIssueToken,
        value:Object.assign({owner},token)
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Query edit a token existed
   * @param EditTokenTxParam
   * @returns
   */
  async editToken(
    token: types.EditTokenTxParam,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const owner = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgEditToken,
        value:Object.assign({owner},token)
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Query mint some amount of token
   * @param MintTokenTxParam
   * @returns
   */
  async mintToken(
    token: types.MintTokenTxParam,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const owner = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgMintToken,
        value:Object.assign({owner},token)
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Query transfer owner of token
   * @param TransferTokenOwnerTxParam
   * @returns
   */
  async transferTokenOwner(
    token: types.TransferTokenOwnerTxParam,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const owner = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgTransferTokenOwner,
        value:Object.assign({src_owner:owner},token)
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Query details of a group of tokens
   * @param owner The optional token owner address
   * @returns
   * @since v0.17
   */
  queryTokens(owner?: string): Promise<types.Token[]> {
    return this.client.rpcClient.abciQuery<types.Token[]>(
      'custom/token/tokens',
      {
        Owner: owner,
      }
    );
  }

  /**
   * Query the token related fees
   * @param symbol The token symbol
   * @returns
   * @since v0.17
   */
  queryFees(symbol: string): Promise<types.TokenFees> {
    return this.client.rpcClient.abciQuery<types.TokenFees>(
      'custom/token/fees',
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

    if (denom === types.STD_DENOM || denom === types.IRIS_ATTO) {
      return types.STD_DENOM;
    }

    if (
      !denom.startsWith(types.STD_DENOM + '-') &&
      !denom.endsWith(types.MIN_UNIT_SUFFIX)
    ) {
      return denom;
    }

    return denom.substr(0, denom.indexOf(types.MIN_UNIT_SUFFIX));
  }
}
