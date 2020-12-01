import { TxHelper, TxModelCreator } from '../utils'
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
    throw new Error("not implement");
  }

  getModel():any{
    throw new Error("not implement");
  }

  pack(): any{
    let msg: any = this.getModel();
    return TxModelCreator.createAnyModel(this.type, msg.serializeBinary());
  }

  // unpack(msgValue:string):object{
  //   if (!msgValue) {
  //     throw new Error("from_address is empty");
  //   }
  //   let msg = this.getModelClass().deserializeBinary(Buffer.from(msgValue,'base64'));
  //   if (msg) {
  //     return msg.toObject();
  //   }else{
  //     throw new Error("unpack message fail");
  //   }
  // }
}

export enum TxType {
  MsgSend ="cosmos.bank.v1beta1.MsgSend",
  MsgMultiSend ="cosmos.bank.v1beta1.MsgMultiSend",
  MsgDelegate ="cosmos.staking.v1beta1.MsgDelegate",
  MsgUndelegate ="cosmos.staking.v1beta1.MsgUndelegate",
  MsgBeginRedelegate ="cosmos.staking.v1beta1.MsgBeginRedelegate",
  MsgWithdrawDelegatorReward ="cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  MsgSetWithdrawAddress ="cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  MsgAddLiquidity ="irismod.coinswap.MsgAddLiquidity",
  MsgRemoveLiquidity ="irismod.coinswap.MsgRemoveLiquidity",
  MsgSwapOrder ="irismod.coinswap.MsgSwapOrder",
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
}

/** 
 * JsonRpc Error
 */
export interface JsonRpcError {
  code: number;
  message: string;
  data: string;
}

/** 
 * Base Pubkey
 * @hidden
 */
export interface Pubkey {
  type: string;
  value: string;
}

/** Tag struct */
export interface Tag {
  key: string;
  value: string;
}
