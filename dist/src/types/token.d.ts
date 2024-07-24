import { Coin, Msg } from './types';
export interface Token {
    symbol: string;
    name: string;
    scale: number;
    min_unit: string;
    initial_supply: number;
    max_supply: number;
    mintable: boolean;
    owner: string;
}
export interface TokenFees {
    exist: boolean;
    issue_fee: Coin;
    mint_fee: Coin;
}
/**
 * param struct for issue token tx
 */
export interface IssueTokenTxParam {
    symbol: string;
    name: string;
    min_unit: string;
    owner: string;
    scale?: number;
    initial_supply?: number;
    max_supply?: number;
    mintable?: boolean;
}
/**
 * param struct for mint token tx
 */
export interface MintTokenTxParam {
    coin: Coin;
    owner: string;
    to?: string;
}
/**
 * param struct for burn token tx
 */
export interface BurnTokenTxParam {
    coin: Coin;
    sender: number;
}
/**
 * param struct for edit token tx
 */
export interface EditTokenTxParam {
    symbol: string;
    owner: string;
    name?: string;
    max_supply?: number;
    mintable?: string;
}
/**
 * param struct for transfer token owner tx
 */
export interface TransferTokenOwnerTxParam {
    symbol: string;
    src_owner: string;
    dst_owner: string;
}
/**
 * param struct for Swap Fee Token tx
 */
export interface SwapFeeTokenTxParam {
    fee_paid: Coin;
    receiver?: string;
    sender: string;
}
/**
 * param struct for Swap To ERC20 tx
 */
export interface SwapToERC20TxParam {
    amount: Coin;
    sender: string;
    receiver: string;
}
/**
 * param struct for Swap From ERC20 tx
 */
export interface SwapFromERC20TxParam {
    wanted_amount: Coin;
    sender: string;
    receiver: string;
}
/**
 * Msg struct for issue token
 * @hidden
 */
export declare class MsgIssueToken extends Msg {
    value: IssueTokenTxParam;
    constructor(msg: IssueTokenTxParam);
    static getModelClass(): any;
    getModel(): any;
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate(): boolean;
}
/**
 * Msg struct for edit token
 * @hidden
 */
export declare class MsgEditToken extends Msg {
    value: EditTokenTxParam;
    constructor(msg: EditTokenTxParam);
    static getModelClass(): any;
    getModel(): any;
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate(): boolean;
}
/**
 * Msg struct for mint token
 * @hidden
 */
export declare class MsgMintToken extends Msg {
    value: MintTokenTxParam;
    constructor(msg: MintTokenTxParam);
    static getModelClass(): any;
    getModel(): any;
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate(): boolean;
}
/**
 * Msg struct for mint token
 * @hidden
 */
export declare class MsgBurnToken extends Msg {
    value: BurnTokenTxParam;
    constructor(msg: BurnTokenTxParam);
    static getModelClass(): any;
    getModel(): any;
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate(): boolean;
}
/**
 * Msg struct for transfer token owner
 * @hidden
 */
export declare class MsgTransferTokenOwner extends Msg {
    value: TransferTokenOwnerTxParam;
    constructor(msg: TransferTokenOwnerTxParam);
    static getModelClass(): any;
    getModel(): any;
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate(): boolean;
}
/**
 * Msg struct for Swap Fee Token
 * @hidden
 */
export declare class MsgSwapFeeToken extends Msg {
    value: SwapFeeTokenTxParam;
    constructor(msg: SwapFeeTokenTxParam);
    static getModelClass(): any;
    getModel(): any;
    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    validate(): boolean;
}
/**
 * Msg struct for Swap To ERC20
 */
export declare class MsgSwapToERC20 extends Msg {
    value: SwapToERC20TxParam;
    constructor(msg: SwapToERC20TxParam);
    static getModelClass(): any;
    getModel(): any;
    /**
     * validate necessary params
     */
    validate(): boolean;
}
export declare class MsgSwapFromERC20 extends Msg {
    value: SwapFromERC20TxParam;
    constructor(msg: SwapFromERC20TxParam);
    static getModelClass(): any;
    getModel(): any;
    /**
     * validate necessary params
     */
    validate(): boolean;
}
