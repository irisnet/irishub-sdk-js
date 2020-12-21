"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tendermint = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = require("../types");

var _utils = require("../utils");

var hexEncoding = _interopRequireWildcard(require("crypto-js/enc-hex"));

var base64Encoding = _interopRequireWildcard(require("crypto-js/enc-base64"));

/**
 * Tendermint module provides tendermint rpc queriers implementation
 *
 * @category Modules
 * @since v0.17
 */
var Tendermint = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Tendermint(client) {
    (0, _classCallCheck2["default"])(this, Tendermint);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Get a block info at a certain height or the latest height
   * @param height The block height
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Tendermint, [{
    key: "queryBlock",
    value: function queryBlock(height) {
      var _this = this;

      var params = height ? {
        height: String(height)
      } : {};
      return this.client.rpcClient.request(_types.RpcMethods.Block, params).then(function (res) {
        // Decode txs
        if (res.block && res.block.data && res.block.data.txs) {
          var txs = res.block.data.txs;
          var decodedTxs = new Array();
          txs.forEach(function (msg) {
            decodedTxs.push(_this.client.protobuf.deserializeTx(msg));
          });
          res.block.data.txs = decodedTxs;
        }

        return res;
      });
    }
    /**
     * Get a block result at a certain height or the latest height
     * @param height The block height
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryBlockResult",
    value: function queryBlockResult(height) {
      var params = height ? {
        height: String(height)
      } : {};
      return this.client.rpcClient.request(_types.RpcMethods.BlockResults, params).then(function (res) {
        // Decode tags
        if (res.results) {
          var deliverTxs = res.results.DeliverTx;

          if (deliverTxs) {
            deliverTxs.forEach(function (deliverTx, index) {
              res.results.DeliverTx[index].tags = _utils.Utils.decodeTags(deliverTx.tags);
            });
          }

          var endBlock = res.results.EndBlock;

          if (endBlock) {
            res.results.EndBlock.tags = _utils.Utils.decodeTags(endBlock.tags);
          }

          var beginBlock = res.results.BeginBlock;

          if (beginBlock) {
            res.results.BeginBlock.tags = _utils.Utils.decodeTags(beginBlock.tags);
          }
        }

        return res;
      });
    }
    /**
     * Query tx info by hash
     * @param hash The tx hash
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryTx",
    value: function queryTx(hash) {
      var _this2 = this;

      return this.client.rpcClient.request(_types.RpcMethods.Tx, {
        hash: base64Encoding.stringify(hexEncoding.parse(hash))
      }).then(function (res) {
        // Decode tags and tx
        res.tx_result.tags = _utils.Utils.decodeTags(res.tx_result.tags);
        res.tx = _this2.client.protobuf.deserializeTx(res.tx);
        return res;
      });
    }
    /**
     * Query validator set at a certain height or the latest height
     * @param height The block height
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryValidators",
    value: function queryValidators(height) {
      var _this3 = this;

      var params = height ? {
        height: String(height)
      } : {};
      return this.client.rpcClient.request(_types.RpcMethods.Validators, params).then(function (res) {
        var result = {
          block_height: res.block_height,
          validators: []
        };

        if (res.validators) {
          res.validators.forEach(function (v) {
            var bech32Address = _utils.Crypto.encodeAddress(v.address, _this3.client.config.bech32Prefix.ConsAddr);

            var bech32Pubkey = _utils.Crypto.encodeAddress(_utils.Utils.ab2hexstring(_utils.Crypto.aminoMarshalPubKey(v.pub_key, false)), _this3.client.config.bech32Prefix.ConsPub);

            result.validators.push({
              bech32_address: bech32Address,
              bech32_pubkey: bech32Pubkey,
              address: v.address,
              pub_key: v.pub_key,
              voting_power: v.voting_power,
              proposer_priority: v.proposer_priority
            });
          });
        }

        return result;
      });
    }
    /**
     * Search txs
     *
     * **Note:** Known issues on pagination
     *
     * @returns
     * @since v0.17
     */

  }, {
    key: "searchTxs",
    value: function searchTxs(conditions, page, size) {
      var _this4 = this;

      return this.client.rpcClient.request(_types.RpcMethods.TxSearch, {
        query: conditions.build(),
        page: page,
        per_page: size
      }).then(function (res) {
        if (res.txs) {
          var txs = []; // Decode tags and txs

          res.txs.forEach(function (tx) {
            tx.tx_result.tags = _utils.Utils.decodeTags(tx.tx_result.tags);
            tx.tx = _this4.client.protobuf.deserializeTx(tx.tx);
            txs.push(tx);
          });
          res.txs = txs;
        }

        return res;
      });
    }
  }]);
  return Tendermint;
}();

exports.Tendermint = Tendermint;