import { Coin, Msg, Pubkey } from './types';
/**
 * Msg for sending coins
 *
 * @hidden
 */
export declare class MsgSend extends Msg {
    value: {
        from_address: string;
        to_address: string;
        amount: Coin[];
    };
    constructor(msg: {
        from_address: string;
        to_address: string;
        amount: Coin[];
    });
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * Msg for sending coins
 *
 * @hidden
 */
export declare class MsgMultiSend extends Msg {
    value: {
        inputs: Input[];
        outputs: Output[];
    };
    constructor(msg: {
        inputs: Input[];
        outputs: Output[];
    });
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/** Base input and output struct */
export interface InputOutput {
    /** Bech32 account address */
    address: string;
    coins: Coin[];
}
/** Input implemention of [[InputOutput]] */
export interface Input extends InputOutput {
}
/** Output implemention of [[InputOutput]] */
export interface Output extends InputOutput {
}
export interface EventDataMsgSend {
    height: string;
    hash: string;
    from: string;
    to: string;
    amount: Coin[];
}
export interface Account {
    /** Bech32 account address */
    address: string;
    coins: Coin[];
    public_key: Pubkey;
    account_number: string;
    sequence: string;
}
