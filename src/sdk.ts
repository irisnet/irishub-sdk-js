import * as consts from './constants';

// IRISHub SDK
export class Sdk {
  node: string;
  network: consts.Network;
  chainId: string;
  gas: number;
  fee: string;
  keyDAO: KeyDAO;

  constructor(node: string) {
    this.node = node;
    this.network = consts.Consts.defaultNetwork;
    this.chainId = consts.Consts.defaultChainId;
    this.gas = consts.Consts.defaultGas;
    this.fee = consts.Consts.defaultFees;
    this.keyDAO = new DefaultKeyDAOImpl();
  }

  withKeyDAO(keyDAO: KeyDAO) {
    this.keyDAO = keyDAO;
    return this;
  }

  withNetwork(network: consts.Network) {
    this.network = network;
    return this;
  }

  withChainId(chainId: string) {
    this.chainId = chainId;
    return this;
  }

  withGas(gas: number) {
    this.gas = gas;
    return this;
  }

  withFee(fee: string) {
    this.fee = fee;
    return this;
  }
}

// Key DAO Interface, to be implemented by apps if they need the key management.
export interface KeyDAO {
  save(): boolean;
  read(): string;
}

class DefaultKeyDAOImpl implements KeyDAO {
  save(): boolean {
    throw new Error('Method not implemented.');
  }
  read(): string {
    throw new Error('Method not implemented.');
  }
}
