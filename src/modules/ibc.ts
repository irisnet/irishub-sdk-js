import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as types from '../types';
import { ModelCreator } from '../helper';
import { SdkError, CODES } from '../errors';

/**
 * This module implements IBC related functions
 *
 *
 * @category Modules
 * @since v0.17
 */

export class Ibc {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * ibc transfer
   * @param param:{
      source_port: string;
      source_channel: string;
      token: Coin;
      receiver: string;
      timeout_height?: {revision_number:number, revision_height:number},
      timeout_timestamp?:number,
    }
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  async transfer(
    param:{
      source_port: string,
      source_channel: string,
      token: types.Coin,
      receiver: string,
      timeout_height?: {revision_number:number, revision_height:number},
      timeout_timestamp?:number,
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    if (!param.timeout_height && !param.timeout_timestamp) {
      throw new SdkError("there must be one timeout_height or timeout_timestamp");
    }
    const from = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgTransfer,
        value:{
          source_port: param.source_port,
          source_channel: param.source_channel,
          token: param.token,
          sender: from,
          receiver: param.receiver,
          timeout_height: param.timeout_height,
          timeout_timestamp: param.timeout_timestamp
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * DenomTrace queries a denomination trace information.
   * @param hash (in hex format) of the denomination trace information.
   */
  queryDenomTrace(hash:string): Promise<object> {
    if (!hash) {
      throw new SdkError("hash can ont be empty");
    }
    const request = new types.ibc_transfer_query_pb.QueryDenomTraceRequest();
    request.setHash(hash);
    return this.client.rpcClient.protoQuery(
      '/ibc.applications.transfer.v1.Query/DenomTrace',
      request,
      types.ibc_transfer_query_pb.QueryDenomTraceResponse
    );
  }

  /**
   * DenomTraces queries all denomination traces.
   */
  queryDenomTraces(
    page_number:number = 1,
    page_size:number = 10
  ): Promise<object> {
    const pagination = ModelCreator.createPaginationModel(page_number, page_size, true)
    const request = new types.ibc_transfer_query_pb.QueryDenomTracesRequest();
    request.setPagination(pagination);
    return this.client.rpcClient.protoQuery(
      '/ibc.applications.transfer.v1.Query/DenomTraces',
      request,
      types.ibc_transfer_query_pb.QueryDenomTracesResponse
    );
  }

  /**
   * Params queries all parameters of the ibc-transfer module.
   */
  queryParams(): Promise<object> {
    const request = new types.ibc_transfer_query_pb.QueryParamsRequest();
    return this.client.rpcClient.protoQuery(
      '/ibc.applications.transfer.v1.Query/Params',
      request,
      types.ibc_transfer_query_pb.QueryParamsResponse
    );
  }

  /**
   * Channels queries all the IBC channels of a chain.
   */
  queryChannels(
    page_number:number = 1,
    page_size:number = 10
  ): Promise<object> {
    const pagination = ModelCreator.createPaginationModel(page_number, page_size, true)
    const request = new types.ibc_channel_query_pb.QueryChannelsRequest();
    request.setPagination(pagination);
    return this.client.rpcClient.protoQuery(
      '/ibc.core.channel.v1.Query/Channels',
      request,
      types.ibc_channel_query_pb.QueryChannelsResponse
    );
  }
}