"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgValidatorBond = exports.MsgUndelegate = exports.MsgUnbondValidator = exports.MsgTransferTokenizeShareRecord = exports.MsgTokenizeShares = exports.MsgRedelegate = exports.MsgRedeemTokensForShares = exports.MsgEnableTokenizeShares = exports.MsgEditValidator = exports.MsgDisableTokenizeShares = exports.MsgDelegate = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _types = require("./types");
var _helper = require("../helper");
var pbs = _interopRequireWildcard(require("./proto"));
var is = _interopRequireWildcard(require("is_js"));
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Validator details */
/** Validator commission */
/** Validator basic information */
/** Staking statistics */
/**
 * TokenizeShareRecord represents a tokenized delegation
 */
/**
 * Gov params for Staking module
 *
 * [More Details](https://www.irisnet.org/docs/concepts/gov-params.html#parameters-in-stake)
 */
/** Delegation information */
/** UnbondingDelegation information */
/** Redelegation information */
/**
 * param struct for delegate tx
 */
/**
 * param struct for undelegate tx
 */
/**
 * param struct for redelegate tx
 */
/**
 * Msg struct for delegating to a validator
 * @hidden
 */
var MsgDelegate = exports.MsgDelegate = /*#__PURE__*/function (_Msg) {
  function MsgDelegate(msg) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgDelegate);
    _this = _callSuper(this, MsgDelegate, [_types.TxType.MsgDelegate]);
    _this.value = msg;
    return _this;
  }
  (0, _inherits2["default"])(MsgDelegate, _Msg);
  return (0, _createClass2["default"])(MsgDelegate, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address).setValidatorAddress(this.value.validator_address).setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.undefined(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgDelegate;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for undelegating from a validator
 * @hidden
 */
var MsgUndelegate = exports.MsgUndelegate = /*#__PURE__*/function (_Msg2) {
  function MsgUndelegate(msg) {
    var _this2;
    (0, _classCallCheck2["default"])(this, MsgUndelegate);
    _this2 = _callSuper(this, MsgUndelegate, [_types.TxType.MsgUndelegate]);
    _this2.value = msg;
    return _this2;
  }
  (0, _inherits2["default"])(MsgUndelegate, _Msg2);
  return (0, _createClass2["default"])(MsgUndelegate, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address).setValidatorAddress(this.value.validator_address).setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.undefined(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgUndelegate;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for redelegating illiquid tokens from one validator to another
 * @hidden
 */
var MsgRedelegate = exports.MsgRedelegate = /*#__PURE__*/function (_Msg3) {
  function MsgRedelegate(msg) {
    var _this3;
    (0, _classCallCheck2["default"])(this, MsgRedelegate);
    _this3 = _callSuper(this, MsgRedelegate, [_types.TxType.MsgBeginRedelegate]);
    _this3.value = msg;
    return _this3;
  }
  (0, _inherits2["default"])(MsgRedelegate, _Msg3);
  return (0, _createClass2["default"])(MsgRedelegate, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address).setValidatorSrcAddress(this.value.validator_src_address).setValidatorDstAddress(this.value.validator_dst_address).setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.undefined(this.value.validator_src_address)) {
        throw new _errors.SdkError("source validator address can not be empty");
      }
      if (is.undefined(this.value.validator_dst_address)) {
        throw new _errors.SdkError("destination validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgBeginRedelegate;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for updating validator informations
 * @hidden
 */
var MsgEditValidator = exports.MsgEditValidator = /*#__PURE__*/function (_Msg4) {
  function MsgEditValidator(description, address, commissionRate) {
    var _this4;
    (0, _classCallCheck2["default"])(this, MsgEditValidator);
    _this4 = _callSuper(this, MsgEditValidator, ['irishub/stake/MsgEditValidator']);
    _this4.value = {
      Description: description,
      address: address,
      commission_rate: commissionRate
    };
    return _this4;
  }
  (0, _inherits2["default"])(MsgEditValidator, _Msg4);
  return (0, _createClass2["default"])(MsgEditValidator, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this.value;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for tokenizeing a delegation
 */
var MsgTokenizeShares = exports.MsgTokenizeShares = /*#__PURE__*/function (_Msg5) {
  function MsgTokenizeShares(value) {
    var _this5;
    (0, _classCallCheck2["default"])(this, MsgTokenizeShares);
    _this5 = _callSuper(this, MsgTokenizeShares, [_types.TxType.MsgTokenizeShares]);
    _this5.value = value;
    return _this5;
  }
  (0, _inherits2["default"])(MsgTokenizeShares, _Msg5);
  return (0, _createClass2["default"])(MsgTokenizeShares, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address).setValidatorAddress(this.value.validator_address).setTokenizedShareOwner(this.value.tokenized_share_owner).setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.undefined(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }
      if (is.undefined(this.value.tokenized_share_owner)) {
        throw new _errors.SdkError("tokenized share owner can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgTokenizeShares;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for redeeming a tokenized share back into a native delegation
 */
var MsgRedeemTokensForShares = exports.MsgRedeemTokensForShares = /*#__PURE__*/function (_Msg6) {
  function MsgRedeemTokensForShares(value) {
    var _this6;
    (0, _classCallCheck2["default"])(this, MsgRedeemTokensForShares);
    _this6 = _callSuper(this, MsgRedeemTokensForShares, [_types.TxType.MsgRedeemTokensForShares]);
    _this6.value = value;
    return _this6;
  }
  (0, _inherits2["default"])(MsgRedeemTokensForShares, _Msg6);
  return (0, _createClass2["default"])(MsgRedeemTokensForShares, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address).setAmount(_helper.TxModelCreator.createCoinModel(this.value.amount.denom, this.value.amount.amount));
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgRedeemTokensForShares;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for transfering a tokenize share record
 */
var MsgTransferTokenizeShareRecord = exports.MsgTransferTokenizeShareRecord = /*#__PURE__*/function (_Msg7) {
  function MsgTransferTokenizeShareRecord(value) {
    var _this7;
    (0, _classCallCheck2["default"])(this, MsgTransferTokenizeShareRecord);
    _this7 = _callSuper(this, MsgTransferTokenizeShareRecord, [_types.TxType.MsgTransferTokenizeShareRecord]);
    _this7.value = value;
    return _this7;
  }
  (0, _inherits2["default"])(MsgTransferTokenizeShareRecord, _Msg7);
  return (0, _createClass2["default"])(MsgTransferTokenizeShareRecord, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setTokenizeShareRecordId(this.value.tokenize_share_record_id).setSender(this.value.sender).setNewOwner(this.value.new_owner);
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.tokenize_share_record_id)) {
        throw new _errors.SdkError("tokenize share record id can not be empty");
      }
      if (is.undefined(this.value.sender)) {
        throw new _errors.SdkError('sender address can not be empty');
      }
      if (is.undefined(this.value.new_owner)) {
        throw new _errors.SdkError('new owner address can not be empty');
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgTransferTokenizeShareRecord;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for preventing the tokenization of shares
 */
var MsgDisableTokenizeShares = exports.MsgDisableTokenizeShares = /*#__PURE__*/function (_Msg8) {
  function MsgDisableTokenizeShares(value) {
    var _this8;
    (0, _classCallCheck2["default"])(this, MsgDisableTokenizeShares);
    _this8 = _callSuper(this, MsgDisableTokenizeShares, [_types.TxType.MsgDisableTokenizeShares]);
    _this8.value = value;
    return _this8;
  }
  (0, _inherits2["default"])(MsgDisableTokenizeShares, _Msg8);
  return (0, _createClass2["default"])(MsgDisableTokenizeShares, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address);
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgDisableTokenizeShares;
    }
  }]);
}(_types.Msg);
/**
 * Msg struct for re-enabling tokenization of shares for a given address
 */
var MsgEnableTokenizeShares = exports.MsgEnableTokenizeShares = /*#__PURE__*/function (_Msg9) {
  function MsgEnableTokenizeShares(value) {
    var _this9;
    (0, _classCallCheck2["default"])(this, MsgEnableTokenizeShares);
    _this9 = _callSuper(this, MsgEnableTokenizeShares, [_types.TxType.MsgEnableTokenizeShares]);
    _this9.value = value;
    return _this9;
  }
  (0, _inherits2["default"])(MsgEnableTokenizeShares, _Msg9);
  return (0, _createClass2["default"])(MsgEnableTokenizeShares, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address);
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgEnableTokenizeShares;
    }
  }]);
}(_types.Msg);
var MsgValidatorBond = exports.MsgValidatorBond = /*#__PURE__*/function (_Msg10) {
  function MsgValidatorBond(value) {
    var _this10;
    (0, _classCallCheck2["default"])(this, MsgValidatorBond);
    _this10 = _callSuper(this, MsgValidatorBond, [_types.TxType.MsgValidatorBond]);
    _this10.value = value;
    return _this10;
  }
  (0, _inherits2["default"])(MsgValidatorBond, _Msg10);
  return (0, _createClass2["default"])(MsgValidatorBond, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDelegatorAddress(this.value.delegator_address).setValidatorAddress(this.value.validator_address);
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }
      if (is.undefined(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgValidatorBond;
    }
  }]);
}(_types.Msg);
var MsgUnbondValidator = exports.MsgUnbondValidator = /*#__PURE__*/function (_Msg11) {
  function MsgUnbondValidator(value) {
    var _this11;
    (0, _classCallCheck2["default"])(this, MsgUnbondValidator);
    _this11 = _callSuper(this, MsgUnbondValidator, [_types.TxType.MsgUnbondValidator]);
    _this11.value = value;
    return _this11;
  }
  (0, _inherits2["default"])(MsgUnbondValidator, _Msg11);
  return (0, _createClass2["default"])(MsgUnbondValidator, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setValidatorAddress(this.value.validator_address);
      return msg;
    }

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
  }, {
    key: "validate",
    value: function validate() {
      if (is.undefined(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }
      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.staking_tx_pb.MsgUnbondValidator;
    }
  }]);
}(_types.Msg);