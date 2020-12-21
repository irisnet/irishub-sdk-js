"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Token = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var is = _interopRequireWildcard(require("is_js"));

var _errors = require("../errors");

/**
 * IRISHub allows individuals and companies to create and issue their own tokens.
 *
 * [More Details](https://www.irisnet.org/docs/features/asset.html)
 *
 * @category Modules
 * @since v0.17
 */
var Token = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Token(client) {
    (0, _classCallCheck2["default"])(this, Token);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * issue a new token
   * @param IssueTokenTxParam
   * @returns
   */


  (0, _createClass2["default"])(Token, [{
    key: "issueToken",
    value: function () {
      var _issueToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token, baseTx) {
        var owner, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                owner = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgIssueToken,
                  value: Object.assign({
                    owner: owner
                  }, token)
                }];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function issueToken(_x, _x2) {
        return _issueToken.apply(this, arguments);
      }

      return issueToken;
    }()
    /**
     * edit a token existed
     * @param EditTokenTxParam
     * @returns
     */

  }, {
    key: "editToken",
    value: function () {
      var _editToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(token, baseTx) {
        var owner, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                owner = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgEditToken,
                  value: Object.assign({
                    owner: owner
                  }, token)
                }];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function editToken(_x3, _x4) {
        return _editToken.apply(this, arguments);
      }

      return editToken;
    }()
    /**
     * mint some amount of token
     * @param MintTokenTxParam
     * @returns
     */

  }, {
    key: "mintToken",
    value: function () {
      var _mintToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(token, baseTx) {
        var owner, msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                owner = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgMintToken,
                  value: Object.assign({
                    owner: owner
                  }, token)
                }];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function mintToken(_x5, _x6) {
        return _mintToken.apply(this, arguments);
      }

      return mintToken;
    }()
    /**
     * transfer owner of token
     * @param TransferTokenOwnerTxParam
     * @returns
     */

  }, {
    key: "transferTokenOwner",
    value: function () {
      var _transferTokenOwner = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(token, baseTx) {
        var owner, msgs;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                owner = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgTransferTokenOwner,
                  value: Object.assign({
                    src_owner: owner
                  }, token)
                }];
                return _context4.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function transferTokenOwner(_x7, _x8) {
        return _transferTokenOwner.apply(this, arguments);
      }

      return transferTokenOwner;
    }()
    /**
     * Query all tokens
     * @param owner The optional token owner address
     * @returns Token[]
     */

  }, {
    key: "queryTokens",
    value: function queryTokens(owner) {
      var _this = this;

      var request = new types.token_query_pb.QueryTokensRequest();

      if (is.not.undefined(owner)) {
        request.setOwner(owner);
      }

      return new Promise( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve) {
          var res, deserializedData;
          return _regenerator["default"].wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return _this.client.rpcClient.protoQuery('/irismod.token.Query/Tokens', request, types.token_query_pb.QueryTokensResponse);

                case 2:
                  res = _context5.sent;
                  deserializedData = [];

                  if (res && res.tokensList && is.array(res.tokensList)) {
                    deserializedData = res.tokensList.map(function (item) {
                      return types.token_token_pb.Token.deserializeBinary(item.value).toObject();
                    });
                  }

                  resolve(deserializedData);

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x9) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * Query details of a group of tokens
     * @param denom symbol of token
     * @returns
     * @since
     */

  }, {
    key: "queryToken",
    value: function queryToken(denom) {
      var _this2 = this;

      if (is.undefined(denom)) {
        throw new _errors.SdkError('denom can not be empty');
      }

      var request = new types.token_query_pb.QueryTokenRequest();
      request.setDenom(denom);
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(resolve) {
          var res, deserializedData;
          return _regenerator["default"].wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return _this2.client.rpcClient.protoQuery('/irismod.token.Query/Token', request, types.token_query_pb.QueryTokenResponse);

                case 2:
                  res = _context6.sent;
                  deserializedData = null;

                  if (res && res.token && res.token.value) {
                    deserializedData = types.token_token_pb.Token.deserializeBinary(res.token.value).toObject();
                  }

                  resolve(deserializedData);

                case 6:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x10) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    /**
     * Query the token related fees
     * @param symbol The token symbol
     * @returns
     * @since
     */

  }, {
    key: "queryFees",
    value: function queryFees(symbol) {
      if (is.undefined(symbol)) {
        throw new _errors.SdkError('symbol can not be empty');
      }

      var request = new types.token_query_pb.QueryFeesRequest();
      request.setSymbol(symbol);
      return this.client.rpcClient.protoQuery('/irismod.token.Query/Fees', request, types.token_query_pb.QueryFeesResponse);
    }
    /**
     * Query parameters of token tx
     * @param null
     * @returns
     * @since
     */

  }, {
    key: "queryParameters",
    value: function queryParameters() {
      var request = new types.token_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/irismod.token.Query/Params', request, types.token_query_pb.QueryParamsResponse);
    }
  }]);
  return Token;
}();

exports.Token = Token;