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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CODESPACE_ROOT = 'sdk';
/** Error codes in irishub v1.0 */

var CODES = {
  OK: 0,
  Internal: 1,
  TxDecode: 2,
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
  OutOfService: 15,
  TooManySignatures: 14,
  NoSignatures: 15,
  ErrJsonMarshal: 16,
  ErrJsonUnmarshal: 17,
  InvalidRequest: 18,
  TxInMempoolCache: 19,
  MempoolIsFull: 20,
  TxTooLarge: 21
};
/** Error codes in irishub v0.17 */

exports.CODES = CODES;
var CODES_V17 = {
  OK: 0,
  Internal: 1,
  TxDecode: 2,
  InvalidSequence: 3,
  Unauthorized: 4,
  InsufficientFunds: 5,
  UnknownRequest: 6,
  InvalidAddress: 7,
  InvalidPubkey: 8,
  UnknownAddress: 9,
  InsufficientCoins: 10,
  InvalidCoins: 11,
  OutOfGas: 12,
  MemoTooLarge: 13,
  InsufficientFee: 14,
  OutOfService: 15,
  TooManySignatures: 16,
  GasPriceTooLow: 17,
  InvalidGas: 18,
  InvalidTxFee: 19,
  InvalidFeeDenom: 20,
  ExceedsTxSize: 21,
  ServiceTxLimit: 22,
  PaginationParams: 23
}; // Map error codes in irishub v0.17 to v1.0

var errorMap = new Map([[CODESPACE_ROOT + CODES_V17.OK, CODES.OK], [CODESPACE_ROOT + CODES_V17.Internal, CODES.Internal], [CODESPACE_ROOT + CODES_V17.TxDecode, CODES.TxDecode], [CODESPACE_ROOT + CODES_V17.InvalidSequence, CODES.InvalidSequence], [CODESPACE_ROOT + CODES_V17.Unauthorized, CODES.Unauthorized], [CODESPACE_ROOT + CODES_V17.InsufficientFunds, CODES.InsufficientFunds], [CODESPACE_ROOT + CODES_V17.UnknownRequest, CODES.UnknownRequest], [CODESPACE_ROOT + CODES_V17.InvalidAddress, CODES.InvalidAddress], [CODESPACE_ROOT + CODES_V17.InvalidPubkey, CODES.InvalidPubkey], [CODESPACE_ROOT + CODES_V17.UnknownAddress, CODES.UnknownAddress], [CODESPACE_ROOT + CODES_V17.InsufficientCoins, CODES.InsufficientFunds], [CODESPACE_ROOT + CODES_V17.InvalidCoins, CODES.InvalidCoins], [CODESPACE_ROOT + CODES_V17.OutOfGas, CODES.OutOfGas], [CODESPACE_ROOT + CODES_V17.MemoTooLarge, CODES.MemoTooLarge], [CODESPACE_ROOT + CODES_V17.InsufficientFee, CODES.InsufficientFee], [CODESPACE_ROOT + CODES_V17.OutOfService, CODES.UnknownRequest], // Unused
[CODESPACE_ROOT + CODES_V17.TooManySignatures, CODES.TooManySignatures], [CODESPACE_ROOT + CODES_V17.GasPriceTooLow, CODES.InsufficientFee], [CODESPACE_ROOT + CODES_V17.InvalidGas, CODES.InvalidRequest], [CODESPACE_ROOT + CODES_V17.InvalidTxFee, CODES.InvalidRequest], [CODESPACE_ROOT + CODES_V17.InvalidFeeDenom, CODES.InvalidRequest], // Only used in ValidateFee for genesis
[CODESPACE_ROOT + CODES_V17.ExceedsTxSize, CODES.TxTooLarge], [CODESPACE_ROOT + CODES_V17.ServiceTxLimit, CODES.InvalidRequest], [CODESPACE_ROOT + CODES_V17.PaginationParams, CODES.InvalidRequest]]);
/** IRISHub SDK Error */

var SdkError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(SdkError, _Error);

  var _super = _createSuper(SdkError);

  /** Error code space, reserved field */

  /** Error code */

  /**
   * Initialize SdkError with irishub error msg
   * @param msg irishub error msg
   */
  function SdkError(msg) {
    var _this;

    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CODES.InvalidRequest;
    (0, _classCallCheck2["default"])(this, SdkError);
    _this = _super.call(this, msg);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "codespace", CODESPACE_ROOT);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "code", CODES.InvalidRequest);
    var mappedCode = errorMap.get(_this.codespace + code);
    _this.code = mappedCode ? mappedCode : CODES.InvalidRequest;
    return _this;
  }

  return SdkError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports.SdkError = SdkError;