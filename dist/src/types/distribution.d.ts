import { Coin, Msg } from './types';
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
export declare class MsgSetWithdrawAddress extends Msg {
    value: SetWithdrawAddressTxParam;
    constructor(msg: SetWithdrawAddressTxParam);
    static getModelClass(): any;
    getModel(): any;
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate(): boolean;
}
/**
 * Msg struct for delegation withdraw for all of the delegator's delegations
 * @hidden
 */
export declare class MsgWithdrawDelegatorRewardsAll extends Msg {
    value: {
        delegator_addr: string;
    };
    constructor(delegatorAddr: string);
    getSignBytes(): object;
}
/**
 * Msg struct for delegation withdraw from a single validator
 * @hidden
 */
export declare class MsgWithdrawDelegatorReward extends Msg {
    value: WithdrawDelegatorRewardTxParam;
    constructor(msg: WithdrawDelegatorRewardTxParam);
    getModel(): any;
    static getModelClass(): any;
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate(): boolean;
}
/**
 * Msg struct for validator withdraw
 * @hidden
 */
export declare class MsgWithdrawValidatorRewardsAll extends Msg {
    value: {
        validator_addr: string;
    };
    constructor(validatorAddr: string);
    getSignBytes(): object;
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
