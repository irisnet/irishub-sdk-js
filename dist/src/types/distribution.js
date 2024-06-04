"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawTokenizeShareRecordReward = exports.MsgWithdrawDelegatorReward = exports.MsgWithdrawAllTokenizeShareRecordReward = exports.MsgSetWithdrawAddress = exports.MsgFundCommunityPool = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("./types");
var pbs = _interopRequireWildcard(require("./proto"));
var is = _interopRequireWildcard(require("is_js"));
var _helper = require("../helper");
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
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
  function MsgSetWithdrawAddress(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgSetWithdrawAddress);
    _this = _callSuper(this, MsgSetWithdrawAddress, [_types.TxType.MsgSetWithdrawAddress]);
    (0, _defineProperty2["default"])(_this, "value", void 0);
    _this.value = msg;
    return _this;
  }
  (0, _inherits2["default"])(MsgSetWithdrawAddress, _Msg);
  return (0, _createClass2["default"])(MsgSetWithdrawAddress, [{
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
}(_types.Msg);
/**
 * Msg struct for delegation withdraw from a single validator
 * @hidden
 */
var MsgWithdrawDelegatorReward = exports.MsgWithdrawDelegatorReward = /*#__PURE__*/function (_Msg2) {
  function MsgWithdrawDelegatorReward(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgWithdrawDelegatorReward);
    _this2 = _callSuper(this, MsgWithdrawDelegatorReward, [_types.TxType.MsgWithdrawDelegatorReward]);
    (0, _defineProperty2["default"])(_this2, "value", void 0);
    _this2.value = msg;
    return _this2;
  }
  (0, _inherits2["default"])(MsgWithdrawDelegatorReward, _Msg2);
  return (0, _createClass2["default"])(MsgWithdrawDelegatorReward, [{
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
}(_types.Msg);
/**
 * Msg struct forWithdraw Validator Commission.
 * @hidden
 */
var MsgWithdrawValidatorCommission = exports.MsgWithdrawValidatorCommission = /*#__PURE__*/function (_Msg3) {
  function MsgWithdrawValidatorCommission(msg) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgWithdrawValidatorCommission);
    _this3 = _callSuper(this, MsgWithdrawValidatorCommission, [_types.TxType.MsgWithdrawValidatorCommission]);
    (0, _defineProperty2["default"])(_this3, "value", void 0);
    _this3.value = msg;
    return _this3;
  }
  (0, _inherits2["default"])(MsgWithdrawValidatorCommission, _Msg3);
  return (0, _createClass2["default"])(MsgWithdrawValidatorCommission, [{
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
}(_types.Msg);
/**
 * Msg struct Msg Fund Community Pool.
 * @hidden
 */
var MsgFundCommunityPool = exports.MsgFundCommunityPool = /*#__PURE__*/function (_Msg4) {
  function MsgFundCommunityPool(msg) {
    var _this4;
    (0, _classCallCheck2["default"])(this, MsgFundCommunityPool);
    _this4 = _callSuper(this, MsgFundCommunityPool, [_types.TxType.MsgFundCommunityPool]);
    (0, _defineProperty2["default"])(_this4, "value", void 0);
    _this4.value = msg;
    return _this4;
  }
  (0, _inherits2["default"])(MsgFundCommunityPool, _Msg4);
  return (0, _createClass2["default"])(MsgFundCommunityPool, [{
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
}(_types.Msg);
/** Common rewards struct */
/** Delegaion rewards */
var MsgWithdrawTokenizeShareRecordReward = exports.MsgWithdrawTokenizeShareRecordReward = /*#__PURE__*/function (_Msg5) {
  function MsgWithdrawTokenizeShareRecordReward(value) {
    var _this5;
    (0, _classCallCheck2["default"])(this, MsgWithdrawTokenizeShareRecordReward);
    _this5 = _callSuper(this, MsgWithdrawTokenizeShareRecordReward, [_types.TxType.MsgWithdrawTokenizeShareRecordReward]);
    (0, _defineProperty2["default"])(_this5, "value", void 0);
    _this5.value = value;
    return _this5;
  }
  (0, _inherits2["default"])(MsgWithdrawTokenizeShareRecordReward, _Msg5);
  return (0, _createClass2["default"])(MsgWithdrawTokenizeShareRecordReward, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setOwnerAddress(this.value.owner_address).setRecordId(this.value.record_id);
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
      if (is.undefined(this.value.owner_address)) {
        throw new _errors.SdkError("owner address can not be empty");
      }
      if (is.undefined(this.value.record_id)) {
        throw new _errors.SdkError("record id can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgWithdrawTokenizeShareRecordReward;
    }
  }]);
}(_types.Msg);
var MsgWithdrawAllTokenizeShareRecordReward = exports.MsgWithdrawAllTokenizeShareRecordReward = /*#__PURE__*/function (_Msg6) {
  function MsgWithdrawAllTokenizeShareRecordReward(value) {
    var _this6;
    (0, _classCallCheck2["default"])(this, MsgWithdrawAllTokenizeShareRecordReward);
    _this6 = _callSuper(this, MsgWithdrawAllTokenizeShareRecordReward, [_types.TxType.MsgWithdrawAllTokenizeShareRecordReward]);
    (0, _defineProperty2["default"])(_this6, "value", void 0);
    _this6.value = value;
    return _this6;
  }
  (0, _inherits2["default"])(MsgWithdrawAllTokenizeShareRecordReward, _Msg6);
  return (0, _createClass2["default"])(MsgWithdrawAllTokenizeShareRecordReward, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setOwnerAddress(this.value.owner_address);
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
      if (is.undefined(this.value.owner_address)) {
        throw new _errors.SdkError("owner address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgWithdrawAllTokenizeShareRecordReward;
    }
  }]);
}(_types.Msg);