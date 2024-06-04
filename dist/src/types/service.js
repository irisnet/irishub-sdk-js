"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWithdrawTax = exports.MsgWithdrawEarnedFees = exports.MsgUpdateServiceBinding = exports.MsgUpdateRequestContext = exports.MsgStartRequestContext = exports.MsgSetServiceWithdrawAddress = exports.MsgRequestService = exports.MsgRefundServiceDeposit = exports.MsgPauseRequestContext = exports.MsgKillRequestContext = exports.MsgEnableServiceBinding = exports.MsgDisableServiceBinding = exports.MsgDefineService = exports.MsgBindService = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("./types");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Msg struct for creating a new service definition
 * @hidden
 */
var MsgDefineService = exports.MsgDefineService = /*#__PURE__*/function (_Msg) {
  function MsgDefineService(definition) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgDefineService);
    _this = _callSuper(this, MsgDefineService, ['irishub/service/MsgDefineService']);
    (0, _defineProperty2["default"])(_this, "value", void 0);
    _this.value = definition;
    return _this;
  }
  (0, _inherits2["default"])(MsgDefineService, _Msg);
  return (0, _createClass2["default"])(MsgDefineService, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for binding a service definition
 * @hidden
 */
var MsgBindService = exports.MsgBindService = /*#__PURE__*/function (_Msg2) {
  function MsgBindService(binding) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgBindService);
    _this2 = _callSuper(this, MsgBindService, ['irishub/service/MsgBindService']);
    (0, _defineProperty2["default"])(_this2, "value", void 0);
    _this2.value = binding;
    return _this2;
  }
  (0, _inherits2["default"])(MsgBindService, _Msg2);
  return (0, _createClass2["default"])(MsgBindService, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for updating a service binding
 * @hidden
 */
var MsgUpdateServiceBinding = exports.MsgUpdateServiceBinding = /*#__PURE__*/function (_Msg3) {
  function MsgUpdateServiceBinding(binding) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgUpdateServiceBinding);
    _this3 = _callSuper(this, MsgUpdateServiceBinding, ['irishub/service/MsgUpdateServiceBinding']);
    (0, _defineProperty2["default"])(_this3, "value", void 0);
    _this3.value = binding;
    return _this3;
  }
  (0, _inherits2["default"])(MsgUpdateServiceBinding, _Msg3);
  return (0, _createClass2["default"])(MsgUpdateServiceBinding, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for disabling a service binding
 * @hidden
 */
var MsgDisableServiceBinding = exports.MsgDisableServiceBinding = /*#__PURE__*/function (_Msg4) {
  function MsgDisableServiceBinding(serviceName, provider) {
    var _this4;
    (0, _classCallCheck2["default"])(this, MsgDisableServiceBinding);
    _this4 = _callSuper(this, MsgDisableServiceBinding, ['irishub/service/MsgDisableService']);
    (0, _defineProperty2["default"])(_this4, "value", void 0);
    _this4.value = {
      service_name: serviceName,
      provider: provider
    };
    return _this4;
  }
  (0, _inherits2["default"])(MsgDisableServiceBinding, _Msg4);
  return (0, _createClass2["default"])(MsgDisableServiceBinding, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for enabling a service binding
 * @hidden
 */
var MsgEnableServiceBinding = exports.MsgEnableServiceBinding = /*#__PURE__*/function (_Msg5) {
  function MsgEnableServiceBinding(serviceName, provider) {
    var _this5;
    (0, _classCallCheck2["default"])(this, MsgEnableServiceBinding);
    _this5 = _callSuper(this, MsgEnableServiceBinding, ['irishub/service/MsgEnableService']);
    (0, _defineProperty2["default"])(_this5, "value", void 0);
    _this5.value = {
      service_name: serviceName,
      provider: provider
    };
    return _this5;
  }
  (0, _inherits2["default"])(MsgEnableServiceBinding, _Msg5);
  return (0, _createClass2["default"])(MsgEnableServiceBinding, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for invoking a service
 * @hidden
 */
var MsgRequestService = exports.MsgRequestService = /*#__PURE__*/function (_Msg6) {
  function MsgRequestService(request) {
    var _this6;
    (0, _classCallCheck2["default"])(this, MsgRequestService);
    _this6 = _callSuper(this, MsgRequestService, ['irishub/service/MsgRequestService']);
    (0, _defineProperty2["default"])(_this6, "value", void 0);
    _this6.value = request;
    return _this6;
  }
  (0, _inherits2["default"])(MsgRequestService, _Msg6);
  return (0, _createClass2["default"])(MsgRequestService, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * @hidden
 */
var MsgSetServiceWithdrawAddress = exports.MsgSetServiceWithdrawAddress = /*#__PURE__*/function (_Msg7) {
  function MsgSetServiceWithdrawAddress(provider, withdrawAddress) {
    var _this7;
    (0, _classCallCheck2["default"])(this, MsgSetServiceWithdrawAddress);
    _this7 = _callSuper(this, MsgSetServiceWithdrawAddress, ['irishub/service/MsgSetWithdrawAddress']);
    (0, _defineProperty2["default"])(_this7, "value", void 0);
    _this7.value = {
      provider: provider,
      withdraw_address: withdrawAddress
    };
    return _this7;
  }
  (0, _inherits2["default"])(MsgSetServiceWithdrawAddress, _Msg7);
  return (0, _createClass2["default"])(MsgSetServiceWithdrawAddress, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for refunding deposit from a service binding
 * @hidden
 */
var MsgRefundServiceDeposit = exports.MsgRefundServiceDeposit = /*#__PURE__*/function (_Msg8) {
  function MsgRefundServiceDeposit(serviceName, provider) {
    var _this8;
    (0, _classCallCheck2["default"])(this, MsgRefundServiceDeposit);
    _this8 = _callSuper(this, MsgRefundServiceDeposit, ['irishub/service/MsgRefundServiceDeposit']);
    (0, _defineProperty2["default"])(_this8, "value", void 0);
    _this8.value = {
      service_name: serviceName,
      provider: provider
    };
    return _this8;
  }
  (0, _inherits2["default"])(MsgRefundServiceDeposit, _Msg8);
  return (0, _createClass2["default"])(MsgRefundServiceDeposit, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for resuming a request context
 * @hidden
 */
var MsgStartRequestContext = exports.MsgStartRequestContext = /*#__PURE__*/function (_Msg9) {
  function MsgStartRequestContext(requestContextID, consumer) {
    var _this9;
    (0, _classCallCheck2["default"])(this, MsgStartRequestContext);
    _this9 = _callSuper(this, MsgStartRequestContext, ['irishub/service/MsgStartRequestContext']);
    (0, _defineProperty2["default"])(_this9, "value", void 0);
    _this9.value = {
      request_context_id: requestContextID,
      consumer: consumer
    };
    return _this9;
  }
  (0, _inherits2["default"])(MsgStartRequestContext, _Msg9);
  return (0, _createClass2["default"])(MsgStartRequestContext, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for pausing a request context
 * @hidden
 */
var MsgPauseRequestContext = exports.MsgPauseRequestContext = /*#__PURE__*/function (_Msg10) {
  function MsgPauseRequestContext(requestContextID, consumer) {
    var _this10;
    (0, _classCallCheck2["default"])(this, MsgPauseRequestContext);
    _this10 = _callSuper(this, MsgPauseRequestContext, ['irishub/service/MsgPauseRequestContext']);
    (0, _defineProperty2["default"])(_this10, "value", void 0);
    _this10.value = {
      request_context_id: requestContextID,
      consumer: consumer
    };
    return _this10;
  }
  (0, _inherits2["default"])(MsgPauseRequestContext, _Msg10);
  return (0, _createClass2["default"])(MsgPauseRequestContext, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for killing a request context
 * @hidden
 */
var MsgKillRequestContext = exports.MsgKillRequestContext = /*#__PURE__*/function (_Msg11) {
  function MsgKillRequestContext(requestContextID, consumer) {
    var _this11;
    (0, _classCallCheck2["default"])(this, MsgKillRequestContext);
    _this11 = _callSuper(this, MsgKillRequestContext, ['irishub/service/MsgKillRequestContext']);
    (0, _defineProperty2["default"])(_this11, "value", void 0);
    _this11.value = {
      request_context_id: requestContextID,
      consumer: consumer
    };
    return _this11;
  }
  (0, _inherits2["default"])(MsgKillRequestContext, _Msg11);
  return (0, _createClass2["default"])(MsgKillRequestContext, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for invoking a service
 * @hidden
 */
var MsgUpdateRequestContext = exports.MsgUpdateRequestContext = /*#__PURE__*/function (_Msg12) {
  function MsgUpdateRequestContext(request) {
    var _this12;
    (0, _classCallCheck2["default"])(this, MsgUpdateRequestContext);
    _this12 = _callSuper(this, MsgUpdateRequestContext, ['irishub/service/MsgUpdateRequestContext']);
    (0, _defineProperty2["default"])(_this12, "value", void 0);
    _this12.value = request;
    return _this12;
  }
  (0, _inherits2["default"])(MsgUpdateRequestContext, _Msg12);
  return (0, _createClass2["default"])(MsgUpdateRequestContext, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for withdrawing the fees earned by the provider
 * @hidden
 */
var MsgWithdrawEarnedFees = exports.MsgWithdrawEarnedFees = /*#__PURE__*/function (_Msg13) {
  function MsgWithdrawEarnedFees(provider) {
    var _this13;
    (0, _classCallCheck2["default"])(this, MsgWithdrawEarnedFees);
    _this13 = _callSuper(this, MsgWithdrawEarnedFees, ['irishub/service/MsgWithdrawEarnedFees']);
    (0, _defineProperty2["default"])(_this13, "value", void 0);
    _this13.value = {
      provider: provider
    };
    return _this13;
  }
  (0, _inherits2["default"])(MsgWithdrawEarnedFees, _Msg13);
  return (0, _createClass2["default"])(MsgWithdrawEarnedFees, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for withdrawing the service tax
 * @hidden
 */
var MsgWithdrawTax = exports.MsgWithdrawTax = /*#__PURE__*/function (_Msg14) {
  function MsgWithdrawTax(trustee, destAddress, amount) {
    var _this14;
    (0, _classCallCheck2["default"])(this, MsgWithdrawTax);
    _this14 = _callSuper(this, MsgWithdrawTax, ['irishub/service/MsgWithdrawTax']);
    (0, _defineProperty2["default"])(_this14, "value", void 0);
    _this14.value = {
      trustee: trustee,
      dest_address: destAddress,
      amount: amount
    };
    return _this14;
  }
  (0, _inherits2["default"])(MsgWithdrawTax, _Msg14);
  return (0, _createClass2["default"])(MsgWithdrawTax, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);