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
     * @param farmPoolID  farm pool ID
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    stakeLp(pool_id: string, amount: types.Coin, baseTx: BaseTx): Promise<types.TxResult>;
    /**
     * unstake lpt
     * @param farmPoolName  farm pool name
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    unStakeLp(pool_id: string, amount: types.Coin, baseTx: BaseTx): Promise<types.TxResult>;
    /**
     * harvest lpt
     * @param farmPoolName  farm pool name
     * @param baseTx { types.BaseTx }
     * @returns
     */
    harvestReward(pool_id: string, baseTx: BaseTx): Promise<types.TxResult>;
    /**
     * query Farm Pools
     */
    queryFarmPools(pagination?: types.Pagination): Promise<object>;
    /**
     * query Farm Pool
     */
    queryFarmPool(id: string): Promise<object>;
    /**
     * query Farmer
     */
    queryFarmer(farmer: string, pool_id: string): Promise<object>;
    /**
     * query Params
     */
    queryParams(): Promise<object>;
}
