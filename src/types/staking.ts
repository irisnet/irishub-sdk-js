import { Coin, Msg, Pubkey } from './types';
import { TxModelCreator } from "../helper";
import { TxType } from "./types";
import * as pbs from './proto';
import * as is from "is_js";
import { SdkError, CODES } from "../errors";

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
 * TokenizeShareRecord represents a tokenized delegation
 */
export interface TokenizeShareRecord {
  id: number
  owner: string
  /**
   * module account take the role of delegator
   */
  module_account: string
  /**
   * validator delegated to for tokenize share record creation
   */
  validator: string
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
 * param struct for delegate tx
 */
export interface DelegateTxParam {
  delegator_address: string;
  validator_address: string;
  amount: Coin;
}

/**
 * param struct for undelegate tx
 */
export interface UndelegateTxParam {
  delegator_address: string;
  validator_address: string;
  amount: Coin;
}

/**
 * param struct for redelegate tx
 */
export interface RedelegateTxParam {
  delegator_address: string;
  validator_src_address: string;
  validator_dst_address: string;
  amount: Coin;
}


/**
 * Msg struct for delegating to a validator
 * @hidden
 */
export class MsgDelegate extends Msg {
  value: DelegateTxParam;

  constructor(msg: DelegateTxParam) {
    super(TxType.MsgDelegate);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.staking_tx_pb.MsgDelegate;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setDelegatorAddress(this.value.delegator_address)
      .setValidatorAddress(this.value.validator_address)
      .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }
    if (is.undefined(this.value.validator_address)) {
      throw new SdkError(`validator address can not be empty`);
    }
    return true;
  }
}



/**
 * Msg struct for undelegating from a validator
 * @hidden
 */
export class MsgUndelegate extends Msg {
  value: UndelegateTxParam;

  constructor(msg: UndelegateTxParam) {
    super(TxType.MsgUndelegate);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.staking_tx_pb.MsgUndelegate;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setDelegatorAddress(this.value.delegator_address)
      .setValidatorAddress(this.value.validator_address)
      .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }
    if (is.undefined(this.value.validator_address)) {
      throw new SdkError(`validator address can not be empty`);
    }
    return true;
  }
}



/**
 * Msg struct for redelegating illiquid tokens from one validator to another
 * @hidden
 */
export class MsgRedelegate extends Msg {
  value: RedelegateTxParam;

  constructor(msg: RedelegateTxParam) {
    super(TxType.MsgBeginRedelegate);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.staking_tx_pb.MsgBeginRedelegate;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setDelegatorAddress(this.value.delegator_address)
      .setValidatorSrcAddress(this.value.validator_src_address)
      .setValidatorDstAddress(this.value.validator_dst_address)
      .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }
    if (is.undefined(this.value.validator_src_address)) {
      throw new SdkError(`source validator address can not be empty`);
    }
    if (is.undefined(this.value.validator_dst_address)) {
      throw new SdkError(`destination validator address can not be empty`);
    }

    return true;
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

export interface TokenSharesTxParam {
  delegator_address: string
  validator_address: string
  amount: Coin
  tokenized_share_owner: string
}

/**
 * Msg struct for tokenizeing a delegation
 */
export class MsgTokenizeShares extends Msg {
  value: TokenSharesTxParam;

  constructor(value: TokenSharesTxParam) {
    super(TxType.MsgTokenizeShares);
    this.value = value;
  }

  static getModelClass() {
    return pbs.staking_tx_pb.MsgTokenizeShares;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setDelegatorAddress(this.value.delegator_address)
      .setValidatorAddress(this.value.validator_address)
      .setTokenizedShareOwner(this.value.tokenized_share_owner)
      .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }
    if (is.undefined(this.value.validator_address)) {
      throw new SdkError(`validator address can not be empty`);
    }
    if (is.undefined(this.value.tokenized_share_owner)) {
      throw new SdkError(`tokenized share owner can not be empty`);
    }

    return true;
  }
}

export interface RedeemTokensForSharesTxParam {
  delegator_address: string
  amount: Coin
}

