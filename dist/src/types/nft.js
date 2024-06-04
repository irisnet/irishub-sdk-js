"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgTransferNFT = exports.MsgMintNFT = exports.MsgIssueDenom = exports.MsgEditNFT = exports.MsgBurnNFT = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _index = require("./index");
var pbs = _interopRequireWildcard(require("./proto"));
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * param struct for issue denom tx
 */
/**
 * Msg for issue denom
 *
 * @hidden
 */
var MsgIssueDenom = exports.MsgIssueDenom = /*#__PURE__*/function (_Msg) {
  function MsgIssueDenom(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgIssueDenom);
    _this = _callSuper(this, MsgIssueDenom, [_index.TxType.MsgIssueDenom]);
    (0, _defineProperty2["default"])(_this, "value", void 0);
    _this.value = msg;
    return _this;
  }
  (0, _inherits2["default"])(MsgIssueDenom, _Msg);
  return (0, _createClass2["default"])(MsgIssueDenom, [{
    key: "getModel",
    value: function getModel() {
      var _this$value, _this$value2, _this$value3, _this$value4, _this$value5, _this$value6, _this$value7;
      var msg = new (this.constructor.getModelClass())();
      msg.setId(this.value.id);
      msg.setName(this.value.name);
      msg.setSchema(this.value.schema);
      msg.setSender(this.value.sender);
      ((_this$value = this.value) === null || _this$value === void 0 ? void 0 : _this$value.symbol) && msg.setSymbol(this.value.symbol);
      ((_this$value2 = this.value) === null || _this$value2 === void 0 ? void 0 : _this$value2.mint_restricted) && msg.setMintRestricted(this.value.mint_restricted);
      ((_this$value3 = this.value) === null || _this$value3 === void 0 ? void 0 : _this$value3.update_restricted) && msg.setUpdateRestricted(this.value.update_restricted);
      ((_this$value4 = this.value) === null || _this$value4 === void 0 ? void 0 : _this$value4.description) && msg.setDescription(this.value.description);
      ((_this$value5 = this.value) === null || _this$value5 === void 0 ? void 0 : _this$value5.uri) && msg.setUri(this.value.uri);
      ((_this$value6 = this.value) === null || _this$value6 === void 0 ? void 0 : _this$value6.uri_hash) && msg.setUriHash(this.value.uri_hash);
      ((_this$value7 = this.value) === null || _this$value7 === void 0 ? void 0 : _this$value7.data) && msg.setData(this.value.data);
      return msg;
    }
  }, {
    key: "Validate",
    value: function Validate() {
      if (!this.value.id) {
        throw new _errors.SdkError("id can not be empty");
      }
      if (!this.value.name) {
        throw new _errors.SdkError("name can not be empty");
      }
      if (!this.value.schema) {
        throw new _errors.SdkError("schema can not be empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender can not be empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.nft_tx_pb.MsgIssueDenom;
    }
  }]);
}(_index.Msg);
/**
 * param struct for Mint NFT
 */
/**
 * Msg for Mint NFT
 *
 * @hidden
 */
var MsgMintNFT = exports.MsgMintNFT = /*#__PURE__*/function (_Msg2) {
  function MsgMintNFT(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgMintNFT);
    _this2 = _callSuper(this, MsgMintNFT, [_index.TxType.MsgMintNFT]);
    (0, _defineProperty2["default"])(_this2, "value", void 0);
    _this2.value = msg;
    return _this2;
  }
  (0, _inherits2["default"])(MsgMintNFT, _Msg2);
  return (0, _createClass2["default"])(MsgMintNFT, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setId(this.value.id);
      msg.setDenomId(this.value.denom_id);
      msg.setName(this.value.name);
      msg.setUri(this.value.uri);
      msg.setData(this.value.data);
      msg.setSender(this.value.sender);
      msg.setRecipient(this.value.recipient);
      msg.setUriHash(this.value.uri_hash);
      return msg;
    }
  }, {
    key: "Validate",
    value: function Validate() {
      if (!this.value.id) {
        throw new _errors.SdkError("id can not be empty");
      }
      if (!this.value.denom_id) {
        throw new _errors.SdkError("denom_id can not be empty");
      }
      if (!this.value.name) {
        throw new _errors.SdkError("name can not be empty");
      }
      if (!this.value.uri) {
        throw new _errors.SdkError("uri can not be empty");
      }
      if (!this.value.data) {
        throw new _errors.SdkError("data can not be empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender can not be empty");
      }
      if (!this.value.recipient) {
        throw new _errors.SdkError("recipient can not be empty");
      }
      if (!this.value.uri_hash) {
        throw new _errors.SdkError("uri_hash can not be empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.nft_tx_pb.MsgMintNFT;
    }
  }]);
}(_index.Msg);
/**
 * param struct for Edit NFT tx
 */
/**
 * Msg for Edit NFT
 *
 * @hidden
 */
