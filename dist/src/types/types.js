"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxType = exports.Msg = void 0;
const utils_1 = require("../utils");
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
        return utils_1.TxModelCreator.createAnyModel(this.type, msg.serializeBinary());
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
    TxType["MsgWithdrawDelegatorReward"] = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    TxType["MsgSetWithdrawAddress"] = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
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
})(TxType = exports.TxType || (exports.TxType = {}));
//# sourceMappingURL=types.js.map