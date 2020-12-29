import { Client } from '../client';
import { Crypto } from '../utils/crypto';
import * as types from '../types';
import { SdkError } from '../errors';

/**
 * This module implements NFT related functions
 *
 * @category Modules
 * @since v0.17
 */
export class Nft {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * issue Denom
   * @param id string
   * @param name string
   * @param schema string
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  async issueDenom(
    id: string,
    name: string,
    schema: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgIssueDenom,
        value:{
          id,
          name,
          schema,
          sender
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }
  
  /**
   * mint NFT
   * @param id string
   * @param denom_id string
   * @param name string
   * @param uri string
   * @param data string
   * @param recipient string If recipient it's "", recipient default is sender
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  async mintNft(
    id: string,
    denom_id:string,
    name: string,
    uri:string,
    data:string,
    recipient: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    if (recipient && !Crypto.checkAddress(recipient, this.client.config.bech32Prefix.AccAddr)) {
      throw new SdkError('recipient Invalid bech32 address');
    }
    const sender = this.client.keys.show(baseTx.from);
    if (!recipient) {
      recipient = sender;
    }

    const msgs: any[] = [
      {
        type:types.TxType.MsgMintNFT,
        value:{
          id,
          denom_id,
          name,
          uri,
          data,
          sender,
          recipient
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * edit NFT
   * @param id string
   * @param denom_id string
   * @param newProperty {name?: string,uri?:string,data?:string} new nft property
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  async editNft(
    id: string,
    denom_id:string,
    new_property:{name?:string, uri?:string, data?:string},
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgEditNFT,
        value:{
          id,
          denom_id,
          sender,
          ...new_property
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * transfer NFT
   * @param id string
   * @param denom_id string
   * @param recipient string
   * @param newProperty {name?: string,uri?:string,data?:string} new nft property
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  async transferNft(
    id: string,
    denom_id:string,
    recipient:string,
    new_property:{name?:string, uri?:string, data?:string},
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    if (recipient && !Crypto.checkAddress(recipient, this.client.config.bech32Prefix.AccAddr)) {
      throw new SdkError('recipient Invalid bech32 address');
    }
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgTransferNFT,
        value:{
          id,
          denom_id,
          sender,
          recipient,
          ...new_property
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * burn NFT
   * @param id string
   * @param denom_id string
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */
  async burnNft(
    id: string,
    denom_id:string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const sender = this.client.keys.show(baseTx.from);
    const msgs: any[] = [
      {
        type:types.TxType.MsgBurnNFT,
        value:{
          id,
          denom_id,
          sender,
        }
      }
    ];
    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Supply queries the total supply of a given denom or owner
   * @param denom_id
   * @param owner
   */
  querySupply(denom_id?:string, owner?:string): Promise<object> {
    if (!denom_id && !owner) {
      throw new Error("there must be one denom_id or owner");
    }
    const request = new types.nft_query_pb.QuerySupplyRequest();
    if (denom_id) {request.setDenomId(denom_id)}
    if (owner) {request.setOwner(owner)}

    return this.client.rpcClient.protoQuery(
      '/irismod.nft.Query/Supply',
      request,
      types.nft_query_pb.QuerySupplyResponse
    );
  }

  /**
   * Owner queries the NFTs of the specified owner
   * @param owner
   * @param denom_id
   */
  queryOwner(owner:string, denom_id?:string): Promise<object> {
    if (!owner) {
      throw new Error("owner can not be empty");
    }
    const request = new types.nft_query_pb.QueryOwnerRequest();
    request.setOwner(owner);
    if (denom_id) {request.setDenomId(denom_id)}

    return this.client.rpcClient.protoQuery(
      '/irismod.nft.Query/Owner',
      request,
      types.nft_query_pb.QueryOwnerResponse
    );
  }

  /**
   * Collection queries the NFTs of the specified denom
   * @param denom_id
   */
  queryCollection(denom_id:string): Promise<object> {
    if (!denom_id) {
      throw new Error("denom_id can not be empty");
    }
    const request = new types.nft_query_pb.QueryCollectionRequest();
    request.setDenomId(denom_id);

    return this.client.rpcClient.protoQuery(
      '/irismod.nft.Query/Collection',
      request,
      types.nft_query_pb.QueryCollectionResponse
    );
  }

  /**
   * Denom queries the definition of a given denom
   * @param denom_id
   */
  queryDenom(denom_id:string): Promise<object> {
    if (!denom_id) {
      throw new Error("denom_id can not be empty");
    }
    const request = new types.nft_query_pb.QueryDenomRequest();
    request.setDenomId(denom_id);

    return this.client.rpcClient.protoQuery(
      '/irismod.nft.Query/Denom',
      request,
      types.nft_query_pb.QueryDenomResponse
    );
  }

  /**
   * Denoms queries all the denoms
   */
  queryDenoms(): Promise<object> {
    const request = new types.nft_query_pb.QueryDenomsRequest();
    return this.client.rpcClient.protoQuery(
      '/irismod.nft.Query/Denoms',
      request,
      types.nft_query_pb.QueryDenomsResponse
    );
  }

  /**
   * NFT queries the NFT for the given denom and token ID
   * @param denom_id
   * @param token_id
   */
  queryNFT(denom_id:string, token_id:string): Promise<object> {
    if (!denom_id) {
      throw new Error("denom_id can not be empty");
    }
    if (!token_id) {
      throw new Error("token_id can not be empty");
    }
    const request = new types.nft_query_pb.QueryNFTRequest();
    request.setDenomId(denom_id);
    request.setTokenId(token_id);

    return this.client.rpcClient.protoQuery(
      '/irismod.nft.Query/NFT',
      request,
      types.nft_query_pb.QueryNFTResponse
    );
  }
}
