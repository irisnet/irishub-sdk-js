"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Htlc = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _crypto = require("../utils/crypto");
var types = _interopRequireWildcard(require("../types"));
var _errors = require("../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * This module implements HTLC related functions
 *
 *
 * @category Modules
 * @since v0.17
 */
var Htlc = exports.Htlc = /*#__PURE__*/function () {
  /** @hidden */
  function Htlc(client) {
    (0, _classCallCheck2["default"])(this, Htlc);
    /** @hidden */
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }

  /**
   * create an HTLC
   * @param {Object} param {
   *  sender
   *  to
   *  receiver_on_other_chain
   *  sender_on_other_chain
   *  amount
   *  hash_lock
   *  timestamp
   *  time_lock
   *  transfer
   *  }
   *  @param baseTx { types.BaseTx }
   */
  (0, _createClass2["default"])(Htlc, [{
    key: "createHTLC",
    value: function createHTLC(param, baseTx) {
      if (!_crypto.Crypto.checkAddress(param.to, this.client.config.bech32Prefix.AccAddr)) {
        throw new _errors.SdkError('Invalid bech32 address');
      }
      var from = this.client.keys.show(baseTx.from);
      var msgs = [{
        type: types.TxType.MsgCreateHTLC,
        value: _objectSpread({}, param)
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * claim an HTLC
     * @param sender
     * @param id
     * @param secret
     * @param baseTx
     */
  }, {
    key: "claimHTLC",
    value: function claimHTLC(sender, id, secret, baseTx) {
      var msgs = [{
        type: types.TxType.MsgClaimHTLC,
        value: {
          sender: sender,
          id: id,
          secret: secret
        }
      }];
      return this.client.tx.buildAndSend(msgs, baseTx);
    }

    /**
     * HTLC queries the HTLC by the specified hash lock
     * @type id
     */
  }, {
    key: "queryHTLC",
    value: function queryHTLC(id) {
      if (!id) {
        throw new _errors.SdkError("id can ont be empty");
      }
      var request = new types.htlc_query_pb.QueryHTLCRequest();
      request.setId(id);
      return this.client.rpcClient.protoQuery('/irismod.htlc.Query/HTLC', request, types.htlc_query_pb.QueryHTLCResponse);
    }

    /**
     * AssetSupply queries the supply of an asset
     * @type denom
     */
  }, {
    key: "queryAssetSupply",
    value: function queryAssetSupply(denom) {
      if (!denom) {
        throw new _errors.SdkError("denom can ont be empty");
      }
      var request = new types.htlc_query_pb.QueryAssetSupplyRequest();
      request.setDenom(denom);
      return this.client.rpcClient.protoQuery('/irismod.htlc.Query/AssetSupply', request, types.htlc_query_pb.QueryAssetSupplyResponse);
    }

    /**
     * AssetSupplies queries the supplies of all assets
     */
  }, {
    key: "queryAssetSupplies",
    value: function queryAssetSupplies() {
      var request = new types.htlc_query_pb.QueryAssetSuppliesRequest();
      return this.client.rpcClient.protoQuery('/irismod.htlc.Query/AssetSupplies', request, types.htlc_query_pb.QueryAssetSuppliesResponse);
    }

    /**
     * Params queries the htlc parameters
     */
  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.htlc_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/irismod.htlc.Query/Params', request, types.htlc_query_pb.QueryParamsResponse);
    }
  }]);
  return Htlc;
}();