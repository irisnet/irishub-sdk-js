"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgVote = exports.MsgDeposit = exports.MsgSubmitCommunityTaxUsageProposal = exports.MsgSubmitPlainTextProposal = exports.MsgSubmitParameterChangeProposal = exports.VoteOption = exports.CommunityTaxUsageType = exports.ProposalType = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = require("./types");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Proposal Types
 * @hidden
 */
var ProposalType;
/**
 * Types for community tax usage
 */

exports.ProposalType = ProposalType;

(function (ProposalType) {
  ProposalType[ProposalType["Parameter"] = 1] = "Parameter";
  ProposalType[ProposalType["SoftwareUpgrade"] = 2] = "SoftwareUpgrade";
  ProposalType[ProposalType["SystemHalt"] = 3] = "SystemHalt";
  ProposalType[ProposalType["CommunityTaxUsage"] = 4] = "CommunityTaxUsage";
  ProposalType[ProposalType["PlainText"] = 5] = "PlainText";
  ProposalType[ProposalType["TokenAddition"] = 6] = "TokenAddition";
})(ProposalType || (exports.ProposalType = ProposalType = {}));

var CommunityTaxUsageType;
/**
 * Vote options
 */

exports.CommunityTaxUsageType = CommunityTaxUsageType;

(function (CommunityTaxUsageType) {
  CommunityTaxUsageType[CommunityTaxUsageType["Burn"] = 1] = "Burn";
  CommunityTaxUsageType[CommunityTaxUsageType["Distribute"] = 2] = "Distribute";
  CommunityTaxUsageType[CommunityTaxUsageType["Grant"] = 3] = "Grant";
})(CommunityTaxUsageType || (exports.CommunityTaxUsageType = CommunityTaxUsageType = {}));

var VoteOption;
/**
 * Basic proposal result properties
 */

exports.VoteOption = VoteOption;

(function (VoteOption) {
  VoteOption[VoteOption["Empty"] = 0] = "Empty";
  VoteOption[VoteOption["Yes"] = 1] = "Yes";
  VoteOption[VoteOption["Abstain"] = 2] = "Abstain";
  VoteOption[VoteOption["No"] = 3] = "No";
  VoteOption[VoteOption["NoWithVeto"] = 4] = "NoWithVeto";
})(VoteOption || (exports.VoteOption = VoteOption = {}));

/**
 * Msg struct for submitting a ParameterChangeProposal
 * @hidden
 */
var MsgSubmitParameterChangeProposal = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgSubmitParameterChangeProposal, _Msg);

  var _super = _createSuper(MsgSubmitParameterChangeProposal);

  function MsgSubmitParameterChangeProposal(params) {
    var _this;

    (0, _classCallCheck2["default"])(this, MsgSubmitParameterChangeProposal);
    _this = _super.call(this, 'irishub/gov/MsgSubmitProposal');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    params.proposal_type = ProposalType[ProposalType.Parameter];
    _this.value = params;
    return _this;
  }

  (0, _createClass2["default"])(MsgSubmitParameterChangeProposal, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this.value;
    }
  }, {
    key: "marshal",
    value: function marshal() {
      return {
        type: this.type,
        value: {
          proposal_type: ProposalType.Parameter,
          title: this.value.title,
          description: this.value.description,
          proposer: this.value.proposer,
          initial_deposit: this.value.initial_deposit,
          params: this.value.params
        }
      };
    }
  }]);
  return MsgSubmitParameterChangeProposal;
}(_types.Msg); // ------------------- PlainTextProposal -------------------------

/** 
 * Params for submitting a PlainTextProposal
 * @hidden
 */


exports.MsgSubmitParameterChangeProposal = MsgSubmitParameterChangeProposal;

/**
 * Msg struct for submitting a PlainTextProposal
 * @hidden
 */
