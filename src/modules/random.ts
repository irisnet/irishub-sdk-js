import { Client } from '../client';
import * as types from '../types';
import { MsgRequestRand } from '../types/random';
import SdkError from '../errors';
import { BroadcastMode } from '../types';

/**
 * @category Modules
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
   */
  queryRandom(reqID: string): Promise<types.RandomInfo> {
    return this.client.rpcClient.abciQuery<types.RandomInfo>(
      'custom/rand/rand',
      {
        ReqID: reqID,
      }
    );
  }

  /**
   * Query random requests of a specified block height
   *
   * @param height The block height
   * @returns
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
   * *NOTE:* Use `callback` with caution if you have lots of random requests
   *
   * @param blockInterval The block interval to wait for generating the random number
   * @param baseTx
   * @param callback An optional function to handle the random number to be generated. When defined, the broadcast mode will be forced to set to `Commit` mode.
   */
  async request(
    blockInterval: number,
    baseTx: types.BaseTx,
    callback?: (error?: SdkError, data?: types.RandomInfo) => void
  ): Promise<types.TxResult> {
    const consumer = this.client.keys.show(baseTx.from);

    const msgs: types.Msg[] = [new MsgRequestRand(consumer, blockInterval)];

    // TODO
    //  if (callback) {
    //    // Broadcast mode can only be set to `commit` if `callback` is defined
    //    baseTx.mode = BroadcastMode.Commit;
    //    const result = await this.client.tx.buildAndSend(msgs, baseTx);
    //  }

    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
