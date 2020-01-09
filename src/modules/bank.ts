import { Sdk } from '../sdk';
import { Crypto } from '../utils/crypto';
import * as is from 'is_js';
import * as types from '../types';
import * as Amino from '@irisnet/amino-js';
import * as AminoTypes from '@irisnet/amino-js/types';
import SdkError from '../errors';
import Utils from '../utils/utils';

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
    // Build account query params
    const params: types.AbciQueryRequest = {
      path: 'custom/acc/account',
      data: Utils.obj2hexstring({
        Address: address,
      }),
    };

    return this.sdk.rpcClient.abciQuery<AminoTypes.BaseAccount>(params);
  }

  getTokenStats(tokenId: string): Promise<types.TokenStats> {
    // Build account query params
    const params: types.AbciQueryRequest = {
      path: 'custom/acc/tokenStats',
      data: Utils.obj2hexstring({
        TokenId: tokenId,
      }),
    };

    return this.sdk.rpcClient.abciQuery<types.TokenStats>(params);
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

    const inputs: types.Input[] = [{ address: from, coins: amount }];
    const outputs: types.Output[] = [{ address: to, coins: amount }];

    const msgSend: types.MsgSend = {
      inputs: inputs,
      outputs: outputs,
    };

    const msgs: types.Msg[] = [
      {
        type: 'irishub/bank/Send',
        value: msgSend,
      },
    ];

    // Build Unsigned Tx
    const unsignedTx = this.sdk.auth.newStdTx(msgs, baseTx);

    // Sign Tx
    const signedTx = await this.sdk.tx.sign(
      unsignedTx,
      baseTx.from,
      baseTx.password
    );

    // Broadcast Tx
    switch (baseTx.mode) {
      case types.BroadcastMode.Commit:
        return this.sdk.tx.broadcastTxCommit(signedTx);
      case types.BroadcastMode.Sync:
        return this.sdk.tx.broadcastTxSync(signedTx).then(response => {
          return types.newResultBroadcastTx(response.hash);
        });
      default:
        return this.sdk.tx.broadcastTxAsync(signedTx).then(response => {
          return types.newResultBroadcastTx(response.hash);
        });
    }
  }
}
