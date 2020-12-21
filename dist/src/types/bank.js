"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgMultiSend = exports.MsgSend = void 0;

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Msg for sending coins
 *
 * @hidden
 */
var MsgSend = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgSend, _Msg);

  var _super = _createSuper(MsgSend);

  function MsgSend(msg) {
    var _this;

    (0, _classCallCheck2["default"])(this, MsgSend);
    _this = _super.call(this, _types.TxType.MsgSend);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = msg;
    return _this;
  }

  (0, _createClass2["default"])(MsgSend, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setFromAddress(this.value.from_address);
      msg.setToAddress(this.value.to_address);
      this.value.amount.forEach(function (item) {
        msg.addAmount(_helper.TxModelCreator.createCoinModel(item.denom, item.amount));
      });
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.from_address) {
        throw new Error("from_address is  empty");
      }

      if (!this.value.to_address) {
        throw new Error("to_address is  empty");
      }

      if (!(this.value.amount && this.value.amount.length)) {
        throw new Error("amount is  empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.bank_tx_pb.MsgSend;
    }
  }]);
  return MsgSend;
}(_types.Msg);
/**
 * Msg for sending coins
 *
 * @hidden
 */


exports.MsgSend = MsgSend;

var MsgMultiSend = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgMultiSend, _Msg2);

  var _super2 = _createSuper(MsgMultiSend);

  function MsgMultiSend(msg) {
    var _this2;

    (0, _classCallCheck2["default"])(this, MsgMultiSend);
    _this2 = _super2.call(this, _types.TxType.MsgMultiSend);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    _this2.value = msg;
    return _this2;
  }

  (0, _createClass2["default"])(MsgMultiSend, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      this.value.inputs.forEach(function (item) {
        var input = new pbs.bank_tx_pb.Input();
        input.setAddress(item.address);
        item.coins.forEach(function (coin) {
          input.addCoins(_helper.TxModelCreator.createCoinModel(coin.denom, coin.amount));
        });
        msg.addInputs(input);
      });
      this.value.outputs.forEach(function (item) {
        var output = new pbs.bank_tx_pb.Output();
        output.setAddress(item.address);
        item.coins.forEach(function (coin) {
          output.addCoins(_helper.TxModelCreator.createCoinModel(coin.denom, coin.amount));
        });
        msg.addOutputs(output);
      });
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.inputs) {
        throw new Error("inputs is empty");
      }

      if (!this.value.outputs) {
        throw new Error("outputs is  empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.bank_tx_pb.MsgMultiSend;
    }
  }]);
  return MsgMultiSend;
}(_types.Msg);
/** Base input and output struct */


exports.MsgMultiSend = MsgMultiSend;