import { Coin, Msg } from './types';
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
export declare class MsgDelegate extends Msg {
    value: DelegateTxParam;
    constructor(msg: DelegateTxParam);
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
 * Msg struct for undelegating from a validator
 * @hidden
 */
export declare class MsgUndelegate extends Msg {
    value: UndelegateTxParam;
    constructor(msg: UndelegateTxParam);
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
 * Msg struct for redelegating illiquid tokens from one validator to another
 * @hidden
 */
export declare class MsgRedelegate extends Msg {
    value: RedelegateTxParam;
    constructor(msg: RedelegateTxParam);
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
 * Msg struct for updating validator informations
 * @hidden
 */
export declare class MsgEditValidator extends Msg {
    value: {
        Description: ValidatorDescription;
        address: string;
        commission_rate: number;
    };
    constructor(description: ValidatorDescription, address: string, commissionRate: number);
    getSignBytes(): object;
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
