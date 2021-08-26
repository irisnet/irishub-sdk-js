import { __awaiter } from "tslib";
import { Crypto } from '../utils/crypto';
import * as types from '../types';
import { SdkError } from '../errors';
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
export class Bank {
    /** @hidden */
    constructor(client) {
        this.client = client;
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
            if (!Crypto.checkAddress(to, this.client.config.bech32Prefix.AccAddr)) {
                throw new SdkError('Invalid bech32 address');
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
            if (!Crypto.checkAddress(to, this.client.config.bech32Prefix.AccAddr)) {
                throw new SdkError('Invalid bech32 address');
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
            throw new SdkError("address can ont be empty");
        }
        if (!denom) {
            throw new SdkError("denom can ont be empty");
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
    queryAllBalances(address, height) {
        if (!address) {
            throw new SdkError("address can ont be empty");
        }
        const request = new types.bank_query_pb.QueryAllBalancesRequest();
        request.setAddress(address);
        return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/AllBalances', request, types.bank_query_pb.QueryAllBalancesResponse, height);
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
            throw new SdkError("denom can ont be empty");
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
}
//# sourceMappingURL=bank.js.map