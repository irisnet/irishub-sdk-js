import { Coin, Msg } from './types';

export enum ProposalType {
  Parameter = 0x01,
  SoftwareUpgrade = 0x02,
  SystemHalt = 0x03,
  CommunityTaxUsage = 0x04,
  PlainText = 0x05,
  TokenAddition = 0x06,
}

export enum CommunityTaxUsageType {
  Burn = 0x01,
  Distribute = 0x02,
  Grant = 0x03,
}

export enum VoteOption {
  Empty = 0x00,
  Yes = 0x01,
  Abstain = 0x02,
  No = 0x03,
  NoWithVeto = 0x04,
}

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

export interface TallyResult {
  yes: string;
  abstain: string;
  no: string;
  no_with_veto: string;
  system_voting_power: string;
}

export interface ProposalResult {
  BasicProposal: BasicProposalResult;
  ProtocolDefinition: {
    version: string;
    software: string;
    height: string;
    threshold: string;
  };
  Params: {
    key: string;
    value: string;
  };
  TaxUsage: {
    usage: string;
    dest_address: string;
    percent: string;
  };
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

export interface QueryProposalsParams {
  voter?: string;
  depositor?: string;
  proposalStatus?: string;
  limit?: number;
}

export interface VoteResult {
  voter: string;
  proposal_id: string;
  option: string;
}

export interface ChangeParameter {
  subspace: string;
  key: string;
  value: string;
}

export interface BaseProposal {
  proposal_type?: string;
  title: string;
  description: string;
  proposer: string;
  initial_deposit: Coin[];
  params?: ChangeParameter[] | null;
}

// ------------------- ParameterChangeProposal -------------------------
export interface ParameterChangeProposal extends BaseProposal {}

export class MsgSubmitParameterChangeProposal implements Msg {
  type: string;
  value: ParameterChangeProposal;

  constructor(params: ParameterChangeProposal) {
    this.type = 'irishub/gov/MsgSubmitProposal';
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
    };
  }
}

// ------------------- PlainTextProposal -------------------------
export interface PlainTextProposal extends BaseProposal {}

export class MsgSubmitPlainTextProposal implements Msg {
  type: string;
  value: PlainTextProposal;

  constructor(params: PlainTextProposal) {
    this.type = 'irishub/gov/MsgSubmitProposal';
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
    };
  }
}

// ------------------- CommunityTaxUsageProposal -------------------------
export interface CommunityTaxUsageProposal extends BaseProposal {
  usage: string;
  dest_address: string;
  percent: string;
}

export class MsgSubmitCommunityTaxUsageProposal implements Msg {
  type: string;
  value: CommunityTaxUsageProposal;

  constructor(params: CommunityTaxUsageProposal) {
    this.type = 'irishub/gov/MsgSubmitCommunityTaxUsageProposal';
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
    };
  }
}

export class MsgDeposit implements Msg {
  type: string;
  value: {
    proposal_id: string;
    depositor: string;
    amount: Coin[];
  };

  constructor(proposalID: string, depositor: string, amount: Coin[]) {
    this.type = 'irishub/gov/MsgDeposit';
    this.value = {
      proposal_id: proposalID,
      depositor: depositor,
      amount: amount,
    };
  }

  getSignBytes(): object {
    return this.value;
  }
}

export class MsgVote implements Msg {
  type: string;
  value: {
    proposal_id: string;
    voter: string;
    option: string;
  };

  constructor(proposalID: string, voter: string, option: VoteOption) {
    this.type = 'irishub/gov/MsgVote';
    this.value = {
      proposal_id: proposalID,
      voter: voter,
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
        option: VoteOption[this.value.option],
      },
    };
  }
}
