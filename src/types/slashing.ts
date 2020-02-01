import { Coin, Msg } from './types';

/** @TODO document */
export class MsgUnjail implements Msg {
  type: string;
  value: {
    address: string;
  };

  constructor(address: string) {
    this.type = 'irishub/slashing/MsgUnjail';
    this.value = {
      address: address,
    };
  }

  getSignBytes(): object {
    return this.value;
  }
}
