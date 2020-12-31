const CODESPACE_ROOT = 'sdk';

/** Error codes in irishub v1.0 */
export const CODES = {
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
const errorMap = new Map<string, number>([
  [CODESPACE_ROOT + CODES_V17.OK, CODES.OK],
  [CODESPACE_ROOT + CODES_V17.Internal, CODES.Internal],
  [CODESPACE_ROOT + CODES_V17.TxDecode, CODES.TxDecode],
  [CODESPACE_ROOT + CODES_V17.InvalidSequence, CODES.InvalidSequence],
  [CODESPACE_ROOT + CODES_V17.Unauthorized, CODES.Unauthorized],
  [CODESPACE_ROOT + CODES_V17.InsufficientFunds, CODES.InsufficientFunds],
  [CODESPACE_ROOT + CODES_V17.UnknownRequest, CODES.UnknownRequest],
  [CODESPACE_ROOT + CODES_V17.InvalidAddress, CODES.InvalidAddress],
  [CODESPACE_ROOT + CODES_V17.InvalidPubkey, CODES.InvalidPubkey],
  [CODESPACE_ROOT + CODES_V17.UnknownAddress, CODES.UnknownAddress],
  [CODESPACE_ROOT + CODES_V17.InsufficientCoins, CODES.InsufficientFunds],
  [CODESPACE_ROOT + CODES_V17.InvalidCoins, CODES.InvalidCoins],
  [CODESPACE_ROOT + CODES_V17.OutOfGas, CODES.OutOfGas],
  [CODESPACE_ROOT + CODES_V17.MemoTooLarge, CODES.MemoTooLarge],
  [CODESPACE_ROOT + CODES_V17.InsufficientFee, CODES.InsufficientFee],
  [CODESPACE_ROOT + CODES_V17.OutOfService, CODES.UnknownRequest], // Unused
  [CODESPACE_ROOT + CODES_V17.TooManySignatures, CODES.TooManySignatures],
  [CODESPACE_ROOT + CODES_V17.GasPriceTooLow, CODES.InsufficientFee],
  [CODESPACE_ROOT + CODES_V17.InvalidGas, CODES.InvalidRequest],
  [CODESPACE_ROOT + CODES_V17.InvalidTxFee, CODES.InvalidRequest],
  [CODESPACE_ROOT + CODES_V17.InvalidFeeDenom, CODES.InvalidRequest], // Only used in ValidateFee for genesis
  [CODESPACE_ROOT + CODES_V17.ExceedsTxSize, CODES.TxTooLarge],
  [CODESPACE_ROOT + CODES_V17.ServiceTxLimit, CODES.InvalidRequest],
  [CODESPACE_ROOT + CODES_V17.PaginationParams, CODES.InvalidRequest],
]);

/** IRISHub SDK Error */
export class SdkError extends Error {
  /** Error code space, reserved field */
  codespace = CODESPACE_ROOT;
  /** Error code */
  code = CODES.InvalidRequest;

  /**
   * Initialize SdkError with irishub error msg
   * @param msg irishub error msg
   */
  constructor(msg: string, code = CODES.InvalidRequest) {
    super(msg);
    // const mappedCode = errorMap.get(this.codespace + code);
    this.code = code;
  }
}
