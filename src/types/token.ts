import {Coin, Msg, TxType} from './types';
import * as is from "is_js";
import * as pbs from "./proto";
import {SdkError} from "../errors";
import {doNotModify} from "./constants";

export interface Token {
  symbol: string;
  name: string;
  scale: number;
  min_unit: string;
  initial_supply: number;
  max_supply: number;
  mintable: boolean;
  owner: string;
}

export interface TokenFees {
  exist: boolean;
  issue_fee: Coin;
  mint_fee: Coin;
}

/**
 * param struct for issue token tx
 */
export interface IssueTokenTxParam {
  symbol: string;
  name: string;
  min_unit: string;
  owner: string;
  scale?: number;
  initial_supply?: number;
  max_supply?: number;
  mintable?: boolean;
}

/**
 * param struct for mint token tx
 */
export interface MintTokenTxParam {
  symbol: string;
  amount: number;
  owner: string;
  to?: string;
}

/**
 * param struct for edit token tx
 */
export interface EditTokenTxParam {
  symbol: string;
  owner: string;
  name?: string;
  max_supply?: number;
  mintable?: string;
}

/**
 * param struct for transfer token owner tx
 */
export interface TransferTokenOwnerTxParam {
  symbol: string;
  src_owner: string;
  dst_owner: string;
}

/**
 * Msg struct for issue token
 * @hidden
 */
export class MsgIssueToken extends Msg {
  value: IssueTokenTxParam;

  constructor(msg: IssueTokenTxParam) {
    super(TxType.MsgIssueToken);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.token_tx_pb.MsgIssueToken;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())()
      .setSymbol(this.value.symbol)
      .setName(this.value.name)
      .setMinUnit(this.value.min_unit)
      .setOwner(this.value.owner);
    if(is.not.undefined(this.value.scale)){
      msg.setScale(this.value.scale);
    }
    if(is.not.undefined(this.value.initial_supply)){
      msg.setInitialSupply(this.value.initial_supply);
    }
    if(is.not.undefined(this.value.max_supply)){
      msg.setMaxSupply(this.value.max_supply);
    }
    if(is.not.undefined(this.value.mintable)){
      msg.setMintable(this.value.mintable);
    }



    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.symbol)) {
      throw new SdkError(`token symbol can not be empty`);
    }
    if (is.undefined(this.value.name)) {
      throw new SdkError(`name can not be empty`);
    }
    if (is.undefined(this.value.min_unit)) {
      throw new SdkError(`min unit can not be empty`);
    }
    if (is.undefined(this.value.owner)) {
      throw new SdkError(`owner can not be empty`);
    }

    return true;
  }
}

/**
 * Msg struct for edit token
 * @hidden
 */
export class MsgEditToken extends Msg {
  value: EditTokenTxParam;

  constructor(msg: EditTokenTxParam) {
    super(TxType.MsgEditToken);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.token_tx_pb.MsgEditToken;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())()
      .setSymbol(this.value.symbol)
      .setOwner(this.value.owner);
    if (is.not.undefined(this.value.name)) {
      msg.setName(this.value.name)
    }
    if (is.not.undefined(this.value.max_supply)) {
      msg.setMaxSupply(this.value.max_supply)
    }
    if (is.not.undefined(this.value.mintable)) {
      msg.setMintable(this.value.mintable)
    } else {
      msg.setMintable(doNotModify)
    }
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.symbol)) {
      throw new SdkError(`token symbol can not be empty`);
    }
    if (is.undefined(this.value.owner)) {
      throw new SdkError(`owner can not be empty`);
    }

    return true;
  }
}

/**
 * Msg struct for mint token
 * @hidden
 */
export class MsgMintToken extends Msg {
  value: MintTokenTxParam;

  constructor(msg: MintTokenTxParam) {
    super(TxType.MsgMintToken);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.token_tx_pb.MsgMintToken;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())()
      .setSymbol(this.value.symbol)
      .setAmount(this.value.amount)
      .setOwner(this.value.owner);
    if (is.not.undefined(this.value.to)) {
      msg.setTo(this.value.to)
    }
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.symbol)) {
      throw new SdkError(`token symbol can not be empty`);
    }
    if (is.undefined(this.value.amount)) {
      throw new SdkError(`amount of token minted can not be empty`);
    }

    if (is.undefined(this.value.owner)) {
      throw new SdkError(`owner can not be empty`);
    }

    return true;
  }
}

/**
 * Msg struct for transfer token owner
 * @hidden
 */
export class MsgTransferTokenOwner extends Msg {
  value: TransferTokenOwnerTxParam;

  constructor(msg: TransferTokenOwnerTxParam) {
    super(TxType.MsgTransferTokenOwner);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.token_tx_pb.MsgTransferTokenOwner;
  }

  getModel(): any {
    const msg = new ((this.constructor as any).getModelClass())()
      .setSymbol(this.value.symbol)
      .setSrcOwner(this.value.src_owner)
      .setDstOwner(this.value.dst_owner);
    return msg;
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.undefined(this.value.symbol)) {
      throw new SdkError(`token symbol can not be empty`);
    }
    if (is.undefined(this.value.src_owner)) {
      throw new SdkError(`source owner can not be empty`);
    }

    if (is.undefined(this.value.dst_owner)) {
      throw new SdkError(`destination owner can not be empty`);
    }

    return true;
  }
}



