import { Client } from '../client';
import * as types from '../types';
import { MsgUnjail } from '../types/slashing';
import { SdkError } from '../errors';
import { StoreKeys } from '../utils';
import * as Bech32 from 'bech32';

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
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query on-chain parameters of Slashing
   * @returns
   * @since v1.0
   */
  queryParams(): Promise<types.SlashingParams> {
    // return this.client.rpcClient.abciQuery<types.SlashingParams>(
    //   'custom/slashing/parameters'
    // );

    throw new SdkError('Not supported');
  }

  /**
   * Query a validator's signing information
   * @param bech32ConsAddress Bech32 prefixed validator consensus address
   * @param height Block height to query, omit to get most recent provable block
   * @returns
   * @since v0.17
   */
  querySigningInfo(
    bech32ConsAddress: string,
    height?: number
  ): Promise<types.ValidatorSigningInfo> {
    const key = StoreKeys.getSigningInfoKey(bech32ConsAddress);
    return this.client.rpcClient
      .queryStore<any>(key, 'slashing', height)
      .then(res => {
        if (!res || !res.response || !res.response.value) {
          throw new SdkError('Validator not found');
        }
        return this.client.protobuf.deserializeSigningInfo(res.response.value) as types.ValidatorSigningInfo;
      });
  }

  /**
   * Unjail a validator previously jailed
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async unjail(baseTx: types.BaseTx): Promise<types.TxResult> {
    const val = this.client.keys.show(baseTx.from);
    const words = Bech32.decode(val).words;    
    const validatorAddr = Bech32.encode(
      this.client.config.bech32Prefix.ValAddr,
      words
    );
    const msgs: types.Msg[] = [new MsgUnjail(validatorAddr)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
