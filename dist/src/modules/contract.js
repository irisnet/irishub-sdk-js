"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
const types = require("../types");
const helper_1 = require("../helper");
/**
 * This module implements Contract related functions
 *
 * @category Modules
 * @since v0.17
 */
class Contract {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * MsgStoreCode submit Wasm code to the system
     * @param wasm_byte_code Buffer WASMByteCode can be raw or gzip compressed
     * @param params {
        source?:string,  //Source is a valid absolute HTTPS URI to the contract's source code, optional
        builder?:string, //Builder is a valid docker image name with tag, optional
        instantiate_permission?:{ permission:types.AccessType, address:string } //InstantiatePermission access control to apply on contract creation, optional
      }
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    storeCode(wasm_byte_code, option, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgStoreCode,
                    value: {
                        sender: sender,
                        wasm_byte_code: wasm_byte_code,
                        source: (option || {}).source || '',
                        builder: (option || {}).builder || '',
                        instantiate_permission: (option || {}).instantiate_permission
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * MsgInstantiateContract create a new smart contract instance for the given code id
     * @param code_id uint64 CodeID is the reference to the stored WASM code
     * @param init_msg bytes InitMsg json encoded message to be passed to the contract on instantiation
     * @param init_funds types.Coin[] InitFunds coins that are transferred to the contract on instantiation
     * @param  admin: string  Admin is an optional address that can execute migrations
     * @param  label: string  Label is optional metadata to be stored with a contract instance.
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    instantiateContract(code_id, init_msg, init_funds, label, admin = '', baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgInstantiateContract,
                    value: {
                        sender: sender,
                        admin: admin,
                        code_id: code_id,
                        label: label,
                        init_msg: init_msg,
                        init_funds: init_funds
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * MsgExecuteContract submits the given message data to a smart contract
     * @param contract string Contract is the address of the smart contract
     * @param msg bytes Msg json encoded message to be passed to the contract
     * @param sent_funds types.Coin[] SentFunds coins that are transferred to the contract on execution
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    executeContract(contract, msg, sent_funds, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgExecuteContract,
                    value: {
                        sender: sender,
                        contract: contract,
                        msg: msg,
                        sent_funds: sent_funds,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * MsgMigrateContract runs a code upgrade/ downgrade for a smart contract
     * @param contract string Contract is the address of the smart contract
     * @param code_id  uint64 CodeID references the new WASM code
     * @param migrate_msg  Buffer MigrateMsg json encoded message to be passed to the contract on migration
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    migrateContract(contract, code_id, migrate_msg, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgMigrateContract,
                    value: {
                        sender: sender,
                        contract: contract,
                        code_id: code_id,
                        migrate_msg: migrate_msg,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * MsgUpdateAdmin sets a new admin for a smart contract
     * @param new_admin string NewAdmin address to be set
     * @param contract  string Contract is the address of the smart contract
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    updateAdmin(new_admin, contract, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgUpdateAdmin,
                    value: {
                        sender: sender,
                        new_admin: new_admin,
                        contract: contract,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * MsgClearAdmin removes any admin stored for a smart contract
     * @param contract  string  Contract is the address of the smart contract
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    clearAdmin(contract, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgClearAdmin,
                    value: {
                        sender: sender,
                        contract: contract,
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * ContractInfo gets the contract meta data
     * @param address is the address of the contract to query.
     */
    contractInfo(address) {
        if (!address) {
            throw new Error("address can not be empty");
        }
        const request = new types.contract_query_pb.QueryContractInfoRequest();
        request.setAddress(address);
        return this.client.rpcClient.protoQuery('/wasmd.x.wasmd.v1beta1.Query/ContractInfo', request, types.contract_query_pb.QueryContractInfoResponse);
    }
    /**
     * ContractHistory gets the contract code history
     * @param address is the address of the contract to query
     * @param page_number number
     * @param page_size number
     */
    contractHistory(address, page_number = 1, page_size = 10) {
        if (!address) {
            throw new Error("address can not be empty");
        }
        const pagination = helper_1.ModelCreator.createPaginationModel(page_number, page_size, true);
        const request = new types.contract_query_pb.QueryContractHistoryRequest();
        request.setAddress(address);
        request.setPagination(pagination);
        return this.client.rpcClient.protoQuery('/wasmd.x.wasmd.v1beta1.Query/ContractHistory', request, types.contract_query_pb.QueryContractHistoryResponse);
    }
    /**
     * ContractsByCode lists all smart contracts for a code id
     * @param code_id grpc-gateway_out does not support Go style CodID
     * @param page_number number
     * @param page_size number
     */
    contractsByCode(code_id, page_number = 1, page_size = 10) {
        if (!code_id) {
            throw new Error("code_id can not be empty");
        }
        const pagination = helper_1.ModelCreator.createPaginationModel(page_number, page_size, true);
        const request = new types.contract_query_pb.QueryContractsByCodeRequest();
        request.setCodeId(code_id);
        request.setPagination(pagination);
        return this.client.rpcClient.protoQuery('/wasmd.x.wasmd.v1beta1.Query/ContractsByCode', request, types.contract_query_pb.QueryContractsByCodeResponse);
    }
    /**
     * AllContractState gets all raw store data for a single contract
     * @param address string address is the address of the contract
     * @param page_number number
     * @param page_size number
     */
    allContractState(address, page_number = 1, page_size = 10) {
        if (!address) {
            throw new Error("address can not be empty");
        }
        const pagination = helper_1.ModelCreator.createPaginationModel(page_number, page_size, true);
        const request = new types.contract_query_pb.QueryAllContractStateRequest();
        request.setAddress(address);
        request.setPagination(pagination);
        return this.client.rpcClient.protoQuery('/wasmd.x.wasmd.v1beta1.Query/AllContractState', request, types.contract_query_pb.QueryAllContractStateResponse);
    }
    /**
     * RawContractState gets single key from the raw store data of a contract
     * @param address string address is the address of the contract
     * @param query_data Buffer
     */
    rawContractState(address, query_data) {
        if (!address) {
            throw new Error("address can not be empty");
        }
        if (!query_data) {
            throw new Error("query_data can not be empty");
        }
        const request = new types.contract_query_pb.QueryRawContractStateRequest();
        request.setAddress(address);
        request.setQueryData(query_data);
        return this.client.rpcClient.protoQuery('/wasmd.x.wasmd.v1beta1.Query/RawContractState', request, types.contract_query_pb.QueryRawContractStateResponse);
    }
    /**
     * SmartContractState get smart query result from the contract
     * @param address string address is the address of the contract
     * @param query_data Buffer QueryData contains the query data passed to the contract
     */
    smartContractState(address, query_data) {
        if (!address) {
            throw new Error("address can not be empty");
        }
        if (!query_data) {
            throw new Error("query_data can not be empty");
        }
        const request = new types.contract_query_pb.QuerySmartContractStateRequest();
        request.setAddress(address);
        request.setQueryData(query_data);
        return this.client.rpcClient.protoQuery('/wasmd.x.wasmd.v1beta1.Query/SmartContractState', request, types.contract_query_pb.QuerySmartContractStateResponse);
    }
    /**
     * Code gets the binary code and metadata for a singe wasm code
     * @param code_id number grpc-gateway_out does not support Go style CodID
     */
    code(code_id) {
        if (!code_id) {
            throw new Error("code_id can not be empty");
        }
        const request = new types.contract_query_pb.QueryCodeRequest();
        request.setCodeId(code_id);
        return this.client.rpcClient.protoQuery('/wasmd.x.wasmd.v1beta1.Query/Code', request, types.contract_query_pb.QueryCodeResponse);
    }
    /**
     * Codes gets the metadata for all stored wasm codes
     * @param page_number number
     * @param page_size number
     */
    codes(page_number = 1, page_size = 10) {
        const pagination = helper_1.ModelCreator.createPaginationModel(page_number, page_size, true);
        const request = new types.contract_query_pb.QueryCodesRequest();
        request.setPagination(pagination);
        return this.client.rpcClient.protoQuery('/wasmd.x.wasmd.v1beta1.Query/Codes', request, types.contract_query_pb.QueryCodesResponse);
    }
}
exports.Contract = Contract;
//# sourceMappingURL=contract.js.map