"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorReward = exports.MsgSetWithdrawAddress = exports.MsgFundCommunityPool = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("./types");
var pbs = _interopRequireWildcard(require("./proto"));
var is = _interopRequireWildcard(require("is_js"));
var _helper = require("../helper");
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * param struct for set withdraw address tx
 */
/**
 * param struct for withdraw delegator reward tx
 */
/**
 * Msg struct for changing the withdraw address for a delegator (or validator self-delegation)
 * @hidden
 */
var MsgSetWithdrawAddress = exports.MsgSetWithdrawAddress = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgSetWithdrawAddress, _Msg);
  var _super = _createSuper(MsgSetWithdrawAddress);
  function MsgSetWithdrawAddress(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgSetWithdrawAddress);
    _this = _super.call(this, _types.TxType.MsgSetWithdrawAddress);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = msg;
    return _this;
  }
  (0, _createClass2["default"])(MsgSetWithdrawAddress, [{
    key: "getModel",
    value: function getModel() {
      return new (this.constructor.getModelClass())().setDelegatorAddress(this.value.delegator_address).setWithdrawAddress(this.value.withdraw_address);
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
      if (is.empty(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.empty(this.value.withdraw_address)) {
        throw new _errors.SdkError("withdraw address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgSetWithdrawAddress;
    }
  }]);
  return MsgSetWithdrawAddress;
}(_types.Msg);
/**
 * Msg struct for delegation withdraw from a single validator
 * @hidden
 */
var MsgWithdrawDelegatorReward = exports.MsgWithdrawDelegatorReward = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgWithdrawDelegatorReward, _Msg2);
  var _super2 = _createSuper(MsgWithdrawDelegatorReward);
  function MsgWithdrawDelegatorReward(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgWithdrawDelegatorReward);
    _this2 = _super2.call(this, _types.TxType.MsgWithdrawDelegatorReward);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    _this2.value = msg;
    return _this2;
  }
  (0, _createClass2["default"])(MsgWithdrawDelegatorReward, [{
    key: "getModel",
    value: function getModel() {
      return new (this.constructor.getModelClass())().setDelegatorAddress(this.value.delegator_address).setValidatorAddress(this.value.validator_address);
    }
  }, {
    key: "validate",
    value:
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    function validate() {
      if (is.empty(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.empty(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgWithdrawDelegatorReward;
    }
  }]);
  return MsgWithdrawDelegatorReward;
}(_types.Msg);
/**
 * Msg struct forWithdraw Validator Commission.
 * @hidden
 */
var MsgWithdrawValidatorCommission = exports.MsgWithdrawValidatorCommission = /*#__PURE__*/function (_Msg3) {
  (0, _inherits2["default"])(MsgWithdrawValidatorCommission, _Msg3);
  var _super3 = _createSuper(MsgWithdrawValidatorCommission);
  function MsgWithdrawValidatorCommission(msg) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgWithdrawValidatorCommission);
    _this3 = _super3.call(this, _types.TxType.MsgWithdrawValidatorCommission);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "value", void 0);
    _this3.value = msg;
    return _this3;
  }
  (0, _createClass2["default"])(MsgWithdrawValidatorCommission, [{
    key: "getModel",
    value: function getModel() {
      return new (this.constructor.getModelClass())().setValidatorAddress(this.value.validator_address);
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
      if (is.empty(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgWithdrawValidatorCommission;
    }
  }]);
  return MsgWithdrawValidatorCommission;
}(_types.Msg);
/**
 * Msg struct Msg Fund Community Pool.
 * @hidden
 */
var MsgFundCommunityPool = exports.MsgFundCommunityPool = /*#__PURE__*/function (_Msg4) {
  (0, _inherits2["default"])(MsgFundCommunityPool, _Msg4);
  var _super4 = _createSuper(MsgFundCommunityPool);
  function MsgFundCommunityPool(msg) {
    var _this4;
    (0, _classCallCheck2["default"])(this, MsgFundCommunityPool);
    _this4 = _super4.call(this, _types.TxType.MsgFundCommunityPool);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "value", void 0);
    _this4.value = msg;
    return _this4;
  }
  (0, _createClass2["default"])(MsgFundCommunityPool, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDepositor(this.value.depositor);
      this.value.amount.forEach(function (item) {
        msg.addAmount(_helper.TxModelCreator.createCoinModel(item.denom, item.amount));
      });
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
      if (is.empty(this.value.depositor)) {
        throw new _errors.SdkError("depositor can not be empty");
      }
      if (!(this.value.amount && this.value.amount.length)) {
        throw new _errors.SdkError("amount can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgFundCommunityPool;
    }
  }]);
  return MsgFundCommunityPool;
}(_types.Msg);
/** Common rewards struct */
/** Delegaion rewards */