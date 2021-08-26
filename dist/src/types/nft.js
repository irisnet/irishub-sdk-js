import { Msg, TxType, doNotModify } from './index';
import * as pbs from "./proto";
import { SdkError } from '../errors';
/**
 * Msg for issue denom
 *
 * @hidden
 */
export class MsgIssueDenom extends Msg {
    constructor(msg) {
        super(TxType.MsgIssueDenom);
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
            throw new SdkError("id can not be empty");
        }
        if (!this.value.name) {
            throw new SdkError("name can not be empty");
        }
        if (!this.value.schema) {
            throw new SdkError("schema can not be empty");
        }
        if (!this.value.sender) {
            throw new SdkError("sender can not be empty");
        }
    }
}
/**
 * Msg for Mint NFT
 *
 * @hidden
 */
export class MsgMintNFT extends Msg {
    constructor(msg) {
        super(TxType.MsgMintNFT);
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
            throw new SdkError("id can not be empty");
        }
        if (!this.value.denom_id) {
            throw new SdkError("denom_id can not be empty");
        }
        if (!this.value.name) {
            throw new SdkError("name can not be empty");
        }
        if (!this.value.uri) {
            throw new SdkError("uri can not be empty");
        }
        if (!this.value.data) {
            throw new SdkError("data can not be empty");
        }
        if (!this.value.sender) {
            throw new SdkError("sender can not be empty");
        }
        if (!this.value.recipient) {
            throw new SdkError("recipient can not be empty");
        }
    }
}
/**
 * Msg for Edit NFT
 *
 * @hidden
 */
export class MsgEditNFT extends Msg {
    constructor(msg) {
        super(TxType.MsgEditNFT);
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
            msg.setName(doNotModify);
        }
        else {
            msg.setName(this.value.name);
        }
        if (typeof this.value.uri === 'undefined') {
            msg.setUri(doNotModify);
        }
        else {
            msg.setUri(this.value.uri);
        }
        if (typeof this.value.data === 'undefined') {
            msg.setData(doNotModify);
        }
        else {
            msg.setData(this.value.data);
        }
        return msg;
    }
    Validate() {
        if (!this.value.id) {
            throw new SdkError("id can not be empty");
        }
        if (!this.value.denom_id) {
            throw new SdkError("denom_id can not be empty");
        }
        if (!this.value.sender) {
            throw new SdkError("sender can not be empty");
        }
    }
}
/**
 * Msg for Transfer NFT
 *
 * @hidden
 */
export class MsgTransferNFT extends Msg {
    constructor(msg) {
        super(TxType.MsgTransferNFT);
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
            msg.setName(doNotModify);
        }
        else {
            msg.setName(this.value.name);
        }
        if (typeof this.value.uri === 'undefined') {
            msg.setUri(doNotModify);
        }
        else {
            msg.setUri(this.value.uri);
        }
        if (typeof this.value.data === 'undefined') {
            msg.setData(doNotModify);
        }
        else {
            msg.setData(this.value.data);
        }
        return msg;
    }
    Validate() {
        if (!this.value.id) {
            throw new SdkError("id can not be empty");
        }
        if (!this.value.denom_id) {
            throw new SdkError("denom_id can not be empty");
        }
        if (!this.value.sender) {
            throw new SdkError("sender can not be empty");
        }
        if (!this.value.recipient) {
            throw new SdkError("recipient can not be empty");
        }
    }
}
/**
 * Msg for Burn NFT
 *
 * @hidden
 */
export class MsgBurnNFT extends Msg {
    constructor(msg) {
        super(TxType.MsgBurnNFT);
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
            throw new SdkError("id can not be empty");
        }
        if (!this.value.denom_id) {
            throw new SdkError("denom_id can not be empty");
        }
        if (!this.value.sender) {
            throw new SdkError("sender can not be empty");
        }
    }
}
//# sourceMappingURL=nft.js.map