"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Coinswap = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Implementation of the [Constant Product Market Maker Model](https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf) token exchange protocol on IRISHub.
 *
 * [More Details](https://www.irisnet.org/docs/features/coinswap.html)
 *
 * @category Modules
 */
var Coinswap = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Coinswap(client) {
    (0, _classCallCheck2["default"])(this, Coinswap);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * add liquidity
   * @param max_token Upper limit of Token of mortgages acceptable to users
   * @param exact_standard_amt Number of standard specified by the user
   * @param min_liquidity The minimum number of liquid securities acceptable to the user
   * @param deadline The validity period of this transaction
   * @param baseTx { types.BaseTx }
   * @returns
   */


  (0, _createClass2["default"])(Coinswap, [{
    key: "addLiquidity",
    value: function () {
      var _addLiquidity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(max_token, exact_standard_amt, min_liquidity, deadline, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgAddLiquidity,
                  value: {
                    max_token: max_token,
                    exact_standard_amt: exact_standard_amt,
                    min_liquidity: min_liquidity,
                    deadline: deadline,
                    sender: sender
                  }
                }];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addLiquidity(_x, _x2, _x3, _x4, _x5) {
        return _addLiquidity.apply(this, arguments);
      }

      return addLiquidity;
    }()
    /**
     * remove liquidity
     * @param withdraw_liquidity The minimum number of liquid securities acceptable to the user
     * @param min_token  Upper limit of Token of mortgages acceptable to users
     * @param min_standard_amt Number of standard specified by the user
     * @param deadline The validity period of this transaction
     * @param baseTx { types.BaseTx }
     * @returns
    */

  }, {
    key: "removeLiquidity",
    value: function () {
      var _removeLiquidity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(withdraw_liquidity, min_token, min_standard_amt, deadline, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgRemoveLiquidity,
                  value: {
                    withdraw_liquidity: withdraw_liquidity,
                    min_token: min_token,
                    min_standard_amt: min_standard_amt,
                    deadline: deadline,
                    sender: sender
                  }
                }];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function removeLiquidity(_x6, _x7, _x8, _x9, _x10) {
        return _removeLiquidity.apply(this, arguments);
      }

      return removeLiquidity;
    }()
    /**
     * swap order
     * @param input The token sold by the user
     * @param output The token that the user buys back
     * @param deadline The validity period of this transaction
     * @param is_buy_order buy or sell
     * @param baseTx { types.BaseTx }
     * @returns
    */

  }, {
    key: "swapOrder",
    value: function () {
      var _swapOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(input, output, is_buy_order, deadline, baseTx) {
        var address, msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgSwapOrder,
                  value: {
                    input: {
                      address: address,
                      coin: input
                    },
                    output: {
                      address: address,
                      coin: output
                    },
                    deadline: deadline,
                    is_buy_order: is_buy_order
                  }
                }];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function swapOrder(_x11, _x12, _x13, _x14, _x15) {
        return _swapOrder.apply(this, arguments);
      }

      return swapOrder;
    }()
    /**
     *
     * Query liquidity by id
     * @param id The liquidity id
     * @returns
    */

  }, {
    key: "queryLiquidity",
    value: function queryLiquidity(id) {
      if (!id) {
        throw new _errors.SdkError("id can ont be empty");
      }

      var request = new types.coinswap_query_pb.QueryLiquidityPoolRequest();
      request.setLptDenom(id);
      return this.client.rpcClient.protoQuery('/irismod.coinswap.Query/LiquidityPool', request, types.coinswap_query_pb.QueryLiquidityPoolResponse);
    }
  }]);
  return Coinswap;
}();

exports.Coinswap = Coinswap;