import { Client } from '../client';
import * as types from '../types';
/**
 * ProtobufModel module allows you to deserialize protobuf serialize string
 *
 * @category Modules
 * @since v0.17
 */
export declare class Protobuf {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * deserialize Tx
     * @param  {[type]} Tx:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} Tx object
     */
    deserializeTx(tx: string, returnProtobufModel?: boolean): object;
    /**
     * Unpack protobuffer tx msg
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @param  {[type]} msg tx msg of proto any type
     * @return {[type]} message object
     */
    unpackMsg(msg: {
        typeUrl: string;
        value: string;
    }, returnProtobufModel?: boolean): object | null;
    /**
     * Unpack protobuffer Proposal Content
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @param  {[type]} content proposal Content of proto any type
     * @return {[type]} message object
     */
    unpackProposalContent(content: {
        typeUrl: string;
        value: string;
    }, returnProtobufModel?: boolean): object | null;
    /**
     * deserialize TxBody
     * @param  {[type]} TxBody:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} txBody object
     */
    deserializeTxBody(txBody: string, returnProtobufModel?: boolean): object;
    /**
     * deserialize AuthInfo
     * @param  {[type]} AuthInfo:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} authInfo object
     */
    deserializeAuthInfo(authInfo: string, returnProtobufModel?: boolean): object;
    /**
     * deserialize SignDoc
     * @param  {[type]} signDoc:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} signDoc object
     */
    deserializeSignDoc(signDoc: string, returnProtobufModel?: boolean): object;
    /**
     * deserialize txRaw
     * @param  {[type]} txRaw:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} txRaw object
     */
    deserializeTxRaw(txRaw: string, returnProtobufModel?: boolean): object;
    /**
     * deserialize Signing Info
     * @param  {[type]} signingInfo:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} Signing Info object
     */
    deserializeSigningInfo(signingInfo: string, returnProtobufModel?: boolean): types.ValidatorSigningInfo | object;
    /**
     * deserialize Pubkey
     * @param  {[type]} pubKey:{typeUrl:string, value:string}
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} pubKey object
     */
    deserializeAccount(account: {
        typeUrl: string;
        value: string;
    }, returnProtobufModel?: boolean): object;
    /**
     * deserialize Pubkey
     * @param  {[type]} pubKey:{typeUrl:string, value:string}
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} pubKey object
     */
    deserializePubkey(pubKey: {
        typeUrl: string;
        value: string;
    }, returnProtobufModel?: boolean): object;
    /**
     * deserialize Global Account Number
     * @param  {[type]} GlobalAccountNumber:string  base64 string
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} Global Account Number object
     */
    deserializeGlobalAccountNumber(GlobalAccountNumber: string, returnProtobufModel?: boolean): object;
}
