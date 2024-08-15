import { Client } from '../client';
import * as types from '../types';
import * as is from 'is_js';
import { SdkError, CODES } from '../errors';

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
   * issue a new token
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
        value: Object.assign({ owner }, token)
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * edit a token existed
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
        value: Object.assign({ owner }, token)
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * mint some amount of token
   * @param MintTokenTxParam
   * @returns
   */
  async mintToken(
    token: {
      coin: types.Coin;
      owner?: string;
      to?: string;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const owner = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgMintToken,
        value: Object.assign({ owner }, token)
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * burn some amount of token
   * @param BurnTokenTxParam
   * @returns
   */
  async burnToken(
    coin: types.Coin,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgBurnToken,
        value: {
          coin,
          sender
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * transfer owner of token
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
        value: Object.assign({ src_owner: owner }, token)
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Swap Fee Token
   * @param SwapFeeTokenTxParam
   * @returns
   */
  async swapFeeToken(
    msg: {
      fee_paid: types.Coin,
      receiver?: string
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgSwapFeeToken,
        value: {
          ...msg,
          sender
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * @wapping some native token to its ERC20
   * @param receiver 
   * @param baseTx 
   * @returns 
   */
  SwapToERC20(
    msg: {
      amount: types.Coin,
      receiver: string,
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgSwapToERC20,
        value: {
          sender,
          ...msg,
        }
      }
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Swapping some ERC20 token to its native
   * @param receiver 
   * @param baseTx 
   * @returns 
   */
  SwapFromERC20(
    msg: {
      wanted_amount: types.Coin,
      receiver: string,
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type: types.TxType.MsgSwapFromERC20,
        value: {
          sender,
          ...msg,
        }
      }
    ]
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Query all tokens
   * @param owner The optional token owner address
   * @returns Token[]
   */
  queryTokens(owner?: string): Promise<types.Token[]> {
    const request = new types.token_query_pb.QueryTokensRequest();
    if (is.not.undefined(owner)) {
      request.setOwner(owner);
    }
    return new Promise(async (resolve, reject) => {
      const res = await this.client.rpcClient.protoQuery(
        '/irismod.token.Query/Tokens',
        request,
        types.token_query_pb.QueryTokensResponse
      ).catch(error => reject(error));;
      let deserializedData: types.Token[] = [];
      if (res && res.tokensList && is.array(res.tokensList)) {
        deserializedData = res.tokensList.map((item: { typeUrl: string, value: string }) => {
          return types.token_token_pb.Token.deserializeBinary(item.value).toObject()
        })
      }
      resolve(deserializedData);
    })

  }

  /**
   * Query details of a group of tokens
   * @param denom symbol of token
   * @returns
   * @since
   */

  queryToken(denom: string): Promise<types.Token | null> {
    if (is.undefined(denom)) {
      throw new SdkError('denom can not be empty')
    }
    const request = new types.token_query_pb.QueryTokenRequest();
    request.setDenom(denom);
    return new Promise(async (resolve, reject) => {
      const res = await this.client.rpcClient.protoQuery(
        '/irismod.token.Query/Token',
        request,
        types.token_query_pb.QueryTokenResponse
      ).catch(error => reject(error));
      let deserializedData: types.Token | null = null;
      if (res && res.token && res.token.value) {
        deserializedData = types.token_token_pb.Token.deserializeBinary(res.token.value).toObject()
      }
      resolve(deserializedData);
    })
  }

  /**
   * Query the token related fees
   * @param symbol The token symbol
   * @returns
   * @since
   */
  queryFees(symbol: string): Promise<types.TokenFees | null> {
    if (is.undefined(symbol)) {
      throw new SdkError('symbol can not be empty')
    }
    const request = new types.token_query_pb.QueryFeesRequest();
    request.setSymbol(symbol);
    return this.client.rpcClient.protoQuery(
      '/irismod.token.Query/Fees',
      request,
      types.token_query_pb.QueryFeesResponse
    );
  }

  /**
   * Query parameters of token tx
   * @param null
   * @returns
   * @since
   */
  queryParameters(): Promise<object> {
    const request = new types.token_query_pb.QueryParamsRequest();
    return this.client.rpcClient.protoQuery(
      '/irismod.token.Query/Params',
      request,
      types.token_query_pb.QueryParamsResponse
    );
  }

  /**
   * TotalBurn queries all the burnt coins
   * @param null
   * @returns
   * @since v3.4.0
   */
  queryTotalBurn(): Promise<{ burned_coins: types.Coin[] }> {
    const request = new types.token_query_pb.QueryTotalBurnRequest();
    return this.client.rpcClient.protoQuery(
      '/irismod.token.Query/TotalBurn',
      request,
      types.token_query_pb.QueryTotalBurnResponse
    );
  }

  /**
   * Balances queries the balance of the specified token (including erc20 balance)
   * @param denom 
   * @param address 
   * @returns
   * @since v3.4.0
   */
  queryBalances(denom: string, address: string): Promise<{ balances: types.Coin[] }> {
    const request = new types.token_query_pb.QueryBalancesRequest();
    request.setDenom(denom);
    request.setAddress(address);
    return this.client.rpcClient.protoQuery(
      '/irismod.token.Query/Balances',
      request,
      types.token_query_pb.QueryBalancesResponse
    );
  }
}
