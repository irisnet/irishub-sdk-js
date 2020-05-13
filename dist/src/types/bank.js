"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSetMemoRegexp = exports.MsgBurn = exports.MsgSend = void 0;
/**
 * Msg for sending coins
 *
 * @hidden
 */
class MsgSend {
    constructor(inputs, outputs) {
        this.type = 'irishub/bank/Send';
        this.value = {
            inputs,
            outputs,
        };
    }
    getSignBytes() {
        return this.value;
    }
}
exports.MsgSend = MsgSend;
/**
 * Msg for burning coins
 *
 * @hidden
 */
class MsgBurn {
    constructor(owner, coins) {
        this.type = 'irishub/bank/Burn';
        this.value = {
            owner,
            coins,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgBurn = MsgBurn;
/**
 * Msg for setting memo regexp for an address
 *
 * @hidden
 */
class MsgSetMemoRegexp {
    constructor(owner, memoRegexp) {
        this.type = 'irishub/bank/SetMemoRegexp';
        this.value = {
            owner,
            memo_regexp: memoRegexp,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgSetMemoRegexp = MsgSetMemoRegexp;
//# sourceMappingURL=bank.js.map