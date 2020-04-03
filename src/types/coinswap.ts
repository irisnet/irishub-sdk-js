import { Coin, Msg } from './types';

export interface Liquidity {
  standard: Coin;
  token: Coin;
  liquidity: Coin;
  fee: string;
}

export interface AddLiquidityRequest {
  max_token: Coin;
  exact_standard_amt: number;
  min_liquidity: number;
  deadline: number;
}

export interface RemoveLiquidityRequest {
  min_token: number;
  withdraw_liquidity: Coin;
  min_standard_amt: number;
  deadline: number;
}

export interface SwapOrderRequest {
  input: {
    address: string;
    coin: Coin;
  };
  output: {
    address: string;
    coin: Coin;
  };
  deadline: number;
}

export class MsgAddLiquidity implements Msg {
  type: string;
  value: object;
  constructor(request: AddLiquidityRequest, sender: string) {
    this.type = 'irismod/coinswap/MsgAddLiquidity';
    this.value = {
      max_token: request.max_token,
      exact_standard_amt: request.exact_standard_amt,
      min_liquidity: request.min_liquidity,
      deadline: request.deadline,
      sender,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

export class MsgRemoveLiquidity implements Msg {
  type: string;
  value: object;
  constructor(request: RemoveLiquidityRequest, sender: string) {
    this.type = 'irismod/coinswap/MsgRemoveLiquidity';
    this.value = {
      min_token: request.min_token,
      withdraw_liquidity: request.withdraw_liquidity,
      min_standard_amt: request.min_standard_amt,
      deadline: request.deadline,
      sender,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

export class MsgSwapOrder implements Msg {
  type: string;
  value: object;
  constructor(request: SwapOrderRequest, isBuyOrder: boolean) {
    this.type = 'irismod/coinswap/MsgSwapOrder';
    this.value = {
      input: request.input,
      output: request.output,
      deadline: request.deadline,
      is_buy_order: isBuyOrder,
    };
  }

  getSignBytes(): object {
    return this;
  }
}
