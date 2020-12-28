"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgTransferTokenOwner = exports.MsgMintToken = exports.MsgEditToken = exports.MsgIssueToken = void 0;
const types_1 = require("./types");
const is = require("is_js");
const pbs = require("./proto");
const errors_1 = require("../errors");
const constants_1 = require("./constants");
/**
 * Msg struct for issue token
 * @hidden
 */
class MsgIssueToken extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgIssueToken);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.token_tx_pb.MsgIssueToken;
    }
    getModel() {
        const msg = new (this.constructor.getModelClass())()
            .setSymbol(this.value.symbol)
            .setName(this.value.name)
            .setMinUnit(this.value.min_unit)
            .setOwner(this.value.owner);
        if (is.not.undefined(this.value.scale)) {
            msg.setScale(this.value.scale);
        }
        if (is.not.undefined(this.value.initial_supply)) {
            msg.setInitialSupply(this.value.initial_supply);
        }
        if (is.not.undefined(this.value.max_supply)) {
            msg.setMaxSupply(this.value.max_supply);
        }
        if (is.not.undefined(this.value.mintable)) {
            msg.setMintable(this.value.mintable);
        }
        return msg;
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.undefined(this.value.symbol)) {
            throw new errors_1.SdkError(`token symbol can not be empty`);
        }
        if (is.undefined(this.value.name)) {
            throw new errors_1.SdkError(`name can not be empty`);
        }
        if (is.undefined(this.value.min_unit)) {
            throw new errors_1.SdkError(`min unit can not be empty`);
        }
        if (is.undefined(this.value.owner)) {
            throw new errors_1.SdkError(`owner can not be empty`);
        }
        return true;
    }
}
exports.MsgIssueToken = MsgIssueToken;
/**
 * Msg struct for edit token
 * @hidden
 */
class MsgEditToken extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgEditToken);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.token_tx_pb.MsgEditToken;
    }
    getModel() {
        const msg = new (this.constructor.getModelClass())()
            .setSymbol(this.value.symbol)
            .setOwner(this.value.owner);
        if (is.not.undefined(this.value.name)) {
            msg.setName(this.value.name);
        }
        if (is.not.undefined(this.value.max_supply)) {
            msg.setMaxSupply(this.value.max_supply);
        }
        if (is.not.undefined(this.value.mintable)) {
            msg.setMintable(this.value.mintable);
        }
        else {
            msg.setMintable(constants_1.doNotModify);
        }
        return msg;
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.undefined(this.value.symbol)) {
            throw new errors_1.SdkError(`token symbol can not be empty`);
        }
        if (is.undefined(this.value.owner)) {
            throw new errors_1.SdkError(`owner can not be empty`);
        }
        return true;
    }
}
exports.MsgEditToken = MsgEditToken;
/**
 * Msg struct for mint token
 * @hidden
 */
class MsgMintToken extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgMintToken);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.token_tx_pb.MsgMintToken;
    }
    getModel() {
        const msg = new (this.constructor.getModelClass())()
            .setSymbol(this.value.symbol)
            .setAmount(this.value.amount)
            .setOwner(this.value.owner);
        if (is.not.undefined(this.value.to)) {
            msg.setTo(this.value.to);
        }
        return msg;
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.undefined(this.value.symbol)) {
            throw new errors_1.SdkError(`token symbol can not be empty`);
        }
        if (is.undefined(this.value.amount)) {
            throw new errors_1.SdkError(`amount of token minted can not be empty`);
        }
        if (is.undefined(this.value.owner)) {
            throw new errors_1.SdkError(`owner can not be empty`);
        }
        return true;
    }
}
exports.MsgMintToken = MsgMintToken;
/**
 * Msg struct for transfer token owner
 * @hidden
 */
class MsgTransferTokenOwner extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgTransferTokenOwner);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.token_tx_pb.MsgTransferTokenOwner;
    }
    getModel() {
        const msg = new (this.constructor.getModelClass())()
            .setSymbol(this.value.symbol)
            .setSrcOwner(this.value.src_owner)
            .setDstOwner(this.value.dst_owner);
        return msg;
    }
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate() {
        if (is.undefined(this.value.symbol)) {
            throw new errors_1.SdkError(`token symbol can not be empty`);
        }
        if (is.undefined(this.value.src_owner)) {
            throw new errors_1.SdkError(`source owner can not be empty`);
        }
        if (is.undefined(this.value.dst_owner)) {
            throw new errors_1.SdkError(`destination owner can not be empty`);
        }
        return true;
    }
}
exports.MsgTransferTokenOwner = MsgTransferTokenOwner;
//# sourceMappingURL=token.js.map