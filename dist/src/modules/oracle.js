"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oracle = void 0;
const errors_1 = require("../errors");
/**
 * @category Modules
 * @since v0.17
 */
class Oracle {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Query feed context by feed name
     *
     * @param feedName Feed name
     * @returns
     * @since v0.17
     */
    queryFeed(feedName) {
        return this.client.rpcClient.abciQuery('custom/oracle/feed', {
            FeedName: feedName,
        });
    }
    /**
     * Query all feed contexts by state
     *
     * @param state Feed state
     * @returns
     * @since v0.17
     */
    queryFeeds(state) {
        return this.client.rpcClient.abciQuery('custom/oracle/feeds', {
            State: state,
        });
    }
    /**
     * Query all feed values by feed name
     *
     * @param feedName Feed name
     * @returns
     * @since v0.17
     */
    queryFeedValue(feedName) {
        return this.client.rpcClient.abciQuery('custom/oracle/feedValue', {
            FeedName: feedName,
        });
    }
    /**
     * Create a new feed, the feed will be in `paused` state
     *
     * ** Not Supported **
     */
    createFeed() {
        throw new errors_1.SdkError('Not supported');
    }
    /**
     * Start a feed in `paused` state
     *
     * ** Not Supported **
     */
    startFeed() {
        throw new errors_1.SdkError('Not supported');
    }
    /**
     * Pause a feed in `running` state
     *
     * ** Not Supported **
     */
    pauseFeed() {
        throw new errors_1.SdkError('Not supported');
    }
    /**
     * Modify the feed information and update service invocation parameters by feed creator
     *
     * ** Not Supported **
     */
    editFeed() {
        throw new errors_1.SdkError('Not supported');
    }
}
exports.Oracle = Oracle;
//# sourceMappingURL=oracle.js.map