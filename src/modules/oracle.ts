import { Client } from '../client';
import * as types from '../types';

/**
 * @category Modules
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
   */
  queryFeedValue(feedName: string): Promise<types.FeedValue[]> {
    return this.client.rpcClient.abciQuery<types.FeedValue[]>(
      'custom/oracle/feedValue',
      {
        FeedName: feedName,
      }
    );
  }
}
