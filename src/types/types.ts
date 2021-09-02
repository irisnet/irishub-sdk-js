import { TxHelper, TxModelCreator } from '../helper';
import { SdkError, CODES } from '../errors';
/** 
 * Base Msg
 * @hidden
 */
export class Msg {
  type: string;
  value: any;

  constructor(type:string){
    this.type = type;
  } 

  static getModelClass():any{
    throw new SdkError("not implement",CODES.Internal);
  }

  getModel():any{
    throw new SdkError("not implement",CODES.Internal);
  }

  pack(): any{
    let msg: any = this.getModel();
    return TxModelCreator.createAnyModel(this.type, msg.serializeBinary());
  }

  /**
   * unpack protobuf tx message
   * @type {[type]}
   * returns protobuf message instance
   */
  unpack(msgValue:string):any{
    if (!msgValue) {
      throw new SdkError("msgValue can not be empty",CODES.Internal);
    }
    let msg = (this.constructor as any).getModelClass().deserializeBinary(Buffer.from(msgValue,'base64'));
    if (msg) {
      return msg;
    }else{
      throw new SdkError("unpack message fail",CODES.FailedUnpackingProtobufMessagFromAny);
    }
  }
}

export enum TxType {
  //bank
  MsgSend ="cosmos.bank.v1beta1.MsgSend",
  MsgMultiSend ="cosmos.bank.v1beta1.MsgMultiSend",
  //staking
  MsgDelegate ="cosmos.staking.v1beta1.MsgDelegate",
  MsgUndelegate ="cosmos.staking.v1beta1.MsgUndelegate",
  MsgBeginRedelegate ="cosmos.staking.v1beta1.MsgBeginRedelegate",
  //distribution
  MsgWithdrawDelegatorReward ="cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  MsgSetWithdrawAddress ="cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  MsgWithdrawValidatorCommission = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  MsgFundCommunityPool = "cosmos.distribution.v1beta1.MsgFundCommunityPool",
  //coinswap
  MsgAddLiquidity ="irismod.coinswap.MsgAddLiquidity",
  MsgRemoveLiquidity ="irismod.coinswap.MsgRemoveLiquidity",
  MsgSwapOrder ="irismod.coinswap.MsgSwapOrder",
  //farm
  MsgStake = 'irismod.farm.MsgStake',
  MsgUnstake= 'irismod.farm.MsgUnstake',
  MsgHarvest = 'irismod.farm.MsgHarvest',
  //nft
  MsgIssueDenom ="irismod.nft.MsgIssueDenom",
  MsgTransferNFT ="irismod.nft.MsgTransferNFT",
  MsgEditNFT ="irismod.nft.MsgEditNFT",
  MsgMintNFT ="irismod.nft.MsgMintNFT",
  MsgBurnNFT ="irismod.nft.MsgBurnNFT",
  MsgIssueToken = 'irismod.token.MsgIssueToken',
  MsgEditToken = 'irismod.token.MsgEditToken',
  MsgMintToken = 'irismod.token.MsgMintToken',
  MsgTransferTokenOwner = 'irismod.token.MsgTransferTokenOwner',
  //gov
  MsgSubmitProposal = "cosmos.gov.v1beta1.MsgSubmitProposal",
  MsgVote = "cosmos.gov.v1beta1.MsgVote",
  MsgDeposit = "cosmos.gov.v1beta1.MsgDeposit",
  //htlc
  MsgCreateHTLC = "irismod.htlc.MsgCreateHTLC",
  MsgClaimHTLC = "irismod.htlc.MsgClaimHTLC",
  //ibc
  MsgTransfer = "ibc.applications.transfer.v1.MsgTransfer",
}

/** 
 * Base Tx
 * @hidden
 */
export interface Tx<T extends TxValue> {
  type: string;
  value: T;
}

/** Abstract Tx Value */
export interface TxValue {}

/** 
 * Base Coin
 * @hidden
 */
export interface Coin {
  denom: string;
  amount: string;
}

/** 
 * Base JSONRPCResponse
 * @hidden
 */
export interface JSONRPCResponse<T> {
  jsonrpc: string;
  id:      string;
  error:   JsonRpcError;
  result:  T;
  codespace?:string;
}

/** 
 * JsonRpc Error
 */
export interface JsonRpcError {
  code: number;
  message: string;
  data: string;
  codespace?:string;
}

/** 
 * Base Pubkey
 * @hidden
 */
export interface Pubkey {
  type: PubkeyType;
  value: string;
}

/** 
 * Base Pubkey Type
 * @hidden
 */
export enum PubkeyType {
  secp256k1 = 'secp256k1',
  ed25519 = 'ed25519',//not implement
  sm2 = 'sm2'
}

/** Tag struct */
export interface Tag {
  key: string;
  value: string;
}

/**
 * Bech32 Prefix
 */
export interface Bech32Prefix {
  AccAddr: string;
  AccPub: string;
  ValAddr: string;
  ValPub: string;
  ConsAddr: string;
  ConsPub: string;
}
