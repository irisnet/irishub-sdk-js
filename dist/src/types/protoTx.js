'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtoTx = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _helper = require("../helper");

var types = _interopRequireWildcard(require("../types"));

var Sha256 = require('sha256');

var ProtoTx = /*#__PURE__*/function () {
  function ProtoTx(properties, protoTxModel) {
    (0, _classCallCheck2["default"])(this, ProtoTx);
    (0, _defineProperty2["default"])(this, "txData", void 0);
    (0, _defineProperty2["default"])(this, "body", void 0);
    (0, _defineProperty2["default"])(this, "authInfo", void 0);
    (0, _defineProperty2["default"])(this, "signatures", []);

    if (!properties && !protoTxModel) {
      throw new Error("there must be one properties or protoTxModel");
    }

    if (properties) {
      var msgs = properties.msgs,
          memo = properties.memo,
          stdFee = properties.stdFee,
          account_number = properties.account_number,
          chain_id = properties.chain_id,
          sequence = properties.sequence,
          publicKey = properties.publicKey;
      this.txData = properties;
      this.body = _helper.TxModelCreator.createBodyModel(msgs, memo, 0);
      this.authInfo = _helper.TxModelCreator.createAuthInfoModel(stdFee, sequence, publicKey);
    } else if (protoTxModel) {
      if (protoTxModel.hasBody() && protoTxModel.hasAuthInfo()) {
        this.txData = {};
        this.body = protoTxModel.getBody();
        this.authInfo = protoTxModel.getAuthInfo();
        this.signatures = protoTxModel.getSignaturesList();
      }
    }
  }

  (0, _createClass2["default"])(ProtoTx, [{
    key: "addSignature",

    /**
     * add signature
     * @param {[string]} signature base64
     */
    value: function addSignature(signature) {
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

  }, {
    key: "setPubKey",
    value: function setPubKey(pubkey, sequence) {
      sequence = sequence || this.txData.sequence;

      if (!sequence) {
        throw new Error("sequence is  empty");
      }

      var signerInfo = _helper.TxModelCreator.createSignerInfoModel(sequence, pubkey);

      this.authInfo.addSignerInfos(signerInfo);
    }
    /**
     * Get SignDoc for signature 
     * @returns SignDoc  protobuf.Tx.SignDoc 
     */

  }, {
    key: "getSignDoc",
    value: function getSignDoc(account_number, chain_id) {
      if (!this.hasPubKey()) {
        throw new Error("please set pubKey");
      }

      if (!account_number && !this.txData.account_number) {
        throw new Error("account_number is  empty");
      }

      if (!chain_id && !this.txData.chain_id) {
        throw new Error("chain_id is  empty");
      }

      var signDoc = new types.tx_tx_pb.SignDoc();
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

  }, {
    key: "getTxRaw",
    value: function getTxRaw() {
      if (!this.hasPubKey()) {
        throw new Error("please set pubKey");
      }

      if (!this.signatures || !this.signatures.length) {
        throw new Error("please sign tx");
      }

      var txRaw = new types.tx_tx_pb.TxRaw();
      txRaw.setBodyBytes(this.body.serializeBinary());
      txRaw.setAuthInfoBytes(this.authInfo.serializeBinary());
      this.signatures.forEach(function (signature) {
        txRaw.addSignatures(signature);
      });
      return txRaw;
    }
    /**
     *  has PubKey
     * @returns true/false
     */

  }, {
    key: "hasPubKey",
    value: function hasPubKey() {
      return this.authInfo.getSignerInfosList().length > 0;
    }
    /**
     *  Used for RPC send transactions
     *  You can commit the data directly to RPC
     * @returns base64 string
     */

  }, {
    key: "getData",
    value: function getData() {
      var tx = new types.tx_tx_pb.Tx();
      tx.setBody(this.body);
      tx.setAuthInfo(this.authInfo);
      this.signatures.forEach(function (signature) {
        tx.addSignatures(signature);
      });
      return tx.serializeBinary();
    }
    /**
     * get Tx Hash
     * @returns tx hash
     */

  }, {
    key: "getTxHash",
    value: function getTxHash() {
      var txRaw = this.getTxRaw();
      var txHash = (Sha256(txRaw.serializeBinary()) || '').toUpperCase();
      return txHash;
    }
  }, {
    key: "getProtoModel",
    value: function getProtoModel() {
      var tx = new types.tx_tx_pb.Tx();
      tx.setBody(this.body);
      tx.setAuthInfo(this.authInfo);
      this.signatures.forEach(function (signature) {
        tx.addSignatures(signature);
      });
      return tx;
    }
    /**
     *  get tx content
     * @returns tx info
     */

  }, {
    key: "getDisplayContent",
    value: function getDisplayContent() {
      var tx = this.getProtoModel();
      return JSON.stringify(tx.toObject());
    }
  }], [{
    key: "newStdTxFromProtoTxModel",
    value: function newStdTxFromProtoTxModel(protoTxModel) {
      if (!protoTxModel.hasBody() || !protoTxModel.hasAuthInfo()) {
        throw new Error("Proto Tx Model is invalid");
      }

      return new ProtoTx(undefined, protoTxModel);
    }
  }]);
  return ProtoTx;
}();

exports.ProtoTx = ProtoTx;