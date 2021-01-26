"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWithdrawTax = exports.MsgWithdrawEarnedFees = exports.MsgUpdateRequestContext = exports.MsgKillRequestContext = exports.MsgPauseRequestContext = exports.MsgStartRequestContext = exports.MsgRefundServiceDeposit = exports.MsgSetServiceWithdrawAddress = exports.MsgRequestService = exports.MsgEnableServiceBinding = exports.MsgDisableServiceBinding = exports.MsgUpdateServiceBinding = exports.MsgBindService = exports.MsgDefineService = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = require("./types");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Msg struct for creating a new service definition
 * @hidden
 */
var MsgDefineService = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgDefineService, _Msg);

  var _super = _createSuper(MsgDefineService);

  function MsgDefineService(definition) {
    var _this;

    (0, _classCallCheck2["default"])(this, MsgDefineService);
    _this = _super.call(this, 'irishub/service/MsgDefineService');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = definition;
    return _this;
  }

  (0, _createClass2["default"])(MsgDefineService, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgDefineService;
}(_types.Msg);
/**
 * Msg struct for binding a service definition
 * @hidden
 */


exports.MsgDefineService = MsgDefineService;

var MsgBindService = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgBindService, _Msg2);

  var _super2 = _createSuper(MsgBindService);

  function MsgBindService(binding) {
    var _this2;

    (0, _classCallCheck2["default"])(this, MsgBindService);
    _this2 = _super2.call(this, 'irishub/service/MsgBindService');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    _this2.value = binding;
    return _this2;
  }

  (0, _createClass2["default"])(MsgBindService, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgBindService;
}(_types.Msg);
/**
 * Msg struct for updating a service binding
 * @hidden
 */


exports.MsgBindService = MsgBindService;

var MsgUpdateServiceBinding = /*#__PURE__*/function (_Msg3) {
  (0, _inherits2["default"])(MsgUpdateServiceBinding, _Msg3);

  var _super3 = _createSuper(MsgUpdateServiceBinding);

  function MsgUpdateServiceBinding(binding) {
    var _this3;

    (0, _classCallCheck2["default"])(this, MsgUpdateServiceBinding);
    _this3 = _super3.call(this, 'irishub/service/MsgUpdateServiceBinding');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "value", void 0);
    _this3.value = binding;
    return _this3;
  }

  (0, _createClass2["default"])(MsgUpdateServiceBinding, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgUpdateServiceBinding;
}(_types.Msg);
/**
 * Msg struct for disabling a service binding
 * @hidden
 */


exports.MsgUpdateServiceBinding = MsgUpdateServiceBinding;

var MsgDisableServiceBinding = /*#__PURE__*/function (_Msg4) {
  (0, _inherits2["default"])(MsgDisableServiceBinding, _Msg4);

  var _super4 = _createSuper(MsgDisableServiceBinding);

  function MsgDisableServiceBinding(serviceName, provider) {
    var _this4;

    (0, _classCallCheck2["default"])(this, MsgDisableServiceBinding);
    _this4 = _super4.call(this, 'irishub/service/MsgDisableService');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "value", void 0);
    _this4.value = {
      service_name: serviceName,
      provider: provider
    };
    return _this4;
  }

  (0, _createClass2["default"])(MsgDisableServiceBinding, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgDisableServiceBinding;
}(_types.Msg);
/**
 * Msg struct for enabling a service binding
 * @hidden
 */


exports.MsgDisableServiceBinding = MsgDisableServiceBinding;

var MsgEnableServiceBinding = /*#__PURE__*/function (_Msg5) {
  (0, _inherits2["default"])(MsgEnableServiceBinding, _Msg5);

  var _super5 = _createSuper(MsgEnableServiceBinding);

  function MsgEnableServiceBinding(serviceName, provider) {
    var _this5;

    (0, _classCallCheck2["default"])(this, MsgEnableServiceBinding);
    _this5 = _super5.call(this, 'irishub/service/MsgEnableService');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "value", void 0);
    _this5.value = {
      service_name: serviceName,
      provider: provider
    };
    return _this5;
  }

  (0, _createClass2["default"])(MsgEnableServiceBinding, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgEnableServiceBinding;
}(_types.Msg);
/**
 * Msg struct for invoking a service
 * @hidden
 */


