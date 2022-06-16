"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LengthOp = exports.HashOp = exports.ProposalStatus = exports.VoteOption = exports.ProposalType = exports.MsgDeposit = exports.MsgVote = exports.MsgSubmitProposal = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = require("./types");

var _helper = require("../helper");

var pbs = _interopRequireWildcard(require("./proto"));

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Msg for Submit Proposal
 *
 * @hidden
 */
var MsgSubmitProposal = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgSubmitProposal, _Msg);

  var _super = _createSuper(MsgSubmitProposal);

  function MsgSubmitProposal(msg) {
    var _this;

    (0, _classCallCheck2["default"])(this, MsgSubmitProposal);
    _this = _super.call(this, _types.TxType.MsgSubmitProposal);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = msg;
    return _this;
  }

  (0, _createClass2["default"])(MsgSubmitProposal, [{
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
          } // if (this.value.content.value.plan.upgraded_client_state) {
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
  return MsgSubmitProposal;
}(_types.Msg);
/**
 * param struct for Vote tx
 */


exports.MsgSubmitProposal = MsgSubmitProposal;

/**
 * Msg for Vote
 *
 * @hidden
 */
var MsgVote = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgVote, _Msg2);

  var _super2 = _createSuper(MsgVote);

  function MsgVote(msg) {
    var _this2;

    (0, _classCallCheck2["default"])(this, MsgVote);
    _this2 = _super2.call(this, _types.TxType.MsgVote);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    _this2.value = msg;
    return _this2;
  }

  (0, _createClass2["default"])(MsgVote, [{
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
        throw new _errors.SdkError("proposer is empty");
      }
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.gov_tx_pb.MsgVote;
    }
  }]);
  return MsgVote;
}(_types.Msg);
/**
 * param struct for Deposit tx
 */


exports.MsgVote = MsgVote;

/**
 * Msg for Deposit
 *
 * @hidden
 */
var MsgDeposit = /*#__PURE__*/function (_Msg3) {
  (0, _inherits2["default"])(MsgDeposit, _Msg3);

  var _super3 = _createSuper(MsgDeposit);

  function MsgDeposit(msg) {
    var _this3;

    (0, _classCallCheck2["default"])(this, MsgDeposit);
    _this3 = _super3.call(this, _types.TxType.MsgDeposit);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "value", void 0);
    _this3.value = msg;
    return _this3;
  }

  (0, _createClass2["default"])(MsgDeposit, [{
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
  return MsgDeposit;
}(_types.Msg);
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 */


exports.MsgDeposit = MsgDeposit;
var ProposalType;
exports.ProposalType = ProposalType;

(function (ProposalType) {
  ProposalType["Text_Proposal"] = "cosmos.gov.v1beta1.TextProposal";
  ProposalType["Community_Pool_Spend_Proposal"] = "cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
  ProposalType["Parameter_Change_Proposal"] = "cosmos.params.v1beta1.ParameterChangeProposal";
  ProposalType["Software_Upgrade_Proposal"] = "cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
  ProposalType["Cancel_Software_Upgrade_Proposal"] = "cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
})(ProposalType || (exports.ProposalType = ProposalType = {}));

/**
 * Vote options
 */
var VoteOption;
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 */

exports.VoteOption = VoteOption;

(function (VoteOption) {
  VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
  VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
  VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
  VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
  VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
})(VoteOption || (exports.VoteOption = VoteOption = {}));

var ProposalStatus;
exports.ProposalStatus = ProposalStatus;

(function (ProposalStatus) {
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
  ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
})(ProposalStatus || (exports.ProposalStatus = ProposalStatus = {}));

/************************** ClientState **************************/
var HashOp;
/**
LengthOp defines how to process the key and value of the LeafOp
to include length information. After encoding the length with the given
algorithm, the length will be prepended to the key and value bytes.
(Each one with it's own encoded length)
*/

exports.HashOp = HashOp;

(function (HashOp) {
  HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
  HashOp[HashOp["SHA256"] = 1] = "SHA256";
  HashOp[HashOp["SHA512"] = 2] = "SHA512";
  HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
  HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
  HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
})(HashOp || (exports.HashOp = HashOp = {}));

var LengthOp;
/*
InnerSpec contains all store-specific structure info to determine if two proofs from a
given store are neighbors.

This enables:

  isLeftMost(spec: InnerSpec, op: InnerOp)
  isRightMost(spec: InnerSpec, op: InnerOp)
  isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
*/

exports.LengthOp = LengthOp;

(function (LengthOp) {
  LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
  LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
  LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
  LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
  LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
  LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
  LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
  LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
  LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
})(LengthOp || (exports.LengthOp = LengthOp = {}));