import { Coin, Msg } from './types';

/**
 * Msg struct for changing the withdraw address for a delegator (or validator self-delegation)
 * @hidden
 */
export class MsgSetWithdrawAddress implements Msg {
  type: string;
  value: {
    delegator_addr: string;
    withdraw_addr: string;
  };

  constructor(delegator_addr: string, withdraw_addr: string) {
    this.type = 'irishub/distr/MsgModifyWithdrawAddress';
    this.value = {
      delegator_addr: delegator_addr,
      withdraw_addr: withdraw_addr,
    };
  }

  getSignBytes(): object {
    return this.value;
  }
}

/**
 * Msg struct for delegation withdraw for all of the delegator's delegations
 * @hidden
 */
export class MsgWithdrawDelegatorRewardsAll implements Msg {
  type: string;
  value: {
    delegator_addr: string;
  };

  constructor(delegator_addr: string) {
    this.type = 'irishub/distr/MsgWithdrawDelegationRewardsAll';
    this.value = {
      delegator_addr: delegator_addr,
    };
  }

  getSignBytes(): object {
    return this.value;
  }
}

/**
 * Msg struct for delegation withdraw from a single validator
 * @hidden
 */
export class MsgWithdrawDelegatorReward implements Msg {
  type: string;
  value: {
    delegator_addr: string;
    withdraw_addr: string;
  };

  constructor(delegator_addr: string, withdraw_addr: string) {
    this.type = 'irishub/distr/MsgWithdrawDelegationReward';
    this.value = {
      delegator_addr: delegator_addr,
      withdraw_addr: withdraw_addr,
    };
  }

  getSignBytes(): object {
    return this.value;
  }
}

/**
 * Msg struct for validator withdraw
 * @hidden
 */
export class MsgWithdrawValidatorRewardsAll implements Msg {
  type: string;
  value: {
    validator_addr: string;
  };

  constructor(validator_addr: string) {
    this.type = 'irishub/distr/MsgWithdrawValidatorRewardsAll';
    this.value = {
      validator_addr: validator_addr,
    };
  }

  getSignBytes(): object {
    return this.value;
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
