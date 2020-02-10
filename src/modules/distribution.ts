import { Client } from '../client';
import * as types from '../types';

export class Distribution {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  queryRewards(address: string): Promise<types.Rewards> {
    return this.client.rpcClient.abciQuery<types.Rewards>(
      'custom/distr/rewards',
      {
        address: address,
      }
    );
  }
}
