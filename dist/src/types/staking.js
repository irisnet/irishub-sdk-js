"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUndelegate = exports.MsgRedelegate = exports.MsgEditValidator = exports.MsgDelegate = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("./types");
var _helper = require("../helper");
var pbs = _interopRequireWildcard(require("./proto"));
var is = _interopRequireWildcard(require("is_js"));
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Validator details */
/** Validator commission */
/** Validator basic information */
/** Staking statistics */
/**
 * Gov params for Staking module
 *
 * [More Details](https://www.irisnet.org/docs/concepts/gov-params.html#parameters-in-stake)
 */
/** Delegation information */
/** UnbondingDelegation information */
/** Redelegation information */
/**
 * param struct for delegate tx
 */
/**
 * param struct for undelegate tx
 */
/**
 * param struct for redelegate tx
 */
/**
 * Msg struct for delegating to a validator
 * @hidden
 */
var MsgDelegate = exports.MsgDelegate = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgDelegate, _Msg);
  var _super = _createSuper(MsgDelegate);
  function MsgDelegate(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgDelegate);
    _this = _super.call(this, _types.TxType.MsgDelegate);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = msg;
    return _this;
  }
  (0, _createClass2["default"])(MsgDelegate, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address).setValidatorAddress(this.value.validator_address).setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
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
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.undefined(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgDelegate;
    }
  }]);
  return MsgDelegate;
}(_types.Msg);
/**
 * Msg struct for undelegating from a validator
 * @hidden
 */
var MsgUndelegate = exports.MsgUndelegate = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgUndelegate, _Msg2);
  var _super2 = _createSuper(MsgUndelegate);
  function MsgUndelegate(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgUndelegate);
    _this2 = _super2.call(this, _types.TxType.MsgUndelegate);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    _this2.value = msg;
    return _this2;
  }
  (0, _createClass2["default"])(MsgUndelegate, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address).setValidatorAddress(this.value.validator_address).setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
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
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.undefined(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgUndelegate;
    }
  }]);
  return MsgUndelegate;
}(_types.Msg);
/**
 * Msg struct for redelegating illiquid tokens from one validator to another
 * @hidden
 */
var MsgRedelegate = exports.MsgRedelegate = /*#__PURE__*/function (_Msg3) {
  (0, _inherits2["default"])(MsgRedelegate, _Msg3);
  var _super3 = _createSuper(MsgRedelegate);
  function MsgRedelegate(msg) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgRedelegate);
    _this3 = _super3.call(this, _types.TxType.MsgBeginRedelegate);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "value", void 0);
    _this3.value = msg;
    return _this3;
  }
  (0, _createClass2["default"])(MsgRedelegate, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address).setValidatorSrcAddress(this.value.validator_src_address).setValidatorDstAddress(this.value.validator_dst_address).setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
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
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.undefined(this.value.validator_src_address)) {
        throw new _errors.SdkError("source validator address can not be empty");
      }
      if (is.undefined(this.value.validator_dst_address)) {
        throw new _errors.SdkError("destination validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgBeginRedelegate;
    }
  }]);
  return MsgRedelegate;
}(_types.Msg);
/**
 * Msg struct for updating validator informations
 * @hidden
 */
var MsgEditValidator = exports.MsgEditValidator = /*#__PURE__*/function (_Msg4) {
  (0, _inherits2["default"])(MsgEditValidator, _Msg4);
  var _super4 = _createSuper(MsgEditValidator);
  function MsgEditValidator(description, address, commissionRate) {
    var _this4;
    (0, _classCallCheck2["default"])(this, MsgEditValidator);
    _this4 = _super4.call(this, 'irishub/stake/MsgEditValidator');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "value", void 0);
    _this4.value = {
      Description: description,
      address: address,
      commission_rate: commissionRate
    };
    return _this4;
  }
  (0, _createClass2["default"])(MsgEditValidator, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this.value;
    }
  }]);
  return MsgEditValidator;
}(_types.Msg);