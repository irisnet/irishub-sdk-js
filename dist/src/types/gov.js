import { Msg, TxType } from './types';
import { TxModelCreator } from '../helper';
import * as pbs from "./proto";
import { SdkError } from '../errors';
/**
 * Msg for Submit Proposal
 *
 * @hidden
 */
export class MsgSubmitProposal extends Msg {
    constructor(msg) {
        super(TxType.MsgSubmitProposal);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.gov_tx_pb.MsgSubmitProposal;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        let contentMsg;
        switch (this.value.content.type) {
            case ProposalType.Text_Proposal:
                contentMsg = new pbs.gov_gov_pb.TextProposal();
                contentMsg.setTitle(this.value.content.value.title);
                contentMsg.setDescription(this.value.content.value.description);
                break;
            case ProposalType.Community_Pool_Spend_Proposal:
                contentMsg = new pbs.distribution_distribution_pb.CommunityPoolSpendProposal();
                contentMsg.setTitle(this.value.content.value.title);
                contentMsg.setDescription(this.value.content.value.description);
                contentMsg.setRecipient(this.value.content.value.recipient);
                this.value.content.value.amount.forEach((item) => {
                    contentMsg.addAmount(TxModelCreator.createCoinModel(item.denom, item.amount));
                });
                break;
            case ProposalType.Parameter_Change_Proposal:
                contentMsg = new pbs.params_params_pb.ParameterChangeProposal();
                contentMsg.setTitle(this.value.content.value.title);
                contentMsg.setDescription(this.value.content.value.description);
                this.value.content.value.changes.forEach((item) => {
                    let paramChangeMsg = new pbs.params_params_pb.ParamChange();
                    paramChangeMsg.setSubspace(item.subspace);
                    paramChangeMsg.setKey(item.key);
                    paramChangeMsg.setValue(item.value);
                    contentMsg.addChanges(paramChangeMsg);
                });
                break;
            case ProposalType.Software_Upgrade_Proposal:
                let planMSg = new pbs.upgrade_upgrade_pb.Plan();
                planMSg.setName(this.value.content.value.plan.name);
                if (this.value.content.value.plan.time) {
                    let timestampMsg = new pbs.google_protobuf_timestamp_pb.Timestamp();
                    timestampMsg.setSeconds(parseInt(String(this.value.content.value.plan.time.seconds)));
                    timestampMsg.setNanos(parseInt(String(this.value.content.value.plan.time.nanos)));
                    planMSg.setTime(timestampMsg);
                }
                if (this.value.content.value.plan.height) {
                    planMSg.setHeight(this.value.content.value.plan.height);
                }
                if (this.value.content.value.plan.info) {
                    planMSg.setInfo(this.value.content.value.plan.info);
                }
                // if (this.value.content.value.plan.upgraded_client_state) {
                //   planMSg.setUpgradedClientState(...);
                // }
                contentMsg = new pbs.upgrade_upgrade_pb.SoftwareUpgradeProposal();
                contentMsg.setTitle(this.value.content.value.title);
                contentMsg.setDescription(this.value.content.value.description);
                contentMsg.setPlan(planMSg);
                break;
            case ProposalType.Cancel_Software_Upgrade_Proposal:
                contentMsg = new pbs.upgrade_upgrade_pb.CancelSoftwareUpgradeProposal();
                contentMsg.setTitle(this.value.content.value.title);
                contentMsg.setDescription(this.value.content.value.description);
                break;
        }
        if (!contentMsg) {
            throw new SdkError("Proposal type not supported");
        }
        msg.setContent(TxModelCreator.createAnyModel(this.value.content.type, contentMsg.serializeBinary()));
        this.value.initial_deposit.forEach((item) => {
            msg.addInitialDeposit(TxModelCreator.createCoinModel(item.denom, item.amount));
        });
        msg.setProposer(this.value.proposer);
        return msg;
    }
    validate() {
        if (!this.value.content) {
            throw new SdkError("content is empty");
        }
        if (!(this.value.initial_deposit && this.value.initial_deposit.length)) {
            throw new SdkError("initial_deposit is empty");
        }
        if (!this.value.proposer) {
            throw new SdkError("proposer is empty");
        }
    }
}
/**
 * Msg for Vote
 *
 * @hidden
 */
export class MsgVote extends Msg {
    constructor(msg) {
        super(TxType.MsgVote);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.gov_tx_pb.MsgVote;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setProposalId(this.value.proposal_id);
        msg.setVoter(this.value.voter);
        msg.setOption(this.value.option);
        return msg;
    }
    validate() {
        if (!this.value.proposal_id) {
            throw new SdkError("proposal_id is empty");
        }
        if (!this.value.voter) {
            throw new SdkError("proposer is empty");
        }
        if (typeof this.value.option == 'undefined') {
            throw new SdkError("proposer is empty");
        }
    }
}
/**
 * Msg for Deposit
 *
 * @hidden
 */
export class MsgDeposit extends Msg {
    constructor(msg) {
        super(TxType.MsgDeposit);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.gov_tx_pb.MsgDeposit;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setProposalId(this.value.proposal_id);
        msg.setDepositor(this.value.depositor);
        this.value.amount.forEach((item) => {
            msg.addAmount(TxModelCreator.createCoinModel(item.denom, item.amount));
        });
        return msg;
    }
    validate() {
        if (!this.value.proposal_id) {
            throw new SdkError("proposal_id is empty");
        }
        if (!this.value.depositor) {
            throw new SdkError("depositor is empty");
        }
        if (!(this.value.amount && this.value.amount.length)) {
            throw new SdkError("amount is empty");
        }
    }
}
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 */
export var ProposalType;
(function (ProposalType) {
    ProposalType["Text_Proposal"] = "cosmos.gov.v1beta1.TextProposal";
    ProposalType["Community_Pool_Spend_Proposal"] = "cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
    ProposalType["Parameter_Change_Proposal"] = "cosmos.params.v1beta1.ParameterChangeProposal";
    ProposalType["Software_Upgrade_Proposal"] = "cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
    ProposalType["Cancel_Software_Upgrade_Proposal"] = "cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
    // Client_Update_Proposal = 'ibc.core.client.v1.ClientUpdateProposal'
})(ProposalType || (ProposalType = {}));
/**
 * Vote options
 */
export var VoteOption;
(function (VoteOption) {
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
})(VoteOption || (VoteOption = {}));
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 */
export var ProposalStatus;
(function (ProposalStatus) {
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
})(ProposalStatus || (ProposalStatus = {}));
/************************** ClientState **************************/
export var HashOp;
(function (HashOp) {
    // NO_HASH is the default if no data passed. Note this is an illegal argument some places.
    HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
    HashOp[HashOp["SHA256"] = 1] = "SHA256";
    HashOp[HashOp["SHA512"] = 2] = "SHA512";
    HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
    HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
    HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN"; // ripemd160(sha256(x))
})(HashOp || (HashOp = {}));
/**
LengthOp defines how to process the key and value of the LeafOp
to include length information. After encoding the length with the given
algorithm, the length will be prepended to the key and value bytes.
(Each one with it's own encoded length)
*/
export var LengthOp;
(function (LengthOp) {
    // NO_PREFIX don't include any length info
    LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
    // VAR_PROTO uses protobuf (and go-amino) varint encoding of the length
    LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
    // VAR_RLP uses rlp int encoding of the length
    LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
    // FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer
    LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
    // FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer
    LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
    // FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer
    LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
    // FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer
    LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
    // REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output)
    LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
    // REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output)
    LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
})(LengthOp || (LengthOp = {}));
//# sourceMappingURL=gov.js.map