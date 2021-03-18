import { Client } from '../client';
import * as types from '../types';
import { RpcMethods } from '../types';
import { Utils, Crypto } from '../utils';
import * as hexEncoding from 'crypto-js/enc-hex';
import * as base64Encoding from 'crypto-js/enc-base64';
import { SdkError, CODES } from '../errors';

/**
 * Tendermint module provides tendermint rpc queriers implementation
 *
 * @category Modules
 * @since v0.17
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
   * @since v0.17
   */
  queryBlock(height?: number): Promise<types.Block> {
    const params = height ? { height: String(height) } : {};
    return this.client.rpcClient
      .request<any>(RpcMethods.Block, params)
      .then(res => {
        // Decode txs
        if (res.block && res.block.data && res.block.data.txs) {
          const txs: string[] = res.block.data.txs;
          const decodedTxs = new Array();
          txs.forEach(msg => {
            decodedTxs.push(
              this.client.protobuf.deserializeTx(msg)
            );
          });
          res.block.data.originalTxs = res.block.data.txs;
          res.block.data.txs = decodedTxs;
        }
        return res as types.Block;
      });
  }

  /**
   * Get a block result at a certain height or the latest height
   * @param height The block height
   * @returns
   * @since v0.17
   */
  queryBlockResult(height?: number): Promise<types.BlockResult> {
    const params = height ? { height: String(height) } : {};

    return this.client.rpcClient
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
        return res as types.BlockResult;
      });
  }

  /**
   * Query tx info by hash
   * @param hash The tx hash
   * @returns
   * @since v0.17
   */
  queryTx(hash: string): Promise<types.QueryTxResult> {
    return this.client.rpcClient
      .request<any>(RpcMethods.Tx, {
        hash: base64Encoding.stringify(hexEncoding.parse(hash)),
      })
      .then(res => {
        // Decode tags and tx
        res.tx_result.tags = Utils.decodeTags(res.tx_result.tags);
        res.tx = this.client.protobuf.deserializeTx(res.tx);
        return res as types.QueryTxResult;
      });
  }

  /**
   * Query validator set at a certain height or the latest height
   * @param height The block height
   * @returns
   * @since v0.17
   */
  queryValidators(
    height?: number,
    page?: number,
    size?: number
    ): Promise<types.QueryValidatorResult> {
    const params:any = {};
    if (height) { params.height = String(height) }
    if (page) { params.page = String(page) }
    if (size) { params.per_page = String(size) }
    return this.client.rpcClient
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
              Crypto.aminoMarshalPubKey(v.pub_key, false),
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
        return result;
      });
  }

  /**
   * Search txs
   *
   * **Note:** Known issues on pagination
   *
   * @returns
   * @since v0.17
   */
  searchTxs(
    conditions: types.EventQueryBuilder,
    page?: number,
    size?: number
  ): Promise<types.SearchTxsResult> {
    return this.client.rpcClient
      .request<any>(RpcMethods.TxSearch, {
        query: conditions.build(),
        page,
        per_page: size,
      })
      .then(res => {
        if (res.txs) {
          const txs: types.QueryTxResult[] = [];
          // Decode tags and txs
          res.txs.forEach((tx: any) => {
            tx.tx_result.tags = Utils.decodeTags(tx.tx_result.tags);
            tx.tx = this.client.protobuf.deserializeTx(tx.tx);
            txs.push(tx);
          });
          res.txs = txs;
        }
        return res as types.SearchTxsResult;
      });
  }

  /**
   * query Net Info
   *
   * @returns
   * @since v0.17
   */
  queryNetInfo(): Promise<{
    listening:boolean,
    listeners:string[],
    n_peers:string,
    peers:any[]
  }> {
    return this.client.rpcClient.request<any>(RpcMethods.NetInfo, {});
  }
}
