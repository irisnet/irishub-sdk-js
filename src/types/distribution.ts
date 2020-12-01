import {Coin, Msg, TxType} from './types';
import * as pbs from "./proto-types";


export interface MsgSetWithdrawAddressParam {
  delegator_addr: string;
  withdraw_addr: string;
}

/**
 * Msg struct for changing the withdraw address for a delegator (or validator self-delegation)
 * @hidden
 */
export class MsgSetWithdrawAddress extends Msg {
  value: MsgSetWithdrawAddressParam;

  constructor(msg: MsgSetWithdrawAddressParam) {
    super(TxType.MsgSetWithdrawAddress);
    this.value = msg;
  }

  getModel(): any {
    return new pbs.distributionProtocolBuffer.MsgSetWithdrawAddress()
      .setDelegatorAddress(this.value.delegator_addr)
      .setWithdrawAddress(this.value.withdraw_addr);
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for delegation withdraw for all of the delegator's delegations
 * @hidden
 */
export class MsgWithdrawDelegatorRewardsAll extends Msg {
  value: {
    delegator_addr: string;
  };

  constructor(delegatorAddr: string) {
    super('irishub/distr/MsgWithdrawDelegationRewardsAll')
    this.value = {
      delegator_addr: delegatorAddr,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

export interface WithdrawDelegatorRewardMsgParam {
  delegatorAddr: string;
  validatorAddr: string;
}

/**
 * Msg struct for delegation withdraw from a single validator
 * @hidden
 */
export class MsgWithdrawDelegatorReward extends Msg {
  value: WithdrawDelegatorRewardMsgParam;

  constructor(msg: WithdrawDelegatorRewardMsgParam) {
    super(TxType.MsgWithdrawDelegatorReward);
    this.value = msg;
  }

  getModel(): any {
    return new pbs.distributionProtocolBuffer.MsgWithdrawDelegatorReward()
      .setDelegatorAddress(this.value.delegatorAddr)
      .setValidatorAddress(this.value.validatorAddr);
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for validator withdraw
 * @hidden
 */
export class MsgWithdrawValidatorRewardsAll extends Msg {
  value: {
    validator_addr: string;
  };

  constructor(validatorAddr: string) {
    super('irishub/distr/MsgWithdrawValidatorRewardsAll')
    this.value = {
      validator_addr: validatorAddr,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/** Common rewards struct */
export interface Rewards {
  /** Total rewards */
  total: Coin[];
  /** Delegation rewards */
  delegations: DelegationRewards[];
  /** Validator commission rewards */
  commission: Coin[];
}

/** Delegaion rewards */
export interface DelegationRewards {
  /** Delegation rewards from which validator */
  validator: string;
  /** Delegation rewards */
  reward: Coin[];
}
