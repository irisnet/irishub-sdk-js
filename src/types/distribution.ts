import { Coin } from './types';

export interface Rewards {
  total: Coin[];
  delegations: DelegationRewards[];
  commission: Coin[];
}

export interface DelegationRewards {
  validator: string;
  reward: Coin[];
}
