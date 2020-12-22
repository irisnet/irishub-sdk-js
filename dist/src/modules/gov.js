"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gov = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _gov = require("../types/gov");

/**
 * This module provides governance functionalities
 *
 * [More Details](https://www.irisnet.org/docs/features/governance.html)
 *
 * @category Modules
 * @since v0.17
 */
var Gov = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Gov(client) {
    (0, _classCallCheck2["default"])(this, Gov);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Query details of a single proposal
   * @param proposalID Identity of a proposal
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Gov, [{
    key: "queryProposal",
    value: function queryProposal(proposalID) {
      return this.client.rpcClient.abciQuery('custom/gov/proposal', {
        ProposalID: String(proposalID)
      });
    }
    /**
     * Query proposals by conditions
     * @param params
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryProposals",
    value: function queryProposals(params) {
      var queryParams = {};

      if (params) {
        queryParams = {
          Voter: params.voter,
          Depositor: params.depositor,
          ProposalStatus: params.proposalStatus,
          Limit: String(params.limit)
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

  }, {
    key: "queryVote",
    value: function queryVote(proposalID, voter) {
      return this.client.rpcClient.abciQuery('custom/gov/vote', {
        ProposalID: String(proposalID),
        Voter: voter
      });
    }
    /**
     * Query all votes of a proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryVotes",
    value: function queryVotes(proposalID) {
      return this.client.rpcClient.abciQuery('custom/gov/votes', {
        ProposalID: String(proposalID)
      });
    }
    /**
     * Query a deposit of a proposal
     * @param proposalID Identity of a proposal
     * @param depositor Bech32 depositor address
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryDeposit",
    value: function queryDeposit(proposalID, depositor) {
      return this.client.rpcClient.abciQuery('custom/gov/deposit', {
        ProposalID: String(proposalID),
        Depositor: depositor
      });
    }
    /**
     * Query all deposits of a proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryDeposits",
    value: function queryDeposits(proposalID) {
      return this.client.rpcClient.abciQuery('custom/gov/deposits', {
        ProposalID: String(proposalID)
      });
    }
    /**
     * Query the statistics of a proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryTally",
    value: function queryTally(proposalID) {
      return this.client.rpcClient.abciQuery('custom/gov/tally', {
        ProposalID: String(proposalID)
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

  }, {
    key: "submitParameterChangeProposal",
    value: function () {
      var _submitParameterChangeProposal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(title, description, initialDeposit, params, baseTx) {
        var proposer, coins, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                proposer = this.client.keys.show(baseTx.from);
                _context.next = 3;
                return this.client.utils.toMinCoins(initialDeposit);

              case 3:
                coins = _context.sent;
                msgs = [new _gov.MsgSubmitParameterChangeProposal({
                  title: title,
                  description: description,
                  proposer: proposer,
                  initial_deposit: coins,
                  params: params
                })];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submitParameterChangeProposal(_x, _x2, _x3, _x4, _x5) {
        return _submitParameterChangeProposal.apply(this, arguments);
      }

      return submitParameterChangeProposal;
    }()
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

  }, {
    key: "submitPlainTextProposal",
    value: function () {
      var _submitPlainTextProposal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(title, description, initialDeposit, baseTx) {
        var proposer, coins, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                proposer = this.client.keys.show(baseTx.from);
                _context2.next = 3;
                return this.client.utils.toMinCoins(initialDeposit);

              case 3:
                coins = _context2.sent;
                msgs = [new _gov.MsgSubmitPlainTextProposal({
                  title: title,
                  description: description,
                  proposer: proposer,
                  initial_deposit: coins
                })];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function submitPlainTextProposal(_x6, _x7, _x8, _x9) {
        return _submitPlainTextProposal.apply(this, arguments);
      }

      return submitPlainTextProposal;
    }()
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

  }, {
    key: "submitCommunityTaxUsageProposal",
    value: function () {
      var _submitCommunityTaxUsageProposal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(title, description, initialDeposit, usage, destAddress, percent, baseTx) {
        var proposer, coins, msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                proposer = this.client.keys.show(baseTx.from);
                _context3.next = 3;
                return this.client.utils.toMinCoins(initialDeposit);

              case 3:
                coins = _context3.sent;
                msgs = [new _gov.MsgSubmitCommunityTaxUsageProposal({
                  title: title,
                  description: description,
                  proposer: proposer,
                  initial_deposit: coins,
                  usage: _gov.CommunityTaxUsageType[usage],
                  dest_address: destAddress,
                  percent: String(percent)
                })];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function submitCommunityTaxUsageProposal(_x10, _x11, _x12, _x13, _x14, _x15, _x16) {
        return _submitCommunityTaxUsageProposal.apply(this, arguments);
      }

      return submitCommunityTaxUsageProposal;
    }()
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

  }, {
    key: "deposit",
    value: function () {
      var _deposit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(proposalID, amount, baseTx) {
        var depositor, coins, msgs;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                depositor = this.client.keys.show(baseTx.from);
                _context4.next = 3;
                return this.client.utils.toMinCoins(amount);

              case 3:
                coins = _context4.sent;
                msgs = [new _gov.MsgDeposit(String(proposalID), depositor, coins)];
                return _context4.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deposit(_x17, _x18, _x19) {
        return _deposit.apply(this, arguments);
      }

      return deposit;
    }()
    /**
     * Vote for an active proposal, options: Yes/No/NoWithVeto/Abstain.
     * Only validators and delegators can vote for proposals in the voting period.
     *
     * @param proposalID Identity of a proposal
     * @param option Vote option
     * @param baseTx
     * @since v0.17
     */

  }, {
    key: "vote",
    value: function () {
      var _vote = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(proposalID, option, baseTx) {
        var voter, msgs;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                voter = this.client.keys.show(baseTx.from);
                msgs = [new _gov.MsgVote(String(proposalID), voter, option)];
                return _context5.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function vote(_x20, _x21, _x22) {
        return _vote.apply(this, arguments);
      }

      return vote;
    }() // =================== NOT SUPPORTED ==================== //
    // submitSoftwareUpgradeProposal;                         //
    // submitSystemHaltProposal;                              //
    // =================== NOT SUPPORTED ==================== //

  }]);
  return Gov;
}();

exports.Gov = Gov;