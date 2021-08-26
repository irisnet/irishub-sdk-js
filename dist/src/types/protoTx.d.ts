import * as types from '../types';
export declare class ProtoTx {
    txData: any;
    body: any;
    authInfo: any;
    signatures: string[];
    constructor(properties?: {
        msgs: types.Msg[];
        memo: string;
        stdFee: types.StdFee;
        chain_id: string;
        account_number?: number;
        sequence?: number;
        publicKey?: string | types.Pubkey;
    }, protoTxModel?: any);
    static newStdTxFromProtoTxModel(protoTxModel: any): types.ProtoTx;
    /**
     * add signature
     * @param {[string]} signature base64
     */
    addSignature(signature: string): void;
    /**
     * add public key
     * @param {[string]} bech32/hex or object. if string, default Secp256k1
     * @param {optional [number]} sequence
     */
    setPubKey(pubkey: string | types.Pubkey, sequence?: number): void;
    /**
     * Get SignDoc for signature
     * @returns SignDoc  protobuf.Tx.SignDoc
     */
    getSignDoc(account_number?: number, chain_id?: string): any;
    /**
     * TxRaw is a variant of Tx that pins the signer's exact binary representation
        of body and auth_info. This is used for signing, broadcasting and
        verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
        the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
        as the transaction ID.
     * @returns TxRaw  protobuf.Tx.TxRaw
     */
    getTxRaw(): any;
    /**
     *  has PubKey
     * @returns true/false
     */
    hasPubKey(): boolean;
    /**
     *  Used for RPC send transactions
     *  You can commit the data directly to RPC
     * @returns base64 string
     */
    getData(): Uint8Array;
    /**
     * get Tx Hash
     * @returns tx hash
     */
    getTxHash(): string;
    getProtoModel(): any;
    /**
     *  get tx content
     * @returns tx info
     */
    getDisplayContent(): object;
}
