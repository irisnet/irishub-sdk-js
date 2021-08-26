"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgClaimHTLC = exports.MsgCreateHTLC = void 0;

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
 * Msg for Create HTLC
 *
 * @hidden
 */
var MsgCreateHTLC = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgCreateHTLC, _Msg);

  var _super = _createSuper(MsgCreateHTLC);

  function MsgCreateHTLC(msg) {
    var _this;

    (0, _classCallCheck2["default"])(this, MsgCreateHTLC);
    _this = _super.call(this, _types.TxType.MsgCreateHTLC);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = msg;
    return _this;
  }

  (0, _createClass2["default"])(MsgCreateHTLC, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setSender(this.value.sender);
      msg.setTo(this.value.to);
      msg.setReceiverOnOtherChain(this.value.receiver_on_other_chain);
      msg.setSenderOnOtherChain(this.value.sender_on_other_chain);
      msg.setHashLock(this.value.hash_lock);
      msg.setTimestamp(this.value.timestamp);
      msg.setTimeLock(this.value.time_lock);
      msg.setTransfer(this.value.transfer);
      this.value.amount.forEach(function (item) {
        msg.addAmount(_helper.TxModelCreator.createCoinModel(item.denom, item.amount));
      });
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.sender) {
        throw new _errors.SdkError("sender is  empty");
      }

      if (!this.value.to) {
        throw new _errors.SdkError("to is  empty");
      }

      if (!this.value.receiver_on_other_chain) {
        throw new _errors.SdkError("receiver_on_other_chain is  empty");
      }

      if (!this.value.sender_on_other_chain) {
        throw new _errors.SdkError("sender_on_other_chain is  empty");
      }

      if (!this.value.hash_lock) {
        throw new _errors.SdkError("hash_lock is  empty");
      }

      if (!this.value.timestamp) {
        throw new _errors.SdkError("timestamp is  empty");
      }

      if (!this.value.time_lock) {
        throw new _errors.SdkError("time_lock is  empty");
      }

      if (typeof this.value.transfer == 'undefined') {
        throw new _errors.SdkError("transfer is  empty");
      }

      if (!(this.value.amount && this.value.amount.length)) {
        throw new _errors.SdkError("amount is  empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.htlc_tx_pb.MsgCreateHTLC;
    }
  }]);
  return MsgCreateHTLC;
}(_types.Msg);
/**
 * param struct for Claim HTLC Tx
 */


exports.MsgCreateHTLC = MsgCreateHTLC;

/**
 * Msg for Claim HTLC
 *
 * @hidden
 */
var MsgClaimHTLC = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgClaimHTLC, _Msg2);

  var _super2 = _createSuper(MsgClaimHTLC);

  function MsgClaimHTLC(msg) {
    var _this2;

    (0, _classCallCheck2["default"])(this, MsgClaimHTLC);
    _this2 = _super2.call(this, _types.TxType.MsgClaimHTLC);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    _this2.value = msg;
    return _this2;
  }

  (0, _createClass2["default"])(MsgClaimHTLC, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setSender(this.value.sender);
      msg.setId(this.value.id);
      msg.setSecret(this.value.secret);
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.sender) {
        throw new _errors.SdkError("sender is  empty");
      }

      if (!this.value.id) {
        throw new _errors.SdkError("id is  empty");
      }

      if (!this.value.secret) {
        throw new _errors.SdkError("secret is  empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.htlc_tx_pb.MsgClaimHTLC;
    }
  }]);
  return MsgClaimHTLC;
}(_types.Msg);

exports.MsgClaimHTLC = MsgClaimHTLC;