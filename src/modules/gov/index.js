const Utils = require("../../utils");
const AbstractModule = require("../module");

class Gov extends AbstractModule{
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Gov}
     */
    constructor(provider,opt) {
        super(provider,opt)
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
    getProposals(voter,depositor,status,limit){
        return super.__get("getProposals",voter,depositor,status,limit);
    }

    /**
     * Query a proposal by proposalId
     *
     * @param proposalId {number} - proposal's id
     * @return {Promise}
     */
    getProposal(proposalId){
        if (Utils.isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        return super.__get("getProposal",proposalId);
    }

    /**
     * Query deposits by proposalId
     *
     * @param proposalId {number} - proposal's id
     * @return {Promise}
     */
    getDeposits(proposalId){
        if (Utils.isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        return super.__get("getDeposits",proposalId);
    }

    /**
     * Query deposit by proposalId and depositor address
     *
     * @param proposalId {number} - proposal's id
     * @param depositor {string} - depositor's address
     * @return {Promise}
     */
    getDeposit(proposalId,depositor){
        if (Utils.isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        if (Utils.isEmpty(depositor)) {
            throw new Error("depositor is empty");
        }
        return super.__get("getDeposit",proposalId,depositor);
    }

    /**
     * Query voters information by proposalId
     *
     * @param proposalId {number} - proposal's id
     * @return {Promise}
     */
    getVotes(proposalId){
        if (Utils.isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        return super.__get("getVotes",proposalId);
    }

    /**
     * Query vote information by proposalId and voter address
     *
     * @param proposalId {number} - proposal's id
     * @param voter {string} - voter's address
     * @return {Promise}
     */
    getVote(proposalId,voter){
        if (Utils.isEmpty(proposalId)) {
            throw new Error("proposalId is empty");
        }
        if (Utils.isEmpty(voter)) {
            throw new Error("voter is empty");
        }
        return super.__get("getVote",proposalId,voter);
    }

    /**
     * Query governance parameters
     *
     * @param module {string} - module's symbol,valid values can be "gov","stake","bank","auth"
     * @return {Promise}
     */
    getParams(module){
        if (Utils.isEmpty(module)) {
            throw new Error("module is empty");
        }
        return super.__get("getParams",module);
    }
}

module.exports = Gov;