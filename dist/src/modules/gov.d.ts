import { Client } from '../client';
import * as types from '../types';
/**
 * This module provides governance functionalities
 *
 * [More Details](https://www.irisnet.org/docs/features/governance.html)
 *
 * @category Modules
 * @since v0.17
 */
export declare class Gov {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * submit Proposal
     * @param proposal_id
     * @param option
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    submitProposal(content: {
        type: types.ProposalType;
        value: types.TextProposal | types.CommunityPoolSpendProposal | types.ParameterChangeProposal | types.CancelSoftwareUpgradeProposal | types.SoftwareUpgradeProposal;
    }, initial_deposit: types.Coin[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * vote
     * @param proposal_id
     * @param option
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    vote(proposal_id: number, option: types.VoteOption, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * deposit
     * @param proposal_id
     * @param amount
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    deposit(proposal_id: number, amount: types.Coin[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Proposal queries proposal details based on ProposalID.
     * @param proposal_id defines the unique id of the proposal.
     */
    queryProposal(proposal_id: number): Promise<object>;
    /**
     * Proposals queries all proposals based on given status.
     * @param option {
        proposal_status?:types.ProposalStatus,
        voter?:string,
        depositor?:string
      }
     */
    queryProposals(option: {
        proposal_status?: types.ProposalStatus;
        voter?: string;
        depositor?: string;
    }, page_number?: number, page_size?: number): Promise<object>;
    /**
     * Vote queries voted information based on proposalID, voterAddr.
     * @param proposal_id defines the unique id of the proposal.
     * @param voter defines the oter address for the proposals.
     */
    queryVote(proposal_id: number, voter: string): Promise<object>;
    /**
     * Votes queries votes of a given proposal.
     * @param proposal_id defines the unique id of the proposal.
     */
    queryVotes(proposal_id: number, page_number?: number, page_size?: number): Promise<object>;
    /**
     * Params queries all parameters of the gov module.
     * @param params_type defines which parameters to query for, can be one of "voting", "tallying" or "deposit".
     */
    queryParams(params_type: string): Promise<object>;
    /**
     * Deposit queries single deposit information based proposalID, depositAddr.
     * @param proposal_id defines the unique id of the proposal.
     * @param depositor defines the deposit addresses from the proposals.
     */
    queryDeposit(proposal_id: number, depositor: string): Promise<object>;
    /**
     * Deposits queries all deposits of a single proposal.
     * @param proposal_id defines the unique id of the proposal.
     */
    queryDeposits(proposal_id: number, page_number?: number, page_size?: number): Promise<object>;
    /**
     * TallyResult queries the tally of a proposal vote.
     * @param proposal_id defines the unique id of the proposal.
     */
    queryTallyResult(proposal_id: number): Promise<object>;
}
