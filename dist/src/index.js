export * as types from './types';
export * as utils from './utils';
export { Client } from './client';
export { Crypto } from "./utils";
import { Client, DefaultClientConfig, } from './client';
/**
 * Initialize IRISHub SDK
 *
 * @param config IRISHub SDK [[ClientConfig]]
 *
 * @returns New IRISHub SDK Instance
 */
export function newClient(config) {
    const copyConfig = new DefaultClientConfig();
    Object.assign(copyConfig, config);
    return new Client(copyConfig);
}
//# sourceMappingURL=index.js.map