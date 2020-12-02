import {Coin, Msg, TxType} from './types';
import {DelegateTxParam} from "./staking";
import * as is from "is_js";
import {TxModelCreator} from "../utils";
import * as pbs from "./proto";
import {SdkError} from "../errors";

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
export interface IssueTokenTxParam {//TODO(lsc whether param is optional)
  symbol: string;
  name: string;
  scale: number;
  min_unit: string;
  initial_supply: number;
  max_supply: number;
  mintable: boolean;
  owner: string;
}

/**
 * param struct for mint token tx
 */
export interface MintTokenTxParam {//TODO(lsc whether param is optional)
  symbol: string;
  amount: number;
  to: number;
  owner: string;
}

/**
 * param struct for edit token tx
 */
export interface EditokenTxParam {//TODO(lsc whether param is optional)
  symbol: string;
  name: string;
  max_supply: number;
  mintable: string;
  owner: string;
}

/**
 * param struct for transfer token owner tx
 */
export interface TransferTokenOwnerTxParam {//TODO(lsc whether param is optional)
  symbol: string;
  src_owner: string;
  dst_owner: string;
}

export class MsgIssueToken extends Msg {
  value: IssueTokenTxParam;

  constructor(msg: IssueTokenTxParam) {
    super(TxType.MsgIssueToken);
    this.value = msg;
  }

  static getModelClass(): any{
    return pbs.tokenProtocolBuffer.MsgIssueToken;
  }

  getModel(): any {
    return new (MsgIssueToken.getModelClass())()
      .setSymbol(this.value.symbol)
      .setName(this.value.name)
      .setScale(this.value.scale)
      .setMinUnit(this.value.min_unit)
      .setInitialSupply(this.value.initial_supply)
      .setMaxSupply(this.value.max_supply)
      .setMintable(this.value.mintable)
      .setOwner(this.value.owner);
  }

  /**
   * validate necessary params
   *
   * @return whether is is validated
   * @throws `SdkError` if validate failed.
   */
  validate(): boolean {
    if (is.empty(this.value.symbol)) {
      throw new SdkError(`token symbol can not be empty`);
    }
    if (is.empty(this.value.name)) {
      throw new SdkError(`name can not be empty`);
    }
    if (is.empty(this.value.scale)) {
      throw new SdkError(`scale can not be empty`);
    }
    if (is.empty(this.value.min_unit)) {
      throw new SdkError(`min unit can not be empty`);
    }
    if (is.empty(this.value.initial_supply)) {
      throw new SdkError(`initial supply can not be empty`);
    }
    if (is.empty(this.value.max_supply)) {
      throw new SdkError(`max supply can not be empty`);
    }
    if (is.empty(this.value.mintable)) {
      throw new SdkError(`mintable can not be empty`);
    }
    if (is.empty(this.value.owner)) {
      throw new SdkError(`owner can not be empty`);
    }

    return true;
  }
}



