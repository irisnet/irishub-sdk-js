import { Coin, Msg, Tag } from './types';

/** @TODO document */
export class MsgCreateHTLC implements Msg {
  type: string;
  value: {
    sender: string,
    to: string,
    receiver_on_other_chain: string,
    amount: Coin[],
    time_lock: string,
    hash_lock: string,
    timestamp: string,
  };
  constructor(
      sender: string,
      to: string,
      receiverOnOtherChain: string,
      amount: Coin[],
      lockTime: string,
      hashLock: string,
      timestamp: string,
  ) {
    this.type = 'irishub/htlc/MsgCreateHTLC';
    this.value = {
      sender: sender,
      to: to,
      receiver_on_other_chain: receiverOnOtherChain,
      amount: amount,
      time_lock: lockTime,
      hash_lock: hashLock,
      timestamp: timestamp,
    };
  }
  getSignBytes(): object {
    return this;
  }
}

export class MsgClaimHTLC implements Msg {
  type: string;
  value: {
    sender: string,
    secret: string
    hash_lock: string,
  };
  constructor(sender: string, secret: string, hashLock: string) {
    this.type = 'irishub/htlc/MsgClaimHTLC';
    this.value = {
      sender: sender,
      secret: secret,
      hash_lock: hashLock
    };
  }
  getSignBytes(): object {
    return this;
  }
}

export class MsgRefundHTLC implements Msg {
  type: string;
  value: {
    sender: string,
    hash_lock: string,
  };
  constructor(sender: string, hashLock: string) {
    this.type = 'irishub/htlc/MsgRefundHTLC';
    this.value = {
      sender: sender,
      hash_lock: hashLock
    };
  }
  getSignBytes(): object {
    return this;
  }
}

export interface queryHTLCResult {
  sender: string;
  to: string;
  receiver_on_other_chain: string;
  amount: Coin[];
  secret: string;
  timestamp: number;
  expire_height: number;
  state: string;
}

export interface CreateHTLCResult {
  hash: string;
  tags?: Tag[];
  height?: number;
  secret?: string;
  hashLock?: string;
}