exports.MsgEnableServiceBinding = MsgEnableServiceBinding;

var MsgRequestService = /*#__PURE__*/function (_Msg6) {
  (0, _inherits2["default"])(MsgRequestService, _Msg6);

  var _super6 = _createSuper(MsgRequestService);

  function MsgRequestService(request) {
    var _this6;

    (0, _classCallCheck2["default"])(this, MsgRequestService);
    _this6 = _super6.call(this, 'irishub/service/MsgRequestService');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "value", void 0);
    _this6.value = request;
    return _this6;
  }

  (0, _createClass2["default"])(MsgRequestService, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgRequestService;
}(_types.Msg);
/**
 * @hidden
 */


exports.MsgRequestService = MsgRequestService;

var MsgSetServiceWithdrawAddress = /*#__PURE__*/function (_Msg7) {
  (0, _inherits2["default"])(MsgSetServiceWithdrawAddress, _Msg7);

  var _super7 = _createSuper(MsgSetServiceWithdrawAddress);

  function MsgSetServiceWithdrawAddress(provider, withdrawAddress) {
    var _this7;

    (0, _classCallCheck2["default"])(this, MsgSetServiceWithdrawAddress);
    _this7 = _super7.call(this, 'irishub/service/MsgSetWithdrawAddress');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "value", void 0);
    _this7.value = {
      provider: provider,
      withdraw_address: withdrawAddress
    };
    return _this7;
  }

  (0, _createClass2["default"])(MsgSetServiceWithdrawAddress, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgSetServiceWithdrawAddress;
}(_types.Msg);
/**
 * Msg struct for refunding deposit from a service binding
 * @hidden
 */


exports.MsgSetServiceWithdrawAddress = MsgSetServiceWithdrawAddress;

var MsgRefundServiceDeposit = /*#__PURE__*/function (_Msg8) {
  (0, _inherits2["default"])(MsgRefundServiceDeposit, _Msg8);

  var _super8 = _createSuper(MsgRefundServiceDeposit);

  function MsgRefundServiceDeposit(serviceName, provider) {
    var _this8;

    (0, _classCallCheck2["default"])(this, MsgRefundServiceDeposit);
    _this8 = _super8.call(this, 'irishub/service/MsgRefundServiceDeposit');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this8), "value", void 0);
    _this8.value = {
      service_name: serviceName,
      provider: provider
    };
    return _this8;
  }

  (0, _createClass2["default"])(MsgRefundServiceDeposit, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgRefundServiceDeposit;
}(_types.Msg);
/**
 * Msg struct for resuming a request context
 * @hidden
 */


exports.MsgRefundServiceDeposit = MsgRefundServiceDeposit;

var MsgStartRequestContext = /*#__PURE__*/function (_Msg9) {
  (0, _inherits2["default"])(MsgStartRequestContext, _Msg9);

  var _super9 = _createSuper(MsgStartRequestContext);

  function MsgStartRequestContext(requestContextID, consumer) {
    var _this9;

    (0, _classCallCheck2["default"])(this, MsgStartRequestContext);
    _this9 = _super9.call(this, 'irishub/service/MsgStartRequestContext');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "value", void 0);
    _this9.value = {
      request_context_id: requestContextID,
      consumer: consumer
    };
    return _this9;
  }

  (0, _createClass2["default"])(MsgStartRequestContext, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgStartRequestContext;
}(_types.Msg);
/**
 * Msg struct for pausing a request context
 * @hidden
 */


exports.MsgStartRequestContext = MsgStartRequestContext;

