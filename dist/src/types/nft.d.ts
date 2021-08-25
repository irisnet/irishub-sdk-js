import { Msg } from './index';
/**
 * param struct for issue denom tx
 */
export interface IssueDenomParam {
    id: string;
    name: string;
    schema: string;
    sender: string;
}
/**
 * Msg for issue denom
 *
 * @hidden
 */
export declare class MsgIssueDenom extends Msg {
    value: IssueDenomParam;
    constructor(msg: IssueDenomParam);
    static getModelClass(): any;
    getModel(): any;
    Validate(): void;
}
/**
 * param struct for Mint NFT
 */
export interface MintNFTParam {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
}
/**
 * Msg for Mint NFT
 *
 * @hidden
 */
export declare class MsgMintNFT extends Msg {
    value: MintNFTParam;
    constructor(msg: MintNFTParam);
    static getModelClass(): any;
    getModel(): any;
    Validate(): void;
}
/**
 * param struct for Edit NFT tx
 */
export interface EditNFTParam {
    id: string;
    denom_id: string;
    name?: string;
    uri?: string;
    data?: string;
    sender: string;
}
/**
 * Msg for Edit NFT
 *
 * @hidden
 */
export declare class MsgEditNFT extends Msg {
    value: EditNFTParam;
    constructor(msg: EditNFTParam);
    static getModelClass(): any;
    getModel(): any;
    Validate(): void;
}
/**
 * param struct for Transfer NFT tx
 */
export interface TransferNFTParam {
    id: string;
    denom_id: string;
    name?: string;
    uri?: string;
    data?: string;
    sender: string;
    recipient: string;
}
/**
 * Msg for Transfer NFT
 *
 * @hidden
 */
export declare class MsgTransferNFT extends Msg {
    value: TransferNFTParam;
    constructor(msg: TransferNFTParam);
    static getModelClass(): any;
    getModel(): any;
    Validate(): void;
}
/**
 * param struct for Burn NFT tx
 */
export interface BurnNFTParam {
    id: string;
    denom_id: string;
    sender: string;
}
/**
 * Msg for Burn NFT
 *
 * @hidden
 */
export declare class MsgBurnNFT extends Msg {
    value: BurnNFTParam;
    constructor(msg: BurnNFTParam);
    static getModelClass(): any;
    getModel(): any;
    Validate(): void;
}
export interface Denom {
    id: string;
    name: string;
    schema: string;
    creator: string;
}
