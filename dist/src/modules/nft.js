"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nft = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _crypto = require("../utils/crypto");

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.17
 */
var Nft = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Nft(client) {
    (0, _classCallCheck2["default"])(this, Nft);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * issue Denom
   * @param id string
   * @param name string
   * @param schema string
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Nft, [{
    key: "issueDenom",
    value: function () {
      var _issueDenom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id, name, schema, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgIssueDenom,
                  value: {
                    id: id,
                    name: name,
                    schema: schema,
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

      function issueDenom(_x, _x2, _x3, _x4) {
        return _issueDenom.apply(this, arguments);
      }

      return issueDenom;
    }()
    /**
     * mint NFT
     * @param id string
     * @param denom_id string
     * @param name string
     * @param uri string
     * @param data string
     * @param recipient string If recipient it's "", recipient default is sender
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */

  }, {
    key: "mintNft",
    value: function () {
      var _mintNft = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params, baseTx) {
        var _this = this;

        var sender, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);

                if (params && params.length > 0) {
                  params.forEach(function (param) {
                    var recipient = param.recipient;

                    if (recipient && !_crypto.Crypto.checkAddress(recipient, _this.client.config.bech32Prefix.AccAddr)) {
                      throw new _errors.SdkError('recipient Invalid bech32 address');
                    }

                    if (!recipient) {
                      param.recipient = sender;
                    }
                  });
                }

                console.log('params', params);
                msgs = params.map(function (param) {
                  return {
                    type: types.TxType.MsgMintNFT,
                    value: {
                      id: param.id,
                      denom_id: param.denom_id,
                      name: param.name,
                      uri: param.uri,
                      data: param.data,
                      sender: sender,
                      recipient: param.recipient
                    }
                  };
                });
                console.log('msgs', msgs);
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function mintNft(_x5, _x6) {
        return _mintNft.apply(this, arguments);
      }

      return mintNft;
    }()
    /**
     * edit NFT
     * @param id string
     * @param denom_id string
     * @param newProperty {name?: string,uri?:string,data?:string} new nft property
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */

  }, {
    key: "editNft",
    value: function () {
      var _editNft = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, denom_id, new_property, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgEditNFT,
                  value: _objectSpread({
                    id: id,
                    denom_id: denom_id,
                    sender: sender
                  }, new_property)
                }];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function editNft(_x7, _x8, _x9, _x10) {
        return _editNft.apply(this, arguments);
      }

      return editNft;
    }()
    /**
     * transfer NFT
     * @param id string
     * @param denom_id string
     * @param recipient string
     * @param newProperty {name?: string,uri?:string,data?:string} new nft property
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */

  }, {
    key: "transferNft",
    value: function () {
      var _transferNft = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, denom_id, recipient, new_property, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(recipient && !_crypto.Crypto.checkAddress(recipient, this.client.config.bech32Prefix.AccAddr))) {
                  _context4.next = 2;
                  break;
                }

                throw new _errors.SdkError('recipient Invalid bech32 address');

              case 2:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgTransferNFT,
                  value: _objectSpread({
                    id: id,
                    denom_id: denom_id,
                    sender: sender,
                    recipient: recipient
                  }, new_property)
                }];
                return _context4.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function transferNft(_x11, _x12, _x13, _x14, _x15) {
        return _transferNft.apply(this, arguments);
      }

      return transferNft;
    }()
    /**
     * burn NFT
     * @param id string
     * @param denom_id string
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */

  }, {
    key: "burnNft",
    value: function () {
      var _burnNft = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, denom_id, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgBurnNFT,
                  value: {
                    id: id,
                    denom_id: denom_id,
                    sender: sender
                  }
                }];
                return _context5.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function burnNft(_x16, _x17, _x18) {
        return _burnNft.apply(this, arguments);
      }

      return burnNft;
    }() // /**
    //  * Supply queries the total supply of a given denom or owner
    //  * @param denom_id
    //  * @param owner
    //  */
    // querySupply(denom_id?:string, owner?:string): Promise<object> {
    //   if (!denom_id && !owner) {
    //     throw new SdkError("there must be one denom_id or owner");
    //   }
    //   const request = new types.nft_query_pb.QuerySupplyRequest();
    //   if (denom_id) {request.setDenomId(denom_id)}
    //   if (owner) {request.setOwner(owner)}
    //   return this.client.rpcClient.protoQuery(
    //     '/irismod.nft.Query/Supply',
    //     request,
    //     types.nft_query_pb.QuerySupplyResponse
    //   );
    // }
    // /**
    //  * Owner queries the NFTs of the specified owner
    //  * @param owner
    //  * @param denom_id
    //  */
    // queryOwner(owner:string, denom_id?:string): Promise<object> {
    //   if (!owner) {
    //     throw new SdkError("owner can ont be empty");
    //   }
    //   const request = new types.nft_query_pb.QueryOwnerRequest();
    //   request.setOwner(owner);
    //   if (denom_id) {request.setDenomId(denom_id)}
    //   return this.client.rpcClient.protoQuery(
    //     '/irismod.nft.Query/Owner',
    //     request,
    //     types.nft_query_pb.QueryOwnerResponse
    //   );
    // }
    // /**
    //  * Collection queries the NFTs of the specified denom
    //  * @param denom_id
    //  */
    // queryCollection(denom_id:string): Promise<object> {
    //   if (!denom_id) {
    //     throw new SdkError("denom_id can ont be empty");
    //   }
    //   const request = new types.nft_query_pb.QueryCollectionRequest();
    //   request.setDenomId(denom_id);
    //   return this.client.rpcClient.protoQuery(
    //     '/irismod.nft.Query/Collection',
    //     request,
    //     types.nft_query_pb.QueryCollectionResponse
    //   );
    // }
    // /**
    //  * Denom queries the definition of a given denom
    //  * @param denom_id
    //  */
    // queryDenom(denom_id:string): Promise<object> {
    //   if (!denom_id) {
    //     throw new SdkError("denom_id can ont be empty");
    //   }
    //   const request = new types.nft_query_pb.QueryDenomRequest();
    //   request.setDenomId(denom_id);
    //   return this.client.rpcClient.protoQuery(
    //     '/irismod.nft.Query/Denom',
    //     request,
    //     types.nft_query_pb.QueryDenomResponse
    //   );
    // }
    // /**
    //  * Denoms queries all the denoms
    //  */
    // queryDenoms(): Promise<object> {
    //   const request = new types.nft_query_pb.QueryDenomsRequest();
    //   return this.client.rpcClient.protoQuery(
    //     '/irismod.nft.Query/Denoms',
    //     request,
    //     types.nft_query_pb.QueryDenomsResponse
    //   );
    // }
    // /**
    //  * NFT queries the NFT for the given denom and token ID
    //  * @param denom_id
    //  * @param token_id
    //  */
    // queryNFT(denom_id:string, token_id:string): Promise<object> {
    //   if (!denom_id) {
    //     throw new SdkError("denom_id can ont be empty");
    //   }
    //   if (!token_id) {
    //     throw new SdkError("token_id can ont be empty");
    //   }
    //   const request = new types.nft_query_pb.QueryNFTRequest();
    //   request.setDenomId(denom_id);
    //   request.setTokenId(token_id);
    //   return this.client.rpcClient.protoQuery(
    //     '/irismod.nft.Query/NFT',
    //     request,
    //     types.nft_query_pb.QueryNFTResponse
    //   );
    // }

  }]);
  return Nft;
}();

exports.Nft = Nft;