'use strict';
import { TxModelCreator } from '../utils';
import * as types from '../types';

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