import { Pubkey } from './types';
export interface QueryValidatorResult {
    block_height: string;
    validators: QueryValidatorInnerResult[];
}
export interface QueryValidatorInnerResult {
    bech32_address: string;
    bech32_pubkey: string;
    address: string;
    pub_key: Pubkey;
    voting_power: string;
    proposer_priority: string;
}
