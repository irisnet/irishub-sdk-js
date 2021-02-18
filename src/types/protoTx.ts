'use strict';
import { TxModelCreator } from '../helper';
import * as types from '../types';
import { SdkError, CODES } from '../errors';
import { Protobuf } from '../modules/protobuf';

const Sha256 = require('sha256');

export class ProtoTx {
    txData:any;
    body:any;
    authInfo:any;
    signatures:string[] = [];
    constructor(properties?:{
        msgs:types.Msg[],
        memo:string,
        stdFee:types.StdFee,
        chain_id:string,
        account_number?:number,
        sequence?:number,
        publicKey?:string|types.Pubkey
    }, protoTxModel?:any) {
        if (!properties && !protoTxModel) {
            throw new SdkError("there must be one properties or protoTxModel",CODES.Internal);
        }
        if (properties) {
            let {msgs, memo, stdFee, account_number, chain_id, sequence, publicKey} = properties;
            this.txData = properties;
            this.body = TxModelCreator.createBodyModel(msgs, memo, 0);
            this.authInfo = TxModelCreator.createAuthInfoModel(stdFee, sequence, publicKey);
        }else if(protoTxModel){
            if (protoTxModel.hasBody() && protoTxModel.hasAuthInfo()) {
                this.txData = {};
                this.body = protoTxModel.getBody();
                this.authInfo = protoTxModel.getAuthInfo();
                this.signatures = protoTxModel.getSignaturesList();
            }
        }
    }

    static newStdTxFromProtoTxModel(protoTxModel:any):types.ProtoTx{
        if (!protoTxModel.hasBody() || !protoTxModel.hasAuthInfo()){
            throw new SdkError("Proto Tx Model is invalid",CODES.TxParseError);
        }
        return new ProtoTx( undefined ,protoTxModel);
    }

    /**
     * add signature
     * @param {[string]} signature base64
     */
    addSignature(signature:string){
        if (!signature || !signature.length) {
            throw new SdkError("signature is  empty",CODES.NoSignatures);
        }
        this.signatures.push(signature);
    }

    /**
     * add public key
     * @param {[string]} bech32/hex or object. if string, default Secp256k1
     * @param {optional [number]} sequence 
     */
    setPubKey(pubkey:string|types.Pubkey, sequence?:number){
        sequence = sequence ?? this.txData.sequence;
        if (typeof sequence == 'undefined') {
            throw new SdkError("sequence is empty",CODES.InvalidSequence);
        }
        let signerInfo = TxModelCreator.createSignerInfoModel(sequence, pubkey);
        this.authInfo.addSignerInfos(signerInfo);
    }

    /**
     * Get SignDoc for signature 
     * @returns SignDoc  protobuf.Tx.SignDoc 
     */
    getSignDoc(account_number?:number, chain_id?:string):any{
        if (!this.hasPubKey()) {
            throw new SdkError("please set pubKey",CODES.InvalidPubkey);
        }
        if ( typeof account_number == 'undefined' && typeof this.txData.account_number == 'undefined') {
            throw new SdkError("account_number is  empty",CODES.IncorrectAccountSequence);
        }
        if (!chain_id && !this.txData.chain_id) {
            throw new SdkError("chain_id is  empty",CODES.InvalidChainId);
        }
        let signDoc = new types.tx_tx_pb.SignDoc();
        signDoc.setBodyBytes(this.body.serializeBinary());
        signDoc.setAuthInfoBytes(this.authInfo.serializeBinary());
        signDoc.setAccountNumber(account_number??this.txData.account_number);
        signDoc.setChainId(chain_id || this.txData.chain_id);
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
            throw new SdkError("please set pubKey",CODES.InvalidPubkey);
        }
        if (!this.signatures || !this.signatures.length) {
            throw new SdkError("please sign tx",CODES.NoSignatures);
        }
        let txRaw = new types.tx_tx_pb.TxRaw();
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
        let tx = new types.tx_tx_pb.Tx();
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

    getProtoModel():any{
        let tx = new types.tx_tx_pb.Tx();
        tx.setBody(this.body);
        tx.setAuthInfo(this.authInfo);
        this.signatures.forEach((signature)=>{
            tx.addSignatures(signature);
        });
        return tx;
    }

    /**
     *  get tx content
     * @returns tx info
     */
    getDisplayContent():object{
        return new Protobuf({} as any).deserializeTx(Buffer.from(this.getData()).toString('base64'));
    }
}