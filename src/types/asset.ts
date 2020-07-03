import { Coin } from './types';

export interface Token {
  symbol: string;
  name: string;
  decimal: number;
  min_unit_alias: string;
  initial_supply: string;
  max_supply: string;
  mintable: boolean;
  owner: string;
}

export interface fToken {
  base_token: {
    id: string;
    family: string;
    source: string;
    gateway: string;
    symbol: string;
    name: string;
    decimal: number;
    canonical_symbol: string;
    min_unit_alias: string;
    initial_supply: string;
    max_supply: string;
    mintable: boolean;
    owner: string;
  }
}

export interface TokenFees {
  exist: boolean;
  issue_fee: Coin;
  mint_fee: Coin;
}
