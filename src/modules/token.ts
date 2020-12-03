import {Client} from '../client';
import * as types from '../types';
import * as is from 'is_js';
import {SdkError} from '../errors';

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
   * Query all tokens
   * @returns Token[]
   */
  queryTokens(): Promise<types.Token> {
    return this.client.rpcClient.abciQuery<types.Token>(
      'custom/token/tokens',{}
    );
  }

  /**
   * Query details of a group of tokens
   * @param owner The optional token owner address
   * @returns
   * @since v0.17
   */
  queryToken(owner?: string): Promise<types.Token[]> {
    return this.client.rpcClient.abciQuery<types.Token[]>(
      'custom/token/tokens',
      {

      }
    );
  }

  /**
   * Query issue a new token
   * @param IssueTokenTxParam
   * @returns
   */
  async issueToken(
    token: {
      symbol: string;
      name: string;
      min_unit: string;
      scale?: number;
      initial_supply?: number;
      max_supply?: number;
      mintable?: boolean;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const owner = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgIssueToken,
        value: Object.assign({owner}, token)
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
    token: {
      symbol: string;
      name?: string;
      max_supply?: number;
      mintable?: string;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const owner = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgEditToken,
        value: Object.assign({owner}, token)
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
    token: {
      symbol: string;
      amount: number;
      owner?: string;
      to?: string;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const owner = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgMintToken,
        value: Object.assign({owner}, token)
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
    token: {
      symbol: string;
      dst_owner: string;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const owner = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgTransferTokenOwner,
        value: Object.assign({src_owner: owner}, token)
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
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
