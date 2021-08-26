import { TxModelCreator } from '../helper';
import { SdkError, CODES } from '../errors';
/**
 * Base Msg
 * @hidden
 */
export class Msg {
    constructor(type) {
        this.type = type;
    }
    static getModelClass() {
        throw new SdkError("not implement", CODES.Internal);
    }
    getModel() {
        throw new SdkError("not implement", CODES.Internal);
    }
    pack() {
        let msg = this.getModel();
        return TxModelCreator.createAnyModel(this.type, msg.serializeBinary());
    }
    /**
     * unpack protobuf tx message
     * @type {[type]}
     * returns protobuf message instance
     */
    unpack(msgValue) {
        if (!msgValue) {
            throw new SdkError("msgValue can not be empty", CODES.Internal);
        }
        let msg = this.constructor.getModelClass().deserializeBinary(Buffer.from(msgValue, 'base64'));
        if (msg) {
            return msg;
        }
        else {
            throw new SdkError("unpack message fail", CODES.FailedUnpackingProtobufMessagFromAny);
        }
    }
}
export var TxType;
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
    //farm
    TxType["MsgStake"] = "irismod.farm.MsgStake";
    TxType["MsgUnstake"] = "irismod.farm.MsgUnstake";
    TxType["MsgHarvest"] = "irismod.farm.MsgHarvest";
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
    //gov
    TxType["MsgSubmitProposal"] = "cosmos.gov.v1beta1.MsgSubmitProposal";
    TxType["MsgVote"] = "cosmos.gov.v1beta1.MsgVote";
    TxType["MsgDeposit"] = "cosmos.gov.v1beta1.MsgDeposit";
    //htlc
    TxType["MsgCreateHTLC"] = "irismod.htlc.MsgCreateHTLC";
    TxType["MsgClaimHTLC"] = "irismod.htlc.MsgClaimHTLC";
    //ibc
    TxType["MsgTransfer"] = "ibc.applications.transfer.v1.MsgTransfer";
})(TxType || (TxType = {}));
/**
 * Base Pubkey Type
 * @hidden
 */
export var PubkeyType;
(function (PubkeyType) {
    PubkeyType["secp256k1"] = "secp256k1";
    PubkeyType["ed25519"] = "ed25519";
    PubkeyType["sm2"] = "sm2";
})(PubkeyType || (PubkeyType = {}));
//# sourceMappingURL=types.js.map