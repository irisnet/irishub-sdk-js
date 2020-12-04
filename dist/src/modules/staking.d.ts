import { Client } from '../client';
import * as types from '../types';
import { SdkError } from '../errors';
/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.irisnet.org/docs/features/stake.html)
 *
 * @category Modules
 * @since v0.17
 */
export declare class Staking {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Query a delegation based on delegator address and validator address
     *
     * @param delegatorAddr Bech32 delegator address
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryDelegation(delegatorAddr: string, validatorAddr: string): Promise<types.Delegation>;
    /**
     * Query all delegations made from one delegator
     *
     * @param delegatorAddr Bech32 delegator address
     * @returns
     * @since v0.17
     */
    queryDelegations(delegatorAddr: string): Promise<types.Delegation[]>;
    /**
     * Query an unbonding-delegation record based on delegator and validator address
     *
     * @param delegatorAddr Bech32 delegator address
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryUnbondingDelegation(delegatorAddr: string, validatorAddr: string): Promise<types.UnbondingDelegation>;
    /**
     * Query all unbonding-delegations records for one delegator
     *
     * @param delegatorAddr Bech32 delegator address
     * @returns
     * @since v0.17
     */
    queryUnbondingDelegations(delegatorAddr: string): Promise<types.UnbondingDelegation[]>;
    /**
     * Query a redelegation record based on delegator and a source and destination validator address
     *
     * @param delegatorAddr Bech32 delegator address
     * @param srcValidatorAddr Bech32 source validator address
     * @param dstValidatorAddr Bech32 destination validator address
     * @returns
     * @since v0.17
     */
    queryRedelegation(delegatorAddr: string, srcValidatorAddr: string, dstValidatorAddr: string): Promise<types.Redelegation[]>;
    /**
     * Query all redelegations records for one delegator
     *
     * @param delegatorAddr Bech32 delegator address
     * @returns
     * @since v0.17
     */
    queryRedelegations(delegatorAddr: string): Promise<types.Redelegation[]>;
    /**
     * Query all delegations to one validator
     *
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryDelegationsTo(validatorAddr: string): Promise<types.Delegation[]>;
    /**
     * Query all unbonding delegatations from a validator
     *
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryUnbondingDelegationsFrom(validatorAddr: string): Promise<types.UnbondingDelegation[]>;
    /**
     * Query all outgoing redelegatations from a validator
     *
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryRedelegationsFrom(validatorAddr: string): Promise<types.Redelegation[]>;
    /**
     * Query a validator
     *
     * @param address Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryValidator(address: string): Promise<types.Validator>;
    /**
     * Query for all validators
     * @param page Page number
     * @param size Page size
     * @returns
     * @since v0.17
     */
    queryValidators(page: number, size?: 100): Promise<types.Validator[]>;
    /**
     * Query the current staking pool values
     * @returns
     * @since v0.17
     */
    queryPool(): Promise<types.StakingPool>;
    /**
     * Query the current staking parameters information
     * @returns
     * @since v0.17
     */
    queryParams(): Promise<types.StakingParams>;
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
