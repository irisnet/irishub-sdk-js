"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mathjs = _interopRequireWildcard(require("mathjs"));

/**
 * Utils for the IRISHub SDK
 * @category Modules
 * @since v0.17
 */
var Utils = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */

  /** @hidden */

  /** @hidden */

  /** @hidden */
  function Utils(client) {
    (0, _classCallCheck2["default"])(this, Utils);
    (0, _defineProperty2["default"])(this, "client", void 0);
    (0, _defineProperty2["default"])(this, "tokenMap", void 0);
    (0, _defineProperty2["default"])(this, "mathConfig", {
      number: 'BigNumber',
      // Choose 'number' (default), 'BigNumber', or 'Fraction'
      precision: 64 // 64 by default, only applicable for BigNumbers

    });
    (0, _defineProperty2["default"])(this, "math", void 0);
    this.client = client;
    this.tokenMap = new Map();
    this.math = mathjs.create(mathjs.all, this.mathConfig);
  }
  /**
   * Convert the coin object to min unit
   *
   * @param coin Coin object to be converted
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Utils, [{
    key: "toMinCoin",
    value: function () {
      var _toMinCoin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(coin) {
        var _this = this;

        var amt, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                amt = this.math.bignumber(coin.amount);
                token = this.tokenMap.get(coin.denom);

                if (!token) {
                  _context.next = 6;
                  break;
                }

                if (!(coin.denom === token.min_unit)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", coin);

              case 5:
                return _context.abrupt("return", {
                  denom: token.min_unit,
                  amount: this.math.multiply(amt, this.math.pow(10, token.scale)).toString()
                });

              case 6:
                return _context.abrupt("return", this.client.token.queryToken(coin.denom).then(function (token) {
                  if (token) {
                    _this.tokenMap.set(coin.denom, token);
                  }

                  return _this.toMinCoin(coin);
                }));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toMinCoin(_x) {
        return _toMinCoin.apply(this, arguments);
      }

      return toMinCoin;
    }()
    /**
     * Convert the coin array to min unit
     * @param coins Coin array to be converted
     * @returns
     * @since v0.17
     */

  }, {
    key: "toMinCoins",
    value: function () {
      var _toMinCoins = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(coins) {
        var _this2 = this;

        var promises;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                promises = new Array();
                coins.forEach(function (amt) {
                  var promise = _this2.toMinCoin(amt);

                  promises.push(promise);
                });
                return _context2.abrupt("return", Promise.all(promises).then(function (coins) {
                  return coins;
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function toMinCoins(_x2) {
        return _toMinCoins.apply(this, arguments);
      }

      return toMinCoins;
    }()
    /**
     * Convert the coin object to main unit
     *
     * @returns
     * @since v0.17
     */

  }, {
    key: "toMainCoin",
    value: function () {
      var _toMainCoin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(coin) {
        var _this3 = this;

        var amt, token;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                amt = this.math.bignumber(coin.amount);
                token = this.tokenMap.get(coin.denom);

                if (!token) {
                  _context3.next = 6;
                  break;
                }

                if (!(coin.denom === token.symbol)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", coin);

              case 5:
                return _context3.abrupt("return", {
                  denom: token.symbol,
                  amount: this.math.divide(amt, this.math.pow(10, token.scale)).toString()
                });

              case 6:
                return _context3.abrupt("return", this.client.token.queryToken(coin.denom).then(function (token) {
                  if (token) {
                    _this3.tokenMap.set(coin.denom, token);
                  }

                  return _this3.toMainCoin(coin);
                }));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function toMainCoin(_x3) {
        return _toMainCoin.apply(this, arguments);
      }

      return toMainCoin;
    }()
    /**
     * Convert the coin array to main unit
     * @param coins Coin array to be converted
     * @returns
     * @since v0.17
     */

  }, {
    key: "toMainCoins",
    value: function () {
      var _toMainCoins = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(coins) {
        var _this4 = this;

        var promises;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                promises = new Array();
                coins.forEach(function (amt) {
                  var promise = _this4.toMainCoin(amt);

                  promises.push(promise);
                });
                return _context4.abrupt("return", Promise.all(promises).then(function (coins) {
                  return coins;
                }));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function toMainCoins(_x4) {
        return _toMainCoins.apply(this, arguments);
      }

      return toMainCoins;
    }()
  }]);
  return Utils;
}();

exports.Utils = Utils;