"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Random = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _random = require("../types/random");

/**
 * @category Modules
 * @since v0.17
 */
var Random = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Random(client) {
    (0, _classCallCheck2["default"])(this, Random);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Query the random information by the specified reqID
   *
   * @param reqID The ID of the random request
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Random, [{
    key: "queryRandom",
    value: function queryRandom(reqID) {
      var _this = this;

      return new Promise(function (resolve) {
        _this.client.rpcClient.abciQuery('custom/rand/rand', {
          ReqID: reqID
        }).then(function (random) {
          random.request_id = reqID;
          resolve(random);
        });
      });
    }
    /**
     * Query random requests of a specified block height
     *
     * @param height The block height
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryRequest",
    value: function queryRequest(height) {
      return this.client.rpcClient.abciQuery('custom/rand/queue', {
        Height: height
      });
    }
    /**
     * Request a random number
     *
     * @param blockInterval The block interval to wait for generating the random number
     * @param baseTx
     * @since v0.17
     */

  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(blockInterval, baseTx) {
        var consumer, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                consumer = this.client.keys.show(baseTx.from);
                msgs = [new _random.MsgRequestRand(consumer, blockInterval)];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x, _x2) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /**
     * Subscribe notification when the random is generated
     * @param requestID The request id of the random number
     * @param callback A function to receive notifications
     * @since v0.17
     */

  }, {
    key: "subscribeRandom",
    value: function subscribeRandom(requestID, callback) {
      var _this2 = this;

      var condition = new types.EventQueryBuilder().addCondition(new types.Condition(types.EventKey.RequestID).eq(requestID));
      var subscription = this.client.eventListener.subscribeNewBlock(function (error, data) {
        if (error) {
          callback(error);
          return;
        }

        var tags = data === null || data === void 0 ? void 0 : data.result_begin_block.tags;
        if (!tags) return;
        tags.forEach(function (tag) {
          if (tag.key === 'request-id' && tag.value === requestID) {
            _this2.queryRandom(requestID).then(function (random) {
              callback(undefined, random);
            });
          }
        });
      }, condition);
      return subscription;
    }
  }]);
  return Random;
}();

exports.Random = Random;