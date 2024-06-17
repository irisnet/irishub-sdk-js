"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUnjail = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("./types");
var pbs = _interopRequireWildcard(require("./proto"));
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * ***Gov params for Slashing module***
 *
 * **Long Downtime**
 *
 * In the fixed time window `signed_blocks_window`,
 * the ratio of the time of the validator's absence from the block is less than the value of `min_signed_per_window`,
 * the validator's bonded token will be penalized in the `slash_fraction_downtime` ratio,
 * and the validator will be jailed. Until the jail time exceeds DowntimeJailDuration,
 * the validator can be released by executing `unjail` command.
 *
 * **Double Sign**
 *
 * When executing a block, it receives evidence that a validator has voted for conflicting votes of the same round at the same height.
 * If the time of the evidence from the current block time is less than `max_evidence_age`,
 * the validator's bonded token will be penalized in the `slash_fraction_double_sign` ratio, and the validator will be jailed.
 * Until the jail time exceeds `double_sign_jail_duration`, the validator can be released by executing `unjail` command.
 *
 * **Proposer Censorship**
 *
 * If the node is in the process of processing a new block,
 * it detects if any transaction does not pass `txDecoder`, `validateTx`, `validateBasicTxMsgs`,
 * the validator's bonded token will be slashed by `slash_fraction_censorship` percent, and the validator will be jailed.
 * Until the jail time exceeds `censorship_jail_duration`, the validator can be released by executing `unjail` command.
 *
 * [More Details](https://www.irisnet.org/docs/concepts/gov-params.html#parameters-in-slashing)
 */
/**
 * Msg struct for unjailing jailed validator
 * @hidden
 */
var MsgUnjail = exports.MsgUnjail = /*#__PURE__*/function (_Msg) {
  function MsgUnjail(validator_addr) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgUnjail);
    _this = _callSuper(this, MsgUnjail, [_types.TxType.MsgUnjail]);
    (0, _defineProperty2["default"])(_this, "value", void 0);
    _this.value = {
      validator_addr: validator_addr
    };
    return _this;
  }
  (0, _inherits2["default"])(MsgUnjail, _Msg);
  return (0, _createClass2["default"])(MsgUnjail, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setValidatorAddr(this.value.validator_addr);
      return msg;
    }
  }, {
    key: "Validate",
    value: function Validate() {
      if (!this.value.validator_addr) {
        throw new _errors.SdkError("validator_addr can not be empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.slashing_tx_pb.MsgUnjail;
    }
  }]);
}(_types.Msg);
/** Defines the signing info for a validator */