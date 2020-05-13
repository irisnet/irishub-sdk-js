"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgEditValidator = exports.MsgRedelegate = exports.MsgUndelegate = exports.MsgDelegate = void 0;
/**
 * Msg struct for delegating to a validator
 * @hidden
 */
class MsgDelegate {
    constructor(delegatorAddr, validatorAddr, delegation) {
        this.type = 'irishub/stake/MsgDelegate';
        this.value = {
            delegator_addr: delegatorAddr,
            validator_addr: validatorAddr,
            delegation,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgDelegate = MsgDelegate;
/**
 * Msg struct for undelegating from a validator
 * @hidden
 */
class MsgUndelegate {
    constructor(delegatorAddr, validatorAddr, sharesAmount) {
        this.type = 'irishub/stake/BeginUnbonding';
        this.value = {
            delegator_addr: delegatorAddr,
            validator_addr: validatorAddr,
            shares_amount: sharesAmount,
        };
    }
    getSignBytes() {
        return this.value;
    }
}
exports.MsgUndelegate = MsgUndelegate;
/**
 * Msg struct for redelegating illiquid tokens from one validator to another
 * @hidden
 */
class MsgRedelegate {
    constructor(delegatorAddr, validatorSrcAddr, validatorDstAddr, sharesAmount) {
        this.type = 'irishub/stake/BeginRedelegate';
        this.value = {
            delegator_addr: delegatorAddr,
            validator_src_addr: validatorSrcAddr,
            validator_dst_addr: validatorDstAddr,
            shares_amount: sharesAmount,
        };
    }
    getSignBytes() {
        return {
            delegator_addr: this.value.delegator_addr,
            validator_src_addr: this.value.validator_src_addr,
            validator_dst_addr: this.value.validator_dst_addr,
            shares: this.value.shares_amount,
        };
    }
}
exports.MsgRedelegate = MsgRedelegate;
/**
 * Msg struct for updating validator informations
 * @hidden
 */
class MsgEditValidator {
    constructor(description, address, commissionRate) {
        this.type = 'irishub/stake/MsgEditValidator';
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