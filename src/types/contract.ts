import {  Coin, Msg, Pubkey, TxType } from './types';
import { TxModelCreator } from '../helper';
import * as pbs from "./proto";

// AccessType permission types
export enum AccessType {
  ACCESS_TYPE_UNSPECIFIED = 'ACCESS_TYPE_UNSPECIFIED',
  ACCESS_TYPE_NOBODY = 'ACCESS_TYPE_NOBODY',
  ACCESS_TYPE_ONLY_ADDRESS = 'ACCESS_TYPE_ONLY_ADDRESS',
  ACCESS_TYPE_EVERYBODY = 'ACCESS_TYPE_EVERYBODY',
}

/**
 * param struct for Msg Store Code tx
 */
export interface StoreCodeTxParam {
  sender: string,
  wasm_byte_code: string,
  source?:string,
  builder?:string,
  instantiate_permission?:{ permission:AccessType, address:string },
}

/**
 * Msg for Msg Store Code
 * @hidden
 */
export class MsgStoreCode extends Msg {
  value: StoreCodeTxParam;

  constructor(msg:StoreCodeTxParam) {
    super(TxType.MsgStoreCode);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.contract_tx_pb.MsgStoreCode;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSender(this.value.sender);
    msg.setWasmByteCode(this.value.wasm_byte_code);
    if (this.value.source) { msg.setSource(this.value.source); }
    if (this.value.builder) { msg.setBuilder(this.value.builder); }
    if (this.value.instantiate_permission && this.value.instantiate_permission.permission) {
      let accessConfig = new pbs.contract_tx_pb.AccessConfig();
      accessConfig.setPermission(pbs.contract_types_pb.AccessType[this.value.instantiate_permission.permission]);
      if (this.value.instantiate_permission.address) {
        accessConfig.setAddress(this.value.instantiate_permission.address);
      }
      msg.setInstantiatePermission(accessConfig);
    }
    return msg;
  }

  validate() {
    if (!this.value.sender) {
      throw new Error("sender is  empty");
    }
    if (!this.value.wasm_byte_code) {
      throw new Error("wasm_byte_code is  empty");
    }
  }
}

/**
 * param struct for Instantiate Contract tx
 */
export interface InstantiateContractTxParam {
  sender: string,
  admin?: string,
  code_id: number,
  label: string,
  init_msg: Buffer,
  init_funds: Coin[],
}

/**
 * Msg for Msg Instantiate Contract
 * @hidden
 */
export class MsgInstantiateContract extends Msg {
  value: InstantiateContractTxParam;

  constructor(msg:InstantiateContractTxParam) {
    super(TxType.MsgInstantiateContract);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.contract_tx_pb.MsgInstantiateContract;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSender(this.value.sender);
    if (this.value.admin) {msg.setAdmin(this.value.admin);}
    msg.setCodeId(this.value.code_id);
    if (this.value.label) {msg.setLabel(this.value.label);}
    msg.setInitMsg(this.value.init_msg);
    this.value.init_funds.forEach((item)=>{
        msg.addInitFunds(TxModelCreator.createCoinModel(item.denom, item.amount));
    });
    return msg;
  }

  validate() {
    if (!this.value.sender) {
      throw new Error("sender is  empty");
    }
    if (!this.value.code_id) {
      throw new Error("code_id is  empty");
    }
    if (!this.value.label) {
      throw new Error("label is  empty");
    }
    if (!this.value.init_msg) {
      throw new Error("init_msg is  empty");
    }
    if (!(this.value.init_funds && this.value.init_funds.length)) {
      throw new Error("init_funds is  empty");
    }
  }
}

/**
 * param struct for Execute Contract tx
 */
export interface ExecuteContractTxParam {
  sender: string,
  contract: string,
  msg:Buffer,
  sent_funds:Coin[],
}

/**
 * Msg for Msg Execute Contract
 * @hidden
 */
export class MsgExecuteContract extends Msg {
  value: ExecuteContractTxParam;

  constructor(msg:ExecuteContractTxParam) {
    super(TxType.MsgExecuteContract);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.contract_tx_pb.MsgExecuteContract;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSender(this.value.sender);
    msg.setContract(this.value.contract);
    msg.setMsg(this.value.msg);
    this.value.sent_funds.forEach((item)=>{
        msg.addSentFunds(TxModelCreator.createCoinModel(item.denom, item.amount));
    });
    return msg;
  }

  validate() {
    if (!this.value.sender) {
      throw new Error("sender is  empty");
    }
    if (!this.value.contract) {
      throw new Error("contract is  empty");
    }
    if (!this.value.msg) {
      throw new Error("msg is  empty");
    }
    if (!(this.value.sent_funds && this.value.sent_funds.length)) {
      throw new Error("sent_funds is  empty");
    }
  }
}


/**
 * param struct for Migrate Contract tx
 */
export interface MigrateContractTxParam {
  sender: string,
  contract: string,
  code_id: number,
  migrate_msg: Buffer,
}

/**
 * Msg for Msg Execute Contract
 * @hidden
 */
export class MsgMigrateContract extends Msg {
  value: MigrateContractTxParam;

  constructor(msg:MigrateContractTxParam) {
    super(TxType.MsgMigrateContract);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.contract_tx_pb.MsgMigrateContract;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSender(this.value.sender);
    msg.setContract(this.value.contract);
    msg.setCodeId(this.value.code_id);
    msg.setMigrateMsg(this.value.migrate_msg);
    return msg;
  }

  validate() {
    if (!this.value.sender) {
      throw new Error("sender is  empty");
    }
    if (!this.value.contract) {
      throw new Error("contract is  empty");
    }
    if (!this.value.code_id) {
      throw new Error("code_id is  empty");
    }
    if (!this.value.migrate_msg) {
      throw new Error("migrate_msg is  empty");
    }
  }
}

/**
 * param struct for Update Admin tx
 */
export interface UpdateAdminTxParam {
  sender: string,
  new_admin: string,
  contract: string,
}

/**
 * Msg for Msg Execute Contract
 * @hidden
 */
export class MsgUpdateAdmin extends Msg {
  value: UpdateAdminTxParam;

  constructor(msg:UpdateAdminTxParam) {
    super(TxType.MsgUpdateAdmin);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.contract_tx_pb.MsgUpdateAdmin;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSender(this.value.sender);
    msg.setNewAdmin(this.value.new_admin);
    msg.setContract(this.value.contract);
    return msg;
  }

  validate() {
    if (!this.value.sender) {
      throw new Error("sender is  empty");
    }
    if (!this.value.new_admin) {
      throw new Error("new_admin is  empty");
    }
    if (!this.value.contract) {
      throw new Error("contract is  empty");
    }
  }
}

/**
 * param struct for Clear Admin tx
 */
export interface ClearAdminTxParam {
  sender: string,
  contract: string,
}

/**
 * Msg for Msg Execute Contract
 * @hidden
 */
export class MsgClearAdmin extends Msg {
  value: ClearAdminTxParam;

  constructor(msg:ClearAdminTxParam) {
    super(TxType.MsgClearAdmin);
    this.value = msg;
  }

  static getModelClass():any{
    return pbs.contract_tx_pb.MsgClearAdmin;
  }

  getModel():any{
    let msg = new ((this.constructor as any).getModelClass())();
    msg.setSender(this.value.sender);
    msg.setContract(this.value.contract);
    return msg;
  }

  validate() {
    if (!this.value.sender) {
      throw new Error("sender is  empty");
    }
    if (!this.value.contract) {
      throw new Error("contract is  empty");
    }
  }
}