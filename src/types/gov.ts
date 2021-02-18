import { Coin, Msg, TxType } from './types';
import { TxModelCreator } from '../helper';
import * as pbs from "./proto";
import { SdkError, CODES } from '../errors';

/**
 * param struct for Submit Proposal tx
 */
export interface SubmitProposalTxParam {
  content:{ type:string, value:any};
  initial_deposit:Coin[];
  proposer: string
}

/**
 * Msg for Submit Proposal
 *
 * @hidden
 */
export class MsgSubmitProposal extends Msg {
  value: SubmitProposalTxParam;

  constructor(msg:SubmitProposalTxParam) {
    super(TxType.MsgSubmitProposal);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.gov_tx_pb.MsgSubmitProposal;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    let contentMsg:any;
    switch (this.value.content.type){
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
        this.value.content.value.amount.forEach((item:Coin)=>{
          contentMsg.addAmount(TxModelCreator.createCoinModel(item.denom, item.amount));
        });
      break;
      case ProposalType.Parameter_Change_Proposal:
        contentMsg = new pbs.params_params_pb.ParameterChangeProposal();
        contentMsg.setTitle(this.value.content.value.title);
        contentMsg.setDescription(this.value.content.value.description);
        this.value.content.value.changes.forEach((item:ParamChange)=>{
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
        

    this.value.initial_deposit.forEach((item)=>{
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
 * param struct for Vote tx
 */
export interface VoteTxParam {
  proposal_id:number;
  voter:string;
  option: VoteOption
}

/**
 * Msg for Vote
 *
 * @hidden
 */
export class MsgVote extends Msg {
  value: VoteTxParam;

  constructor(msg:VoteTxParam) {
    super(TxType.MsgVote);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.gov_tx_pb.MsgVote;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
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
 * param struct for Deposit tx
 */
export interface DepositTxParam {
  proposal_id:number;
  depositor:string;
  amount: Coin[]
}

/**
 * Msg for Deposit
 *
 * @hidden
 */
export class MsgDeposit extends Msg {
  value: DepositTxParam;

  constructor(msg:DepositTxParam) {
    super(TxType.MsgDeposit);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.gov_tx_pb.MsgDeposit;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setProposalId(this.value.proposal_id);
    msg.setDepositor(this.value.depositor);
    this.value.amount.forEach((item)=>{
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
export enum ProposalType {
  Text_Proposal = 'cosmos.gov.v1beta1.TextProposal',
  Community_Pool_Spend_Proposal = 'cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
  Parameter_Change_Proposal = 'cosmos.params.v1beta1.ParameterChangeProposal',
  Software_Upgrade_Proposal = 'cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
  Cancel_Software_Upgrade_Proposal = 'cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal',
  // Client_Update_Proposal = 'ibc.core.client.v1.ClientUpdateProposal'
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
export interface CancelSoftwareUpgradeProposal extends TextProposal{
  
}

/**
 * param struct for Plan specifies information about a planned upgrade and when it should occur.
 */
export interface SoftwareUpgradePlan {
  name: string;
  time?: timestamp;
  height?:number;
  info?:string;
  // upgraded_client_state:any;   //not implement
}

/**
 * param struct for Software Upgrade Proposal
 */
export interface SoftwareUpgradeProposal extends TextProposal{
  plan:SoftwareUpgradePlan;
}

/**
 * Vote options
 */
export enum VoteOption {
  VOTE_OPTION_UNSPECIFIED = 0,
  VOTE_OPTION_YES = 1,
  VOTE_OPTION_ABSTAIN = 2,
  VOTE_OPTION_NO = 3,
  VOTE_OPTION_NO_WITH_VETO = 4
}

/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 */
export enum ProposalStatus {
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  PROPOSAL_STATUS_PASSED = 3,
  PROPOSAL_STATUS_REJECTED = 4,
  PROPOSAL_STATUS_FAILED = 5,
}

export interface timestamp {
  seconds:number;
  nanos:number;
}


/************************** ClientState **************************/
export enum HashOp {
    // NO_HASH is the default if no data passed. Note this is an illegal argument some places.
    NO_HASH = 0,
    SHA256 = 1,
    SHA512 = 2,
    KECCAK = 3,
    RIPEMD160 = 4,
    BITCOIN = 5  // ripemd160(sha256(x))
}

/**
LengthOp defines how to process the key and value of the LeafOp
to include length information. After encoding the length with the given
algorithm, the length will be prepended to the key and value bytes.
(Each one with it's own encoded length)
*/
export enum LengthOp {
    // NO_PREFIX don't include any length info
    NO_PREFIX = 0, 
    // VAR_PROTO uses protobuf (and go-amino) varint encoding of the length
    VAR_PROTO = 1, 
    // VAR_RLP uses rlp int encoding of the length
    VAR_RLP = 2, 
    // FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer
    FIXED32_BIG = 3, 
    // FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer
    FIXED32_LITTLE = 4, 
    // FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer
    FIXED64_BIG = 5,
    // FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer
    FIXED64_LITTLE = 6,
    // REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output)
    REQUIRE_32_BYTES = 7,
    // REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output)
    REQUIRE_64_BYTES = 8
}

/*
InnerSpec contains all store-specific structure info to determine if two proofs from a
given store are neighbors.

This enables:

  isLeftMost(spec: InnerSpec, op: InnerOp)
  isRightMost(spec: InnerSpec, op: InnerOp)
  isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
*/
export interface InnerSpec {
    // Child order is the ordering of the children node, must count from 0
    // iavl tree is [0, 1] (left then right)
    // merk is [0, 2, 1] (left, right, here)
    child_order:number[];
    child_size:number;
    min_prefix_length:number;
    max_prefix_length:number;
    // empty child is the prehash image that is used when one child is nil (eg. 20 bytes of 0)
    empty_child:Uint8Array;
    // hash is the algorithm that must be used for each InnerOp
    hash:HashOp;
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
    hash:HashOp;
    prehash_key:HashOp;
    prehash_value:HashOp;
    length:LengthOp;
    // prefix is a fixed bytes that may optionally be included at the beginning to differentiate
    // a leaf node from an inner node.
    prefix:Uint8Array;
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
export interface ProofSpec{
  // any field in the ExistenceProof must be the same as in this spec.
  // except Prefix, which is just the first bytes of prefix (spec can be longer) 
  leaf_spec:LeafOp;
  inner_spec:InnerSpec;
  // max_depth (if > 0) is the maximum number of InnerOps allowed (mainly for fixed-depth tries)
  max_depth:number;
  // min_depth (if > 0) is the minimum number of InnerOps allowed (mainly for fixed-depth tries)
  min_depth:number;
}

/**
 * ClientState from Tendermint tracks the current validator set, latest height, and a possible frozen height.
 */
export interface SoftwareUpgradeProposal {
  chain_id:string;
  trust_level:{
    numerator:number,
    denominator:number
  },
  trusting_period:timestamp;
  unbonding_period:timestamp;
  max_clock_drift:timestamp;
  frozen_height:{
    revision_number:number,
    revision_height:number
  };
  latest_height:{
    revision_number:number,
    revision_height:number
  };
  proof_specs:ProofSpec[];
  upgrade_path:string[];
  allow_update_after_expiry:boolean;
  allow_update_after_misbehaviour:boolean;
}





