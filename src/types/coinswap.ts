import { Coin, Msg, TxType } from './types';
import { TxModelCreator } from '../helper';
import * as pbs from "./proto";
import { SdkError } from '../errors';

/**
 * param struct for add liquidity tx
 */
export interface AddLiquidityTxParam {
  max_token: Coin,
  exact_standard_amt: string,
  min_liquidity: string,
  deadline: number,
  sender: string
}


/**
 * Msg for add liquidity
 *
 * @hidden
 */
export class MsgAddLiquidity extends Msg {
  value: AddLiquidityTxParam;

  constructor(msg: AddLiquidityTxParam) {
    super(TxType.MsgAddLiquidity);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.coinswap_tx_pb.MsgAddLiquidity;
  }

  getModel(): any {
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setExactStandardAmt(this.value.exact_standard_amt);
    msg.setMinLiquidity(this.value.min_liquidity);
    msg.setMaxToken(TxModelCreator.createCoinModel(this.value.max_token.denom, this.value.max_token.amount));
    msg.setDeadline(this.value.deadline);
    msg.setSender(this.value.sender);
    return msg;
  }

  validate() {
    if (!this.value.max_token) {
      throw new SdkError("max_token is  empty");
    }
    if (!this.value.exact_standard_amt) {
      throw new SdkError("exact_standard_amt is  empty");
    }
    if (!this.value.min_liquidity) {
      throw new SdkError("min_liquidity is  empty");
    }
    if (!this.value.deadline) {
      throw new SdkError("deadline is  empty");
    }
    if (!this.value.sender) {
      throw new SdkError("sender is  empty");
    }
  }
}

/**
 * param struct for add liquidity tx
 */
export interface RemoveLiquidityTxParam {
  withdraw_liquidity: Coin,
  min_token: string,
  min_standard_amt: string,
  deadline: number,
  sender: string
}


/**
 * Msg for remove liquidity
 *
 * @hidden
 */
export class MsgRemoveLiquidity extends Msg {
  value: RemoveLiquidityTxParam;

  constructor(msg: RemoveLiquidityTxParam) {
    super(TxType.MsgRemoveLiquidity);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.coinswap_tx_pb.MsgRemoveLiquidity;
  }

  getModel(): any {
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setWithdrawLiquidity(TxModelCreator.createCoinModel(this.value.withdraw_liquidity.denom, this.value.withdraw_liquidity.amount));
    msg.setMinToken(this.value.min_token);
    msg.setMinStandardAmt(this.value.min_standard_amt);
    msg.setDeadline(this.value.deadline);
    msg.setSender(this.value.sender);
    return msg;
  }

  validate() {
    if (!this.value.withdraw_liquidity) {
      throw new SdkError("withdraw_liquidity is  empty");
    }
    if (!this.value.min_token) {
      throw new SdkError("min_token is  empty");
    }
    if (!this.value.min_standard_amt) {
      throw new SdkError("min_standard_amt is  empty");
    }
    if (!this.value.deadline) {
      throw new SdkError("deadline is  empty");
    }
    if (!this.value.sender) {
      throw new SdkError("sender is  empty");
    }
  }
}


/**
 * param struct for add liquidity tx
 */
export interface SwapOrderTxParam {
  input: {
    address: string;
    coin: Coin;
  },
  output: {
    address: string;
    coin: Coin;
  },
  deadline: number,
  is_buy_order: boolean
}

/**
 * Msg for swap order
 *
 * @hidden
 */
export class MsgSwapOrder extends Msg {
  value: SwapOrderTxParam;

  constructor(msg: SwapOrderTxParam) {
    super(TxType.MsgSwapOrder);
    this.value = msg;
  }

  static getModelClass(): any {
    return pbs.coinswap_tx_pb.MsgSwapOrder;
  }

  getModel(): any {
    let msg = new ((this.constructor as any).getModelClass())();
    let inputMsg = new pbs.coinswap_coinswap_pb.Input();
    inputMsg.setAddress(this.value.input.address);
    inputMsg.setCoin(TxModelCreator.createCoinModel(this.value.input.coin.denom, this.value.input.coin.amount));
    msg.setInput(inputMsg);
    let outputMsg = new pbs.coinswap_coinswap_pb.Output();
    outputMsg.setAddress(this.value.output.address);
    outputMsg.setCoin(TxModelCreator.createCoinModel(this.value.output.coin.denom, this.value.output.coin.amount));
    msg.setOutput(outputMsg);
    msg.setDeadline(this.value.deadline);
    msg.setIsBuyOrder(this.value.is_buy_order);
    return msg;
  }

  validate() {
    if (!this.value.input) {
      throw new SdkError("input is  empty");
    }
    if (!this.value.output) {
      throw new SdkError("output is  empty");
    }
    if (!this.value.deadline) {
      throw new SdkError("deadline is  empty");
    }
    if (!this.value.is_buy_order) {
      throw new SdkError("is_buy_order is  empty");
    }
  }
}

export interface Liquidity {
  standard: Coin;
  token: Coin;
  liquidity: Coin;
  fee: string;
}