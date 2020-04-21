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
const crypto_1 = require("../utils/crypto");
const types = require("../types");
const errors_1 = require("../errors");
const bank_1 = require("../types/bank");
const types_1 = require("../types");
/**
 * This module is mainly used to transfer coins between accounts,
 * query account balances, and provide common offline transaction signing and broadcasting methods.
 * In addition, the available units of tokens in the IRIShub system are defined using [coin-type](https://www.irisnet.org/docs/concepts/coin-type.html).
 *
 * [More Details](https://www.irisnet.org/docs/features/bank.html)
 *
 * @category Modules
 * @since v0.17
 */
class Bank {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get the cointype of a token
     *
     * @deprecated Please refer to [[asset.queryToken]]
     * @since v0.17
     */
    queryCoinType(tokenName) {
        throw new errors_1.SdkError('Not supported');
    }
    /**
     * Query account info from blockchain
     * @param address Bech32 address
     * @returns
     * @since v0.17
     */
    queryAccount(address) {
        return Promise.all([
            this.client.rpcClient.abciQuery('custom/auth/account', {
                account: address,
            }),
            this.client.rpcClient.abciQuery('custom/bank/all_balances', {
                Address: address,
            })
        ]).then(res => {
            const acc = res[0];
            const bal = res[1];
            acc.coins = bal;
            return acc;
        });
    }
    /**
     * Query the token statistic, including total loose tokens, total burned tokens and total bonded tokens.
     * @param tokenID Identity of the token
     * @returns
     * @since v0.17
     */
    queryTokenStats(tokenID) {
        return this.client.rpcClient.abciQuery('custom/acc/tokenStats', {
            TokenId: tokenID,
        });
    }
    /**
     * Query total supply
     * @param denom Denom of the token
     * @returns
     * @since v1.0
     */
    queryTotalSupply(denom) {
        let path;
        let param;
        if (!denom) {
            path = 'custom/supply/total_supply';
            param = {
                Page: '1',
                Limit: '0'
            };
        }
        else {
            path = 'custom/supply/supply_of';
            param = {
                Denom: denom
            };
        }
        return this.client.rpcClient.abciQuery(path, param);
    }
    /**
     * Send coins
     * @param to Recipient bech32 address
     * @param amount Coins to be sent
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    send(to, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate bech32 address
            if (!crypto_1.Crypto.checkAddress(to, this.client.config.bech32Prefix.AccAddr)) {
                throw new errors_1.SdkError('Invalid bech32 address');
            }
            const from = this.client.keys.show(baseTx.from);
            const coins = yield this.client.utils.toMinCoins(amount);
            const msgs = [
                new bank_1.MsgSend([{ address: from, coins }], [{ address: to, coins }]),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Burn coins
     * @param amount Coins to be burnt
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    burn(amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            const coins = yield this.client.utils.toMinCoins(amount);
            const msgs = [new bank_1.MsgBurn(from, coins)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Set memo regexp for your own address, so that you can only receive coins from transactions with the corresponding memo.
     * @param memoRegexp
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    setMemoRegexp(memoRegexp, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            const msgs = [new bank_1.MsgSetMemoRegexp(from, memoRegexp)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Subscribe Send Txs
     * @param conditions Query conditions for the subscription
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */
    subscribeSendTx(conditions, callback) {
        const queryBuilder = new types_1.EventQueryBuilder().addCondition(new types.Condition(types_1.EventKey.Action).eq(types_1.EventAction.Send));
        if (conditions.from) {
            queryBuilder.addCondition(new types.Condition(types_1.EventKey.Sender).eq(conditions.from));
        }
        if (conditions.to) {
            queryBuilder.addCondition(new types.Condition(types_1.EventKey.Recipient).eq(conditions.to));
        }
        const subscription = this.client.eventListener.subscribeTx(queryBuilder, (error, data) => {
            if (error) {
                callback(error);
                return;
            }
            data === null || data === void 0 ? void 0 : data.tx.value.msg.forEach(msg => {
                if (msg.type !== 'irishub/bank/Send')
                    return;
                const msgSend = msg;
                const height = data.height;
                const hash = data.hash;
                msgSend.value.inputs.forEach((input, index) => {
                    const from = input.address;
                    const to = msgSend.value.outputs[index].address;
                    const amount = input.coins;
                    callback(undefined, { height, hash, from, to, amount });
                });
            });
        });
        return subscription;
    }
}
exports.Bank = Bank;
//# sourceMappingURL=bank.js.map