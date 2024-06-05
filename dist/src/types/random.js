"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgRequestRand = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _types = require("./types");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Msg struct for requesting a random number
 * @hidden
 */
var MsgRequestRand = exports.MsgRequestRand = /*#__PURE__*/function (_Msg) {
  function MsgRequestRand(consumer, blockInterval) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgRequestRand);
    _this = _callSuper(this, MsgRequestRand, ['irishub/slashing/MsgUnjail']);
    _this.value = {
      consumer: consumer,
      'block-interval': blockInterval
    };
    return _this;
  }
  (0, _inherits2["default"])(MsgRequestRand, _Msg);
  return (0, _createClass2["default"])(MsgRequestRand, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
}(_types.Msg);