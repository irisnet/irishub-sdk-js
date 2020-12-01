import {Coin, Msg, Pubkey} from './types';
import {TxModelCreator} from "../utils";
import {TxType} from "./types";
import * as pbs from './proto-types';

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

export interface DelegateMsgParam {
  delegatorAddr: string;
  validatorAddr: string;
  amount: Coin;
}

/**
 * Msg struct for delegating to a validator
 * @hidden
 */
export class MsgDelegate extends Msg {
  value: DelegateMsgParam;

  constructor(msg: DelegateMsgParam) {
    super(TxType.MsgDelegate);
    this.value = msg;
  }

  getModel(): any {
    const msg = new pbs.stakingTxProtocolBuffer.MsgDelegate()
    msg.setDelegatorAddress(this.value.delegatorAddr)
      .setValidatorAddress(this.value.validatorAddr)
      .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
    return msg;
  }

  getSignBytes(): object {
    return this;
  }
}

export interface UndelegateMsgParam {
  delegatorAddr: string;
  validatorAddr: string;
  amount: Coin;
}

/**
 * Msg struct for undelegating from a validator
 * @hidden
 */
export class MsgUndelegate extends Msg {
  value: UndelegateMsgParam;

  constructor(msg: UndelegateMsgParam) {
    super(TxType.MsgUndelegate);
    this.value = msg;
  }

  getModel(): any {
    const msg = new pbs.stakingTxProtocolBuffer.MsgUndelegate()
    msg.setDelegatorAddress(this.value.delegatorAddr)
      .setValidatorAddress(this.value.validatorAddr)
      .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
    return msg;
  }

  getSignBytes(): object {
    return this.value;
  }
}


export interface RedelegateMsgParam {
  delegatorAddr: string;
  validatorSrcAddr: string;
  validatorDstAddr: string;
  amount: Coin;
}

/**
 * Msg struct for redelegating illiquid tokens from one validator to another
 * @hidden
 */
export class MsgRedelegate extends Msg {
  value: RedelegateMsgParam;

  constructor(msg: RedelegateMsgParam) {
    super(TxType.MsgBeginRedelegate);
    this.value = msg;
  }

  getModel(): any {
    const msg = new pbs.stakingTxProtocolBuffer.MsgBeginRedelegate();
    msg.setDelegatorAddress(this.value.delegatorAddr)
      .setValidatorSrcAddress(this.value.validatorSrcAddr)
      .setValidatorDstAddress(this.value.validatorDstAddr)
      .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));

    return msg;
  }

  getSignBytes(): object {
    return this.value;
  }
}

/**
 * Msg struct for updating validator informations
 * @hidden
 */
export class MsgEditValidator extends Msg {
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
    super('irishub/stake/MsgEditValidator');
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

export interface EventDataValidatorSet {
  address: string;
  pub_key: string;
  voting_power: string;
  proposer_priority: string;
}