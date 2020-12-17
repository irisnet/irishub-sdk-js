'use strict';
import { TxModelCreator } from '../helper';
import * as types from '../types';

const Sha256 = require('sha256');
let Tx_pb = require('./proto-types/cosmos/tx/v1beta1/tx_pb');

export class ProtoTx {
    txData:any;
    body:any;
    authInfo:any;
    signatures:string[];
    constructor(properties:{
        msgs:types.Msg[],
        memo:string,
        stdFee:types.StdFee,
        chain_id:string,
        account_number?:string,
        sequence?:string,
        publicKey?:string
    }) {
        let {msgs, memo, stdFee, account_number, chain_id, sequence, publicKey} = properties;
        this.txData = properties;
        this.body = TxModelCreator.createBodyModel(msgs, memo, 0);
        this.authInfo = TxModelCreator.createAuthInfoModel(stdFee, sequence, publicKey);
        this.signatures = [];
    }

    /**
     * add signature
     * @param {[string]} signature base64
     */
    addSignature(signature:string){
        if (!signature || !signature.length) {
            throw new Error("signature is  empty");
        }
        this.signatures.push(signature);
    }

    /**
     * add public key
     * @param {[string]} pubkey   bech32/hex 
     * @param {optional [number]} sequence 
     */
    setPubKey(pubkey:string, sequence?:string){
        sequence = sequence || this.txData.sequence;
        if (!sequence) {
            throw new Error("sequence is  empty");
        }
        let signerInfo = TxModelCreator.createSignerInfoModel(sequence, pubkey);
        this.authInfo.addSignerInfos(signerInfo);
    }

    /**
     * Get SignDoc for signature 
     * @returns SignDoc  protobuf.Tx.SignDoc 
     */
    getSignDoc(account_number?:string):any{
        if (!this.hasPubKey()) {
            throw new Error("please set pubKey");
        }
        if (!account_number && !this.txData.account_number) {
            throw new Error("account_number is  empty");
        }
        let signDoc = new Tx_pb.SignDoc();
        signDoc.setBodyBytes(this.body.serializeBinary());
        signDoc.setAuthInfoBytes(this.authInfo.serializeBinary());
        signDoc.setAccountNumber(String(account_number || this.txData.account_number));
        signDoc.setChainId(this.txData.chain_id);
        return signDoc;
    }

    /**
     * TxRaw is a variant of Tx that pins the signer's exact binary representation
        of body and auth_info. This is used for signing, broadcasting and
        verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
        the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
        as the transaction ID. 
     * @returns TxRaw  protobuf.Tx.TxRaw 
     */
    getTxRaw():any{
        if (!this.hasPubKey()) {
            throw new Error("please set pubKey");
        }
        if (!this.signatures || !this.signatures.length) {
            throw new Error("please sign tx");
        }
        let txRaw = new Tx_pb.TxRaw();
        txRaw.setBodyBytes(this.body.serializeBinary());
        txRaw.setAuthInfoBytes(this.authInfo.serializeBinary());
        this.signatures.forEach((signature)=>{
            txRaw.addSignatures(signature);
        })
        return txRaw;
    }

    /**
     *  has PubKey
     * @returns true/false
     */
    hasPubKey():boolean{
        return this.authInfo.getSignerInfosList().length > 0;
    }

    /**
     *  Used for RPC send transactions
     *  You can commit the data directly to RPC
     * @returns base64 string
     */
    getData():Uint8Array {
        let tx = new Tx_pb.Tx();
        tx.setBody(this.body);
        tx.setAuthInfo(this.authInfo);
        this.signatures.forEach((signature)=>{
            tx.addSignatures(signature);
        })
        return tx.serializeBinary();
    }

    /**
     * get Tx Hash
     * @returns tx hash
     */
    getTxHash():string{
        let txRaw = this.getTxRaw();
        let txHash:string = (Sha256(txRaw.serializeBinary()) || '').toUpperCase();
        return txHash;
    } 
     
    /**
     *  get tx content
     * @returns tx info
     */
    getDisplayContent():string{
        let tx = new Tx_pb.Tx();
        tx.setBody(this.body);
        tx.setAuthInfo(this.authInfo);
        this.signatures.forEach((signature)=>{
            tx.addSignatures(signature);
        })
        return JSON.stringify(tx.toObject());
    }
}