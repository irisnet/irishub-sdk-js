export * from './types/constants';
export { KeyDAO } from './sdk';

import * as sdk from './sdk';
import * as consts from './types/constants';
import { AxiosRequestConfig } from 'axios';

/**
 * Initialize IRISHub SDK
 *
 * @param node IRISHub node rpc address
 * @param network IRISHub network type, mainnet / testnet, default: mainnet
 * @param chainId IRISHub chain-id, default: irishub
 * @param gas Default gas limit, default: 100000
 * @param fee Default fee of iris-atto, default: 6000000000000000000, aka. 0.6iris
 * @param keyDAO Key DAO Implemention
 * @param rpcConfig Axios config for tendermint rpc requests
 *
 * @returns New IRISHub SDK Instance
 */
export function newSdk(
  node: string,
  network: consts.Network = consts.Network.Mainnet,
  chainId = 'irishub',
  gas = '100000',
  fee = '6000000000000000000',
  keyDAO: sdk.KeyDAO = new sdk.DefaultKeyDAOImpl(),
  rpcConfig: AxiosRequestConfig = { timeout: 2000 }
): sdk.Sdk {
  return new sdk.Sdk(node, network, chainId, gas, fee, keyDAO, rpcConfig);
}
