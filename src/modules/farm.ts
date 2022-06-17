import {Client} from "../client";
import { SdkError } from "../errors";
import { ModelCreator } from "../helper";
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

    /**
     * query Farm Pools
     */
    queryFarmPools(pagination?:types.Pagination): Promise<object> {
        const request = new types.farm_query_pb.QueryFarmPoolsRequest();
        request.setPagination(ModelCreator.createPaginationModel(pagination));

        return this.client.rpcClient.protoQuery(
        '/irismod.farm.Query/FarmPools',
        request,
        types.farm_query_pb.QueryFarmPoolsResponse
        );
    }

    /**
     * query Farm Pool
     */
     queryFarmPool(id: string): Promise<object> {
        if (!id) {
            throw new SdkError("id can ont be empty");
          }
        const request = new types.farm_query_pb.QueryFarmPoolRequest();
        request.setId(id);
        return this.client.rpcClient.protoQuery(
        '/irismod.farm.Query/FarmPool',
        request,
        types.farm_query_pb.QueryFarmPoolResponse
        );
    }

    /**
     * query Farmer
     */
     queryFarmer(
        farmer: string,
        pool_id: string): Promise<object> {
        if (!farmer) {
        throw new SdkError("farmer can ont be empty");
        }
        if (!pool_id) {
        throw new SdkError("pool_id can ont be empty");
        }
        const request = new types.farm_query_pb.QueryFarmerRequest();
        request.setFarmer(farmer);
        request.setPoolId(pool_id);
        return this.client.rpcClient.protoQuery(
        '/irismod.farm.Query/Farmer',
        request,
        types.farm_query_pb.QueryFarmerResponse
        );
    }

    /**
     * query Params
     */
     queryParams(): Promise<object> {
        const request = new types.farm_query_pb.QueryParamsRequest();
        return this.client.rpcClient.protoQuery(
        '/irismod.farm.Query/Params',
        request,
        types.farm_query_pb.QueryParamsResponse
        );
    }
}