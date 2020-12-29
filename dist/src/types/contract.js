"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClearAdmin = exports.MsgUpdateAdmin = exports.MsgMigrateContract = exports.MsgExecuteContract = exports.MsgInstantiateContract = exports.MsgStoreCode = exports.AccessType = void 0;
const types_1 = require("./types");
const helper_1 = require("../helper");
const pbs = require("./proto");
// AccessType permission types
var AccessType;
(function (AccessType) {
    AccessType["ACCESS_TYPE_UNSPECIFIED"] = "ACCESS_TYPE_UNSPECIFIED";
    AccessType["ACCESS_TYPE_NOBODY"] = "ACCESS_TYPE_NOBODY";
    AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = "ACCESS_TYPE_ONLY_ADDRESS";
    AccessType["ACCESS_TYPE_EVERYBODY"] = "ACCESS_TYPE_EVERYBODY";
})(AccessType = exports.AccessType || (exports.AccessType = {}));
/**
 * Msg for Msg Store Code
 * @hidden
 */
class MsgStoreCode extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgStoreCode);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.contract_tx_pb.MsgStoreCode;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setSender(this.value.sender);
        msg.setWasmByteCode(this.value.wasm_byte_code);
        if (this.value.source) {
            msg.setSource(this.value.source);
        }
        if (this.value.builder) {
            msg.setBuilder(this.value.builder);
        }
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
exports.MsgStoreCode = MsgStoreCode;
/**
 * Msg for Msg Instantiate Contract
 * @hidden
 */
class MsgInstantiateContract extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgInstantiateContract);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.contract_tx_pb.MsgInstantiateContract;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setSender(this.value.sender);
        if (this.value.admin) {
            msg.setAdmin(this.value.admin);
        }
        msg.setCodeId(this.value.code_id);
        if (this.value.label) {
            msg.setLabel(this.value.label);
        }
        msg.setInitMsg(this.value.init_msg);
        this.value.init_funds.forEach((item) => {
            msg.addInitFunds(helper_1.TxModelCreator.createCoinModel(item.denom, item.amount));
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
exports.MsgInstantiateContract = MsgInstantiateContract;
/**
 * Msg for Msg Execute Contract
 * @hidden
 */
class MsgExecuteContract extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgExecuteContract);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.contract_tx_pb.MsgExecuteContract;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
        msg.setSender(this.value.sender);
        msg.setContract(this.value.contract);
        msg.setMsg(this.value.msg);
        this.value.sent_funds.forEach((item) => {
            msg.addSentFunds(helper_1.TxModelCreator.createCoinModel(item.denom, item.amount));
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
exports.MsgExecuteContract = MsgExecuteContract;
/**
 * Msg for Msg Execute Contract
 * @hidden
 */
class MsgMigrateContract extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgMigrateContract);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.contract_tx_pb.MsgMigrateContract;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
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
exports.MsgMigrateContract = MsgMigrateContract;
/**
 * Msg for Msg Execute Contract
 * @hidden
 */
class MsgUpdateAdmin extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgUpdateAdmin);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.contract_tx_pb.MsgUpdateAdmin;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
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
exports.MsgUpdateAdmin = MsgUpdateAdmin;
/**
 * Msg for Msg Execute Contract
 * @hidden
 */
class MsgClearAdmin extends types_1.Msg {
    constructor(msg) {
        super(types_1.TxType.MsgClearAdmin);
        this.value = msg;
    }
    static getModelClass() {
        return pbs.contract_tx_pb.MsgClearAdmin;
    }
    getModel() {
        let msg = new (this.constructor.getModelClass())();
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
exports.MsgClearAdmin = MsgClearAdmin;
//# sourceMappingURL=contract.js.map