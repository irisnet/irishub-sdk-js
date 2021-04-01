import { Client } from '../client';
import * as types from '../types';
/**
 * This module implements HTLC related functions
 *
 *
 * @category Modules
 * @since v0.17
 */
export declare class Htlc {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * create an HTLC
     * @param {Object} param {
     *  sender
     *  to
     *  receiver_on_other_chain
     *  sender_on_other_chain
     *  amount
     *  hash_lock
     *  timestamp
     *  time_lock
     *  transfer
     *  }
     *  @param baseTx { types.BaseTx }
     */
    createHTLC(param: {
        sender: string;
        to: string;
        receiver_on_other_chain: string;
        sender_on_other_chain: string;
        amount: types.Coin[];
        hash_lock: string;
        timestamp: number;
        time_lock: number;
        transfer: boolean;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * claim an HTLC
     * @param sender
     * @param id
     * @param secret
     * @param baseTx
     */
    claimHTLC(sender: string, id: string, secret: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * HTLC queries the HTLC by the specified hash lock
     * @type id
     */
    queryHTLC(id: string): Promise<object>;
    /**
     * AssetSupply queries the supply of an asset
     * @type denom
     */
    queryAssetSupply(denom: string): Promise<object>;
    /**
     * AssetSupplies queries the supplies of all assets
     */
    queryAssetSupplies(): Promise<object>;
    /**
     * Params queries the htlc parameters
     */
    queryParams(): Promise<object>;
}
