import { Client } from '../client';
import * as types from '../types';
import { ModelCreator } from '../helper';
import { SdkError, CODES } from '../errors';

/**
 * This module provides governance functionalities
 *
 * [More Details](https://www.irisnet.org/docs/features/governance.html)
 *
 * @category Modules
 * @since v0.17
 */
export class Gov {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * submit Proposal
   * @param proposal_id 
   * @param option
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  async submitProposal(
    content: {
      type: types.ProposalType,
      value: types.TextProposal | types.CommunityPoolSpendProposal | types.ParameterChangeProposal | types.CancelSoftwareUpgradeProposal | types.SoftwareUpgradeProposal
    },
    initial_deposit:types.Coin[],
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgSubmitProposal,
        value:{
          content: content,
          initial_deposit: initial_deposit,
          proposer: from
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * vote
   * @param proposal_id 
   * @param option
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  async vote(
    proposal_id: number,
    option: types.VoteOption,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgVote,
        value:{
          proposal_id: proposal_id,
          voter: from,
          option: option,
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * deposit
   * @param proposal_id 
   * @param amount
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  async deposit(
    proposal_id: number,
    amount: types.Coin[],
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const from = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgDeposit,
        value:{
          proposal_id: proposal_id,
          depositor: from,
          amount: amount,
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Proposal queries proposal details based on ProposalID.
   * @param proposal_id defines the unique id of the proposal.
   */
  queryProposal(proposal_id:number): Promise<object> {
    if (!proposal_id) {
      throw new SdkError("proposal_id can ont be empty");
    }
    const request = new types.gov_query_pb.QueryProposalRequest();
    request.setProposalId(proposal_id);
    return this.client.rpcClient.protoQuery(
      '/cosmos.gov.v1beta1.Query/Proposal',
      request,
      types.gov_query_pb.QueryProposalResponse
    ).then((res)=>{
      if (
        res && 
        res.proposal && 
        res.proposal.content && 
        res.proposal.content.typeUrl && 
        res.proposal.content.value
        ) {
        res.proposal.content = this.client.protobuf.unpackProposalContent(res.proposal.content);
      }
      return res;
    });
  }

  /**
   * Proposals queries all proposals based on given status.
   * @param option {
      proposal_status?:types.ProposalStatus,
      voter?:string,
      depositor?:string
    }
   */
  queryProposals(
    option:{
      proposal_status?:types.ProposalStatus,
      voter?:string,
      depositor?:string
    },
    pagination?:types.Pagination
    ): Promise<object> {
    const request = new types.gov_query_pb.QueryProposalsRequest();
    request.setPagination(ModelCreator.createPaginationModel(pagination));
    if (typeof option.proposal_status != 'undefined') {
      request.setProposalStatus(option.proposal_status);
    }
    if (option.voter) {
      request.setVoter(option.voter);
    }
    if (option.depositor) {
      request.setDepositor(option.depositor);
    }

    return this.client.rpcClient.protoQuery(
      '/cosmos.gov.v1beta1.Query/Proposals',
      request,
      types.gov_query_pb.QueryProposalsResponse
    ).then((res)=>{
      if (res && res.proposalsList) {
        res.proposalsList = res.proposalsList.map((item:any)=>{
          if (item.content && item.content.typeUrl && item.content.value) {
            item.content = this.client.protobuf.unpackProposalContent(item.content);
          }
          return item;
        });
      }
      return res;
    });
  }

  /**
   * Vote queries voted information based on proposalID, voterAddr.
   * @param proposal_id defines the unique id of the proposal.
   * @param voter defines the oter address for the proposals.
   */
  queryVote(proposal_id:number,voter:string): Promise<object> {
    if (!proposal_id) {
      throw new SdkError("proposal_id can ont be empty");
    }
    if (!voter) {
      throw new SdkError("voter can ont be empty");
    }
    const request = new types.gov_query_pb.QueryVoteRequest();
    request.setProposalId(proposal_id);
    request.setVoter(voter);

    return this.client.rpcClient.protoQuery(
      '/cosmos.gov.v1beta1.Query/Vote',
      request,
      types.gov_query_pb.QueryVoteResponse
    );
  }

  /**
   * Votes queries votes of a given proposal.
   * @param proposal_id defines the unique id of the proposal.
   */
  queryVotes(
    proposal_id:number,
    pagination?:types.Pagination
    ): Promise<object> {
    if (!proposal_id) {
      throw new SdkError("proposal_id can ont be empty");
    }
    const request = new types.gov_query_pb.QueryVotesRequest();
    request.setProposalId(proposal_id);
    request.setPagination(ModelCreator.createPaginationModel(pagination));
    return this.client.rpcClient.protoQuery(
      '/cosmos.gov.v1beta1.Query/Votes',
      request,
      types.gov_query_pb.QueryVotesResponse
    );
  }

  /**
   * Params queries all parameters of the gov module.
   * @param params_type defines which parameters to query for, can be one of "voting", "tallying" or "deposit".
   */
  queryParams(params_type:string): Promise<object> {
    if (!params_type) {
      throw new SdkError("params_type can be one of 'voting', 'tallying' or 'deposit'");
    }
    const request = new types.gov_query_pb.QueryParamsRequest();
    request.setParamsType(params_type);

    return this.client.rpcClient.protoQuery(
      '/cosmos.gov.v1beta1.Query/Params',
      request,
      types.gov_query_pb.QueryParamsResponse
    );
  }

  /**
   * Deposit queries single deposit information based proposalID, depositAddr.
   * @param proposal_id defines the unique id of the proposal.
   * @param depositor defines the deposit addresses from the proposals.
   */
  queryDeposit(proposal_id:number, depositor:string): Promise<object> {
    if (!proposal_id) {
      throw new SdkError("proposal_id can ont be empty");
    }
    if (!depositor) {
      throw new SdkError("depositor can ont be empty");
    }
    const request = new types.gov_query_pb.QueryDepositRequest();
    request.setProposalId(proposal_id);
    request.setDepositor(depositor);

    return this.client.rpcClient.protoQuery(
      '/cosmos.gov.v1beta1.Query/Deposit',
      request,
      types.gov_query_pb.QueryDepositResponse
    );
  }

  /**
   * Deposits queries all deposits of a single proposal.
   * @param proposal_id defines the unique id of the proposal.
   */
  queryDeposits(
    proposal_id:number,
    pagination?:types.Pagination
    ): Promise<object> {
    if (!proposal_id) {
      throw new SdkError("proposal_id can ont be empty");
    }
    const request = new types.gov_query_pb.QueryDepositsRequest();
    request.setProposalId(proposal_id);
    request.setPagination(ModelCreator.createPaginationModel(pagination));

    return this.client.rpcClient.protoQuery(
      '/cosmos.gov.v1beta1.Query/Deposits',
      request,
      types.gov_query_pb.QueryDepositsResponse
    );
  }

  /**
   * TallyResult queries the tally of a proposal vote.
   * @param proposal_id defines the unique id of the proposal.
   */
  queryTallyResult(proposal_id:number): Promise<object> {
    if (!proposal_id) {
      throw new SdkError("proposal_id can ont be empty");
    }
    const request = new types.gov_query_pb.QueryTallyResultRequest();
    request.setProposalId(proposal_id);

    return this.client.rpcClient.protoQuery(
      '/cosmos.gov.v1beta1.Query/TallyResult',
      request,
      types.gov_query_pb.QueryTallyResultResponse
    );
  }
}
