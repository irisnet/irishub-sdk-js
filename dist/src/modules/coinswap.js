"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Coinswap = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mathjs = _interopRequireWildcard(require("mathjs"));

var is = _interopRequireWildcard(require("is_js"));

var _types = require("../types");

var _errors = require("../errors");

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

  /** @hidden */

  /** @hidden */

  /** @hidden */
  function Coinswap(client) {
    (0, _classCallCheck2["default"])(this, Coinswap);
    (0, _defineProperty2["default"])(this, "client", void 0);
    (0, _defineProperty2["default"])(this, "formatUniABSPrefix", 'uni:');
    (0, _defineProperty2["default"])(this, "mathConfig", {
      number: 'BigNumber',
      // Choose 'number' (default), 'BigNumber', or 'Fraction'
      precision: 64 // 64 by default, only applicable for BigNumbers

    });
    (0, _defineProperty2["default"])(this, "math", void 0);
    this.client = client;
    this.math = mathjs.create(mathjs.all, this.mathConfig);
  }
  /**
   *
   * Query liquidity by id
   * @param id The liquidity id
   * @returns
   * @since v1.0
   */


  (0, _createClass2["default"])(Coinswap, [{
    key: "queryLiquidity",
    value: function queryLiquidity(id) {
      return this.client.rpcClient.abciQuery('custom/coinswap/liquidity', {
        id: id
      });
    }
    /**
     * Add liquidity by exact iris amount, calculated token and liquidity amount
     * @param request Add liquidity request
     * @param baseTx
     * @returns
     * @since v1.0
     */

  }, {
    key: "deposit",
    value: function () {
      var _deposit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                from = this.client.keys.show(baseTx.from);
                msgs = [new _types.MsgAddLiquidity(request, from)];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deposit(_x, _x2) {
        return _deposit.apply(this, arguments);
      }

      return deposit;
    }()
    /**
     * Remove liquidity by exact liquidity amount, calculated iris and token amount
     * @param request Remove liquidity request
     * @param baseTx
     * @returns
     * @since v1.0
     */

  }, {
    key: "withdraw",
    value: function () {
      var _withdraw = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                from = this.client.keys.show(baseTx.from);
                msgs = [new _types.MsgRemoveLiquidity(request, from)];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function withdraw(_x3, _x4) {
        return _withdraw.apply(this, arguments);
      }

      return withdraw;
    }()
    /**
     * Swap coin by exact output, calculated input
     * @param request Buy order request
     * @param baseTx
     * @returns
     * @since v1.0
     */

  }, {
    key: "buy",
    value: function () {
      var _buy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(request, baseTx) {
        var msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                msgs = [new _types.MsgSwapOrder(request, true)];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function buy(_x5, _x6) {
        return _buy.apply(this, arguments);
      }

      return buy;
    }()
    /**
     * Swap coin by exact input, calculated output
     * @param request Sell order request
     * @param baseTx
     * @returns
     * @since v1.0
     */

  }, {
    key: "sell",
    value: function () {
      var _sell = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(request, baseTx) {
        var msgs;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                msgs = [new _types.MsgSwapOrder(request, true)];
                return _context4.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sell(_x7, _x8) {
        return _sell.apply(this, arguments);
      }

      return sell;
    }()
  }, {
    key: "getUniDenomFromDenoms",
    value: function getUniDenomFromDenoms(denom1, denom2) {
      if (denom1 === denom2) {
        throw new _errors.SdkError('input and output denomination are equal');
      }

      if (denom1 !== _types.STD_DENOM && denom2 !== _types.STD_DENOM) {
        throw new _errors.SdkError("standard denom: '".concat(_types.STD_DENOM, "', denom1: '").concat(denom1, "', denom2: '").concat(denom2, "'"));
      }

      if (denom1 === _types.STD_DENOM) {
        return this.formatUniABSPrefix + denom2;
      }

      return this.formatUniABSPrefix + denom1;
    }
    /**
     * Calculate the amount of another token to be received based on the exact amount of tokens sold
     * @param exactSoldCoin sold coin
     * @param soldTokenDenom received token's denom
     * @returns output token amount to be received
     * @since v1.0
     */

  }, {
    key: "calculateWithExactInput",
    value: function () {
      var _calculateWithExactInput = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(exactSoldCoin, boughtTokenDenom) {
        var uniDenom, reservePool, inputReserve, outputReserve, boughtAmt;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(exactSoldCoin.denom !== _types.STD_DENOM && boughtTokenDenom !== _types.STD_DENOM)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return", this.calculateDoubleWithExactInput(exactSoldCoin, boughtTokenDenom));

              case 2:
                uniDenom = this.getUniDenomFromDenoms(exactSoldCoin.denom, boughtTokenDenom);
                _context5.next = 5;
                return this.queryLiquidity(uniDenom);

              case 5:
                reservePool = _context5.sent;

                if (reservePool.standard.denom === exactSoldCoin.denom) {
                  inputReserve = Number(reservePool.standard.amount);
                  outputReserve = Number(reservePool.token.amount);
                } else {
                  inputReserve = Number(reservePool.token.amount);
                  outputReserve = Number(reservePool.standard.amount);
                }

                if (!is.not.positive(inputReserve)) {
                  _context5.next = 9;
                  break;
                }

                throw new _errors.SdkError("liquidity pool insufficient funds: ['".concat(inputReserve).concat(exactSoldCoin.denom, "']"));

              case 9:
                if (!is.not.positive(outputReserve)) {
                  _context5.next = 11;
                  break;
                }

                throw new _errors.SdkError("liquidity pool insufficient funds: ['".concat(outputReserve).concat(boughtTokenDenom, "']"));

              case 11:
                boughtAmt = this.getInputPrice(Number(exactSoldCoin.amount), inputReserve, outputReserve, Number(reservePool.fee));

                if (!is.above(Number(boughtAmt), outputReserve)) {
                  _context5.next = 14;
                  break;
                }

                throw new _errors.SdkError("liquidity pool insufficient balance of '".concat(boughtTokenDenom, "', only bought: '").concat(outputReserve, "', got: '").concat(inputReserve, "'"));

              case 14:
                return _context5.abrupt("return", boughtAmt);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function calculateWithExactInput(_x9, _x10) {
        return _calculateWithExactInput.apply(this, arguments);
      }

      return calculateWithExactInput;
    }()
    /**
     * Calculate the amount of the token to be paid based on the exact amount of the token to be bought
     * @param exactBoughtCoin
     * @param soldTokenDenom
     * @return: input amount to be paid
     * @since v1.0
     */

  }, {
    key: "calculateWithExactOutput",
    value: function () {
      var _calculateWithExactOutput = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(exactBoughtCoin, soldTokenDenom) {
        var uniDenom, reservePool, inputReserve, outputReserve, paidAmt;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(exactBoughtCoin.denom !== _types.STD_DENOM && soldTokenDenom !== _types.STD_DENOM)) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return", this.calculateDoubleWithExactOutput(exactBoughtCoin, soldTokenDenom));

              case 2:
                uniDenom = this.getUniDenomFromDenoms(exactBoughtCoin.denom, soldTokenDenom);
                _context6.next = 5;
                return this.queryLiquidity(uniDenom);

              case 5:
                reservePool = _context6.sent;

                if (reservePool.standard.denom === soldTokenDenom) {
                  inputReserve = Number(reservePool.standard.amount);
                  outputReserve = Number(reservePool.token.amount);
                } else {
                  inputReserve = Number(reservePool.token.amount);
                  outputReserve = Number(reservePool.standard.amount);
                }

                if (!is.not.positive(inputReserve)) {
                  _context6.next = 9;
                  break;
                }

                throw new _errors.SdkError("liquidity pool insufficient funds, actual ['".concat(inputReserve).concat(soldTokenDenom, "']"));

              case 9:
                if (!is.not.positive(outputReserve)) {
                  _context6.next = 11;
                  break;
                }

                throw new _errors.SdkError("liquidity pool insufficient funds, actual ['".concat(outputReserve).concat(exactBoughtCoin.denom, "']"));

              case 11:
                if (!is.above(Number(exactBoughtCoin.amount), outputReserve)) {
                  _context6.next = 13;
                  break;
                }

                throw new _errors.SdkError("liquidity pool insufficient balance of '".concat(exactBoughtCoin.denom, "', user expected: '").concat(exactBoughtCoin.amount, "', got: '").concat(outputReserve, "'"));

              case 13:
                paidAmt = this.getOutputPrice(Number(exactBoughtCoin.amount), inputReserve, outputReserve, Number(reservePool.fee));

                if (!is.infinite(paidAmt)) {
                  _context6.next = 16;
                  break;
                }

                throw new _errors.SdkError("infinite amount of '".concat(soldTokenDenom, "' is required"));

              case 16:
                return _context6.abrupt("return", paidAmt);

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function calculateWithExactOutput(_x11, _x12) {
        return _calculateWithExactOutput.apply(this, arguments);
      }

      return calculateWithExactOutput;
    }()
    /**
     * Calculate token amount and liquidity amount of the deposit request by exact standard token amount
     * @param exactStdAmt Exact standard token amount to be deposited
     * @param calculatedDenom The token denom being calculated
     * @returns The [[DepositRequest]], max_token = -1 means the liquidity pool is empty, users can deposit any amount of the token
     * @since v1.0
     */

  }, {
    key: "calculateDeposit",
    value: function () {
      var _calculateDeposit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(exactStdAmt, calculatedDenom) {
        var reservePool, depositRequest, deltaTokenAmt;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.queryLiquidity(this.getUniDenomFromDenoms(_types.STD_DENOM, calculatedDenom));

              case 2:
                reservePool = _context7.sent;
                // Initiate default deposit request, max_token = -1 means the liquidity pool is empty, users can deposit any amount of the token
                depositRequest = {
                  exact_standard_amt: exactStdAmt,
                  max_token: {
                    denom: calculatedDenom,
                    amount: '-1'
                  },
                  min_liquidity: exactStdAmt,
                  deadline: 10000 // default 10s

                };

                if (is.positive(Number(reservePool.standard.amount)) && is.positive(Number(reservePool.token.amount))) {
                  // ∆t = ⌊(∆i/i) * t⌋ + 1
                  deltaTokenAmt = this.math.floor(this.math.multiply(this.math.divide(exactStdAmt, Number(reservePool.standard.amount)), Number(reservePool.token.amount))) + 1;
                  depositRequest.max_token = {
                    denom: calculatedDenom,
                    amount: String(deltaTokenAmt)
                  };
                }

                return _context7.abrupt("return", depositRequest);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function calculateDeposit(_x13, _x14) {
        return _calculateDeposit.apply(this, arguments);
      }

      return calculateDeposit;
    }()
    /**
     * Calculate how many tokens can be withdrawn by exact liquidity amount
     * @param exactWithdrawLiquidity Exact liquidity amount to be withdrawn
     * @returns The [[WithdrawRequest]]
     * @since v1.0
     */

  }, {
    key: "calculateWithdraw",
    value: function () {
      var _calculateWithdraw = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(exactWithdrawLiquidity) {
        var reservePool, withdrawRequest, deltaStdAmt, deltaTokenAmt;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.queryLiquidity(exactWithdrawLiquidity.denom);

              case 2:
                reservePool = _context8.sent;
                // Initiate default withdraw request
                withdrawRequest = {
                  min_standard_amt: 0,
                  min_token: 0,
                  withdraw_liquidity: exactWithdrawLiquidity,
                  deadline: 10000 // default 10s

                };

                if (is.positive(Number(reservePool.standard.amount)) && is.positive(Number(reservePool.token.amount))) {
                  // ∆i = ⌊(∆l/l) * i⌋
                  deltaStdAmt = this.math.floor(this.math.multiply(this.math.divide(Number(exactWithdrawLiquidity.amount), Number(reservePool.liquidity.amount)), Number(reservePool.standard.amount)));
                  withdrawRequest.min_standard_amt = deltaStdAmt; // ∆t = ⌊(∆l/l) * t⌋

                  deltaTokenAmt = this.math.floor(this.math.multiply(this.math.divide(Number(exactWithdrawLiquidity.amount), Number(reservePool.liquidity.amount)), Number(reservePool.token.amount)));
                  withdrawRequest.min_token = deltaTokenAmt;
                }

                return _context8.abrupt("return", withdrawRequest);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function calculateWithdraw(_x15) {
        return _calculateWithdraw.apply(this, arguments);
      }

      return calculateWithdraw;
    }()
  }, {
    key: "calculateDoubleWithExactInput",
    value: function () {
      var _calculateDoubleWithExactInput = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(exactSoldCoin, boughtTokenDenom) {
        var boughtStandardAmount, boughtTokenAmt;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.calculateWithExactInput(exactSoldCoin, _types.STD_DENOM);

              case 2:
                boughtStandardAmount = _context9.sent;
                _context9.next = 5;
                return this.calculateWithExactInput({
                  denom: _types.STD_DENOM,
                  amount: String(boughtStandardAmount)
                }, boughtTokenDenom);

              case 5:
                boughtTokenAmt = _context9.sent;
                return _context9.abrupt("return", boughtTokenAmt);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function calculateDoubleWithExactInput(_x16, _x17) {
        return _calculateDoubleWithExactInput.apply(this, arguments);
      }

      return calculateDoubleWithExactInput;
    }()
  }, {
    key: "calculateDoubleWithExactOutput",
    value: function () {
      var _calculateDoubleWithExactOutput = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(exactBoughtCoin, soldTokenDenom) {
        var soldStandardAmount, soldTokenAmt;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.calculateWithExactOutput(exactBoughtCoin, _types.STD_DENOM);

              case 2:
                soldStandardAmount = _context10.sent;
                _context10.next = 5;
                return this.calculateWithExactOutput({
                  denom: _types.STD_DENOM,
                  amount: String(soldStandardAmount)
                }, soldTokenDenom);

              case 5:
                soldTokenAmt = _context10.sent;
                return _context10.abrupt("return", soldTokenAmt);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function calculateDoubleWithExactOutput(_x18, _x19) {
        return _calculateDoubleWithExactOutput.apply(this, arguments);
      }

      return calculateDoubleWithExactOutput;
    }() // getInputPrice returns the amount of coins bought (calculated) given the input amount being sold (exact)
    // The fee is included in the input coins being bought
    // https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf

  }, {
    key: "getInputPrice",
    value: function getInputPrice(inputAmt, inputReserve, outputReserve, fee) {
      var deltaFee = 1 - fee;
      var inputAmtWithFee = this.math.multiply(inputAmt, deltaFee);
      var numerator = this.math.multiply(inputAmtWithFee, outputReserve);
      var denominator = this.math.add(this.math.floor(inputReserve), inputAmtWithFee);
      return this.math.floor(Number(this.math.divide(numerator, denominator)));
    } // getOutputPrice returns the amount of coins sold (calculated) given the output amount being bought (exact)
    // The fee is included in the output coins being bought

  }, {
    key: "getOutputPrice",
    value: function getOutputPrice(outputAmt, inputReserve, outputReserve, fee) {
      var deltaFee = 1 - fee;
      var numerator = this.math.multiply(inputReserve, outputAmt);
      var denominator = this.math.multiply(this.math.subtract(outputReserve, outputAmt), deltaFee);
      return this.math.floor(Number(this.math.divide(numerator, denominator))) + 1;
    }
  }]);
  return Coinswap;
}();

exports.Coinswap = Coinswap;