import {Client} from '../client';
import * as types from '../types';
import {SdkError} from '../errors';
import {MsgDelegate, MsgUndelegate, MsgRedelegate} from '../types/staking';
import {EventQueryBuilder, EventKey, EventAction} from '../types';
import {Utils, Crypto} from '../utils';

/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.irisnet.org/docs/features/stake.html)
 *
 * @category Modules
 * @since v0.17
 */
export class Staking {
    /** @hidden */
    private client: Client;

    /** @hidden */
    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Query a delegation based on delegator address and validator address
     *
     * @param delegatorAddr Bech32 delegator address
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryDelegation(
        delegatorAddr: string,
        validatorAddr: string
    ): Promise<types.Delegation> {
        return this.client.rpcClient.abciQuery<types.Delegation>(
            'custom/stake/delegation',
            {
                DelegatorAddr: delegatorAddr,
                ValidatorAddr: validatorAddr,
            }
        );
    }

    /**
     * Query all delegations made from one delegator
     *
     * @param delegatorAddr Bech32 delegator address
     * @returns
     * @since v0.17
     */
    queryDelegations(delegatorAddr: string): Promise<types.Delegation[]> {
        return this.client.rpcClient.abciQuery<types.Delegation[]>(
            'custom/stake/delegatorDelegations',
            {
                DelegatorAddr: delegatorAddr,
            }
        );
    }

    /**
     * Query an unbonding-delegation record based on delegator and validator address
     *
     * @param delegatorAddr Bech32 delegator address
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryUnbondingDelegation(
        delegatorAddr: string,
        validatorAddr: string
    ): Promise<types.UnbondingDelegation> {
        return this.client.rpcClient.abciQuery<types.UnbondingDelegation>(
            'custom/stake/unbondingDelegation',
            {
                DelegatorAddr: delegatorAddr,
                ValidatorAddr: validatorAddr,
            }
        );
    }

    /**
     * Query all unbonding-delegations records for one delegator
     *
     * @param delegatorAddr Bech32 delegator address
     * @returns
     * @since v0.17
     */
    queryUnbondingDelegations(
        delegatorAddr: string
    ): Promise<types.UnbondingDelegation[]> {
        return this.client.rpcClient.abciQuery<types.UnbondingDelegation[]>(
            'custom/stake/delegatorUnbondingDelegations',
            {
                DelegatorAddr: delegatorAddr,
            }
        );
    }

    /**
     * Query a redelegation record based on delegator and a source and destination validator address
     *
     * @param delegatorAddr Bech32 delegator address
     * @param srcValidatorAddr Bech32 source validator address
     * @param dstValidatorAddr Bech32 destination validator address
     * @returns
     * @since v0.17
     */
    queryRedelegation(
        delegatorAddr: string,
        srcValidatorAddr: string,
        dstValidatorAddr: string
    ): Promise<types.Redelegation[]> {
        return this.client.rpcClient.abciQuery<types.Redelegation[]>(
            'custom/stake/redelegation',
            {
                DelegatorAddr: delegatorAddr,
                ValSrcAddr: srcValidatorAddr,
                ValDstAddr: dstValidatorAddr,
            }
        );
    }

    /**
     * Query all redelegations records for one delegator
     *
     * @param delegatorAddr Bech32 delegator address
     * @returns
     * @since v0.17
     */
    queryRedelegations(delegatorAddr: string): Promise<types.Redelegation[]> {
        return this.client.rpcClient.abciQuery<types.Redelegation[]>(
            'custom/stake/delegatorRedelegations',
            {
                DelegatorAddr: delegatorAddr,
            }
        );
    }

