import { Client } from '../client';
import * as types from '../types';
import { SdkError } from '../errors';
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
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
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
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
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
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
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
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
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
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
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
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
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
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
        status?: string;
    }): Promise<types.Validator[]>;
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
     * Subscribe validator information updates
     * @param conditions Query conditions for the subscription { validatorAddress: string - The `iva` (or `fva` on testnets) prefixed bech32 validator address }
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */
    subscribeValidatorInfoUpdates(conditions: {
        validatorAddress?: string;
    }, callback: (error?: SdkError, data?: types.EventDataMsgEditValidator) => void): types.EventSubscription;
    /**
     * Subscribe validator set updates
     * @param conditions Query conditions for the subscription { validatorPubKeys: string[] - The `icp` (or `fcp` on testnets) prefixed bech32 validator consensus pubkey }
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */
    subscribeValidatorSetUpdates(conditions: {
        validatorConsPubKeys?: string[];
    }, callback: (error?: SdkError, data?: types.ExtendedEventDataValidatorSetUpdates) => void): types.EventSubscription;
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
