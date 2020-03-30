import { Client } from '../client';
import * as types from '../types';
import { MsgRequestRand } from '../types/random';
import { SdkError } from '../errors';
import { EventQueryBuilder, EventKey } from '../types';

/**
 * @category Modules
 * @since v0.17
 */
export class Random {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query the random information by the specified reqID
   *
   * @param reqID The ID of the random request
   * @returns
   * @since v0.17
   */
  queryRandom(reqID: string): Promise<types.RandomInfo> {
    return new Promise<types.RandomInfo>(resolve => {
      this.client.rpcClient
        .abciQuery<types.RandomInfo>('custom/rand/rand', {
          ReqID: reqID,
        })
        .then((random: types.RandomInfo) => {
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
  queryRequest(height: number): Promise<types.RandomRequest> {
    return this.client.rpcClient.abciQuery<types.RandomRequest>(
      'custom/rand/queue',
      {
        Height: height,
      }
    );
  }

  /**
   * Request a random number
   *
   * @param blockInterval The block interval to wait for generating the random number
   * @param baseTx
   * @since v0.17
   */
  async request(
    blockInterval: number,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const consumer = this.client.keys.show(baseTx.from);

    const msgs: types.Msg[] = [new MsgRequestRand(consumer, blockInterval)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Subscribe notification when the random is generated
   * @param requestID The request id of the random number
   * @param callback A function to receive notifications
   * @since v0.17
   */
  subscribeRandom(
    requestID: string,
    callback: (error?: SdkError, data?: types.RandomInfo) => void
  ): types.EventSubscription {
    const condition = new EventQueryBuilder().addCondition(
      new types.Condition(EventKey.RequestID).eq(requestID)
    );
    const subscription = this.client.eventListener.subscribeNewBlock(
      (error?: SdkError, data?: types.EventDataNewBlock) => {
        if (error) {
          callback(error);
          return;
        }

        const tags = data?.result_begin_block.tags;
        if (!tags) return;
        tags.forEach(tag => {
          if (tag.key === 'request-id' && tag.value === requestID) {
            this.queryRandom(requestID).then(random => {
              callback(undefined, random);
            });
          }
        });
      },
      condition
    );
    return subscription;
  }
}
