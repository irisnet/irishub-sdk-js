import { Client } from '../client';
import * as types from '../types';
import * as is from 'is_js';
import {
  MsgSetWithdrawAddress,
  MsgWithdrawValidatorRewardsAll,
  MsgWithdrawDelegatorReward,
  MsgWithdrawDelegatorRewardsAll,
} from '../types/distribution';

export class Distribution {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  queryRewards(address: string): Promise<types.Rewards> {
    return this.client.rpcClient.abciQuery<types.Rewards>(
      'custom/distr/rewards',
      {
        address: address,
      }
    );
  }

  /**
   * Set withdraw address
   * @param withdrawAddr Bech32 address
   * @param baseTx { types.BaseTx }
   * @returns { Promise<types.ResultBroadcastTx> }
   */
  async setWithdrawAddr(
    withdrawAddr: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgSetWithdrawAddress(from, withdrawAddr)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Withdraw rewards
   * @param isValidator also withdraw validator's commission
   * @param onlyFromValidator only withdraw from this validator address
   * @param baseTx { types.BaseTx }
   * @returns { Promise<types.ResultBroadcastTx> }
   */
  async withdrawRewards(
    isValidator: boolean,
    onlyFromValidator: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const from = this.client.keys.show(baseTx.from);
    let msgs: types.Msg[];
    if (isValidator) {
      msgs = [new MsgWithdrawValidatorRewardsAll(from)];
    } else if (is.not.empty(onlyFromValidator)) {
      msgs = [new MsgWithdrawDelegatorReward(from, onlyFromValidator)];
    } else {
      msgs = [new MsgWithdrawDelegatorRewardsAll(from)];
    }
    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
