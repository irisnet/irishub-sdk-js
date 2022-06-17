"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Auth = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var is = _interopRequireWildcard(require("is_js"));

var _errors = require("../errors");

var _helper = require("../helper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Auth module is only used to build `StdTx`
 *
 * @category Modules
 * @since v0.17
 */
var Auth = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */

  /** @hidden */
  function Auth(client) {
    (0, _classCallCheck2["default"])(this, Auth);
    (0, _defineProperty2["default"])(this, "client", void 0);
    (0, _defineProperty2["default"])(this, "defaultStdFee", void 0);
    this.client = client;
    this.defaultStdFee = {
      amount: [this.client.config.fee],
      gasLimit: this.client.config.gas
    };
  }
  /**
   * Generate a new `StdTx` which is a standard way to wrap Msgs with Fee and Signatures.
   *
   * **NOTE:** The first signature is the fee payer
   *
   * @param msgs Msgs to be sent
   * @param baseTx Base params of the transaction
   * @param sigs Signatures of the transaction, defaults to []
   * @param memo Memo of the transaction
   *
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Auth, [{
    key: "newStdTx",
    value: function newStdTx(msgs, baseTx) {
      var stdFee = {
        amount: [],
        gasLimit: ''
      };
      Object.assign(stdFee, this.defaultStdFee); // Copy from default std fee

      if (baseTx.fee) {
        stdFee.amount = [baseTx.fee];
      }

      if (baseTx.gas && is.not.empty(baseTx.gas)) {
        stdFee.gasLimit = baseTx.gas;
      }

      var protoTx = new types.ProtoTx({
        msgs: msgs,
        memo: baseTx.memo || '',
        stdFee: stdFee,
        chain_id: baseTx.chainId || this.client.config.chainId,
        account_number: baseTx.account_number || undefined,
        sequence: baseTx.sequence || undefined
      });
      return protoTx;
    }
    /**
     * Account returns account details based on address.
     * @param address defines the address to query for.
     */

  }, {
    key: "queryAccount",
    value: function queryAccount(address) {
      var _this = this;

      if (!address) {
        throw new _errors.SdkError("address can ont be empty");
      }

      var request = new types.auth_query_pb.QueryAccountRequest();
      request.setAddress(address);
      return this.client.rpcClient.protoQuery('/cosmos.auth.v1beta1.Query/Account', request, types.auth_query_pb.QueryAccountResponse).then(function (res) {
        if (res && res.account) {
          res.account = _this.client.protobuf.deserializeAccount(res.account);
        }

        return res;
      });
    }
    /**
     * Accounts returns all the existing accounts
     */

  }, {
    key: "queryAccounts",
    value: function queryAccounts(pagination) {
      var _this2 = this;

      var request = new types.auth_query_pb.QueryAccountsRequest();
      request.setPagination(_helper.ModelCreator.createPaginationModel(pagination));
      return this.client.rpcClient.protoQuery('/cosmos.auth.v1beta1.Query/Accounts', request, types.auth_query_pb.QueryAccountsResponse).then(function (res) {
        if (res && res.accountsList) {
          res.accountsList = res.accountsList.map(function (item) {
            return _this2.client.protobuf.deserializeAccount(item);
          });
        }

        return res;
      });
    }
    /**
     * Params queries all parameters.
     */

  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.auth_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/cosmos.auth.v1beta1.Query/Params', request, types.auth_query_pb.QueryParamsResponse);
    }
  }]);
  return Auth;
}();

exports.Auth = Auth;