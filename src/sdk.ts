import * as consts from './constants';

/**
 * IRISHub SDK
 */
export class Sdk {
  /**
   * IRISHub SDK Config
   */
  config: SdkConfig;

  /**
   * IRISHub SDK Constructor
   */
  constructor(
    node: string,
    network: consts.Network,
    chainId: string,
    gas: number,
    fee: string,
    keyDAO: KeyDAO
  ) {
    this.config = new SdkConfig(node, network, chainId, gas, fee, keyDAO);
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
  withGas(gas: number) {
    this.config.gas = gas;
    return this;
  }

  /**
   * Set default fees
   *
   * @param fee Default fees
   * @returns The SDK itself
   */
  withFee(fee: string) {
    this.config.fee = fee;
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
  gas: number;

  /**
   * Default fees
   */
  fee: string;

  /**
   * Key DAO Implemention
   */
  keyDAO: KeyDAO;

  constructor(
    node: string,
    network: consts.Network,
    chainId: string,
    gas: number,
    fee: string,
    keyDAO: KeyDAO
  ) {
    this.node = node;
    this.network = network;
    this.chainId = chainId;
    this.gas = gas;
    this.fee = fee;
    this.keyDAO = keyDAO;
  }
}

/**
 * Key DAO Interface, to be implemented by apps if they need the key management.
 */
export interface KeyDAO {
  save(): boolean;
  read(): string;
}

export class DefaultKeyDAOImpl implements KeyDAO {
  save(): boolean {
    throw new Error('Method not implemented.');
  }
  read(): string {
    throw new Error('Method not implemented.');
  }
}
