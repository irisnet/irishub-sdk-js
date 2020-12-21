"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slashing = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slashing = require("../types/slashing");

var _errors = require("../errors");

var _utils = require("../utils");

var Bech32 = _interopRequireWildcard(require("bech32"));

/**
 * In Proof-of-Stake blockchain, validators will get block provisions by staking their token.
 * But if they failed to keep online, they will be punished by slashing a small portion of their staked tokens.
 * The offline validators will be removed from the validator set and put into jail, which means their voting power is zero.
 * During the jail period, these nodes are not even validator candidates. Once the jail period ends, they can send [[unjail]] transactions to free themselves and become validator candidates again.
 *
 * [More Details](https://www.irisnet.org/docs/features/slashing.html)
 *
 * @category Modules
 */
var Slashing = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Slashing(client) {
    (0, _classCallCheck2["default"])(this, Slashing);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Query on-chain parameters of Slashing
   * @returns
   * @since v1.0
   */


  (0, _createClass2["default"])(Slashing, [{
    key: "queryParams",
    value: function queryParams() {
      // return this.client.rpcClient.abciQuery<types.SlashingParams>(
      //   'custom/slashing/parameters'
      // );
      throw new _errors.SdkError('Not supported');
    }
    /**
     * Query a validator's signing information
     * @param bech32ConsAddress Bech32 prefixed validator consensus address
     * @param height Block height to query, omit to get most recent provable block
     * @returns
     * @since v0.17
     */

  }, {
    key: "querySigningInfo",
    value: function querySigningInfo(bech32ConsAddress, height) {
      var _this = this;

      var key = _utils.StoreKeys.getSigningInfoKey(bech32ConsAddress);

      console.log('key:', key);
      return this.client.rpcClient.queryStore(key, 'slashing', height).then(function (res) {
        if (!res || !res.response || !res.response.value) {
          throw new _errors.SdkError('Validator not found');
        }

        return _this.client.protobuf.deserializeSigningInfo(res.response.value);
      });
    }
    /**
     * Unjail a validator previously jailed
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "unjail",
    value: function () {
      var _unjail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(baseTx) {
        var val, words, validatorAddr, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                val = this.client.keys.show(baseTx.from);
                words = Bech32.decode(val).words;
                validatorAddr = Bech32.encode(this.client.config.bech32Prefix.ValAddr, words);
                msgs = [new _slashing.MsgUnjail(validatorAddr)];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function unjail(_x) {
        return _unjail.apply(this, arguments);
      }

      return unjail;
    }()
  }]);
  return Slashing;
}();

exports.Slashing = Slashing;