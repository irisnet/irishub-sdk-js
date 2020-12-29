import * as consts from './types/constants';
import * as modules from './modules';
import { RpcClient } from './nets/rpc-client';
import { EventListener } from './nets/event-listener';
import { AxiosRequestConfig } from 'axios';
import * as types from './types';
import { SdkError } from './errors';
import * as AES from 'crypto-js/aes';
import * as ENC from 'crypto-js/enc-utf8';

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

  /** Token module */
  token: modules.Token;

  /** Bank module */
  bank: modules.Bank;
  
  /** Key management module */
  keys: modules.Keys;

  /** Protobuf module */
  protobuf: modules.Protobuf;

  /** Staking module */
  staking: modules.Staking;

  /** Tx module */
  tx: modules.Tx;

  /** Gov module */
  gov: modules.Gov;

  /** Slashing module */
  slashing: modules.Slashing;

  /** Distribution module */
  distribution: modules.Distribution;

  /** Service module */
  service: modules.Service;

  /** Oracle module */
  oracle: modules.Oracle;

  /** Random module */
  random: modules.Random;

  /** Utils module */
  utils: modules.Utils;

  /** Tendermint module */
  tendermint: modules.Tendermint;

  /** Coinswap module */
  coinswap: modules.Coinswap;

  /** Contract module */
  contract: modules.Contract;

  /** NFT module */
  nft: modules.Nft;

  /** IRISHub SDK Constructor */
  constructor(config: DefaultClientConfig) {
    this.config = config;
    if (!this.config.rpcConfig) this.config.rpcConfig = {};

    this.config.bech32Prefix =
      config.network === consts.Network.Mainnet
        ? {
            AccAddr: 'iaa',
            AccPub: 'iap',
            ValAddr: 'iva',
            ValPub: 'ivp',
            ConsAddr: 'ica',
            ConsPub: 'icp',
          }
        : {
            AccAddr: 'faa',
            AccPub: 'fap',
            ValAddr: 'fva',
            ValPub: 'fvp',
            ConsAddr: 'fca',
            ConsPub: 'fcp',
          };

      // Support ibc-alpha
      // {
      //   AccAddr: 'cosmos',
      //   AccPub: 'cosmospub',
      //   ValAddr: 'cosmosvaloper',
      //   ValPub: 'cosmosvaloperpub',
      //   ConsAddr: 'cosmosvalcons',
      //   ConsPub: 'cosmosvalconspub',
      // };
    this.config.rpcConfig.baseURL = this.config.node;
    this.rpcClient = new RpcClient(this.config.rpcConfig);
    this.eventListener = new EventListener(this);

    // Modules
    this.token = new modules.Token(this);
    this.utils = new modules.Utils(this);
    this.bank = new modules.Bank(this);
    this.keys = new modules.Keys(this);
    this.tx = new modules.Tx(this);
    this.protobuf = new modules.Protobuf(this);
    this.staking = new modules.Staking(this);
    this.gov = new modules.Gov(this);
    this.slashing = new modules.Slashing(this);
    this.distribution = new modules.Distribution(this);
    this.service = new modules.Service(this);
    this.oracle = new modules.Oracle(this);
    this.random = new modules.Random(this);
    this.auth = new modules.Auth(this);
    this.tendermint = new modules.Tendermint(this);
    this.coinswap = new modules.Coinswap(this);
    this.contract = new modules.Contract(this);
    this.nft = new modules.Nft(this);
    
    // Set default encrypt/decrypt methods
    if (!this.config.keyDAO.encrypt || !this.config.keyDAO.decrypt) {
      const defaultKeyDAO = new DefaultKeyDAOImpl();
      this.config.keyDAO.encrypt = defaultKeyDAO.encrypt;
      this.config.keyDAO.decrypt = defaultKeyDAO.decrypt;
    }
  }

  /**
   * Set Key DAO Implemention
   *
   * @param keyDAO Key DAO Implemention
   * @returns The SDK itself
   */
  withKeyDAO(keyDAO: KeyDAO) {
    // Set default encrypt/decrypt methods
    if (!keyDAO.encrypt || !keyDAO.decrypt) {
      const defaultKeyDAO = new DefaultKeyDAOImpl();
      keyDAO.encrypt = defaultKeyDAO.encrypt;
      keyDAO.decrypt = defaultKeyDAO.decrypt;
    }
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
   * @param fee Default fee amount
   * @returns The SDK itself
   */
  withFee(fee: types.Coin) {
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

  /** Default fee amount */
  fee?: types.Coin;

  /** Key DAO Implemention */
  keyDAO?: KeyDAO;

  /** Bech32 prefix of the network, will be overwritten by network type */
  bech32Prefix?: Bech32Prefix;

  /** Axios request config for tendermint rpc requests */
  rpcConfig?: AxiosRequestConfig;
}

/** Default IRISHub Client Config */
export class DefaultClientConfig implements ClientConfig {
  node: string;
  network: consts.Network;
  chainId: string;
  gas: string;
  fee: types.Coin;
  keyDAO: KeyDAO;
  bech32Prefix: Bech32Prefix;
  rpcConfig: AxiosRequestConfig;

  constructor() {
    this.node = '';
    this.network = types.Network.Mainnet;
    this.chainId = 'irishub';
    this.gas = '100000';
    this.fee = { amount: '0.6', denom: 'iris' };
    this.keyDAO = new DefaultKeyDAOImpl();
    this.bech32Prefix = {} as Bech32Prefix;
    this.rpcConfig = { timeout: 2000 };
  }
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
  write(name: string, key: types.Key): void;

  /**
   * Get the encrypted private key by name
   *
   * @param name Name of the key
   * @returns The encrypted private key object or undefined
   */
  read(name: string): types.Key;

  /**
   * Delete the key by name
   * @param name Name of the key
   * @throws `SdkError` if the deletion fails.
   */
  delete(name: string): void;

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

/**
 * Bech32 Prefix
 */
export interface Bech32Prefix {
  AccAddr: string;
  AccPub: string;
  ValAddr: string;
  ValPub: string;
  ConsAddr: string;
  ConsPub: string;
}

export class DefaultKeyDAOImpl implements KeyDAO {
  write(name: string, key: types.Key): void {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.'
    );
  }
  read(name: string): types.Key {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.'
    );
  }
  delete(name: string): void {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.'
    );
  }
  encrypt(privKey: string, password: string): string {
    const encrypted = AES.encrypt(privKey, password).toString();
    if (!encrypted) {
      throw new SdkError('Private key encrypt failed');
    }
    return encrypted;
  }

  decrypt(encrptedPrivKey: string, password: string): string {
    const decrypted = AES.decrypt(encrptedPrivKey, password).toString(ENC);
    if (!decrypted) {
      throw new SdkError('Wrong password');
    }
    return decrypted;
  }
}
