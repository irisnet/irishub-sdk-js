export * from './types/constants';
export { KeyDAO } from './sdk';

import * as sdk from './sdk';
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
export function newSdk(config: sdk.SdkConfig): sdk.Sdk {
  const copyConfig = new sdk.DefaultSdkConfig();
  Object.assign(copyConfig, config);
  return new sdk.Sdk(copyConfig);
}