var MsgSubmitPlainTextProposal = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgSubmitPlainTextProposal, _Msg2);

  var _super2 = _createSuper(MsgSubmitPlainTextProposal);

  function MsgSubmitPlainTextProposal(params) {
    var _this2;

    (0, _classCallCheck2["default"])(this, MsgSubmitPlainTextProposal);
    _this2 = _super2.call(this, 'irishub/gov/MsgSubmitProposal');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    params.proposal_type = ProposalType[ProposalType.PlainText];
    params.params = null; // TODO: Historical issue: Proposals except `ParameterChange` must specify the `params` to be null

    _this2.value = params;
    return _this2;
  }

  (0, _createClass2["default"])(MsgSubmitPlainTextProposal, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this.value;
    }
  }, {
    key: "marshal",
    value: function marshal() {
      return {
        type: this.type,
        value: {
          proposal_type: ProposalType.PlainText,
          title: this.value.title,
          description: this.value.description,
          proposer: this.value.proposer,
          initial_deposit: this.value.initial_deposit
        }
      };
    }
  }]);
  return MsgSubmitPlainTextProposal;
}(_types.Msg); // ------------------- CommunityTaxUsageProposal -------------------------

/** 
 * Params for submitting a CommunityTaxUsageProposal
 * @hidden
 */


exports.MsgSubmitPlainTextProposal = MsgSubmitPlainTextProposal;

/**
 * Msg struct for submitting a CommunityTaxUsageProposal
 * @hidden
 */
var MsgSubmitCommunityTaxUsageProposal = /*#__PURE__*/function (_Msg3) {
  (0, _inherits2["default"])(MsgSubmitCommunityTaxUsageProposal, _Msg3);

  var _super3 = _createSuper(MsgSubmitCommunityTaxUsageProposal);

  function MsgSubmitCommunityTaxUsageProposal(params) {
    var _this3;

    (0, _classCallCheck2["default"])(this, MsgSubmitCommunityTaxUsageProposal);
    _this3 = _super3.call(this, 'irishub/gov/MsgSubmitCommunityTaxUsageProposal');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "value", void 0);
    params.proposal_type = ProposalType[ProposalType.CommunityTaxUsage];
    params.params = null; // TODO: Historical issue: Proposals except `ParameterChange` must specify the `params` to be null

    _this3.value = params;
    return _this3;
  }

  (0, _createClass2["default"])(MsgSubmitCommunityTaxUsageProposal, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this.value;
    }
  }, {
    key: "marshal",
    value: function marshal() {
      return {
        type: this.type,
        value: {
          proposal_type: ProposalType.CommunityTaxUsage,
          title: this.value.title,
          description: this.value.description,
          proposer: this.value.proposer,
          initial_deposit: this.value.initial_deposit
        }
      };
    }
  }]);
  return MsgSubmitCommunityTaxUsageProposal;
}(_types.Msg);
/**
 * Msg struct for depositing to an active proposal in `depositing` period
 * @hidden
 */


exports.MsgSubmitCommunityTaxUsageProposal = MsgSubmitCommunityTaxUsageProposal;

var MsgDeposit = /*#__PURE__*/function (_Msg4) {
  (0, _inherits2["default"])(MsgDeposit, _Msg4);

  var _super4 = _createSuper(MsgDeposit);

  function MsgDeposit(proposalID, depositor, amount) {
    var _this4;

    (0, _classCallCheck2["default"])(this, MsgDeposit);
    _this4 = _super4.call(this, 'irishub/gov/MsgDeposit');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "value", void 0);
    _this4.value = {
      proposal_id: proposalID,
      depositor: depositor,
      amount: amount
    };
    return _this4;
  }

  (0, _createClass2["default"])(MsgDeposit, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this.value;
    }
  }]);
  return MsgDeposit;
}(_types.Msg);
/**
 * Msg struct for voting to an active proposal in `voting` period
 * @hidden
 */


exports.MsgDeposit = MsgDeposit;

var MsgVote = /*#__PURE__*/function (_Msg5) {
  (0, _inherits2["default"])(MsgVote, _Msg5);

  var _super5 = _createSuper(MsgVote);

  function MsgVote(proposalID, voter, option) {
    var _this5;

    (0, _classCallCheck2["default"])(this, MsgVote);
    _this5 = _super5.call(this, 'irishub/gov/MsgVote');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "value", void 0);
    _this5.value = {
      proposal_id: proposalID,
      voter: voter,
      option: VoteOption[option]
    };
    return _this5;
  }

  (0, _createClass2["default"])(MsgVote, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this.value;
    }
  }, {
    key: "marshal",
    value: function marshal() {
      return {
        type: this.type,
        value: {
          proposal_id: this.value.proposal_id,
          voter: this.value.voter,
          option: VoteOption[this.value.option]
        }
      };
    }
  }]);
  return MsgVote;
}(_types.Msg);

exports.MsgVote = MsgVote;