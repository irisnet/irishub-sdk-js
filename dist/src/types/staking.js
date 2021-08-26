import { Msg } from './types';
import { TxModelCreator } from "../helper";
import { TxType } from "./types";
import * as pbs from './proto';
import * as is from "is_js";
import { SdkError } from "../errors";
/**
 * Msg struct for delegating to a validator
 * @hidden
 */
export class MsgDelegate extends Msg {
    constructor(msg) {
        super(TxType.MsgDelegate);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.staking_tx_pb.MsgDelegate;
    }
    getModel() {
        const msg = new (this.constructor.getModelClass())();
        msg.setDelegatorAddress(this.value.delegator_address)
            .setValidatorAddress(this.value.validator_address)
            .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
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
            throw new SdkError(`delegator address can not be empty`);
        }
        if (is.undefined(this.value.validator_address)) {
            throw new SdkError(`validator address can not be empty`);
        }
        return true;
    }
}
/**
 * Msg struct for undelegating from a validator
 * @hidden
 */
export class MsgUndelegate extends Msg {
    constructor(msg) {
        super(TxType.MsgUndelegate);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.staking_tx_pb.MsgUndelegate;
    }
    getModel() {
        const msg = new (this.constructor.getModelClass())();
        msg.setDelegatorAddress(this.value.delegator_address)
            .setValidatorAddress(this.value.validator_address)
            .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
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
            throw new SdkError(`delegator address can not be empty`);
        }
        if (is.undefined(this.value.validator_address)) {
            throw new SdkError(`validator address can not be empty`);
        }
        return true;
    }
}
/**
 * Msg struct for redelegating illiquid tokens from one validator to another
 * @hidden
 */
export class MsgRedelegate extends Msg {
    constructor(msg) {
        super(TxType.MsgBeginRedelegate);
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
            .setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
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
            throw new SdkError(`delegator address can not be empty`);
        }
        if (is.undefined(this.value.validator_src_address)) {
            throw new SdkError(`source validator address can not be empty`);
        }
        if (is.undefined(this.value.validator_dst_address)) {
            throw new SdkError(`destination validator address can not be empty`);
        }
        return true;
    }
}
/**
 * Msg struct for updating validator informations
 * @hidden
 */
export class MsgEditValidator extends Msg {
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
//# sourceMappingURL=staking.js.map