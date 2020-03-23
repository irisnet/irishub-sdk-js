import { Client } from '../client';
import * as types from '../types';
import { RpcMethods } from '../types';
import { unmarshalTx } from '@irisnet/amino-js';
import { base64ToBytes } from '@tendermint/belt';
import { strict } from 'assert';
import { Utils } from '../utils';

/**
 * Tendermint module provides tendermint rpc queriers implementation
 *
 * @category Modules
 */
export class Tendermint {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Get a block info at a certain height or the latest height
   * @param height The block height
   * @returns
   */
  queryBlock(height?: number): Promise<types.Block> {
    return new Promise<types.Block>(resolve => {
      const params = height ? { height: String(height) } : {};
      this.client.rpcClient.request<any>(RpcMethods.Block, params).then(res => {
        // Decode txs
        if (res.block && res.block.data && res.block.data.txs) {
          const txs: string[] = res.block.data.txs;
          const decodedTxs = new Array<types.Tx<types.StdTx>>();
          txs.forEach(msg => {
            decodedTxs.push(
              unmarshalTx(base64ToBytes(msg)) as types.Tx<types.StdTx>
            );
          });
          res.block.data.txs = decodedTxs;
        }
        resolve(res as types.Block);
      });
    });
  }

  /**
   * Get a block result at a certain height or the latest height
   * @param height The block height
   * @returns
   */
  queryBlockResult(height?: number): Promise<types.BlockResult> {
    return new Promise<types.BlockResult>(resolve => {
      const params = height ? { height: String(height) } : {};

      this.client.rpcClient
        .request<any>(RpcMethods.BlockResults, params)
        .then(res => {
          // Decode tags
          if (res.results) {
            const deliverTxs = res.results.DeliverTx;
            if (deliverTxs) {
              deliverTxs.forEach((deliverTx: any, index: number) => {
                res.results.DeliverTx[index].tags = Utils.decodeTags(
                  deliverTx.tags
                );
              });
            }

            const endBlock = res.results.EndBlock;
            if (endBlock) {
              res.results.EndBlock.tags = Utils.decodeTags(endBlock.tags);
            }

            const beginBlock = res.results.BeginBlock;
            if (beginBlock) {
              res.results.BeginBlock.tags = Utils.decodeTags(beginBlock.tags);
            }
          }
          resolve(res as types.BlockResult);
        });
    });
  }
}
