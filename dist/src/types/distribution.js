"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorReward = exports.MsgWithdrawDelegatorRewardsAll = exports.MsgSetWithdrawAddress = void 0;
const types_1 = require("./types");
const pbs = require("./proto");
const is = require("is_js");
const helper_1 = require("../helper");
const errors_1 = require("../errors");
/**
 * Msg struct for changing the withdraw address for a delegator (or validator self-delegation)
 * @hidden
 */
class MsgSetWithdrawAddress extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgSetWithdrawAddress);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.distribution_tx_pb.MsgSetWithdrawAddress;
    }
    getModel() {
        return new (this.constructor.getModelClass())()
            .setDelegatorAddress(this.value.delegator_address)
            .setWithdrawAddress(this.value.withdraw_address);
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.empty(this.value.delegator_address)) {
            throw new errors_1.SdkError(`delegator address can not be empty`);
        }
        if (is.empty(this.value.withdraw_address)) {
            throw new errors_1.SdkError(`withdraw address can not be empty`);
        }
        return true;
    }
}
exports.MsgSetWithdrawAddress = MsgSetWithdrawAddress;
/**
 * Msg struct for delegation withdraw for all of the delegator's delegations
 * @hidden
 */
class MsgWithdrawDelegatorRewardsAll extends types_1.Msg {
    constructor(delegatorAddr) {
        super('irishub/distr/MsgWithdrawDelegationRewardsAll');
        this.value = {
            delegator_addr: delegatorAddr,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgWithdrawDelegatorRewardsAll = MsgWithdrawDelegatorRewardsAll;
/**
 * Msg struct for delegation withdraw from a single validator
 * @hidden
 */
class MsgWithdrawDelegatorReward extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgWithdrawDelegatorReward);
        this.value = msg;
    }
    getModel() {
        return new (this.constructor.getModelClass())()
            .setDelegatorAddress(this.value.delegator_address)
            .setValidatorAddress(this.value.validator_address);
    }
    static getModelClass() {
        return pbs.distribution_tx_pb.MsgWithdrawDelegatorReward;
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.empty(this.value.delegator_address)) {
            throw new errors_1.SdkError(`delegator address can not be empty`);
        }
        if (is.empty(this.value.validator_address)) {
            throw new errors_1.SdkError(`validator address can not be empty`);
        }
        return true;
    }
}
exports.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;
/**
 * Msg struct forWithdraw Validator Commission.
 * @hidden
 */
class MsgWithdrawValidatorCommission extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgWithdrawValidatorCommission);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.distribution_tx_pb.MsgWithdrawValidatorCommission;
    }
    getModel() {
        return new (this.constructor.getModelClass())()
            .setValidatorAddress(this.value.validator_address);
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.empty(this.value.validator_address)) {
            throw new errors_1.SdkError(`validator address can not be empty`);
        }
        return true;
    }
}
exports.MsgWithdrawValidatorCommission = MsgWithdrawValidatorCommission;
/**
 * Msg struct Msg Fund Community Pool.
 * @hidden
 */
class MsgFundCommunityPool extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgFundCommunityPool);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.distribution_tx_pb.MsgFundCommunityPool;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setDepositor(this.value.depositor);
        this.value.amount.forEach((item) => {
            msg.addAmount(helper_1.TxModelCreator.createCoinModel(item.denom, item.amount));
        });
        return msg;
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.empty(this.value.depositor)) {
            throw new errors_1.SdkError(`depositor can not be empty`);
        }
        if (!(this.value.amount && this.value.amount.length)) {
            throw new errors_1.SdkError(`amount can not be empty`);
        }
        return true;
    }
}
exports.MsgFundCommunityPool = MsgFundCommunityPool;
//# sourceMappingURL=distribution.js.map