import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as is from 'is_js';
import * as types from '../types';
import * as Amino from '@irisnet/amino-js';
import * as AminoTypes from '@irisnet/amino-js/types';
import SdkError from '../errors';
import Utils from '../utils/utils';
import { MsgSend, MsgBurn, MsgSetMemoRegexp } from '../types/bank';

export class Bank {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  queryCoinType(tokenName: string) {
    // TODO
  }

  /**
   * Query account info from blockchain
   * @param address Bech32 address
   * @returns { Promise<AminoTypes.BaseAccount> }
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
   * Query token statics
   * @param tokenID Identity of the token
   * @returns { Promise<types.TokenStats> }
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
   * @returns { Promise<types.ResultBroadcastTx> }
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
   * @returns { Promise<types.ResultBroadcastTx> }
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
   * Set Memo Regexp
   * @param memoRegexp
   * @param baseTx { types.BaseTx }
   * @returns { Promise<types.ResultBroadcastTx> }
   */
  async setMemoRegexp(
    memoRegexp: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgSetMemoRegexp(from, memoRegexp)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
