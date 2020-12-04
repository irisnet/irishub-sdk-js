"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staking = void 0;
const types = require("../types");
const errors_1 = require("../errors");
const types_1 = require("../types");
const utils_1 = require("../utils");
/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.irisnet.org/docs/features/stake.html)
 *
 * @category Modules
 * @since v0.17
 */
class Staking {
    /** @hidden */
    constructor(client) {
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
    queryDelegation(delegatorAddr, validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/delegation', {
            DelegatorAddr: delegatorAddr,
            ValidatorAddr: validatorAddr,
        });
    }
    /**
     * Query all delegations made from one delegator
     *
     * @param delegatorAddr Bech32 delegator address
     * @returns
     * @since v0.17
     */
    queryDelegations(delegatorAddr) {
        return this.client.rpcClient.abciQuery('custom/staking/delegatorDelegations', {
            DelegatorAddr: delegatorAddr,
        });
    }
    /**
     * Query an unbonding-delegation record based on delegator and validator address
     *
     * @param delegatorAddr Bech32 delegator address
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryUnbondingDelegation(delegatorAddr, validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/unbondingDelegation', {
            DelegatorAddr: delegatorAddr,
            ValidatorAddr: validatorAddr,
        });
    }
    /**
     * Query all unbonding-delegations records for one delegator
     *
     * @param delegatorAddr Bech32 delegator address
     * @returns
     * @since v0.17
     */
    queryUnbondingDelegations(delegatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/delegatorUnbondingDelegations', {
            DelegatorAddr: delegatorAddr,
        });
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
    queryRedelegation(delegatorAddr, srcValidatorAddr, dstValidatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/redelegation', {
            DelegatorAddr: delegatorAddr,
            ValSrcAddr: srcValidatorAddr,
            ValDstAddr: dstValidatorAddr,
        });
    }
    /**
     * Query all redelegations records for one delegator
     *
     * @param delegatorAddr Bech32 delegator address
     * @returns
     * @since v0.17
     */
    queryRedelegations(delegatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/delegatorRedelegations', {
            DelegatorAddr: delegatorAddr,
        });
    }
    /**
     * Query all delegations to one validator
     *
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryDelegationsTo(validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/validatorDelegations', {
            ValidatorAddr: validatorAddr,
        });
    }
    /**
     * Query all unbonding delegatations from a validator
     *
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryUnbondingDelegationsFrom(validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/validatorUnbondingDelegations', {
            ValidatorAddr: validatorAddr,
        });
    }
    /**
     * Query all outgoing redelegatations from a validator
     *
     * @param validatorAddr Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryRedelegationsFrom(validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/validatorRedelegations', {
            ValidatorAddr: validatorAddr,
        });
    }
    /**
     * Query a validator
     *
     * @param address Bech32 validator address
     * @returns
     * @since v0.17
     */
    queryValidator(address) {
        return this.client.rpcClient.abciQuery('custom/staking/validator', {
            validator_addr: address,
        });
    }
    /**
     * Query for all validators
     * @param page Page number
     * @param size Page size
     * @returns
     * @since v0.17
     */
    queryValidators(page, size) {
        return this.client.rpcClient.abciQuery('custom/staking/validators', {
            Page: 1,
            Limit: 10,
            Status: 'Bonded'
        });
    }
    /**
     * Query the current staking pool values
     * @returns
     * @since v0.17
     */
    queryPool() {
        return this.client.rpcClient.abciQuery('custom/stake/pool');
    }
    /**
     * Query the current staking parameters information
     * @returns
     * @since v0.17
     */
    queryParams() {
        return this.client.rpcClient.abciQuery('custom/stake/parameters');
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
    delegate(validatorAddr, amount, baseTx) {
        const delegatorAddr = this.client.keys.show(baseTx.from);
        const msgs = [
            {
                type: types.TxType.MsgDelegate,
                value: {
                    delegator_address: delegatorAddr,
                    validator_address: validatorAddr,
                    amount
                }
            }
        ];
        return this.client.tx.buildAndSend(msgs, baseTx);
    }
    /**
     * Undelegate from a validator
     * @param validatorAddr Bech32 validator address
     * @param amount Amount to be undelegated from the validator
     * @param baseTx
     * @returns
     * @since v0.17
     */
    undelegate(validatorAddr, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const delegatorAddr = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgUndelegate,
                    value: {
                        delegator_address: delegatorAddr,
                        validator_address: validatorAddr,
                        amount
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Redelegate illiquid tokens from one validator to another
     * @param validatorSrcAddr Bech32 source validator address
     * @param validatorDstAddr Bech32 destination validator address
     * @param amount Amount to be redelegated
     * @param baseTx
     * @since v0.17
     */
    redelegate(validatorSrcAddr, validatorDstAddr, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const delegatorAddr = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgBeginRedelegate,
                    value: {
                        delegator_address: delegatorAddr,
                        validator_src_address: validatorSrcAddr,
                        validator_dst_address: validatorDstAddr,
                        amount
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Subscribe validator information updates
     * @param conditions Query conditions for the subscription { validatorAddress: string - The `iva` (or `fva` on testnets) prefixed bech32 validator address }
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */
    subscribeValidatorInfoUpdates(conditions, callback) {
        const queryBuilder = new types_1.EventQueryBuilder().addCondition(new types.Condition(types_1.EventKey.Action).eq(types_1.EventAction.EditValidator));
        if (conditions.validatorAddress) {
            queryBuilder.addCondition(new types.Condition(types_1.EventKey.DestinationValidator).eq(conditions.validatorAddress));
        }
        const subscription = this.client.eventListener.subscribeTx(queryBuilder, (error, data) => {
            if (error) {
                callback(error);
                return;
            }
            data === null || data === void 0 ? void 0 : data.tx.value.msg.forEach(msg => {
                if (msg.type !== 'irishub/stake/MsgEditValidator')
                    return;
                const msgEditValidator = msg;
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
        });
        return subscription;
    }
    /**
     * Subscribe validator set updates
     * @param conditions Query conditions for the subscription { validatorPubKeys: string[] - The `icp` (or `fcp` on testnets) prefixed bech32 validator consensus pubkey }
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */
    subscribeValidatorSetUpdates(conditions, callback) {
        // Add pubkeys to the set
        const listeningSet = new Set();
        if (conditions.validatorConsPubKeys) {
            conditions.validatorConsPubKeys.forEach(pubkey => {
                listeningSet.add(pubkey);
            });
        }
        // Subscribe notifications from blockchain
        const subscription = this.client.eventListener.subscribeValidatorSetUpdates((error, data) => {
            if (error) {
                callback(error);
            }
            data === null || data === void 0 ? void 0 : data.forEach(event => {
                const bech32Address = utils_1.Crypto.encodeAddress(event.address, this.client.config.bech32Prefix.ConsAddr);
                const bech32Pubkey = utils_1.Crypto.encodeAddress(utils_1.Utils.ab2hexstring(utils_1.Crypto.aminoMarshalPubKey(event.pub_key)), this.client.config.bech32Prefix.ConsPub);
                const update = {
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
                }
                else {
                    callback(undefined, update);
                }
            });
        });
        return subscription;
    }
    /**
     * TODO: Historical issue, irishub only accepts 10 decimal places due to `sdk.Dec`
     *
     * Removing on irishub v1.0
     * @deprecated
     * @hidden
     */
    appendZero(num, count) {
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
        throw new errors_1.SdkError('Not supported');
    }
}
exports.Staking = Staking;
//# sourceMappingURL=staking.js.map