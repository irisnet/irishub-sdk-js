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
exports.Bank = void 0;
const crypto_1 = require("../utils/crypto");
const types = require("../types");
const errors_1 = require("../errors");
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
     * Query account info from blockchain
     * @param address Bech32 address
     * @returns
     * @since v0.17
     */
    queryAccount(address) {
        return Promise.all([
            this.client.rpcClient.abciQuery('custom/auth/account', {
                address: address,
            }),
            this.client.rpcClient.abciQuery('custom/bank/all_balances', {
                address: address,
            })
        ]).then(res => {
            const acc = res[0];
            const bal = res[1];
            acc.coins = bal;
            return acc;
        });
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
            const msgs = [
                {
                    type: types.TxType.MsgSend,
                    value: {
                        from_address: from,
                        to_address: to,
                        amount
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * multiSend coins
     * @param to Recipient bech32 address
     * @param amount Coins to be sent
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    multiSend(to, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate bech32 address
            if (!crypto_1.Crypto.checkAddress(to, this.client.config.bech32Prefix.AccAddr)) {
                throw new errors_1.SdkError('Invalid bech32 address');
            }
            const from = this.client.keys.show(baseTx.from);
            const coins = amount;
            const msgs = [
                {
                    type: types.TxType.MsgMultiSend,
                    value: {
                        inputs: [{ address: from, coins }],
                        outputs: [{ address: to, coins }],
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Balance queries the balance of a single coin for a single account.
     * @param address is the address to query balances for.
     * @param denom is the coin denom to query balances for.
     */
    queryBalance(address, denom) {
        if (!address) {
            throw new Error("address can not be empty");
        }
        if (!denom) {
            throw new Error("denom can not be empty");
        }
        const request = new types.bank_query_pb.QueryBalanceRequest();
        request.setAddress(address);
        request.setDenom(denom);
        return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/Balance', request, types.bank_query_pb.QueryBalanceResponse);
    }
    /**
     * AllBalances queries the balance of all coins for a single account.
     * @param address is the address to query balances for.
     */
    queryAllBalances(address) {
        if (!address) {
            throw new Error("address can not be empty");
        }
        const request = new types.bank_query_pb.QueryAllBalancesRequest();
        request.setAddress(address);
        return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/AllBalances', request, types.bank_query_pb.QueryAllBalancesResponse);
    }
    /**
     * TotalSupply queries the total supply of all coins.
     */
    queryTotalSupply() {
        const request = new types.bank_query_pb.QueryTotalSupplyRequest();
        return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/TotalSupply', request, types.bank_query_pb.QueryTotalSupplyResponse);
    }
    /**
     * SupplyOf queries the supply of a single coin.
     * @param denom is the coin denom to query balances for.
     */
    querySupplyOf(denom) {
        if (!denom) {
            throw new Error("denom can not be empty");
        }
        const request = new types.bank_query_pb.QuerySupplyOfRequest();
        request.setDenom(denom);
        return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/SupplyOf', request, types.bank_query_pb.QuerySupplyOfResponse);
    }
    /**
     * Params queries the parameters of x/bank module.
     */
    queryParams() {
        const request = new types.bank_query_pb.QueryParamsRequest();
        return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/Params', request, types.bank_query_pb.QueryParamsResponse);
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