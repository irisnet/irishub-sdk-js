import { Coin, Msg } from './types';

export interface Liquidity {
  standard: Coin;
  token: Coin;
  liquidity: Coin;
  fee: string;
}

export interface DepositRequest {
  max_token: Coin;
  exact_standard_amt: number;
  min_liquidity: number;
  deadline: number;
}

export interface WithdrawRequest {
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
  constructor(request: DepositRequest, sender: string) {
    const deadline = new Date();
    deadline.setTime(deadline.getTime() + request.deadline);
    this.type = 'irismod/coinswap/MsgAddLiquidity';
    this.value = {
      max_token: request.max_token,
      exact_standard_amt: String(request.exact_standard_amt),
      min_liquidity: String(request.min_liquidity),
      deadline: deadline.getTime().toString(),
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
  constructor(request: WithdrawRequest, sender: string) {
    const deadline = new Date();
    deadline.setMilliseconds(deadline.getTime() + request.deadline);
    this.type = 'irismod/coinswap/MsgRemoveLiquidity';
    this.value = {
      min_token: String(request.min_token),
      withdraw_liquidity: request.withdraw_liquidity,
      min_standard_amt: String(request.min_standard_amt),
      deadline: deadline.getTime().toString(),
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
    const deadline = new Date();
    deadline.setTime(deadline.getTime() + request.deadline);
    this.type = 'irismod/coinswap/MsgSwapOrder';
    this.value = {
      input: request.input,
      output: request.output,
      deadline: deadline.getTime().toString(),
      is_buy_order: isBuyOrder,
    };
  }

  getSignBytes(): object {
    return this;
  }
}
