import {Coin, Msg, TxType} from "./types";
import * as pbs from "./proto";
import {SdkError} from "../errors";
import {farm_tx_pb} from "./proto";
import {TxModelCreator} from "../helper";


export interface FarmParams {
    pool_name: string,
    amount: Coin,
    sender: string
}


/**
 * Msg for stake lp
 *
 * @hidden
 */

export class MsgStake extends Msg {
    value: FarmParams;

    constructor(msg: FarmParams) {
        super(TxType.MsgStake);
        this.value = msg;
    }

    static getModelClass(): any {
        return pbs.farm_tx_pb.MsgStake;
    }

    getModel(): any {
        let msg = new ((this.constructor as any).getModelClass())();
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
    value: FarmParams;

    constructor(msg: FarmParams) {
        super(TxType.MsgUnstake);
        this.value = msg;
    }

    static getModelClass(): any {
        return pbs.farm_tx_pb.MsgUnstake;
    }

    getModel(): any {
        let msg = new ((this.constructor as any).getModelClass())();
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

export interface HarvestParams {
    pool_name: string,
    sender: string
}

/**
 * Msg for Unstake lp
 *
 * @hidden
 */

export class MsgHarvest extends Msg {
    value: HarvestParams;

    constructor(msg: HarvestParams) {
        super(TxType.MsgHarvest);
        this.value = msg;
    }

    static getModelClass(): any {
        return pbs.farm_tx_pb.MsgHarvest;
    }

    getModel(): any {
        let msg = new ((this.constructor as any).getModelClass())();
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