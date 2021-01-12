"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Bech32 = _interopRequireWildcard(require("bech32"));

var types = _interopRequireWildcard(require("../types"));

var TxHelper = /*#__PURE__*/function () {
  function TxHelper() {
    (0, _classCallCheck2["default"])(this, TxHelper);
  }

  (0, _createClass2["default"])(TxHelper, null, [{
    key: "getHexPubkey",
    value: function getHexPubkey(pubkey) {
      try {
        var pk = Bech32.decode(pubkey);
        pubkey = Buffer.from(Bech32.fromWords(pk.words)).toString('hex').toUpperCase();
      } catch (e) {}

      return pubkey;
    }
  }, {
    key: "isSignDoc",
    value: function isSignDoc(signDoc) {
      return signDoc instanceof types.tx_tx_pb.SignDoc;
    }
  }, {
    key: "isAny",
    value: function isAny(value) {
      return value instanceof types.any_pb.Any;
    }
  }, {
    key: "ecodeModelAddress",
    value: function ecodeModelAddress(address) {
      if (!address) {
        throw new Error("address is empty");
      }

      var words = Bech32.decode(address, 'utf-8').words;
      return Buffer.from(Bech32.fromWords(words));
    }
  }]);
  return TxHelper;
}();

exports.TxHelper = TxHelper;