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
    mintNft(id: string, denom_id: string, name: string, uri: string, data: string, recipient: string, baseTx: types.BaseTx): Promise<types.TxResult>;
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
    /**
     * Supply queries the total supply of a given denom or owner
     * @param denom_id
     * @param owner
     */
    querySupply(denom_id?: string, owner?: string): Promise<object>;
    /**
     * Owner queries the NFTs of the specified owner
     * @param owner
     * @param denom_id
     */
    queryOwner(owner: string, denom_id?: string): Promise<object>;
    /**
     * Collection queries the NFTs of the specified denom
     * @param denom_id
     */
    queryCollection(denom_id: string): Promise<object>;
    /**
     * Denom queries the definition of a given denom
     * @param denom_id
     */
    queryDenom(denom_id: string): Promise<object>;
    /**
     * Denoms queries all the denoms
     */
    queryDenoms(): Promise<object>;
    /**
     * NFT queries the NFT for the given denom and token ID
     * @param denom_id
     * @param token_id
     */
    queryNFT(denom_id: string, token_id: string): Promise<object>;
}
