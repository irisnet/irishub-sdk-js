"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crypto = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var csprng = _interopRequireWildcard(require("secure-random"));
var bech32 = _interopRequireWildcard(require("bech32"));
var cryptoJs = _interopRequireWildcard(require("crypto-js"));
var AES = _interopRequireWildcard(require("crypto-js/aes"));
var uuid = _interopRequireWildcard(require("uuid"));
var is = _interopRequireWildcard(require("is_js"));
var _crypto = require("@cosmjs/crypto");
var _elliptic = require("elliptic");
var _utils = require("./utils");
var types = _interopRequireWildcard(require("../types"));
var _errors = require("../errors");
var _buffer = require("buffer");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Sha256 = require('sha256');
var SM2 = require('sm-crypto-bj').sm2;
var bcrypt = require('bcryptjs');
var nacl = require('tweetnacl');

/**
 * Crypto Utils
 * @hidden
 */
var Crypto = exports.Crypto = /*#__PURE__*/function () {
  function Crypto() {
    (0, _classCallCheck2["default"])(this, Crypto);
  }
  return (0, _createClass2["default"])(Crypto, null, [{
    key: "decodeAddress",
    value:
    /**
     * Decodes an address in bech32 format.
     * @param address The bech32 address to decode
     * @returns The decoded address buffer
     */
    function decodeAddress(address) {
      var decodeAddress = bech32.decode(address);
      return _buffer.Buffer.from(bech32.fromWords(decodeAddress.words));
    }

    /**
     * Checks whether an address is valid.
     * @param address The bech32 address to decode
     * @param hrp The prefix to check for the bech32 address
     * @returns true if the address is valid
     */
  }, {
    key: "checkAddress",
    value: function checkAddress(address, hrp) {
      try {
        if (!address.startsWith(hrp)) {
          return false;
        }
        var decodedAddress = bech32.decode(address);
        var decodedAddressLength = Crypto.decodeAddress(address).length;
        if (decodedAddressLength === Crypto.DECODED_ADDRESS_LEN && decodedAddress.prefix === hrp) {
          return true;
        }
        return false;
      } catch (err) {
        return false;
      }
    }

    /**
     * Encodes an address from input data bytes.
     * @param pubkeyHash The public key to encode
     * @param hrp The address prefix
     * @param type The output type (default: hex)
     * @returns Bech32 address
     */
  }, {
    key: "encodeAddress",
    value: function encodeAddress(pubkeyHash) {
      var hrp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'iaa';
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hex';
      var words = bech32.toWords(_buffer.Buffer.from(pubkeyHash, type));
      return bech32.encode(hrp, words);
    }

    /**
     * ConvertAndEncode converts from a base64 encoded byte array to bach32 encoded byte string and then to bech32
     * @param hrp The address prefix
     * @param data Base64 encoded byte array
     * @returns Bech32 address
     */
  }, {
    key: "convertAndEncode",
    value: function convertAndEncode(hrp, data) {
      var converted = Crypto.convertBits(data, 8, 5, true);
      return bech32.encode(hrp, converted);
    }

    /**
     * DecodeAndConvert decodes a bech32 encoded string and converts to base64 encoded bytes
     * @param address Bech32 address
     * @returns Base64 encoded bytes
     */
  }, {
    key: "decodeAndConvert",
    value: function decodeAndConvert(address) {
      var decodeAddress = bech32.decode(address);
      return Crypto.convertBits(decodeAddress.words, 5, 8, false);
    }

    /**
     * Generates 32 bytes of random entropy
     * @param len The output length (default: 32 bytes)
     * @returns An entropy bytes hexstring
     */
  }, {
    key: "generatePrivateKey",
    value: function generatePrivateKey() {
      var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Crypto.PRIVKEY_LEN;
      return _utils.Utils.ab2hexstring(csprng(len));
    }

    /**
     * Generates an arrayBuffer filled with random bits.
     * @param length The length of buffer.
     * @returns A random array buffer
     */
  }, {
    key: "generateRandomArray",
    value: function generateRandomArray(length) {
      return csprng(length);
    }

    /**
     * Calculates the full public key from a given private key.
     * @param privateKeyHex The private key hexstring
     * @param type Pubkey Type
     * @returns Public key {type:type, value:hexstring}
     */
  }, {
    key: "getFullPublicKeyFromPrivateKey",
    value: function getFullPublicKeyFromPrivateKey(privateKeyHex) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : types.PubkeyType.secp256k1;
      if (!privateKeyHex || privateKeyHex.length !== Crypto.PRIVKEY_LEN * 2) {
        throw new _errors.SdkError('invalid privateKey', _errors.CODES.KeyNotFound);
      }
      var pubKey = '';
      switch (type) {
        case types.PubkeyType.ed25519:
          throw new _errors.SdkError("not implement", _errors.CODES.Panic);
        case types.PubkeyType.sm2:
          pubKey = SM2.getPublicKeyFromPrivateKey(privateKeyHex);
          break;
        case types.PubkeyType.secp256k1:
        default:
          var secp256k1pubkey = new _elliptic.ec('secp256k1').keyFromPrivate(privateKeyHex, 'hex').getPublic();
          pubKey = secp256k1pubkey.encode('hex');
          break;
      }
      return {
        type: type,
        value: pubKey
      };
    }

    /**
     * Calculates the public key from a given private key.
     * @param privateKeyHex The private key hexstring
     * @param type Pubkey Type
     * @returns Public key {type:type, value:hexstring}
     */
  }, {
    key: "getPublicKeyFromPrivateKey",
    value: function getPublicKeyFromPrivateKey(privateKeyHex) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : types.PubkeyType.secp256k1;
      if (!privateKeyHex || privateKeyHex.length !== Crypto.PRIVKEY_LEN * 2) {
        throw new _errors.SdkError('invalid privateKey', _errors.CODES.KeyNotFound);
      }
      var pubKey = '';
      switch (type) {
        case types.PubkeyType.ed25519:
          throw new _errors.SdkError("not implement", _errors.CODES.Panic);
        case types.PubkeyType.sm2:
          pubKey = SM2.getPublicKeyFromPrivateKey(privateKeyHex, 'compress');
          break;
        case types.PubkeyType.secp256k1:
        default:
          var secp256k1pubkey = new _elliptic.ec('secp256k1').keyFromPrivate(privateKeyHex, 'hex').getPublic();
          pubKey = _buffer.Buffer.from(secp256k1pubkey.encodeCompressed()).toString('hex');
          break;
      }
      return {
        type: type,
        value: pubKey
      };
    }

    /**
     * [marshalPubKey description]
     * @param  {[type]} pubKey:{type: types.PubkeyType, value:base64String} Tendermint public key
     * @param  {[type]} lengthPrefixed:boolean length prefixed
     * @return {[type]} pubKey hexString public key with amino prefix
     */
  }, {
    key: "aminoMarshalPubKey",
    value: function aminoMarshalPubKey(pubKey, lengthPrefixed) {
      var type = pubKey.type,
        value = pubKey.value;
      var pubKeyType = '';
      switch (type) {
        case types.PubkeyType.secp256k1:
          pubKeyType = 'tendermint/PubKeySecp256k1';
          break;
        case types.PubkeyType.ed25519:
          pubKeyType = 'tendermint/PubKeyEd25519';
          break;
        case types.PubkeyType.sm2:
          pubKeyType = 'tendermint/PubKeySm2';
          break;
        default:
          pubKeyType = type;
          break;
      }
      var pk = _utils.Utils.getAminoPrefix(pubKeyType);
      pk = pk.concat(_buffer.Buffer.from(value, 'base64').length);
      pk = pk.concat(Array.from(_buffer.Buffer.from(value, 'base64')));
      if (lengthPrefixed) {
        pk = [pk.length].concat((0, _toConsumableArray2["default"])(pk));
      }
      return _buffer.Buffer.from(pk).toString('hex');
    }

    /**
     * Gets an address from a public key hex.
     * @param publicKeyHex The public key hexstring
     * @param prefix The address prefix
     *
     * @returns The address
     */
  }, {
    key: "getAddressFromPublicKey",
    value: function getAddressFromPublicKey(publicKey, prefix) {
      if (typeof publicKey == 'string') {
        publicKey = {
          type: types.PubkeyType.secp256k1,
          value: publicKey
        };
      }
      var hash = '';
      switch (publicKey.type) {
        case types.PubkeyType.ed25519:
          hash = _utils.Utils.sha256(publicKey.value).substr(0, 40);
          break;
        case types.PubkeyType.sm2:
          hash = _utils.Utils.sha256(publicKey.value).substr(0, 40);
          break;
        case types.PubkeyType.secp256k1:
        default:
          hash = _utils.Utils.sha256ripemd160(publicKey.value);
          break;
      }
      return Crypto.encodeAddress(hash, prefix);
      ;
    }

    /**
     * Gets an address from a private key.
     * @param privateKeyHex The private key hexstring
     * @param prefix Bech32 prefix
     * @param type Pubkey Type
     * @returns The address
     */
  }, {
    key: "getAddressFromPrivateKey",
    value: function getAddressFromPrivateKey(privateKeyHex, prefix) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : types.PubkeyType.secp256k1;
      return Crypto.getAddressFromPublicKey(Crypto.getPublicKeyFromPrivateKey(privateKeyHex, type), prefix);
    }

    /**
     * Verifies a signature (64 byte <r,s>) given the sign bytes and public key.
     * @param sigHex The signature hexstring.
     * @param signBytesHex Unsigned transaction sign bytes hexstring.
     * @param publicKeyHex The public key.
     * @returns Signature. Does not include tx.
     */
    // static verifySignature(
    //   sigHex: string,
    //   signBytesHex: string,
    //   publicKeyHex: string
    // ): string {
    //   const publicKey = Buffer.from(publicKeyHex, 'hex');
    //   if (!ecc.isPoint(publicKey)) {
    //     throw new SdkError('Invalid public key provided');
    //   }
    //   const msgHash = Utils.sha256(signBytesHex);
    //   const msgHashHex = Buffer.from(msgHash, 'hex');
    //   return ecc.verify(msgHashHex, publicKey, Buffer.from(sigHex, 'hex'));
    // }
    /**
     * 
     * @param messageHash 
     * @param privkey The private key
     * @returns 
     */
  }, {
    key: "createSignature",
    value: function createSignature(messageHash, privkey) {
      if (messageHash.length === 0) {
        throw new _errors.SdkError("Message hash must not be empty");
      }
      if (messageHash.length > 32) {
        throw new _errors.SdkError("Message hash length must not exceed 32 bytes");
      }
      var secp256k1 = new _elliptic.ec("secp256k1");
      var keypair = secp256k1.keyFromPrivate(privkey);
      // the `canonical` option ensures creation of lowS signature representations
      var _keypair$sign = keypair.sign(messageHash, {
          canonical: true
        }),
        r = _keypair$sign.r,
        s = _keypair$sign.s,
        recoveryParam = _keypair$sign.recoveryParam;
      if (typeof recoveryParam !== "number") throw new _errors.SdkError("Recovery param missing");
      return new _crypto.ExtendedSecp256k1Signature(Uint8Array.from(r.toArray()), Uint8Array.from(s.toArray()), recoveryParam);
    }

    /**
     * Generates a signature (base64 string) for a signDocSerialize based on given private key.
     * @param signDocSerialize from protobuf and tx.
     * @param privateKey The private key.
     * @param type Pubkey Type.
     * @returns Signature. Does not include tx.
     */
  }, {
    key: "generateSignature",
    value: function generateSignature(signDocSerialize, private_key) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : types.PubkeyType.secp256k1;
      var signature = '';
      switch (type) {
        case types.PubkeyType.ed25519:
          throw new _errors.SdkError("not implement", _errors.CODES.Panic);
        case types.PubkeyType.sm2:
          var sm2Sig = SM2.doSignature(_buffer.Buffer.from(signDocSerialize), private_key, {
            hash: true
          });
          signature = _buffer.Buffer.from(sm2Sig, 'hex').toString('base64');
          break;
        case types.PubkeyType.secp256k1:
        default:
          var msghash = Sha256(signDocSerialize, {
            asBytes: true
          });
          var prikeyArr = _buffer.Buffer.from(private_key, 'hex');
          var secp256k1Signature = Crypto.createSignature(msghash, Uint8Array.from(prikeyArr));
          var signatureBytes = new Uint8Array([].concat((0, _toConsumableArray2["default"])(secp256k1Signature.r(32)), (0, _toConsumableArray2["default"])(secp256k1Signature.s(32))));
          signature = _buffer.Buffer.from(signatureBytes).toString('base64');
          break;
      }
      if (!signature) {
        throw Error(' generate Signature error ');
      }
      return signature;
    }

    /**
     * Generates a keystore object (web3 secret storage format) given a private key to store and a password.
     * @param privateKeyHex The private key hexstring.
     * @param password The password.
     * @param prefix Bech32 prefix
     * @param iterations Number of iterations. Defaults to 262144
     * @returns The keystore object.
     */
  }, {
    key: "generateKeyStore",
    value: function generateKeyStore(privateKeyHex, password, prefix) {
      var iterations = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 262144;
      var salt = _buffer.Buffer.from(_crypto.Random.getBytes(32));
      var iv = _buffer.Buffer.from(_crypto.Random.getBytes(16));
      var cipherAlg = 'aes-128-ctr';
      var kdf = 'pbkdf2';
      var kdfparams = {
        dklen: 32,
        salt: salt.toString('hex'),
        c: iterations,
        prf: 'hmac-sha256'
      };
      var derivedKey = cryptoJs.PBKDF2(password, _utils.Utils.bufferToWordArray(salt), {
        keySize: 8,
        iterations: kdfparams.c,
        hasher: cryptoJs.algo.SHA256
      });
      var encrypted = AES.encrypt(cryptoJs.enc.Hex.parse(privateKeyHex), cryptoJs.enc.Hex.parse(_buffer.Buffer.from(_utils.Utils.wordArrayToArrayBuffer(derivedKey)).slice(0, 16).toString('hex')), {
        iv: cryptoJs.enc.Hex.parse(iv.toString('hex')),
        mode: cryptoJs.mode.CTR,
        padding: cryptoJs.pad.NoPadding
      });
      if (!encrypted) {
        throw new _errors.SdkError('Unsupported encrypted', _errors.CODES.Internal);
      }
      var ciphertext = _buffer.Buffer.from(_utils.Utils.wordArrayToArrayBuffer(encrypted.ciphertext));
      var bufferValue = _buffer.Buffer.concat([_buffer.Buffer.from(_utils.Utils.wordArrayToArrayBuffer(derivedKey).slice(16, 32)), ciphertext]);
      return {
        version: 1,
        id: uuid.v4({
          random: _buffer.Buffer.from(_crypto.Random.getBytes(16))
        }),
        address: Crypto.getAddressFromPrivateKey(privateKeyHex, prefix),
        crypto: {
          ciphertext: ciphertext.toString('hex'),
          cipherparams: {
            iv: iv.toString('hex')
          },
          cipher: cipherAlg,
          kdf: kdf,
          kdfparams: kdfparams,
          // mac must use sha3 according to web3 secret storage spec
          mac: _utils.Utils.sha3(bufferValue.toString('hex'))
        }
      };
    }

    /**
     * Gets a private key from a keystore given its password.
     * @param keystore The keystore in json format
     * @param password The password.
     * @returns The private key
     */
  }, {
    key: "getPrivateKeyFromKeyStore",
    value: function getPrivateKeyFromKeyStore(keystore, password) {
      if (!is.string(password)) {
        throw new _errors.SdkError('No password given.', _errors.CODES.InvalidPassword);
      }
      var json = is.object(keystore) ? keystore : JSON.parse(keystore.toString());
      var kdfparams = json.crypto.kdfparams;
      if (kdfparams.prf !== 'hmac-sha256') {
        throw new _errors.SdkError('Unsupported parameters to PBKDF2', _errors.CODES.Internal);
      }
      var derivedKey = cryptoJs.PBKDF2(password, _utils.Utils.bufferToWordArray(_buffer.Buffer.from(kdfparams.salt, 'hex')), {
        keySize: 8,
        iterations: kdfparams.c,
        hasher: cryptoJs.algo.SHA256
      });
      var ciphertext = _buffer.Buffer.from(json.crypto.ciphertext, 'hex');
      var bufferValue = _buffer.Buffer.concat([_buffer.Buffer.from(_utils.Utils.wordArrayToArrayBuffer(derivedKey).slice(16, 32)), ciphertext]);

      // try sha3 (new / ethereum keystore) mac first
      var mac = _utils.Utils.sha3(bufferValue.toString('hex'));
      if (mac !== json.crypto.mac) {
        // the legacy (sha256) mac is next to be checked. pre-testnet keystores used a sha256 digest for the mac.
        // the sha256 mac was not compatible with ethereum keystores, so it was changed to sha3 for mainnet.
        var macLegacy = _utils.Utils.sha256(bufferValue.toString('hex'));
        if (macLegacy !== json.crypto.mac) {
          throw new _errors.SdkError('Keystore mac check failed (sha3 & sha256) wrong password?', _errors.CODES.Internal);
        }
      }
      var privateKey = AES.decrypt(cryptoJs.enc.Base64.stringify(cryptoJs.enc.Hex.parse(json.crypto.ciphertext)), cryptoJs.enc.Hex.parse(_buffer.Buffer.from(_utils.Utils.wordArrayToArrayBuffer(derivedKey)).slice(0, 16).toString('hex')), {
        iv: cryptoJs.enc.Hex.parse(json.crypto.cipherparams.iv),
        mode: cryptoJs.mode.CTR,
        padding: cryptoJs.pad.NoPadding
      }).toString();
      return privateKey;
    }

    /**
     * Gets a private key from a keystore v1.0 given its password.
     * @param keystore The keystore v1.0
     * @param password The password.
     * @returns The private key
     */
  }, {
    key: "getPrivateKeyFromKeystoreV1",
    value: function getPrivateKeyFromKeystoreV1(keystore, password) {
      if (!is.string(password)) {
        throw new _errors.SdkError('No password given.', _errors.CODES.InvalidPassword);
      }

      // unarmor
      var keystore_content = _utils.Utils.unarmor(keystore);
      var header = keystore_content.header;
      if (!header.salt) {
        throw new _errors.SdkError('invalid keystore salt');
      }
      var salt = bcrypt.encodeBase64(_buffer.Buffer.from(header.salt, 'hex'), 16);
      var key = bcrypt.hashSync(password, "".concat(types.keystoreSaltPerfix).concat(salt));
      key = _utils.Utils.sha256(_buffer.Buffer.from(key).toString('hex'));
      var keystoreData = _buffer.Buffer.from(keystore_content.data, 'base64');
      var nonce = keystoreData.slice(0, types.xchacha20NonceLength);
      var privKey_full = nacl.secretbox.open(keystoreData.slice(types.xchacha20NonceLength), nonce, _buffer.Buffer.from(key, 'hex'));
      if (!privKey_full) {
        throw new _errors.SdkError('KeyStore parsing failed', _errors.CODES.Internal);
      }
      var privKey = _buffer.Buffer.from(privKey_full).slice(5).toString('hex');
      if (header.type != types.PubkeyType.secp256k1 && header.type != types.PubkeyType.ed25519 && header.type != types.PubkeyType.sm2) {
        header.type = types.PubkeyType.secp256k1;
      }
      return {
        type: header.type,
        privKey: privKey
      };
    }

    /**
     * Generates mnemonic phrase words using random entropy.
     *
     * @returns Mnemonic
     */
  }, {
    key: "generateMnemonic",
    value: function generateMnemonic() {
      var entropyLength = 4 * Math.floor(11 * Crypto.MNEMONIC_LEN / 33);
      var entropy = _crypto.Random.getBytes(entropyLength);
      var mnemonic = _crypto.Bip39.encode(entropy);
      return mnemonic.toString();
    }

    /**
     * Validates mnemonic phrase words.
     * @param mnemonic The mnemonic phrase words
     * @returns Validation result
     */
  }, {
    key: "validateMnemonic",
    value: function validateMnemonic(mnemonic) {
      try {
        _crypto.Bip39.decode(new _crypto.EnglishMnemonic(mnemonic));
      } catch (e) {
        return false;
      }
      return true;
    }
  }, {
    key: "mnemonicToSeed",
    value:
    /**
     * 
     * @param mnemonic The mnemonic phrase words
     * @param password 
     * @returns 
     */
    function mnemonicToSeed(mnemonic, password) {
      var mnemonicBuffer = _buffer.Buffer.from(mnemonic).toString('utf8');
      var saltBuffer = _buffer.Buffer.from('mnemonic' + password).toString('utf8');
      var res = cryptoJs.PBKDF2(mnemonicBuffer, saltBuffer, {
        keySize: 16,
        iterations: 2048,
        hasher: cryptoJs.algo.SHA512
      });
      return _buffer.Buffer.from(_utils.Utils.wordArrayToArrayBuffer(res));
    }
  }, {
    key: "getPrivateKeyFromMnemonic",
    value:
    /**
     * Gets a private key from mnemonic words.
     * @param mnemonic The mnemonic phrase words
     * @param derive Derive a private key using the default HD path (default: true)
     * @param index The bip44 address index (default: 0)
     * @param password A passphrase for generating the salt, according to bip39
     * @returns hexstring
     */
    function getPrivateKeyFromMnemonic(mnemonic) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var derive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var password = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      if (!Crypto.validateMnemonic(mnemonic)) {
        throw new _errors.SdkError('wrong mnemonic format', _errors.CODES.InvalidMnemonic);
      }
      var seed = Uint8Array.from(Crypto.mnemonicToSeed(mnemonic, password));
      if (derive) {
        var _Slip10$derivePath = _crypto.Slip10.derivePath(_crypto.Slip10Curve.Secp256k1, seed, (0, _crypto.stringToPath)(Crypto.HDPATH_MASTER + Crypto.HDPATH + index)),
          privkey = _Slip10$derivePath.privkey;
        if (typeof privkey === 'undefined') {
          throw new _errors.SdkError('error getting private key from mnemonic', _errors.CODES.DerivePrivateKeyError);
        }
        return _buffer.Buffer.from(privkey).toString('hex');
      }
      return _buffer.Buffer.from(seed).toString('hex');
    }

    /**
     * Generate Tx hash from stdTx
     * @param  protobuf tx :base64 string
     * @throws tx hash
     */
  }, {
    key: "generateTxHash",
    value: function generateTxHash(tx) {
      if (!tx || typeof tx != 'string') {
        throw new _errors.SdkError('invalid tx', _errors.CODES.TxParseError);
      }
      var tx_pb = types.tx_tx_pb.Tx.deserializeBinary(tx);
      if (!tx_pb) {
        throw new _errors.SdkError('deserialize tx err', _errors.CODES.TxParseError);
      }
      var txRaw = new types.tx_tx_pb.TxRaw();
      txRaw.setBodyBytes(tx_pb.getBody().serializeBinary());
      txRaw.setAuthInfoBytes(tx_pb.getAuthInfo().serializeBinary());
      tx_pb.getSignaturesList().forEach(function (signature) {
        txRaw.addSignatures(signature);
      });
      return (Sha256(txRaw.serializeBinary()) || '').toUpperCase();
    }

    /**
     * Copy from https://github.com/sipa/bech32/blob/master/ref/javascript/segwit_addr.js
     */
  }, {
    key: "convertBits",
    value: function convertBits(data, frombits, tobits, pad) {
      var acc = 0;
      var bits = 0;
      var ret = [];
      var maxv = (1 << tobits) - 1;
      for (var p = 0; p < data.length; ++p) {
        var value = data[p];
        if (value < 0 || value >> frombits !== 0) {
          return [];
        }
        acc = acc << frombits | value;
        bits += frombits;
        while (bits >= tobits) {
          bits -= tobits;
          ret.push(acc >> bits & maxv);
        }
      }
      if (pad) {
        if (bits > 0) {
          ret.push(acc << tobits - bits & maxv);
        }
      } else if (bits >= frombits || acc << tobits - bits & maxv) {
        return [];
      }
      return ret;
    }
  }]);
}();
// secp256k1 privkey is 32 bytes
(0, _defineProperty2["default"])(Crypto, "PRIVKEY_LEN", 32);
(0, _defineProperty2["default"])(Crypto, "MNEMONIC_LEN", 24);
(0, _defineProperty2["default"])(Crypto, "DECODED_ADDRESS_LEN", 20);
//hdpath
(0, _defineProperty2["default"])(Crypto, "HDPATH", "44'/118'/0'/0/");
(0, _defineProperty2["default"])(Crypto, "HDPATH_MASTER", "m/");