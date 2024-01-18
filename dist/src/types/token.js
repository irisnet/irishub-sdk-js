"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgTransferTokenOwner = exports.MsgSwapFeeToken = exports.MsgMintToken = exports.MsgIssueToken = exports.MsgEditToken = exports.MsgBurnToken = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("./types");
var _helper = require("../helper");
var is = _interopRequireWildcard(require("is_js"));
var pbs = _interopRequireWildcard(require("./proto"));
var _errors = require("../errors");
var _constants = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * param struct for issue token tx
 */
/**
 * param struct for mint token tx
 */
/**
 * param struct for burn token tx
 */
/**
 * param struct for edit token tx
 */
/**
 * param struct for transfer token owner tx
 */
/**
 * param struct for Swap Fee Token tx
 */
/**
 * Msg struct for issue token
 * @hidden
 */
var MsgIssueToken = exports.MsgIssueToken = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgIssueToken, _Msg);
  var _super = _createSuper(MsgIssueToken);
  function MsgIssueToken(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgIssueToken);
    _this = _super.call(this, _types.TxType.MsgIssueToken);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = msg;
    return _this;
  }
  (0, _createClass2["default"])(MsgIssueToken, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())().setSymbol(this.value.symbol).setName(this.value.name).setMinUnit(this.value.min_unit).setOwner(this.value.owner);
      if (is.not.undefined(this.value.scale)) {
        msg.setScale(this.value.scale);
      }
      if (is.not.undefined(this.value.initial_supply)) {
        msg.setInitialSupply(this.value.initial_supply);
      }
      if (is.not.undefined(this.value.max_supply)) {
        msg.setMaxSupply(this.value.max_supply);
      }
      if (is.not.undefined(this.value.mintable)) {
        msg.setMintable(this.value.mintable);
      }
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.symbol)) {
        throw new _errors.SdkError("token symbol can not be empty");
      }
      if (is.undefined(this.value.name)) {
        throw new _errors.SdkError("name can not be empty");
      }
      if (is.undefined(this.value.min_unit)) {
        throw new _errors.SdkError("min unit can not be empty");
      }
      if (is.undefined(this.value.owner)) {
        throw new _errors.SdkError("owner can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.token_tx_pb.MsgIssueToken;
    }
  }]);
  return MsgIssueToken;
}(_types.Msg);
/**
 * Msg struct for edit token
 * @hidden
 */
var MsgEditToken = exports.MsgEditToken = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgEditToken, _Msg2);
  var _super2 = _createSuper(MsgEditToken);
  function MsgEditToken(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgEditToken);
    _this2 = _super2.call(this, _types.TxType.MsgEditToken);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    _this2.value = msg;
    return _this2;
  }
  (0, _createClass2["default"])(MsgEditToken, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())().setSymbol(this.value.symbol).setOwner(this.value.owner);
      if (is.not.undefined(this.value.name)) {
        msg.setName(this.value.name);
      }
      if (is.not.undefined(this.value.max_supply)) {
        msg.setMaxSupply(this.value.max_supply);
      }
      if (is.not.undefined(this.value.mintable)) {
        msg.setMintable(this.value.mintable);
      } else {
        msg.setMintable(_constants.doNotModify);
      }
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.symbol)) {
        throw new _errors.SdkError("token symbol can not be empty");
      }
      if (is.undefined(this.value.owner)) {
        throw new _errors.SdkError("owner can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.token_tx_pb.MsgEditToken;
    }
  }]);
  return MsgEditToken;
}(_types.Msg);
/**
 * Msg struct for mint token
 * @hidden
 */
var MsgMintToken = exports.MsgMintToken = /*#__PURE__*/function (_Msg3) {
  (0, _inherits2["default"])(MsgMintToken, _Msg3);
  var _super3 = _createSuper(MsgMintToken);
  function MsgMintToken(msg) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgMintToken);
    _this3 = _super3.call(this, _types.TxType.MsgMintToken);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "value", void 0);
    _this3.value = msg;
    return _this3;
  }
  (0, _createClass2["default"])(MsgMintToken, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())().setCoin(_helper.TxModelCreator.createCoinModel(this.value.coin.denom, this.value.coin.amount)).setOwner(this.value.owner);
      if (is.not.undefined(this.value.to)) {
        msg.setTo(this.value.to);
      }
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.coin)) {
        throw new _errors.SdkError("coin can not be empty");
      }
      if (is.undefined(this.value.owner)) {
        throw new _errors.SdkError("owner can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.token_tx_pb.MsgMintToken;
    }
  }]);
  return MsgMintToken;
}(_types.Msg);
/**
 * Msg struct for mint token
 * @hidden
 */
