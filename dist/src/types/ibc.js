import { Msg, TxType } from './types';
import { TxModelCreator } from '../helper';
import * as pbs from "./proto";
import { SdkError } from '../errors';
/**
 * Msg for ibc Transfer
 *
 * @hidden
 */
export class MsgTransfer extends Msg {
    constructor(msg) {
        super(TxType.MsgTransfer);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.ibc_transfer_query_pb.MsgTransfer;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
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
//# sourceMappingURL=ibc.js.map