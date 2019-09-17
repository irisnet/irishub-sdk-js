/** @module gov */
import {isEmpty} from "../../utils"
import {AbstractModule} from "../module"
import {Method} from "../../constants"

export default class Gov extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Gov}
     */
    constructor(provider, opt) {
        super(provider, opt)
    }

    /**
     * Query proposals information with parameters
     *
     * @param voter {string} - voter's address
     * @param depositor {string} - depositor's address
     * @param status {string} - proposal's status,valid values can be "DepositPeriod", "VotingPeriod", "Passed", "Rejected"
     * @param limit {number} - limit to latest [number] proposals. Defaults to all proposals
     * @return {Promise}
     */
    getProposals(voter, depositor, status, limit) {
        return super.__get(Method.GetProposals, voter, depositor, status, limit);
    }

    /**
     * Query a proposal by proposalId
     *
     * @param proposalId {number} - proposal's id
     * @return {Promise}
     */
    getProposal(proposalId) {
        if (isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        return super.__get(Method.GetProposal, proposalId);
    }

    /**
     * Query deposits by proposalId
     *
     * @param proposalId {number} - proposal's id
     * @return {Promise}
     */
    getDeposits(proposalId) {
        if (isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        return super.__get(Method.GetDeposits, proposalId);
    }

    /**
     * Query deposit by proposalId and depositor address
     *
     * @param proposalId {number} - proposal's id
     * @param depositor {string} - depositor's address
     * @return {Promise}
     */
    getDeposit(proposalId, depositor) {
        if (isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        if (isEmpty(depositor)) {
            throw new Error("depositor is empty");
        }
        return super.__get(Method.GetDeposit, proposalId, depositor);
    }

    /**
     * Query voters information by proposalId
     *
     * @param proposalId {number} - proposal's id
     * @return {Promise}
     */
    getVotes(proposalId) {
        if (isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        return super.__get(Method.GetVotes, proposalId);
    }

    /**
     * Query vote information by proposalId and voter address
     *
     * @param proposalId {number} - proposal's id
     * @param voter {string} - voter's address
     * @return {Promise}
     */
    getVote(proposalId, voter) {
        if (isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        if (isEmpty(voter)) {
            throw new Error("voter is empty");
        }
        return super.__get(Method.GetVote, proposalId, voter);
    }

    /**
     * Query governance parameters
     *
     * @param module {string} - module's symbol,valid values can be "gov","stake","bank","auth"
     * @return {Promise}
     */
    getParams(module) {
        if (isEmpty(module)) {
            throw new Error("module is empty");
        }
        return super.__get(Method.GetParams, module);
    }
}
