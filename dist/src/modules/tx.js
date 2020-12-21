"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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
                unsignedTx = this.buildTx(msgs, baseTx); // Not supported in ibc-alpha
                // const fee = await this.client.utils.toMinCoins(unsignedTx.value.fee.amount);
                // unsignedTx.value.fee.amount = fee;
                // Sign Tx

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
            return _this2.newTxResult(response.hash);
          });

        default:
          return this.broadcastTxAsync(txBytes).then(function (response) {
            return _this2.newTxResult(response.hash);
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
        var keyObj, accountNumber, sequence, account, privKey, pubKey, signature;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!is.empty(baseTx.from)) {
                  _context2.next = 2;
                  break;
                }

                throw new _errors.SdkError("baseTx.from of the key can not be empty");

              case 2:
                if (!is.empty(baseTx.password)) {
                  _context2.next = 4;
                  break;
                }

                throw new _errors.SdkError("baseTx.password of the key can not be empty");

              case 4:
                if (this.client.config.keyDAO.decrypt) {
                  _context2.next = 6;
                  break;
                }

                throw new _errors.SdkError("Decrypt method of KeyDAO not implemented");

              case 6:
                keyObj = this.client.config.keyDAO.read(baseTx.from);

                if (keyObj) {
                  _context2.next = 9;
                  break;
                }

                throw new _errors.SdkError("Key with name '".concat(baseTx.from, "' not found"));

              case 9:
                accountNumber = baseTx.account_number || '';
                sequence = baseTx.sequence || '0';

                if (!(!baseTx.account_number || !baseTx.sequence)) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 14;
                return this.client.bank.queryAccount(keyObj.address);

              case 14:
                account = _context2.sent;

                if (account.account_number) {
                  accountNumber = account.account_number;
                }

                if (account.sequence) {
                  sequence = account.sequence;
                }

              case 17:
                // Query account info from block chain
                privKey = this.client.config.keyDAO.decrypt(keyObj.privKey, baseTx.password);

                if (!stdTx.hasPubKey()) {
                  pubKey = _utils.Crypto.getAminoPrefixPublicKey(privKey);
                  stdTx.setPubKey(pubKey, sequence || undefined);
                }

                signature = _utils.Crypto.generateSignature(stdTx.getSignDoc(accountNumber || undefined, this.client.config.chainId).serializeBinary(), privKey);
                stdTx.addSignature(signature);
                return _context2.abrupt("return", stdTx);

              case 22:
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
     * @param stdTx StdTx with no signatures
     * @param name Name of the key to sign the tx
     * @param password Password of the key
     * @param offline Offline signing, default `false`
     * @returns signature
     * @since v0.17
     */

  }, {
    key: "sign_signDoc",
    value: function sign_signDoc(signDoc, name, password) {
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
        throw new _errors.SdkError("Key with name '".concat(name, "' not found"));
      }

      var privKey = this.client.config.keyDAO.decrypt(keyObj.privKey, password);

      var signature = _utils.Crypto.generateSignature(signDoc, privKey);

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
      return this.client.rpcClient.request(types.RpcMethods.BroadcastTxCommit, {
        tx: _utils.Utils.bytesToBase64(txBytes)
      }).then(function (response) {
        var _response$deliver_tx, _response$deliver_tx2, _response$deliver_tx3, _response$deliver_tx4;

        // Check tx error
        if (response.check_tx && response.check_tx.code > 0) {
          console.error(response.check_tx);
          throw new _errors.SdkError(response.check_tx.log, response.check_tx.code);
        } // Deliver tx error


        if (response.deliver_tx && response.deliver_tx.code > 0) {
          console.error(response.deliver_tx);
          throw new _errors.SdkError(response.deliver_tx.log, response.deliver_tx.code);
        }

        if (response.deliver_tx && response.deliver_tx.tags) {
          response.deliver_tx.tags = _utils.Utils.decodeTags(response.deliver_tx.tags);
        }

        return {
          hash: response.hash,
          height: response.height,
          gas_wanted: (_response$deliver_tx = response.deliver_tx) === null || _response$deliver_tx === void 0 ? void 0 : _response$deliver_tx.gas_wanted,
          gas_used: (_response$deliver_tx2 = response.deliver_tx) === null || _response$deliver_tx2 === void 0 ? void 0 : _response$deliver_tx2.gas_used,
          info: (_response$deliver_tx3 = response.deliver_tx) === null || _response$deliver_tx3 === void 0 ? void 0 : _response$deliver_tx3.info,
          tags: (_response$deliver_tx4 = response.deliver_tx) === null || _response$deliver_tx4 === void 0 ? void 0 : _response$deliver_tx4.tags
        };
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
    value: function broadcastTx(txBytes, method) {
      // Only accepts 'broadcast_tx_sync' and 'broadcast_tx_async'
      if (is.not.inArray(method, [types.RpcMethods.BroadcastTxSync, types.RpcMethods.BroadcastTxAsync])) {
        throw new _errors.SdkError("Unsupported broadcast method: ".concat(method));
      }

      return this.client.rpcClient.request(method, {
        tx: _utils.Utils.bytesToBase64(txBytes)
      }).then(function (response) {
        if (response.code && response.code > 0) {
          throw new _errors.SdkError(response.log, response.code);
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
    value: function newTxResult(hash, height, deliverTx) {
      return {
        hash: hash,
        height: height,
        gas_wanted: deliverTx === null || deliverTx === void 0 ? void 0 : deliverTx.gas_wanted,
        gas_used: deliverTx === null || deliverTx === void 0 ? void 0 : deliverTx.gas_used,
        info: deliverTx === null || deliverTx === void 0 ? void 0 : deliverTx.info,
        tags: deliverTx === null || deliverTx === void 0 ? void 0 : deliverTx.tags
      };
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
            break;
          }

        case types.TxType.MsgRemoveLiquidity:
          {
            break;
          }

        case types.TxType.MsgSwapOrder:
          {
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

        default:
          {
            throw new Error("not exist tx type");
          }
      }

      return msg;
    }
  }]);
  return Tx;
}();

exports.Tx = Tx;