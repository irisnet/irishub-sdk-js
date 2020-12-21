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
     * Build Tx
     * @param msgs Msgs to be sent
     * @param baseTx
     * @returns unsignedTx
     * @since v0.17
     */
    buildTx(msgs: any[], baseTx: types.BaseTx): types.ProtoTx;
    /**
     * generate StdTx from protoTxModel
     * @param  {[type]} protoTxModel:any instance of cosmos.tx.v1beta1.Tx
     * @return {[type]} unsignedTx
     */
    newStdTxFromProtoTxModel(protoTxModel: any): types.ProtoTx;
    /**
     * Build, sign and broadcast the msgs
     * @param msgs Msgs to be sent
     * @param baseTx
     * @returns
     * @since v0.17
     */
    buildAndSend(msgs: any[], baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Broadcast a tx
     * @param signedTx The tx object with signatures
     * @param mode Broadcast mode
     * @returns
     * @since v0.17
     */
    broadcast(signedTx: types.ProtoTx, mode?: types.BroadcastMode): Promise<types.TxResult>;
    /**
     * Single sign a transaction
     *
     * @param stdTx StdTx with no signatures
     * @param baseTx baseTx.from && baseTx.password is requred
     * @returns The signed tx
     * @since v0.17
     */
    sign(stdTx: types.ProtoTx, baseTx: types.BaseTx): Promise<types.ProtoTx>;
    /**
     * Single sign a transaction with signDoc
     *
     * @param stdTx StdTx with no signatures
     * @param name Name of the key to sign the tx
     * @param password Password of the key
     * @param offline Offline signing, default `false`
     * @returns signature
     * @since v0.17
     */
    sign_signDoc(signDoc: Uint8Array, name: string, password: string): string;
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
    private newTxResult;
    /**
     * create message
     * @param  {[type]} txMsg:{type:string, value:any} message
     * @return {[type]} message instance of types.Msg
     */
    createMsg(txMsg: {
        type: string;
        value: any;
    }): any;
}