    /**
     * Query all delegations to one validator
     *
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryDelegationsTo(validatorAddr: string): Promise<types.Delegation[]> {
        return this.client.rpcClient.abciQuery<types.Delegation[]>(
            'custom/stake/validatorDelegations',
            {
                ValidatorAddr: validatorAddr,
            }
        );
    }

    /**
     * Query all unbonding delegatations from a validator
     *
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryUnbondingDelegationsFrom(
        validatorAddr: string
    ): Promise<types.UnbondingDelegation[]> {
        return this.client.rpcClient.abciQuery<types.UnbondingDelegation[]>(
            'custom/stake/validatorUnbondingDelegations',
            {
                ValidatorAddr: validatorAddr,
            }
        );
    }

    /**
     * Query all outgoing redelegatations from a validator
     *
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryRedelegationsFrom(validatorAddr: string): Promise<types.Redelegation[]> {
        return this.client.rpcClient.abciQuery<types.Redelegation[]>(
            'custom/stake/validatorRedelegations',
            {
                ValidatorAddr: validatorAddr,
            }
        );
    }

    /**
     * Query a validator
     *
     * @param address Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryValidator(address: string): Promise<types.Validator> {
        return this.client.rpcClient.abciQuery<types.Validator>(
            'custom/stake/validator',
            {
                ValidatorAddr: address,
            }
        );
    }

    /**
     * Query for all validators
     * @param page Page number
     * @param size Page size
     * @returns
     * @since v0.17
     */
    queryValidators(page: number, size?: 100): Promise<types.Validator[]> {
        return this.client.rpcClient.abciQuery<types.Validator[]>(
            'custom/stake/validators',
            {
                Page: page,
                Size: size,
            }
        );
    }

    /**
     * Query the current staking pool values
     * @returns
     * @since v0.17
     */
    queryPool(): Promise<types.StakingPool> {
        return this.client.rpcClient.abciQuery<types.StakingPool>(
            'custom/stake/pool'
        );
    }

    /**
     * Query the current staking parameters information
     * @returns
     * @since v0.17
     */
    queryParams(): Promise<types.StakingParams> {
        return this.client.rpcClient.abciQuery<types.StakingParams>(
            'custom/stake/parameters'
        );
    }

