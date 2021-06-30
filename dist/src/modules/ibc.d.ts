import { Client } from '../client';
import * as types from '../types';
/**
 * This module implements IBC related functions
 *
 *
 * @category Modules
 * @since v0.17
 */
export declare class Ibc {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * ibc transfer
     * @param param:{
        source_port: string;
        source_channel: string;
        token: Coin;
        receiver: string;
        timeout_height?: {revision_number:number, revision_height:number},
        timeout_timestamp?:number,
      }
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    transfer(param: {
        source_port: string;
        source_channel: string;
        token: types.Coin;
        receiver: string;
        timeout_height?: {
            revision_number: number;
            revision_height: number;
        };
        timeout_timestamp?: number;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * DenomTrace queries a denomination trace information.
     * @param hash (in hex format) of the denomination trace information.
     */
    queryDenomTrace(hash: string): Promise<object>;
    /**
     * DenomTraces queries all denomination traces.
     */
    queryDenomTraces(page_number?: number, page_size?: number): Promise<object>;
    /**
     * Params queries all parameters of the ibc-transfer module.
     */
    queryParams(): Promise<object>;
    /**
     * Channels queries all the IBC channels of a chain.
     */
    queryChannels(page_number?: number, page_size?: number): Promise<object>;
}
