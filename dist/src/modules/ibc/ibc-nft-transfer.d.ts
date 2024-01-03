import { Client } from '../../client';
import * as types from '../../types';
/**
 * This module implements Ibc Nft Transfer related functions
 *
 * @category Modules
 * @since v3.3.0
 */
export declare class IbcNftTransfer {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * ibc nft transfer
     * @param param:{
        source_port: string;
        source_channel: string;
        class_id: string;
        token_ids: string[];
        receiver: string;
        timeout_height?: {revision_number:number, revision_height:number},
        timeout_timestamp?:number,
      }
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v3.3.0
     */
    transfer(param: {
        source_port: string;
        source_channel: string;
        class_id: string;
        token_ids: string[];
        receiver: string;
        timeout_height?: {
            revision_number: number;
            revision_height: number;
        };
        timeout_timestamp?: number;
        memo?: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * ClassTrace queries a class trace information.
     * @param hash (in hex format) of the denomination trace information.
     */
    queryClassTrace(hash: string): Promise<object>;
    /**
     * ClassTraces queries all class traces.
     */
    queryClassTraces(pagination?: types.Pagination): Promise<object>;
    /**
     * ClassHash queries a class hash information.
     */
    queryClassHash(trace: string): Promise<object>;
    /**
     * EscrowAddress returns the escrow address for a particular port and channel id.
     */
    queryEscrowAddress(port_id: string, channel_id: string): Promise<object>;
    /**
     * Params queries all parameters of the nft-transfer module.
     */
    queryParams(): Promise<object>;
}
