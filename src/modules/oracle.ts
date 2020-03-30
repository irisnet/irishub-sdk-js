import { Client } from '../client';
import * as types from '../types';
import { SdkError } from '../errors';

/**
 * @category Modules
 * @since v0.17
 */
export class Oracle {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query feed context by feed name
   *
   * @param feedName Feed name
   * @returns
   * @since v0.17
   */
  queryFeed(feedName: string): Promise<types.FeedContext> {
    return this.client.rpcClient.abciQuery<types.FeedContext>(
      'custom/oracle/feed',
      {
        FeedName: feedName,
      }
    );
  }

  /**
   * Query all feed contexts by state
   *
   * @param state Feed state
   * @returns
   * @since v0.17
   */
  queryFeeds(state: string): Promise<types.FeedContext[]> {
    return this.client.rpcClient.abciQuery<types.FeedContext[]>(
      'custom/oracle/feeds',
      {
        State: state,
      }
    );
  }

  /**
   * Query all feed values by feed name
   *
   * @param feedName Feed name
   * @returns
   * @since v0.17
   */
  queryFeedValue(feedName: string): Promise<types.FeedValue[]> {
    return this.client.rpcClient.abciQuery<types.FeedValue[]>(
      'custom/oracle/feedValue',
      {
        FeedName: feedName,
      }
    );
  }

  /**
   * Create a new feed, the feed will be in `paused` state
   *
   * ** Not Supported **
   */
  createFeed() {
    throw new SdkError('Not supported');
  }

  /**
   * Start a feed in `paused` state
   *
   * ** Not Supported **
   */
  startFeed() {
    throw new SdkError('Not supported');
  }

  /**
   * Pause a feed in `running` state
   *
   * ** Not Supported **
   */
  pauseFeed() {
    throw new SdkError('Not supported');
  }
  
  /**
   * Modify the feed information and update service invocation parameters by feed creator
   *
   * ** Not Supported **
   */
  editFeed() {
    throw new SdkError('Not supported');
  }
}