    /**
     * Delegate liquid tokens to an validator
     *
     * @param validatorAddr Bech32 validator address
     * @param amount Amount to be delegated to the validator
     * @param baseTx
     * @returns
     * @since v0.17
     */
    delegate(
        validatorAddr: string,
        amount: types.Coin,
        baseTx: types.BaseTx
    ): Promise<types.TxResult> {
        const delegatorAddr = this.client.keys.show(baseTx.from);
        const msgs: any[] = [
            {
                type:types.TxType.MsgDelegate,
                value: {
                    delegatorAddr,
                    validatorAddr,
                    delegation: amount
                }
            }
        ];
        return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * Undelegate from a validator
     * @param validatorAddr Bech32 validator address
     * @param amount Amount to be unbonded from the validator
     * @param baseTx
     * @returns
     * @since v0.17
     */
    async undelegate(
        validatorAddr: string,
        amount: string,
        baseTx: types.BaseTx
    ): Promise<types.TxResult> {
        const delegatorAddr = this.client.keys.show(baseTx.from);
        const validator = await this.queryValidator(validatorAddr);

        const shares =
            Number(amount) *
            (Number(validator.tokens) / Number(validator.delegator_shares));
        const msgs: types.Msg[] = [
            new MsgUndelegate(
                delegatorAddr,
                validatorAddr,
                this.appendZero(String(shares), 10)
            ),
        ];
        return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * Redelegate illiquid tokens from one validator to another
     * @param validatorSrcAddr Bech32 source validator address
     * @param validatorDstAddr Bech32 destination validator address
     * @param amount Amount to be redelegated
     * @param baseTx
     * @since v0.17
     */
    async redelegate(
        validatorSrcAddr: string,
        validatorDstAddr: string,
        amount: string,
        baseTx: types.BaseTx
    ): Promise<types.TxResult> {
        const delegatorAddr = this.client.keys.show(baseTx.from);
        const srcValidator = await this.queryValidator(validatorSrcAddr);

        const shares =
            Number(amount) *
            (Number(srcValidator.tokens) / Number(srcValidator.delegator_shares));
        const msgs: types.Msg[] = [
            new MsgRedelegate(
                delegatorAddr,
                validatorSrcAddr,
                validatorDstAddr,
                this.appendZero(String(shares), 10)
            ),
        ];
        return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * Subscribe validator information updates
     * @param conditions Query conditions for the subscription { validatorAddress: string - The `iva` (or `fva` on testnets) prefixed bech32 validator address }
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */
    subscribeValidatorInfoUpdates(
        conditions: { validatorAddress?: string },
        callback: (error?: SdkError, data?: types.EventDataMsgEditValidator) => void
    ): types.EventSubscription {
        const queryBuilder = new EventQueryBuilder().addCondition(
            new types.Condition(EventKey.Action).eq(EventAction.EditValidator)
        );

        if (conditions.validatorAddress) {
            queryBuilder.addCondition(
                new types.Condition(EventKey.DestinationValidator).eq(
                    conditions.validatorAddress
                )
            );
        }

        const subscription = this.client.eventListener.subscribeTx(
            queryBuilder,
            (error, data) => {
                if (error) {
                    callback(error);
                    return;
                }
                data?.tx.value.msg.forEach(msg => {
                    if (msg.type !== 'irishub/stake/MsgEditValidator') return;
                    const msgEditValidator = msg as types.MsgEditValidator;
                    const height = data.height;
                    const hash = data.hash;
                    const description = msgEditValidator.value.Description;
                    const address = msgEditValidator.value.address;
                    const commission_rate = msgEditValidator.value.commission_rate;
                    callback(undefined, {
                        height,
                        hash,
                        description,
                        address,
                        commission_rate,
                    });
                });
            }
        );
        return subscription;
    }

    /**
     * Subscribe validator set updates
     * @param conditions Query conditions for the subscription { validatorPubKeys: string[] - The `icp` (or `fcp` on testnets) prefixed bech32 validator consensus pubkey }
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */
    subscribeValidatorSetUpdates(
        conditions: { validatorConsPubKeys?: string[] },
        callback: (
            error?: SdkError,
            data?: types.ExtendedEventDataValidatorSetUpdates
        ) => void
    ): types.EventSubscription {
        // Add pubkeys to the set
        const listeningSet = new Set<string>();
        if (conditions.validatorConsPubKeys) {
            conditions.validatorConsPubKeys.forEach(pubkey => {
                listeningSet.add(pubkey);
            });
        }

        // Subscribe notifications from blockchain
        const subscription = this.client.eventListener.subscribeValidatorSetUpdates(
            (error, data) => {
                if (error) {
                    callback(error);
                }

                data?.forEach(event => {
                    const bech32Address = Crypto.encodeAddress(
                        event.address,
                        this.client.config.bech32Prefix.ConsAddr
                    );
                    const bech32Pubkey = Crypto.encodeAddress(
                        Utils.ab2hexstring(Crypto.aminoMarshalPubKey(event.pub_key)),
                        this.client.config.bech32Prefix.ConsPub
                    );
                    const update: types.ExtendedEventDataValidatorSetUpdates = {
                        address: event.address,
                        pub_key: event.pub_key,
                        voting_power: event.voting_power,
                        proposer_priority: event.proposer_priority,
                        bech32_address: bech32Address,
                        bech32_pubkey: bech32Pubkey,
                    };
                    if (listeningSet.size > 0) {
                        if (listeningSet.has(update.bech32_pubkey)) {
                            callback(undefined, update);
                        }
                    } else {
                        callback(undefined, update);
                    }
                });
            }
        );
        return subscription;
    }

    /**
     * TODO: Historical issue, irishub only accepts 10 decimal places due to `sdk.Dec`
     *
     * Removing on irishub v1.0
     * @deprecated
     * @hidden
     */
    private appendZero(num: string, count: number): string {
        const length = num.length;
        const dotIndex = num.lastIndexOf('.');
        if (dotIndex <= 0) {
            return this.appendZero(num + '.0', count);
        }
        if (length - (dotIndex + 1) < count) {
            return this.appendZero(num + '0', count);
        }
        return num;
    }

    /**
     * Create new validator initialized with a self-delegation to it
     *
     * ** Not Supported **
     */
    createValidator() {
        throw new SdkError('Not supported');
    }
}
