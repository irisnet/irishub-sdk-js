import { Msg, TxType } from './types';
import { TxModelCreator } from '../helper';
import * as pbs from "./proto";
import { SdkError } from '../errors';
/**
 * Msg for sending coins
 *
 * @hidden
 */
export class MsgSend extends Msg {
    constructor(msg) {
        super(TxType.MsgSend);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.bank_tx_pb.MsgSend;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setFromAddress(this.value.from_address);
        msg.setToAddress(this.value.to_address);
        this.value.amount.forEach((item) => {
            msg.addAmount(TxModelCreator.createCoinModel(item.denom, item.amount));
        });
        return msg;
    }
    validate() {
        if (!this.value.from_address) {
            throw new SdkError("from_address is  empty");
        }
        if (!this.value.to_address) {
            throw new SdkError("to_address is  empty");
        }
        if (!(this.value.amount && this.value.amount.length)) {
            throw new SdkError("amount is  empty");
        }
    }
}
/**
 * Msg for sending coins
 *
 * @hidden
 */
export class MsgMultiSend extends Msg {
    constructor(msg) {
        super(TxType.MsgMultiSend);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.bank_tx_pb.MsgMultiSend;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        this.value.inputs.forEach((item) => {
            let input = new pbs.bank_tx_pb.Input();
            input.setAddress(item.address);
            item.coins.forEach((coin) => {
                input.addCoins(TxModelCreator.createCoinModel(coin.denom, coin.amount));
            });
            msg.addInputs(input);
        });
        this.value.outputs.forEach((item) => {
            let output = new pbs.bank_tx_pb.Output();
            output.setAddress(item.address);
            item.coins.forEach((coin) => {
                output.addCoins(TxModelCreator.createCoinModel(coin.denom, coin.amount));
            });
            msg.addOutputs(output);
        });
        return msg;
    }
    validate() {
        if (!this.value.inputs) {
            throw new SdkError("inputs is empty");
        }
        if (!this.value.outputs) {
            throw new SdkError("outputs is  empty");
        }
    }
}
//# sourceMappingURL=bank.js.map