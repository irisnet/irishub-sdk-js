"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const is = require("is_js");
/**
 * Auth module is only used to build `StdTx`
 *
 * @category Modules
 * @since v0.17
 */
class Auth {
    /** @hidden */
    constructor(client) {
        this.client = client;
        this.defaultStdFee = {
            amount: [this.client.config.fee],
            gas: this.client.config.gas,
        };
    }
    /**
     * Generate a new `StdTx` which is a standard way to wrap Msgs with Fee and Signatures.
     *
     * **NOTE:** The first signature is the fee payer
     *
     * @param msgs Msgs to be sent
     * @param baseTx Base params of the transaction
     * @param sigs Signatures of the transaction, defaults to []
     * @param memo Memo of the transaction
     *
     * @returns
     * @since v0.17
     */
    newStdTx(msgs, baseTx, sigs = [], memo = '') {
        const stdFee = { amount: [], gas: '' };
        Object.assign(stdFee, this.defaultStdFee); // Copy from default std fee
        if (baseTx.fee) {
            stdFee.amount = [baseTx.fee];
        }
        if (baseTx.gas && is.not.empty(baseTx.gas)) {
            stdFee.gas = baseTx.gas;
        }
        return {
            type: 'cosmos-sdk/StdTx',
            value: {
                msg: msgs,
                fee: stdFee,
                signatures: sigs,
                memo,
            },
        };
    }
}
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map