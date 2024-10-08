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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * Auth module is only used to build `StdTx`
 *
 * @category Modules
 * @since v0.17
 */
var Auth = exports.Auth = /*#__PURE__*/function () {
  /** @hidden */
  function Auth(client) {
    (0, _classCallCheck2["default"])(this, Auth);
    /** @hidden */
    (0, _defineProperty2["default"])(this, "client", void 0);
    /** @hidden */
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
  return (0, _createClass2["default"])(Auth, [{
    key: "newStdTx",
    value: function newStdTx(msgs, baseTx) {
      var _baseTx$account_numbe, _baseTx$sequence;
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
        account_number: (_baseTx$account_numbe = baseTx.account_number) !== null && _baseTx$account_numbe !== void 0 ? _baseTx$account_numbe : undefined,
        sequence: (_baseTx$sequence = baseTx.sequence) !== null && _baseTx$sequence !== void 0 ? _baseTx$sequence : undefined
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
}();