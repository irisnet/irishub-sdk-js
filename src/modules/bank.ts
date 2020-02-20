import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as is from 'is_js';
import * as types from '../types';
import * as Amino from '@irisnet/amino-js';
import * as AminoTypes from '@irisnet/amino-js/types';
import SdkError from '../errors';
import Utils from '../utils/utils';
import { MsgSend, MsgBurn, MsgSetMemoRegexp } from '../types/bank';
import {
  EventQueryBuilder,
  EventKey,
  EventAction,
} from '../nets/event-listener';

/**
 * This module is mainly used to transfer coins between accounts,
 * query account balances, and provide common offline transaction signing and broadcasting methods.
 * In addition, the available units of tokens in the IRIShub system are defined using [coin-type](https://www.irisnet.org/docs/concepts/coin-type.html).
 *
 * [More Details](https://www.irisnet.org/docs/features/bank.html)
 *
 * @category Modules
 */
export class Bank {
  /** @hidden */
  client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /** @hidden */
  queryCoinType(tokenName: string) {
    // TODO
  }

  /**
   * Query account info from blockchain
   * @param address Bech32 address
   * @returns
   */
  queryAccount(address: string): Promise<AminoTypes.BaseAccount> {
    return this.client.rpcClient.abciQuery<AminoTypes.BaseAccount>(
      'custom/acc/account',
      {
        Address: address,
      }
    );
  }

  /**
   * Query the token statistic, including total loose tokens, total burned tokens and total bonded tokens.
   * @param tokenID Identity of the token
   * @returns
   */
  queryTokenStats(tokenID?: string): Promise<types.TokenStats> {
    return this.client.rpcClient.abciQuery<types.TokenStats>(
      'custom/acc/tokenStats',
      {
        TokenId: tokenID,
      }
    );
  }

  /**
   * Send coins
   * @param to Recipient bech32 address
   * @param amount Coins to be sent
   * @param baseTx { types.BaseTx }
   * @returns
   */
  async send(
    to: string,
    amount: types.Coin[],
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    // Validate bech32 address
    if (!Crypto.checkAddress(to, this.client.config.bech32Prefix)) {
      throw new SdkError('Invalid bech32 address');
    }

    const from = this.client.keys.show(baseTx.from);

    const msgs: types.Msg[] = [
      new MsgSend(
        [{ address: from, coins: amount }],
        [{ address: to, coins: amount }]
      ),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Burn coins
   * @param amount Coins to be burnt
   * @param baseTx { types.BaseTx }
   * @returns
   */
  async burn(
    amount: types.Coin[],
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgBurn(from, amount)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Set memo regexp for your own address, so that you can only receive coins from transactions with the corresponding memo.
   * @param memoRegexp
   * @param baseTx { types.BaseTx }
   * @returns
   */
  async setMemoRegexp(
    memoRegexp: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgSetMemoRegexp(from, memoRegexp)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Subscribe Send Txs
   * @param conditions Query conditions for the subscription
   * @param callback A function to receive notifications
   * @returns
   */
  subscribeSendTx(
    conditions: { sender?: string; recipient?: string },
    callback: (error?: SdkError, block?: types.EventDataResultTx) => void
  ): types.EventSubscription {
    const queryBuilder = new EventQueryBuilder().addCondition(
      EventKey.Action,
      EventAction.Send
    );

    if (conditions.sender) {
      queryBuilder.addCondition(EventKey.Sender, conditions.sender);
    }
    if (conditions.recipient) {
      queryBuilder.addCondition(EventKey.Recipient, conditions.recipient);
    }

    return this.client.eventListener.subscribeTx(queryBuilder, callback);
  }
}
