"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bank = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _crypto = require("../utils/crypto");

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

/**
 * This module is mainly used to transfer coins between accounts,
 * query account balances, and provide common offline transaction signing and broadcasting methods.
 * In addition, the available units of tokens in the IRIShub system are defined using [coin-type](https://www.irisnet.org/docs/concepts/coin-type.html).
 *
 * [More Details](https://www.irisnet.org/docs/features/bank.html)
 *
 * @category Modules
 * @since v0.17
 */
var Bank = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Bank(client) {
    (0, _classCallCheck2["default"])(this, Bank);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Query account info from blockchain
   * @param address Bech32 address
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Bank, [{
    key: "queryAccount",
    value: function queryAccount(address) {
      return Promise.all([this.client.rpcClient.abciQuery('custom/auth/account', {
        address: address
      }), this.client.rpcClient.abciQuery('custom/bank/all_balances', {
        address: address
      })]).then(function (res) {
        var acc = res[0];
        var bal = res[1];
        acc.coins = bal;
        return acc;
      });
    }
    /**
     * Send coins
     * @param to Recipient bech32 address
     * @param amount Coins to be sent
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */

  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(to, amount, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_crypto.Crypto.checkAddress(to, this.client.config.bech32Prefix.AccAddr)) {
                  _context.next = 2;
                  break;
                }

                throw new _errors.SdkError('Invalid bech32 address');

              case 2:
                from = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgSend,
                  value: {
                    from_address: from,
                    to_address: to,
                    amount: amount
                  }
                }];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function send(_x, _x2, _x3) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
    /**
     * multiSend coins
     * @param to Recipient bech32 address
     * @param amount Coins to be sent
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */

  }, {
    key: "multiSend",
    value: function () {
      var _multiSend = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(to, amount, baseTx) {
        var from, coins, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_crypto.Crypto.checkAddress(to, this.client.config.bech32Prefix.AccAddr)) {
                  _context2.next = 2;
                  break;
                }

                throw new _errors.SdkError('Invalid bech32 address');

              case 2:
                from = this.client.keys.show(baseTx.from);
                coins = amount;
                msgs = [{
                  type: types.TxType.MsgMultiSend,
                  value: {
                    inputs: [{
                      address: from,
                      coins: coins
                    }],
                    outputs: [{
                      address: to,
                      coins: coins
                    }]
                  }
                }];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function multiSend(_x4, _x5, _x6) {
        return _multiSend.apply(this, arguments);
      }

      return multiSend;
    }()
    /**
     * Balance queries the balance of a single coin for a single account.
     * @param address is the address to query balances for.
     * @param denom is the coin denom to query balances for.
     */

  }, {
    key: "queryBalance",
    value: function queryBalance(address, denom) {
      if (!address) {
        throw new Error("address can ont be empty");
      }

      if (!denom) {
        throw new Error("denom can ont be empty");
      }

      var request = new types.bank_query_pb.QueryBalanceRequest();
      request.setAddress(address);
      request.setDenom(denom);
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/Balance', request, types.bank_query_pb.QueryBalanceResponse);
    }
    /**
     * AllBalances queries the balance of all coins for a single account.
     * @param address is the address to query balances for.
     */

  }, {
    key: "queryAllBalances",
    value: function queryAllBalances(address) {
      if (!address) {
        throw new Error("address can ont be empty");
      }

      var request = new types.bank_query_pb.QueryAllBalancesRequest();
      request.setAddress(address);
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/AllBalances', request, types.bank_query_pb.QueryAllBalancesResponse);
    }
    /**
     * TotalSupply queries the total supply of all coins.
     */

  }, {
    key: "queryTotalSupply",
    value: function queryTotalSupply() {
      var request = new types.bank_query_pb.QueryTotalSupplyRequest();
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/TotalSupply', request, types.bank_query_pb.QueryTotalSupplyResponse);
    }
    /**
     * SupplyOf queries the supply of a single coin.
     * @param denom is the coin denom to query balances for.
     */

  }, {
    key: "querySupplyOf",
    value: function querySupplyOf(denom) {
      if (!denom) {
        throw new Error("denom can ont be empty");
      }

      var request = new types.bank_query_pb.QuerySupplyOfRequest();
      request.setDenom(denom);
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/SupplyOf', request, types.bank_query_pb.QuerySupplyOfResponse);
    }
    /**
     * Params queries the parameters of x/bank module.
     */

  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.bank_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/cosmos.bank.v1beta1.Query/Params', request, types.bank_query_pb.QueryParamsResponse);
    }
    /**
     * Subscribe Send Txs
     * @param conditions Query conditions for the subscription
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */

  }, {
    key: "subscribeSendTx",
    value: function subscribeSendTx(conditions, callback) {
      var queryBuilder = new types.EventQueryBuilder().addCondition(new types.Condition(types.EventKey.Action).eq(types.EventAction.Send));

      if (conditions.from) {
        queryBuilder.addCondition(new types.Condition(types.EventKey.Sender).eq(conditions.from));
      }

      if (conditions.to) {
        queryBuilder.addCondition(new types.Condition(types.EventKey.Recipient).eq(conditions.to));
      }

      var subscription = this.client.eventListener.subscribeTx(queryBuilder, function (error, data) {
        if (error) {
          callback(error);
          return;
        }

        data === null || data === void 0 ? void 0 : data.tx.value.msg.forEach(function (msg) {
          if (msg.type !== 'irishub/bank/Send') return;
          var msgSend = msg;
          var height = data.height;
          var hash = data.hash;
          msgSend.value.inputs.forEach(function (input, index) {
            var from = input.address;
            var to = msgSend.value.outputs[index].address;
            var amount = input.coins;
            callback(undefined, {
              height: height,
              hash: hash,
              from: from,
              to: to,
              amount: amount
            });
          });
        });
      });
      return subscription;
    }
  }]);
  return Bank;
}();

exports.Bank = Bank;