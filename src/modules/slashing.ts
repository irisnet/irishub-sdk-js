import { Client } from '../client';
import * as types from '../types';
import { MsgUnjail } from '../types/slashing';

export class Slashing {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  queryParams(): Promise<types.SlashingParams> {
    return this.client.rpcClient.abciQuery<types.SlashingParams>(
      'custom/slashing/parameters'
    );
  }

  async unjail(baseTx: types.BaseTx): Promise<types.ResultBroadcastTx> {
    const address = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgUnjail(address)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
