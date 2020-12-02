import { Coin, Msg, Pubkey, TxType } from './types';
import { TxModelCreator } from '../utils';
const bank_tx_pb = require('./proto-types/cosmos/bank/v1beta1/tx_pb');

/**
 * Msg for sending coins
 *
 * @hidden
 */
export class MsgSend extends Msg {
  value: {
    from_address: string,
    to_address: string,
    amount:Coin[],
  };

  constructor(msg:{from_address: string, to_address: string, amount:Coin[]}) {
    super(TxType.MsgSend);
    this.value = msg;
  }

  static getModelClass():any{
    return bank_tx_pb.MsgSend;
  }

  getModel():any{
    let msg = new (MsgSend.getModelClass())();
    msg.setFromAddress(this.value.from_address);
    msg.setToAddress(this.value.to_address);
    this.value.amount.forEach((item)=>{
        msg.addAmount(TxModelCreator.createCoinModel(item.denom, item.amount));
    });
    return msg;
  }

  validate() {
    if (!this.value.from_address) {
      throw new Error("from_address is  empty");
    }
    if (!this.value.to_address) {
      throw new Error("to_address is  empty");
    }
    if (!(this.value.amount && this.value.amount.length)) {
      throw new Error("amount is  empty");
    }
  }
}

/**
 * Msg for sending coins
 *
 * @hidden
 */
export class MsgMultiSend extends Msg {
  value: {
    inputs: Input[];
    outputs: Output[];
  };

  constructor(msg:{inputs: Input[], outputs: Output[]}) {
    super(TxType.MsgMultiSend);
    this.value = msg;
  }

  static getModelClass(){
    return bank_tx_pb.MsgMultiSend;
  }

  getModel():any{
    let msg = new (MsgMultiSend.getModelClass())();
    this.value.inputs.forEach((item)=>{
      let input = new bank_tx_pb.Input();
      input.setAddress(item.address);
      item.coins.forEach((coin)=>{
        input.addCoins(TxModelCreator.createCoinModel(coin.denom, coin.amount));
      });
      msg.addInputs(input);
    });
    this.value.outputs.forEach((item)=>{
      let output = new bank_tx_pb.Output();
      output.setAddress(item.address);
      item.coins.forEach((coin)=>{
        output.addCoins(TxModelCreator.createCoinModel(coin.denom, coin.amount));
      });
      msg.addOutputs(output);
    });
    return msg;
  }

  validate() {
    if (!this.value.inputs) {
      throw new Error("inputs is  empty");
    }
    if (!this.value.outputs) {
      throw new Error("outputs is  empty");
    }
  }
}

/** Base input and output struct */
export interface InputOutput {
  /** Bech32 account address */
  address: string;
  coins: Coin[];
}

/** Input implemention of [[InputOutput]] */
export interface Input extends InputOutput {}

/** Output implemention of [[InputOutput]] */
export interface Output extends InputOutput {}


export interface EventDataMsgSend {
  height: string;
  hash: string;
  from: string;
  to: string;
  amount: Coin[];
}

export interface BaseAccount {
  /** Bech32 account address */
  address: string;
  coins: Coin[];
  public_key: Pubkey;
  account_number: string;
  sequence: string;
}
