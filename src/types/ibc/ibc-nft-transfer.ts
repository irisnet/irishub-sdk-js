import { Msg, TxType } from '../types';
import * as pbs from "../proto";
import { SdkError } from '../../errors';

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
  timeout_height?: {revision_number:number, revision_height:number};
  timeout_timestamp?: number;
  memo?: string;
}

/**
 * Msg for ibc nft Transfer
 *
 * @hidden
 */
export class MsgIbcNftTransfer extends Msg {
  value: IbcNftTransferParam;

  constructor(msg: IbcNftTransferParam) {
    super(TxType.MsgIbcNftTransfer);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.ibc_nft_transfer_tx_pb.MsgTransfer;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSourcePort(this.value.source_port);
    msg.setSourceChannel(this.value.source_channel);
    msg.setClassId(this.value.class_id);
    this.value.token_ids.forEach((item)=>{
      msg.addTokenIds(item);
    });
    msg.setSender(this.value.sender);
    msg.setReceiver(this.value.receiver);
    if (this.value.timeout_height && 
        this.value.timeout_height.revision_number && 
        this.value.timeout_height.revision_height) {
      let height = new pbs.ibc_core_client_pb.Height();
      height.setRevisionNumber(this.value.timeout_height.revision_number);
      height.setRevisionHeight(this.value.timeout_height.revision_height);
      msg.setTimeoutHeight(height);
    }
    if (this.value.timeout_timestamp) {
      msg.setTimeoutTimestamp(this.value.timeout_timestamp);
    }
    if (this.value.memo) {
      msg.setMemo(this.value.memo);
    }
    return msg;
  }

  validate() {
    if (!this.value.source_port) {
      throw new SdkError("source_port is empty");
    }
    if (!this.value.source_channel) {
      throw new SdkError("source_channel is empty");
    }
    if (!this.value.class_id) {
      throw new SdkError("class_id is empty");
    }
    if (!this.value.token_ids || this.value.token_ids.length == 0) {
      throw new SdkError("token_ids is empty");
    }
    if (!this.value.receiver) {
      throw new SdkError("receiver is empty");
    }
    if (!this.value.timeout_height && !this.value.timeout_timestamp) {
      throw new SdkError("there must be one timeout_height or timeout_timestamp");
    }
  }
}
