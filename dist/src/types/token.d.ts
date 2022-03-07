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
    symbol: string;
    amount: number;
    owner: string;
    to?: string;
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
