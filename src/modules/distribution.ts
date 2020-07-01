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
 * @since v0.17
 */
export class Distribution {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query all the rewards of a validator or a delegator
   * @param address Bech32 account address
   * @returns
   * @since v0.17
   */
  queryRewards(address: string): Promise<types.Rewards> {
    return this.client.rpcClient.abciQuery<types.Rewards>(
      'custom/distr/rewards',
      {
        address,
      }
    );
  }

  /**
   * Get the address of which the delegator receives the rewards
   * @param delegatorAddress Bech32 account address
   * @returns
   * @since v0.17
   */
  queryWithdrawAddr(delegatorAddress: string): Promise<string> {
    return this.client.rpcClient.abciQuery<string>(
      'custom/distr/withdraw_addr',
      {
        delegator_address: delegatorAddress,
      }
    );
  }

  /**
   * Set another address to receive the rewards instead of using the delegator address
   * @param withdrawAddress Bech32 account address
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async setWithdrawAddr(
    withdrawAddress: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgSetWithdrawAddress(from, withdrawAddress),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Withdraw rewards to the withdraw-address(default to the delegator address, you can set to another address via [[setWithdrawAddr]])
   * @param baseTx { types.BaseTx }
   * @param onlyFromValidator only withdraw from this validator address
   * @param isValidator also withdraw validator's commission, can be set to `true` only if the `onlyFromValidator` is specified
   * @returns { Promise<types.TxResult> }
   * @since v0.17
   */
  async withdrawRewards(
    baseTx: types.BaseTx,
    onlyFromValidator = '',
    isValidator = false
  ): Promise<types.TxResult> {
    const from = this.client.keys.show(baseTx.from);
    let msgs: types.Msg[];
    if (is.not.empty(onlyFromValidator)) {
      if (isValidator) {
        msgs = [new MsgWithdrawValidatorRewardsAll(onlyFromValidator)];
      } else {
        msgs = [new MsgWithdrawDelegatorReward(from, onlyFromValidator)];
      }
    } else {
      msgs = [new MsgWithdrawDelegatorRewardsAll(from)];
    }
    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
