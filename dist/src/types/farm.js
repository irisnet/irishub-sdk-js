import { Msg, TxType } from "./types";
import * as pbs from "./proto";
import { SdkError } from "../errors";
import { TxModelCreator } from "../helper";
/**
 * Msg for stake lp
 *
 * @hidden
 */
export class MsgStake extends Msg {
    constructor(msg) {
        super(TxType.MsgStake);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.farm_tx_pb.MsgStake;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setPoolName(this.value.pool_name);
        msg.setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
        msg.setSender(this.value.sender);
        return msg;
    }
    validate() {
        if (!this.value.pool_name) {
            throw new SdkError("pool_name is  empty");
        }
        if (!this.value.amount) {
            throw new SdkError("amount is  empty");
        }
        if (!this.value.sender) {
            throw new SdkError("sender is  empty");
        }
    }
}
/**
 * Msg for Unstake lp
 *
 * @hidden
 */
export class MsgUnstake extends Msg {
    constructor(msg) {
        super(TxType.MsgUnstake);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.farm_tx_pb.MsgUnstake;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setPoolName(this.value.pool_name);
        msg.setAmount(TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
        msg.setSender(this.value.sender);
        return msg;
    }
    validate() {
        if (!this.value.pool_name) {
            throw new SdkError("pool_name is  empty");
        }
        if (!this.value.amount) {
            throw new SdkError("amount is  empty");
        }
        if (!this.value.sender) {
            throw new SdkError("sender is  empty");
        }
    }
}
/**
 * Msg for Unstake lp
 *
 * @hidden
 */
export class MsgHarvest extends Msg {
    constructor(msg) {
        super(TxType.MsgHarvest);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.farm_tx_pb.MsgHarvest;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setPoolName(this.value.pool_name);
        msg.setSender(this.value.sender);
        return msg;
    }
    validate() {
        if (!this.value.pool_name) {
            throw new SdkError("pool_name is  empty");
        }
        if (!this.value.sender) {
            throw new SdkError("sender is  empty");
        }
    }
}
//# sourceMappingURL=farm.js.map