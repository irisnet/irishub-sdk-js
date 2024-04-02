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
var _buffer = require("buffer");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var TxHelper = exports.TxHelper = /*#__PURE__*/function () {
  function TxHelper() {
    (0, _classCallCheck2["default"])(this, TxHelper);
  }
  return (0, _createClass2["default"])(TxHelper, null, [{
    key: "getHexPubkey",
    value: function getHexPubkey(pubkey) {
      try {
        var pk = Bech32.decode(pubkey);
        pubkey = _buffer.Buffer.from(Bech32.fromWords(pk.words)).toString('hex').toUpperCase();
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
      return _buffer.Buffer.from(Bech32.fromWords(words));
    }
  }]);
}();