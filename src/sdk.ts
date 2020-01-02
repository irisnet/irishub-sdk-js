import * as consts from './types/constants';
import * as modules from './modules';
import RpcClient from './nets/rpc-client';
import { AxiosRequestConfig } from 'axios';
import * as types from './types';
import SdkError from './errors';

/**
 * IRISHub SDK
 */
export class Sdk {
  /**
   * IRISHub SDK Config
   */
  config: SdkConfig;

  /**
   * Auth module
   */
  auth: modules.Auth;

  /**
   * Bank module
   */
  bank: modules.Bank;

  /**
   * Key management module
   */
  keys: modules.Keys;

  /**
   * Tx module
   */
  tx: modules.Tx;

  /**
   * IRISHub SDK Constructor
   */
  constructor(
    node: string,
    network: consts.Network,
    chainId: string,
    gas: string,
    fee: string,
    keyDAO: KeyDAO,
    rpcConfig: AxiosRequestConfig
  ) {
    this.config = new SdkConfig(
      node,
      network,
      chainId,
      gas,
      fee,
      keyDAO,
      rpcConfig
    );
    this.auth = new modules.Auth(this);
    this.bank = new modules.Bank(this);
    this.keys = new modules.Keys(this);
    this.tx = new modules.Tx(this);
  }

  /**
   * Set Key DAO Implemention
   *
   * @param keyDAO Key DAO Implemention
   * @returns The SDK itself
   */
  withKeyDAO(keyDAO: KeyDAO) {
    this.config.keyDAO = keyDAO;
    return this;
  }

  /**
   * Set IRISHub network type
   *
   * @param network IRISHub network type, mainnet / testnet
   * @returns The SDK itself
   */
  withNetwork(network: consts.Network) {
    this.config.network = network;
    return this;
  }

  /**
   * Set IRISHub chain-id
   *
   * @param chainId IRISHub chain-id
   * @returns The SDK itself
   */
  withChainId(chainId: string) {
    this.config.chainId = chainId;
    return this;
  }

  /**
   * Set default gas limit
   *
   * @param gas Default gas limit
   * @returns The SDK itself
   */
  withGas(gas: string) {
    this.config.gas = gas;
    return this;
  }

  /**
   * Set default fees
   *
   * @param fee Default fee amount of iris-atto
   * @returns The SDK itself
   */
  withFee(fee: string) {
    this.config.fee = fee;
    return this;
  }

  /**
   * Set Axios config for tendermint rpc requests, refer to: https://github.com/axios/axios#request-config.
   *
   * Note the `baseURL` is set by `SdkConfig.node` and cannot be overwritten by this config
   *
   * @param rpcConfig Axios config for tendermint rpc requests
   * @returns The SDK itself
   */
  withRpcConfig(rpcConfig: AxiosRequestConfig) {
    rpcConfig.baseURL = this.config.node;
    this.config.rpcClient = new RpcClient(rpcConfig);
    return this;
  }
}

/**
 * IRISHub SDK Config
 */
export class SdkConfig {
  /**
   * IRISHub node rpc address
   */
  node: string;

  /**
   * IRISHub network type, mainnet / testnet
   */
  network: consts.Network;

  /**
   * IRISHub chain-id
   */
  chainId: string;

  /**
   * Default gas limit
   */
  gas: string;

  /**
   * Default fee amount of iris-atto
   */
  fee: string;

  /**
   * Key DAO Implemention
   */
  keyDAO: KeyDAO;

  /**
   * Bech32 prefix of the address
   */
  bech32Prefix: string;

  /**
   * Axios client for tendermint rpc requests
   */
  rpcClient: RpcClient;

  constructor(
    node: string,
    network: consts.Network,
    chainId: string,
    gas: string,
    fee: string,
    keyDAO: KeyDAO,
    rpcConfig: AxiosRequestConfig
  ) {
    this.node = node;
    this.network = network;
    this.chainId = chainId;
    this.gas = gas;
    this.fee = fee;
    this.keyDAO = keyDAO;
    this.bech32Prefix = network === consts.Network.Mainnet ? 'iaa' : 'faa';
    rpcConfig.baseURL = this.node;
    this.rpcClient = new RpcClient(rpcConfig);
  }
}

/**
 * Key DAO Interface, to be implemented by apps if they need the key management.
 */
export interface KeyDAO {
  /**
   * Save the keystore to app, throws error if the save fails.
   *
   * @param name Name of the key
   * @param keystore The keystore object
   */
  write(name: string, keystore: types.Keystore): void;

  /**
   * Get the keystore by name
   *
   * @param name Name of the key
   * @returns The keystore object
   */
  read(name: string): types.Keystore;

  /**
   * Delete keystore by name
   * @param name Name of the key
   */
  delete(name: string): void;
}

export class DefaultKeyDAOImpl implements KeyDAO {
  write(name: string, keystore: types.Keystore) {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.'
    );
  }
  read(name: string): types.Keystore {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.'
    );
  }
  delete(name: string) {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.'
    );
  }
}
