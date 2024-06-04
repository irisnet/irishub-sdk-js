"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUnstake = exports.MsgStake = exports.MsgHarvest = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("./types");
var pbs = _interopRequireWildcard(require("./proto"));
var _errors = require("../errors");
var _helper = require("../helper");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Msg for stake lp
 *
 * @hidden
 */
var MsgStake = exports.MsgStake = /*#__PURE__*/function (_Msg) {
  function MsgStake(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgStake);
    _this = _callSuper(this, MsgStake, [_types.TxType.MsgStake]);
    (0, _defineProperty2["default"])(_this, "value", void 0);
    _this.value = msg;
    return _this;
  }
  (0, _inherits2["default"])(MsgStake, _Msg);
  return (0, _createClass2["default"])(MsgStake, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setPoolId(this.value.pool_id);
      msg.setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
      msg.setSender(this.value.sender);
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.pool_id) {
        throw new _errors.SdkError("pool_id is empty");
      }
      if (!this.value.amount) {
        throw new _errors.SdkError("amount is empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.farm_tx_pb.MsgStake;
    }
  }]);
}(_types.Msg);
/**
 * Msg for Unstake lp
 *
 * @hidden
 */
var MsgUnstake = exports.MsgUnstake = /*#__PURE__*/function (_Msg2) {
  function MsgUnstake(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgUnstake);
    _this2 = _callSuper(this, MsgUnstake, [_types.TxType.MsgUnstake]);
    (0, _defineProperty2["default"])(_this2, "value", void 0);
    _this2.value = msg;
    return _this2;
  }
  (0, _inherits2["default"])(MsgUnstake, _Msg2);
  return (0, _createClass2["default"])(MsgUnstake, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setPoolId(this.value.pool_id);
      msg.setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
      msg.setSender(this.value.sender);
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.pool_id) {
        throw new _errors.SdkError("pool_id is empty");
      }
      if (!this.value.amount) {
        throw new _errors.SdkError("amount is empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.farm_tx_pb.MsgUnstake;
    }
  }]);
}(_types.Msg);
/**
 * Msg for harvest reward
 *
 * @hidden
 */
var MsgHarvest = exports.MsgHarvest = /*#__PURE__*/function (_Msg3) {
  function MsgHarvest(msg) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgHarvest);
    _this3 = _callSuper(this, MsgHarvest, [_types.TxType.MsgHarvest]);
    (0, _defineProperty2["default"])(_this3, "value", void 0);
    _this3.value = msg;
    return _this3;
  }
  (0, _inherits2["default"])(MsgHarvest, _Msg3);
  return (0, _createClass2["default"])(MsgHarvest, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setPoolId(this.value.pool_id);
      msg.setSender(this.value.sender);
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.pool_id) {
        throw new _errors.SdkError("pool_id is empty");
      }
      if (!this.value.sender) {
        throw new _errors.SdkError("sender is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.farm_tx_pb.MsgHarvest;
    }
  }]);
}(_types.Msg);