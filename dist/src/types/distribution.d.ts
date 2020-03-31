import { Coin, Msg } from './types';
/**
 * Msg struct for changing the withdraw address for a delegator (or validator self-delegation)
 * @hidden
 */
export declare class MsgSetWithdrawAddress implements Msg {
    type: string;
    value: {
        delegator_addr: string;
        withdraw_addr: string;
    };
    constructor(delegatorAddr: string, withdrawAddr: string);
    getSignBytes(): object;
}
/**
 * Msg struct for delegation withdraw for all of the delegator's delegations
 * @hidden
 */
export declare class MsgWithdrawDelegatorRewardsAll implements Msg {
    type: string;
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
export declare class MsgWithdrawDelegatorReward implements Msg {
    type: string;
    value: {
        delegator_addr: string;
        validator_addr: string;
    };
    constructor(delegatorAddr: string, validatorAddr: string);
    getSignBytes(): object;
}
/**
 * Msg struct for validator withdraw
 * @hidden
 */
export declare class MsgWithdrawValidatorRewardsAll implements Msg {
    type: string;
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
