import { Coin, Msg } from './types';
/**
 * Proposal Types
 * @hidden
 */
export declare enum ProposalType {
    Parameter = 1,
    SoftwareUpgrade = 2,
    SystemHalt = 3,
    CommunityTaxUsage = 4,
    PlainText = 5,
    TokenAddition = 6
}
/**
 * Types for community tax usage
 */
export declare enum CommunityTaxUsageType {
    Burn = 1,
    Distribute = 2,
    Grant = 3
}
/**
 * Vote options
 */
export declare enum VoteOption {
    Empty = 0,
    Yes = 1,
    Abstain = 2,
    No = 3,
    NoWithVeto = 4
}
/**
 * Basic proposal result properties
 */
export interface BasicProposalResult {
    proposal_id: string;
    title: string;
    description: string;
    proposal_type: string;
    proposal_status: string;
    tally_result: TallyResult;
    submit_time: string;
    deposit_end_time: string;
    total_deposit: Coin[];
    voting_start_time: string;
    voting_end_time: string;
    proposer: string;
}
/** Voting statistics of a proposal */
export interface TallyResult {
    yes: string;
    abstain: string;
    no: string;
    no_with_veto: string;
    system_voting_power: string;
}
/** Integrated proposal result properties */
export interface ProposalResult {
    /** Basic properties */
    BasicProposal: BasicProposalResult;
    /** Software upgrade properties */
    ProtocolDefinition: {
        version: string;
        software: string;
        height: string;
        threshold: string;
    };
    /** Parameter change properties */
    Params: {
        key: string;
        value: string;
    };
    /** Community tax usage properties */
    TaxUsage: {
        usage: string;
        dest_address: string;
        percent: string;
    };
    /** Token addition properties */
    f_token: {
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
        };
    };
}
/** Params for querying proposals */
export interface QueryProposalsParams {
    /** Bech32 voter address */
    voter?: string;
    /** Bech32 depositor address */
    depositor?: string;
    /** Proposal status: passed / rejected */
    proposalStatus?: string;
    /** Limit to the latest [number] of proposals. Default to all proposals */
    limit?: number;
}
/** Voting result */
export interface VoteResult {
    /** Bech32 voter address */
    voter: string;
    /** Proposal ID */
    proposal_id: string;
    /** Vote option */
    option: string;
}
/** Parameter to change */
export interface ChangeParameter {
    /** Subspace of the parameter, e.g. `mint` is the subspace of `mint/Inflation` */
    subspace: string;
    /** Key of the parameter, e.g. `Inflation` is the key of `mint/Inflation` */
    key: string;
    /** New value of the parameter */
    value: string;
}
/**
 * Base params for submitting a proposal
 * @hidden
 */
export interface BaseProposal {
    proposal_type?: string;
    title: string;
    description: string;
    proposer: string;
    initial_deposit: Coin[];
    params?: ChangeParameter[] | null;
}
/**
 * Params for submitting a ParameterChangeProposal
 * @hidden
 */
export interface ParameterChangeProposal extends BaseProposal {
}
/**
 * Msg struct for submitting a ParameterChangeProposal
 * @hidden
 */
export declare class MsgSubmitParameterChangeProposal extends Msg {
    value: ParameterChangeProposal;
    constructor(params: ParameterChangeProposal);
    getSignBytes(): object;
    marshal(): Msg;
}
/**
 * Params for submitting a PlainTextProposal
 * @hidden
 */
export interface PlainTextProposal extends BaseProposal {
}
/**
 * Msg struct for submitting a PlainTextProposal
 * @hidden
 */
export declare class MsgSubmitPlainTextProposal extends Msg {
    value: PlainTextProposal;
    constructor(params: PlainTextProposal);
    getSignBytes(): object;
    marshal(): Msg;
}
/**
 * Params for submitting a CommunityTaxUsageProposal
 * @hidden
 */
export interface CommunityTaxUsageProposal extends BaseProposal {
    usage: string;
    dest_address: string;
    percent: string;
}
/**
 * Msg struct for submitting a CommunityTaxUsageProposal
 * @hidden
 */
export declare class MsgSubmitCommunityTaxUsageProposal extends Msg {
    value: CommunityTaxUsageProposal;
    constructor(params: CommunityTaxUsageProposal);
    getSignBytes(): object;
    marshal(): Msg;
}
/**
 * Msg struct for depositing to an active proposal in `depositing` period
 * @hidden
 */
export declare class MsgDeposit extends Msg {
    value: {
        proposal_id: string;
        depositor: string;
        amount: Coin[];
    };
    constructor(proposalID: string, depositor: string, amount: Coin[]);
    getSignBytes(): object;
}
/**
 * Msg struct for voting to an active proposal in `voting` period
 * @hidden
 */
export declare class MsgVote extends Msg {
    value: {
        proposal_id: string;
        voter: string;
        option: string;
    };
    constructor(proposalID: string, voter: string, option: VoteOption);
    getSignBytes(): object;
    marshal(): Msg;
}
