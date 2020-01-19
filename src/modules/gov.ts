import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as is from 'is_js';
import * as types from '../types';
import * as Amino from '@irisnet/amino-js';
import * as AminoTypes from '@irisnet/amino-js/types';
import SdkError from '../errors';
import Utils from '../utils/utils';
import { MsgDelegate, MsgUndelegate, MsgRedelegate } from '../types/stake';

export class Gov {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  queryProposal(proposalID: number): Promise<types.Proposal> {
    return this.client.rpcClient.abciQuery<types.Proposal>(
      'custom/gov/proposal',
      {
        ProposalID: String(proposalID),
      }
    );
  }

  queryProposals(
    params?: types.QueryProposalsParams
  ): Promise<types.Proposal[]> {
    let queryParams = {};
    if (params) {
      queryParams = {
        Voter: params.Voter,
        Depositor: params.Depositor,
        ProposalStatus: params.ProposalStatus,
        Limit: String(params.Limit),
      };
    }
    return this.client.rpcClient.abciQuery<types.Proposal[]>(
      'custom/gov/proposals',
      queryParams
    );
  }
}
