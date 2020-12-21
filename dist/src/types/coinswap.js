"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgSwapOrder = exports.MsgRemoveLiquidity = exports.MsgAddLiquidity = void 0;

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

var MsgAddLiquidity = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgAddLiquidity, _Msg);

  var _super = _createSuper(MsgAddLiquidity);

  function MsgAddLiquidity(request, sender) {
    var _this;

    (0, _classCallCheck2["default"])(this, MsgAddLiquidity);
    _this = _super.call(this, 'irismod/coinswap/MsgAddLiquidity');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    var deadline = new Date();
    deadline.setTime(deadline.getTime() + request.deadline);
    _this.value = {
      max_token: request.max_token,
      exact_standard_amt: String(request.exact_standard_amt),
      min_liquidity: String(request.min_liquidity),
      deadline: deadline.getTime().toString(),
      sender: sender
    };
    return _this;
  }

  (0, _createClass2["default"])(MsgAddLiquidity, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgAddLiquidity;
}(_types.Msg);

exports.MsgAddLiquidity = MsgAddLiquidity;

var MsgRemoveLiquidity = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgRemoveLiquidity, _Msg2);

  var _super2 = _createSuper(MsgRemoveLiquidity);

  function MsgRemoveLiquidity(request, sender) {
    var _this2;

    (0, _classCallCheck2["default"])(this, MsgRemoveLiquidity);
    _this2 = _super2.call(this, 'irismod/coinswap/MsgRemoveLiquidity');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    var deadline = new Date();
    deadline.setMilliseconds(deadline.getTime() + request.deadline);
    _this2.value = {
      min_token: String(request.min_token),
      withdraw_liquidity: request.withdraw_liquidity,
      min_standard_amt: String(request.min_standard_amt),
      deadline: deadline.getTime().toString(),
      sender: sender
    };
    return _this2;
  }

  (0, _createClass2["default"])(MsgRemoveLiquidity, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgRemoveLiquidity;
}(_types.Msg);

exports.MsgRemoveLiquidity = MsgRemoveLiquidity;

var MsgSwapOrder = /*#__PURE__*/function (_Msg3) {
  (0, _inherits2["default"])(MsgSwapOrder, _Msg3);

  var _super3 = _createSuper(MsgSwapOrder);

  function MsgSwapOrder(request, isBuyOrder) {
    var _this3;

    (0, _classCallCheck2["default"])(this, MsgSwapOrder);
    _this3 = _super3.call(this, 'irismod/coinswap/MsgSwapOrder');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "value", void 0);
    var deadline = new Date();
    deadline.setTime(deadline.getTime() + request.deadline);
    _this3.value = {
      input: request.input,
      output: request.output,
      deadline: deadline.getTime().toString(),
      is_buy_order: isBuyOrder
    };
    return _this3;
  }

  (0, _createClass2["default"])(MsgSwapOrder, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgSwapOrder;
}(_types.Msg);

exports.MsgSwapOrder = MsgSwapOrder;