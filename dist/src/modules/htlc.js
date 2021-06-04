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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This module implements HTLC related functions
 *
 *
 * @category Modules
 * @since v0.17
 */
var Htlc = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Htlc(client) {
    (0, _classCallCheck2["default"])(this, Htlc);
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

exports.Htlc = Htlc;