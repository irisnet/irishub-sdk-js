import { Client } from '../client';
import * as types from '../types';
import { RpcMethods } from '../types';
import { unmarshalTx, marshalPubKey } from '@irisnet/amino-js';
import { base64ToBytes } from '@tendermint/belt';
import { Utils, Crypto } from '../utils';
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
          return resolve(res as types.Block);
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
          return resolve(res as types.BlockResult);
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
  queryTx(hash: string): Promise<types.QueryTxResult> {
    return new Promise<types.QueryTxResult>((resolve, reject) => {
      this.client.rpcClient
        .request<any>(RpcMethods.Tx, {
          hash: base64Encoding.stringify(hexEncoding.parse(hash)),
        })
        .then(res => {
          // Decode tags
          res.tx_result.tags = Utils.decodeTags(res.tx_result.tags);
          res.tx = unmarshalTx(base64ToBytes(res.tx)) as types.Tx<types.StdTx>;
          return resolve(res as types.QueryTxResult);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   * Query validator set at a certain height or the latest height
   * @param height The block height
   * @returns
   */
  queryValidators(height?: number): Promise<types.QueryValidatorResult> {
    return new Promise<types.QueryValidatorResult>((resolve, reject) => {
      const params = height ? { height: String(height) } : {};
      this.client.rpcClient
        .request<any>(RpcMethods.Validators, params)
        .then(res => {
          const result: types.QueryValidatorResult = {
            block_height: res.block_height,
            validators: [],
          };
          if (res.validators) {
            res.validators.forEach((v: any) => {
              const bech32Address = Crypto.encodeAddress(
                v.address,
                this.client.config.bech32Prefix.ConsAddr
              );
              const bech32Pubkey = Crypto.encodeAddress(
                Utils.ab2hexstring(marshalPubKey(v.pub_key, false)),
                this.client.config.bech32Prefix.ConsPub
              );
              result.validators.push({
                bech32_address: bech32Address,
                bech32_pubkey: bech32Pubkey,
                address: v.address,
                pub_key: v.pub_key,
                voting_power: v.voting_power,
                proposer_priority: v.proposer_priority,
              });
            });
          }
          return resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
