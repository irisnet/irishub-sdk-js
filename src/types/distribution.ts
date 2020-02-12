import { Coin, Msg } from './types';

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

export interface Rewards {
  total: Coin[];
  delegations: DelegationRewards[];
  commission: Coin[];
}

export interface DelegationRewards {
  validator: string;
  reward: Coin[];
}
