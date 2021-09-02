import * as consts from './types/constants';
import * as modules from './modules';
import { RpcClient } from './nets/rpc-client';
import { AxiosRequestConfig } from 'axios';
import * as types from './types';
import { Wallet } from "./types";
/** IRISHub Client */
export declare class Client {
    /** IRISHub Client Config */
    config: DefaultClientConfig;
    /** Axios client for tendermint rpc requests */
    private _rpcClient?;
    get rpcClient(): RpcClient;
    /** Auth module */
    private _auth?;
    get auth(): modules.Auth;
    /** Token module */
    private _token?;
    get token(): modules.Token;
    /** Bank module */
    private _bank?;
    get bank(): modules.Bank;
    /** Key management module */
    private _keys?;
    get keys(): modules.Keys;
    /** Protobuf module */
    private _protobuf?;
    get protobuf(): modules.Protobuf;
    /** Staking module */
    private _staking?;
    get staking(): modules.Staking;
    /** Tx module */
    private _tx?;
    get tx(): modules.Tx;
    /** Gov module */
    private _gov?;
    get gov(): modules.Gov;
    /** Slashing module */
    private _slashing?;
    get slashing(): modules.Slashing;
    /** Distribution module */
    private _distribution?;
    get distribution(): modules.Distribution;
    /** Service module */
    /** Oracle module */
    /** Random module */
    /** Utils module */
    private _utils?;
    get utils(): modules.Utils;
    /** Tendermint module */
    private _tendermint?;
    get tendermint(): modules.Tendermint;
    /** Coinswap module */
    private _coinswap?;
    get coinswap(): modules.Coinswap;
    /** Farm module */
    private _farm?;
    get farm(): modules.Farm;
    /** NFT module */
    private _nft?;
    get nft(): modules.Nft;
    /** Htlc module */
    private _htlc?;
    get htlc(): modules.Htlc;
    /** Ibc module */
    private _ibc?;
    get ibc(): modules.Ibc;
    /** IRISHub SDK Constructor */
    constructor(config: DefaultClientConfig);
    /**
     * Set Key DAO Implemention
     *
     * @param keyDAO Key DAO Implemention
     * @returns The SDK itself
     */
    withKeyDAO(keyDAO: KeyDAO): this;
    /**
     * Set IRISHub network type
     *
     * @param network IRISHub network type, mainnet / testnet
     * @returns The SDK itself
     */
    withNetwork(network: consts.Network): this;
    /**
     * Set IRISHub network type
     *
     * @param network IRISHub network type, mainnet / testnet
     * @returns The SDK itself
     */
    withChainNetwork(chainNetwork: consts.ChainNetwork): this;
    /**
     * Set IRISHub chain-id
     *
     * @param chainId IRISHub chain-id
     * @returns The SDK itself
     */
    withChainId(chainId: string): this;
    /**
     * Set default gas limit
     *
     * @param gas Default gas limit
     * @returns The SDK itself
     */
    withGas(gas: string): this;
    /**
     * Set default fees
     *
     * @param fee Default fee amount
     * @returns The SDK itself
     */
    withFee(fee: types.Coin): this;
    /**
     * Set Axios config for tendermint rpc requests, refer to: https://github.com/axios/axios#request-config.
     *
     * Note the `baseURL` is set by `SdkConfig.node` and cannot be overwritten by this config
     *
     * @param rpcConfig Axios config for tendermint rpc requests
     * @returns The SDK itself
     */
    withRpcConfig(rpcConfig: AxiosRequestConfig): this;
}
/** IRISHub SDK Config */
export interface ClientConfig {
    /** IRISHub node rpc address */
    node: string;
    /** IRISHub network type, mainnet / testnet */
    network?: consts.Network;
    /** IRISHub chain-id */
    chainId?: string;
    /** Default gas limit */
    gas?: string;
    /** Default fee amount */
    fee?: types.Coin;
    /** Key DAO Implemention */
    keyDAO?: KeyDAO;
    /** Bech32 prefix of the network, will be overwritten by network type */
    bech32Prefix?: types.Bech32Prefix;
    /** Axios request config for tendermint rpc requests */
    rpcConfig?: AxiosRequestConfig;
}
/** Default IRISHub Client Config */
export declare class DefaultClientConfig implements ClientConfig {
    node: string;
    chainNetwork: consts.ChainNetwork;
    network: consts.Network;
    chainId: string;
    gas: string;
    fee: types.Coin;
    keyDAO: KeyDAO;
    bech32Prefix: types.Bech32Prefix;
    rpcConfig: AxiosRequestConfig;
    constructor();
}
/**
 * Key DAO Interface, to be implemented by apps if they need the key management.
 */
export interface KeyDAO {
    /**
     * Save the encrypted private key to app
     *
     * @param name Name of the key
     * @param key The encrypted private key object
     * @throws `SdkError` if the save fails.
     */
    write(name: string, key: Wallet): void;
    /**
     * Get the encrypted private key by name
     *
     * @param name Name of the key
     * @returns The encrypted private key object or undefined
     */
    read(name: string): Wallet;
    /**
     * Delete the key by name
     * @param name Name of the key
     * @throws `SdkError` if the deletion fails.
     */
    delete?(name: string): void;
    /**
     * Optional function to encrypt the private key by yourself. Default to AES Encryption
     * @param privKey The plain private key
     * @param password The password to encrypt the private key
     * @returns The encrypted private key
     * @throws `SdkError` if encrypt failed
     */
    encrypt?(privKey: string, password: string): string;
    /**
     * Optional function to decrypt the private key by yourself. Default to AES Decryption
     * @param encrptedPrivKey The encrpted private key
     * @param password The password to decrypt the private key
     * @returns The plain private key
     * @throws `SdkError` if decrypt failed
     */
    decrypt?(encrptedPrivKey: string, password: string): string;
}
export declare class DefaultKeyDAOImpl implements KeyDAO {
    write(name: string, key: Wallet): void;
    read(name: string): Wallet;
    delete(name: string): void;
    encrypt(privKey: string, password: string): string;
    decrypt(encrptedPrivKey: string, password: string): string;
}
