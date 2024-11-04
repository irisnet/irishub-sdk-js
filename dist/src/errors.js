"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SdkError = exports.CODES = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var CODESPACE_ROOT = 'sdk';

/** Error codes in irishub v1.0 */
var CODES = exports.CODES = {
  OK: 0,
  Internal: 1,
  TxParseError: 2,
  InvalidSequence: 3,
  Unauthorized: 4,
  InsufficientFunds: 5,
  UnknownRequest: 6,
  InvalidAddress: 7,
  InvalidPubkey: 8,
  UnknownAddress: 9,
  InvalidCoins: 10,
  OutOfGas: 11,
  MemoTooLarge: 12,
  InsufficientFee: 13,
  TooManySignatures: 14,
  NoSignatures: 15,
  ErrJsonMarshal: 16,
  ErrJsonUnmarshal: 17,
  InvalidRequest: 18,
  TxInMempoolCache: 19,
  MempoolIsFull: 20,
  TxTooLarge: 21,
  KeyNotFound: 22,
  InvalidPassword: 23,
  SignerDoesNotMatch: 24,
  InvalidGasAdjustment: 25,
  InvalidHeight: 26,
  InvalidVersion: 27,
  InvalidChainId: 28,
  InvalidType: 29,
  TxTimeoutHeight: 30,
  UnknownExtensionOptions: 31,
  IncorrectAccountSequence: 32,
  FailedPackingProtobufMessageToAny: 33,
  FailedUnpackingProtobufMessagFromAny: 34,
  InternalLogicError: 35,
  Conflict: 36,
  FeatureNotSupported: 37,
  Panic: 111222,
  //sdk custom 
  InvalidMnemonic: 801,
  DerivePrivateKeyError: 802
};

/** IRISHub SDK Error */
var SdkError = exports.SdkError = /*#__PURE__*/function (_Error) {
  /**
   * Initialize SdkError with irishub error msg
   * @param msg irishub error msg
   */
  function SdkError(msg) {
    var _this;
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CODES.InvalidRequest;
    var space = arguments.length > 2 ? arguments[2] : undefined;
    (0, _classCallCheck2["default"])(this, SdkError);
    _this = _callSuper(this, SdkError, [msg]);
    // const mappedCode = errorMap.get(this.codespace + code);
    // /** Error code space, reserved field */
    // codespace = CODESPACE_ROOT;
    /** Error code */
    (0, _defineProperty2["default"])(_this, "code", CODES.InvalidRequest);
    (0, _defineProperty2["default"])(_this, "codespace", 'sdk-js');
    _this.code = code;
    _this.codespace = space !== null && space !== void 0 ? space : _this.codespace;
    return _this;
  }
  (0, _inherits2["default"])(SdkError, _Error);
  return (0, _createClass2["default"])(SdkError);
}(/*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));