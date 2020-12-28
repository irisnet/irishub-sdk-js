"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgMultiSend = exports.MsgSend = void 0;
const types_1 = require("./types");
const helper_1 = require("../helper");
const pbs = require("./proto");
/**
 * Msg for sending coins
 *
 * @hidden
 */
class MsgSend extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgSend);
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
            msg.addAmount(helper_1.TxModelCreator.createCoinModel(item.denom, item.amount));
        });
        return msg;
    }
    validate() {
        if (!this.value.from_address) {
            throw new Error("from_address is  empty");
        }
        if (!this.value.to_address) {
            throw new Error("to_address is  empty");
        }
        if (!(this.value.amount && this.value.amount.length)) {
            throw new Error("amount is  empty");
        }
    }
}
exports.MsgSend = MsgSend;
/**
 * Msg for sending coins
 *
 * @hidden
 */
class MsgMultiSend extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgMultiSend);
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
                input.addCoins(helper_1.TxModelCreator.createCoinModel(coin.denom, coin.amount));
            });
            msg.addInputs(input);
        });
        this.value.outputs.forEach((item) => {
            let output = new pbs.bank_tx_pb.Output();
            output.setAddress(item.address);
            item.coins.forEach((coin) => {
                output.addCoins(helper_1.TxModelCreator.createCoinModel(coin.denom, coin.amount));
            });
            msg.addOutputs(output);
        });
        return msg;
    }
    validate() {
        if (!this.value.inputs) {
            throw new Error("inputs is empty");
        }
        if (!this.value.outputs) {
            throw new Error("outputs is  empty");
        }
    }
}
exports.MsgMultiSend = MsgMultiSend;
//# sourceMappingURL=bank.js.map