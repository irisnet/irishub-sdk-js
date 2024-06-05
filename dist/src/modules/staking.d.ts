import { Client } from '../client';
import * as types from '../types';
/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.irisnet.org/docs/features/stake.html)
 *
 * @category Modules
 * @since
 */
export declare class Staking {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * performing the status transition for a validator from bonded to unbonding
     * @param baseTx
     */
    unbondValidator(baseTx: types.BaseTx): Promise<{}>;
    /**
     * MsgTokenizeShares tokenizes a delegation
     *
     * @param validatorAddr Bech32 validator address
     * @param amount Amount to be tokenized to the validator
     * @param tokenizedShareOwner tokenized share owner
     * @param baseTx
     * @returns
     * @since v3.4.0
     */
    tokenizeShares(validatorAddr: string, amount: types.Coin, tokenizedShareOwner: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * MsgRedeemTokensForShares redeems a tokenized share back into a native delegation
     *
     * @param amount amount to redeemes tokenized share
     * @param baseTx
     * @returns
     * @since v3.4.0
     */
    redeemTokensForShares(amount: types.Coin, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * transfer a tokenize share record
     *
     * @param tokenizeShareRecordId tokenize share record id
     * @param newOwner Bech32 new owner address
     * @param baseTx
     * @returns
     * @since v3.4.0
     */
    transferTokenizeShareRecord(tokenizeShareRecordId: number, newOwner: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * prevents the tokenization of shares for a given address
     *
     * @param baseTx
     * @returns
     * @since v3.4.0
     */
    disableTokenizeShares(baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * re-enables tokenization of shares for a given address
     *
     * @param baseTx
     * @returns
     * @since v3.4.0
     */
    enableTokenizeShares(baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * performing validator self-bond of delegated coins from a delegator to a validator
     *
     * @param validatorAddr Bech32 validator address
     * @param baseTx
     * @returns
     */
    validatorBond(validatorAddr: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Delegate liquid tokens to an validator
     *
     * @param validatorAddr Bech32 validator address
     * @param amount Amount to be delegated to the validator
     * @param baseTx
     * @returns
     * @since v0.17
     */
    delegate(validatorAddr: string, amount: types.Coin, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Undelegate from a validator
     * @param validatorAddr Bech32 validator address
     * @param amount Amount to be undelegated from the validator
     * @param baseTx
     * @returns
     * @since v0.17
     */
    undelegate(validatorAddr: string, amount: types.Coin, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Redelegate illiquid tokens from one validator to another
     * @param validatorSrcAddr Bech32 source validator address
     * @param validatorDstAddr Bech32 destination validator address
     * @param amount Amount to be redelegated
     * @param baseTx
     * @since v0.17
     */
    redelegate(validatorSrcAddr: string, validatorDstAddr: string, amount: types.Coin, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Query a delegation based on delegator address and validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */
    queryDelegation(delegator_addr: string, validator_addr: string): Promise<types.Delegation>;
    /**
     * Query all delegations made from one delegator
     *
     * @param pagination page info
     * @param delegator_addr Bech32 delegator address
     * @returns
     * @since
     */
    queryDelegations(query: {
        pagination?: types.Pagination;
        delegator_addr: string;
    }): Promise<types.Delegation[]>;
    /**
     * Query an unbonding-delegation record based on delegator and validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */
    queryUnbondingDelegation(delegator_addr: string, validator_addr: string): Promise<types.UnbondingDelegation>;
    /**
     * Query all unbonding-delegations records for one delegator
     *
     * @param pagination page info
     * @param delegator_addr Bech32 delegator address
     * @returns
     * @since
     */
    queryDelegatorUnbondingDelegations(query: {
        pagination?: types.Pagination;
        delegator_addr: string;
    }): Promise<types.UnbondingDelegation[]>;
    /**
     * Query a redelegation record based on delegator and a source and destination validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param src_validator_addr (optional) Bech32 source validator address
     * @param dst_validator_addr (optional) Bech32 destination validator address
     * @returns
     * @since
     */
    queryRedelegation(query: {
        pagination?: types.Pagination;
        delegator_addr: string;
        src_validator_addr?: string;
        dst_validator_addr?: string;
    }): Promise<types.Redelegation[]>;
    /**
     * Query all validators info for given delegator
     *
     * @param delegator_addr Bech32 delegator address
     * @param pagination page info
     * @returns
     * @since
     */
    queryDelegatorValidators(query: {
        pagination?: types.Pagination;
        delegator_addr: string;
    }): Promise<object>;
    /**
     * Query validator info for given delegator validator
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */
    queryDelegatorValidator(query: {
        delegator_addr: string;
        validator_addr: string;
    }): Promise<object>;
    /**
     * Query the historical info for given height.
     *
     * @param height defines at which height to query the historical info
     * @returns
     * @since
     */
    queryHistoricalInfo(query: {
        height: number;
    }): Promise<object>;
    /**
     * Query all delegations to one validator
     *
     * @param validator_addr Bech32 validator address
     * @param pagination page info
     * @returns
     * @since
     */
    queryValidatorDelegations(query: {
        pagination?: types.Pagination;
        validator_addr: string;
    }): Promise<types.Delegation[]>;
    /**
     * Query all unbonding delegatations from a validator
     *
     * @param validator_addr Bech32 validator address
     * @param pagination page info
     * @returns
     * @since
     */
    queryValidatorUnbondingDelegations(query: {
        pagination?: types.Pagination;
        validator_addr: string;
    }): Promise<types.UnbondingDelegation[]>;
    /**
     * Query a validator
     *
     * @param address Bech32 validator address
     * @returns
     * @since
     */
    queryValidator(address: string): Promise<types.Validator>;
    /**
     * Query for all validators
     * @param pagination page info
     * @param status validator status
     * @returns
     * @since
     */
    queryValidators(query: {
        pagination?: types.Pagination;
        status?: string;
    }): Promise<types.Validator[]>;
    /**
     * Query for individual tokenize share record information by share by id
     *
     * @param id record id
     * @returns
     * @since v3.4.0
     */
    queryTokenizeShareRecordById(id: number): Promise<types.TokenizeShareRecord>;
    /**
     * Query for individual tokenize share record information by share denom
     *
     * @param denom denom string
     * @returns
     * @since v3.4.0
     */
    queryTokenizeShareRecordByDenom(denom: string): Promise<types.TokenizeShareRecord>;
    /**
     * Query tokenize share records by address
     *
     * @param owner Bech32 owner address
     * @returns
     * @since v3.4.0
     */
    queryTokenizeShareRecordsOwned(owner: string): Promise<types.TokenizeShareRecord[]>;
    /**
     * Query for all tokenize share records
     *
     * @param pagination page info
     * @returns
     * @since v3.4.0
     */
    queryAllTokenizeShareRecords(pagination: types.Pagination): Promise<{
        records: types.TokenizeShareRecord[];
        pagination: types.Pagination;
    }>;
    /**
     * Query for last tokenize share record id
     *
     * @returns
     * @since v3.4.0
     */
    queryLastTokenizeShareRecordId(): Promise<{
        id: number;
    }>;
    /**
     * Query for total tokenized staked assets
     *
     * @returns
     * @since v3.4.0
     */
    queryTotalTokenizeSharedAssets(): Promise<{
        value: types.Coin;
    }>;
    /**
     * Query for total liquid staked (including tokenized shares or owned by an liquid staking provider)
     *
     * @returns
     * @since v3.4.0
     */
    queryTotalLiquidStaked(): Promise<{
        tokens: string;
    }>;
    /**
     * Query tokenize share locks
     *
     * @param address Bech32 address
     * @returns
     * @since v3.4.0
     */
    queryTokenizeShareLockInfo(address: string): Promise<{
        status: string;
        expiration_time: string;
    }>;
    /**
     * Query the current staking pool values
     * @returns
     * @since
     */
    queryPool(): Promise<types.StakingPool>;
    /**
     * Query the current staking parameters information
     * @returns
     * @since
     */
    queryParams(): Promise<types.StakingParams>;
    /**
     * TODO: Historical issue, irishub only accepts 10 decimal places due to `sdk.Dec`
     *
     * Removing on irishub v1.0
     * @deprecated
     * @hidden
     */
    private appendZero;
    /**
     * Create new validator initialized with a self-delegation to it
     *
     * ** Not Supported **
     */
    createValidator(): void;
}
