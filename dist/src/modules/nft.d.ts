import { Client } from '../client';
import * as types from '../types';
/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.17
 */
export declare class Nft {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * issue Denom
     * @param id string
     * @param name string
     * @param schema string
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    issueDenom(id: string, name: string, schema: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * mint NFT
     * @param id string
     * @param denom_id string
     * @param name string
     * @param uri string
     * @param data string
     * @param recipient string If recipient it's "", recipient default is sender
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    mintNft(params: types.MintNFTParam[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * edit NFT
     * @param id string
     * @param denom_id string
     * @param newProperty {name?: string,uri?:string,data?:string} new nft property
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    editNft(id: string, denom_id: string, new_property: {
        name?: string;
        uri?: string;
        data?: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * transfer NFT
     * @param id string
     * @param denom_id string
     * @param recipient string
     * @param newProperty {name?: string,uri?:string,data?:string} new nft property
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    transferNft(id: string, denom_id: string, recipient: string, new_property: {
        name?: string;
        uri?: string;
        data?: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * burn NFT
     * @param id string
     * @param denom_id string
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    burnNft(id: string, denom_id: string, baseTx: types.BaseTx): Promise<types.TxResult>;
}
