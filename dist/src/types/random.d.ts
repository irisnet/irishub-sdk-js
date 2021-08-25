import { Coin, Msg } from './types';
export interface RandomInfo {
    request_tx_hash: string;
    request_id: string;
    height: number;
    value: string;
}
export interface RandomRequest {
    height: number;
    consumer: string;
    txhash: string;
    oracle: boolean;
    service_fee_cap: Coin[];
}
/**
 * Msg struct for requesting a random number
 * @hidden
 */
export declare class MsgRequestRand extends Msg {
    value: {
        consumer: string;
        'block-interval': number;
    };
    constructor(consumer: string, blockInterval: number);
    getSignBytes(): object;
}
