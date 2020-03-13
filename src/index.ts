export * from './types/constants';
export { KeyDAO } from './client';
import {
  Client,
  ClientConfig,
  DefaultClientConfig,
  DefaultKeyDAOImpl,
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
