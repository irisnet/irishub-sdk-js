"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgVote = exports.MsgDeposit = exports.MsgSubmitCommunityTaxUsageProposal = exports.MsgSubmitPlainTextProposal = exports.MsgSubmitParameterChangeProposal = exports.VoteOption = exports.CommunityTaxUsageType = exports.ProposalType = void 0;
const types_1 = require("./types");
/**
 * Proposal Types
 * @hidden
 */
var ProposalType;
(function (ProposalType) {
    ProposalType[ProposalType["Parameter"] = 1] = "Parameter";
    ProposalType[ProposalType["SoftwareUpgrade"] = 2] = "SoftwareUpgrade";
    ProposalType[ProposalType["SystemHalt"] = 3] = "SystemHalt";
    ProposalType[ProposalType["CommunityTaxUsage"] = 4] = "CommunityTaxUsage";
    ProposalType[ProposalType["PlainText"] = 5] = "PlainText";
    ProposalType[ProposalType["TokenAddition"] = 6] = "TokenAddition";
})(ProposalType = exports.ProposalType || (exports.ProposalType = {}));
/**
 * Types for community tax usage
 */
var CommunityTaxUsageType;
(function (CommunityTaxUsageType) {
    CommunityTaxUsageType[CommunityTaxUsageType["Burn"] = 1] = "Burn";
    CommunityTaxUsageType[CommunityTaxUsageType["Distribute"] = 2] = "Distribute";
    CommunityTaxUsageType[CommunityTaxUsageType["Grant"] = 3] = "Grant";
})(CommunityTaxUsageType = exports.CommunityTaxUsageType || (exports.CommunityTaxUsageType = {}));
/**
 * Vote options
 */
var VoteOption;
(function (VoteOption) {
    VoteOption[VoteOption["Empty"] = 0] = "Empty";
    VoteOption[VoteOption["Yes"] = 1] = "Yes";
    VoteOption[VoteOption["Abstain"] = 2] = "Abstain";
    VoteOption[VoteOption["No"] = 3] = "No";
    VoteOption[VoteOption["NoWithVeto"] = 4] = "NoWithVeto";
})(VoteOption = exports.VoteOption || (exports.VoteOption = {}));
/**
 * Msg struct for submitting a ParameterChangeProposal
 * @hidden
 */
class MsgSubmitParameterChangeProposal extends types_1.Msg {
    constructor(params) {
        super('irishub/gov/MsgSubmitProposal');
        params.proposal_type = ProposalType[ProposalType.Parameter];
        this.value = params;
    }
    getSignBytes() {
        return this.value;
    }
    marshal() {
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
exports.MsgSubmitParameterChangeProposal = MsgSubmitParameterChangeProposal;
/**
 * Msg struct for submitting a PlainTextProposal
 * @hidden
 */
class MsgSubmitPlainTextProposal extends types_1.Msg {
    constructor(params) {
        super('irishub/gov/MsgSubmitProposal');
        params.proposal_type = ProposalType[ProposalType.PlainText];
        params.params = null; // TODO: Historical issue: Proposals except `ParameterChange` must specify the `params` to be null
        this.value = params;
    }
    getSignBytes() {
        return this.value;
    }
    marshal() {
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
exports.MsgSubmitPlainTextProposal = MsgSubmitPlainTextProposal;
/**
 * Msg struct for submitting a CommunityTaxUsageProposal
 * @hidden
 */
class MsgSubmitCommunityTaxUsageProposal extends types_1.Msg {
    constructor(params) {
        super('irishub/gov/MsgSubmitCommunityTaxUsageProposal');
        params.proposal_type = ProposalType[ProposalType.CommunityTaxUsage];
        params.params = null; // TODO: Historical issue: Proposals except `ParameterChange` must specify the `params` to be null
        this.value = params;
    }
    getSignBytes() {
        return this.value;
    }
    marshal() {
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
exports.MsgSubmitCommunityTaxUsageProposal = MsgSubmitCommunityTaxUsageProposal;
/**
 * Msg struct for depositing to an active proposal in `depositing` period
 * @hidden
 */
class MsgDeposit extends types_1.Msg {
    constructor(proposalID, depositor, amount) {
        super('irishub/gov/MsgDeposit');
        this.value = {
            proposal_id: proposalID,
            depositor,
            amount,
        };
    }
    getSignBytes() {
        return this.value;
    }
}
exports.MsgDeposit = MsgDeposit;
/**
 * Msg struct for voting to an active proposal in `voting` period
 * @hidden
 */
class MsgVote extends types_1.Msg {
    constructor(proposalID, voter, option) {
        super('irishub/gov/MsgVote');
        this.value = {
            proposal_id: proposalID,
            voter,
            option: VoteOption[option],
        };
    }
    getSignBytes() {
        return this.value;
    }
    marshal() {
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
exports.MsgVote = MsgVote;
//# sourceMappingURL=gov.js.map