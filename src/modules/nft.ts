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
    newProperty:{name?:string, uri?:string, data?:string},
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
          ...newProperty
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
    newProperty:{name?:string, uri?:string, data?:string},
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
          ...newProperty
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
   * Query denoms from blockchain
   * @returns
   * @since v0.17
   */
  queryDenoms(denom?:string): Promise<types.Denom[] | types.Denom> {
    let path = 'custom/nft/denoms';
    let params = {};
    if (denom) {
      path = 'custom/nft/denom';
      params = {ID:denom};
    }
    return this.client.rpcClient.abciQuery<types.Denom[] | types.Denom>(path, params);
  }
}
