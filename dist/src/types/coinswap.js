"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _helper = require("../helper");

var pbs = _interopRequireWildcard(require("./proto"));

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Msg for add liquidity
 *
 * @hidden
 */
var MsgAddLiquidity = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgAddLiquidity, _Msg);

  var _super = _createSuper(MsgAddLiquidity);

  function MsgAddLiquidity(msg) {
    var _this;

    (0, _classCallCheck2["default"])(this, MsgAddLiquidity);
    _this = _super.call(this, _types.TxType.MsgAddLiquidity);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = msg;
    return _this;
  }

  (0, _createClass2["default"])(MsgAddLiquidity, [{
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
        throw new _errors.SdkError("max_token is  empty");
      }

      if (!this.value.exact_standard_amt) {
        throw new _errors.SdkError("exact_standard_amt is  empty");
      }

      if (!this.value.min_liquidity) {
        throw new _errors.SdkError("min_liquidity is  empty");
      }

      if (!this.value.deadline) {
        throw new _errors.SdkError("deadline is  empty");
      }

      if (!this.value.sender) {
        throw new _errors.SdkError("sender is  empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.coinswap_tx_pb.MsgAddLiquidity;
    }
  }]);
  return MsgAddLiquidity;
}(_types.Msg);
/**
 * param struct for add liquidity tx
 */


exports.MsgAddLiquidity = MsgAddLiquidity;

/**
 * Msg for remove liquidity
 *
 * @hidden
 */
var MsgRemoveLiquidity = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgRemoveLiquidity, _Msg2);

  var _super2 = _createSuper(MsgRemoveLiquidity);

  function MsgRemoveLiquidity(msg) {
    var _this2;

    (0, _classCallCheck2["default"])(this, MsgRemoveLiquidity);
    _this2 = _super2.call(this, _types.TxType.MsgRemoveLiquidity);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    _this2.value = msg;
    return _this2;
  }

  (0, _createClass2["default"])(MsgRemoveLiquidity, [{
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
        throw new _errors.SdkError("withdraw_liquidity is  empty");
      }

      if (!this.value.min_token) {
        throw new _errors.SdkError("min_token is  empty");
      }

      if (!this.value.min_standard_amt) {
        throw new _errors.SdkError("min_standard_amt is  empty");
      }

      if (!this.value.deadline) {
        throw new _errors.SdkError("deadline is  empty");
      }

      if (!this.value.sender) {
        throw new _errors.SdkError("sender is  empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.coinswap_tx_pb.MsgRemoveLiquidity;
    }
  }]);
  return MsgRemoveLiquidity;
}(_types.Msg);
/**
 * param struct for add liquidity tx
 */


exports.MsgRemoveLiquidity = MsgRemoveLiquidity;

/**
 * Msg for swap order
 *
 * @hidden
 */
var MsgSwapOrder = /*#__PURE__*/function (_Msg3) {
  (0, _inherits2["default"])(MsgSwapOrder, _Msg3);

  var _super3 = _createSuper(MsgSwapOrder);

  function MsgSwapOrder(msg) {
    var _this3;

    (0, _classCallCheck2["default"])(this, MsgSwapOrder);
    _this3 = _super3.call(this, _types.TxType.MsgSwapOrder);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "value", void 0);
    _this3.value = msg;
    return _this3;
  }

  (0, _createClass2["default"])(MsgSwapOrder, [{
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
        throw new _errors.SdkError("input is  empty");
      }

      if (!this.value.output) {
        throw new _errors.SdkError("output is  empty");
      }

      if (!this.value.deadline) {
        throw new _errors.SdkError("deadline is  empty");
      }

      if (!this.value.is_buy_order) {
        throw new _errors.SdkError("is_buy_order is  empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.coinswap_tx_pb.MsgSwapOrder;
    }
  }]);
  return MsgSwapOrder;
}(_types.Msg);

exports.MsgSwapOrder = MsgSwapOrder;