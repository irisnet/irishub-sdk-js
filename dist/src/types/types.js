"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubkeyType = exports.TxType = exports.Msg = void 0;
const helper_1 = require("../helper");
/**
 * Base Msg
 * @hidden
 */
class Msg {
    constructor(type) {
        this.type = type;
    }
    static getModelClass() {
        throw new Error("not implement");
    }
    getModel() {
        throw new Error("not implement");
    }
    pack() {
        let msg = this.getModel();
        return helper_1.TxModelCreator.createAnyModel(this.type, msg.serializeBinary());
    }
    /**
     * unpack protobuf tx message
     * @type {[type]}
     * returns protobuf message instance
     */
    unpack(msgValue) {
        if (!msgValue) {
            throw new Error("msgValue can not be empty");
        }
        let msg = this.constructor.getModelClass().deserializeBinary(Buffer.from(msgValue, 'base64'));
        if (msg) {
            return msg;
        }
        else {
            throw new Error("unpack message fail");
        }
    }
}
exports.Msg = Msg;
var TxType;
(function (TxType) {
    //bank
    TxType["MsgSend"] = "cosmos.bank.v1beta1.MsgSend";
    TxType["MsgMultiSend"] = "cosmos.bank.v1beta1.MsgMultiSend";
    //staking
    TxType["MsgDelegate"] = "cosmos.staking.v1beta1.MsgDelegate";
    TxType["MsgUndelegate"] = "cosmos.staking.v1beta1.MsgUndelegate";
    TxType["MsgBeginRedelegate"] = "cosmos.staking.v1beta1.MsgBeginRedelegate";
    //distribution
    TxType["MsgWithdrawDelegatorReward"] = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    TxType["MsgSetWithdrawAddress"] = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    TxType["MsgWithdrawValidatorCommission"] = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
    TxType["MsgFundCommunityPool"] = "cosmos.distribution.v1beta1.MsgFundCommunityPool";
    //coinswap
    TxType["MsgAddLiquidity"] = "irismod.coinswap.MsgAddLiquidity";
    TxType["MsgRemoveLiquidity"] = "irismod.coinswap.MsgRemoveLiquidity";
    TxType["MsgSwapOrder"] = "irismod.coinswap.MsgSwapOrder";
    //nft
    TxType["MsgIssueDenom"] = "irismod.nft.MsgIssueDenom";
    TxType["MsgTransferNFT"] = "irismod.nft.MsgTransferNFT";
    TxType["MsgEditNFT"] = "irismod.nft.MsgEditNFT";
    TxType["MsgMintNFT"] = "irismod.nft.MsgMintNFT";
    TxType["MsgBurnNFT"] = "irismod.nft.MsgBurnNFT";
    TxType["MsgIssueToken"] = "irismod.token.MsgIssueToken";
    TxType["MsgEditToken"] = "irismod.token.MsgEditToken";
    TxType["MsgMintToken"] = "irismod.token.MsgMintToken";
    TxType["MsgTransferTokenOwner"] = "irismod.token.MsgTransferTokenOwner";
    //Contract
    TxType["MsgStoreCode"] = "wasmd.x.wasmd.v1beta1.MsgStoreCode";
    TxType["MsgInstantiateContract"] = "wasmd.x.wasmd.v1beta1.MsgInstantiateContract";
    TxType["MsgExecuteContract"] = "wasmd.x.wasmd.v1beta1.MsgExecuteContract";
    TxType["MsgMigrateContract"] = "wasmd.x.wasmd.v1beta1.MsgMigrateContract";
    TxType["MsgUpdateAdmin"] = "wasmd.x.wasmd.v1beta1.MsgUpdateAdmin";
    TxType["MsgClearAdmin"] = "wasmd.x.wasmd.v1beta1.MsgClearAdmin";
})(TxType = exports.TxType || (exports.TxType = {}));
/**
 * Base Pubkey Type
 * @hidden
 */
var PubkeyType;
(function (PubkeyType) {
    PubkeyType["secp256k1"] = "secp256k1";
    PubkeyType["ed25519"] = "ed25519";
    PubkeyType["sm2"] = "sm2";
})(PubkeyType = exports.PubkeyType || (exports.PubkeyType = {}));
//# sourceMappingURL=types.js.map