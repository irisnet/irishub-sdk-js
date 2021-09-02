"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Protobuf = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
     * @param  {[type]} msg tx msg of proto any type
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
            messageModelClass = types.MsgAddLiquidity.getModelClass();
            break;
          }

        case types.TxType.MsgRemoveLiquidity:
          {
            messageModelClass = types.MsgRemoveLiquidity.getModelClass();
            break;
          }

        case types.TxType.MsgSwapOrder:
          {
            messageModelClass = types.MsgSwapOrder.getModelClass();
            break;
          }
        //farm

        case types.TxType.MsgStake:
          {
            messageModelClass = types.MsgStake.getModelClass();
            break;
          }

        case types.TxType.MsgUnstake:
          {
            messageModelClass = types.MsgUnstake.getModelClass();
            break;
          }

        case types.TxType.MsgHarvest:
          {
            messageModelClass = types.MsgHarvest.getModelClass();
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
        //gov

        case types.TxType.MsgSubmitProposal:
          {
            messageModelClass = types.MsgSubmitProposal.getModelClass();
            break;
          }

        case types.TxType.MsgVote:
          {
            messageModelClass = types.MsgVote.getModelClass();
            break;
          }

        case types.TxType.MsgDeposit:
          {
            messageModelClass = types.MsgDeposit.getModelClass();
            break;
          }
        //htlc

        case types.TxType.MsgCreateHTLC:
          {
            messageModelClass = types.MsgCreateHTLC.getModelClass();
            break;
          }

        case types.TxType.MsgClaimHTLC:
          {
            messageModelClass = types.MsgClaimHTLC.getModelClass();
            break;
          }
        //ibc

        case types.TxType.MsgTransfer:
          {
            messageModelClass = types.MsgTransfer.getModelClass();
            break;
          }

        default:
          {
            throw new _errors.SdkError("not exist tx type", _errors.CODES.InvalidType);
          }
      }

      if (messageModelClass && messageModelClass.deserializeBinary) {
        var messageObj = messageModelClass.deserializeBinary(msg.value);

        if (!returnProtobufModel) {
          messageObj = messageObj.toObject();
          messageObj.type = typeUrl;
        }

        if (typeUrl == types.TxType.MsgSubmitProposal && messageObj.content && messageObj.content.typeUrl && messageObj.content.value) {
          messageObj.content = this.unpackProposalContent(messageObj.content);
        }

        return messageObj;
      } else {
        return null;
      }
    }
    /**
     * Unpack protobuffer Proposal Content
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @param  {[type]} content proposal Content of proto any type
     * @return {[type]} message object 
     */

  }, {
    key: "unpackProposalContent",
    value: function unpackProposalContent(content, returnProtobufModel) {
      if (!content) {
        return null;
      }

      var contentModelClass;
      var typeUrl = content.typeUrl.replace(/^\//, '');

      switch (typeUrl) {
        case types.ProposalType.Text_Proposal:
          {
            contentModelClass = types.gov_gov_pb.TextProposal;
            break;
          }

        case types.ProposalType.Community_Pool_Spend_Proposal:
          {
            contentModelClass = types.distribution_distribution_pb.CommunityPoolSpendProposal;
            break;
          }

        case types.ProposalType.Parameter_Change_Proposal:
          {
            contentModelClass = types.params_params_pb.ParameterChangeProposal;
            break;
          }

        case types.ProposalType.Software_Upgrade_Proposal:
          {
            contentModelClass = types.upgrade_upgrade_pb.SoftwareUpgradeProposal;
            break;
          }

        case types.ProposalType.Cancel_Software_Upgrade_Proposal:
          {
            contentModelClass = types.upgrade_upgrade_pb.CancelSoftwareUpgradeProposal;
            break;
          }
      }

      if (contentModelClass && contentModelClass.deserializeBinary) {
        var contentObj = contentModelClass.deserializeBinary(content.value);

        if (!returnProtobufModel && contentObj && contentObj.toObject) {
          contentObj = contentObj.toObject();
          contentObj.type = typeUrl;
        }

        return contentObj;
      } else {
        return null;
      }
    }
    /**
     * deserialize TxBody
     * @param  {[type]} TxBody:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} txBody object                        
     */

  }, {
    key: "deserializeTxBody",
    value: function deserializeTxBody(txBody, returnProtobufModel) {
      if (!txBody) {
        throw new _errors.SdkError('txBody can not be empty');
      }

      if (returnProtobufModel) {
        return types.tx_tx_pb.TxBody.deserializeBinary(txBody);
      } else {
        return types.tx_tx_pb.TxBody.deserializeBinary(txBody).toObject();
      }
    }
    /**
     * deserialize AuthInfo
     * @param  {[type]} AuthInfo:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} authInfo object                        
     */

  }, {
    key: "deserializeAuthInfo",
    value: function deserializeAuthInfo(authInfo, returnProtobufModel) {
      if (!authInfo) {
        throw new _errors.SdkError('authInfo can not be empty');
      }

      if (returnProtobufModel) {
        return types.tx_tx_pb.AuthInfo.deserializeBinary(authInfo);
      } else {
        return types.tx_tx_pb.AuthInfo.deserializeBinary(authInfo).toObject();
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
        return types.slashing_slashing_pb.ValidatorSigningInfo.deserializeBinary(signingInfo);
      } else {
        return types.slashing_slashing_pb.ValidatorSigningInfo.deserializeBinary(signingInfo).toObject();
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