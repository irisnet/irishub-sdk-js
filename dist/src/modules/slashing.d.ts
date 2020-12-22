import { Client } from '../client';
import * as types from '../types';
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
export declare class Slashing {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Query on-chain parameters of Slashing
     * @returns
     * @since v1.0
     */
    queryParams(): Promise<types.SlashingParams>;
    /**
     * Query a validator's signing information
     * @param bech32ConsAddress Bech32 prefixed validator consensus address
     * @param height Block height to query, omit to get most recent provable block
     * @returns
     * @since v0.17
     */
    querySigningInfo(bech32ConsAddress: string, height?: number): Promise<types.ValidatorSigningInfo>;
    /**
     * Unjail a validator previously jailed
     * @param baseTx
     * @returns
     * @since v0.17
     */
    unjail(baseTx: types.BaseTx): Promise<types.TxResult>;
}
