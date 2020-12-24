"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgBurnNFT = exports.MsgTransferNFT = exports.MsgEditNFT = exports.MsgMintNFT = exports.MsgIssueDenom = void 0;
const index_1 = require("./index");
const pbs = require("./proto");
/**
 * Msg for issue denom
 *
 * @hidden
 */
class MsgIssueDenom extends index_1.Msg {
    constructor(msg) {
        super(index_1.TxType.MsgIssueDenom);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.nft_tx_pb.MsgIssueDenom;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setId(this.value.id);
        msg.setName(this.value.name);
        msg.setSchema(this.value.schema);
        msg.setSender(this.value.sender);
        return msg;
    }
    Validate() {
        if (!this.value.id) {
            throw new Error("id can not be empty");
        }
        if (!this.value.name) {
            throw new Error("name can not be empty");
        }
        if (!this.value.schema) {
            throw new Error("schema can not be empty");
        }
        if (!this.value.sender) {
            throw new Error("sender can not be empty");
        }
    }
}
exports.MsgIssueDenom = MsgIssueDenom;
/**
 * Msg for Mint NFT
 *
 * @hidden
 */
class MsgMintNFT extends index_1.Msg {
    constructor(msg) {
        super(index_1.TxType.MsgMintNFT);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.nft_tx_pb.MsgMintNFT;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setId(this.value.id);
        msg.setDenomId(this.value.denom_id);
        msg.setName(this.value.name);
        msg.setUri(this.value.uri);
        msg.setData(this.value.data);
        msg.setSender(this.value.sender);
        msg.setRecipient(this.value.recipient);
        return msg;
    }
    Validate() {
        if (!this.value.id) {
            throw new Error("id can not be empty");
        }
        if (!this.value.denom_id) {
            throw new Error("denom_id can not be empty");
        }
        if (!this.value.name) {
            throw new Error("name can not be empty");
        }
        if (!this.value.uri) {
            throw new Error("uri can not be empty");
        }
        if (!this.value.data) {
            throw new Error("data can not be empty");
        }
        if (!this.value.sender) {
            throw new Error("sender can not be empty");
        }
        if (!this.value.recipient) {
            throw new Error("recipient can not be empty");
        }
    }
}
exports.MsgMintNFT = MsgMintNFT;
/**
 * Msg for Edit NFT
 *
 * @hidden
 */
class MsgEditNFT extends index_1.Msg {
    constructor(msg) {
        super(index_1.TxType.MsgEditNFT);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.nft_tx_pb.MsgEditNFT;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setId(this.value.id);
        msg.setDenomId(this.value.denom_id);
        msg.setSender(this.value.sender);
        if (typeof this.value.name === 'undefined') {
            msg.setName(index_1.doNotModify);
        }
        else {
            msg.setName(this.value.name);
        }
        if (typeof this.value.uri === 'undefined') {
            msg.setUri(index_1.doNotModify);
        }
        else {
            msg.setUri(this.value.uri);
        }
        if (typeof this.value.data === 'undefined') {
            msg.setData(index_1.doNotModify);
        }
        else {
            msg.setData(this.value.data);
        }
        return msg;
    }
    Validate() {
        if (!this.value.id) {
            throw new Error("id can not be empty");
        }
        if (!this.value.denom_id) {
            throw new Error("denom_id can not be empty");
        }
        if (!this.value.sender) {
            throw new Error("sender can not be empty");
        }
    }
}
exports.MsgEditNFT = MsgEditNFT;
/**
 * Msg for Transfer NFT
 *
 * @hidden
 */
class MsgTransferNFT extends index_1.Msg {
    constructor(msg) {
        super(index_1.TxType.MsgTransferNFT);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.nft_tx_pb.MsgTransferNFT;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setId(this.value.id);
        msg.setDenomId(this.value.denom_id);
        msg.setSender(this.value.sender);
        msg.setRecipient(this.value.recipient);
        if (typeof this.value.name === 'undefined') {
            msg.setName(index_1.doNotModify);
        }
        else {
            msg.setName(this.value.name);
        }
        if (typeof this.value.uri === 'undefined') {
            msg.setUri(index_1.doNotModify);
        }
        else {
            msg.setUri(this.value.uri);
        }
        if (typeof this.value.data === 'undefined') {
            msg.setData(index_1.doNotModify);
        }
        else {
            msg.setData(this.value.data);
        }
        return msg;
    }
    Validate() {
        if (!this.value.id) {
            throw new Error("id can not be empty");
        }
        if (!this.value.denom_id) {
            throw new Error("denom_id can not be empty");
        }
        if (!this.value.sender) {
            throw new Error("sender can not be empty");
        }
        if (!this.value.recipient) {
            throw new Error("recipient can not be empty");
        }
    }
}
exports.MsgTransferNFT = MsgTransferNFT;
/**
 * Msg for Burn NFT
 *
 * @hidden
 */
class MsgBurnNFT extends index_1.Msg {
    constructor(msg) {
        super(index_1.TxType.MsgBurnNFT);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.nft_tx_pb.MsgBurnNFT;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setId(this.value.id);
        msg.setDenomId(this.value.denom_id);
        msg.setSender(this.value.sender);
        return msg;
    }
    Validate() {
        if (!this.value.id) {
            throw new Error("id can not be empty");
        }
        if (!this.value.denom_id) {
            throw new Error("denom_id can not be empty");
        }
        if (!this.value.sender) {
            throw new Error("sender can not be empty");
        }
    }
}
exports.MsgBurnNFT = MsgBurnNFT;
//# sourceMappingURL=nft.js.map