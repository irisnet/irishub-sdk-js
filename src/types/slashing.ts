import { Coin, Msg } from './types';

export interface SlashingParams {
  max_evidence_age:           string;
  signed_blocks_window:       string;
  min_signed_per_window:      string;
  double_sign_jail_duration:  string;
  downtime_jail_duration:     string;
  censorship_jail_duration:   string;
  slash_fraction_double_sign: string;
  slash_fraction_downtime:    string;
  slash_fraction_censorship:  string;
}

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
