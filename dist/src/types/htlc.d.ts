import { Coin, Msg } from './types';
/**
 * param struct for Create HTLC Tx
 */
export interface CreateHTLCTxParam {
    sender: string;
    to: string;
    receiver_on_other_chain: string;
    sender_on_other_chain: string;
    amount: Coin[];
    hash_lock: string;
    timestamp: number;
    time_lock: number;
    transfer: boolean;
}
/**
 * Msg for Create HTLC
 *
 * @hidden
 */
export declare class MsgCreateHTLC extends Msg {
    value: CreateHTLCTxParam;
    constructor(msg: CreateHTLCTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for Claim HTLC Tx
 */
export interface ClaimHTLCTxParam {
    sender: string;
    id: string;
    secret: string;
}
/**
 * Msg for Claim HTLC
 *
 * @hidden
 */
export declare class MsgClaimHTLC extends Msg {
    value: ClaimHTLCTxParam;
    constructor(msg: ClaimHTLCTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
