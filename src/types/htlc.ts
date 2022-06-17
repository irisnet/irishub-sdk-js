import { Coin, Msg, Pubkey, TxType } from './types';
import { TxModelCreator } from '../helper';
import * as pbs from "./proto";
import { SdkError, CODES } from '../errors';

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
export class MsgCreateHTLC extends Msg {
  value: CreateHTLCTxParam;

  constructor(msg:CreateHTLCTxParam) {
    super(TxType.MsgCreateHTLC);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.htlc_tx_pb.MsgCreateHTLC;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSender(this.value.sender);
    msg.setTo(this.value.to);
    msg.setReceiverOnOtherChain(this.value.receiver_on_other_chain);
    msg.setSenderOnOtherChain(this.value.sender_on_other_chain);
    msg.setHashLock(this.value.hash_lock);
    msg.setTimestamp(this.value.timestamp);
    msg.setTimeLock(this.value.time_lock);
    msg.setTransfer(this.value.transfer);
    this.value.amount.forEach((item)=>{
        msg.addAmount(TxModelCreator.createCoinModel(item.denom, item.amount));
    });
    return msg;
  }

  validate() {
    if (!this.value.sender) {
      throw new SdkError("sender is empty");
    }
    if (!this.value.to) {
      throw new SdkError("to is empty");
    }
    if (!this.value.receiver_on_other_chain) {
      throw new SdkError("receiver_on_other_chain is empty");
    }
    if (!this.value.sender_on_other_chain) {
      throw new SdkError("sender_on_other_chain is empty");
    }
    if (!this.value.hash_lock) {
      throw new SdkError("hash_lock is empty");
    }
    if (!this.value.timestamp) {
      throw new SdkError("timestamp is empty");
    }
    if (!this.value.time_lock) {
      throw new SdkError("time_lock is empty");
    }
    if (typeof this.value.transfer == 'undefined') {
      throw new SdkError("transfer is empty");
    }
    if (!(this.value.amount && this.value.amount.length)) {
      throw new SdkError("amount is empty");
    }
  }
}

/**
 * param struct for Claim HTLC Tx
 */
export interface ClaimHTLCTxParam {
  sender: string,
  id: string,
  secret: string
}

/**
 * Msg for Claim HTLC
 *
 * @hidden
 */
export class MsgClaimHTLC extends Msg {
  value: ClaimHTLCTxParam;

  constructor(msg:ClaimHTLCTxParam) {
    super(TxType.MsgClaimHTLC);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.htlc_tx_pb.MsgClaimHTLC;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSender(this.value.sender);
    msg.setId(this.value.id);
    msg.setSecret(this.value.secret);
    return msg;
  }

  validate() {
    if (!this.value.sender) {
      throw new SdkError("sender is empty");
    }
    if (!this.value.id) {
      throw new SdkError("id is empty");
    }
    if (!this.value.secret) {
      throw new SdkError("secret is empty");
    }
  }
}