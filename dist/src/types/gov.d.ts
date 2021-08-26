import { Coin, Msg } from './types';
/**
 * param struct for Submit Proposal tx
 */
export interface SubmitProposalTxParam {
    content: {
        type: string;
        value: any;
    };
    initial_deposit: Coin[];
    proposer: string;
}
/**
 * Msg for Submit Proposal
 *
 * @hidden
 */
export declare class MsgSubmitProposal extends Msg {
    value: SubmitProposalTxParam;
    constructor(msg: SubmitProposalTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for Vote tx
 */
export interface VoteTxParam {
    proposal_id: number;
    voter: string;
    option: VoteOption;
}
/**
 * Msg for Vote
 *
 * @hidden
 */
export declare class MsgVote extends Msg {
    value: VoteTxParam;
    constructor(msg: VoteTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for Deposit tx
 */
export interface DepositTxParam {
    proposal_id: number;
    depositor: string;
    amount: Coin[];
}
/**
 * Msg for Deposit
 *
 * @hidden
 */
export declare class MsgDeposit extends Msg {
    value: DepositTxParam;
    constructor(msg: DepositTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 */
export declare enum ProposalType {
    Text_Proposal = "cosmos.gov.v1beta1.TextProposal",
    Community_Pool_Spend_Proposal = "cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    Parameter_Change_Proposal = "cosmos.params.v1beta1.ParameterChangeProposal",
    Software_Upgrade_Proposal = "cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
    Cancel_Software_Upgrade_Proposal = "cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal"
}
/**
 * param struct for Text Proposal
 */
export interface TextProposal {
    title: string;
    description: string;
}
/**
 * param struct for Community Pool Spend Proposal
 */
export interface CommunityPoolSpendProposal extends TextProposal {
    recipient: string;
    amount: Coin[];
}
/**
 * param struct for Param Change
 */
export interface ParamChange {
    subspace: string;
    key: string;
    value: string;
}
/**
 * param struct for Parameter Change Proposal
 */
export interface ParameterChangeProposal extends TextProposal {
    changes: ParamChange[];
}
/**
 * param struct for Cancel Software Upgrade Proposal
 */
export interface CancelSoftwareUpgradeProposal extends TextProposal {
}
/**
 * param struct for Plan specifies information about a planned upgrade and when it should occur.
 */
export interface SoftwareUpgradePlan {
    name: string;
    time?: timestamp;
    height?: number;
    info?: string;
}
/**
 * param struct for Software Upgrade Proposal
 */
export interface SoftwareUpgradeProposal extends TextProposal {
    plan: SoftwareUpgradePlan;
}
/**
 * Vote options
 */
export declare enum VoteOption {
    VOTE_OPTION_UNSPECIFIED = 0,
    VOTE_OPTION_YES = 1,
    VOTE_OPTION_ABSTAIN = 2,
    VOTE_OPTION_NO = 3,
    VOTE_OPTION_NO_WITH_VETO = 4
}
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 */
export declare enum ProposalStatus {
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
    PROPOSAL_STATUS_VOTING_PERIOD = 2,
    PROPOSAL_STATUS_PASSED = 3,
    PROPOSAL_STATUS_REJECTED = 4,
    PROPOSAL_STATUS_FAILED = 5
}
export interface timestamp {
    seconds: number;
    nanos: number;
}
/************************** ClientState **************************/
export declare enum HashOp {
    NO_HASH = 0,
    SHA256 = 1,
    SHA512 = 2,
    KECCAK = 3,
    RIPEMD160 = 4,
    BITCOIN = 5
}
/**
LengthOp defines how to process the key and value of the LeafOp
to include length information. After encoding the length with the given
algorithm, the length will be prepended to the key and value bytes.
(Each one with it's own encoded length)
*/
export declare enum LengthOp {
    NO_PREFIX = 0,
    VAR_PROTO = 1,
    VAR_RLP = 2,
    FIXED32_BIG = 3,
    FIXED32_LITTLE = 4,
    FIXED64_BIG = 5,
    FIXED64_LITTLE = 6,
    REQUIRE_32_BYTES = 7,
    REQUIRE_64_BYTES = 8
}
export interface InnerSpec {
    child_order: number[];
    child_size: number;
    min_prefix_length: number;
    max_prefix_length: number;
    empty_child: Uint8Array;
    hash: HashOp;
}
/**
LeafOp represents the raw key-value data we wish to prove, and
must be flexible to represent the internal transformation from
the original key-value pairs into the basis hash, for many existing
merkle trees.

key and value are passed in. So that the signature of this operation is:
  leafOp(key, value) -> output

To process this, first prehash the keys and values if needed (ANY means no hash in this case):
  hkey = prehashKey(key)
  hvalue = prehashValue(value)

Then combine the bytes, and hash it
  output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
*/
export interface LeafOp {
    hash: HashOp;
    prehash_key: HashOp;
    prehash_value: HashOp;
    length: LengthOp;
    prefix: Uint8Array;
}
/**
ProofSpec defines what the expected parameters are for a given proof type.
This can be stored in the client and used to validate any incoming proofs.

  verify(ProofSpec, Proof) -> Proof | Error

As demonstrated in tests, if we don't fix the algorithm used to calculate the
LeafHash for a given tree, there are many possible key-value pairs that can
generate a given hash (by interpretting the preimage differently).
We need this for proper security, requires client knows a priori what
tree format server uses. But not in code, rather a configuration object.
*/
export interface ProofSpec {
    leaf_spec: LeafOp;
    inner_spec: InnerSpec;
    max_depth: number;
    min_depth: number;
}
/**
 * ClientState from Tendermint tracks the current validator set, latest height, and a possible frozen height.
 */
export interface SoftwareUpgradeProposal {
    chain_id: string;
    trust_level: {
        numerator: number;
        denominator: number;
    };
    trusting_period: timestamp;
    unbonding_period: timestamp;
    max_clock_drift: timestamp;
    frozen_height: {
        revision_number: number;
        revision_height: number;
    };
    latest_height: {
        revision_number: number;
        revision_height: number;
    };
    proof_specs: ProofSpec[];
    upgrade_path: string[];
    allow_update_after_expiry: boolean;
    allow_update_after_misbehaviour: boolean;
}
