import { Client } from "../client";
import * as types from '../types';
import { BaseTx } from "../types";
export declare class Farm {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * stake lpt
     * @param farmPoolName  farm pool name
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    stakeLp(pool_name: string, amount: types.Coin, baseTx: BaseTx): Promise<types.TxResult>;
    /**
     * unstake lpt
     * @param farmPoolName  farm pool name
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    unStakeLp(pool_name: string, amount: types.Coin, baseTx: BaseTx): Promise<types.TxResult>;
    /**
     * harvest lpt
     * @param farmPoolName  farm pool name
     * @param baseTx { types.BaseTx }
     * @returns
     */
    harvestReward(pool_name: string, baseTx: BaseTx): Promise<types.TxResult>;
}
