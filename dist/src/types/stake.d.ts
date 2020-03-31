import { Coin, Msg } from './types';
export interface Validator {
    operator_address: string;
    consensus_pubkey: string;
    jailed: boolean;
    status: number;
    tokens: string;
    delegator_shares: string;
    description: ValidatorDescription;
    bond_height: string;
    unbonding_height: string;
    unbonding_time: string;
    commission: Commission;
}
export interface Commission {
    rate: string;
    max_rate: string;
    max_change_rate: string;
    update_time: string;
}
export interface ValidatorDescription {
    moniker: string;
    identity: string;
    website: string;
    details: string;
}
export interface StakePool {
    loose_tokens: string;
    bonded_tokens: string;
}
export interface StakeParams {
    unbonding_time: string;
    max_validators: number;
}
export interface Delegation {
    delegator_addr: string;
    validator_addr: string;
    shares: string;
    height: string;
}
export interface UnbondingDelegation {
    tx_hash: string;
    delegator_addr: string;
    validator_addr: string;
    creation_height: string;
    min_time: string;
    initial_balance: Coin;
    balance: Coin;
}
export interface Redelegation {
    delegator_addr: string;
    validator_src_addr: string;
    validator_dst_addr: string;
    creation_height: string;
    min_time: string;
    initial_balance: Coin;
    balance: Coin;
    shares_src: string;
    shares_dst: string;
}
export declare class MsgDelegate implements Msg {
    type: string;
    value: {
        delegator_addr: string;
        validator_addr: string;
        delegation: Coin;
    };
    constructor(delegatorAddr: string, validatorAddr: string, delegation: Coin);
    getSignBytes(): object;
}
export declare class MsgUndelegate implements Msg {
    type: string;
    value: {
        delegator_addr: string;
        validator_addr: string;
        shares_amount: string;
    };
    constructor(delegatorAddr: string, validatorAddr: string, sharesAmount: string);
    getSignBytes(): object;
}
export declare class MsgRedelegate implements Msg {
    type: string;
    value: {
        delegator_addr: string;
        validator_src_addr: string;
        validator_dst_addr: string;
        shares_amount: string;
    };
    constructor(delegatorAddr: string, validatorSrcAddr: string, validatorDstAddr: string, sharesAmount: string);
    getSignBytes(): object;
}
