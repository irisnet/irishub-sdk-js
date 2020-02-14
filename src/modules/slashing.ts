import { Client } from '../client';
import * as types from '../types';
import { MsgUnjail } from '../types/slashing';

/**
 * In Proof-of-Stake blockchain, validators will get block provisions by staking their token.
 * But if they failed to keep online, they will be punished by slashing a small portion of their staked tokens.
 * The offline validators will be removed from the validator set and put into jail, which means their voting power is zero.
 * During the jail period, these nodes are not even validator candidates. Once the jail period ends, they can send [[unjail]] transactions to free themselves and become validator candidates again.
 *
 * [More Details](https://www.irisnet.org/docs/features/slashing.html)
 * 
 * @category Modules
 */
export class Slashing {
  /** @hidden */
  client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query on-chain parameters of Slashing
   *
   * @returns
   */
  queryParams(): Promise<types.SlashingParams> {
    return this.client.rpcClient.abciQuery<types.SlashingParams>(
      'custom/slashing/parameters'
    );
  }

  /**
   * Unjail a validator previously jailed
   * 
   * @param baseTx
   * @returns
   */
  async unjail(baseTx: types.BaseTx): Promise<types.ResultBroadcastTx> {
    const address = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgUnjail(address)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
