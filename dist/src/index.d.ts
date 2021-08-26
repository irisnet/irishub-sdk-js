export * as types from './types';
export * as utils from './utils';
export { Client, ClientConfig, KeyDAO } from './client';
export { Crypto } from "./utils";
import { Client, ClientConfig } from './client';
/**
 * Initialize IRISHub SDK
 *
 * @param config IRISHub SDK [[ClientConfig]]
 *
 * @returns New IRISHub SDK Instance
 */
export declare function newClient(config: ClientConfig): Client;
