import { Client } from '../client';
import * as types from '../types';
/**
 * @category Modules
 * @since v0.17
 */
export declare class Oracle {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Query feed context by feed name
     *
     * @param feedName Feed name
     * @returns
     * @since v0.17
     */
    queryFeed(feedName: string): Promise<types.FeedContext>;
    /**
     * Query all feed contexts by state
     *
     * @param state Feed state
     * @returns
     * @since v0.17
     */
    queryFeeds(state: string): Promise<types.FeedContext[]>;
    /**
     * Query all feed values by feed name
     *
     * @param feedName Feed name
     * @returns
     * @since v0.17
     */
    queryFeedValue(feedName: string): Promise<types.FeedValue[]>;
    /**
     * Create a new feed, the feed will be in `paused` state
     *
     * ** Not Supported **
     */
    createFeed(): void;
    /**
     * Start a feed in `paused` state
     *
     * ** Not Supported **
     */
    startFeed(): void;
    /**
     * Pause a feed in `running` state
     *
     * ** Not Supported **
     */
    pauseFeed(): void;
    /**
     * Modify the feed information and update service invocation parameters by feed creator
     *
     * ** Not Supported **
     */
    editFeed(): void;
}
