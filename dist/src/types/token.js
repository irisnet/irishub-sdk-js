import { Msg, TxType } from './types';
import * as is from "is_js";
import * as pbs from "./proto";
import { SdkError } from "../errors";
import { doNotModify } from "./constants";
/**
 * Msg struct for issue token
 * @hidden
 */
export class MsgIssueToken extends Msg {
    constructor(msg) {
        super(TxType.MsgIssueToken);
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
            throw new SdkError(`token symbol can not be empty`);
        }
        if (is.undefined(this.value.name)) {
            throw new SdkError(`name can not be empty`);
        }
        if (is.undefined(this.value.min_unit)) {
            throw new SdkError(`min unit can not be empty`);
        }
        if (is.undefined(this.value.owner)) {
            throw new SdkError(`owner can not be empty`);
        }
        return true;
    }
}
/**
 * Msg struct for edit token
 * @hidden
 */
export class MsgEditToken extends Msg {
    constructor(msg) {
        super(TxType.MsgEditToken);
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
            msg.setMintable(doNotModify);
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
            throw new SdkError(`token symbol can not be empty`);
        }
        if (is.undefined(this.value.owner)) {
            throw new SdkError(`owner can not be empty`);
        }
        return true;
    }
}
/**
 * Msg struct for mint token
 * @hidden
 */
export class MsgMintToken extends Msg {
    constructor(msg) {
        super(TxType.MsgMintToken);
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
            throw new SdkError(`token symbol can not be empty`);
        }
        if (is.undefined(this.value.amount)) {
            throw new SdkError(`amount of token minted can not be empty`);
        }
        if (is.undefined(this.value.owner)) {
            throw new SdkError(`owner can not be empty`);
        }
        return true;
    }
}
/**
 * Msg struct for transfer token owner
 * @hidden
 */
export class MsgTransferTokenOwner extends Msg {
    constructor(msg) {
        super(TxType.MsgTransferTokenOwner);
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
            throw new SdkError(`token symbol can not be empty`);
        }
        if (is.undefined(this.value.src_owner)) {
            throw new SdkError(`source owner can not be empty`);
        }
        if (is.undefined(this.value.dst_owner)) {
            throw new SdkError(`destination owner can not be empty`);
        }
        return true;
    }
}
//# sourceMappingURL=token.js.map