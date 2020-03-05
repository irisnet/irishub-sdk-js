import * as consts from './types/constants';
import * as modules from './modules';
import { RpcClient } from './nets/rpc-client';
import { EventListener } from './nets/event-listener';
import { AxiosRequestConfig } from 'axios';
import * as types from './types';
import SdkError from './errors';

/** IRISHub Client */
export class Client {
  /** IRISHub Client Config */
  config: DefaultClientConfig;

  /** Axios client for tendermint rpc requests */
  rpcClient: RpcClient;

  /** WebSocket event listener */
  eventListener: EventListener;

  /** Auth module */
  auth: modules.Auth;

  /** Bank module */
  bank: modules.Bank;

  /** Key management module */
  keys: modules.Keys;

  /** Staking module */
  staking: modules.Staking;

  /** Tx module */
  tx: modules.Tx;

  /** Gov module */
  gov: modules.Gov;

  /** Slashing module */
  slashing: modules.Slashing;

  /** IRISHub SDK Constructor */
  constructor(config: DefaultClientConfig) {
    this.config = config;
    this.config.bech32Prefix =
      config.network === consts.Network.Mainnet ? 'iaa' : 'faa';
    this.config.rpcConfig.baseURL = this.config.node;
    this.rpcClient = new RpcClient(this.config.rpcConfig);
    this.eventListener = new EventListener(this.config.node);

    // Modules
    this.auth = new modules.Auth(this);
    this.bank = new modules.Bank(this);
    this.keys = new modules.Keys(this);
    this.tx = new modules.Tx(this);
    this.staking = new modules.Staking(this);
    this.gov = new modules.Gov(this);
    this.slashing = new modules.Slashing(this);
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
    this.config.rpcConfig = rpcConfig;
    this.rpcClient = new RpcClient(this.config.rpcConfig);
    return this;
  }
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

  /** Default fee amount of iris-atto */
  fee?: string;

  /** Key DAO Implemention */
  keyDAO?: KeyDAO;

  /** Bech32 prefix of the address, will be overwritten by network type */
  bech32Prefix?: string;

  /** Axios request config for tendermint rpc requests */
  rpcConfig?: AxiosRequestConfig;

  /** Save the key as a keystore or private key */
  keyStoreType?: types.StoreType;
}

/** Default IRISHub Client Config */
export class DefaultClientConfig implements ClientConfig {
  node: string;
  network: consts.Network;
  chainId: string;
  gas: string;
  fee: string;
  keyDAO: KeyDAO;
  bech32Prefix: string;
  rpcConfig: AxiosRequestConfig;
  keyStoreType: types.StoreType;

  constructor() {
    this.node = '';
    this.network = types.Network.Mainnet;
    this.chainId = 'irishub';
    this.gas = '100000';
    this.fee = '600000000000000000';
    this.keyDAO = new DefaultKeyDAOImpl();
    this.bech32Prefix = '';
    this.rpcConfig = { timeout: 2000 };
    this.keyStoreType = types.StoreType.Keystore;
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
  write(name: string, keystore: types.Keystore | types.Key): void;

  /**
   * Get the keystore by name
   *
   * @param name Name of the key
   * @returns The keystore object
   */
  read(name: string): types.Keystore | types.Key;

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
