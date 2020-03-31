import { Client } from '../client';
import * as types from '../types';
/**
 * This module is in charge of distributing collected transaction fee and inflated token to all validators and delegators.
 * To reduce computation stress, a lazy distribution strategy is brought in. lazy means that the benefit won't be paid directly to contributors automatically.
 * The contributors are required to explicitly send transactions to withdraw their benefit, otherwise, their benefit will be kept in the global pool.
 *
 * [More Details](https://www.irisnet.org/docs/features/distribution.html)
 *
 * @category Modules
 * @since v0.17
 */
export declare class Distribution {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Query all the rewards of a validator or a delegator
     * @param address Bech32 account address
     * @returns
     * @since v0.17
     */
    queryRewards(address: string): Promise<types.Rewards>;
    /**
     * Set another address to receive the rewards instead of using the delegator address
     * @param withdrawAddress Bech32 account address
     * @param baseTx
     * @returns
     * @since v0.17
     */
    setWithdrawAddr(withdrawAddress: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Withdraw rewards to the withdraw-address(default to the delegator address, you can set to another address via [[setWithdrawAddr]])
     * @param baseTx { types.BaseTx }
     * @param onlyFromValidator only withdraw from this validator address
     * @param isValidator also withdraw validator's commission, can be set to `true` only if the `onlyFromValidator` is specified
     * @returns { Promise<types.TxResult> }
     * @since v0.17
     */
    withdrawRewards(baseTx: types.BaseTx, onlyFromValidator?: string, isValidator?: boolean): Promise<types.TxResult>;
}
