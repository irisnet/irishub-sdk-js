import * as consts from './types/constants';
import * as modules from './modules';
import { RpcClient } from './nets/rpc-client';
import { EventListener } from './nets/event-listener';
import { AxiosRequestConfig } from 'axios';
import * as types from './types';
import { SdkError, CODES } from './errors';
import * as AES from 'crypto-js/aes';
import * as ENC from 'crypto-js/enc-utf8';
import {Wallet} from "./types";

/** IRISHub Client */
export class Client {
  /** IRISHub Client Config */
  config: DefaultClientConfig;

  /** Axios client for tendermint rpc requests */
  private _rpcClient?: RpcClient;
  get rpcClient():RpcClient{
    if (!this._rpcClient) {this._rpcClient = new RpcClient(this.config.rpcConfig)}
    return this._rpcClient;
  }

  /** Auth module */
  private _auth?: modules.Auth;
  get auth(): modules.Auth{
    if (!this._auth) {this._auth = new modules.Auth(this)}
    return this._auth;
  }

  /** Token module */
  private _token?: modules.Token;
  get token(): modules.Token{
    if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
      throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
    }
    if (!this._token) {
      this._token = new modules.Token(this)
    }
    return this._token;
  }

  /** Bank module */
  private _bank?: modules.Bank;
  get bank():modules.Bank{
    if (!this._bank) {this._bank = new modules.Bank(this)}
    return this._bank;
  }

  /** Key management module */
  private _keys?: modules.Keys;
  get keys():modules.Keys{
    if (!this._keys) {this._keys = new modules.Keys(this)}
    return this._keys;
  }

  /** Protobuf module */
  private _protobuf?: modules.Protobuf;
  get protobuf():modules.Protobuf{
    if (!this._protobuf) {this._protobuf = new modules.Protobuf(this)}
    return this._protobuf;
  }

  /** Staking module */
  private _staking?: modules.Staking;
  get staking():modules.Staking{
    if (!this._staking) {this._staking = new modules.Staking(this)}
    return this._staking;
  }

  /** Tx module */
  private _tx?: modules.Tx;
  get tx():modules.Tx{
    if (!this._tx) {this._tx = new modules.Tx(this)}
    return this._tx;
  }

  /** Gov module */
  private _gov?: modules.Gov;
  get gov():modules.Gov{
    if (!this._gov) {this._gov = new modules.Gov(this)}
    return this._gov;
  }


  /** Slashing module */
  private _slashing?: modules.Slashing;
  get slashing(): modules.Slashing{
    if (!this._slashing) {this._slashing = new modules.Slashing(this)}
    return this._slashing;
  }

  /** Distribution module */
  private _distribution?: modules.Distribution;
  get distribution(): modules.Distribution{
    if (!this._distribution) {this._distribution = new modules.Distribution(this)}
    return this._distribution;
  }

  /** Service module */
  // private _service?: modules.Service;
  // get service(): modules.Service{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._service) {this._service = new modules.Service(this)}
  //   return this._service;
  // }

  /** Oracle module */
  // private _oracle?: modules.Oracle;
  // get oracle(): modules.Oracle{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._oracle) {this._oracle = new modules.Oracle(this)}
  //   return this._oracle;
  // }

  /** Random module */
  // private _random?: modules.Random;
  // get random(): modules.Random{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._random) {this._random = new modules.Random(this)}
  //   return this._random;
  // }

  /** Utils module */
  private _utils?: modules.Utils;
  get utils(): modules.Utils{
    if (!this._utils) {this._utils = new modules.Utils(this)}
    return this._utils;
  }

  /** Tendermint module */
  private _tendermint?: modules.Tendermint;
  get tendermint(): modules.Tendermint{
    if (!this._tendermint) {this._tendermint = new modules.Tendermint(this)}
    return this._tendermint;
  }

  /** Coinswap module */
  private _coinswap?: modules.Coinswap;
  get coinswap(): modules.Coinswap{
    if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
      throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
    }
    if (!this._coinswap) {this._coinswap = new modules.Coinswap(this)}
    return this._coinswap;
  }
  /** Farm module */
  private _farm?: modules.Farm;
  get farm(): modules.Farm{
    if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
      throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
    }
    if (!this._farm) {this._farm = new modules.Farm(this)}
    return this._farm;
  }

  /** NFT module */
  private _nft?: modules.Nft;
  get nft(): modules.Nft{
    if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
      throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
    }
    if (!this._nft) {this._nft = new modules.Nft(this)}
    return this._nft;
  }

  /** Htlc module */
  private _htlc?: modules.Htlc;
  get htlc():modules.Htlc{
    if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
      throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
    }
    if (!this._htlc) {this._htlc = new modules.Htlc(this)}
    return this._htlc;
  }

  /** Ibc module */
  private _ibc?: modules.Ibc;
  get ibc():modules.Ibc{
    if (!this._ibc) {this._ibc = new modules.Ibc(this)}
    return this._ibc;
  }

  /** IRISHub SDK Constructor */
  constructor(config: DefaultClientConfig) {
    this.config = config;
    if (!this.config.rpcConfig) this.config.rpcConfig = {};
    if (!this.config.bech32Prefix || !this.config.bech32Prefix.AccAddr) {
      switch(this.config.chainNetwork){
        case consts.ChainNetwork.Cosmos:
        this.config.bech32Prefix = types.Bech32Prefix_Cosmos;
        break;
        case consts.ChainNetwork.Akash:
        this.config.bech32Prefix = types.Bech32Prefix_Akash;
        break;
        case consts.ChainNetwork.Iris:
        default:
        this.config.bech32Prefix = types.Bech32Prefix_Iris;
        break
      }
    }

    this.config.rpcConfig.baseURL = this.config.node;

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
   * Set IRISHub network type
   *
   * @param network IRISHub network type, mainnet / testnet
   * @returns The SDK itself
   */
  withChainNetwork(chainNetwork: consts.ChainNetwork) {
    this.config.chainNetwork = chainNetwork;
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
    this._rpcClient = new RpcClient(this.config.rpcConfig);
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
  bech32Prefix?: types.Bech32Prefix;

  /** Axios request config for tendermint rpc requests */
  rpcConfig?: AxiosRequestConfig;
}

/** Default IRISHub Client Config */
export class DefaultClientConfig implements ClientConfig {
  node: string;
  chainNetwork: consts.ChainNetwork;
  network: consts.Network;
  chainId: string;
  gas: string;
  fee: types.Coin;
  keyDAO: KeyDAO;
  bech32Prefix: types.Bech32Prefix;
  rpcConfig: AxiosRequestConfig;

  constructor() {
    this.node = '';
    this.network = types.Network.Mainnet;
    this.chainNetwork = types.ChainNetwork.Iris;
    this.chainId = '';
    this.gas = '100000';
    this.fee = { amount: '', denom: '' };
    this.keyDAO = new DefaultKeyDAOImpl();
    this.bech32Prefix = {} as types.Bech32Prefix;
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

export class DefaultKeyDAOImpl implements KeyDAO {
  write(name: string, key: Wallet): void {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.',
      CODES.Panic
    );
  }
  read(name: string): Wallet {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.',
      CODES.Panic
    );
  }
  delete(name: string): void {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.',
      CODES.Panic
    );
  }
  encrypt(privKey: string, password: string): string {
    const encrypted = AES.encrypt(privKey, password).toString();
    if (!encrypted) {
      throw new SdkError('Private key encrypt failed',CODES.Internal);
    }
    return encrypted;
  }

  decrypt(encrptedPrivKey: string, password: string): string {
    let decrypted:string;
    try{
      decrypted = AES.decrypt(encrptedPrivKey, password).toString(ENC);
      if (!decrypted) {
        throw new SdkError('Wrong password',CODES.InvalidPassword);
      }
    }catch(e){
      throw new SdkError('Wrong password',CODES.InvalidPassword);
    }
    return decrypted;
  }
}
