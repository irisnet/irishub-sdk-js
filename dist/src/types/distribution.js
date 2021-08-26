import { Msg, TxType } from './types';
import * as pbs from "./proto";
import * as is from 'is_js';
import { TxModelCreator } from '../helper';
import { SdkError } from "../errors";
/**
 * Msg struct for changing the withdraw address for a delegator (or validator self-delegation)
 * @hidden
 */
export class MsgSetWithdrawAddress extends Msg {
    constructor(msg) {
        super(TxType.MsgSetWithdrawAddress);
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
            throw new SdkError(`delegator address can not be empty`);
        }
        if (is.empty(this.value.withdraw_address)) {
            throw new SdkError(`withdraw address can not be empty`);
        }
        return true;
    }
}
/**
 * Msg struct for delegation withdraw from a single validator
 * @hidden
 */
export class MsgWithdrawDelegatorReward extends Msg {
    constructor(msg) {
        super(TxType.MsgWithdrawDelegatorReward);
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
            throw new SdkError(`delegator address can not be empty`);
        }
        if (is.empty(this.value.validator_address)) {
            throw new SdkError(`validator address can not be empty`);
        }
        return true;
    }
}
/**
 * Msg struct forWithdraw Validator Commission.
 * @hidden
 */
export class MsgWithdrawValidatorCommission extends Msg {
    constructor(msg) {
        super(TxType.MsgWithdrawValidatorCommission);
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
            throw new SdkError(`validator address can not be empty`);
        }
        return true;
    }
}
/**
 * Msg struct Msg Fund Community Pool.
 * @hidden
 */
export class MsgFundCommunityPool extends Msg {
    constructor(msg) {
        super(TxType.MsgFundCommunityPool);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.distribution_tx_pb.MsgFundCommunityPool;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setDepositor(this.value.depositor);
        this.value.amount.forEach((item) => {
            msg.addAmount(TxModelCreator.createCoinModel(item.denom, item.amount));
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
            throw new SdkError(`depositor can not be empty`);
        }
        if (!(this.value.amount && this.value.amount.length)) {
            throw new SdkError(`amount can not be empty`);
        }
        return true;
    }
}
//# sourceMappingURL=distribution.js.map