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
