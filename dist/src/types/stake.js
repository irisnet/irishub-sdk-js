"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MsgDelegate {
    constructor(delegatorAddr, validatorAddr, delegation) {
        this.type = 'irishub/stake/MsgDelegate';
        this.value = {
            delegator_addr: delegatorAddr,
            validator_addr: validatorAddr,
            delegation: delegation,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgDelegate = MsgDelegate;
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
//# sourceMappingURL=stake.js.map