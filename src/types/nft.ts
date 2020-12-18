import { Coin, Msg, Pubkey, TxType, doNotModify } from './index';
import { TxModelCreator } from '../helper';
import * as is from 'is_js';
import * as pbs from "./proto";

/**
 * param struct for issue denom tx
 */
export interface IssueDenomParam {
  id:string;
  name:string;
  schema:string;
  sender:string;
}
/**
 * Msg for issue denom
 *
 * @hidden
 */
export class MsgIssueDenom extends Msg {
  value: IssueDenomParam;

  constructor(msg:IssueDenomParam) {
    super(TxType.MsgIssueDenom);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.nft_tx_pb.MsgIssueDenom;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setId(this.value.id);
    msg.setName(this.value.name);
    msg.setSchema(this.value.schema);
    msg.setSender(this.value.sender);
    return msg;
  }

  Validate() {
    if (!this.value.id) {
      throw new Error("id can not be empty");
    }
    if (!this.value.name) {
      throw new Error("name can not be empty");
    }
    if (!this.value.schema) {
      throw new Error("schema can not be empty");
    }
    if (!this.value.sender) {
      throw new Error("sender can not be empty");
    }
  }
}

/**
 * param struct for Mint NFT
 */
export interface MintNFTParam {
  id:string;
  denom_id:string;
  name:string;
  uri:string;
  data:string;
  sender:string;
  recipient:string;
}

/**
 * Msg for Mint NFT
 *
 * @hidden
 */
export class MsgMintNFT extends Msg {
  value: MintNFTParam;

  constructor(msg:MintNFTParam) {
    super(TxType.MsgMintNFT);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.nft_tx_pb.MsgMintNFT;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setId(this.value.id);
    msg.setDenomId(this.value.denom_id);
    msg.setName(this.value.name);
    msg.setUri(this.value.uri);
    msg.setData(this.value.data);
    msg.setSender(this.value.sender);
    msg.setRecipient(this.value.recipient);
    return msg;
  }

  Validate() {
    if (!this.value.id) {
      throw new Error("id can not be empty");
    }
    if (!this.value.denom_id) {
      throw new Error("denom_id can not be empty");
    }
    if (!this.value.name) {
      throw new Error("name can not be empty");
    }
    if (!this.value.uri) {
      throw new Error("uri can not be empty");
    }
    if (!this.value.data) {
      throw new Error("data can not be empty");
    }
    if (!this.value.sender) {
      throw new Error("sender can not be empty");
    }
    if (!this.value.recipient) {
      throw new Error("recipient can not be empty");
    }
  }
}

/**
 * param struct for Edit NFT tx
 */
export interface EditNFTParam {
  id:string;
  denom_id:string;
  name?:string;
  uri?:string;
  data?:string;
  sender:string;
}
/**
 * Msg for Edit NFT
 *
 * @hidden
 */
export class MsgEditNFT extends Msg {
  value: EditNFTParam;

  constructor(msg:EditNFTParam) {
    super(TxType.MsgEditNFT);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.nft_tx_pb.MsgEditNFT;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setId(this.value.id);
    msg.setDenomId(this.value.denom_id);
    msg.setSender(this.value.sender);
    if (typeof this.value.name === 'undefined') {
        msg.setName(doNotModify);
    }else{
        msg.setName(this.value.name);
    }
    if (typeof this.value.uri === 'undefined') {
        msg.setUri(doNotModify);
    }else{
        msg.setUri(this.value.uri);
    }
    if (typeof this.value.data === 'undefined') {
        msg.setData(doNotModify);
    }else{
        msg.setData(this.value.data);
    }
    return msg;
  }

  Validate() {
    if (!this.value.id) {
      throw new Error("id can not be empty");
    }
    if (!this.value.denom_id) {
      throw new Error("denom_id can not be empty");
    }
    if (!this.value.sender) {
      throw new Error("sender can not be empty");
    }
  }
}

/**
 * param struct for Transfer NFT tx
 */
export interface TransferNFTParam {
  id:string;
  denom_id:string;
  name?:string;
  uri?:string;
  data?:string;
  sender:string;
  recipient:string;
}
/**
 * Msg for Transfer NFT
 *
 * @hidden
 */
export class MsgTransferNFT extends Msg {
  value: TransferNFTParam;

  constructor(msg:TransferNFTParam) {
    super(TxType.MsgTransferNFT);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.nft_tx_pb.MsgTransferNFT;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setId(this.value.id);
    msg.setDenomId(this.value.denom_id);
    msg.setSender(this.value.sender);
    msg.setRecipient(this.value.recipient);
    if (typeof this.value.name === 'undefined') {
        msg.setName(doNotModify);
    }else{
        msg.setName(this.value.name);
    }
    if (typeof this.value.uri === 'undefined') {
        msg.setUri(doNotModify);
    }else{
        msg.setUri(this.value.uri);
    }
    if (typeof this.value.data === 'undefined') {
        msg.setData(doNotModify);
    }else{
        msg.setData(this.value.data);
    }
    return msg;
  }

  Validate() {
    if (!this.value.id) {
      throw new Error("id can not be empty");
    }
    if (!this.value.denom_id) {
      throw new Error("denom_id can not be empty");
    }
    if (!this.value.sender) {
      throw new Error("sender can not be empty");
    }
    if (!this.value.recipient) {
      throw new Error("recipient can not be empty");
    }
  }
}

/**
 * param struct for Burn NFT tx
 */
export interface BurnNFTParam {
  id:string;
  denom_id:string;
  sender:string;
}
/**
 * Msg for Burn NFT
 *
 * @hidden
 */
export class MsgBurnNFT extends Msg {
  value: BurnNFTParam;

  constructor(msg:BurnNFTParam) {
    super(TxType.MsgBurnNFT);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.nft_tx_pb.MsgBurnNFT;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setId(this.value.id);
    msg.setDenomId(this.value.denom_id);
    msg.setSender(this.value.sender);
    return msg;
  }

  Validate() {
    if (!this.value.id) {
      throw new Error("id can not be empty");
    }
    if (!this.value.denom_id) {
      throw new Error("denom_id can not be empty");
    }
    if (!this.value.sender) {
      throw new Error("sender can not be empty");
    }
  }
}

export interface Denom {
    id:string;
    name:string;
    schema:string;
    creator:string;
}
