"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxType = exports.Msg = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _helper = require("../helper");

/** 
 * Base Msg
 * @hidden
 */
var Msg = /*#__PURE__*/function () {
  function Msg(type) {
    (0, _classCallCheck2["default"])(this, Msg);
    (0, _defineProperty2["default"])(this, "type", void 0);
    (0, _defineProperty2["default"])(this, "value", void 0);
    this.type = type;
  }

  (0, _createClass2["default"])(Msg, [{
    key: "getModel",
    value: function getModel() {
      throw new Error("not implement");
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
        throw new Error("msgValue can not be empty");
      }

      var msg = this.constructor.getModelClass().deserializeBinary(Buffer.from(msgValue, 'base64'));

      if (msg) {
        return msg;
      } else {
        throw new Error("unpack message fail");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      throw new Error("not implement");
    }
  }]);
  return Msg;
}();

exports.Msg = Msg;
var TxType;
/** 
 * Base Tx
 * @hidden
 */

exports.TxType = TxType;

(function (TxType) {
  TxType["MsgSend"] = "cosmos.bank.v1beta1.MsgSend";
  TxType["MsgMultiSend"] = "cosmos.bank.v1beta1.MsgMultiSend";
  TxType["MsgDelegate"] = "cosmos.staking.v1beta1.MsgDelegate";
  TxType["MsgUndelegate"] = "cosmos.staking.v1beta1.MsgUndelegate";
  TxType["MsgBeginRedelegate"] = "cosmos.staking.v1beta1.MsgBeginRedelegate";
  TxType["MsgWithdrawDelegatorReward"] = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
  TxType["MsgSetWithdrawAddress"] = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
  TxType["MsgWithdrawValidatorCommission"] = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
  TxType["MsgFundCommunityPool"] = "cosmos.distribution.v1beta1.MsgFundCommunityPool";
  TxType["MsgAddLiquidity"] = "irismod.coinswap.MsgAddLiquidity";
  TxType["MsgRemoveLiquidity"] = "irismod.coinswap.MsgRemoveLiquidity";
  TxType["MsgSwapOrder"] = "irismod.coinswap.MsgSwapOrder";
  TxType["MsgIssueDenom"] = "irismod.nft.MsgIssueDenom";
  TxType["MsgTransferNFT"] = "irismod.nft.MsgTransferNFT";
  TxType["MsgEditNFT"] = "irismod.nft.MsgEditNFT";
  TxType["MsgMintNFT"] = "irismod.nft.MsgMintNFT";
  TxType["MsgBurnNFT"] = "irismod.nft.MsgBurnNFT";
  TxType["MsgIssueToken"] = "irismod.token.MsgIssueToken";
  TxType["MsgEditToken"] = "irismod.token.MsgEditToken";
  TxType["MsgMintToken"] = "irismod.token.MsgMintToken";
  TxType["MsgTransferTokenOwner"] = "irismod.token.MsgTransferTokenOwner";
})(TxType || (exports.TxType = TxType = {}));