"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Distribution = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _utils = require("../utils");

var _helper = require("../helper");

var _errors = require("../errors");

/**
 * This module is in charge of distributing collected transaction fee and inflated token to all validators and delegators.
 * To reduce computation stress, a lazy distribution strategy is brought in. lazy means that the benefit won't be paid directly to contributors automatically.
 * The contributors are required to explicitly send transactions to withdraw their benefit, otherwise, their benefit will be kept in the global pool.
 *
 * [More Details](https://www.irisnet.org/docs/features/distribution.html)
 *
 * @category Modules
 * @since v0.17
 */
var Distribution = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Distribution(client) {
    (0, _classCallCheck2["default"])(this, Distribution);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Set another address to receive the rewards instead of using the delegator address
   * @param withdrawAddress Bech32 account address
   * @param baseTx
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Distribution, [{
    key: "setWithdrawAddr",
    value: function () {
      var _setWithdrawAddr = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(withdrawAddress, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                from = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgSetWithdrawAddress,
                  value: {
                    delegator_address: from,
                    withdraw_address: withdrawAddress
                  }
                }];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setWithdrawAddr(_x, _x2) {
        return _setWithdrawAddr.apply(this, arguments);
      }

      return setWithdrawAddr;
    }()
    /**
     * Withdraw rewards to the withdraw-address(default to the delegator address, you can set to another address via [[setWithdrawAddr]])
     * @param baseTx { types.BaseTx }
     * @param validatorAddr withdraw from this validator address
     * @returns { Promise<types.TxResult> }
     * @since v0.17
     */

  }, {
    key: "withdrawRewards",
    value: function () {
      var _withdrawRewards = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(validatorAddr, baseTx) {
        var delegatorAddr, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                delegatorAddr = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgWithdrawDelegatorReward,
                  value: {
                    delegator_address: delegatorAddr,
                    validator_address: validatorAddr
                  }
                }];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function withdrawRewards(_x3, _x4) {
        return _withdrawRewards.apply(this, arguments);
      }

      return withdrawRewards;
    }()
    /**
     * withdraws the full commission to the validator
     * @param validatorAddr withdraw from this validator address
     * @param baseTx { types.BaseTx }
     * @returns { Promise<types.TxResult> }
     * @since v0.17
     */

  }, {
    key: "withdrawValidatorCommission",
    value: function () {
      var _withdrawValidatorCommission = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(validator_address, baseTx) {
        var msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_utils.Crypto.checkAddress(validator_address, this.client.config.bech32Prefix.ValAddr)) {
                  _context3.next = 2;
                  break;
                }

                throw new _errors.SdkError('Invalid bech32 address');

              case 2:
                msgs = [{
                  type: types.TxType.MsgWithdrawValidatorCommission,
                  value: {
                    validator_address: validator_address
                  }
                }];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function withdrawValidatorCommission(_x5, _x6) {
        return _withdrawValidatorCommission.apply(this, arguments);
      }

      return withdrawValidatorCommission;
    }()
    /**
     * fundCommunityPool allows an account to directly fund the community pool
     * @param amount Coins to be fund
     * @param baseTx { types.BaseTx }
     * @returns { Promise<types.TxResult> }
     * @since v0.17
     */

  }, {
    key: "fundCommunityPool",
    value: function () {
      var _fundCommunityPool = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(amount, baseTx) {
        var depositor, msgs;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                depositor = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgFundCommunityPool,
                  value: {
                    depositor: depositor,
                    amount: amount
                  }
                }];
                return _context4.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fundCommunityPool(_x7, _x8) {
        return _fundCommunityPool.apply(this, arguments);
      }

      return fundCommunityPool;
    }()
    /**
     * Params queries params of the distribution module.
     */

  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.distribution_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/Params', request, types.distribution_query_pb.QueryParamsResponse);
    }
    /**
     * ValidatorOutstandingRewards queries rewards of a validator address.
     * @param validator_address Bech32 address
     */

  }, {
    key: "queryValidatorOutstandingRewards",
    value: function queryValidatorOutstandingRewards(validator_address) {
      if (!validator_address) {
        throw new Error("validator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryValidatorOutstandingRewardsRequest();
      request.setValidatorAddress(validator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards', request, types.distribution_query_pb.QueryValidatorOutstandingRewardsResponse);
    }
    /**
     * ValidatorCommission queries accumulated commission for a validator.
     * @param validator_address Bech32 address
     */

  }, {
    key: "queryValidatorCommission",
    value: function queryValidatorCommission(validator_address) {
      if (!validator_address) {
        throw new Error("validator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryValidatorCommissionRequest();
      request.setValidatorAddress(validator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/ValidatorCommission', request, types.distribution_query_pb.QueryValidatorCommissionResponse);
    }
    /**
     * ValidatorSlashes queries slash events of a validator.
     * @param validator_address defines the validator address to query for.
     * @param starting_height defines the optional starting height to query the slashes.
     * @param ending_height defines the optional ending height to query the slashes.
     * @param page_number 
     * @param page_size 
     */

  }, {
    key: "queryValidatorSlashes",
    value: function queryValidatorSlashes(validator_address) {
      var starting_height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var ending_height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var page_number = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var page_size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;

      if (!validator_address) {
        throw new Error("validator_address can ont be empty");
      }

      var pagination = _helper.ModelCreator.createPaginationModel(page_number, page_size, true);

      var request = new types.distribution_query_pb.QueryValidatorSlashesRequest();
      request.setValidatorAddress(validator_address);
      request.setPagination(pagination);

      if (starting_height) {
        request.setStartingHeight(starting_height);
      }

      if (ending_height) {
        request.setEndingHeight(ending_height);
      }

      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/ValidatorSlashes', request, types.distribution_query_pb.QueryValidatorSlashesResponse);
    }
    /**
     * DelegationRewards queries the total rewards accrued by a delegation.
     * @param validator_address defines the validator address to query for
     * @param delegator_address defines the delegator address to query for
     */

  }, {
    key: "queryDelegationRewards",
    value: function queryDelegationRewards(validator_address, delegator_address) {
      if (!validator_address) {
        throw new Error("validator_address can ont be empty");
      }

      if (!delegator_address) {
        throw new Error("delegator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryDelegationRewardsRequest();
      request.setValidatorAddress(validator_address);
      request.setDelegatorAddress(delegator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegationRewards', request, types.distribution_query_pb.QueryDelegationRewardsResponse);
    }
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each validator.
     * @param delegator_address defines the delegator address to query for
     */

  }, {
    key: "queryDelegationTotalRewards",
    value: function queryDelegationTotalRewards(delegator_address) {
      if (!delegator_address) {
        throw new Error("delegator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryDelegationTotalRewardsRequest();
      request.setDelegatorAddress(delegator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegationTotalRewards', request, types.distribution_query_pb.QueryDelegationTotalRewardsResponse);
    }
    /**
     * DelegatorValidators queries the validators of a delegator.
     * @param delegator_address defines the delegator address to query for
     */

  }, {
    key: "queryDelegatorValidators",
    value: function queryDelegatorValidators(delegator_address) {
      if (!delegator_address) {
        throw new Error("delegator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryDelegatorValidatorsRequest();
      request.setDelegatorAddress(delegator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegatorValidators', request, types.distribution_query_pb.QueryDelegatorValidatorsResponse);
    }
    /**
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     * @param delegator_address defines the delegator address to query for
     */

  }, {
    key: "queryDelegatorWithdrawAddress",
    value: function queryDelegatorWithdrawAddress(delegator_address) {
      if (!delegator_address) {
        throw new Error("delegator_address can ont be empty");
      }

      var request = new types.distribution_query_pb.QueryDelegatorWithdrawAddressRequest();
      request.setDelegatorAddress(delegator_address);
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress', request, types.distribution_query_pb.QueryDelegatorWithdrawAddressResponse);
    }
    /**
     * CommunityPool queries the community pool coins.
     */

  }, {
    key: "queryCommunityPool",
    value: function queryCommunityPool() {
      var request = new types.distribution_query_pb.QueryCommunityPoolRequest();
      return this.client.rpcClient.protoQuery('/cosmos.distribution.v1beta1.Query/CommunityPool', request, types.distribution_query_pb.QueryCommunityPoolResponse);
    }
  }]);
  return Distribution;
}();

exports.Distribution = Distribution;