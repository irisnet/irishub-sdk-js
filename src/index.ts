export * from './types/constants';
export { KeyDAO } from './client';

import { Client, ClientConfig, DefaultClientConfig } from './client';
import * as types from './types';
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
export function newClient(config: ClientConfig): Client {
  const copyConfig = new DefaultClientConfig();
  Object.assign(copyConfig, config);
  return new Client(copyConfig);
}
