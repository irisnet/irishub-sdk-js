"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgTransfer = void 0;

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
 * Msg for ibc Transfer
 *
 * @hidden
 */
var MsgTransfer = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgTransfer, _Msg);

  var _super = _createSuper(MsgTransfer);

  function MsgTransfer(msg) {
    var _this;

    (0, _classCallCheck2["default"])(this, MsgTransfer);
    _this = _super.call(this, _types.TxType.MsgTransfer);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = msg;
    return _this;
  }

  (0, _createClass2["default"])(MsgTransfer, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setSourcePort(this.value.source_port);
      msg.setSourceChannel(this.value.source_channel);
      msg.setToken(_helper.TxModelCreator.createCoinModel(this.value.token.denom, this.value.token.amount));
      msg.setSender(this.value.sender);
      msg.setReceiver(this.value.receiver);

      if (this.value.timeout_height && this.value.timeout_height.revision_number && this.value.timeout_height.revision_height) {
        var height = new pbs.ibc_core_client_pb.Height();
        height.setRevisionNumber(this.value.timeout_height.revision_number);
        height.setRevisionNumber(this.value.timeout_height.revision_height);
        msg.setTimeoutHeight(height);
      }

      if (this.value.timeout_timestamp) {
        msg.setTimeoutTimestamp(this.value.timeout_timestamp);
      }

      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.source_port) {
        throw new _errors.SdkError("source_port is  empty");
      }

      if (!this.value.source_channel) {
        throw new _errors.SdkError("source_channel is  empty");
      }

      if (!this.value.token) {
        throw new _errors.SdkError("token is  empty");
      }

      if (!this.value.receiver) {
        throw new _errors.SdkError("receiver is  empty");
      }

      if (!this.value.timeout_height && !this.value.timeout_timestamp) {
        throw new _errors.SdkError("there must be one timeout_height or timeout_timestamp");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.ibc_transfer_query_pb.MsgTransfer;
    }
  }]);
  return MsgTransfer;
}(_types.Msg);

exports.MsgTransfer = MsgTransfer;