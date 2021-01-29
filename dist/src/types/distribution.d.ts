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
 * Msg struct forWithdraw Validator Commission.
 * @hidden
 */
export declare class MsgWithdrawValidatorCommission extends Msg {
    value: {
        validator_address: string;
    };
    constructor(msg: {
        validator_address: string;
    });
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
 * Msg struct Msg Fund Community Pool.
 * @hidden
 */
export declare class MsgFundCommunityPool extends Msg {
    value: {
        amount: Coin[];
        depositor: string;
    };
    constructor(msg: {
        amount: Coin[];
        depositor: string;
    });
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
