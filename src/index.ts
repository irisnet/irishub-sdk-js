export * from './constants';

import * as sdk from './sdk';
import * as consts from './constants';

/**
 * Initialize IRISHub SDK
 *
 * @param node IRISHub node rpc address
 * @param network IRISHub network type, mainnet / testnet, default: mainnet
 * @param chainId IRISHub chain-id, default: irishub
 * @param gas Default gas limit, default: 100000
 * @param fee Default fees, default: 0.6iris
 * @param keyDAO Key DAO Implemention
 *
 * @returns New IRISHub SDK Instance
 */
export function newSdk(
  node: string,
  network: consts.Network = consts.Network.Mainnet,
  chainId = 'irishub',
  gas = 100000,
  fee = '0.6iris',
  keyDAO: sdk.KeyDAO = new sdk.DefaultKeyDAOImpl()
): sdk.Sdk {
  return new sdk.Sdk(node, network, chainId, gas, fee, keyDAO);
}
