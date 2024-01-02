import { Msg } from '../types';
/**
 * param struct for Create ibc nft transfer Tx
 */
export interface IbcNftTransferParam {
    source_port: string;
    source_channel: string;
    class_id: string;
    token_ids: string[];
    sender: string;
    receiver: string;
    timeout_height?: {
        revision_number: number;
        revision_height: number;
    };
    timeout_timestamp?: number;
    memo?: string;
}
/**
 * Msg for ibc nft Transfer
 *
 * @hidden
 */
export declare class MsgIbcNftTransfer extends Msg {
    value: IbcNftTransferParam;
    constructor(msg: IbcNftTransferParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