/**
 * Msg struct for redeeming a tokenized share back into a native delegation
 */
export class MsgRedeemTokensForShares extends Msg {
  value: RedeemTokensForSharesTxParam;

  constructor(value: RedeemTokensForSharesTxParam) {
    super(TxType.MsgRedeemTokensForShares);
    this.value = value;
  }

  static getModelClass() {
    return pbs.staking_tx_pb.MsgRedeemTokensForShares;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setDelegatorAddress(this.value.delegator_address)
      .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }

    return true;
  }
}

export interface TransferTokenizeShareRecordTxParam {
  tokenize_share_record_id: number
  sender: string
  new_owner: string
}

/**
 * Msg struct for transfering a tokenize share record
 */
export class MsgTransferTokenizeShareRecord extends Msg {
  value: TransferTokenizeShareRecordTxParam

  constructor(value: TransferTokenizeShareRecordTxParam) {
    super(TxType.MsgTransferTokenizeShareRecord);
    this.value = value;
  }

  static getModelClass() {
    return pbs.staking_tx_pb.MsgTransferTokenizeShareRecord;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setTokenizeShareRecordId(this.value.tokenize_share_record_id)
      .setSender(this.value.sender)
      .setNewOwner(this.value.new_owner)
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.tokenize_share_record_id)) {
      throw new SdkError(`tokenize share record id can not be empty`);
    }
    if (is.undefined(this.value.sender)) {
      throw new SdkError('sender address can not be empty')
    }
    if (is.undefined(this.value.new_owner)) {
      throw new SdkError('new owner address can not be empty')
    }

    return true;
  }
}

export interface DisableTokenizeSharesTxParam {
  delegator_address: string
}

/**
 * Msg struct for preventing the tokenization of shares
 */
export class MsgDisableTokenizeShares extends Msg {
  value: DisableTokenizeSharesTxParam
  constructor(value: DisableTokenizeSharesTxParam) {
    super(TxType.MsgDisableTokenizeShares);
    this.value = value;
  }

  static getModelClass() {
    return pbs.staking_tx_pb.MsgDisableTokenizeShares;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setDelegatorAddress(this.value.delegator_address)
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }

    return true;
  }
}

/**
 * Msg struct for re-enabling tokenization of shares for a given address
 */
export interface EnableTokenizeSharesTxParam {
  delegator_address: string
}

export class MsgEnableTokenizeShares extends Msg {
  value: EnableTokenizeSharesTxParam

  constructor(value: EnableTokenizeSharesTxParam) {
    super(TxType.MsgEnableTokenizeShares);
    this.value = value;
  }

  static getModelClass() {
    return pbs.staking_tx_pb.MsgEnableTokenizeShares;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setDelegatorAddress(this.value.delegator_address)
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }

    return true;
  }
}

export interface ValidatorBondTxParam {
  delegator_address: string
  validator_address: string
}

export class MsgValidatorBond extends Msg {
  value: ValidatorBondTxParam

  constructor(value: ValidatorBondTxParam) {
    super(TxType.MsgValidatorBond);
    this.value = value;
  }

  static getModelClass() {
    return pbs.staking_tx_pb.MsgValidatorBond;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setDelegatorAddress(this.value.delegator_address)
      .setValidatorAddress(this.value.validator_address)
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }
    if (is.undefined(this.value.validator_address)) {
      throw new SdkError(`validator address can not be empty`);
    }

    return true;
  }
}

export interface UnbondValidatorTxParam {
  validator_address: string
}

export class MsgUnbondValidator extends Msg {
  value: UnbondValidatorTxParam

  constructor(value: UnbondValidatorTxParam) {
    super(TxType.MsgUnbondValidator);
    this.value = value;
  }

  static getModelClass() {
    return pbs.staking_tx_pb.MsgUnbondValidator;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())();
    msg.setValidatorAddress(this.value.validator_address)
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.validator_address)) {
      throw new SdkError(`validator address can not be empty`);
    }
    return true;
  }
}
