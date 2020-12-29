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
exports.Distribution = void 0;
const types = require("../types");
const utils_1 = require("../utils");
const helper_1 = require("../helper");
const errors_1 = require("../errors");
/**
 * This module is in charge of distributing collected transaction fee and inflated token to all validators and delegators.
 * To reduce computation stress, a lazy distribution strategy is brought in. lazy means that the benefit won't be paid directly to contributors automatically.
 * The contributors are required to explicitly send transactions to withdraw their benefit, otherwise, their benefit will be kept in the global pool.
 *
 * [More Details](https://www.irisnet.org/docs/features/distribution.html)
 *
 * @category Modules
 * @since v0.17
 */
class Distribution {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Set another address to receive the rewards instead of using the delegator address
     * @param withdrawAddress Bech32 account address
     * @param baseTx
     * @returns
     * @since v0.17
     */
    setWithdrawAddr(withdrawAddress, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgSetWithdrawAddress,
                    value: {
                        delegator_address: from,
                        withdraw_address: withdrawAddress,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Withdraw rewards to the withdraw-address(default to the delegator address, you can set to another address via [[setWithdrawAddr]])
     * @param baseTx { types.BaseTx }
     * @param validatorAddr withdraw from this validator address
     * @returns { Promise<types.TxResult> }
     * @since v0.17
     */
    withdrawRewards(validatorAddr, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const delegatorAddr = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgWithdrawDelegatorReward,
                    value: {
                        delegator_address: delegatorAddr,
                        validator_address: validatorAddr,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * withdraws the full commission to the validator
     * @param validatorAddr withdraw from this validator address
     * @param baseTx { types.BaseTx }
     * @returns { Promise<types.TxResult> }
     * @since v0.17
     */
    withdrawValidatorCommission(validator_address, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!utils_1.Crypto.checkAddress(validator_address, this.client.config.bech32Prefix.ValAddr)) {
                throw new errors_1.SdkError('Invalid bech32 address');
            }
            const msgs = [
                {
                    type: types.TxType.MsgWithdrawValidatorCommission,
                    value: {
                        validator_address: validator_address,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * fundCommunityPool allows an account to directly fund the community pool
     * @param amount Coins to be fund
     * @param baseTx { types.BaseTx }
     * @returns { Promise<types.TxResult> }
     * @since v0.17
     */
    fundCommunityPool(amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const depositor = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgFundCommunityPool,
                    value: {
                        depositor: depositor,
                        amount: amount
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Params queries params of the distribution module.
     */
    queryParams() {
        const request = new types.distribution_query_pb.QueryParamsRequest();
        return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/Params', request, types.distribution_query_pb.QueryParamsResponse);
    }
    /**
     * ValidatorOutstandingRewards queries rewards of a validator address.
     * @param validator_address Bech32 address
     */
    queryValidatorOutstandingRewards(validator_address) {
        if (!validator_address) {
            throw new Error("validator_address can not be empty");
        }
        const request = new types.distribution_query_pb.QueryValidatorOutstandingRewardsRequest();
        request.setValidatorAddress(validator_address);
        return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards', request, types.distribution_query_pb.QueryValidatorOutstandingRewardsResponse);
    }
    /**
     * ValidatorCommission queries accumulated commission for a validator.
     * @param validator_address Bech32 address
     */
    queryValidatorCommission(validator_address) {
        if (!validator_address) {
            throw new Error("validator_address can not be empty");
        }
        const request = new types.distribution_query_pb.QueryValidatorCommissionRequest();
        request.setValidatorAddress(validator_address);
        return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/ValidatorCommission', request, types.distribution_query_pb.QueryValidatorCommissionResponse);
    }
    /**
     * ValidatorSlashes queries slash events of a validator.
     * @param validator_address defines the validator address to query for.
     * @param starting_height defines the optional starting height to query the slashes.
     * @param ending_height defines the optional ending height to query the slashes.
     * @param page_number
     * @param page_size
     */
    queryValidatorSlashes(validator_address, starting_height = 0, ending_height = 0, page_number = 1, page_size = 10) {
        if (!validator_address) {
            throw new Error("validator_address can not be empty");
        }
        const pagination = helper_1.ModelCreator.createPaginationModel(page_number, page_size, true);
        const request = new types.distribution_query_pb.QueryValidatorSlashesRequest();
        request.setValidatorAddress(validator_address);
        request.setPagination(pagination);
        if (starting_height) {
            request.setStartingHeight(starting_height);
        }
        if (ending_height) {
            request.setEndingHeight(ending_height);
        }
        return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/ValidatorSlashes', request, types.distribution_query_pb.QueryValidatorSlashesResponse);
    }
    /**
     * DelegationRewards queries the total rewards accrued by a delegation.
     * @param validator_address defines the validator address to query for
     * @param delegator_address defines the delegator address to query for
     */
    queryDelegationRewards(validator_address, delegator_address) {
        if (!validator_address) {
            throw new Error("validator_address can not be empty");
        }
        if (!delegator_address) {
            throw new Error("delegator_address can not be empty");
        }
        const request = new types.distribution_query_pb.QueryDelegationRewardsRequest();
        request.setValidatorAddress(validator_address);
        request.setDelegatorAddress(delegator_address);
        return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegationRewards', request, types.distribution_query_pb.QueryDelegationRewardsResponse);
    }
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each validator.
     * @param delegator_address defines the delegator address to query for
     */
    queryDelegationTotalRewards(delegator_address) {
        if (!delegator_address) {
            throw new Error("delegator_address can not be empty");
        }
        const request = new types.distribution_query_pb.QueryDelegationTotalRewardsRequest();
        request.setDelegatorAddress(delegator_address);
        return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegationTotalRewards', request, types.distribution_query_pb.QueryDelegationTotalRewardsResponse);
    }
    /**
     * DelegatorValidators queries the validators of a delegator.
     * @param delegator_address defines the delegator address to query for
     */
    queryDelegatorValidators(delegator_address) {
        if (!delegator_address) {
            throw new Error("delegator_address can not be empty");
        }
        const request = new types.distribution_query_pb.QueryDelegatorValidatorsRequest();
        request.setDelegatorAddress(delegator_address);
        return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegatorValidators', request, types.distribution_query_pb.QueryDelegatorValidatorsResponse);
    }
    /**
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     * @param delegator_address defines the delegator address to query for
     */
    queryDelegatorWithdrawAddress(delegator_address) {
        if (!delegator_address) {
            throw new Error("delegator_address can not be empty");
        }
        const request = new types.distribution_query_pb.QueryDelegatorWithdrawAddressRequest();
        request.setDelegatorAddress(delegator_address);
        return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress', request, types.distribution_query_pb.QueryDelegatorWithdrawAddressResponse);
    }
    /**
     * CommunityPool queries the community pool coins.
     */
    queryCommunityPool() {
        const request = new types.distribution_query_pb.QueryCommunityPoolRequest();
        return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/CommunityPool', request, types.distribution_query_pb.QueryCommunityPoolResponse);
    }
}
exports.Distribution = Distribution;
//# sourceMappingURL=distribution.js.map