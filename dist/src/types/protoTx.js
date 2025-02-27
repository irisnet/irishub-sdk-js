'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProtoTx = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _helper = require("../helper");
var types = _interopRequireWildcard(require("../types"));
var _errors = require("../errors");
var _protobuf = require("../modules/protobuf");
var _buffer = require("buffer");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Sha256 = require('sha256');
var ProtoTx = exports.ProtoTx = /*#__PURE__*/function () {
  function ProtoTx(properties, protoTxModel) {
    (0, _classCallCheck2["default"])(this, ProtoTx);
    (0, _defineProperty2["default"])(this, "txData", void 0);
    (0, _defineProperty2["default"])(this, "body", void 0);
    (0, _defineProperty2["default"])(this, "authInfo", void 0);
    (0, _defineProperty2["default"])(this, "signatures", []);
    if (!properties && !protoTxModel) {
      throw new _errors.SdkError("there must be one properties or protoTxModel", _errors.CODES.Internal);
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
  return (0, _createClass2["default"])(ProtoTx, [{
    key: "addSignature",
    value:
    /**
     * add signature
     * @param {[string]} signature base64
     */
    function addSignature(signature) {
      if (!signature || !signature.length) {
        throw new _errors.SdkError("signature is empty", _errors.CODES.NoSignatures);
      }
      this.signatures.push(signature);
    }

    /**
     * add public key
     * @param {[string]} bech32/hex or object. if string, default Secp256k1
     * @param {optional [number]} sequence 
     */
  }, {
    key: "setPubKey",
    value: function setPubKey(pubkey, sequence) {
      sequence = sequence !== null && sequence !== void 0 ? sequence : this.txData.sequence;
      if (typeof sequence == 'undefined') {
        throw new _errors.SdkError("sequence is empty", _errors.CODES.InvalidSequence);
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
        throw new _errors.SdkError("please set pubKey", _errors.CODES.InvalidPubkey);
      }
      if (typeof account_number == 'undefined' && typeof this.txData.account_number == 'undefined') {
        throw new _errors.SdkError("account_number is empty", _errors.CODES.IncorrectAccountSequence);
      }
      if (!chain_id && !this.txData.chain_id) {
        throw new _errors.SdkError("chain_id is empty", _errors.CODES.InvalidChainId);
      }
      var signDoc = new types.tx_tx_pb.SignDoc();
      signDoc.setBodyBytes(this.body.serializeBinary());
      signDoc.setAuthInfoBytes(this.authInfo.serializeBinary());
      signDoc.setAccountNumber(account_number !== null && account_number !== void 0 ? account_number : this.txData.account_number);
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
        throw new _errors.SdkError("please set pubKey", _errors.CODES.InvalidPubkey);
      }
      if (!this.signatures || !this.signatures.length) {
        throw new _errors.SdkError("please sign tx", _errors.CODES.NoSignatures);
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
      return new _protobuf.Protobuf({}).deserializeTx(_buffer.Buffer.from(this.getData()).toString('base64'));
    }
  }], [{
    key: "newStdTxFromProtoTxModel",
    value: function newStdTxFromProtoTxModel(protoTxModel) {
      if (!protoTxModel.hasBody() || !protoTxModel.hasAuthInfo()) {
        throw new _errors.SdkError("Proto Tx Model is invalid", _errors.CODES.TxParseError);
      }
      return new ProtoTx(undefined, protoTxModel);
    }
  }]);
}();