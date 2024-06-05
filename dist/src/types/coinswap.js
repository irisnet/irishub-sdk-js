"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSwapOrder = exports.MsgRemoveLiquidity = exports.MsgAddLiquidity = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _types = require("./types");
var _helper = require("../helper");
var pbs = _interopRequireWildcard(require("./proto"));
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * param struct for add liquidity tx
 */
/**
 * Msg for add liquidity
 *
 * @hidden
 */
var MsgAddLiquidity = exports.MsgAddLiquidity = /*#__PURE__*/function (_Msg) {
  function MsgAddLiquidity(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgAddLiquidity);
    _this = _callSuper(this, MsgAddLiquidity, [_types.TxType.MsgAddLiquidity]);
    _this.value = msg;
    return _this;
  }
  (0, _inherits2["default"])(MsgAddLiquidity, _Msg);
  return (0, _createClass2["default"])(MsgAddLiquidity, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setExactStandardAmt(this.value.exact_standard_amt);
      msg.setMinLiquidity(this.value.min_liquidity);
      msg.setMaxToken(_helper.TxModelCreator.createCoinModel(this.value.max_token.denom, this.value.max_token.amount));
      msg.setDeadline(this.value.deadline);
      msg.setSender(this.value.sender);
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.max_token) {
        throw new _errors.SdkError("max_token is empty");
      }
      if (!this.value.exact_standard_amt) {
        throw new _errors.SdkError("exact_standard_amt is empty");
      }
      if (!this.value.min_liquidity) {
        throw new _errors.SdkError("min_liquidity is empty");
      }
      if (!this.value.deadline) {
        throw new _errors.SdkError("deadline is empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.coinswap_tx_pb.MsgAddLiquidity;
    }
  }]);
}(_types.Msg);
/**
 * param struct for add liquidity tx
 */
/**
 * Msg for remove liquidity
 *
 * @hidden
 */
var MsgRemoveLiquidity = exports.MsgRemoveLiquidity = /*#__PURE__*/function (_Msg2) {
  function MsgRemoveLiquidity(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgRemoveLiquidity);
    _this2 = _callSuper(this, MsgRemoveLiquidity, [_types.TxType.MsgRemoveLiquidity]);
    _this2.value = msg;
    return _this2;
  }
  (0, _inherits2["default"])(MsgRemoveLiquidity, _Msg2);
  return (0, _createClass2["default"])(MsgRemoveLiquidity, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setWithdrawLiquidity(_helper.TxModelCreator.createCoinModel(this.value.withdraw_liquidity.denom, this.value.withdraw_liquidity.amount));
      msg.setMinToken(this.value.min_token);
      msg.setMinStandardAmt(this.value.min_standard_amt);
      msg.setDeadline(this.value.deadline);
      msg.setSender(this.value.sender);
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.withdraw_liquidity) {
        throw new _errors.SdkError("withdraw_liquidity is empty");
      }
      if (!this.value.min_token) {
        throw new _errors.SdkError("min_token is empty");
      }
      if (!this.value.min_standard_amt) {
        throw new _errors.SdkError("min_standard_amt is empty");
      }
      if (!this.value.deadline) {
        throw new _errors.SdkError("deadline is empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.coinswap_tx_pb.MsgRemoveLiquidity;
    }
  }]);
}(_types.Msg);
/**
 * param struct for add liquidity tx
 */
/**
 * Msg for swap order
 *
 * @hidden
 */
var MsgSwapOrder = exports.MsgSwapOrder = /*#__PURE__*/function (_Msg3) {
  function MsgSwapOrder(msg) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgSwapOrder);
    _this3 = _callSuper(this, MsgSwapOrder, [_types.TxType.MsgSwapOrder]);
    _this3.value = msg;
    return _this3;
  }
  (0, _inherits2["default"])(MsgSwapOrder, _Msg3);
  return (0, _createClass2["default"])(MsgSwapOrder, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      var inputMsg = new pbs.coinswap_coinswap_pb.Input();
      inputMsg.setAddress(this.value.input.address);
      inputMsg.setCoin(_helper.TxModelCreator.createCoinModel(this.value.input.coin.denom, this.value.input.coin.amount));
      msg.setInput(inputMsg);
      var outputMsg = new pbs.coinswap_coinswap_pb.Output();
      outputMsg.setAddress(this.value.output.address);
      outputMsg.setCoin(_helper.TxModelCreator.createCoinModel(this.value.output.coin.denom, this.value.output.coin.amount));
      msg.setOutput(outputMsg);
      msg.setDeadline(this.value.deadline);
      msg.setIsBuyOrder(this.value.is_buy_order);
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.input) {
        throw new _errors.SdkError("input is empty");
      }
      if (!this.value.output) {
        throw new _errors.SdkError("output is empty");
      }
      if (!this.value.deadline) {
        throw new _errors.SdkError("deadline is empty");
      }
      if (!this.value.is_buy_order) {
        throw new _errors.SdkError("is_buy_order is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.coinswap_tx_pb.MsgSwapOrder;
    }
  }]);
}(_types.Msg);