import { Coin, Msg } from './types';

enum ProposalType {
  ParameterChange = 0x01,
  SoftwareUpgrade = 0x02,
  SystemHalt = 0x03,
  CommunityTaxUsage = 0x04,
  PlainText = 0x05,
  TokenAddition = 0x06,
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
}

export interface ParameterChangeProposal extends BaseProposal {
  params: ChangeParameter[];
}

export class MsgSubmitParameterChangeProposal implements Msg {
  type: string;
  value: ParameterChangeProposal;

  constructor(params: ParameterChangeProposal) {
    this.type = 'irishub/gov/MsgSubmitProposal';
    params.proposal_type = 'Parameter';
    this.value = params;
  }

  getSignBytes(): object {
    return this.value;
  }

  marshal(): Msg {
    return {
      type: this.type,
      value: {
        proposal_type: ProposalType.ParameterChange,
        title: this.value.title,
        description: this.value.description,
        proposer: this.value.proposer,
        initial_deposit: this.value.initial_deposit,
        params: this.value.params,
      },
    };
  }

  toJSON(): Msg {
    return {
      type: this.type,
      value: {
        proposal_type: ProposalType.ParameterChange,
        title: this.value.title,
        description: this.value.description,
        proposer: this.value.proposer,
        initial_deposit: this.value.initial_deposit,
        params: this.value.params,
      },
    };
  }
}
