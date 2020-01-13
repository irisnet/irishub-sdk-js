import { Sdk } from '../sdk';
import { Crypto } from '../utils/crypto';
import * as is from 'is_js';
import * as types from '../types';
import * as Amino from '@irisnet/amino-js';
import * as AminoTypes from '@irisnet/amino-js/types';
import SdkError from '../errors';
import Utils from '../utils/utils';
import { MsgSend, MsgBurn, MsgSetMemoRegexp } from '../types/bank';

export class Bank {
  sdk: Sdk;
  constructor(sdk: Sdk) {
    this.sdk = sdk;
  }

  getCoinType(tokenName: string) {
    // TODO
  }

  /**
   * Get account info from blockchain
   * @param address Bech32 address
   * @returns { Promise<AminoTypes.BaseAccount> }
   */
  getAccount(address: string): Promise<AminoTypes.BaseAccount> {
    return this.sdk.rpcClient.abciQuery<AminoTypes.BaseAccount>(
      'custom/acc/account',
      {
        Address: address,
      }
    );
  }

  getTokenStats(tokenID?: string): Promise<types.TokenStats> {
    return this.sdk.rpcClient.abciQuery<types.TokenStats>(
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
    if (!Crypto.checkAddress(to, this.sdk.config.bech32Prefix)) {
      throw new SdkError('Invalid bech32 address');
    }

    const from = this.sdk.keys.show(baseTx.from);

    const msgs: types.Msg[] = [
      new MsgSend(
        [{ address: from, coins: amount }],
        [{ address: to, coins: amount }]
      ),
    ];

    return this.sdk.tx.buildAndSend(msgs, baseTx);
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
    const from = this.sdk.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgBurn(from, amount)];

    return this.sdk.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Set Memo Regexp
   * @param to Recipient bech32 address
   * @param amount Coins to be sent
   * @param baseTx { types.BaseTx }
   * @returns { Promise<types.ResultBroadcastTx> }
   */
  async setMemoRegexp(
    memoRegexp: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const from = this.sdk.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgSetMemoRegexp(from, memoRegexp)];

    return this.sdk.tx.buildAndSend(msgs, baseTx);
  }
}
