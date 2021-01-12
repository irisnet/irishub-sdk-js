"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorReward = exports.MsgWithdrawDelegatorRewardsAll = exports.MsgSetWithdrawAddress = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = require("./types");

var pbs = _interopRequireWildcard(require("./proto"));

var is = _interopRequireWildcard(require("is_js"));

var _helper = require("../helper");

var _errors = require("../errors");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Msg struct for changing the withdraw address for a delegator (or validator self-delegation)
 * @hidden
 */
var MsgSetWithdrawAddress = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgSetWithdrawAddress, _Msg);

  var _super = _createSuper(MsgSetWithdrawAddress);

  function MsgSetWithdrawAddress(msg) {
    var _this;

    (0, _classCallCheck2["default"])(this, MsgSetWithdrawAddress);
    _this = _super.call(this, _types.TxType.MsgSetWithdrawAddress);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = msg;
    return _this;
  }

  (0, _createClass2["default"])(MsgSetWithdrawAddress, [{
    key: "getModel",
    value: function getModel() {
      return new (this.constructor.getModelClass())().setDelegatorAddress(this.value.delegator_address).setWithdrawAddress(this.value.withdraw_address);
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
      if (is.empty(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }

      if (is.empty(this.value.withdraw_address)) {
        throw new _errors.SdkError("withdraw address can not be empty");
      }

      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgSetWithdrawAddress;
    }
  }]);
  return MsgSetWithdrawAddress;
}(_types.Msg);
/**
 * Msg struct for delegation withdraw for all of the delegator's delegations
 * @hidden
 */


exports.MsgSetWithdrawAddress = MsgSetWithdrawAddress;

var MsgWithdrawDelegatorRewardsAll = /*#__PURE__*/function (_Msg2) {
  (0, _inherits2["default"])(MsgWithdrawDelegatorRewardsAll, _Msg2);

  var _super2 = _createSuper(MsgWithdrawDelegatorRewardsAll);

  function MsgWithdrawDelegatorRewardsAll(delegatorAddr) {
    var _this2;

    (0, _classCallCheck2["default"])(this, MsgWithdrawDelegatorRewardsAll);
    _this2 = _super2.call(this, 'irishub/distr/MsgWithdrawDelegationRewardsAll');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "value", void 0);
    _this2.value = {
      delegator_addr: delegatorAddr
    };
    return _this2;
  }

  (0, _createClass2["default"])(MsgWithdrawDelegatorRewardsAll, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgWithdrawDelegatorRewardsAll;
}(_types.Msg);
/**
 * Msg struct for delegation withdraw from a single validator
 * @hidden
 */


exports.MsgWithdrawDelegatorRewardsAll = MsgWithdrawDelegatorRewardsAll;

var MsgWithdrawDelegatorReward = /*#__PURE__*/function (_Msg3) {
  (0, _inherits2["default"])(MsgWithdrawDelegatorReward, _Msg3);

  var _super3 = _createSuper(MsgWithdrawDelegatorReward);

  function MsgWithdrawDelegatorReward(msg) {
    var _this3;

    (0, _classCallCheck2["default"])(this, MsgWithdrawDelegatorReward);
    _this3 = _super3.call(this, _types.TxType.MsgWithdrawDelegatorReward);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "value", void 0);
    _this3.value = msg;
    return _this3;
  }

  (0, _createClass2["default"])(MsgWithdrawDelegatorReward, [{
    key: "getModel",
    value: function getModel() {
      return new (this.constructor.getModelClass())().setDelegatorAddress(this.value.delegator_address).setValidatorAddress(this.value.validator_address);
    }
  }, {
    key: "validate",

    /**
     * validate necessary params
     *
     * @return whether is is validated
     * @throws `SdkError` if validate failed.
     */
    value: function validate() {
      if (is.empty(this.value.delegator_address)) {
        throw new _errors.SdkError("delegator address can not be empty");
      }

      if (is.empty(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }

      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgWithdrawDelegatorReward;
    }
  }]);
  return MsgWithdrawDelegatorReward;
}(_types.Msg);
/**
 * Msg struct forWithdraw Validator Commission.
 * @hidden
 */


exports.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;

var MsgWithdrawValidatorCommission = /*#__PURE__*/function (_Msg4) {
  (0, _inherits2["default"])(MsgWithdrawValidatorCommission, _Msg4);

  var _super4 = _createSuper(MsgWithdrawValidatorCommission);

  function MsgWithdrawValidatorCommission(msg) {
    var _this4;

    (0, _classCallCheck2["default"])(this, MsgWithdrawValidatorCommission);
    _this4 = _super4.call(this, _types.TxType.MsgWithdrawValidatorCommission);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "value", void 0);
    _this4.value = msg;
    return _this4;
  }

  (0, _createClass2["default"])(MsgWithdrawValidatorCommission, [{
    key: "getModel",
    value: function getModel() {
      return new (this.constructor.getModelClass())().setValidatorAddress(this.value.validator_address);
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
      if (is.empty(this.value.validator_address)) {
        throw new _errors.SdkError("validator address can not be empty");
      }

      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgWithdrawValidatorCommission;
    }
  }]);
  return MsgWithdrawValidatorCommission;
}(_types.Msg);
/**
 * Msg struct Msg Fund Community Pool.
 * @hidden
 */


exports.MsgWithdrawValidatorCommission = MsgWithdrawValidatorCommission;

var MsgFundCommunityPool = /*#__PURE__*/function (_Msg5) {
  (0, _inherits2["default"])(MsgFundCommunityPool, _Msg5);

  var _super5 = _createSuper(MsgFundCommunityPool);

  function MsgFundCommunityPool(msg) {
    var _this5;

    (0, _classCallCheck2["default"])(this, MsgFundCommunityPool);
    _this5 = _super5.call(this, _types.TxType.MsgFundCommunityPool);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "value", void 0);
    _this5.value = msg;
    return _this5;
  }

  (0, _createClass2["default"])(MsgFundCommunityPool, [{
    key: "getModel",
    value: function getModel() {
      var msg = new (this.constructor.getModelClass())();
      msg.setDepositor(this.value.depositor);
      this.value.amount.forEach(function (item) {
        msg.addAmount(_helper.TxModelCreator.createCoinModel(item.denom, item.amount));
      });
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
      if (is.empty(this.value.depositor)) {
        throw new _errors.SdkError("depositor can not be empty");
      }

      if (!(this.value.amount && this.value.amount.length)) {
        throw new _errors.SdkError("amount can not be empty");
      }

      return true;
    }
  }], [{
    key: "getModelClass",
    value: function getModelClass() {
      return pbs.distribution_tx_pb.MsgFundCommunityPool;
    }
  }]);
  return MsgFundCommunityPool;
}(_types.Msg); // /**
//  * Msg struct for validator withdraw
//  * @hidden
//  */
// export class MsgWithdrawValidatorRewardsAll extends Msg {
//   value: {
//     validator_addr: string;
//   };
//   constructor(validatorAddr: string) {
//     super('irishub/distr/MsgWithdrawValidatorRewardsAll')
//     this.value = {
//       validator_addr: validatorAddr,
//     };
//   }
//   getSignBytes(): object {
//     return this;
//   }
// }

/** Common rewards struct */


exports.MsgFundCommunityPool = MsgFundCommunityPool;