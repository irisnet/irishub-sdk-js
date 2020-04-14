/** Error codes in irishub v1.0 */
export declare const CODES: {
    OK: number;
    Internal: number;
    TxDecode: number;
    InvalidSequence: number;
    Unauthorized: number;
    InsufficientFunds: number;
    UnknownRequest: number;
    InvalidAddress: number;
    InvalidPubkey: number;
    UnknownAddress: number;
    InvalidCoins: number;
    OutOfGas: number;
    MemoTooLarge: number;
    InsufficientFee: number;
    OutOfService: number;
    TooManySignatures: number;
    NoSignatures: number;
    ErrJsonMarshal: number;
    ErrJsonUnmarshal: number;
    InvalidRequest: number;
    TxInMempoolCache: number;
    MempoolIsFull: number;
    TxTooLarge: number;
};
/** IRISHub SDK Error */
export declare class SdkError extends Error {
    /** Error code space, reserved field */
    codespace: string;
    /** Error code */
    code: number;
    /**
     * Initialize SdkError with irishub error msg
     * @param msg irishub error msg
     */
    constructor(msg: string, code?: number);
}
