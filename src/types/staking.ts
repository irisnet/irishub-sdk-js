import { Coin, Msg, Pubkey } from './types';

/** Validator details */
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

/** Validator commission */
export interface Commission {
  rate: string;
  max_rate: string;
  max_change_rate: string;
  update_time: string;
}

/** Validator basic information */
export interface ValidatorDescription {
  moniker: string;
  identity: string;
  website: string;
  details: string;
}

/** Staking statistics */
export interface StakingPool {
  /** Non-bonded tokens */
  loose_tokens: string;
  /** Bonded tokens */
  bonded_tokens: string;
}

/**
 * Gov params for Staking module
 *
 * [More Details](https://www.irisnet.org/docs/concepts/gov-params.html#parameters-in-stake)
 */
export interface StakingParams {
  /** How many blocks will it take for receiving the tokens since unbonding */
  unbonding_time: string;
  /** Maximum number of active validators */
  max_validators: number;
}

/** Delegation information */
export interface Delegation {
  delegator_addr: string;
  validator_addr: string;
  shares: string;
  height: string;
}

/** UnbondingDelegation information */
export interface UnbondingDelegation {
  tx_hash: string;
  delegator_addr: string;
  validator_addr: string;
  creation_height: string;
  min_time: string;
  initial_balance: Coin;
  balance: Coin;
}

/** Redelegation information */
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

/**
 * Msg struct for delegating to a validator
 * @hidden
 */
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

/**
 * Msg struct for undelegating from a validator
 * @hidden
 */
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

/**
 * Msg struct for redelegating illiquid tokens from one validator to another
 * @hidden
 */
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

/**
 * Msg struct for updating validator informations
 * @hidden
 */
export class MsgEditValidator implements Msg {
  type: string;
  value: {
    Description: ValidatorDescription;
    address: string;
    commission_rate: number;
  };

  constructor(
    description: ValidatorDescription,
    address: string,
    commissionRate: number
  ) {
    this.type = 'irishub/stake/MsgEditValidator';
    this.value = {
      Description: description,
      address,
      commission_rate: commissionRate,
    };
  }

  getSignBytes(): object {
    return this.value;
  }
}

export interface EventDataMsgEditValidator {
  height: string;
  hash: string;
  description: ValidatorDescription;
  address: string;
  commission_rate: number;
}