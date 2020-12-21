"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Oracle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _errors = require("../errors");

/**
 * @category Modules
 * @since v0.17
 */
var Oracle = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Oracle(client) {
    (0, _classCallCheck2["default"])(this, Oracle);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Query feed context by feed name
   *
   * @param feedName Feed name
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Oracle, [{
    key: "queryFeed",
    value: function queryFeed(feedName) {
      return this.client.rpcClient.abciQuery('custom/oracle/feed', {
        FeedName: feedName
      });
    }
    /**
     * Query all feed contexts by state
     *
     * @param state Feed state
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryFeeds",
    value: function queryFeeds(state) {
      return this.client.rpcClient.abciQuery('custom/oracle/feeds', {
        State: state
      });
    }
    /**
     * Query all feed values by feed name
     *
     * @param feedName Feed name
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryFeedValue",
    value: function queryFeedValue(feedName) {
      return this.client.rpcClient.abciQuery('custom/oracle/feedValue', {
        FeedName: feedName
      });
    }
    /**
     * Create a new feed, the feed will be in `paused` state
     *
     * ** Not Supported **
     */

  }, {
    key: "createFeed",
    value: function createFeed() {
      throw new _errors.SdkError('Not supported');
    }
    /**
     * Start a feed in `paused` state
     *
     * ** Not Supported **
     */

  }, {
    key: "startFeed",
    value: function startFeed() {
      throw new _errors.SdkError('Not supported');
    }
    /**
     * Pause a feed in `running` state
     *
     * ** Not Supported **
     */

  }, {
    key: "pauseFeed",
    value: function pauseFeed() {
      throw new _errors.SdkError('Not supported');
    }
    /**
     * Modify the feed information and update service invocation parameters by feed creator
     *
     * ** Not Supported **
     */

  }, {
    key: "editFeed",
    value: function editFeed() {
      throw new _errors.SdkError('Not supported');
    }
  }]);
  return Oracle;
}();

exports.Oracle = Oracle;