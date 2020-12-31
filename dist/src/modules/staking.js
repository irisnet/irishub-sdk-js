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
const is = require("is_js");
const helper_1 = require("../helper");
/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.irisnet.org/docs/features/stake.html)
 *
 * @category Modules
 * @since
 */
class Staking {
    /** @hidden */
    constructor(client) {
        this.client = client;
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
     * Query a delegation based on delegator address and validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */
    queryDelegation(delegator_addr, validator_addr) {
        if (is.undefined(validator_addr)) {
            throw new errors_1.SdkError('validator address can not be empty');
        }
        if (is.undefined(delegator_addr)) {
            throw new errors_1.SdkError('delegator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryDelegationRequest()
            .setValidatorAddr(validator_addr)
            .setDelegatorAddr(delegator_addr);
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Delegation', request, types.staking_query_pb.QueryDelegationResponse);
    }
    /**
     * Query all delegations made from one delegator
     *
     * @param pagination page info
     * @param delegator_addr Bech32 delegator address
     * @returns
     * @since
     */
    queryDelegations(query) {
        const { key, page, size, count_total, delegator_addr } = query;
        if (is.undefined(delegator_addr)) {
            throw new errors_1.SdkError('delegator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryDelegatorDelegationsRequest()
            .setDelegatorAddr(delegator_addr)
            .setPagination(helper_1.ModelCreator.createPaginationModel(page, size, count_total, key));
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/DelegatorDelegations', request, types.staking_query_pb.QueryDelegatorDelegationsResponse);
    }
    /**
     * Query an unbonding-delegation record based on delegator and validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */
    queryUnbondingDelegation(delegator_addr, validator_addr) {
        if (is.undefined(validator_addr)) {
            throw new errors_1.SdkError('validator address can not be empty');
        }
        if (is.undefined(delegator_addr)) {
            throw new errors_1.SdkError('delegator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryUnbondingDelegationRequest()
            .setValidatorAddr(validator_addr)
            .setDelegatorAddr(delegator_addr);
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/UnbondingDelegation', request, types.staking_query_pb.QueryUnbondingDelegationResponse);
    }
    /**
     * Query all unbonding-delegations records for one delegator
     *
     * @param pagination page info
     * @param delegator_addr Bech32 delegator address
     * @returns
     * @since
     */
    queryDelegatorUnbondingDelegations(query) {
        const { key, page, size, count_total, delegator_addr } = query;
        if (is.undefined(delegator_addr)) {
            throw new errors_1.SdkError('delegator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryDelegatorUnbondingDelegationsRequest()
            .setDelegatorAddr(delegator_addr)
            .setPagination(helper_1.ModelCreator.createPaginationModel(page, size, count_total, key));
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations', request, types.staking_query_pb.QueryDelegatorUnbondingDelegationsResponse);
    }
    /**
     * Query a redelegation record based on delegator and a source and destination validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param src_validator_addr (optional) Bech32 source validator address
     * @param dst_validator_addr (optional) Bech32 destination validator address
     * @returns
     * @since
     */
    queryRedelegation(query) {
        const { key, page, size, count_total, delegator_addr, src_validator_addr, dst_validator_addr } = query;
        if (is.undefined(delegator_addr)) {
            throw new errors_1.SdkError('delegator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryRedelegationsRequest()
            .setDelegatorAddr(delegator_addr)
            .setPagination(helper_1.ModelCreator.createPaginationModel(page, size, count_total, key));
        if (is.not.undefined(src_validator_addr)) {
            request.setSrcValidatorAddr(src_validator_addr);
        }
        if (is.not.undefined(dst_validator_addr)) {
            request.setDstValidatorAddr(dst_validator_addr);
        }
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Redelegations', request, types.staking_query_pb.QueryRedelegationsResponse);
    }
    /**
     * Query all validators info for given delegator
     *
     * @param delegator_addr Bech32 delegator address
     * @param pagination page info
     * @returns
     * @since
     */
    queryDelegatorValidators(query) {
        const { key, page, size, count_total, delegator_addr } = query;
        if (is.undefined(delegator_addr)) {
            throw new errors_1.SdkError('delegator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryDelegatorValidatorsRequest()
            .setDelegatorAddr(delegator_addr)
            .setPagination(helper_1.ModelCreator.createPaginationModel(page, size, count_total, key));
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/DelegatorValidators', request, types.staking_query_pb.QueryDelegatorValidatorsResponse);
    }
    /**
     * Query validator info for given delegator validator
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */
    queryDelegatorValidator(query) {
        const { delegator_addr, validator_addr } = query;
        if (is.undefined(delegator_addr)) {
            throw new errors_1.SdkError('delegator address can not be empty');
        }
        if (is.undefined(validator_addr)) {
            throw new errors_1.SdkError('validator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryDelegatorValidatorRequest()
            .setDelegatorAddr(delegator_addr)
            .setValidatorAddr(validator_addr);
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/DelegatorValidator', request, types.staking_query_pb.QueryDelegatorValidatorResponse);
    }
    /**
     * Query the historical info for given height.
     *
     * @param height defines at which height to query the historical info
     * @returns
     * @since
     */
    queryHistoricalInfo(query) {
        const { height } = query;
        if (is.undefined(height)) {
            throw new errors_1.SdkError('block height can not be empty');
        }
        const request = new types.staking_query_pb.QueryHistoricalInfoRequest()
            .setHeight(height);
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/HistoricalInfo', request, types.staking_query_pb.QueryHistoricalInfoResponse);
    }
    /**
     * Query all delegations to one validator
     *
     * @param validator_addr Bech32 validator address
     * @param pagination page info
     * @returns
     * @since
     */
    queryValidatorDelegations(query) {
        const { key, page, size, count_total, validator_addr } = query;
        if (is.undefined(validator_addr)) {
            throw new errors_1.SdkError('validator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryValidatorDelegationsRequest()
            .setValidatorAddr(validator_addr)
            .setPagination(helper_1.ModelCreator.createPaginationModel(page, size, count_total, key));
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/ValidatorDelegations', request, types.staking_query_pb.QueryValidatorDelegationsResponse);
    }
    /**
     * Query all unbonding delegatations from a validator
     *
     * @param validator_addr Bech32 validator address
     * @param pagination page info
     * @returns
     * @since
     */
    queryValidatorUnbondingDelegations(query) {
        const { key, page, size, count_total, validator_addr } = query;
        if (is.undefined(validator_addr)) {
            throw new errors_1.SdkError('validator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryValidatorUnbondingDelegationsRequest()
            .setValidatorAddr(validator_addr)
            .setPagination(helper_1.ModelCreator.createPaginationModel(page, size, count_total, key));
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations', request, types.staking_query_pb.QueryValidatorUnbondingDelegationsResponse);
    }
    /**
     * Query a validator
     *
     * @param address Bech32 validator address
     * @returns
     * @since
     */
    queryValidator(address) {
        if (is.undefined(address)) {
            throw new errors_1.SdkError('validator address can not be empty');
        }
        const request = new types.staking_query_pb.QueryValidatorRequest().setValidatorAddr(address);
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Validator', request, types.staking_query_pb.QueryValidatorResponse).then(res => {
            let result = Object.assign({}, res);
            if (res.validator && res.validator.consensusPubkey && res.validator.consensusPubkey.value) {
                result.validator.consensusPubkey = this.client.protobuf.deserializePubkey(res.validator.consensusPubkey);
            }
            return result;
        });
    }
    /**
     * Query for all validators
     * @param pagination page info
     * @param status validator status
     * @returns
     * @since
     */
    queryValidators(query) {
        const { key, page, size, count_total, status } = query;
        const request = new types.staking_query_pb.QueryValidatorsRequest()
            .setPagination(helper_1.ModelCreator.createPaginationModel(page, size, count_total, key));
        if (is.not.undefined(status)) {
            request.setStatus(status);
        }
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Validators', request, types.staking_query_pb.QueryValidatorsResponse).then(res => {
            let result = Object.assign({}, res);
            if (res.validatorsList && res.validatorsList.length) {
                result.validatorsList = res.validatorsList.map((val) => {
                    if (val.consensusPubkey && val.consensusPubkey.value) {
                        val.consensusPubkey = this.client.protobuf.deserializePubkey(val.consensusPubkey);
                    }
                    return val;
                });
            }
            return result;
        });
    }
    /**
     * Query the current staking pool values
     * @returns
     * @since
     */
    queryPool() {
        const request = new types.staking_query_pb.QueryPoolRequest();
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Pool', request, types.staking_query_pb.QueryPoolResponse);
    }
    /**
     * Query the current staking parameters information
     * @returns
     * @since
     */
    queryParams() {
        const request = new types.staking_query_pb.QueryParamsRequest();
        return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Params', request, types.staking_query_pb.QueryParamsResponse);
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
                const bech32Pubkey = utils_1.Crypto.encodeAddress(utils_1.Crypto.aminoMarshalPubKey(event.pub_key), this.client.config.bech32Prefix.ConsPub);
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