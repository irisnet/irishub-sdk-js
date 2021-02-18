const CODESPACE_ROOT = 'sdk';

/** Error codes in irishub v1.0 */
export const CODES = {
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
  KeyNotFound:22,
  InvalidPassword:23,
  SignerDoesNotMatch:24,
  InvalidGasAdjustment:25,
  InvalidHeight:26,
  InvalidVersion:27,
  InvalidChainId:28,
  InvalidType:29,
  TxTimeoutHeight:30,
  UnknownExtensionOptions:31,
  IncorrectAccountSequence:32,
  FailedPackingProtobufMessageToAny:33,
  FailedUnpackingProtobufMessagFromAny:34,
  InternalLogicError:35,
  Conflict:36,
  FeatureNotSupported:37,
  Panic:111222,

  //sdk custom 
  InvalidMnemonic:801,
  DerivePrivateKeyError:802
  
};

/** IRISHub SDK Error */
export class SdkError extends Error {
  // /** Error code space, reserved field */
  // codespace = CODESPACE_ROOT;
  /** Error code */
  code = CODES.InvalidRequest;
  codespace: string = 'sdk-js';

  /**
   * Initialize SdkError with irishub error msg
   * @param msg irishub error msg
   */
  constructor(msg: string, code = CODES.InvalidRequest, space?:string) {
    super(msg);
    // const mappedCode = errorMap.get(this.codespace + code);
    this.code = code;
    this.codespace = space??this.codespace;
  }
}
