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
 * TokenizeShareRecord represents a tokenized delegation
 */
export interface TokenizeShareRecord {
    id: number;
    owner: string;
    /**
     * module account take the role of delegator
     */
    module_account: string;
    /**
     * validator delegated to for tokenize share record creation
     */
    validator: string;
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
export interface TokenSharesTxParam {
    delegator_address: string;
    validator_address: string;
    amount: Coin;
    tokenized_share_owner: string;
}
/**
 * Msg struct for tokenizeing a delegation
 */
export declare class MsgTokenizeShares extends Msg {
    value: TokenSharesTxParam;
    constructor(value: TokenSharesTxParam);
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
export interface RedeemTokensForSharesTxParam {
    delegator_address: string;
    amount: Coin;
}
/**
 * Msg struct for redeeming a tokenized share back into a native delegation
 */
export declare class MsgRedeemTokensForShares extends Msg {
    value: RedeemTokensForSharesTxParam;
    constructor(value: RedeemTokensForSharesTxParam);
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
export interface TransferTokenizeShareRecordTxParam {
    tokenize_share_record_id: number;
    sender: string;
    new_owner: string;
}
/**
 * Msg struct for transfering a tokenize share record
 */
export declare class MsgTransferTokenizeShareRecord extends Msg {
    value: TransferTokenizeShareRecordTxParam;
    constructor(value: TransferTokenizeShareRecordTxParam);
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
export interface DisableTokenizeSharesTxParam {
    delegator_address: string;
}
/**
 * Msg struct for preventing the tokenization of shares
 */
export declare class MsgDisableTokenizeShares extends Msg {
    value: DisableTokenizeSharesTxParam;
    constructor(value: DisableTokenizeSharesTxParam);
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
 * Msg struct for re-enabling tokenization of shares for a given address
 */
export interface EnableTokenizeSharesTxParam {
    delegator_address: string;
}
export declare class MsgEnableTokenizeShares extends Msg {
    value: EnableTokenizeSharesTxParam;
    constructor(value: EnableTokenizeSharesTxParam);
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
export interface ValidatorBondTxParam {
    delegator_address: string;
    validator_address: string;
}
export declare class MsgValidatorBond extends Msg {
    value: ValidatorBondTxParam;
    constructor(value: ValidatorBondTxParam);
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
export interface UnbondValidatorTxParam {
    validator_address: string;
}
export declare class MsgUnbondValidator extends Msg {
    value: UnbondValidatorTxParam;
    constructor(value: UnbondValidatorTxParam);
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
