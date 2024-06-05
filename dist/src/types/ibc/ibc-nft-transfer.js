"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgIbcNftTransfer = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _types = require("../types");
var pbs = _interopRequireWildcard(require("../proto"));
var _errors = require("../../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * param struct for Create ibc nft transfer Tx 
 */
/**
 * Msg for ibc nft Transfer
 *
 * @hidden
 */
var MsgIbcNftTransfer = exports.MsgIbcNftTransfer = /*#__PURE__*/function (_Msg) {
  function MsgIbcNftTransfer(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgIbcNftTransfer);
    _this = _callSuper(this, MsgIbcNftTransfer, [_types.TxType.MsgIbcNftTransfer]);
    _this.value = msg;
    return _this;
  }
  (0, _inherits2["default"])(MsgIbcNftTransfer, _Msg);
  return (0, _createClass2["default"])(MsgIbcNftTransfer, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setSourcePort(this.value.source_port);
      msg.setSourceChannel(this.value.source_channel);
      msg.setClassId(this.value.class_id);
      this.value.token_ids.forEach(function (item) {
        msg.addTokenIds(item);
      });
      msg.setSender(this.value.sender);
      msg.setReceiver(this.value.receiver);
      if (this.value.timeout_height && this.value.timeout_height.revision_number && this.value.timeout_height.revision_height) {
        var height = new pbs.ibc_core_client_pb.Height();
        height.setRevisionNumber(this.value.timeout_height.revision_number);
        height.setRevisionHeight(this.value.timeout_height.revision_height);
        msg.setTimeoutHeight(height);
      }
      if (this.value.timeout_timestamp) {
        msg.setTimeoutTimestamp(this.value.timeout_timestamp);
      }
      if (this.value.memo) {
        msg.setMemo(this.value.memo);
      }
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.source_port) {
        throw new _errors.SdkError("source_port is empty");
      }
      if (!this.value.source_channel) {
        throw new _errors.SdkError("source_channel is empty");
      }
      if (!this.value.class_id) {
        throw new _errors.SdkError("class_id is empty");
      }
      if (!this.value.token_ids || this.value.token_ids.length == 0) {
        throw new _errors.SdkError("token_ids is empty");
      }
      if (!this.value.receiver) {
        throw new _errors.SdkError("receiver is empty");
      }
      if (!this.value.timeout_height && !this.value.timeout_timestamp) {
        throw new _errors.SdkError("there must be one timeout_height or timeout_timestamp");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.ibc_nft_transfer_tx_pb.MsgTransfer;
    }
  }]);
}(_types.Msg);