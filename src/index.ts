export * from './types';
export { Client, ClientConfig, KeyDAO } from './client';
import {
  Client,
  ClientConfig,
  DefaultClientConfig,
} from './client';

/**
 * Initialize IRISHub SDK
 *
 * @param config IRISHub SDK [[ClientConfig]]
 *
 * @returns New IRISHub SDK Instance
 */
export function newClient(config: ClientConfig): Client {
  const copyConfig = new DefaultClientConfig();
  Object.assign(copyConfig, config);
  return new Client(copyConfig);
}
