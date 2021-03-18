import { Coin, Msg } from './types';
/**
 * param struct for add liquidity tx
 */
export interface AddLiquidityTxParam {
    max_token: Coin;
    exact_standard_amt: string;
    min_liquidity: string;
    deadline: number;
    sender: string;
}
/**
 * Msg for add liquidity
 *
 * @hidden
 */
export declare class MsgAddLiquidity extends Msg {
    value: AddLiquidityTxParam;
    constructor(msg: AddLiquidityTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for add liquidity tx
 */
export interface RemoveLiquidityTxParam {
    withdraw_liquidity: Coin;
    min_token: string;
    min_standard_amt: string;
    deadline: number;
    sender: string;
}
/**
 * Msg for remove liquidity
 *
 * @hidden
 */
export declare class MsgRemoveLiquidity extends Msg {
    value: RemoveLiquidityTxParam;
    constructor(msg: RemoveLiquidityTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for add liquidity tx
 */
export interface SwapOrderTxParam {
    input: {
        address: string;
        coin: Coin;
    };
    output: {
        address: string;
        coin: Coin;
    };
    deadline: number;
    is_buy_order: boolean;
}
/**
 * Msg for swap order
 *
 * @hidden
 */
export declare class MsgSwapOrder extends Msg {
    value: SwapOrderTxParam;
    constructor(msg: SwapOrderTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
export interface Liquidity {
    standard: Coin;
    token: Coin;
    liquidity: Coin;
    fee: string;
}
