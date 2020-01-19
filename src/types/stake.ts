import { Coin, Msg, Pubkey } from './types';

export interface Validator {
  operator_address: string;
  consensus_pubkey: string;
  jailed: boolean;
  status: number;
  tokens: string;
  delegator_shares: string;
  description: ValidatorDescription;
  bond_height: string;
  unbonding_height: string;
  unbonding_time: string;
  commission: Commission;
}

export interface Commission {
  rate: string;
  max_rate: string;
  max_change_rate: string;
  update_time: string;
}

export interface ValidatorDescription {
  moniker: string;
  identity: string;
  website: string;
  details: string;
}

export interface StakePool {
  loose_tokens: string;
  bonded_tokens: string;
}

export interface StakeParams {
  unbonding_time: string;
  max_validators: number;
}

export interface Delegation {
  delegator_addr: string;
  validator_addr: string;
  shares: string;
  height: string;
}

export interface UnbondingDelegation {
  tx_hash: string;
  delegator_addr: string;
  validator_addr: string;
  creation_height: string;
  min_time: string;
  initial_balance: Coin;
  balance: Coin;
}

export interface Redelegation {
  delegator_addr: string;
  validator_src_addr: string;
  validator_dst_addr: string;
  creation_height: string;
  min_time: string;
  initial_balance: Coin;
  balance: Coin;
  shares_src: string;
  shares_dst: string;
}

export class MsgDelegate implements Msg {
  type: string;
  value: {
    delegator_addr: string;
    validator_addr: string;
    delegation: Coin;
  };

  constructor(delegatorAddr: string, validatorAddr: string, delegation: Coin) {
    this.type = 'irishub/stake/MsgDelegate';
    this.value = {
      delegator_addr: delegatorAddr,
      validator_addr: validatorAddr,
      delegation: delegation,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

export class MsgUndelegate implements Msg {
  type: string;
  value: {
    delegator_addr: string;
    validator_addr: string;
    shares_amount: string;
  };

  constructor(
    delegatorAddr: string,
    validatorAddr: string,
    sharesAmount: string
  ) {
    this.type = 'irishub/stake/BeginUnbonding';
    this.value = {
      delegator_addr: delegatorAddr,
      validator_addr: validatorAddr,
      shares_amount: sharesAmount,
    };
  }

  getSignBytes(): object {
    return this.value;
  }
}

export class MsgRedelegate implements Msg {
  type: string;
  value: {
    delegator_addr: string;
    validator_src_addr: string;
    validator_dst_addr: string;
    shares_amount: string;
  };

  constructor(
    delegatorAddr: string,
    validatorSrcAddr: string,
    validatorDstAddr: string,
    sharesAmount: string
  ) {
    this.type = 'irishub/stake/BeginRedelegate';
    this.value = {
      delegator_addr: delegatorAddr,
      validator_src_addr: validatorSrcAddr,
      validator_dst_addr: validatorDstAddr,
      shares_amount: sharesAmount,
    };
  }

  getSignBytes(): object {
    return {
      delegator_addr: this.value.delegator_addr,
      validator_src_addr: this.value.validator_src_addr,
      validator_dst_addr: this.value.validator_dst_addr,
      shares: this.value.shares_amount,
    };
  }
}
