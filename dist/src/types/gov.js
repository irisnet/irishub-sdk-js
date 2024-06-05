"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoteOption = exports.ProposalType = exports.ProposalStatus = exports.MsgVoteWeighted = exports.MsgVote = exports.MsgSubmitProposal = exports.MsgDeposit = exports.LengthOp = exports.HashOp = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _types = require("./types");
var _helper = require("../helper");
var pbs = _interopRequireWildcard(require("./proto"));
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * param struct for Submit Proposal tx
 */
/**
 * Msg for Submit Proposal
 *
 * @hidden
 */
var MsgSubmitProposal = exports.MsgSubmitProposal = /*#__PURE__*/function (_Msg) {
  function MsgSubmitProposal(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgSubmitProposal);
    _this = _callSuper(this, MsgSubmitProposal, [_types.TxType.MsgSubmitProposal]);
    _this.value = msg;
    return _this;
  }
  (0, _inherits2["default"])(MsgSubmitProposal, _Msg);
  return (0, _createClass2["default"])(MsgSubmitProposal, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      var contentMsg;
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
          this.value.content.value.amount.forEach(function (item) {
            contentMsg.addAmount(_helper.TxModelCreator.createCoinModel(item.denom, item.amount));
          });
          break;
        case ProposalType.Parameter_Change_Proposal:
          contentMsg = new pbs.params_params_pb.ParameterChangeProposal();
          contentMsg.setTitle(this.value.content.value.title);
          contentMsg.setDescription(this.value.content.value.description);
          this.value.content.value.changes.forEach(function (item) {
            var paramChangeMsg = new pbs.params_params_pb.ParamChange();
            paramChangeMsg.setSubspace(item.subspace);
            paramChangeMsg.setKey(item.key);
            paramChangeMsg.setValue(item.value);
            contentMsg.addChanges(paramChangeMsg);
          });
          break;
        case ProposalType.Software_Upgrade_Proposal:
          var planMSg = new pbs.upgrade_upgrade_pb.Plan();
          planMSg.setName(this.value.content.value.plan.name);
          if (this.value.content.value.plan.time) {
            var timestampMsg = new pbs.google_protobuf_timestamp_pb.Timestamp();
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
        throw new _errors.SdkError("Proposal type not supported");
      }
      msg.setContent(_helper.TxModelCreator.createAnyModel(this.value.content.type, contentMsg.serializeBinary()));
      this.value.initial_deposit.forEach(function (item) {
        msg.addInitialDeposit(_helper.TxModelCreator.createCoinModel(item.denom, item.amount));
      });
      msg.setProposer(this.value.proposer);
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.content) {
        throw new _errors.SdkError("content is empty");
      }
      if (!(this.value.initial_deposit && this.value.initial_deposit.length)) {
        throw new _errors.SdkError("initial_deposit is empty");
      }
      if (!this.value.proposer) {
        throw new _errors.SdkError("proposer is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.gov_tx_pb.MsgSubmitProposal;
    }
  }]);
}(_types.Msg);
/**
 * param struct for Vote tx
 */
/**
 * Msg for Vote
 */
var MsgVote = exports.MsgVote = /*#__PURE__*/function (_Msg2) {
  function MsgVote(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgVote);
    _this2 = _callSuper(this, MsgVote, [_types.TxType.MsgVote]);
    _this2.value = msg;
    return _this2;
  }
  (0, _inherits2["default"])(MsgVote, _Msg2);
  return (0, _createClass2["default"])(MsgVote, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setProposalId(this.value.proposal_id);
      msg.setVoter(this.value.voter);
      msg.setOption(this.value.option);
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.proposal_id) {
        throw new _errors.SdkError("proposal_id is empty");
      }
      if (!this.value.voter) {
        throw new _errors.SdkError("proposer is empty");
      }
      if (typeof this.value.option == 'undefined') {
        throw new _errors.SdkError("option is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.gov_tx_pb.MsgVote;
    }
  }]);
}(_types.Msg);
/**
 * param struct for VoteWeighted tx
 */
/**
 * Msg for MsgVoteWeighted
 */
