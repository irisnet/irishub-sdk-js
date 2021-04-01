import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as types from '../types';
import { SdkError, CODES } from '../errors';

/**
 * This module implements HTLC related functions
 *
 *
 * @category Modules
 * @since v0.17
 */
export class Htlc {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  createHTLC( 
    param:{
      sender: string,
      to: string,
      receiver_on_other_chain: string,
      sender_on_other_chain: string,
      amount: types.Coin[],
      hash_lock: string,
      timestamp: number,
      time_lock: number,
      transfer: boolean},
    baseTx: types.BaseTx
  ):Promise<types.TxResult>{
    if (!Crypto.checkAddress(param.to, this.client.config.bech32Prefix.AccAddr)) {
      throw new SdkError('Invalid bech32 address');
    }
    const from = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgCreateHTLC,
        value:{...param}
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  claimHTLC( 
    sender: string, 
    id: string, 
    secret: string, 
    baseTx: types.BaseTx
  ):Promise<types.TxResult>{
    const msgs: any[] = [
      {
        type:types.TxType.MsgClaimHTLC,
        value:{
          sender,
          id,
          secret
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }
  
  queryHTLC(id:string): Promise<object>{
    if (!id) {
      throw new SdkError("id can ont be empty");
    }
    const request = new types.htlc_query_pb.QueryHTLCRequest();
    request.setId(id);
    return this.client.rpcClient.protoQuery(
      '/irismod.htlc.Query/HTLC',
      request,
      types.htlc_query_pb.QueryHTLCResponse
    );
  }

  queryAssetSupply(denom:string): Promise<object>{
    if (!denom) {
      throw new SdkError("denom can ont be empty");
    }
    const request = new types.htlc_query_pb.QueryAssetSupplyRequest();
    request.setDenom(denom);
    return this.client.rpcClient.protoQuery(
      '/irismod.htlc.Query/AssetSupply',
      request,
      types.htlc_query_pb.QueryAssetSupplyResponse
    );
  }

  queryAssetSupplies(): Promise<object>{
    const request = new types.htlc_query_pb.QueryAssetSuppliesRequest();
    return this.client.rpcClient.protoQuery(
      '/irismod.htlc.Query/AssetSupplies',
      request,
      types.htlc_query_pb.QueryAssetSuppliesResponse
    );
  }

  queryParams(): Promise<object>{
    const request = new types.htlc_query_pb.QueryParamsRequest();
    return this.client.rpcClient.protoQuery(
      '/irismod.htlc.Query/Params',
      request,
      types.htlc_query_pb.QueryParamsResponse
    );
  }

}
