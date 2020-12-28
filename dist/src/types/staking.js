"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgEditValidator = exports.MsgRedelegate = exports.MsgUndelegate = exports.MsgDelegate = void 0;
const types_1 = require("./types");
const helper_1 = require("../helper");
const types_2 = require("./types");
const pbs = require("./proto");
const is = require("is_js");
const errors_1 = require("../errors");
/**
 * Msg struct for delegating to a validator
 * @hidden
 */
class MsgDelegate extends types_1.Msg {
    constructor(msg) {
        super(types_2.TxType.MsgDelegate);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.staking_tx_pb.MsgDelegate;
    }
    getModel() {
        const msg = new (this.constructor.getModelClass())();
        msg.setDelegatorAddress(this.value.delegator_address)
            .setValidatorAddress(this.value.validator_address)
            .setAmount(helper_1.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
        return msg;
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.undefined(this.value.delegator_address)) {
            throw new errors_1.SdkError(`delegator address can not be empty`);
        }
        if (is.undefined(this.value.validator_address)) {
            throw new errors_1.SdkError(`validator address can not be empty`);
        }
        return true;
    }
}
exports.MsgDelegate = MsgDelegate;
/**
 * Msg struct for undelegating from a validator
 * @hidden
 */
class MsgUndelegate extends types_1.Msg {
    constructor(msg) {
        super(types_2.TxType.MsgUndelegate);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.staking_tx_pb.MsgUndelegate;
    }
    getModel() {
        const msg = new (this.constructor.getModelClass())();
        msg.setDelegatorAddress(this.value.delegator_address)
            .setValidatorAddress(this.value.validator_address)
            .setAmount(helper_1.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
        return msg;
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.undefined(this.value.delegator_address)) {
            throw new errors_1.SdkError(`delegator address can not be empty`);
        }
        if (is.undefined(this.value.validator_address)) {
            throw new errors_1.SdkError(`validator address can not be empty`);
        }
        return true;
    }
}
exports.MsgUndelegate = MsgUndelegate;
/**
 * Msg struct for redelegating illiquid tokens from one validator to another
 * @hidden
 */
class MsgRedelegate extends types_1.Msg {
    constructor(msg) {
        super(types_2.TxType.MsgBeginRedelegate);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.staking_tx_pb.MsgBeginRedelegate;
    }
    getModel() {
        const msg = new (this.constructor.getModelClass())();
        msg.setDelegatorAddress(this.value.delegator_address)
            .setValidatorSrcAddress(this.value.validator_src_address)
            .setValidatorDstAddress(this.value.validator_dst_address)
            .setAmount(helper_1.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
        return msg;
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.undefined(this.value.delegator_address)) {
            throw new errors_1.SdkError(`delegator address can not be empty`);
        }
        if (is.undefined(this.value.validator_src_address)) {
            throw new errors_1.SdkError(`source validator address can not be empty`);
        }
        if (is.undefined(this.value.validator_dst_address)) {
            throw new errors_1.SdkError(`destination validator address can not be empty`);
        }
        return true;
    }
}
exports.MsgRedelegate = MsgRedelegate;
/**
 * Msg struct for updating validator informations
 * @hidden
 */
class MsgEditValidator extends types_1.Msg {
    constructor(description, address, commissionRate) {
        super('irishub/stake/MsgEditValidator');
        this.value = {
            Description: description,
            address,
            commission_rate: commissionRate,
        };
    }
    getSignBytes() {
        return this.value;
    }
}
exports.MsgEditValidator = MsgEditValidator;
//# sourceMappingURL=staking.js.map