var MsgPauseRequestContext = /*#__PURE__*/function (_Msg10) {
  (0, _inherits2["default"])(MsgPauseRequestContext, _Msg10);

  var _super10 = _createSuper(MsgPauseRequestContext);

  function MsgPauseRequestContext(requestContextID, consumer) {
    var _this10;

    (0, _classCallCheck2["default"])(this, MsgPauseRequestContext);
    _this10 = _super10.call(this, 'irishub/service/MsgPauseRequestContext');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this10), "value", void 0);
    _this10.value = {
      request_context_id: requestContextID,
      consumer: consumer
    };
    return _this10;
  }

  (0, _createClass2["default"])(MsgPauseRequestContext, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgPauseRequestContext;
}(_types.Msg);
/**
 * Msg struct for killing a request context
 * @hidden
 */


exports.MsgPauseRequestContext = MsgPauseRequestContext;

var MsgKillRequestContext = /*#__PURE__*/function (_Msg11) {
  (0, _inherits2["default"])(MsgKillRequestContext, _Msg11);

  var _super11 = _createSuper(MsgKillRequestContext);

  function MsgKillRequestContext(requestContextID, consumer) {
    var _this11;

    (0, _classCallCheck2["default"])(this, MsgKillRequestContext);
    _this11 = _super11.call(this, 'irishub/service/MsgKillRequestContext');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this11), "value", void 0);
    _this11.value = {
      request_context_id: requestContextID,
      consumer: consumer
    };
    return _this11;
  }

  (0, _createClass2["default"])(MsgKillRequestContext, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgKillRequestContext;
}(_types.Msg);
/**
 * Msg struct for invoking a service
 * @hidden
 */


exports.MsgKillRequestContext = MsgKillRequestContext;

var MsgUpdateRequestContext = /*#__PURE__*/function (_Msg12) {
  (0, _inherits2["default"])(MsgUpdateRequestContext, _Msg12);

  var _super12 = _createSuper(MsgUpdateRequestContext);

  function MsgUpdateRequestContext(request) {
    var _this12;

    (0, _classCallCheck2["default"])(this, MsgUpdateRequestContext);
    _this12 = _super12.call(this, 'irishub/service/MsgUpdateRequestContext');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this12), "value", void 0);
    _this12.value = request;
    return _this12;
  }

  (0, _createClass2["default"])(MsgUpdateRequestContext, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgUpdateRequestContext;
}(_types.Msg);
/**
 * Msg struct for withdrawing the fees earned by the provider
 * @hidden
 */


exports.MsgUpdateRequestContext = MsgUpdateRequestContext;

var MsgWithdrawEarnedFees = /*#__PURE__*/function (_Msg13) {
  (0, _inherits2["default"])(MsgWithdrawEarnedFees, _Msg13);

  var _super13 = _createSuper(MsgWithdrawEarnedFees);

  function MsgWithdrawEarnedFees(provider) {
    var _this13;

    (0, _classCallCheck2["default"])(this, MsgWithdrawEarnedFees);
    _this13 = _super13.call(this, 'irishub/service/MsgWithdrawEarnedFees');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this13), "value", void 0);
    _this13.value = {
      provider: provider
    };
    return _this13;
  }

  (0, _createClass2["default"])(MsgWithdrawEarnedFees, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgWithdrawEarnedFees;
}(_types.Msg);
/**
 * Msg struct for withdrawing the service tax
 * @hidden
 */


exports.MsgWithdrawEarnedFees = MsgWithdrawEarnedFees;

var MsgWithdrawTax = /*#__PURE__*/function (_Msg14) {
  (0, _inherits2["default"])(MsgWithdrawTax, _Msg14);

  var _super14 = _createSuper(MsgWithdrawTax);

  function MsgWithdrawTax(trustee, destAddress, amount) {
    var _this14;

    (0, _classCallCheck2["default"])(this, MsgWithdrawTax);
    _this14 = _super14.call(this, 'irishub/service/MsgWithdrawTax');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this14), "value", void 0);
    _this14.value = {
      trustee: trustee,
      dest_address: destAddress,
      amount: amount
    };
    return _this14;
  }

  (0, _createClass2["default"])(MsgWithdrawTax, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgWithdrawTax;
}(_types.Msg);

exports.MsgWithdrawTax = MsgWithdrawTax;