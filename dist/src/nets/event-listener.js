"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventListener = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _errors = require("../errors");

var types = _interopRequireWildcard(require("../types"));

var _utils = require("../utils");

var is = _interopRequireWildcard(require("is_js"));

var _wsClient = require("./ws-client");

/** Internal event dao for caching the events */
var EventDAO = /*#__PURE__*/function () {
  function EventDAO() {
    (0, _classCallCheck2["default"])(this, EventDAO);
    (0, _defineProperty2["default"])(this, "subscriptions", new Map());
  }

  (0, _createClass2["default"])(EventDAO, [{
    key: "setSubscription",
    value: function setSubscription(id, subscription) {
      this.subscriptions.set(id, subscription);
    }
  }, {
    key: "deleteSubscription",
    value: function deleteSubscription(id) {
      this.subscriptions["delete"](id);
    }
  }, {
    key: "getAllSubscriptions",
    value: function getAllSubscriptions() {
      return this.subscriptions;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.subscriptions.clear();
    }
  }]);
  return EventDAO;
}();
/**
 * IRISHub Event Listener
 * @since v0.17
 */


var EventListener = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */

  /** @hidden */

  /** @hidden */
  function EventListener(client) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, EventListener);
    (0, _defineProperty2["default"])(this, "wsClient", void 0);
    (0, _defineProperty2["default"])(this, "eventDAO", void 0);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
    this.wsClient = new _wsClient.WsClient(this.client.config.node);
    this.eventDAO = new EventDAO();
    this.wsClient.eventEmitter.on('open', function () {
      var subscriptions = _this.eventDAO.getAllSubscriptions();

      if (subscriptions) {
        subscriptions.forEach(function (sub) {
          // Subscribe all events in context
          console.log('Subscribe: ' + sub.query);

          _this.wsClient.send(types.RpcMethods.Subscribe, sub.id, sub.query);

          var event = sub.id + '#event';

          _this.wsClient.eventEmitter.removeAllListeners(event); // just in case dup of listeners


          switch (sub.eventType) {
            case types.EventTypes.NewBlock:
              {
                // Listen for new blocks, decode and callback
                _this.wsClient.eventEmitter.on(event, function (error, data) {
                  _this.newBlockHandler(sub.callback, error, data);
                });

                return;
              }

            case types.EventTypes.NewBlockHeader:
              {
                // Listen for new block headers, decode and callback
                _this.wsClient.eventEmitter.on(event, function (error, data) {
                  _this.newBlockHeaderHandler(sub.callback, error, data);
                });

                return;
              }

            case types.EventTypes.ValidatorSetUpdates:
              {
                // Listen for validator set updates, decode and callback
                _this.wsClient.eventEmitter.on(event, function (error, data) {
                  _this.validatorSetUpdatesHandler(sub.callback, error, data);
                });

                return;
              }

            case types.EventTypes.Tx:
              {
                // Listen for txs, decode and callback
                _this.wsClient.eventEmitter.on(event, function (error, data) {
                  _this.txHandler(sub.callback, error, data);
                });

                return;
              }

            default:
              {
                return;
              }
          }
        });
      }
    }); // If the connection is closed subjectively, this event will not be triggered
    // see also: disconnect()

    this.wsClient.eventEmitter.on('close', function () {
      // Disconnected unexpectedly, try reconnecting
      console.log('Reconnecting...');
      setTimeout(function () {
        _this.connect();
      }, 5000); // try reconnecting every 5s
    });
    this.wsClient.eventEmitter.on('error', function (err) {// TODO
    });
  }
  /**
   * Connect to server
   * @since v0.17
   */


  (0, _createClass2["default"])(EventListener, [{
    key: "connect",
    value: function connect() {
      this.wsClient.connect();
    }
    /**
     * Disconnect from server and clear all the listeners
     * @since v0.17
     */

  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.wsClient.disconnect().then(function () {
                  _this2.eventDAO.clear();
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function disconnect() {
        return _disconnect.apply(this, arguments);
      }

      return disconnect;
    }()
    /**
     * Subscribe new block notifications
     * @param conditions Query conditions
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */

  }, {
    key: "subscribeNewBlock",
    value: function subscribeNewBlock(callback, conditions) {
      var _this3 = this;

      // Build and send subscription
      var eventType = types.EventTypes.NewBlock;
      var id = eventType + Math.random().toString(16);
      var queryBuilder = conditions ? conditions : new types.EventQueryBuilder();
      var query = queryBuilder.addCondition(new types.Condition(types.EventKey.Type).eq(eventType)).build();

      if (this.wsClient.isReady()) {
        this.wsClient.send(types.RpcMethods.Subscribe, id, query); // Listen for new blocks, decode and callback

        this.wsClient.eventEmitter.on(id + '#event', function (error, data) {
          _this3.newBlockHandler(callback, error, data);
        });
      }

      this.eventDAO.setSubscription(id, {
        id: id,
        query: query,
        eventType: eventType,
        callback: callback
      }); // Return an types.EventSubscription instance, so client could use to unsubscribe this context

      return {
        id: id,
        query: query
      };
    }
    /**
     * Subscribe new block header notifications
     * @param conditions Query conditions
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */

  }, {
    key: "subscribeNewBlockHeader",
    value: function subscribeNewBlockHeader(callback) {
      var _this4 = this;

      // Build and send subscription
      var eventType = types.EventTypes.NewBlockHeader;
      var id = eventType + Math.random().toString(16);
      var query = new types.EventQueryBuilder().addCondition(new types.Condition(types.EventKey.Type).eq(eventType)).build();

      if (this.wsClient.isReady()) {
        this.wsClient.send(types.RpcMethods.Subscribe, id, query); // Listen for new block headers, decode and callback

        this.wsClient.eventEmitter.on(id + '#event', function (error, data) {
          _this4.newBlockHeaderHandler(callback, error, data);
        });
      }

      this.eventDAO.setSubscription(id, {
        id: id,
        query: query,
        eventType: eventType,
        callback: callback
      }); // Return an types.EventSubscription instance, so client could use to unsubscribe this context

      return {
        id: id,
        query: query
      };
    }
    /**
     * Subscribe validator set update notifications
     * @param conditions Query conditions
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */

  }, {
    key: "subscribeValidatorSetUpdates",
    value: function subscribeValidatorSetUpdates(callback) {
      var _this5 = this;

      // Build and send subscription
      var eventType = types.EventTypes.ValidatorSetUpdates;
      var id = eventType + Math.random().toString(16);
      var query = new types.EventQueryBuilder().addCondition(new types.Condition(types.EventKey.Type).eq(eventType)).build();

      if (this.wsClient.isReady()) {
        this.wsClient.send(types.RpcMethods.Subscribe, id, query); // Listen for validator set updates, decode and callback

        this.wsClient.eventEmitter.on(id + '#event', function (error, data) {
          _this5.validatorSetUpdatesHandler(callback, error, data);
        });
      }

      this.eventDAO.setSubscription(id, {
        id: id,
        query: query,
        eventType: eventType,
        callback: callback
      }); // Return an types.EventSubscription instance, so client could use to unsubscribe this context

      return {
        id: id,
        query: query
      };
    }
    /**
     * Subscribe successful Txs notifications
     * @param conditions Query conditions
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */

  }, {
    key: "subscribeTx",
    value: function subscribeTx(conditions, callback) {
      var _this6 = this;

      // Build and send subscription
      var eventType = types.EventTypes.Tx;
      var id = eventType + Math.random().toString(16);
      var queryBuilder = conditions ? conditions : new types.EventQueryBuilder();
      var query = queryBuilder.addCondition(new types.Condition(types.EventKey.Type).eq(eventType)).build();

      if (this.wsClient.isReady()) {
        this.wsClient.send(types.RpcMethods.Subscribe, id, query); // Listen for txs, decode and callback

        this.wsClient.eventEmitter.on(id + '#event', function (error, data) {
          _this6.txHandler(callback, error, data);
        });
      }

      this.eventDAO.setSubscription(id, {
        id: id,
        query: query,
        eventType: eventType,
        callback: callback
      }); // Return an types.EventSubscription instance, so client could use to unsubscribe this context

      return {
        id: id,
        query: query
      };
    }
    /**
     * Unsubscribe the specified event
     * @param subscription The event subscription instance
     * @since v0.17
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(subscription) {
      var _this7 = this;

      // Unsubscribe the specified event from server
      this.wsClient.send(types.RpcMethods.Unsubscribe, 'unsubscribe#' + subscription.id, subscription.query);
      this.wsClient.eventEmitter.on('unsubscribe#' + subscription.id, function (error, data) {
        console.log(error);
        console.log(data); // Remove the subscription listeners

        _this7.wsClient.eventEmitter.removeAllListeners(subscription.id + '#event'); // Remove the current `unsubscribe` operation listener


        _this7.wsClient.eventEmitter.removeAllListeners('unsubscribe#' + subscription.id);
      });
    }
  }, {
    key: "newBlockHandler",
    value: function newBlockHandler(callback, error, data) {
      var _this8 = this;

      if (error) {
        callback(new _errors.SdkError(error.message, error.code), undefined);
      }

      if (!data || !data.data || !data.data.value) {
        return;
      }

      var blockData = data.data.value; // Decode txs

      if (blockData.block && blockData.block.data && blockData.block.data.txs) {
        var txs = blockData.block.data.txs;
        var decodedTxs = new Array();
        txs.forEach(function (msg) {
          decodedTxs.push(_this8.client.protobuf.deserializeTx(msg));
        });
        blockData.block.data.txs = decodedTxs;
      } // Decode proposer address


      if (blockData.block) {
        blockData.block.header.bech32_proposer_address = _utils.Crypto.encodeAddress(blockData.block.header.proposer_address, this.client.config.bech32Prefix.ConsAddr);
      } // Decode begin block tags


      if (blockData.result_begin_block) {
        blockData.result_begin_block.tags = _utils.Utils.decodeTags(blockData.result_begin_block.tags);
      }

      if (blockData.result_end_block) {
        // Decode end block tags
        blockData.result_end_block.tags = _utils.Utils.decodeTags(blockData.result_end_block.tags); // Decode validator updates

        if (blockData.result_end_block.validator_updates) {
          var validators = [];
          blockData.result_end_block.validator_updates.forEach(function (v) {
            var type = '';

            switch (v.pub_key.type) {
              case 'secp256k1':
                {
                  type = 'tendermint/PubKeySecp256k1';
                  break;
                }

              case 'ed25519':
                {
                  type = 'tendermint/PubKeyEd25519';
                  break;
                }

              default:
                throw new _errors.SdkError("Unsupported pubkey type: ".concat(v.pub_key.type));
            }

            var valPubkey = {
              type: type,
              value: v.pub_key.data
            };

            var bech32Pubkey = _utils.Crypto.encodeAddress(_utils.Utils.ab2hexstring(_utils.Crypto.aminoMarshalPubKey(valPubkey, false)), _this8.client.config.bech32Prefix.ConsPub);

            validators.push({
              bech32_pubkey: bech32Pubkey,
              pub_key: valPubkey,
              voting_power: v.power
            });
          });
          blockData.result_end_block.validator_updates = validators;
        }
      }

      var eventBlock = blockData;
      callback(undefined, eventBlock);
    }
  }, {
    key: "newBlockHeaderHandler",
    value: function newBlockHeaderHandler(callback, error, data) {
      var _this9 = this;

      if (error) {
        callback(new _errors.SdkError(error.message, error.code), undefined);
      }

      if (!data.data || !data.data.value) {
        return;
      }

      var blockHeader = data.data.value; // Decode proposer address

      blockHeader.header.bech32_proposer_address = _utils.Crypto.encodeAddress(blockHeader.header.proposer_address, this.client.config.bech32Prefix.ConsAddr); // Decode begin block tags

      if (blockHeader.result_begin_block) {
        blockHeader.result_begin_block.tags = _utils.Utils.decodeTags(blockHeader.result_begin_block.tags);
      }

      if (blockHeader.result_end_block) {
        // Decode end block tags
        blockHeader.result_end_block.tags = _utils.Utils.decodeTags(blockHeader.result_end_block.tags); // Decode validator updates

        if (blockHeader.result_end_block.validator_updates) {
          var validators = [];
          blockHeader.result_end_block.validator_updates.forEach(function (v) {
            var type = v.pub_key.type === 'secp256k1' ? 'tendermint/PubKeySecp256k1' : 'tendermint/PubKeyEd25519';
            var valPubkey = {
              type: type,
              value: v.pub_key.data
            };

            var bech32Pubkey = _utils.Crypto.encodeAddress(_utils.Utils.ab2hexstring(_utils.Crypto.aminoMarshalPubKey(valPubkey, false)), _this9.client.config.bech32Prefix.ConsPub);

            validators.push({
              bech32_pubkey: bech32Pubkey,
              pub_key: valPubkey,
              voting_power: v.power
            });
          });
          blockHeader.result_end_block.validator_updates = validators;
        }
      }

      callback(undefined, blockHeader);
    }
  }, {
    key: "validatorSetUpdatesHandler",
    value: function validatorSetUpdatesHandler(callback, error, data) {
      if (error) {
        callback(new _errors.SdkError(error.message, error.code), undefined);
      }

      if (!data.data || !data.data.value || !data.data.value.validator_updates) {
        return;
      }

      var eventValidatorUpdates = data.data.value.validator_updates;
      callback(undefined, eventValidatorUpdates);
    }
  }, {
    key: "txHandler",
    value: function txHandler(callback, error, data) {
      if (error) {
        callback(new _errors.SdkError(error.message, error.code), undefined);
      }

      if (!data || !data.data || !data.data.value || !data.data.value.TxResult) {
        return;
      }

      var txResult = data.data.value.TxResult;
      txResult.tx = this.client.protobuf.deserializeTx(txResult.tx);

      if (txResult.result.tags) {
        var tags = txResult.result.tags;
        var decodedTags = new Array();
        tags.forEach(function (element) {
          var key = _utils.Utils.base64ToString(element.key);

          var value = !element.value || is.empty(element.value) ? '' : _utils.Utils.base64ToString(element.value);
          decodedTags.push({
            key: key,
            value: value
          });
        });
        txResult.result.tags = decodedTags;
      }

      txResult.hash = _utils.Crypto.generateTxHash(txResult.tx);
      callback(undefined, txResult);
    }
  }]);
  return EventListener;
}();

exports.EventListener = EventListener;