import { Coin, Msg } from './types';

/**
 * Proposal Types
 * @hidden
 */
export enum ProposalType {
  Parameter = 0x01,
  SoftwareUpgrade = 0x02,
  SystemHalt = 0x03,
  CommunityTaxUsage = 0x04,
  PlainText = 0x05,
  TokenAddition = 0x06,
}

/**
 * Types for community tax usage
 */
export enum CommunityTaxUsageType {
  Burn = 0x01,
  Distribute = 0x02,
  Grant = 0x03,
}

/**
 * Vote options
 */
export enum VoteOption {
  Empty = 0x00,
  Yes = 0x01,
  Abstain = 0x02,
  No = 0x03,
  NoWithVeto = 0x04,
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

// ------------------- ParameterChangeProposal -------------------------

/** 
 * Params for submitting a ParameterChangeProposal
 * @hidden
 */
export interface ParameterChangeProposal extends BaseProposal {}

/**
 * Msg struct for submitting a ParameterChangeProposal
 * @hidden
 */
export class MsgSubmitParameterChangeProposal extends Msg {
  value: ParameterChangeProposal;

  constructor(params: ParameterChangeProposal) {
    super('irishub/gov/MsgSubmitProposal');
    params.proposal_type = ProposalType[ProposalType.Parameter];
    this.value = params;
  }

  getSignBytes(): object {
    return this.value;
  }

  marshal(): Msg {
    return {
      type: this.type,
      value: {
        proposal_type: ProposalType.Parameter,
        title: this.value.title,
        description: this.value.description,
        proposer: this.value.proposer,
        initial_deposit: this.value.initial_deposit,
        params: this.value.params,
      },
    } as Msg;
  }
}

// ------------------- PlainTextProposal -------------------------

/** 
 * Params for submitting a PlainTextProposal
 * @hidden
 */
export interface PlainTextProposal extends BaseProposal {}

/**
 * Msg struct for submitting a PlainTextProposal
 * @hidden
 */
export class MsgSubmitPlainTextProposal extends Msg {
  value: PlainTextProposal;

  constructor(params: PlainTextProposal) {
    super('irishub/gov/MsgSubmitProposal');
    params.proposal_type = ProposalType[ProposalType.PlainText];
    params.params = null; // TODO: Historical issue: Proposals except `ParameterChange` must specify the `params` to be null
    this.value = params;
  }

  getSignBytes(): object {
    return this.value;
  }

  marshal(): Msg {
    return {
      type: this.type,
      value: {
        proposal_type: ProposalType.PlainText,
        title: this.value.title,
        description: this.value.description,
        proposer: this.value.proposer,
        initial_deposit: this.value.initial_deposit,
      },
    }  as Msg;
  }
}

// ------------------- CommunityTaxUsageProposal -------------------------

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
export class MsgSubmitCommunityTaxUsageProposal extends Msg {
  value: CommunityTaxUsageProposal;

  constructor(params: CommunityTaxUsageProposal) {
    super('irishub/gov/MsgSubmitCommunityTaxUsageProposal')
    params.proposal_type = ProposalType[ProposalType.CommunityTaxUsage];
    params.params = null; // TODO: Historical issue: Proposals except `ParameterChange` must specify the `params` to be null
    this.value = params;
  }

  getSignBytes(): object {
    return this.value;
  }

  marshal(): Msg {
    return {
      type: this.type,
      value: {
        proposal_type: ProposalType.CommunityTaxUsage,
        title: this.value.title,
        description: this.value.description,
        proposer: this.value.proposer,
        initial_deposit: this.value.initial_deposit,
      },
    } as Msg;
  }
}

/**
 * Msg struct for depositing to an active proposal in `depositing` period
 * @hidden
 */
export class MsgDeposit extends Msg {
  value: {
    proposal_id: string;
    depositor: string;
    amount: Coin[];
  };

  constructor(proposalID: string, depositor: string, amount: Coin[]) {
    super('irishub/gov/MsgDeposit');
    this.value = {
      proposal_id: proposalID,
      depositor,
      amount,
    };
  }

  getSignBytes(): object {
    return this.value;
  }
}

/**
 * Msg struct for voting to an active proposal in `voting` period
 * @hidden
 */
export class MsgVote extends Msg {
  value: {
    proposal_id: string;
    voter: string;
    option: string;
  };

  constructor(proposalID: string, voter: string, option: VoteOption) {
    super('irishub/gov/MsgVote');
    this.value = {
      proposal_id: proposalID,
      voter,
      option: VoteOption[option],
    };
  }

  getSignBytes(): object {
    return this.value;
  }

  marshal(): Msg {
    return {
      type: this.type,
      value: {
        proposal_id: this.value.proposal_id,
        voter: this.value.voter,
        option: (VoteOption as any)[this.value.option],
      },
    } as Msg;
  }
}
