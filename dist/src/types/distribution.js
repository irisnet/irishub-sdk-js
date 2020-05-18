"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Msg struct for changing the withdraw address for a delegator (or validator self-delegation)
 * @hidden
 */
class MsgSetWithdrawAddress {
    constructor(delegatorAddr, withdrawAddr) {
        this.type = 'irishub/distr/MsgModifyWithdrawAddress';
        this.value = {
            delegator_addr: delegatorAddr,
            withdraw_addr: withdrawAddr,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgSetWithdrawAddress = MsgSetWithdrawAddress;
/**
 * Msg struct for delegation withdraw for all of the delegator's delegations
 * @hidden
 */
class MsgWithdrawDelegatorRewardsAll {
    constructor(delegatorAddr) {
        this.type = 'irishub/distr/MsgWithdrawDelegationRewardsAll';
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
class MsgWithdrawDelegatorReward {
    constructor(delegatorAddr, validatorAddr) {
        this.type = 'irishub/distr/MsgWithdrawDelegationReward';
        this.value = {
            delegator_addr: delegatorAddr,
            validator_addr: validatorAddr,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;
/**
 * Msg struct for validator withdraw
 * @hidden
 */
class MsgWithdrawValidatorRewardsAll {
    constructor(validatorAddr) {
        this.type = 'irishub/distr/MsgWithdrawValidatorRewardsAll';
        this.value = {
            validator_addr: validatorAddr,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgWithdrawValidatorRewardsAll = MsgWithdrawValidatorRewardsAll;
//# sourceMappingURL=distribution.js.map