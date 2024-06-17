"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxModelCreator = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var types = _interopRequireWildcard(require("../types"));
var _txHelper = require("./txHelper");
var _errors = require("../errors");
var _buffer = require("buffer");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var TxModelCreator = exports.TxModelCreator = /*#__PURE__*/function () {
  function TxModelCreator() {
    (0, _classCallCheck2["default"])(this, TxModelCreator);
  }
  return (0, _createClass2["default"])(TxModelCreator, null, [{
    key: "createBodyModel",
    value: function createBodyModel(msgs, memo, timeoutHeight) {
      var body = new types.tx_tx_pb.TxBody();
      msgs.forEach(function (msg) {
        body.addMessages(msg.pack());
      });
      body.setMemo(memo);
      body.setTimeoutHeight(timeoutHeight);
      return body;
    }
  }, {
    key: "createAuthInfoModel",
    value: function createAuthInfoModel(fee, sequence, publicKey) {
      var authInfo = new types.tx_tx_pb.AuthInfo();
      var feeModel = TxModelCreator.createFeeModel(fee.amount, fee.gasLimit);
      authInfo.setFee(feeModel);
      if (publicKey && typeof sequence != 'undefined') {
        var signerInfo = TxModelCreator.createSignerInfoModel(sequence, publicKey);
        authInfo.addSignerInfos(signerInfo);
      }
      return authInfo;
    }
  }, {
    key: "createSignerInfoModel",
    value: function createSignerInfoModel(sequence, publicKey) {
      var single = new types.tx_tx_pb.ModeInfo.Single();
      single.setMode(types.signing_signing_pb.SignMode.SIGN_MODE_DIRECT);
      var mode_info = new types.tx_tx_pb.ModeInfo();
      mode_info.setSingle(single);
      var signerInfo = new types.tx_tx_pb.SignerInfo();
      signerInfo.setModeInfo(mode_info);
      signerInfo.setSequence(sequence);
      if (publicKey) {
        var pk = TxModelCreator.createPublicKeyModel(publicKey);
        signerInfo.setPublicKey(TxModelCreator.createAnyModel(pk.type, pk.value.serializeBinary()));
      }
      return signerInfo;
    }
  }, {
    key: "createPublicKeyModel",
    value: function createPublicKeyModel(publicKey) {
      if (typeof publicKey == 'string') {
        publicKey = {
          type: types.PubkeyType.secp256k1,
          value: publicKey
        };
      }
      var pk_hex = _txHelper.TxHelper.getHexPubkey(publicKey.value);
      var pubByteArray = Array.from(_buffer.Buffer.from(pk_hex, 'hex'));
      if (pubByteArray.length > 33) {
        //去掉amino编码前缀
        pubByteArray = pubByteArray.slice(5);
      }
      var pk;
      var type = '';
      switch (publicKey.type) {
        case types.PubkeyType.secp256k1:
          type = 'cosmos.crypto.secp256k1.PubKey';
          pk = new types.crypto_secp256k1_keys_pb.PubKey();
          break;
        case types.PubkeyType.ed25519:
          type = 'cosmos.crypto.ed25519.PubKey';
          pk = new types.crypto_ed25519_keys_pb.PubKey();
          break;
        case types.PubkeyType.sm2:
          type = 'cosmos.crypto.sm2.PubKey';
          pk = new types.crypto_sm2_keys_pb.PubKey();
          break;
      }
      if (!pk) {
        throw new _errors.SdkError("Unsupported public Key types", _errors.CODES.InvalidPubkey);
      }
      pk.setKey(Uint8Array.from(_buffer.Buffer.from(pubByteArray)));
      return {
        type: type,
        value: pk
      };
    }
  }, {
    key: "createFeeModel",
    value: function createFeeModel(amounts, gasLimit) {
      var fee = new types.tx_tx_pb.Fee();
      amounts.forEach(function (amount) {
        var coin = TxModelCreator.createCoinModel(amount.denom, amount.amount);
        fee.addAmount(coin);
      });
      fee.setGasLimit(String(gasLimit));
      return fee;
    }
  }, {
    key: "createCoinModel",
    value: function createCoinModel(denom, amount) {
      var coin = new types.base_coin_pb.Coin();
      coin.setDenom(denom);
      coin.setAmount(String(amount));
      return coin;
    }
  }, {
    key: "createAnyModel",
    value: function createAnyModel(typeUrl, value) {
      var msg_any = new types.any_pb.Any();
      msg_any.setTypeUrl("/".concat(typeUrl));
      msg_any.setValue(value);
      return msg_any;
    }
  }]);
}();