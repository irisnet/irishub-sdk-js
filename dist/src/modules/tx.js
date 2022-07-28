"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tx = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var is = _interopRequireWildcard(require("is_js"));

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Tx module allows you to sign or broadcast transactions
 *
 * @category Modules
 * @since v0.17
 */
var Tx = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Tx(client) {
    (0, _classCallCheck2["default"])(this, Tx);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Build Tx
   * @param msgs Msgs to be sent
   * @param baseTx
   * @returns unsignedTx
   * @since v0.17
   */


  (0, _createClass2["default"])(Tx, [{
    key: "buildTx",
    value: function buildTx(msgs, baseTx) {
      var _this = this;

      var msgList = msgs.map(function (msg) {
        return _this.createMsg(msg);
      });
      var unsignedTx = this.client.auth.newStdTx(msgList, baseTx);
      return unsignedTx;
    }
    /**
     * generate StdTx from protoTxModel
     * @param  {[type]} protoTxModel:any instance of cosmos.tx.v1beta1.Tx 
     * @return {[type]} unsignedTx
     */

  }, {
    key: "newStdTxFromProtoTxModel",
    value: function newStdTxFromProtoTxModel(protoTxModel) {
      return types.ProtoTx.newStdTxFromProtoTxModel(protoTxModel);
    }
    /**
     * generate StdTx from Tx Data
     * @param  {[type]} TxData:string  base64 string form txBytes
     * @return {[type]} unsignedTx
     */

  }, {
    key: "newStdTxFromTxData",
    value: function newStdTxFromTxData(TxDataString) {
      var protoTxModel = this.client.protobuf.deserializeTx(TxDataString, true);
      return types.ProtoTx.newStdTxFromProtoTxModel(protoTxModel);
    }
    /**
     * Build, sign and broadcast the msgs
     * @param msgs Msgs to be sent
     * @param baseTx
     * @returns
     * @since v0.17
     */

  }, {
    key: "buildAndSend",
    value: function () {
      var _buildAndSend = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(msgs, baseTx) {
        var unsignedTx, signedTx;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Build Unsigned Tx
                unsignedTx = this.buildTx(msgs, baseTx); // Sign Tx

                _context.next = 3;
                return this.sign(unsignedTx, baseTx);

              case 3:
                signedTx = _context.sent;
                return _context.abrupt("return", this.broadcast(signedTx, baseTx.mode));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function buildAndSend(_x, _x2) {
        return _buildAndSend.apply(this, arguments);
      }

      return buildAndSend;
    }()
    /**
     * Broadcast a tx
     * @param signedTx The tx object with signatures
     * @param mode Broadcast mode
     * @returns
     * @since v0.17
     */

  }, {
    key: "broadcast",
    value: function broadcast(signedTx, mode) {
      var _this2 = this;

      var txBytes = signedTx.getData();

      switch (mode) {
        case types.BroadcastMode.Commit:
          return this.broadcastTxCommit(txBytes);

        case types.BroadcastMode.Sync:
          return this.broadcastTxSync(txBytes).then(function (response) {
            return _this2.newTxResult(response);
          });

        default:
          return this.broadcastTxAsync(txBytes).then(function (response) {
            return _this2.newTxResult(response);
          });
      }
    }
    /**
     * Single sign a transaction
     *
     * @param stdTx StdTx with no signatures
     * @param baseTx baseTx.from && baseTx.password is requred
     * @returns The signed tx
     * @since v0.17
     */

  }, {
    key: "sign",
    value: function () {
      var _sign = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(stdTx, baseTx) {
        var _accountNumber;

        var offline,
            keyObj,
            privKey,
            accountNumber,
            sequence,
            _accountData$account,
            accountData,
            account,
            _account$baseAccount$,
            _account$baseAccount,
            _account$baseAccount$2,
            _account$baseAccount2,
            _account$accountNumbe,
            _account$sequence,
            _sequence,
            pubKey,
            signature,
            _args2 = arguments;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                offline = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;

                if (!is.empty(baseTx.from)) {
                  _context2.next = 3;
                  break;
                }

                throw new _errors.SdkError("baseTx.from of the key can not be empty");

              case 3:
                if (!is.empty(baseTx.password)) {
                  _context2.next = 5;
                  break;
                }

                throw new _errors.SdkError("baseTx.password of the key can not be empty");

              case 5:
                if (this.client.config.keyDAO.decrypt) {
                  _context2.next = 7;
                  break;
                }

                throw new _errors.SdkError("Decrypt method of KeyDAO not implemented", _errors.CODES.Panic);

              case 7:
                keyObj = this.client.config.keyDAO.read(baseTx.from);

                if (keyObj) {
                  _context2.next = 10;
                  break;
                }

                throw new _errors.SdkError("Key with name '".concat(baseTx.from, "' not found"), _errors.CODES.KeyNotFound);

              case 10:
                privKey = this.client.config.keyDAO.decrypt(keyObj.privateKey, baseTx.password);

                if (privKey) {
                  _context2.next = 13;
                  break;
                }

                throw new _errors.SdkError("decrypto the private key error", _errors.CODES.InvalidPassword);

              case 13:
                accountNumber = baseTx.account_number;
                sequence = baseTx.sequence; // Query account info from block chain

                if (!((typeof baseTx.account_number == 'undefined' || typeof baseTx.sequence == 'undefined') && !offline)) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 18;
                return this.client.auth.queryAccount(keyObj.address);

              case 18:
                accountData = _context2.sent;

                if (accountData !== null && accountData !== void 0 && (_accountData$account = accountData.account) !== null && _accountData$account !== void 0 && _accountData$account.value) {
                  account = accountData.account.value;

                  if (account !== null && account !== void 0 && account.baseAccount) {
                    // ModuleAccount
                    accountNumber = (_account$baseAccount$ = account === null || account === void 0 ? void 0 : (_account$baseAccount = account.baseAccount) === null || _account$baseAccount === void 0 ? void 0 : _account$baseAccount.accountNumber) !== null && _account$baseAccount$ !== void 0 ? _account$baseAccount$ : 0;
                    sequence = (_account$baseAccount$2 = account === null || account === void 0 ? void 0 : (_account$baseAccount2 = account.baseAccount) === null || _account$baseAccount2 === void 0 ? void 0 : _account$baseAccount2.sequence) !== null && _account$baseAccount$2 !== void 0 ? _account$baseAccount$2 : 0;
                  } else {
                    accountNumber = (_account$accountNumbe = account.accountNumber) !== null && _account$accountNumbe !== void 0 ? _account$accountNumbe : 0;
                    sequence = (_account$sequence = account.sequence) !== null && _account$sequence !== void 0 ? _account$sequence : 0;
                  }
                }

              case 20:
                if (!stdTx.hasPubKey()) {
                  pubKey = _utils.Crypto.getPublicKeyFromPrivateKey(privKey, baseTx.pubkeyType);
                  stdTx.setPubKey(pubKey, (_sequence = sequence) !== null && _sequence !== void 0 ? _sequence : undefined);
                }

                signature = _utils.Crypto.generateSignature(stdTx.getSignDoc((_accountNumber = accountNumber) !== null && _accountNumber !== void 0 ? _accountNumber : undefined, baseTx.chainId || this.client.config.chainId).serializeBinary(), privKey, baseTx.pubkeyType);
                stdTx.addSignature(signature);
                return _context2.abrupt("return", stdTx);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sign(_x3, _x4) {
        return _sign.apply(this, arguments);
      }

      return sign;
    }()
    /**
     * Single sign a transaction with signDoc
     *
     * @param signDoc from protobuf
     * @param name Name of the key to sign the tx
     * @param password Password of the key
     * @param type pubkey Type
     * @returns signature
     * @since v0.17
     */

  }, {
    key: "sign_signDoc",
    value: function sign_signDoc(signDoc, name, password) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : types.PubkeyType.secp256k1;

      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(password)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (!this.client.config.keyDAO.decrypt) {
        throw new _errors.SdkError("Decrypt method of KeyDAO not implemented");
      }

      var keyObj = this.client.config.keyDAO.read(name);

      if (!keyObj) {
        throw new _errors.SdkError("Key with name '".concat(name, "' not found"), _errors.CODES.KeyNotFound);
      }

      var privKey = this.client.config.keyDAO.decrypt(keyObj.privateKey, password);

      var signature = _utils.Crypto.generateSignature(signDoc, privKey, type);

      return signature;
    }
    /**
     * Broadcast tx async
     * @param txBytes The tx bytes with signatures
     * @returns
     */

  }, {
    key: "broadcastTxAsync",
    value: function broadcastTxAsync(txBytes) {
      return this.broadcastTx(txBytes, types.RpcMethods.BroadcastTxAsync);
    }
    /**
     * Broadcast tx sync
     * @param txBytes The tx bytes with signatures
     * @returns The result object of broadcasting
     */

  }, {
    key: "broadcastTxSync",
    value: function broadcastTxSync(txBytes) {
      return this.broadcastTx(txBytes, types.RpcMethods.BroadcastTxSync);
    }
    /**
     * Broadcast tx and wait for it to be included in a block.
     * @param txBytes The tx bytes with signatures
     * @returns The result object of broadcasting
     */

  }, {
    key: "broadcastTxCommit",
    value: function broadcastTxCommit(txBytes) {
      var _this3 = this;

      return this.client.rpcClient.request(types.RpcMethods.BroadcastTxCommit, {
        tx: _utils.Utils.bytesToBase64(txBytes)
      }).then(function (response) {
        // Check tx error
        if (response.check_tx && response.check_tx.code > 0) {
          console.error(response.check_tx);
          throw new _errors.SdkError(response.check_tx.log, response.check_tx.code, response.check_tx.codespace);
        } // Deliver tx error


        if (response.deliver_tx && response.deliver_tx.code > 0) {
          console.error(response.deliver_tx);
          throw new _errors.SdkError(response.deliver_tx.log, response.deliver_tx.code, response.deliver_tx.codespace);
        }

        if (response.deliver_tx && response.deliver_tx.tags) {
          response.deliver_tx.tags = _utils.Utils.decodeTags(response.deliver_tx.tags);
        }

        return _this3.newTxResult(response);
      });
    }
    /**
     * Broadcast tx sync or async
     * @private
     * @param signedTx The tx object with signatures
     * @returns The result object of broadcasting
     */

  }, {
    key: "broadcastTx",
    value: function broadcastTx(txBytes) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : types.RpcMethods.BroadcastTxAsync;

      // Only accepts 'broadcast_tx_sync' and 'broadcast_tx_async'
      if (is.not.inArray(method, [types.RpcMethods.BroadcastTxSync, types.RpcMethods.BroadcastTxAsync])) {
        throw new _errors.SdkError("Unsupported broadcast method: ".concat(method), _errors.CODES.Internal);
      }

      return this.client.rpcClient.request(method, {
        tx: _utils.Utils.bytesToBase64(txBytes)
      }).then(function (response) {
        if (response.code && response.code > 0) {
          throw new _errors.SdkError(response.log, response.code, response.codespace);
        }

        return response;
      });
    } // private marshal(stdTx: types.Tx<types.StdTx>): types.Tx<types.StdTx> {
    //   const copyStdTx: types.Tx<types.StdTx> = stdTx;
    //   Object.assign(copyStdTx, stdTx);
    //   stdTx.value.msg.forEach((msg, idx) => {
    //     if (msg.marshal) {
    //       copyStdTx.value.msg[idx] = msg.marshal();
    //     }
    //   });
    //   return copyStdTx;
    // }

  }, {
    key: "newTxResult",
    value: function newTxResult(response) {
      var result = {
        hash: response.hash
      };

      if (response.height) {
        result = _objectSpread(_objectSpread({}, result), {}, {
          height: response.height
        });
      }

      if (response.deliver_tx) {
        var _response$deliver_tx, _response$deliver_tx2, _response$deliver_tx3, _response$deliver_tx4, _response$deliver_tx5;

        result = _objectSpread(_objectSpread({}, result), {}, {
          log: ((_response$deliver_tx = response.deliver_tx) === null || _response$deliver_tx === void 0 ? void 0 : _response$deliver_tx.log) || '',
          info: ((_response$deliver_tx2 = response.deliver_tx) === null || _response$deliver_tx2 === void 0 ? void 0 : _response$deliver_tx2.info) || '',
          gas_wanted: ((_response$deliver_tx3 = response.deliver_tx) === null || _response$deliver_tx3 === void 0 ? void 0 : _response$deliver_tx3.gas_wanted) || 0,
          gas_used: ((_response$deliver_tx4 = response.deliver_tx) === null || _response$deliver_tx4 === void 0 ? void 0 : _response$deliver_tx4.gas_used) || 0,
          events: ((_response$deliver_tx5 = response.deliver_tx) === null || _response$deliver_tx5 === void 0 ? void 0 : _response$deliver_tx5.events) || []
        });
      }

      return result;
    }
    /**
     * create message
     * @param  {[type]} txMsg:{type:string, value:any} message
     * @return {[type]} message instance of types.Msg
     */

  }, {
    key: "createMsg",
    value: function createMsg(txMsg) {
      var msg = {};

      switch (txMsg.type) {
        //bank
        case types.TxType.MsgSend:
          {
            msg = new types.MsgSend(txMsg.value);
            break;
          }

        case types.TxType.MsgMultiSend:
          {
            msg = new types.MsgMultiSend(txMsg.value);
            break;
          }
        //staking

        case types.TxType.MsgDelegate:
          {
            msg = new types.MsgDelegate(txMsg.value);
            break;
          }

        case types.TxType.MsgUndelegate:
          {
            msg = new types.MsgUndelegate(txMsg.value);
            break;
          }

        case types.TxType.MsgBeginRedelegate:
          {
            msg = new types.MsgRedelegate(txMsg.value);
            break;
          }
        //distribution

        case types.TxType.MsgWithdrawDelegatorReward:
          {
            msg = new types.MsgWithdrawDelegatorReward(txMsg.value);
            break;
          }

        case types.TxType.MsgSetWithdrawAddress:
          {
            msg = new types.MsgSetWithdrawAddress(txMsg.value);
            break;
          }

        case types.TxType.MsgWithdrawValidatorCommission:
          {
            msg = new types.MsgWithdrawValidatorCommission(txMsg.value);
            break;
          }

        case types.TxType.MsgFundCommunityPool:
          {
            msg = new types.MsgFundCommunityPool(txMsg.value);
            break;
          }
        //token

        case types.TxType.MsgIssueToken:
          {
            msg = new types.MsgIssueToken(txMsg.value);
            break;
          }

        case types.TxType.MsgEditToken:
          {
            msg = new types.MsgEditToken(txMsg.value);
            break;
          }

        case types.TxType.MsgMintToken:
          {
            msg = new types.MsgMintToken(txMsg.value);
            break;
          }

        case types.TxType.MsgTransferTokenOwner:
          {
            msg = new types.MsgTransferTokenOwner(txMsg.value);
            break;
          }
        //coinswap

        case types.TxType.MsgAddLiquidity:
          {
            msg = new types.MsgAddLiquidity(txMsg.value);
            break;
          }

        case types.TxType.MsgRemoveLiquidity:
          {
            msg = new types.MsgRemoveLiquidity(txMsg.value);
            break;
          }

        case types.TxType.MsgSwapOrder:
          {
            msg = new types.MsgSwapOrder(txMsg.value);
            break;
          }
        // farm

        case types.TxType.MsgStake:
          {
            msg = new types.MsgStake(txMsg.value);
            break;
          }

        case types.TxType.MsgUnstake:
          {
            msg = new types.MsgUnstake(txMsg.value);
            break;
          }

        case types.TxType.MsgHarvest:
          {
            msg = new types.MsgHarvest(txMsg.value);
            break;
          }
        //nft

        case types.TxType.MsgIssueDenom:
          {
            msg = new types.MsgIssueDenom(txMsg.value);
            break;
          }

        case types.TxType.MsgMintNFT:
          {
            msg = new types.MsgMintNFT(txMsg.value);
            break;
          }

        case types.TxType.MsgEditNFT:
          {
            msg = new types.MsgEditNFT(txMsg.value);
            break;
          }

        case types.TxType.MsgTransferNFT:
          {
            msg = new types.MsgTransferNFT(txMsg.value);
            break;
          }

        case types.TxType.MsgBurnNFT:
          {
            msg = new types.MsgBurnNFT(txMsg.value);
            break;
          }
        //gov

        case types.TxType.MsgSubmitProposal:
          {
            msg = new types.MsgSubmitProposal(txMsg.value);
            break;
          }

        case types.TxType.MsgVote:
          {
            msg = new types.MsgVote(txMsg.value);
            break;
          }

        case types.TxType.MsgDeposit:
          {
            msg = new types.MsgDeposit(txMsg.value);
            break;
          }
        //htlc

        case types.TxType.MsgCreateHTLC:
          {
            msg = new types.MsgCreateHTLC(txMsg.value);
            break;
          }

        case types.TxType.MsgClaimHTLC:
          {
            msg = new types.MsgClaimHTLC(txMsg.value);
            break;
          }
        //ibc

        case types.TxType.MsgTransfer:
          {
            msg = new types.MsgTransfer(txMsg.value);
            break;
          }

        default:
          {
            throw new _errors.SdkError("not exist tx type", _errors.CODES.InvalidType);
          }
      }

      return msg;
    }
  }]);
  return Tx;
}();

exports.Tx = Tx;