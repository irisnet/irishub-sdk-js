"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUnjail = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("./types");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
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
var MsgUnjail = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgUnjail, _Msg);
  var _super = _createSuper(MsgUnjail);
  function MsgUnjail(address) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgUnjail);
    _this = _super.call(this, 'irishub/slashing/MsgUnjail');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = {
      address: address
    };
    return _this;
  }
  (0, _createClass2["default"])(MsgUnjail, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this.value;
    }
  }]);
  return MsgUnjail;
}(_types.Msg);
/** Defines the signing info for a validator */
exports.MsgUnjail = MsgUnjail;