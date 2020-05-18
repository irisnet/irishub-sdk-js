import { Coin } from './types';

export interface Token {
  symbol: string;
  name: string;
  scale: number;
  min_unit: string;
  initial_supply: string;
  max_supply: string;
  mintable: boolean;
  owner: string;
}

export interface TokenFees {
  exist: boolean;
  issue_fee: Coin;
  mint_fee: Coin;
}
