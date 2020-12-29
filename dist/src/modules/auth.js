"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const types = require("../types");
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
            gasLimit: this.client.config.gas,
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
    newStdTx(msgs, baseTx) {
        const stdFee = { amount: [], gasLimit: '' };
        Object.assign(stdFee, this.defaultStdFee); // Copy from default std fee
        if (baseTx.fee) {
            stdFee.amount = [baseTx.fee];
        }
        if (baseTx.gas && is.not.empty(baseTx.gas)) {
            stdFee.gasLimit = baseTx.gas;
        }
        let protoTx = new types.ProtoTx({
            msgs,
            memo: baseTx.memo || '',
            stdFee,
            chain_id: this.client.config.chainId,
            account_number: baseTx.account_number || undefined,
            sequence: baseTx.sequence || undefined
        });
        return protoTx;
    }
    /**
     * Account returns account details based on address.
     * @param address defines the address to query for.
     */
    queryAccount(address) {
        if (!address) {
            throw new Error("address can not be empty");
        }
        const request = new types.auth_query_pb.QueryAccountRequest();
        request.setAddress(address);
        return this.client.rpcClient.protoQuery('/cosmos.auth.v1beta1.Query/Account', request, types.auth_query_pb.QueryAccountResponse).then((data) => {
            let result = {};
            if (data && data.account && data.account.value) {
                result = types.auth_auth_pb.BaseAccount.deserializeBinary(data.account.value).toObject();
                if (result.pubKey && result.pubKey.value) {
                    result.pubKey = types.crypto_secp256k1_keys_pb.PubKey.deserializeBinary(result.pubKey.value).toObject();
                }
            }
            return result;
        });
    }
    /**
     * Params queries all parameters.
     */
    queryParams() {
        const request = new types.auth_query_pb.QueryParamsRequest();
        return this.client.rpcClient.protoQuery('/cosmos.auth.v1beta1.Query/Params', request, types.auth_query_pb.QueryParamsResponse);
    }
}
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map