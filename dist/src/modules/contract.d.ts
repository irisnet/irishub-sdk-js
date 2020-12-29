/// <reference types="node" />
import { Client } from '../client';
import * as types from '../types';
/**
 * This module implements Contract related functions
 *
 * @category Modules
 * @since v0.17
 */
export declare class Contract {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
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
    storeCode(wasm_byte_code: Buffer, option: {
        source?: string;
        builder?: string;
        instantiate_permission?: {
            permission: types.AccessType;
            address: string;
        };
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
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
    instantiateContract(code_id: number, init_msg: Buffer, init_funds: types.Coin[], label: string, admin: string | undefined, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * MsgExecuteContract submits the given message data to a smart contract
     * @param contract string Contract is the address of the smart contract
     * @param msg bytes Msg json encoded message to be passed to the contract
     * @param sent_funds types.Coin[] SentFunds coins that are transferred to the contract on execution
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    executeContract(contract: string, msg: Buffer, sent_funds: types.Coin[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * MsgMigrateContract runs a code upgrade/ downgrade for a smart contract
     * @param contract string Contract is the address of the smart contract
     * @param code_id  uint64 CodeID references the new WASM code
     * @param migrate_msg  Buffer MigrateMsg json encoded message to be passed to the contract on migration
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    migrateContract(contract: string, code_id: number, migrate_msg: Buffer, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * MsgUpdateAdmin sets a new admin for a smart contract
     * @param new_admin string NewAdmin address to be set
     * @param contract  string Contract is the address of the smart contract
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    updateAdmin(new_admin: string, contract: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * MsgClearAdmin removes any admin stored for a smart contract
     * @param contract  string  Contract is the address of the smart contract
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    clearAdmin(contract: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * ContractInfo gets the contract meta data
     * @param address is the address of the contract to query.
     */
    contractInfo(address: string): Promise<object>;
    /**
     * ContractHistory gets the contract code history
     * @param address is the address of the contract to query
     * @param page_number number
     * @param page_size number
     */
    contractHistory(address: string, page_number?: number, page_size?: number): Promise<object>;
    /**
     * ContractsByCode lists all smart contracts for a code id
     * @param code_id grpc-gateway_out does not support Go style CodID
     * @param page_number number
     * @param page_size number
     */
    contractsByCode(code_id: number, page_number?: number, page_size?: number): Promise<object>;
    /**
     * AllContractState gets all raw store data for a single contract
     * @param address string address is the address of the contract
     * @param page_number number
     * @param page_size number
     */
    allContractState(address: string, page_number?: number, page_size?: number): Promise<object>;
    /**
     * RawContractState gets single key from the raw store data of a contract
     * @param address string address is the address of the contract
     * @param query_data Buffer
     */
    rawContractState(address: string, query_data: Buffer): Promise<object>;
    /**
     * SmartContractState get smart query result from the contract
     * @param address string address is the address of the contract
     * @param query_data Buffer QueryData contains the query data passed to the contract
     */
    smartContractState(address: string, query_data: Buffer): Promise<object>;
    /**
     * Code gets the binary code and metadata for a singe wasm code
     * @param code_id number grpc-gateway_out does not support Go style CodID
     */
    code(code_id: number): Promise<object>;
    /**
     * Codes gets the metadata for all stored wasm codes
     * @param page_number number
     * @param page_size number
     */
    codes(page_number?: number, page_size?: number): Promise<object>;
}
