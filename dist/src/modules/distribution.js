"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const is = require("is_js");
const distribution_1 = require("../types/distribution");
/**
 * This module is in charge of distributing collected transaction fee and inflated token to all validators and delegators.
 * To reduce computation stress, a lazy distribution strategy is brought in. lazy means that the benefit won't be paid directly to contributors automatically.
 * The contributors are required to explicitly send transactions to withdraw their benefit, otherwise, their benefit will be kept in the global pool.
 *
 * [More Details](https://www.irisnet.org/docs/features/distribution.html)
 *
 * @category Modules
 * @since v0.17
 */
class Distribution {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Query all the rewards of a validator or a delegator
     * @param address Bech32 account address
     * @returns
     * @since v0.17
     */
    queryRewards(address) {
        return this.client.rpcClient.abciQuery('custom/distr/rewards', {
            address,
        });
    }
    /**
     * Set another address to receive the rewards instead of using the delegator address
     * @param withdrawAddress Bech32 account address
     * @param baseTx
     * @returns
     * @since v0.17
     */
    setWithdrawAddr(withdrawAddress, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            const msgs = [
                new distribution_1.MsgSetWithdrawAddress(from, withdrawAddress),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Withdraw rewards to the withdraw-address(default to the delegator address, you can set to another address via [[setWithdrawAddr]])
     * @param baseTx { types.BaseTx }
     * @param onlyFromValidator only withdraw from this validator address
     * @param isValidator also withdraw validator's commission, can be set to `true` only if the `onlyFromValidator` is specified
     * @returns { Promise<types.TxResult> }
     * @since v0.17
     */
    withdrawRewards(baseTx, onlyFromValidator = '', isValidator = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            let msgs;
            if (is.not.empty(onlyFromValidator)) {
                if (isValidator) {
                    msgs = [new distribution_1.MsgWithdrawValidatorRewardsAll(onlyFromValidator)];
                }
                else {
                    msgs = [new distribution_1.MsgWithdrawDelegatorReward(from, onlyFromValidator)];
                }
            }
            else {
                msgs = [new distribution_1.MsgWithdrawDelegatorRewardsAll(from)];
            }
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
}
exports.Distribution = Distribution;
//# sourceMappingURL=distribution.js.map