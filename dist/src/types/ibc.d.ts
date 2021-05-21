import { Coin, Msg } from './types';
/**
 * param struct for Create ibc transfer Tx
 */
export interface TransferParam {
    source_port: string;
    source_channel: string;
    token: Coin;
    sender: string;
    receiver: string;
    timeout_height?: {
        revision_number: number;
        revision_height: number;
    };
    timeout_timestamp?: number;
}
/**
 * Msg for ibc Transfer
 *
 * @hidden
 */
export declare class MsgTransfer extends Msg {
    value: TransferParam;
    constructor(msg: TransferParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
