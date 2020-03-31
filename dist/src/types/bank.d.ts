import { Coin, Msg, Pubkey } from './types';
/**
 * Msg for sending coins
 *
 * @hidden
 */
export declare class MsgSend implements Msg {
    type: string;
    value: {
        inputs: Input[];
        outputs: Output[];
    };
    constructor(inputs: Input[], outputs: Output[]);
    getSignBytes(): object;
}
/**
 * Msg for burning coins
 *
 * @hidden
 */
export declare class MsgBurn implements Msg {
    type: string;
    value: {
        owner: string;
        coins: Coin[];
    };
    constructor(owner: string, coins: Coin[]);
    getSignBytes(): object;
}
/**
 * Msg for setting memo regexp for an address
 *
 * @hidden
 */
export declare class MsgSetMemoRegexp implements Msg {
    type: string;
    value: {
        owner: string;
        memo_regexp: string;
    };
    constructor(owner: string, memoRegexp: string);
    getSignBytes(): object;
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
/** Token statistics */
export interface TokenStats {
    /** Non bonded tokens */
    loose_tokens: Coin[];
    /** Bonded tokens */
    bonded_tokens: Coin[];
    /** Burned tokens */
    burned_tokens: Coin[];
    /** Total supply */
    total_supply: Coin[];
}
export interface EventDataMsgSend {
    height: string;
    hash: string;
    from: string;
    to: string;
    amount: Coin[];
}
export interface BaseAccount {
    /** Bech32 account address */
    address: string;
    coins: Coin[];
    public_key: Pubkey;
    account_number: string;
    sequence: string;
}
