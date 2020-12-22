"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Staking = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

var _utils = require("../utils");

var is = _interopRequireWildcard(require("is_js"));

var _helper = require("../helper");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.irisnet.org/docs/features/stake.html)
 *
 * @category Modules
 * @since
 */
var Staking = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Staking(client) {
    (0, _classCallCheck2["default"])(this, Staking);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Delegate liquid tokens to an validator
   *
   * @param validatorAddr Bech32 validator address
   * @param amount Amount to be delegated to the validator
   * @param baseTx
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Staking, [{
    key: "delegate",
    value: function delegate(validatorAddr, amount, baseTx) {
      var delegatorAddr = this.client.keys.show(baseTx.from);
      var msgs = [{
        type: types.TxType.MsgDelegate,
        value: {
          delegator_address: delegatorAddr,
          validator_address: validatorAddr,
          amount: amount
        }
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
    }
    /**
     * Undelegate from a validator
     * @param validatorAddr Bech32 validator address
     * @param amount Amount to be undelegated from the validator
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "undelegate",
    value: function () {
      var _undelegate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(validatorAddr, amount, baseTx) {
        var delegatorAddr, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                delegatorAddr = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgUndelegate,
                  value: {
                    delegator_address: delegatorAddr,
                    validator_address: validatorAddr,
                    amount: amount
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

      function undelegate(_x, _x2, _x3) {
        return _undelegate.apply(this, arguments);
      }

      return undelegate;
    }()
    /**
     * Redelegate illiquid tokens from one validator to another
     * @param validatorSrcAddr Bech32 source validator address
     * @param validatorDstAddr Bech32 destination validator address
     * @param amount Amount to be redelegated
     * @param baseTx
     * @since v0.17
     */

  }, {
    key: "redelegate",
    value: function () {
      var _redelegate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(validatorSrcAddr, validatorDstAddr, amount, baseTx) {
        var delegatorAddr, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                delegatorAddr = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgBeginRedelegate,
                  value: {
                    delegator_address: delegatorAddr,
                    validator_src_address: validatorSrcAddr,
                    validator_dst_address: validatorDstAddr,
                    amount: amount
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

      function redelegate(_x4, _x5, _x6, _x7) {
        return _redelegate.apply(this, arguments);
      }

      return redelegate;
    }()
    /**
     * Query a delegation based on delegator address and validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */

  }, {
    key: "queryDelegation",
    value: function queryDelegation(delegator_addr, validator_addr) {
      if (is.undefined(validator_addr)) {
        throw new _errors.SdkError('validator address can not be empty');
      }

      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryDelegationRequest().setValidatorAddr(validator_addr).setDelegatorAddr(delegator_addr);
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Delegation', request, types.staking_query_pb.QueryDelegationResponse);
    }
    /**
     * Query all delegations made from one delegator
     *
     * @param pagination page info
     * @param delegator_addr Bech32 delegator address
     * @returns
     * @since
     */

  }, {
    key: "queryDelegations",
    value: function queryDelegations(query) {
      var key = query.key,
          page = query.page,
          size = query.size,
          count_total = query.count_total,
          delegator_addr = query.delegator_addr;

      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryDelegatorDelegationsRequest().setDelegatorAddr(delegator_addr).setPagination(_helper.ModelCreator.createPaginationModel(page, size, count_total, key));
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/DelegatorDelegations', request, types.staking_query_pb.QueryDelegatorDelegationsResponse);
    }
    /**
     * Query an unbonding-delegation record based on delegator and validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */

  }, {
    key: "queryUnbondingDelegation",
    value: function queryUnbondingDelegation(delegator_addr, validator_addr) {
      if (is.undefined(validator_addr)) {
        throw new _errors.SdkError('validator address can not be empty');
      }

      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryUnbondingDelegationRequest().setValidatorAddr(validator_addr).setDelegatorAddr(delegator_addr);
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/UnbondingDelegation', request, types.staking_query_pb.QueryUnbondingDelegationResponse);
    }
    /**
     * Query all unbonding-delegations records for one delegator
     *
     * @param pagination page info
     * @param delegator_addr Bech32 delegator address
     * @returns
     * @since
     */

  }, {
    key: "queryDelegatorUnbondingDelegations",
    value: function queryDelegatorUnbondingDelegations(query) {
      var key = query.key,
          page = query.page,
          size = query.size,
          count_total = query.count_total,
          delegator_addr = query.delegator_addr;

      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryDelegatorUnbondingDelegationsRequest().setDelegatorAddr(delegator_addr).setPagination(_helper.ModelCreator.createPaginationModel(page, size, count_total, key));
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations', request, types.staking_query_pb.QueryDelegatorUnbondingDelegationsResponse);
    }
    /**
     * Query a redelegation record based on delegator and a source and destination validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param src_validator_addr (optional) Bech32 source validator address
     * @param dst_validator_addr (optional) Bech32 destination validator address
     * @returns
     * @since
     */

  }, {
    key: "queryRedelegation",
    value: function queryRedelegation(query) {
      var key = query.key,
          page = query.page,
          size = query.size,
          count_total = query.count_total,
          delegator_addr = query.delegator_addr,
          src_validator_addr = query.src_validator_addr,
          dst_validator_addr = query.dst_validator_addr;

      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryRedelegationsRequest().setDelegatorAddr(delegator_addr).setPagination(_helper.ModelCreator.createPaginationModel(page, size, count_total, key));

      if (is.not.undefined(src_validator_addr)) {
        request.setSrcValidatorAddr(src_validator_addr);
      }

      if (is.not.undefined(dst_validator_addr)) {
        request.setDstValidatorAddr(dst_validator_addr);
      }

      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Redelegations', request, types.staking_query_pb.QueryRedelegationsResponse);
    }
    /**
     * Query all validators info for given delegator
     *
     * @param delegator_addr Bech32 delegator address
     * @param pagination page info
     * @returns
     * @since
     */

  }, {
    key: "queryDelegatorValidators",
    value: function queryDelegatorValidators(query) {
      var key = query.key,
          page = query.page,
          size = query.size,
          count_total = query.count_total,
          delegator_addr = query.delegator_addr;

      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryDelegatorValidatorsRequest().setDelegatorAddr(delegator_addr).setPagination(_helper.ModelCreator.createPaginationModel(page, size, count_total, key));
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/DelegatorValidators', request, types.staking_query_pb.QueryDelegatorValidatorsResponse);
    }
    /**
     * Query validator info for given delegator validator
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */

  }, {
    key: "queryDelegatorValidator",
    value: function queryDelegatorValidator(query) {
      var delegator_addr = query.delegator_addr,
          validator_addr = query.validator_addr;

      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }

      if (is.undefined(validator_addr)) {
        throw new _errors.SdkError('validator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryDelegatorValidatorRequest().setDelegatorAddr(delegator_addr).setValidatorAddr(validator_addr);
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/DelegatorValidator', request, types.staking_query_pb.QueryDelegatorValidatorResponse);
    }
    /**
     * Query the historical info for given height.
     *
     * @param height defines at which height to query the historical info
     * @returns
     * @since
     */

  }, {
    key: "queryHistoricalInfo",
    value: function queryHistoricalInfo(query) {
      var height = query.height;

      if (is.undefined(height)) {
        throw new _errors.SdkError('block height can not be empty');
      }

      var request = new types.staking_query_pb.QueryHistoricalInfoRequest().setHeight(height);
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/HistoricalInfo', request, types.staking_query_pb.QueryHistoricalInfoResponse);
    }
    /**
     * Query all delegations to one validator
     *
     * @param validator_addr Bech32 validator address
     * @param pagination page info
     * @returns
     * @since
     */

  }, {
    key: "queryValidatorDelegations",
    value: function queryValidatorDelegations(query) {
      var key = query.key,
          page = query.page,
          size = query.size,
          count_total = query.count_total,
          validator_addr = query.validator_addr;

      if (is.undefined(validator_addr)) {
        throw new _errors.SdkError('validator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryValidatorDelegationsRequest().setValidatorAddr(validator_addr).setPagination(_helper.ModelCreator.createPaginationModel(page, size, count_total, key));
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/ValidatorDelegations', request, types.staking_query_pb.QueryValidatorDelegationsResponse);
    }
    /**
     * Query all unbonding delegatations from a validator
     *
     * @param validator_addr Bech32 validator address
     * @param pagination page info
     * @returns
     * @since
     */

  }, {
    key: "queryValidatorUnbondingDelegations",
    value: function queryValidatorUnbondingDelegations(query) {
      var key = query.key,
          page = query.page,
          size = query.size,
          count_total = query.count_total,
          validator_addr = query.validator_addr;

      if (is.undefined(validator_addr)) {
        throw new _errors.SdkError('validator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryValidatorUnbondingDelegationsRequest().setValidatorAddr(validator_addr).setPagination(_helper.ModelCreator.createPaginationModel(page, size, count_total, key));
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations', request, types.staking_query_pb.QueryValidatorUnbondingDelegationsResponse);
    }
    /**
     * Query a validator
     *
     * @param address Bech32 validator address
     * @returns
     * @since
     */

  }, {
    key: "queryValidator",
    value: function queryValidator(address) {
      var _this = this;

      if (is.undefined(address)) {
        throw new _errors.SdkError('validator address can not be empty');
      }

      var request = new types.staking_query_pb.QueryValidatorRequest().setValidatorAddr(address);
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Validator', request, types.staking_query_pb.QueryValidatorResponse).then(function (res) {
        var result = _objectSpread({}, res);

        if (res.validator && res.validator.consensusPubkey && res.validator.consensusPubkey.value) {
          result.validator.consensusPubkey = _this.client.protobuf.deserializePubkey(res.validator.consensusPubkey);
        }

        return result;
      });
    }
    /**
     * Query for all validators
     * @param pagination page info
     * @param status validator status
     * @returns
     * @since
     */

  }, {
    key: "queryValidators",
    value: function queryValidators(query) {
      var _this2 = this;

      var key = query.key,
          page = query.page,
          size = query.size,
          count_total = query.count_total,
          status = query.status;
      var request = new types.staking_query_pb.QueryValidatorsRequest().setPagination(_helper.ModelCreator.createPaginationModel(page, size, count_total, key));

      if (is.not.undefined(status)) {
        request.setStatus(status);
      }

      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Validators', request, types.staking_query_pb.QueryValidatorsResponse).then(function (res) {
        var result = _objectSpread({}, res);

        if (res.validatorsList && res.validatorsList.length) {
          result.validatorsList = res.validatorsList.map(function (val) {
            if (val.consensusPubkey && val.consensusPubkey.value) {
              val.consensusPubkey = _this2.client.protobuf.deserializePubkey(val.consensusPubkey);
            }

            return val;
          });
        }

        return result;
      });
    }
    /**
     * Query the current staking pool values
     * @returns
     * @since
     */

  }, {
    key: "queryPool",
    value: function queryPool() {
      var request = new types.staking_query_pb.QueryPoolRequest();
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Pool', request, types.staking_query_pb.QueryPoolResponse);
    }
    /**
     * Query the current staking parameters information
     * @returns
     * @since
     */

  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.staking_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/Params', request, types.staking_query_pb.QueryParamsResponse);
    }
    /**
     * Subscribe validator information updates
     * @param conditions Query conditions for the subscription { validatorAddress: string - The `iva` (or `fva` on testnets) prefixed bech32 validator address }
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */

  }, {
    key: "subscribeValidatorInfoUpdates",
    value: function subscribeValidatorInfoUpdates(conditions, callback) {
      var queryBuilder = new types.EventQueryBuilder().addCondition(new types.Condition(types.EventKey.Action).eq(types.EventAction.EditValidator));

      if (conditions.validatorAddress) {
        queryBuilder.addCondition(new types.Condition(types.EventKey.DestinationValidator).eq(conditions.validatorAddress));
      }

      var subscription = this.client.eventListener.subscribeTx(queryBuilder, function (error, data) {
        if (error) {
          callback(error);
          return;
        }

        data === null || data === void 0 ? void 0 : data.tx.value.msg.forEach(function (msg) {
          if (msg.type !== 'irishub/stake/MsgEditValidator') return;
          var msgEditValidator = msg;
          var height = data.height;
          var hash = data.hash;
          var description = msgEditValidator.value.Description;
          var address = msgEditValidator.value.address;
          var commission_rate = msgEditValidator.value.commission_rate;
          callback(undefined, {
            height: height,
            hash: hash,
            description: description,
            address: address,
            commission_rate: commission_rate
          });
        });
      });
      return subscription;
    }
    /**
     * Subscribe validator set updates
     * @param conditions Query conditions for the subscription { validatorPubKeys: string[] - The `icp` (or `fcp` on testnets) prefixed bech32 validator consensus pubkey }
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */

  }, {
    key: "subscribeValidatorSetUpdates",
    value: function subscribeValidatorSetUpdates(conditions, callback) {
      var _this3 = this;

      // Add pubkeys to the set
      var listeningSet = new Set();

      if (conditions.validatorConsPubKeys) {
        conditions.validatorConsPubKeys.forEach(function (pubkey) {
          listeningSet.add(pubkey);
        });
      } // Subscribe notifications from blockchain


      var subscription = this.client.eventListener.subscribeValidatorSetUpdates(function (error, data) {
        if (error) {
          callback(error);
        }

        data === null || data === void 0 ? void 0 : data.forEach(function (event) {
          var bech32Address = _utils.Crypto.encodeAddress(event.address, _this3.client.config.bech32Prefix.ConsAddr);

          var bech32Pubkey = _utils.Crypto.encodeAddress(_utils.Utils.ab2hexstring(_utils.Crypto.aminoMarshalPubKey(event.pub_key)), _this3.client.config.bech32Prefix.ConsPub);

          var update = {
            address: event.address,
            pub_key: event.pub_key,
            voting_power: event.voting_power,
            proposer_priority: event.proposer_priority,
            bech32_address: bech32Address,
            bech32_pubkey: bech32Pubkey
          };

          if (listeningSet.size > 0) {
            if (listeningSet.has(update.bech32_pubkey)) {
              callback(undefined, update);
            }
          } else {
            callback(undefined, update);
          }
        });
      });
      return subscription;
    }
    /**
     * TODO: Historical issue, irishub only accepts 10 decimal places due to `sdk.Dec`
     *
     * Removing on irishub v1.0
     * @deprecated
     * @hidden
     */

  }, {
    key: "appendZero",
    value: function appendZero(num, count) {
      var length = num.length;
      var dotIndex = num.lastIndexOf('.');

      if (dotIndex <= 0) {
        return this.appendZero(num + '.0', count);
      }

      if (length - (dotIndex + 1) < count) {
        return this.appendZero(num + '0', count);
      }

      return num;
    }
    /**
     * Create new validator initialized with a self-delegation to it
     *
     * ** Not Supported **
     */

  }, {
    key: "createValidator",
    value: function createValidator() {
      throw new _errors.SdkError('Not supported');
    }
  }]);
  return Staking;
}();

exports.Staking = Staking;