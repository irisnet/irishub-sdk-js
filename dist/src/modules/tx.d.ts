import { Client } from '../client';
import * as types from '../types';
/**
 * Tx module allows you to sign or broadcast transactions
 *
 * @category Modules
 * @since v0.17
 */
export declare class Tx {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Build, sign and broadcast the msgs
     * @param msgs Msgs to be sent
     * @param baseTx
     * @returns
     * @since v0.17
     */
    buildAndSend(msgs: types.Msg[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Broadcast a tx
     * @param signedTx The tx object with signatures
     * @param mode Broadcast mode
     * @returns
     * @since v0.17
     */
    broadcast(signedTx: types.Tx<types.StdTx>, mode?: types.BroadcastMode): Promise<types.TxResult>;
    /**
     * Single sign a transaction
     *
     * @param stdTx StdTx with no signatures
     * @param name Name of the key to sign the tx
     * @param password Password of the key
     * @param offline Offline signing, default `false`
     * @returns The signed tx
     * @since v0.17
     */
    sign(stdTx: types.Tx<types.StdTx>, name: string, password: string, offline?: boolean): Promise<types.Tx<types.StdTx>>;
    /**
     * Broadcast tx async
     * @param txBytes The tx bytes with signatures
     * @returns
     */
    private broadcastTxAsync;
    /**
     * Broadcast tx sync
     * @param txBytes The tx bytes with signatures
     * @returns The result object of broadcasting
     */
    private broadcastTxSync;
    /**
     * Broadcast tx and wait for it to be included in a block.
     * @param txBytes The tx bytes with signatures
     * @returns The result object of broadcasting
     */
    private broadcastTxCommit;
    /**
     * Broadcast tx sync or async
     * @private
     * @param signedTx The tx object with signatures
     * @returns The result object of broadcasting
     */
    private broadcastTx;
    private marshal;
    private newTxResult;
}
