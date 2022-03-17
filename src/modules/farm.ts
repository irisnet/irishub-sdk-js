import {Client} from "../client";
import * as types from '../types';
import {BaseTx} from "../types";

export class Farm {
    /** @hidden */
    private client: Client;

    /** @hidden */
    constructor(client: Client) {
        this.client = client;
    }
    /**
     * stake lpt
     * @param farmPoolID  farm pool ID
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    async stakeLp(
        pool_id:string,
        amount:types.Coin,
        baseTx:BaseTx
    ):Promise<types.TxResult>{
        const sender = this.client.keys.show(baseTx.from)
        const msgs:any[] = [
            {
                type:types.TxType.MsgStake,
                value:{
                    pool_id,
                    amount,
                    sender
                }
            }
        ]
        return this.client.tx.buildAndSend(msgs, baseTx);
    };
    /**
     * unstake lpt
     * @param farmPoolName  farm pool name
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    async unStakeLp(
        pool_id:string,
        amount:types.Coin,
        baseTx:BaseTx
    ):Promise<types.TxResult>{
        const sender = this.client.keys.show(baseTx.from)
        const msgs:any[] = [
            {
                type:types.TxType.MsgUnstake,
                value:{
                    pool_id,
                    amount,
                    sender
                }
            }
        ]
        return this.client.tx.buildAndSend(msgs, baseTx);
    }
    /**
     * harvest lpt
     * @param farmPoolName  farm pool name
     * @param baseTx { types.BaseTx }
     * @returns
     */
    async harvestReward(
        pool_id:string,
        baseTx:BaseTx
    ):Promise<types.TxResult>{
        const sender = this.client.keys.show(baseTx.from)
        const msgs:any[] = [
            {
                type:types.TxType.MsgHarvest,
                value:{
                    pool_id,
                    sender
                }
            }
        ]
        return this.client.tx.buildAndSend(msgs, baseTx);
    }
}