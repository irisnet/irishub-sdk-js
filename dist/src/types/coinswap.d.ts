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
export declare class MsgAddLiquidity extends Msg {
    value: object;
    constructor(request: DepositRequest, sender: string);
    getSignBytes(): object;
}
export declare class MsgRemoveLiquidity extends Msg {
    value: object;
    constructor(request: WithdrawRequest, sender: string);
    getSignBytes(): object;
}
export declare class MsgSwapOrder extends Msg {
    value: object;
    constructor(request: SwapOrderRequest, isBuyOrder: boolean);
    getSignBytes(): object;
}
