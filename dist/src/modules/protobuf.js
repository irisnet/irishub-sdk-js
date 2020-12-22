"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Protobuf = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var slashing_pb = require('../types/proto-types/cosmos/slashing/v1beta1/slashing_pb');
/**
 * ProtobufModel module allows you to deserialize protobuf serialize string
 *
 * @category Modules
 * @since v0.17
 */


var Protobuf = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Protobuf(client) {
    (0, _classCallCheck2["default"])(this, Protobuf);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * deserialize Tx
   * @param  {[type]} Tx:string  base64 string
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} Tx object                        
   */


  (0, _createClass2["default"])(Protobuf, [{
    key: "deserializeTx",
    value: function deserializeTx(tx, returnProtobufModel) {
      var _this = this;

      if (!tx) {
        throw new _errors.SdkError('tx can not be empty');
      }

      if (returnProtobufModel) {
        return types.tx_tx_pb.Tx.deserializeBinary(tx);
      } else {
        var txObj = types.tx_tx_pb.Tx.deserializeBinary(tx).toObject();

        if (txObj.body && txObj.body.messagesList) {
          txObj.body.messagesList = txObj.body.messagesList.map(function (msg) {
            return _this.unpackMsg(msg);
          });
        }

        return txObj;
      }
    }
    /**
     * Unpack protobuffer tx msg
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} message object 
     */

  }, {
    key: "unpackMsg",
    value: function unpackMsg(msg, returnProtobufModel) {
      if (!msg) {
        throw new _errors.SdkError('message can not be empty');
      }

      var messageModelClass;
      var typeUrl = msg.typeUrl.replace(/^\//, '');

      switch (typeUrl) {
        //bank
        case types.TxType.MsgSend:
          {
            messageModelClass = types.MsgSend.getModelClass();
            break;
          }

        case types.TxType.MsgMultiSend:
          {
            messageModelClass = types.MsgMultiSend.getModelClass();
            break;
          }
        //staking

        case types.TxType.MsgDelegate:
          {
            messageModelClass = types.MsgDelegate.getModelClass();
            break;
          }

        case types.TxType.MsgUndelegate:
          {
            messageModelClass = types.MsgUndelegate.getModelClass();
            break;
          }

        case types.TxType.MsgBeginRedelegate:
          {
            messageModelClass = types.MsgRedelegate.getModelClass();
            break;
          }
        //distribution

        case types.TxType.MsgWithdrawDelegatorReward:
          {
            messageModelClass = types.MsgWithdrawDelegatorReward.getModelClass();
            break;
          }

        case types.TxType.MsgSetWithdrawAddress:
          {
            messageModelClass = types.MsgSetWithdrawAddress.getModelClass();
            break;
          }

        case types.TxType.MsgWithdrawValidatorCommission:
          {
            messageModelClass = types.MsgWithdrawValidatorCommission.getModelClass();
            break;
          }

        case types.TxType.MsgFundCommunityPool:
          {
            messageModelClass = types.MsgFundCommunityPool.getModelClass();
            break;
          }
        //token

        case types.TxType.MsgIssueToken:
          {
            messageModelClass = types.MsgIssueToken.getModelClass();
            break;
          }

        case types.TxType.MsgEditToken:
          {
            messageModelClass = types.MsgEditToken.getModelClass();
            break;
          }

        case types.TxType.MsgMintToken:
          {
            messageModelClass = types.MsgMintToken.getModelClass();
            break;
          }

        case types.TxType.MsgTransferTokenOwner:
          {
            messageModelClass = types.MsgTransferTokenOwner.getModelClass();
            break;
          }
        //coinswap

        case types.TxType.MsgAddLiquidity:
          {
            break;
          }

        case types.TxType.MsgRemoveLiquidity:
          {
            break;
          }

        case types.TxType.MsgSwapOrder:
          {
            break;
          }
        //nft

        case types.TxType.MsgIssueDenom:
          {
            messageModelClass = types.MsgIssueDenom.getModelClass();
            break;
          }

        case types.TxType.MsgMintNFT:
          {
            messageModelClass = types.MsgMintNFT.getModelClass();
            break;
          }

        case types.TxType.MsgEditNFT:
          {
            messageModelClass = types.MsgEditNFT.getModelClass();
            break;
          }

        case types.TxType.MsgTransferNFT:
          {
            messageModelClass = types.MsgTransferNFT.getModelClass();
            break;
          }

        case types.TxType.MsgBurnNFT:
          {
            messageModelClass = types.MsgBurnNFT.getModelClass();
            break;
          }

        default:
          {
            throw new Error("not exist tx type");
          }
      }

      if (messageModelClass && messageModelClass.deserializeBinary) {
        var messageObj = messageModelClass.deserializeBinary(msg.value);

        if (!returnProtobufModel) {
          messageObj = messageObj.toObject();
          messageObj.type = typeUrl;
        }

        return messageObj;
      } else {
        return null;
      }
    }
    /**
     * deserialize SignDoc
     * @param  {[type]} signDoc:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} signDoc object                        
     */

  }, {
    key: "deserializeSignDoc",
    value: function deserializeSignDoc(signDoc, returnProtobufModel) {
      if (!signDoc) {
        throw new _errors.SdkError('signDoc can not be empty');
      }

      if (returnProtobufModel) {
        return types.tx_tx_pb.SignDoc.deserializeBinary(signDoc);
      } else {
        return types.tx_tx_pb.SignDoc.deserializeBinary(signDoc).toObject();
      }
    }
    /**
     * deserialize txRaw
     * @param  {[type]} txRaw:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} txRaw object                        
     */

  }, {
    key: "deserializeTxRaw",
    value: function deserializeTxRaw(txRaw, returnProtobufModel) {
      if (!txRaw) {
        throw new _errors.SdkError('txRaw can not be empty');
      }

      if (returnProtobufModel) {
        return types.tx_tx_pb.TxRaw.deserializeBinary(txRaw);
      } else {
        return types.tx_tx_pb.TxRaw.deserializeBinary(txRaw).toObject();
      }
    }
    /**
     * deserialize Signing Info
     * @param  {[type]} signingInfo:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} Signing Info object                        
     */

  }, {
    key: "deserializeSigningInfo",
    value: function deserializeSigningInfo(signingInfo, returnProtobufModel) {
      if (!signingInfo) {
        throw new _errors.SdkError('signing info can not be empty');
      }

      if (returnProtobufModel) {
        return slashing_pb.ValidatorSigningInfo.deserializeBinary(signingInfo);
      } else {
        return slashing_pb.ValidatorSigningInfo.deserializeBinary(signingInfo).toObject();
      }
    }
    /**
     * deserialize Pubkey
     * @param  {[type]} pubKey:{typeUrl:string, value:string}
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} pubKey object                        
     */

  }, {
    key: "deserializePubkey",
    value: function deserializePubkey(pubKey, returnProtobufModel) {
      if (!pubKey) {
        throw new _errors.SdkError('pubKey can not be empty');
      }

      var result = _objectSpread({}, pubKey);

      switch (pubKey.typeUrl) {
        case '/cosmos.crypto.ed25519.PubKey':
          result.value = types.crypto_ed25519_keys_pb.PubKey.deserializeBinary(pubKey.value);
          break;

        case '/cosmos.crypto.secp256k1.PubKey':
          result.value = types.crypto_secp256k1_keys_pb.PubKey.deserializeBinary(pubKey.value);
          break;
      }

      if (!returnProtobufModel && result.value && result.value.toObject) {
        result.value = result.value.toObject();
      }

      return result;
    }
  }]);
  return Protobuf;
}();

exports.Protobuf = Protobuf;