import { Client } from '../client';
import * as types from '../types';
import { SdkError } from '../errors';
/**
 * This module is mainly used to transfer coins between accounts,
 * query account balances, and provide common offline transaction signing and broadcasting methods.
 * In addition, the available units of tokens in the IRIShub system are defined using [coin-type](https://www.irisnet.org/docs/concepts/coin-type.html).
 *
 * [More Details](https://www.irisnet.org/docs/features/bank.html)
 *
 * @category Modules
 * @since v0.17
 */
export declare class Bank {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Get the cointype of a token
     *
     * @deprecated Please refer to [[asset.queryToken]]
     * @since v0.17
     */
    queryCoinType(tokenName: string): void;
    /**
     * Query account info from blockchain
     * @param address Bech32 address
     * @returns
     * @since v0.17
     * // TODO:
     */
    queryAccount(address: string): Promise<types.BaseAccount>;
    /**
     * Query the token statistic, including total loose tokens, total burned tokens and total bonded tokens.
     * @param tokenID Identity of the token
     * @returns
     * @since v0.17
     */
    queryTokenStats(tokenID?: string): Promise<types.TokenStats>;
    /**
     * Send coins
     * @param to Recipient bech32 address
     * @param amount Coins to be sent
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    send(to: string, amount: types.Coin[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Burn coins
     * @param amount Coins to be burnt
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    burn(amount: types.Coin[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Set memo regexp for your own address, so that you can only receive coins from transactions with the corresponding memo.
     * @param memoRegexp
     * @param baseTx { types.BaseTx }
     * @returns
     * @since v0.17
     */
    setMemoRegexp(memoRegexp: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Subscribe Send Txs
     * @param conditions Query conditions for the subscription
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */
    subscribeSendTx(conditions: {
        from?: string;
        to?: string;
    }, callback: (error?: SdkError, data?: types.EventDataMsgSend) => void): types.EventSubscription;
}
