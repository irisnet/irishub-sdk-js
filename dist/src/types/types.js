"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxType = exports.PubkeyType = exports.Msg = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _helper = require("../helper");
var _errors = require("../errors");
var _buffer = require("buffer");
/** 
 * Base Msg
 * @hidden
 */
var Msg = exports.Msg = /*#__PURE__*/function () {
  function Msg(type) {
    (0, _classCallCheck2["default"])(this, Msg);
    (0, _defineProperty2["default"])(this, "type", void 0);
    (0, _defineProperty2["default"])(this, "value", void 0);
    this.type = type;
  }
  return (0, _createClass2["default"])(Msg, [{
    key: "getModel",
    value: function getModel() {
      throw new _errors.SdkError("not implement", _errors.CODES.Internal);
    }
  }, {
    key: "pack",
    value: function pack() {
      var msg = this.getModel();
      return _helper.TxModelCreator.createAnyModel(this.type, msg.serializeBinary());
    }

    /**
     * unpack protobuf tx message
     * @type {[type]}
     * returns protobuf message instance
     */
  }, {
    key: "unpack",
    value: function unpack(msgValue) {
      if (!msgValue) {
        throw new _errors.SdkError("msgValue can not be empty", _errors.CODES.Internal);
      }
      var msg = this.constructor.getModelClass().deserializeBinary(_buffer.Buffer.from(msgValue, 'base64'));
      if (msg) {
        return msg;
      } else {
        throw new _errors.SdkError("unpack message fail", _errors.CODES.FailedUnpackingProtobufMessagFromAny);
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      throw new _errors.SdkError("not implement", _errors.CODES.Internal);
    }
  }]);
}();
var TxType = exports.TxType = /*#__PURE__*/function (TxType) {
  TxType["MsgSend"] = "cosmos.bank.v1beta1.MsgSend";
  TxType["MsgMultiSend"] = "cosmos.bank.v1beta1.MsgMultiSend";
  TxType["MsgDelegate"] = "cosmos.staking.v1beta1.MsgDelegate";
  TxType["MsgUndelegate"] = "cosmos.staking.v1beta1.MsgUndelegate";
  TxType["MsgBeginRedelegate"] = "cosmos.staking.v1beta1.MsgBeginRedelegate";
  TxType["MsgTokenizeShares"] = "cosmos.staking.v1beta1.MsgTokenizeShares";
  TxType["MsgRedeemTokensForShares"] = "cosmos.staking.v1beta1.MsgRedeemTokensForShares";
  TxType["MsgTransferTokenizeShareRecord"] = "cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord";
  TxType["MsgDisableTokenizeShares"] = "cosmos.staking.v1beta1.MsgDisableTokenizeShares";
  TxType["MsgEnableTokenizeShares"] = "cosmos.staking.v1beta1.MsgEnableTokenizeShares";
  TxType["MsgValidatorBond"] = "cosmos.staking.v1beta1.MsgValidatorBond";
  TxType["MsgUnbondValidator"] = "cosmos.staking.v1beta1.MsgUnbondValidator";
  TxType["MsgWithdrawDelegatorReward"] = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
  TxType["MsgSetWithdrawAddress"] = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
  TxType["MsgWithdrawValidatorCommission"] = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
  TxType["MsgFundCommunityPool"] = "cosmos.distribution.v1beta1.MsgFundCommunityPool";
  TxType["MsgWithdrawTokenizeShareRecordReward"] = "cosmos.distribution.v1beta1.MsgWithdrawTokenizeShareRecordReward";
  TxType["MsgWithdrawAllTokenizeShareRecordReward"] = "cosmos.distribution.v1beta1.MsgWithdrawAllTokenizeShareRecordReward";
  TxType["MsgAddLiquidity"] = "irismod.coinswap.MsgAddLiquidity";
  TxType["MsgRemoveLiquidity"] = "irismod.coinswap.MsgRemoveLiquidity";
  TxType["MsgSwapOrder"] = "irismod.coinswap.MsgSwapOrder";
  TxType["MsgStake"] = "irismod.farm.MsgStake";
  TxType["MsgUnstake"] = "irismod.farm.MsgUnstake";
  TxType["MsgHarvest"] = "irismod.farm.MsgHarvest";
  TxType["MsgIssueDenom"] = "irismod.nft.MsgIssueDenom";
  TxType["MsgTransferNFT"] = "irismod.nft.MsgTransferNFT";
  TxType["MsgEditNFT"] = "irismod.nft.MsgEditNFT";
  TxType["MsgMintNFT"] = "irismod.nft.MsgMintNFT";
  TxType["MsgBurnNFT"] = "irismod.nft.MsgBurnNFT";
  TxType["MsgIssueToken"] = "irismod.token.v1.MsgIssueToken";
  TxType["MsgEditToken"] = "irismod.token.v1.MsgEditToken";
  TxType["MsgMintToken"] = "irismod.token.v1.MsgMintToken";
  TxType["MsgBurnToken"] = "irismod.token.v1.MsgBurnToken";
  TxType["MsgTransferTokenOwner"] = "irismod.token.v1.MsgTransferTokenOwner";
  TxType["MsgSwapFeeToken"] = "irismod.token.v1.MsgSwapFeeToken";
  TxType["MsgSwapToERC20"] = "irismod.token.v1.MsgSwapToERC20";
  TxType["MsgSwapFromERC20"] = "irismod.token.v1.MsgSwapFromERC20";
  TxType["MsgSubmitProposal"] = "cosmos.gov.v1beta1.MsgSubmitProposal";
  TxType["MsgVote"] = "cosmos.gov.v1beta1.MsgVote";
  TxType["MsgVoteWeighted"] = "cosmos.gov.v1beta1.MsgVoteWeighted";
  TxType["MsgDeposit"] = "cosmos.gov.v1beta1.MsgDeposit";
  TxType["MsgCreateHTLC"] = "irismod.htlc.MsgCreateHTLC";
  TxType["MsgClaimHTLC"] = "irismod.htlc.MsgClaimHTLC";
  TxType["MsgTransfer"] = "ibc.applications.transfer.v1.MsgTransfer";
  TxType["MsgIbcNftTransfer"] = "ibc.applications.nft_transfer.v1.MsgTransfer";
  return TxType;
}({});
/** 
 * Base Tx
 * @hidden
 */
/** Abstract Tx Value */
/** 
 * Base Coin
 * @hidden
 */
/** 
 * Base JSONRPCResponse
 * @hidden
 */
/** 
 * JsonRpc Error
 */
/** 
 * Base Pubkey
 * @hidden
 */
/** 
 * Base Pubkey Type
 * @hidden
 */
var PubkeyType = exports.PubkeyType = /*#__PURE__*/function (PubkeyType) {
  PubkeyType["secp256k1"] = "secp256k1";
  PubkeyType["ed25519"] = "ed25519";
  PubkeyType["sm2"] = "sm2";
  return PubkeyType;
}({});
/** Tag struct */
/**
 * Bech32 Prefix
 */