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
exports.Token = void 0;
const types = require("../types");
const is = require("is_js");
const errors_1 = require("../errors");
/**
 * IRISHub allows individuals and companies to create and issue their own tokens.
 *
 * [More Details](https://www.irisnet.org/docs/features/asset.html)
 *
 * @category Modules
 * @since v0.17
 */
class Token {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * issue a new token
     * @param IssueTokenTxParam
     * @returns
     */
    issueToken(token, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgIssueToken,
                    value: Object.assign({ owner }, token)
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * edit a token existed
     * @param EditTokenTxParam
     * @returns
     */
    editToken(token, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgEditToken,
                    value: Object.assign({ owner }, token)
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * mint some amount of token
     * @param MintTokenTxParam
     * @returns
     */
    mintToken(token, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgMintToken,
                    value: Object.assign({ owner }, token)
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * transfer owner of token
     * @param TransferTokenOwnerTxParam
     * @returns
     */
    transferTokenOwner(token, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgTransferTokenOwner,
                    value: Object.assign({ src_owner: owner }, token)
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Query all tokens
     * @param owner The optional token owner address
     * @returns Token[]
     */
    queryTokens(owner) {
        const request = new types.token_query_pb.QueryTokensRequest();
        if (is.not.undefined(owner)) {
            request.setOwner(owner);
        }
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.rpcClient.protoQuery('/irismod.token.Query/Tokens', request, types.token_query_pb.QueryTokensResponse);
            let deserializedData = [];
            if (res && res.tokensList && is.array(res.tokensList)) {
                deserializedData = res.tokensList.map((item) => {
                    return types.token_token_pb.Token.deserializeBinary(item.value).toObject();
                });
            }
            resolve(deserializedData);
        }));
    }
    /**
     * Query details of a group of tokens
     * @param denom symbol of token
     * @returns
     * @since
     */
    queryToken(denom) {
        if (is.undefined(denom)) {
            throw new errors_1.SdkError('denom can not be empty');
        }
        const request = new types.token_query_pb.QueryTokenRequest();
        request.setDenom(denom);
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const res = yield this.client.rpcClient.protoQuery('/irismod.token.Query/Token', request, types.token_query_pb.QueryTokenResponse);
            let deserializedData = null;
            if (res && res.token && res.token.value) {
                deserializedData = types.token_token_pb.Token.deserializeBinary(res.token.value).toObject();
            }
            resolve(deserializedData);
        }));
    }
    /**
     * Query the token related fees
     * @param symbol The token symbol
     * @returns
     * @since
     */
    queryFees(symbol) {
        if (is.undefined(symbol)) {
            throw new errors_1.SdkError('symbol can not be empty');
        }
        const request = new types.token_query_pb.QueryFeesRequest();
        request.setSymbol(symbol);
        return this.client.rpcClient.protoQuery('/irismod.token.Query/Fees', request, types.token_query_pb.QueryFeesResponse);
    }
    /**
     * Query parameters of token tx
     * @param null
     * @returns
     * @since
     */
    queryParameters() {
        const request = new types.token_query_pb.QueryParamsRequest();
        return this.client.rpcClient.protoQuery('/irismod.token.Query/Params', request, types.token_query_pb.QueryParamsResponse);
    }
}
exports.Token = Token;
//# sourceMappingURL=token.js.map