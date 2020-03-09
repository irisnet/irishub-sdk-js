import { Coin, Msg } from './types';

/**
 * Msg for sending coins
 *
 * @hidden
 */
export class MsgSend implements Msg {
  type: string;
  value: {
    inputs: Input[];
    outputs: Output[];
  };

  constructor(inputs: Input[], outputs: Output[]) {
    this.type = 'irishub/bank/Send';
    this.value = {
      inputs,
      outputs,
    };
  }

  getSignBytes(): object {
    return this.value;
  }
}

/**
 * Msg for burning coins
 *
 * @hidden
 */
export class MsgBurn implements Msg {
  type: string;
  value: {
    owner: string;
    coins: Coin[];
  };

  constructor(owner: string, coins: Coin[]) {
    this.type = 'irishub/bank/Burn';
    this.value = {
      owner,
      coins,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg for setting memo regexp for an address
 *
 * @hidden
 */
export class MsgSetMemoRegexp implements Msg {
  type: string;
  value: { owner: string; memo_regexp: string };
  constructor(owner: string, memoRegexp: string) {
    this.type = 'irishub/bank/SetMemoRegexp';
    this.value = {
      owner,
      memo_regexp: memoRegexp,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/** Base input and output struct */
export interface InputOutput {
  /** Bech32 account address */
  address: string;
  coins: Coin[];
}

/** Input implemention of [[InputOutput]] */
export interface Input extends InputOutput {}

/** Output implemention of [[InputOutput]] */
export interface Output extends InputOutput {}

/** Token statistics */
export interface TokenStats {
  /** Non bonded tokens */
  loose_tokens: Coin[];
  /** Bonded tokens */
  bonded_tokens: Coin[];
  /** Burned tokens */
  burned_tokens: Coin[];
  /** Total supply */
  total_supply: Coin[];
}

export interface EventDataMsgSend {
  height: string;
  hash: string;
  from: string;
  to: string;
  amount: Coin[];
}
