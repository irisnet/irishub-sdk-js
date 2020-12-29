/// <reference types="node" />
import { Coin, Msg } from './types';
export declare enum AccessType {
    ACCESS_TYPE_UNSPECIFIED = "ACCESS_TYPE_UNSPECIFIED",
    ACCESS_TYPE_NOBODY = "ACCESS_TYPE_NOBODY",
    ACCESS_TYPE_ONLY_ADDRESS = "ACCESS_TYPE_ONLY_ADDRESS",
    ACCESS_TYPE_EVERYBODY = "ACCESS_TYPE_EVERYBODY"
}
/**
 * param struct for Msg Store Code tx
 */
export interface StoreCodeTxParam {
    sender: string;
    wasm_byte_code: string;
    source?: string;
    builder?: string;
    instantiate_permission?: {
        permission: AccessType;
        address: string;
    };
}
/**
 * Msg for Msg Store Code
 * @hidden
 */
export declare class MsgStoreCode extends Msg {
    value: StoreCodeTxParam;
    constructor(msg: StoreCodeTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for Instantiate Contract tx
 */
export interface InstantiateContractTxParam {
    sender: string;
    admin?: string;
    code_id: number;
    label: string;
    init_msg: Buffer;
    init_funds: Coin[];
}
/**
 * Msg for Msg Instantiate Contract
 * @hidden
 */
export declare class MsgInstantiateContract extends Msg {
    value: InstantiateContractTxParam;
    constructor(msg: InstantiateContractTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for Execute Contract tx
 */
export interface ExecuteContractTxParam {
    sender: string;
    contract: string;
    msg: Buffer;
    sent_funds: Coin[];
}
/**
 * Msg for Msg Execute Contract
 * @hidden
 */
export declare class MsgExecuteContract extends Msg {
    value: ExecuteContractTxParam;
    constructor(msg: ExecuteContractTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for Migrate Contract tx
 */
export interface MigrateContractTxParam {
    sender: string;
    contract: string;
    code_id: number;
    migrate_msg: Buffer;
}
/**
 * Msg for Msg Execute Contract
 * @hidden
 */
export declare class MsgMigrateContract extends Msg {
    value: MigrateContractTxParam;
    constructor(msg: MigrateContractTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for Update Admin tx
 */
export interface UpdateAdminTxParam {
    sender: string;
    new_admin: string;
    contract: string;
}
/**
 * Msg for Msg Execute Contract
 * @hidden
 */
export declare class MsgUpdateAdmin extends Msg {
    value: UpdateAdminTxParam;
    constructor(msg: UpdateAdminTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
/**
 * param struct for Clear Admin tx
 */
export interface ClearAdminTxParam {
    sender: string;
    contract: string;
}
/**
 * Msg for Msg Execute Contract
 * @hidden
 */
export declare class MsgClearAdmin extends Msg {
    value: ClearAdminTxParam;
    constructor(msg: ClearAdminTxParam);
    static getModelClass(): any;
    getModel(): any;
    validate(): void;
}
