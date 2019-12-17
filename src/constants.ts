export enum Network {
  Mainnet = 0,
  Testnet = 1,
}

export class Consts {
  static defaultNetwork = Network.Mainnet;
  static defaultChainId = 'irishub';
  static defaultFees = '0.6iris';
  static defaultGas = 100000;
}
