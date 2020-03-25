import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as types from '../types';
import * as AminoTypes from '@irisnet/amino-js/types';
import { SdkError } from '../errors';
import { MsgSend, MsgBurn, MsgSetMemoRegexp } from '../types/bank';
import { EventQueryBuilder, EventKey, EventAction } from '../types';

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
  private client: Client;
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
  ): Promise<types.TxResult> {
    // Validate bech32 address
    if (!Crypto.checkAddress(to, this.client.config.bech32Prefix.AccAddr)) {
      throw new SdkError('Invalid bech32 address');
    }

    const from = this.client.keys.show(baseTx.from);

    const coins = await this.client.utils.toMinCoins(amount);
    const msgs: types.Msg[] = [
      new MsgSend([{ address: from, coins }], [{ address: to, coins }]),
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
  ): Promise<types.TxResult> {
    const from = this.client.keys.show(baseTx.from);

    const coins = await this.client.utils.toMinCoins(amount);
    const msgs: types.Msg[] = [new MsgBurn(from, coins)];

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
  ): Promise<types.TxResult> {
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
    conditions: { from?: string; to?: string },
    callback: (error?: SdkError, data?: types.EventDataMsgSend) => void
  ): types.EventSubscription {
    const queryBuilder = new EventQueryBuilder().addCondition(
      new types.Condition(EventKey.Action).eq(EventAction.Send)
    );

    if (conditions.from) {
      queryBuilder.addCondition(
        new types.Condition(EventKey.Sender).eq(conditions.from)
      );
    }
    if (conditions.to) {
      queryBuilder.addCondition(new types.Condition(EventKey.Recipient).eq(conditions.to));
    }

    const subscription = this.client.eventListener.subscribeTx(
      queryBuilder,
      (error, data) => {
        if (error) {
          callback(error);
          return;
        }
        data?.tx.value.msg.forEach(msg => {
          if (msg.type !== 'irishub/bank/Send') return;
          const msgSend = msg as types.MsgSend;
          const height = data.height;
          const hash = data.hash;
          msgSend.value.inputs.forEach((input: types.Input, index: number) => {
            const from = input.address;
            const to = msgSend.value.outputs[index].address;
            const amount = input.coins;
            callback(undefined, { height, hash, from, to, amount });
          });
        });
      }
    );
    return subscription;
  }
}
