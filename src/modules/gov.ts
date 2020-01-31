import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as is from 'is_js';
import * as types from '../types';
import * as Amino from '@irisnet/amino-js';
import * as AminoTypes from '@irisnet/amino-js/types';
import SdkError from '../errors';
import Utils from '../utils/utils';
import {
  MsgSubmitParameterChangeProposal,
  MsgSubmitPlainTextProposal,
  ProposalType,
  CommunityTaxUsageType,
  MsgSubmitCommunityTaxUsageProposal,
} from '../types/gov';

export class Gov {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  queryProposal(proposalID: number): Promise<types.ProposalResult> {
    return this.client.rpcClient.abciQuery<types.ProposalResult>(
      'custom/gov/proposal',
      {
        ProposalID: String(proposalID),
      }
    );
  }

  queryProposals(
    params?: types.QueryProposalsParams
  ): Promise<types.ProposalResult[]> {
    let queryParams = {};
    if (params) {
      queryParams = {
        Voter: params.voter,
        Depositor: params.depositor,
        ProposalStatus: params.proposalStatus,
        Limit: String(params.limit),
      };
    }
    return this.client.rpcClient.abciQuery<types.ProposalResult[]>(
      'custom/gov/proposals',
      queryParams
    );
  }

  queryVote(proposalID: number, voter: string): Promise<types.VoteResult> {
    return this.client.rpcClient.abciQuery<types.VoteResult>(
      'custom/gov/vote',
      {
        ProposalID: String(proposalID),
        Voter: voter,
      }
    );
  }

  queryVotes(proposalID: number): Promise<types.VoteResult[]> {
    return this.client.rpcClient.abciQuery<types.VoteResult[]>(
      'custom/gov/votes',
      {
        ProposalID: String(proposalID),
      }
    );
  }

  queryDeposit(
    proposalID: number,
    depositor: string
  ): Promise<types.VoteResult> {
    return this.client.rpcClient.abciQuery<types.VoteResult>(
      'custom/gov/deposit',
      {
        ProposalID: String(proposalID),
        Depositor: depositor,
      }
    );
  }

  queryDeposits(proposalID: number): Promise<types.VoteResult> {
    return this.client.rpcClient.abciQuery<types.VoteResult>(
      'custom/gov/deposits',
      {
        ProposalID: String(proposalID),
      }
    );
  }

  queryTally(proposalID: number): Promise<types.TallyResult> {
    return this.client.rpcClient.abciQuery<types.TallyResult>(
      'custom/gov/tally',
      {
        ProposalID: String(proposalID),
      }
    );
  }

  async submitParameterChangeProposal(
    title: string,
    description: string,
    initialDeposit: types.Coin[],
    params: types.ChangeParameter[],
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const proposer = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgSubmitParameterChangeProposal({
        title: title,
        description: description,
        proposer: proposer,
        initial_deposit: initialDeposit,
        params: params,
      }),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  async submitPlainTextProposal(
    title: string,
    description: string,
    initialDeposit: types.Coin[],
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const proposer = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgSubmitPlainTextProposal({
        title: title,
        description: description,
        proposer: proposer,
        initial_deposit: initialDeposit,
      }),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  async submitCommunityTaxUsageProposal(
    title: string,
    description: string,
    initialDeposit: types.Coin[],
    usage: CommunityTaxUsageType,
    dest_address: string,
    percent: number,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const proposer = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgSubmitCommunityTaxUsageProposal({
        title: title,
        description: description,
        proposer: proposer,
        initial_deposit: initialDeposit,
        usage: CommunityTaxUsageType[usage],
        dest_address: dest_address,
        percent: String(percent),
      }),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
