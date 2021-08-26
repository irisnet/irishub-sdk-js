import { SdkError, CODES } from '../errors';
/**
 * @category Modules
 * @since v0.17
 */
export class Oracle {
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
        throw new SdkError('Not supported', CODES.Internal);
    }
    /**
     * Start a feed in `paused` state
     *
     * ** Not Supported **
     */
    startFeed() {
        throw new SdkError('Not supported', CODES.Internal);
    }
    /**
     * Pause a feed in `running` state
     *
     * ** Not Supported **
     */
    pauseFeed() {
        throw new SdkError('Not supported', CODES.Internal);
    }
    /**
     * Modify the feed information and update service invocation parameters by feed creator
     *
     * ** Not Supported **
     */
    editFeed() {
        throw new SdkError('Not supported', CODES.Internal);
    }
}
//# sourceMappingURL=oracle.js.map