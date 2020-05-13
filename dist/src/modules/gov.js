"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gov = void 0;
const gov_1 = require("../types/gov");
/**
 * This module provides governance functionalities
 *
 * [More Details](https://www.irisnet.org/docs/features/governance.html)
 *
 * @category Modules
 * @since v0.17
 */
class Gov {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Query details of a single proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */
    queryProposal(proposalID) {
        return this.client.rpcClient.abciQuery('custom/gov/proposal', {
            ProposalID: String(proposalID),
        });
    }
    /**
     * Query proposals by conditions
     * @param params
     * @returns
     * @since v0.17
     */
    queryProposals(params) {
        let queryParams = {};
        if (params) {
            queryParams = {
                Voter: params.voter,
                Depositor: params.depositor,
                ProposalStatus: params.proposalStatus,
                Limit: String(params.limit),
            };
        }
        return this.client.rpcClient.abciQuery('custom/gov/proposals', queryParams);
    }
    /**
     * Query a vote
     * @param proposalID Identity of a proposal
     * @param voter Bech32 voter address
     * @returns
     * @since v0.17
     */
    queryVote(proposalID, voter) {
        return this.client.rpcClient.abciQuery('custom/gov/vote', {
            ProposalID: String(proposalID),
            Voter: voter,
        });
    }
    /**
     * Query all votes of a proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */
    queryVotes(proposalID) {
        return this.client.rpcClient.abciQuery('custom/gov/votes', {
            ProposalID: String(proposalID),
        });
    }
    /**
     * Query a deposit of a proposal
     * @param proposalID Identity of a proposal
     * @param depositor Bech32 depositor address
     * @returns
     * @since v0.17
     */
    queryDeposit(proposalID, depositor) {
        return this.client.rpcClient.abciQuery('custom/gov/deposit', {
            ProposalID: String(proposalID),
            Depositor: depositor,
        });
    }
    /**
     * Query all deposits of a proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */
    queryDeposits(proposalID) {
        return this.client.rpcClient.abciQuery('custom/gov/deposits', {
            ProposalID: String(proposalID),
        });
    }
    /**
     * Query the statistics of a proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */
    queryTally(proposalID) {
        return this.client.rpcClient.abciQuery('custom/gov/tally', {
            ProposalID: String(proposalID),
        });
    }
    /**
     * Submit a ParameterChangeProposal along with an initial deposit
     *
     * The proposer must deposit at least 30% of the [MinDeposit](https://www.irisnet.org/docs/features/governance.html#proposal-level) to submit a proposal.
     *
     * [Read about which parameters can be changed online](https://www.irisnet.org/docs/concepts/gov-params.html)
     *
     * @param title Title of the proposal
     * @param description Description of the proposal
     * @param initialDeposit Initial deposit of the proposal(at least 30% of minDeposit)
     * @param params On-chain Parameter to be changed, eg. `[{"subspace":"mint","key":"Inflation","value":"0.05"}]`
     * @param baseTx
     * @returns
     * @since v0.17
     */
    submitParameterChangeProposal(title, description, initialDeposit, params, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const proposer = this.client.keys.show(baseTx.from);
            const coins = yield this.client.utils.toMinCoins(initialDeposit);
            const msgs = [
                new gov_1.MsgSubmitParameterChangeProposal({
                    title,
                    description,
                    proposer,
                    initial_deposit: coins,
                    params,
                }),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Submit a PlainTextProposal along with an initial deposit
     *
     * The proposer must deposit at least 30% of the [MinDeposit](https://www.irisnet.org/docs/features/governance.html#proposal-level) to submit a proposal.
     *
     * @param title Title of the proposal
     * @param description Description of the proposal
     * @param initialDeposit Initial deposit of the proposal(at least 30% of minDeposit)
     * @param baseTx
     * @returns
     * @since v0.17
     */
    submitPlainTextProposal(title, description, initialDeposit, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const proposer = this.client.keys.show(baseTx.from);
            const coins = yield this.client.utils.toMinCoins(initialDeposit);
            const msgs = [
                new gov_1.MsgSubmitPlainTextProposal({
                    title,
                    description,
                    proposer,
                    initial_deposit: coins,
                }),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Submit a CommunityTaxUsageProposal along with an initial deposit
     *
     * There are three usages, Burn, Distribute and Grant. Burn means burning tokens from community funds.
     * Distribute and Grant will transfer tokens to the destination trustee's account from community funds.
     *
     * The proposer must deposit at least 30% of the [MinDeposit](https://www.irisnet.org/docs/features/governance.html#proposal-level) to submit a proposal.
     *
     * @param title Title of the proposal
     * @param description Description of the proposal
     * @param initialDeposit Initial deposit of the proposal(at least 30% of minDeposit)
     * @param usage Type of the CommunityTaxUsage
     * @param dest_address Bech32 destination address to receive the distributed or granted funds
     * @param percent Percentage of the current community pool to be used
     * @param baseTx
     * @since v0.17
     */
    submitCommunityTaxUsageProposal(title, description, initialDeposit, usage, destAddress, percent, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const proposer = this.client.keys.show(baseTx.from);
            const coins = yield this.client.utils.toMinCoins(initialDeposit);
            const msgs = [
                new gov_1.MsgSubmitCommunityTaxUsageProposal({
                    title,
                    description,
                    proposer,
                    initial_deposit: coins,
                    usage: gov_1.CommunityTaxUsageType[usage],
                    dest_address: destAddress,
                    percent: String(percent),
                }),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Deposit tokens for an active proposal.
     *
     * When the total deposit amount exceeds the [MinDeposit](https://www.irisnet.org/docs/features/governance.html#proposal-level), the proposal will enter the voting procedure.
     *
     * @param proposalID Identity of a proposal
     * @param amount Amount to be deposited
     * @param baseTx
     * @returns
     * @since v0.17
     */
    deposit(proposalID, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const depositor = this.client.keys.show(baseTx.from);
            const coins = yield this.client.utils.toMinCoins(amount);
            const msgs = [
                new gov_1.MsgDeposit(String(proposalID), depositor, coins),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Vote for an active proposal, options: Yes/No/NoWithVeto/Abstain.
     * Only validators and delegators can vote for proposals in the voting period.
     *
     * @param proposalID Identity of a proposal
     * @param option Vote option
     * @param baseTx
     * @since v0.17
     */
    vote(proposalID, option, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const voter = this.client.keys.show(baseTx.from);
            const msgs = [new gov_1.MsgVote(String(proposalID), voter, option)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
}
exports.Gov = Gov;
//# sourceMappingURL=gov.js.map