"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SdkError = exports.CODES = void 0;
const CODESPACE_ROOT = 'sdk';
/** Error codes in irishub v1.0 */
exports.CODES = {
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
    TxTooLarge: 21,
};
/** Error codes in irishub v0.17 */
const CODES_V17 = {
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
    PaginationParams: 23,
};
// Map error codes in irishub v0.17 to v1.0
const errorMap = new Map([
    [CODESPACE_ROOT + CODES_V17.OK, exports.CODES.OK],
    [CODESPACE_ROOT + CODES_V17.Internal, exports.CODES.Internal],
    [CODESPACE_ROOT + CODES_V17.TxDecode, exports.CODES.TxDecode],
    [CODESPACE_ROOT + CODES_V17.InvalidSequence, exports.CODES.InvalidSequence],
    [CODESPACE_ROOT + CODES_V17.Unauthorized, exports.CODES.Unauthorized],
    [CODESPACE_ROOT + CODES_V17.InsufficientFunds, exports.CODES.InsufficientFunds],
    [CODESPACE_ROOT + CODES_V17.UnknownRequest, exports.CODES.UnknownRequest],
    [CODESPACE_ROOT + CODES_V17.InvalidAddress, exports.CODES.InvalidAddress],
    [CODESPACE_ROOT + CODES_V17.InvalidPubkey, exports.CODES.InvalidPubkey],
    [CODESPACE_ROOT + CODES_V17.UnknownAddress, exports.CODES.UnknownAddress],
    [CODESPACE_ROOT + CODES_V17.InsufficientCoins, exports.CODES.InsufficientFunds],
    [CODESPACE_ROOT + CODES_V17.InvalidCoins, exports.CODES.InvalidCoins],
    [CODESPACE_ROOT + CODES_V17.OutOfGas, exports.CODES.OutOfGas],
    [CODESPACE_ROOT + CODES_V17.MemoTooLarge, exports.CODES.MemoTooLarge],
    [CODESPACE_ROOT + CODES_V17.InsufficientFee, exports.CODES.InsufficientFee],
    [CODESPACE_ROOT + CODES_V17.OutOfService, exports.CODES.UnknownRequest],
    [CODESPACE_ROOT + CODES_V17.TooManySignatures, exports.CODES.TooManySignatures],
    [CODESPACE_ROOT + CODES_V17.GasPriceTooLow, exports.CODES.InsufficientFee],
    [CODESPACE_ROOT + CODES_V17.InvalidGas, exports.CODES.InvalidRequest],
    [CODESPACE_ROOT + CODES_V17.InvalidTxFee, exports.CODES.InvalidRequest],
    [CODESPACE_ROOT + CODES_V17.InvalidFeeDenom, exports.CODES.InvalidRequest],
    [CODESPACE_ROOT + CODES_V17.ExceedsTxSize, exports.CODES.TxTooLarge],
    [CODESPACE_ROOT + CODES_V17.ServiceTxLimit, exports.CODES.InvalidRequest],
    [CODESPACE_ROOT + CODES_V17.PaginationParams, exports.CODES.InvalidRequest],
]);
/** IRISHub SDK Error */
class SdkError extends Error {
    /**
     * Initialize SdkError with irishub error msg
     * @param msg irishub error msg
     */
    constructor(msg, code = exports.CODES.InvalidRequest) {
        super(msg);
        /** Error code space, reserved field */
        this.codespace = CODESPACE_ROOT;
        /** Error code */
        this.code = exports.CODES.InvalidRequest;
        // const mappedCode = errorMap.get(this.codespace + code);
        this.code = code;
    }
}
exports.SdkError = SdkError;
//# sourceMappingURL=errors.js.map