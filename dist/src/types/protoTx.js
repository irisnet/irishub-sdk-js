'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoTx = void 0;
const helper_1 = require("../helper");
const types = require("../types");
const Sha256 = require('sha256');
class ProtoTx {
    constructor(properties, protoTxModel) {
        this.signatures = [];
        if (!properties && !protoTxModel) {
            throw new Error("there must be one properties or protoTxModel");
        }
        if (properties) {
            let { msgs, memo, stdFee, account_number, chain_id, sequence, publicKey } = properties;
            this.txData = properties;
            this.body = helper_1.TxModelCreator.createBodyModel(msgs, memo, 0);
            this.authInfo = helper_1.TxModelCreator.createAuthInfoModel(stdFee, sequence, publicKey);
        }
        else if (protoTxModel) {
            if (protoTxModel.hasBody() && protoTxModel.hasAuthInfo()) {
                this.txData = {};
                this.body = protoTxModel.getBody();
                this.authInfo = protoTxModel.getAuthInfo();
                this.signatures = protoTxModel.getSignaturesList();
            }
        }
    }
    static newStdTxFromProtoTxModel(protoTxModel) {
        if (!protoTxModel.hasBody() || !protoTxModel.hasAuthInfo()) {
            throw new Error("Proto Tx Model is invalid");
        }
        return new ProtoTx(undefined, protoTxModel);
    }
    /**
     * add signature
     * @param {[string]} signature base64
     */
    addSignature(signature) {
        if (!signature || !signature.length) {
            throw new Error("signature is  empty");
        }
        this.signatures.push(signature);
    }
    /**
     * add public key
     * @param {[string]} bech32/hex or object. if string, default Secp256k1
     * @param {optional [number]} sequence
     */
    setPubKey(pubkey, sequence) {
        sequence = sequence || this.txData.sequence;
        if (!sequence) {
            throw new Error("sequence is empty");
        }
        let signerInfo = helper_1.TxModelCreator.createSignerInfoModel(sequence, pubkey);
        this.authInfo.addSignerInfos(signerInfo);
    }
    /**
     * Get SignDoc for signature
     * @returns SignDoc  protobuf.Tx.SignDoc
     */
    getSignDoc(account_number, chain_id) {
        if (!this.hasPubKey()) {
            throw new Error("please set pubKey");
        }
        if (!account_number && !this.txData.account_number) {
            throw new Error("account_number is  empty");
        }
        if (!chain_id && !this.txData.chain_id) {
            throw new Error("chain_id is  empty");
        }
        let signDoc = new types.tx_tx_pb.SignDoc();
        signDoc.setBodyBytes(this.body.serializeBinary());
        signDoc.setAuthInfoBytes(this.authInfo.serializeBinary());
        signDoc.setAccountNumber(String(account_number || this.txData.account_number));
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
    getTxRaw() {
        if (!this.hasPubKey()) {
            throw new Error("please set pubKey");
        }
        if (!this.signatures || !this.signatures.length) {
            throw new Error("please sign tx");
        }
        let txRaw = new types.tx_tx_pb.TxRaw();
        txRaw.setBodyBytes(this.body.serializeBinary());
        txRaw.setAuthInfoBytes(this.authInfo.serializeBinary());
        this.signatures.forEach((signature) => {
            txRaw.addSignatures(signature);
        });
        return txRaw;
    }
    /**
     *  has PubKey
     * @returns true/false
     */
    hasPubKey() {
        return this.authInfo.getSignerInfosList().length > 0;
    }
    /**
     *  Used for RPC send transactions
     *  You can commit the data directly to RPC
     * @returns base64 string
     */
    getData() {
        let tx = new types.tx_tx_pb.Tx();
        tx.setBody(this.body);
        tx.setAuthInfo(this.authInfo);
        this.signatures.forEach((signature) => {
            tx.addSignatures(signature);
        });
        return tx.serializeBinary();
    }
    /**
     * get Tx Hash
     * @returns tx hash
     */
    getTxHash() {
        let txRaw = this.getTxRaw();
        let txHash = (Sha256(txRaw.serializeBinary()) || '').toUpperCase();
        return txHash;
    }
    getProtoModel() {
        let tx = new types.tx_tx_pb.Tx();
        tx.setBody(this.body);
        tx.setAuthInfo(this.authInfo);
        this.signatures.forEach((signature) => {
            tx.addSignatures(signature);
        });
        return tx;
    }
    /**
     *  get tx content
     * @returns tx info
     */
    getDisplayContent() {
        let tx = this.getProtoModel();
        return JSON.stringify(tx.toObject());
    }
}
exports.ProtoTx = ProtoTx;
//# sourceMappingURL=protoTx.js.map