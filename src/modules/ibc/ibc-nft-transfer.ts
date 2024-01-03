import { Client } from '../../client';
import * as types from '../../types';
import { ModelCreator } from '../../helper';
import { SdkError } from '../../errors';

/**
 * This module implements Ibc Nft Transfer related functions
 *
 * @category Modules
 * @since v3.3.0
 */

export class IbcNftTransfer {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * ibc nft transfer
   * @param param:{
      source_port: string;
      source_channel: string;
      class_id: string;
      token_ids: string[];
      receiver: string;
      timeout_height?: {revision_number:number, revision_height:number},
      timeout_timestamp?:number,
    }
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v3.3.0
   */
  async transfer(
    param:{
      source_port: string,
      source_channel: string,
      class_id: string,
      token_ids: string[],
      receiver: string,
      timeout_height?: {revision_number:number, revision_height:number},
      timeout_timestamp?:number,
      memo?: string
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    if (!param.timeout_height && !param.timeout_timestamp) {
      throw new SdkError("there must be one timeout_height or timeout_timestamp");
    }
    const from = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgIbcNftTransfer,
        value:{
          source_port: param.source_port,
          source_channel: param.source_channel,
          class_id: param.class_id,
          token_ids: param.token_ids,
          sender: from,
          receiver: param.receiver,
          timeout_height: param?.timeout_height,
          timeout_timestamp: param?.timeout_timestamp,
          memo: param?.memo
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * ClassTrace queries a class trace information.
   * @param hash (in hex format) of the denomination trace information.
   */
  queryClassTrace(hash:string): Promise<object> {
    if (!hash) {
      throw new SdkError("hash can ont be empty");
    }
    const request = new types.ibc_nft_transfer_query_pb.QueryClassTraceRequest();
    request.setHash(hash);
    return this.client.rpcClient.protoQuery(
      '/ibc.applications.nft_transfer.v1.Query/ClassTrace',
      request,
      types.ibc_nft_transfer_query_pb.QueryClassTraceResponse
    );
  }

  /**
   * ClassTraces queries all class traces.
   */
  queryClassTraces(pagination?:types.Pagination): Promise<object> {
    const request = new types.ibc_nft_transfer_query_pb.QueryClassTracesRequest();
    request.setPagination(ModelCreator.createPaginationModel(pagination));
    return this.client.rpcClient.protoQuery(
      '/ibc.applications.nft_transfer.v1.Query/ClassTraces',
      request,
      types.ibc_nft_transfer_query_pb.QueryClassTracesResponse
    );
  }

  /**
   * ClassHash queries a class hash information.
   */
  queryClassHash(trace: string): Promise<object>  {
    if (!trace) {
      throw new SdkError("trace can ont be empty");
    }
    const request = new types.ibc_nft_transfer_query_pb.QueryClassHashRequest();
    request.setTrace(trace);
    return this.client.rpcClient.protoQuery(
      '/ibc.applications.nft_transfer.v1.Query/ClassHash',
      request,
      types.ibc_nft_transfer_query_pb.QueryClassHashResponse
    );
  }

  
  /**
   * EscrowAddress returns the escrow address for a particular port and channel id.
   */
  queryEscrowAddress(port_id: string, channel_id: string): Promise<object> {
    if (!port_id) {
      throw new SdkError("port_id can ont be empty");
    }
    if (!channel_id) {
      throw new SdkError("channel_id can ont be empty");
    }
    const request = new types.ibc_nft_transfer_query_pb.QueryEscrowAddressRequest();
    request.setPortId(port_id);
    request.setChannelId(channel_id);
    return this.client.rpcClient.protoQuery(
      '/ibc.applications.nft_transfer.v1.Query/EscrowAddress',
      request,
      types.ibc_nft_transfer_query_pb.QueryEscrowAddressResponse
    );
  }

  /**
   * Params queries all parameters of the nft-transfer module.
   */
  queryParams(): Promise<object> {
    const request = new types.ibc_nft_transfer_query_pb.QueryParamsRequest();
    return this.client.rpcClient.protoQuery(
      '/ibc.applications.nft_transfer.v1.Query/Params',
      request,
      types.ibc_nft_transfer_query_pb.QueryParamsResponse
    );
  }
}