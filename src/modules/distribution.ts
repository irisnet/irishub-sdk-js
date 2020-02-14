import { Client } from '../client';
import * as types from '../types';
import * as is from 'is_js';
import {
  MsgSetWithdrawAddress,
  MsgWithdrawValidatorRewardsAll,
  MsgWithdrawDelegatorReward,
  MsgWithdrawDelegatorRewardsAll,
} from '../types/distribution';

/**
 * This module is in charge of distributing collected transaction fee and inflated token to all validators and delegators.
 * To reduce computation stress, a lazy distribution strategy is brought in. lazy means that the benefit won't be paid directly to contributors automatically.
 * The contributors are required to explicitly send transactions to withdraw their benefit, otherwise, their benefit will be kept in the global pool.
 *
 * [More Details](https://www.irisnet.org/docs/features/distribution.html)
 * 
 * @category Modules
 */
export class Distribution {
  /** @hidden */
  client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query all the rewards of a validator or a delegator
   * @param address Bech32 account address
   * @returns
   */
  queryRewards(address: string): Promise<types.Rewards> {
    return this.client.rpcClient.abciQuery<types.Rewards>(
      'custom/distr/rewards',
      {
        address: address,
      }
    );
  }

  /**
   * Set another address to receive the rewards instead of using the delegator address
   * @param withdrawAddr Bech32 account address
   * @param baseTx
   * @returns
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
   * Withdraw rewards to the withdraw-address(default to the delegator address, you can set to another address via [[setWithdrawAddr]])
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