var MsgBurnToken = exports.MsgBurnToken = /*#__PURE__*/function (_Msg4) {
  (0, _inherits2["default"])(MsgBurnToken, _Msg4);
  var _super4 = _createSuper(MsgBurnToken);
  function MsgBurnToken(msg) {
    var _this4;
    (0, _classCallCheck2["default"])(this, MsgBurnToken);
    _this4 = _super4.call(this, _types.TxType.MsgBurnToken);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "value", void 0);
    _this4.value = msg;
    return _this4;
  }
  (0, _createClass2["default"])(MsgBurnToken, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())().setCoin(_helper.TxModelCreator.createCoinModel(this.value.coin.denom, this.value.coin.amount)).setSender(this.value.sender);
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.coin)) {
        throw new _errors.SdkError("coin can not be empty");
      }
      if (is.undefined(this.value.sender)) {
        throw new _errors.SdkError("sender can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.token_tx_pb.MsgBurnToken;
    }
  }]);
  return MsgBurnToken;
}(_types.Msg);
/**
 * Msg struct for transfer token owner
 * @hidden
 */
var MsgTransferTokenOwner = exports.MsgTransferTokenOwner = /*#__PURE__*/function (_Msg5) {
  (0, _inherits2["default"])(MsgTransferTokenOwner, _Msg5);
  var _super5 = _createSuper(MsgTransferTokenOwner);
  function MsgTransferTokenOwner(msg) {
    var _this5;
    (0, _classCallCheck2["default"])(this, MsgTransferTokenOwner);
    _this5 = _super5.call(this, _types.TxType.MsgTransferTokenOwner);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "value", void 0);
    _this5.value = msg;
    return _this5;
  }
  (0, _createClass2["default"])(MsgTransferTokenOwner, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())().setSymbol(this.value.symbol).setSrcOwner(this.value.src_owner).setDstOwner(this.value.dst_owner);
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.symbol)) {
        throw new _errors.SdkError("token symbol can not be empty");
      }
      if (is.undefined(this.value.src_owner)) {
        throw new _errors.SdkError("source owner can not be empty");
      }
      if (is.undefined(this.value.dst_owner)) {
        throw new _errors.SdkError("destination owner can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.token_tx_pb.MsgTransferTokenOwner;
    }
  }]);
  return MsgTransferTokenOwner;
}(_types.Msg);
/**
 * Msg struct for Swap Fee Token
 * @hidden
 */
var MsgSwapFeeToken = exports.MsgSwapFeeToken = /*#__PURE__*/function (_Msg6) {
  (0, _inherits2["default"])(MsgSwapFeeToken, _Msg6);
  var _super6 = _createSuper(MsgSwapFeeToken);
  function MsgSwapFeeToken(msg) {
    var _this6;
    (0, _classCallCheck2["default"])(this, MsgSwapFeeToken);
    _this6 = _super6.call(this, _types.TxType.MsgSwapFeeToken);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "value", void 0);
    _this6.value = msg;
    return _this6;
  }
  (0, _createClass2["default"])(MsgSwapFeeToken, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())().setFeePaid(_helper.TxModelCreator.createCoinModel(this.value.fee_paid.denom, this.value.fee_paid.amount)).setSender(this.value.sender);
      if (this.value.recipient) {
        msg.setRecipient(this.value.recipient);
      }
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.fee_paid)) {
        throw new _errors.SdkError("coin can not be empty");
      }
      if (is.undefined(this.value.sender)) {
        throw new _errors.SdkError("sender can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.token_tx_pb.MsgSwapFeeToken;
    }
  }]);
  return MsgSwapFeeToken;
}(_types.Msg);