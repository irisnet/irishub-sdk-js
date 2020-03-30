import { Client } from '../client';
import * as types from '../types';
import { MsgUnjail } from '../types/slashing';
import { SdkError } from '../errors';
import { StoreKeys } from '../utils';
import { unmarshalValidatorSigningInfo } from '@irisnet/amino-js';
import { base64ToBytes } from '@tendermint/belt';

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
   *
   * @returns
   */
  queryParams(): Promise<types.SlashingParams> {
    // return this.client.rpcClient.abciQuery<types.SlashingParams>(
    //   'custom/slashing/parameters'
    // );

    throw new SdkError('Not supported');
  }

  /**
   * Query a validator's signing information
   *
   * @returns
   */
  querySigningInfo(
    bech32ConsAddress: string,
    height?: number
  ): Promise<types.ValidatorSigningInfo> {
    const key = StoreKeys.getSigningInfoKey(bech32ConsAddress);
    return this.client.rpcClient
      .queryStore<any>(key, 'slashing', height)
      .then(res => {
        console.log(res);
        if (!res || ! res.response || !res.response.value) {
          throw new SdkError('Validator not found');
        }
        return unmarshalValidatorSigningInfo(
          base64ToBytes(res.response.value)
        ) as types.ValidatorSigningInfo;
      });
  }

  /**
   * Unjail a validator previously jailed
   *
   * @param validatorAddr Bech32 validator address
   * @param baseTx
   * @returns
   */
  async unjail(
    validatorAddr: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const msgs: types.Msg[] = [new MsgUnjail(validatorAddr)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
