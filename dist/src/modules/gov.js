import { __awaiter } from "tslib";
import * as types from '../types';
import { ModelCreator } from '../helper';
import { SdkError } from '../errors';
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
    constructor(client) {
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
    submitProposal(content, initial_deposit, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgSubmitProposal,
                    value: {
                        content: content,
                        initial_deposit: initial_deposit,
                        proposer: from
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * vote
     * @param proposal_id
     * @param option
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    vote(proposal_id, option, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgVote,
                    value: {
                        proposal_id: proposal_id,
                        voter: from,
                        option: option,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * deposit
     * @param proposal_id
     * @param amount
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    deposit(proposal_id, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgDeposit,
                    value: {
                        proposal_id: proposal_id,
                        depositor: from,
                        amount: amount,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Proposal queries proposal details based on ProposalID.
     * @param proposal_id defines the unique id of the proposal.
     */
    queryProposal(proposal_id) {
        if (!proposal_id) {
            throw new SdkError("proposal_id can ont be empty");
        }
        const request = new types.gov_query_pb.QueryProposalRequest();
        request.setProposalId(proposal_id);
        return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Proposal', request, types.gov_query_pb.QueryProposalResponse).then((res) => {
            if (res &&
                res.proposal &&
                res.proposal.content &&
                res.proposal.content.typeUrl &&
                res.proposal.content.value) {
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
    queryProposals(option, page_number = 1, page_size = 10) {
        const pagination = ModelCreator.createPaginationModel(page_number, page_size, true);
        const request = new types.gov_query_pb.QueryProposalsRequest();
        if (typeof option.proposal_status != 'undefined') {
            request.setProposalStatus(option.proposal_status);
        }
        if (option.voter) {
            request.setVoter(option.voter);
        }
        if (option.depositor) {
            request.setDepositor(option.depositor);
        }
        request.setPagination(pagination);
        return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Proposals', request, types.gov_query_pb.QueryProposalsResponse).then((res) => {
            if (res && res.proposalsList) {
                res.proposalsList = res.proposalsList.map((item) => {
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
    queryVote(proposal_id, voter) {
        if (!proposal_id) {
            throw new SdkError("proposal_id can ont be empty");
        }
        if (!voter) {
            throw new SdkError("voter can ont be empty");
        }
        const request = new types.gov_query_pb.QueryVoteRequest();
        request.setProposalId(proposal_id);
        request.setVoter(voter);
        return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Vote', request, types.gov_query_pb.QueryVoteResponse);
    }
    /**
     * Votes queries votes of a given proposal.
     * @param proposal_id defines the unique id of the proposal.
     */
    queryVotes(proposal_id, page_number = 1, page_size = 10) {
        if (!proposal_id) {
            throw new SdkError("proposal_id can ont be empty");
        }
        const pagination = ModelCreator.createPaginationModel(page_number, page_size, true);
        const request = new types.gov_query_pb.QueryVotesRequest();
        request.setProposalId(proposal_id);
        request.setPagination(pagination);
        return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Votes', request, types.gov_query_pb.QueryVotesResponse);
    }
    /**
     * Params queries all parameters of the gov module.
     * @param params_type defines which parameters to query for, can be one of "voting", "tallying" or "deposit".
     */
    queryParams(params_type) {
        if (!params_type) {
            throw new SdkError("params_type can be one of 'voting', 'tallying' or 'deposit'");
        }
        const request = new types.gov_query_pb.QueryParamsRequest();
        request.setParamsType(params_type);
        return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Params', request, types.gov_query_pb.QueryParamsResponse);
    }
    /**
     * Deposit queries single deposit information based proposalID, depositAddr.
     * @param proposal_id defines the unique id of the proposal.
     * @param depositor defines the deposit addresses from the proposals.
     */
    queryDeposit(proposal_id, depositor) {
        if (!proposal_id) {
            throw new SdkError("proposal_id can ont be empty");
        }
        if (!depositor) {
            throw new SdkError("depositor can ont be empty");
        }
        const request = new types.gov_query_pb.QueryDepositRequest();
        request.setProposalId(proposal_id);
        request.setDepositor(depositor);
        return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Deposit', request, types.gov_query_pb.QueryDepositResponse);
    }
    /**
     * Deposits queries all deposits of a single proposal.
     * @param proposal_id defines the unique id of the proposal.
     */
    queryDeposits(proposal_id, page_number = 1, page_size = 10) {
        if (!proposal_id) {
            throw new SdkError("proposal_id can ont be empty");
        }
        const pagination = ModelCreator.createPaginationModel(page_number, page_size, true);
        const request = new types.gov_query_pb.QueryDepositsRequest();
        request.setProposalId(proposal_id);
        request.setPagination(pagination);
        return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Deposits', request, types.gov_query_pb.QueryDepositsResponse);
    }
    /**
     * TallyResult queries the tally of a proposal vote.
     * @param proposal_id defines the unique id of the proposal.
     */
    queryTallyResult(proposal_id) {
        if (!proposal_id) {
            throw new SdkError("proposal_id can ont be empty");
        }
        const request = new types.gov_query_pb.QueryTallyResultRequest();
        request.setProposalId(proposal_id);
        return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/TallyResult', request, types.gov_query_pb.QueryTallyResultResponse);
    }
}
//# sourceMappingURL=gov.js.map