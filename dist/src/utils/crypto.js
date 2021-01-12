"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var cryp = _interopRequireWildcard(require("crypto-browserify"));

var uuid = _interopRequireWildcard(require("uuid"));

var is = _interopRequireWildcard(require("is_js"));

var bip32 = _interopRequireWildcard(require("bip32"));

var bip39 = _interopRequireWildcard(require("bip39"));

var _elliptic = require("elliptic");

var _utils = require("./utils");

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

var Sha256 = require('sha256');

var Secp256k1 = require('secp256k1');
/**
 * Crypto Utils
 * @hidden
 */


var Crypto = /*#__PURE__*/function () {
  function Crypto() {
    (0, _classCallCheck2["default"])(this, Crypto);
  }

  (0, _createClass2["default"])(Crypto, null, [{
    key: "decodeAddress",
    // secp256k1 privkey is 32 bytes
    //hdpath

    /**
     * Decodes an address in bech32 format.
     * @param address The bech32 address to decode
     * @returns The decoded address buffer
     */
    value: function decodeAddress(address) {
      var decodeAddress = bech32.decode(address);
      return Buffer.from(bech32.fromWords(decodeAddress.words));
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
     * @param pubkey The public key to encode
     * @param hrp The address prefix
     * @param type The output type (default: hex)
     * @returns Bech32 address
     */

  }, {
    key: "encodeAddress",
    value: function encodeAddress(pubkey) {
      var hrp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'iaa';
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hex';
      var words = bech32.toWords(Buffer.from(pubkey, type));
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
     * Gets the pubkey hexstring
     * @param publicKey Encoded public key
     * @returns Public key hexstring
     */

  }, {
    key: "getPublicKey",
    value: function getPublicKey(publicKey) {
      var keyPair = Crypto.ec.keyFromPublic(publicKey, 'hex');
      return keyPair.getPublic();
    }
    /**
     * Calculates the public key from a given private key.
     * @param privateKeyHex The private key hexstring
     * @returns Public key hexstring
     */

  }, {
    key: "getPublicKeyFromPrivateKey",
    value: function getPublicKeyFromPrivateKey(privateKeyHex) {
      if (!privateKeyHex || privateKeyHex.length !== Crypto.PRIVKEY_LEN * 2) {
        throw new _errors.SdkError('invalid privateKey');
      }

      var curve = new _elliptic.ec(Crypto.CURVE);
      var keypair = curve.keyFromPrivate(privateKeyHex, 'hex');
      var unencodedPubKey = keypair.getPublic().encode('hex');
      return unencodedPubKey;
    }
    /**
     * Calculates the Secp256k1 public key from a given private key.
     * @param privateKeyHex The private key hexstring
     * @returns Tendermint public key
     */

  }, {
    key: "getPublicKeySecp256k1FromPrivateKey",
    value: function getPublicKeySecp256k1FromPrivateKey(privateKeyHex) {
      var publicKeyHex = Crypto.getPublicKeyFromPrivateKey(privateKeyHex);
      var pubKey = Crypto.ec.keyFromPublic(publicKeyHex, 'hex');
      var pubPoint = pubKey.getPublic();
      var compressed = pubPoint.encodeCompressed();
      return {
        type: 'tendermint/PubKeySecp256k1',
        value: Buffer.from(compressed).toString('base64')
      };
    }
    /**
     * Calculates the amino prefix Secp256k1 public key from a given private key.
     * @param privateKeyHex The private key hexstring
     * @returns Tendermint public key
     */

  }, {
    key: "getAminoPrefixPublicKey",
    value: function getAminoPrefixPublicKey(privateKeyHex) {
      var tendermintPK = Crypto.getPublicKeySecp256k1FromPrivateKey(privateKeyHex);
      var pk = Crypto.aminoMarshalPubKey(tendermintPK);
      return Buffer.from(pk).toString('hex');
    }
    /**
     * [marshalPubKey description]
     * @param  {[type]} pubKey:{type:string, value:base64String} Tendermint public key
     * @param  {[type]} lengthPrefixed:boolean length prefixed
     * @return {[type]} Uint8Array public key with amino prefix
     */

  }, {
    key: "aminoMarshalPubKey",
    value: function aminoMarshalPubKey(pubKey, lengthPrefixed) {
      var type = pubKey.type,
          value = pubKey.value;
      var pk = Crypto.getAminoPrefix(type);
      pk = pk.concat(Buffer.from(value, 'base64').length);
      pk = pk.concat(Array.from(Buffer.from(value, 'base64')));

      if (lengthPrefixed) {
        pk = [pk.length].concat((0, _toConsumableArray2["default"])(pk));
      }

      return pk;
    }
    /**
     * get amino prefix from public key encode type.
     * @param public key encode type
     * @returns UintArray
     */

  }, {
    key: "getAminoPrefix",
    value: function getAminoPrefix(prefix) {
      var b = Array.from(Buffer.from(Sha256(prefix), 'hex'));

      while (b[0] === 0) {
        b = b.slice(1, b.length - 1);
      }

      b = b.slice(3, b.length - 1);

      while (b[0] === 0) {
        b = b.slice(1, b.length - 1);
      }

      b = b.slice(0, 4);
      return b;
    }
    /**
     * PubKey performs the point-scalar multiplication from the privKey on the
     * generator point to get the pubkey.
     * @param privateKey
     * @returns Public key hexstring
     */

  }, {
    key: "generatePubKey",
    value: function generatePubKey(privateKey) {
      var curve = new _elliptic.ec(Crypto.CURVE);
      var keypair = curve.keyFromPrivate(privateKey);
      return keypair.getPublic();
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
    value: function getAddressFromPublicKey(publicKeyHex, prefix) {
      var pubKey = Crypto.ec.keyFromPublic(publicKeyHex, 'hex');
      var pubPoint = pubKey.getPublic();
      var compressed = pubPoint.encodeCompressed();

      var hexed = _utils.Utils.ab2hexstring(compressed);

      var hash = _utils.Utils.sha256ripemd160(hexed); // https://git.io/fAn8N


      var address = Crypto.encodeAddress(hash, prefix);
      return address;
    }
    /**
     * Gets an address from a private key.
     * @param privateKeyHex The private key hexstring
     * @param prefix Bech32 prefix
     * @returns The address
     */

  }, {
    key: "getAddressFromPrivateKey",
    value: function getAddressFromPrivateKey(privateKeyHex, prefix) {
      return Crypto.getAddressFromPublicKey(Crypto.getPublicKeyFromPrivateKey(privateKeyHex), prefix);
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
     * Generates a signature (base64 string) for a signDocSerialize based on given private key.
     * @param signDocSerialize from protobuf and tx.
     * @param privateKey The private key.
     * @returns Signature. Does not include tx.
     */

  }, {
    key: "generateSignature",
    value: function generateSignature(signDocSerialize, private_key) {
      var hash = Buffer.from(Sha256(signDocSerialize, {
        asBytes: true
      }));
      var prikeyArr = Buffer.from(private_key, 'hex');
      var sig = Secp256k1.sign(hash, prikeyArr);
      return sig.signature.toString('base64');
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
      var salt = cryp.randomBytes(32);
      var iv = cryp.randomBytes(16);
      var cipherAlg = 'aes-128-ctr';
      var kdf = 'pbkdf2';
      var kdfparams = {
        dklen: 32,
        salt: salt.toString('hex'),
        c: iterations,
        prf: 'hmac-sha256'
      };
      var derivedKey = cryp.pbkdf2Sync(Buffer.from(password), salt, kdfparams.c, kdfparams.dklen, 'sha256');
      var cipher = cryp.createCipheriv(cipherAlg, derivedKey.slice(0, 16), iv);

      if (!cipher) {
        throw new _errors.SdkError('Unsupported cipher');
      }

      var ciphertext = Buffer.concat([cipher.update(Buffer.from(privateKeyHex, 'hex')), cipher["final"]()]);
      var bufferValue = Buffer.concat([derivedKey.slice(16, 32), ciphertext]);
      return {
        version: 1,
        id: uuid.v4({
          random: cryp.randomBytes(16)
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
        throw new _errors.SdkError('No password given.');
      }

      var json = is.object(keystore) ? keystore : JSON.parse(keystore.toString());
      var kdfparams = json.crypto.kdfparams;

      if (kdfparams.prf !== 'hmac-sha256') {
        throw new _errors.SdkError('Unsupported parameters to PBKDF2');
      }

      var derivedKey = cryp.pbkdf2Sync(Buffer.from(password), Buffer.from(kdfparams.salt, 'hex'), kdfparams.c, kdfparams.dklen, 'sha256');
      var ciphertext = Buffer.from(json.crypto.ciphertext, 'hex');
      var bufferValue = Buffer.concat([derivedKey.slice(16, 32), ciphertext]); // try sha3 (new / ethereum keystore) mac first

      var mac = _utils.Utils.sha3(bufferValue.toString('hex'));

      if (mac !== json.crypto.mac) {
        // the legacy (sha256) mac is next to be checked. pre-testnet keystores used a sha256 digest for the mac.
        // the sha256 mac was not compatible with ethereum keystores, so it was changed to sha3 for mainnet.
        var macLegacy = _utils.Utils.sha256(bufferValue.toString('hex'));

        if (macLegacy !== json.crypto.mac) {
          throw new _errors.SdkError('Keystore mac check failed (sha3 & sha256) wrong password?');
        }
      }

      var decipher = cryp.createDecipheriv(json.crypto.cipher, derivedKey.slice(0, 16), Buffer.from(json.crypto.cipherparams.iv, 'hex'));
      var privateKey = Buffer.concat([decipher.update(ciphertext), decipher["final"]()]).toString('hex');
      return privateKey;
    }
    /**
     * Generates mnemonic phrase words using random entropy.
     *
     * @returns Mnemonic
     */

  }, {
    key: "generateMnemonic",
    value: function generateMnemonic() {
      return bip39.generateMnemonic(Crypto.MNEMONIC_LEN);
    }
    /**
     * Validates mnemonic phrase words.
     * @param mnemonic The mnemonic phrase words
     * @returns Validation result
     */

  }, {
    key: "getPrivateKeyFromMnemonic",

    /**
     * Gets a private key from mnemonic words.
     * @param mnemonic The mnemonic phrase words
     * @param derive Derive a private key using the default HD path (default: true)
     * @param index The bip44 address index (default: 0)
     * @param password A passphrase for generating the salt, according to bip39
     * @returns hexstring
     */
    value: function getPrivateKeyFromMnemonic(mnemonic) {
      var derive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var password = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

      if (!bip39.validateMnemonic(mnemonic)) {
        throw new _errors.SdkError('wrong mnemonic format');
      }

      var seed = bip39.mnemonicToSeedSync(mnemonic, password);

      if (derive) {
        var master = bip32.fromSeed(seed);
        var child = master.derivePath(Crypto.HDPATH + index);

        if (typeof child === 'undefined' || typeof child.privateKey === 'undefined') {
          throw new _errors.SdkError('error getting private key from mnemonic');
        }

        return child.privateKey.toString('hex');
      }

      return seed.toString('hex');
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
        throw new _errors.SdkError('invalid tx');
      }

      var tx_pb = types.tx_tx_pb.Tx.deserializeBinary(tx);

      if (!tx_pb) {
        throw new _errors.SdkError('deserialize tx err');
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
  return Crypto;
}();

exports.Crypto = Crypto;
(0, _defineProperty2["default"])(Crypto, "PRIVKEY_LEN", 32);
(0, _defineProperty2["default"])(Crypto, "MNEMONIC_LEN", 256);
(0, _defineProperty2["default"])(Crypto, "DECODED_ADDRESS_LEN", 20);
(0, _defineProperty2["default"])(Crypto, "CURVE", 'secp256k1');
(0, _defineProperty2["default"])(Crypto, "HDPATH", "44'/118'/0'/0/");
(0, _defineProperty2["default"])(Crypto, "ec", new _elliptic.ec(Crypto.CURVE));
(0, _defineProperty2["default"])(Crypto, "validateMnemonic", bip39.validateMnemonic);