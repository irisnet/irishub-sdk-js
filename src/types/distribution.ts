import {Coin, Msg, TxType} from './types';
import * as pbs from "./proto";
import * as is from 'is_js';
import { TxModelCreator } from '../helper';
import { SdkError, CODES } from "../errors";

/**
 * param struct for set withdraw address tx
 */
export interface SetWithdrawAddressTxParam {
  delegator_address: string;
  withdraw_address: string;
}


/**
 * param struct for withdraw delegator reward tx
 */
export interface WithdrawDelegatorRewardTxParam {
  delegator_address: string;
  validator_address: string;
}

/**
 * Msg struct for changing the withdraw address for a delegator (or validator self-delegation)
 * @hidden
 */
export class MsgSetWithdrawAddress extends Msg {
  value: SetWithdrawAddressTxParam;

  constructor(msg: SetWithdrawAddressTxParam) {
    super(TxType.MsgSetWithdrawAddress);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.distribution_tx_pb.MsgSetWithdrawAddress;
  }

  getModel(): any {
    return new ((this.constructor as any).getModelClass())()
      .setDelegatorAddress(this.value.delegator_address)
      .setWithdrawAddress(this.value.withdraw_address);
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.empty(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }
    if (is.empty(this.value.withdraw_address)) {
      throw new SdkError(`withdraw address can not be empty`);
    }

    return true;
  }
}

/**
 * Msg struct for delegation withdraw from a single validator
 * @hidden
 */
export class MsgWithdrawDelegatorReward extends Msg {
  value: WithdrawDelegatorRewardTxParam;

  constructor(msg: WithdrawDelegatorRewardTxParam) {
    super(TxType.MsgWithdrawDelegatorReward);
    this.value = msg;
  }

  getModel(): any {
    return new ((this.constructor as any).getModelClass())()
      .setDelegatorAddress(this.value.delegator_address)
      .setValidatorAddress(this.value.validator_address);
  }

  static getModelClass():any{
    return pbs.distribution_tx_pb.MsgWithdrawDelegatorReward;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.empty(this.value.delegator_address)) {
      throw new SdkError(`delegator address can not be empty`);
    }
    if (is.empty(this.value.validator_address)) {
      throw new SdkError(`validator address can not be empty`);
    }
    return true;
  }
}

/**
 * Msg struct forWithdraw Validator Commission.
 * @hidden
 */
export class MsgWithdrawValidatorCommission extends Msg {
  value: {validator_address:string};

  constructor(msg: {validator_address:string}) {
    super(TxType.MsgWithdrawValidatorCommission);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.distribution_tx_pb.MsgWithdrawValidatorCommission;
  }

  getModel(): any {
    return new ((this.constructor as any).getModelClass())()
      .setValidatorAddress(this.value.validator_address);
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.empty(this.value.validator_address)) {
      throw new SdkError(`validator address can not be empty`);
    }
    return true;
  }
}

/**
 * Msg struct Msg Fund Community Pool.
 * @hidden
 */
export class MsgFundCommunityPool extends Msg {
  value: {amount:Coin[], depositor:string};

  constructor(msg: {amount:Coin[], depositor:string}) {
    super(TxType.MsgFundCommunityPool);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.distribution_tx_pb.MsgFundCommunityPool;
  }

  getModel(): any {
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setDepositor(this.value.depositor);
    this.value.amount.forEach((item)=>{
        msg.addAmount(TxModelCreator.createCoinModel(item.denom, item.amount));
    });
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.empty(this.value.depositor)) {
      throw new SdkError(`depositor can not be empty`);
    }
    if (!(this.value.amount && this.value.amount.length)) {
      throw new SdkError(`amount can not be empty`);
    }
    return true;
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
