"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var is = _interopRequireWildcard(require("is_js"));
var _helper = require("../helper");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.irisnet.org/docs/features/stake.html)
 *
 * @category Modules
 * @since
 */
var Staking = exports.Staking = /*#__PURE__*/function () {
  /** @hidden */
  function Staking(client) {
    (0, _classCallCheck2["default"])(this, Staking);
    /** @hidden */
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }

  /**
   * performing the status transition for a validator from bonded to unbonding
   * @param baseTx 
   */
  return (0, _createClass2["default"])(Staking, [{
    key: "unbondValidator",
    value: function unbondValidator(baseTx) {
      var validator_address = this.client.keys.show(baseTx.from);
      var msgs = [{
        type: types.TxType.MsgUnbondValidator,
        value: {
          validator_address: validator_address
        }
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * MsgTokenizeShares tokenizes a delegation
     * 
     * @param validatorAddr Bech32 validator address
     * @param amount Amount to be tokenized to the validator
     * @param tokenizedShareOwner tokenized share owner
     * @param baseTx 
     * @returns
     * @since v3.4.0
     */
  }, {
    key: "tokenizeShares",
    value: function tokenizeShares(validatorAddr, amount, tokenizedShareOwner, baseTx) {
      var delegatorAddr = this.client.keys.show(baseTx.from);
      var msgs = [{
        type: types.TxType.MsgTokenizeShares,
        value: {
          delegator_address: delegatorAddr,
          validator_address: validatorAddr,
          amount: amount,
          tokenized_share_owner: tokenizedShareOwner
        }
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * MsgRedeemTokensForShares redeems a tokenized share back into a native delegation
     * 
     * @param amount amount to redeemes tokenized share
     * @param baseTx 
     * @returns 
     * @since v3.4.0
     */
  }, {
    key: "redeemTokensForShares",
    value: function redeemTokensForShares(amount, baseTx) {
      var dlegatorAddr = this.client.keys.show(baseTx.from);
      var msgs = [{
        type: types.TxType.MsgRedeemTokensForShares,
        value: {
          delegator_address: dlegatorAddr,
          amount: amount
        }
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * transfer a tokenize share record
     * 
     * @param tokenizeShareRecordId tokenize share record id
     * @param newOwner Bech32 new owner address
     * @param baseTx
     * @returns
     * @since v3.4.0
     */
  }, {
    key: "transferTokenizeShareRecord",
    value: function transferTokenizeShareRecord(tokenizeShareRecordId, newOwner, baseTx) {
      var sender = this.client.keys.show(baseTx.from);
      var msgs = [{
        type: types.TxType.MsgTransferTokenizeShareRecord,
        value: {
          tokenize_share_record_id: tokenizeShareRecordId,
          sender: sender,
          new_owner: newOwner
        }
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * prevents the tokenization of shares for a given address
     * 
     * @param baseTx 
     * @returns
     * @since v3.4.0
     */
  }, {
    key: "disableTokenizeShares",
    value: function disableTokenizeShares(baseTx) {
      var delegatorAddr = this.client.keys.show(baseTx.from);
      var msgs = [{
        type: types.TxType.MsgDisableTokenizeShares,
        value: {
          delegator_address: delegatorAddr
        }
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * re-enables tokenization of shares for a given address
     * 
     * @param baseTx 
     * @returns
     * @since v3.4.0
     */
  }, {
    key: "enableTokenizeShares",
    value: function enableTokenizeShares(baseTx) {
      var delegatorAddr = this.client.keys.show(baseTx.from);
      var msgs = [{
        type: types.TxType.MsgEnableTokenizeShares,
        value: {
          delegator_address: delegatorAddr
        }
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * performing validator self-bond of delegated coins from a delegator to a validator
     * 
     * @param validatorAddr Bech32 validator address
     * @param baseTx 
     * @returns 
     */
  }, {
    key: "validatorBond",
    value: function validatorBond(validatorAddr, baseTx) {
      var delegatorAddr = this.client.keys.show(baseTx.from);
      var msgs = [{
        type: types.TxType.MsgValidatorBond,
        value: {
          delegator_address: delegatorAddr,
          validator_address: validatorAddr
        }
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
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
  }, {
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
    value: (function () {
      var _undelegate = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(validatorAddr, amount, baseTx) {
        var delegatorAddr, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
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
    )
  }, {
    key: "redelegate",
    value: (function () {
      var _redelegate = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(validatorSrcAddr, validatorDstAddr, amount, baseTx) {
        var delegatorAddr, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
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
    )
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
      var pagination = query.pagination,
        delegator_addr = query.delegator_addr;
      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }
      var request = new types.staking_query_pb.QueryDelegatorDelegationsRequest().setDelegatorAddr(delegator_addr).setPagination(_helper.ModelCreator.createPaginationModel(pagination));
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
      var pagination = query.pagination,
        delegator_addr = query.delegator_addr;
      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }
      var request = new types.staking_query_pb.QueryDelegatorUnbondingDelegationsRequest().setDelegatorAddr(delegator_addr).setPagination(_helper.ModelCreator.createPaginationModel(pagination));
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
      var pagination = query.pagination,
        delegator_addr = query.delegator_addr,
        src_validator_addr = query.src_validator_addr,
        dst_validator_addr = query.dst_validator_addr;
      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }
      var request = new types.staking_query_pb.QueryRedelegationsRequest().setDelegatorAddr(delegator_addr).setPagination(_helper.ModelCreator.createPaginationModel(pagination));
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
      var pagination = query.pagination,
        delegator_addr = query.delegator_addr;
      if (is.undefined(delegator_addr)) {
        throw new _errors.SdkError('delegator address can not be empty');
      }
      var request = new types.staking_query_pb.QueryDelegatorValidatorsRequest().setDelegatorAddr(delegator_addr).setPagination(_helper.ModelCreator.createPaginationModel(pagination));
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
      var pagination = query.pagination,
        validator_addr = query.validator_addr;
      if (is.undefined(validator_addr)) {
        throw new _errors.SdkError('validator address can not be empty');
      }
      var request = new types.staking_query_pb.QueryValidatorDelegationsRequest().setValidatorAddr(validator_addr).setPagination(_helper.ModelCreator.createPaginationModel(pagination));
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
      var pagination = query.pagination,
        validator_addr = query.validator_addr;
      if (is.undefined(validator_addr)) {
        throw new _errors.SdkError('validator address can not be empty');
      }
      var request = new types.staking_query_pb.QueryValidatorUnbondingDelegationsRequest().setValidatorAddr(validator_addr).setPagination(_helper.ModelCreator.createPaginationModel(pagination));
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
      var pagination = query.pagination,
        status = query.status;
      var request = new types.staking_query_pb.QueryValidatorsRequest().setPagination(_helper.ModelCreator.createPaginationModel(pagination));
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
     * Query for individual tokenize share record information by share by id
     * 
     * @param id record id
     * @returns 
     * @since v3.4.0
     */
  }, {
    key: "queryTokenizeShareRecordById",
    value: function queryTokenizeShareRecordById(id) {
      if (is.undefined(id)) {
        throw new _errors.SdkError('record id can not be empty');
      }
      var request = new types.staking_query_pb.QueryTokenizeShareRecordByIdRequest().setId(id);
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/TokenizeShareRecordById', request, types.staking_query_pb.QueryTokenizeShareRecordByIdResponse);
    }

    /**
     * Query for individual tokenize share record information by share denom
     * 
     * @param denom denom string
     * @returns 
     * @since v3.4.0
     */
  }, {
    key: "queryTokenizeShareRecordByDenom",
    value: function queryTokenizeShareRecordByDenom(denom) {
      if (is.undefined(denom)) {
        throw new _errors.SdkError('denom can not be empty');
      }
      var request = new types.staking_query_pb.QueryTokenizeShareRecordByDenomRequest().setDenom(denom);
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/TokenizeShareRecordByDenom', request, types.staking_query_pb.QueryTokenizeShareRecordByDenomResponse);
    }

    /**
     * Query tokenize share records by address
     * 
     * @param owner Bech32 owner address
     * @returns
     * @since v3.4.0
     */
  }, {
    key: "queryTokenizeShareRecordsOwned",
    value: function queryTokenizeShareRecordsOwned(owner) {
      if (is.undefined(owner)) {
        throw new _errors.SdkError('owner can not be empty');
      }
      var request = new types.staking_query_pb.QueryTokenizeShareRecordsOwnedRequest().setOwner(owner);
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/TokenizeShareRecordsOwned', request, types.staking_query_pb.QueryTokenizeShareRecordsOwnedResponse);
    }

    /**
     * Query for all tokenize share records
     * 
     * @param pagination page info
     * @returns
     * @since v3.4.0
     */
  }, {
    key: "queryAllTokenizeShareRecords",
    value: function queryAllTokenizeShareRecords(pagination) {
      var request = new types.staking_query_pb.QueryAllTokenizeShareRecordsRequest().setPagination(_helper.ModelCreator.createPaginationModel(pagination));
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/AllTokenizeShareRecords', request, types.staking_query_pb.QueryAllTokenizeShareRecordsResponse);
    }

    /**
     * Query for last tokenize share record id
     * 
     * @returns
     * @since v3.4.0
     */
  }, {
    key: "queryLastTokenizeShareRecordId",
    value: function queryLastTokenizeShareRecordId() {
      var request = new types.staking_query_pb.QueryLastTokenizeShareRecordIdRequest();
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/LastTokenizeShareRecordId', request, types.staking_query_pb.QueryLastTokenizeShareRecordIdResponse);
    }

    /**
     * Query for total tokenized staked assets
     * 
     * @returns
     * @since v3.4.0
     */
  }, {
    key: "queryTotalTokenizeSharedAssets",
    value: function queryTotalTokenizeSharedAssets() {
      var request = new types.staking_query_pb.QueryTotalTokenizeSharedAssetsRequest();
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/TotalTokenizeSharedAssets', request, types.staking_query_pb.QueryTotalTokenizeSharedAssetsResponse);
    }

    /**
     * Query for total liquid staked (including tokenized shares or owned by an liquid staking provider)
     * 
     * @returns
     * @since v3.4.0
     */
  }, {
    key: "queryTotalLiquidStaked",
    value: function queryTotalLiquidStaked() {
      var request = new types.staking_query_pb.QueryTotalLiquidStaked();
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/TotalLiquidStaked', request, types.staking_query_pb.QueryTotalLiquidStakedResponse);
    }

    /**
     * Query tokenize share locks
     * 
     * @param address Bech32 address 
     * @returns 
     * @since v3.4.0
     */
  }, {
    key: "queryTokenizeShareLockInfo",
    value: function queryTokenizeShareLockInfo(address) {
      if (is.undefined(address)) {
        throw new _errors.SdkError('address can not be empty');
      }
      var request = new types.staking_query_pb.QueryTokenizeShareLockInfo().setAddress(address);
      return this.client.rpcClient.protoQuery('/cosmos.staking.v1beta1.Query/TokenizeShareLockInfo', request, types.staking_query_pb.QueryTokenizeShareLockInfoResponse);
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
      throw new _errors.SdkError('Not supported', _errors.CODES.Internal);
    }
  }]);
}();