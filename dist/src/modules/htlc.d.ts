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
    claimHTLC(sender: string, id: string, secret: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    queryHTLC(id: string): Promise<object>;
    queryAssetSupply(denom: string): Promise<object>;
    queryAssetSupplies(): Promise<object>;
    queryParams(): Promise<object>;
}