var MsgEditNFT = exports.MsgEditNFT = /*#__PURE__*/function (_Msg3) {
  function MsgEditNFT(msg) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgEditNFT);
    _this3 = _callSuper(this, MsgEditNFT, [_index.TxType.MsgEditNFT]);
    (0, _defineProperty2["default"])(_this3, "value", void 0);
    _this3.value = msg;
    return _this3;
  }
  (0, _inherits2["default"])(MsgEditNFT, _Msg3);
  return (0, _createClass2["default"])(MsgEditNFT, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setId(this.value.id);
      msg.setDenomId(this.value.denom_id);
      msg.setSender(this.value.sender);
      if (typeof this.value.name === 'undefined') {
        msg.setName(_index.doNotModify);
      } else {
        msg.setName(this.value.name);
      }
      if (typeof this.value.uri === 'undefined') {
        msg.setUri(_index.doNotModify);
      } else {
        msg.setUri(this.value.uri);
      }
      if (typeof this.value.data === 'undefined') {
        msg.setData(_index.doNotModify);
      } else {
        msg.setData(this.value.data);
      }
      if (typeof this.value.uri_hash === 'undefined') {
        msg.setUriHash(_index.doNotModify);
      } else {
        msg.setUriHash(this.value.uri_hash);
      }
      return msg;
    }
  }, {
    key: "Validate",
    value: function Validate() {
      if (!this.value.id) {
        throw new _errors.SdkError("id can not be empty");
      }
      if (!this.value.denom_id) {
        throw new _errors.SdkError("denom_id can not be empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender can not be empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.nft_tx_pb.MsgEditNFT;
    }
  }]);
}(_index.Msg);
/**
 * param struct for Transfer NFT tx
 */
/**
 * Msg for Transfer NFT
 *
 * @hidden
 */
var MsgTransferNFT = exports.MsgTransferNFT = /*#__PURE__*/function (_Msg4) {
  function MsgTransferNFT(msg) {
    var _this4;
    (0, _classCallCheck2["default"])(this, MsgTransferNFT);
    _this4 = _callSuper(this, MsgTransferNFT, [_index.TxType.MsgTransferNFT]);
    (0, _defineProperty2["default"])(_this4, "value", void 0);
    _this4.value = msg;
    return _this4;
  }
  (0, _inherits2["default"])(MsgTransferNFT, _Msg4);
  return (0, _createClass2["default"])(MsgTransferNFT, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setId(this.value.id);
      msg.setDenomId(this.value.denom_id);
      msg.setSender(this.value.sender);
      msg.setRecipient(this.value.recipient);
      if (typeof this.value.name === 'undefined') {
        msg.setName(_index.doNotModify);
      } else {
        msg.setName(this.value.name);
      }
      if (typeof this.value.uri === 'undefined') {
        msg.setUri(_index.doNotModify);
      } else {
        msg.setUri(this.value.uri);
      }
      if (typeof this.value.data === 'undefined') {
        msg.setData(_index.doNotModify);
      } else {
        msg.setData(this.value.data);
      }
      if (typeof this.value.uri_hash === 'undefined') {
        msg.setUriHash(_index.doNotModify);
      } else {
        msg.setUriHash(this.value.uri_hash);
      }
      return msg;
    }
  }, {
    key: "Validate",
    value: function Validate() {
      if (!this.value.id) {
        throw new _errors.SdkError("id can not be empty");
      }
      if (!this.value.denom_id) {
        throw new _errors.SdkError("denom_id can not be empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender can not be empty");
      }
      if (!this.value.recipient) {
        throw new _errors.SdkError("recipient can not be empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.nft_tx_pb.MsgTransferNFT;
    }
  }]);
}(_index.Msg);
/**
 * param struct for Burn NFT tx
 */
/**
 * Msg for Burn NFT
 *
 * @hidden
 */
var MsgBurnNFT = exports.MsgBurnNFT = /*#__PURE__*/function (_Msg5) {
  function MsgBurnNFT(msg) {
    var _this5;
    (0, _classCallCheck2["default"])(this, MsgBurnNFT);
    _this5 = _callSuper(this, MsgBurnNFT, [_index.TxType.MsgBurnNFT]);
    (0, _defineProperty2["default"])(_this5, "value", void 0);
    _this5.value = msg;
    return _this5;
  }
  (0, _inherits2["default"])(MsgBurnNFT, _Msg5);
  return (0, _createClass2["default"])(MsgBurnNFT, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setId(this.value.id);
      msg.setDenomId(this.value.denom_id);
      msg.setSender(this.value.sender);
      return msg;
    }
  }, {
    key: "Validate",
    value: function Validate() {
      if (!this.value.id) {
        throw new _errors.SdkError("id can not be empty");
      }
      if (!this.value.denom_id) {
        throw new _errors.SdkError("denom_id can not be empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender can not be empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.nft_tx_pb.MsgBurnNFT;
    }
  }]);
}(_index.Msg);