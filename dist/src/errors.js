"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SdkError = exports.CODES = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CODESPACE_ROOT = 'sdk';
/** Error codes in irishub v1.0 */

var CODES = {
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

exports.CODES = CODES;

var SdkError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(SdkError, _Error);

  var _super = _createSuper(SdkError);

  // /** Error code space, reserved field */
  // codespace = CODESPACE_ROOT;

  /** Error code */

  /**
   * Initialize SdkError with irishub error msg
   * @param msg irishub error msg
   */
  function SdkError(msg) {
    var _this;

    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CODES.InvalidRequest;
    var space = arguments.length > 2 ? arguments[2] : undefined;
    (0, _classCallCheck2["default"])(this, SdkError);
    _this = _super.call(this, msg); // const mappedCode = errorMap.get(this.codespace + code);

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "code", CODES.InvalidRequest);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "codespace", 'sdk-js');
    _this.code = code;
    _this.codespace = space !== null && space !== void 0 ? space : _this.codespace;
    return _this;
  }

  return SdkError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.SdkError = SdkError;