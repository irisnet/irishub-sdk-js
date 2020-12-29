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
exports.Nft = void 0;
const crypto_1 = require("../utils/crypto");
const types = require("../types");
const errors_1 = require("../errors");
/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.17
 */
class Nft {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * issue Denom
     * @param id string
     * @param name string
     * @param schema string
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    issueDenom(id, name, schema, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgIssueDenom,
                    value: {
                        id,
                        name,
                        schema,
                        sender
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * mint NFT
     * @param id string
     * @param denom_id string
     * @param name string
     * @param uri string
     * @param data string
     * @param recipient string If recipient it's "", recipient default is sender
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    mintNft(id, denom_id, name, uri, data, recipient, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            if (recipient && !crypto_1.Crypto.checkAddress(recipient, this.client.config.bech32Prefix.AccAddr)) {
                throw new errors_1.SdkError('recipient Invalid bech32 address');
            }
            const sender = this.client.keys.show(baseTx.from);
            if (!recipient) {
                recipient = sender;
            }
            const msgs = [
                {
                    type: types.TxType.MsgMintNFT,
                    value: {
                        id,
                        denom_id,
                        name,
                        uri,
                        data,
                        sender,
                        recipient
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * edit NFT
     * @param id string
     * @param denom_id string
     * @param newProperty {name?: string,uri?:string,data?:string} new nft property
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    editNft(id, denom_id, new_property, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgEditNFT,
                    value: Object.assign({ id,
                        denom_id,
                        sender }, new_property)
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * transfer NFT
     * @param id string
     * @param denom_id string
     * @param recipient string
     * @param newProperty {name?: string,uri?:string,data?:string} new nft property
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    transferNft(id, denom_id, recipient, new_property, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            if (recipient && !crypto_1.Crypto.checkAddress(recipient, this.client.config.bech32Prefix.AccAddr)) {
                throw new errors_1.SdkError('recipient Invalid bech32 address');
            }
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgTransferNFT,
                    value: Object.assign({ id,
                        denom_id,
                        sender,
                        recipient }, new_property)
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * burn NFT
     * @param id string
     * @param denom_id string
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    burnNft(id, denom_id, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgBurnNFT,
                    value: {
                        id,
                        denom_id,
                        sender,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Supply queries the total supply of a given denom or owner
     * @param denom_id
     * @param owner
     */
    querySupply(denom_id, owner) {
        if (!denom_id && !owner) {
            throw new Error("there must be one denom_id or owner");
        }
        const request = new types.nft_query_pb.QuerySupplyRequest();
        if (denom_id) {
            request.setDenomId(denom_id);
        }
        if (owner) {
            request.setOwner(owner);
        }
        return this.client.rpcClient.protoQuery('/irismod.nft.Query/Supply', request, types.nft_query_pb.QuerySupplyResponse);
    }
    /**
     * Owner queries the NFTs of the specified owner
     * @param owner
     * @param denom_id
     */
    queryOwner(owner, denom_id) {
        if (!owner) {
            throw new Error("owner can not be empty");
        }
        const request = new types.nft_query_pb.QueryOwnerRequest();
        request.setOwner(owner);
        if (denom_id) {
            request.setDenomId(denom_id);
        }
        return this.client.rpcClient.protoQuery('/irismod.nft.Query/Owner', request, types.nft_query_pb.QueryOwnerResponse);
    }
    /**
     * Collection queries the NFTs of the specified denom
     * @param denom_id
     */
    queryCollection(denom_id) {
        if (!denom_id) {
            throw new Error("denom_id can not be empty");
        }
        const request = new types.nft_query_pb.QueryCollectionRequest();
        request.setDenomId(denom_id);
        return this.client.rpcClient.protoQuery('/irismod.nft.Query/Collection', request, types.nft_query_pb.QueryCollectionResponse);
    }
    /**
     * Denom queries the definition of a given denom
     * @param denom_id
     */
    queryDenom(denom_id) {
        if (!denom_id) {
            throw new Error("denom_id can not be empty");
        }
        const request = new types.nft_query_pb.QueryDenomRequest();
        request.setDenomId(denom_id);
        return this.client.rpcClient.protoQuery('/irismod.nft.Query/Denom', request, types.nft_query_pb.QueryDenomResponse);
    }
    /**
     * Denoms queries all the denoms
     */
    queryDenoms() {
        const request = new types.nft_query_pb.QueryDenomsRequest();
        return this.client.rpcClient.protoQuery('/irismod.nft.Query/Denoms', request, types.nft_query_pb.QueryDenomsResponse);
    }
    /**
     * NFT queries the NFT for the given denom and token ID
     * @param denom_id
     * @param token_id
     */
    queryNFT(denom_id, token_id) {
        if (!denom_id) {
            throw new Error("denom_id can not be empty");
        }
        if (!token_id) {
            throw new Error("token_id can not be empty");
        }
        const request = new types.nft_query_pb.QueryNFTRequest();
        request.setDenomId(denom_id);
        request.setTokenId(token_id);
        return this.client.rpcClient.protoQuery('/irismod.nft.Query/NFT', request, types.nft_query_pb.QueryNFTResponse);
    }
}
exports.Nft = Nft;
//# sourceMappingURL=nft.js.map