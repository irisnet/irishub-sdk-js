import { Client } from '../client';
import * as types from '../types';
import { RpcMethods } from '../types';
import { unmarshalTx } from '@irisnet/amino-js';
import { base64ToBytes } from '@tendermint/belt';
import { Utils } from '../utils';
import * as hexEncoding from 'crypto-js/enc-hex';
import * as base64Encoding from 'crypto-js/enc-base64';

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
    return new Promise<types.Block>((resolve, reject) => {
      const params = height ? { height: String(height) } : {};
      this.client.rpcClient
        .request<any>(RpcMethods.Block, params)
        .then(res => {
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
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Get a block result at a certain height or the latest height
   * @param height The block height
   * @returns
   */
  queryBlockResult(height?: number): Promise<types.BlockResult> {
    return new Promise<types.BlockResult>((resolve, reject) => {
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
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Query tx info by hash
   * @param hash The tx hash
   * @returns
   */
  queryTx(hash: string): Promise<types.ResultTxQuery> {
    return new Promise<types.ResultTxQuery>((resolve, reject) => {
      this.client.rpcClient
        .request<any>(RpcMethods.Tx, {
          hash: base64Encoding.stringify(hexEncoding.parse(hash)),
        })
        .then(res => {
          // Decode tags
          res.tx_result.tags = Utils.decodeTags(res.tx_result.tags);
          res.tx = unmarshalTx(base64ToBytes(res.tx)) as types.Tx<types.StdTx>;
          resolve(res as types.ResultTxQuery);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
