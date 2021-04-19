import { Coin, Msg, TxType } from './types';
import { TxModelCreator } from '../helper';
import * as pbs from "./proto";
import { SdkError, CODES } from '../errors';

/**
 * param struct for Create ibc transfer Tx 
 */
export interface TransferParam {
  source_port: string;
  source_channel: string;
  token: Coin;
  sender: string;
  receiver: string;
  timeout_height?: {revision_number:number, revision_height:number};
  timeout_timestamp?:number
}

/**
 * Msg for ibc Transfer
 *
 * @hidden
 */
export class MsgTransfer extends Msg {
  value: TransferParam;

  constructor(msg:TransferParam) {
    super(TxType.MsgTransfer);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.ibc_transfer_query_pb.MsgTransfer;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSourcePort(this.value.source_port);
    msg.setSourceChannel(this.value.source_channel);
    msg.setToken(TxModelCreator.createCoinModel(this.value.token.denom, this.value.token.amount));
    msg.setSender(this.value.sender);
    msg.setReceiver(this.value.receiver);
    if (this.value.timeout_height && 
        this.value.timeout_height.revision_number && 
        this.value.timeout_height.revision_height) {
      let height = new pbs.ibc_core_client_pb.Height();
      height.setRevisionNumber(this.value.timeout_height.revision_number);
      height.setRevisionNumber(this.value.timeout_height.revision_height);
      msg.setTimeoutHeight(height);
    }
    if (this.value.timeout_timestamp) {
      msg.setTimeoutTimestamp(this.value.timeout_timestamp);
    }
    return msg;
  }

  validate() {
    if (!this.value.source_port) {
      throw new SdkError("source_port is  empty");
    }
    if (!this.value.source_channel) {
      throw new SdkError("source_channel is  empty");
    }
    if (!this.value.token) {
      throw new SdkError("token is  empty");
    }
    if (!this.value.receiver) {
      throw new SdkError("receiver is  empty");
    }
    if (!this.value.timeout_height && !this.value.timeout_timestamp) {
      throw new SdkError("there must be one timeout_height or timeout_timestamp");
    }
  }
}
