import { Client } from '../client';
import * as types from '../types';
/**
 * Auth module is only used to build `StdTx`
 *
 * @category Modules
 * @since v0.17
 */
export declare class Auth {
    /** @hidden */
    private client;
    /** @hidden */
    defaultStdFee: types.StdFee;
    /** @hidden */
    constructor(client: Client);
    /**
     * Generate a new `StdTx` which is a standard way to wrap Msgs with Fee and Signatures.
     *
     * **NOTE:** The first signature is the fee payer
     *
     * @param msgs Msgs to be sent
     * @param baseTx Base params of the transaction
     * @param sigs Signatures of the transaction, defaults to []
     * @param memo Memo of the transaction
     *
     * @returns
     * @since v0.17
     */
    newStdTx(msgs: types.Msg[], baseTx: types.BaseTx): types.ProtoTx;
    /**
     * Account returns account details based on address.
     * @param address defines the address to query for.
     */
    queryAccount(address: string): Promise<types.BaseAccount>;
    /**
     * Params queries all parameters.
     */
    queryParams(): Promise<object>;
}
