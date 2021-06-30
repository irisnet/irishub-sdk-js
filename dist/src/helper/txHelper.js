"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Bech32 = _interopRequireWildcard(require("bech32"));

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
        throw new _errors.SdkError("address is empty", _errors.CODES.UnknownAddress);
      }

      var words = Bech32.decode(address, 'utf-8').words;
      return Buffer.from(Bech32.fromWords(words));
    }
  }]);
  return TxHelper;
}();

exports.TxHelper = TxHelper;