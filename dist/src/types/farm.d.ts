import { Coin, Msg } from "./types";
export interface FarmParams {
    pool_id: string;
    amount: Coin;
    sender: string;
}
/**
 * Msg for stake lp
 *
 * @hidden
 */
export declare class MsgStake extends Msg {
    value: FarmParams;
    constructor(msg: FarmParams);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * Msg for Unstake lp
 *
 * @hidden
 */
export declare class MsgUnstake extends Msg {
    value: FarmParams;
    constructor(msg: FarmParams);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
export interface HarvestParams {
    pool_id: string;
    sender: string;
}
/**
 * Msg for harvest reward
 *
 * @hidden
 */
export declare class MsgHarvest extends Msg {
    value: HarvestParams;
    constructor(msg: HarvestParams);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