var MsgVoteWeighted = exports.MsgVoteWeighted = /*#__PURE__*/function (_Msg3) {
  function MsgVoteWeighted(msg) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgVoteWeighted);
    _this3 = _callSuper(this, MsgVoteWeighted, [_types.TxType.MsgVoteWeighted]);
    _this3.value = msg;
    return _this3;
  }
  (0, _inherits2["default"])(MsgVoteWeighted, _Msg3);
  return (0, _createClass2["default"])(MsgVoteWeighted, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setProposalId(this.value.proposal_id);
      msg.setVoter(this.value.voter);
      this.value.options.forEach(function (option) {
        var weightedVoteOption = new pbs.gov_gov_pb.WeightedVoteOption();
        weightedVoteOption.setOption(option.option);
        weightedVoteOption.setWeight(option.weight);
        msg.addOptions(weightedVoteOption);
      });
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.proposal_id) {
        throw new _errors.SdkError("proposal_id is empty");
      }
      if (!this.value.voter) {
        throw new _errors.SdkError("proposer is empty");
      }
      if (!this.value.options || !this.value.options.length) {
        throw new _errors.SdkError("options is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.gov_tx_pb.MsgVoteWeighted;
    }
  }]);
}(_types.Msg);
/**
 * param struct for Deposit tx
 */
/**
 * Msg for Deposit
 *
 * @hidden
 */
var MsgDeposit = exports.MsgDeposit = /*#__PURE__*/function (_Msg4) {
  function MsgDeposit(msg) {
    var _this4;
    (0, _classCallCheck2["default"])(this, MsgDeposit);
    _this4 = _callSuper(this, MsgDeposit, [_types.TxType.MsgDeposit]);
    _this4.value = msg;
    return _this4;
  }
  (0, _inherits2["default"])(MsgDeposit, _Msg4);
  return (0, _createClass2["default"])(MsgDeposit, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setProposalId(this.value.proposal_id);
      msg.setDepositor(this.value.depositor);
      this.value.amount.forEach(function (item) {
        msg.addAmount(_helper.TxModelCreator.createCoinModel(item.denom, item.amount));
      });
      return msg;
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.value.proposal_id) {
        throw new _errors.SdkError("proposal_id is empty");
      }
      if (!this.value.depositor) {
        throw new _errors.SdkError("depositor is empty");
      }
      if (!(this.value.amount && this.value.amount.length)) {
        throw new _errors.SdkError("amount is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.gov_tx_pb.MsgDeposit;
    }
  }]);
}(_types.Msg);
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 */
var ProposalType = exports.ProposalType = /*#__PURE__*/function (ProposalType) {
  ProposalType["Text_Proposal"] = "cosmos.gov.v1beta1.TextProposal";
  ProposalType["Community_Pool_Spend_Proposal"] = "cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
  ProposalType["Parameter_Change_Proposal"] = "cosmos.params.v1beta1.ParameterChangeProposal";
  ProposalType["Software_Upgrade_Proposal"] = "cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
  ProposalType["Cancel_Software_Upgrade_Proposal"] = "cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
  return ProposalType;
}({}); // Client_Update_Proposal = 'ibc.core.client.v1.ClientUpdateProposal'
/**
 * param struct for Text Proposal 
 */
/**
 * param struct for Community Pool Spend Proposal 
 */
/**
 * param struct for Param Change
 */
/**
 * param struct for Parameter Change Proposal 
 */
/**
 * param struct for Cancel Software Upgrade Proposal
 */
/**
 * param struct for Plan specifies information about a planned upgrade and when it should occur.
 */
/**
 * param struct for Software Upgrade Proposal
 */
/**
 * Vote options
 */
var VoteOption = exports.VoteOption = /*#__PURE__*/function (VoteOption) {
  VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
  return VoteOption;
}({});
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 */
var ProposalStatus = exports.ProposalStatus = /*#__PURE__*/function (ProposalStatus) {
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
  return ProposalStatus;
}({});
/************************** ClientState **************************/
var HashOp = exports.HashOp = /*#__PURE__*/function (HashOp) {
  HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
  HashOp[HashOp["SHA256"] = 1] = "SHA256";
  HashOp[HashOp["SHA512"] = 2] = "SHA512";
  HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
  HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
  HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
  return HashOp;
}({});
/**
LengthOp defines how to process the key and value of the LeafOp
to include length information. After encoding the length with the given
algorithm, the length will be prepended to the key and value bytes.
(Each one with it's own encoded length)
*/
var LengthOp = exports.LengthOp = /*#__PURE__*/function (LengthOp) {
  LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
  LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
  LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
  LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
  LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
  LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
  LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
  LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
  LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
  return LengthOp;
}({});
/*
InnerSpec contains all store-specific structure info to determine if two proofs from a
given store are neighbors.

This enables:

  isLeftMost(spec: InnerSpec, op: InnerOp)
  isRightMost(spec: InnerSpec, op: InnerOp)
  isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
*/
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
/**
 * ClientState from Tendermint tracks the current validator set, latest height, and a possible frozen height.
 */