import { Coin, Msg } from './types';

export interface RandomInfo {
  request_tx_hash: string;
  request_id: string;
  height: number;
  value: string;
}

export interface RandomRequest {
  height: number; // the height of the block in which the request tx is included
  consumer: string; // the request address
  txhash: string; // the request tx hash
  oracle: boolean; // oracle method
  service_fee_cap: Coin[]; // service fee cap
}

/**
 * Msg struct for requesting a random number
 * @hidden
 */
export class MsgRequestRand extends Msg {
  value: {
    consumer: string;
    'block-interval': number;
  };

  constructor(consumer: string, blockInterval: number) {
    super('irishub/slashing/MsgUnjail');
    this.value = {
      consumer,
      'block-interval': blockInterval,
    };
  }

  getSignBytes(): object {
    return this;
  }
}
