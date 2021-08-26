"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Keys = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _crypto = require("../utils/crypto");

var _errors = require("../errors");

var is = _interopRequireWildcard(require("is_js"));

var types = _interopRequireWildcard(require("../types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This module allows you to manage your local tendermint keystore (wallets) for iris.
 *
 * **NOTE:** You need to implement the [[KeyDAO]] Interface first.
 *
 * @category Modules
 * @since v0.17
 */
var Keys = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Keys(client) {
    (0, _classCallCheck2["default"])(this, Keys);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Create a new key
   *
   * @param name Name of the key
   * @param password Password for encrypting the keystore
   * @param type Pubkey Type
   * @returns Bech32 address and mnemonic
   * @since v0.17
   */


  (0, _createClass2["default"])(Keys, [{
    key: "add",
    value: function add(name, password) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : types.PubkeyType.secp256k1;

      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(password)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (!this.client.config.keyDAO.encrypt) {
        throw new _errors.SdkError("Encrypt method of KeyDAO not implemented");
      } // const exists = this.client.config.keyDAO.read(name);
      // if (exists) {
      //   throw new SdkError(`Key with name '${name}' already exists`);
      // }


      var mnemonic = _crypto.Crypto.generateMnemonic();

      var privKey = _crypto.Crypto.getPrivateKeyFromMnemonic(mnemonic);

      var pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privKey, type);

      var address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);

      var encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password);
      var encryptedMnemonic = this.client.config.keyDAO.encrypt(mnemonic, password);
      var wallet = {
        address: address,
        privateKey: encryptedPrivKey,
        publicKey: _crypto.Crypto.aminoMarshalPubKey(pubKey),
        mnemonic: encryptedMnemonic
      }; // Save the key to app

      this.client.config.keyDAO.write(name, wallet);
      return wallet;
    }
    /**
     * Recover a key
     *
     * @param name Name of the key
     * @param password Password for encrypting the keystore
     * @param mnemonic Mnemonic of the key
     * @param type Pubkey Type
     * @param index The bip44 address index (default: 0)
     * @param derive Derive a private key using the default HD path (default: true)
     * @param saltPassword A passphrase for generating the salt, according to bip39
     * @returns Bech32 address
     * @since v0.17
     */

  }, {
    key: "recover",
    value: function recover(name, password, mnemonic) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : types.PubkeyType.secp256k1;
      var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var derive = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var saltPassword = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';

      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(password)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (is.empty(mnemonic)) {
        throw new _errors.SdkError("Mnemonic of the key can not be empty");
      }

      if (!this.client.config.keyDAO.encrypt) {
        throw new _errors.SdkError("Encrypt method of KeyDAO not implemented");
      } // const exists = this.client.config.keyDAO.read(name);
      // if (exists) {
      //   throw new SdkError(`Key with name '${name}' exists`);
      // }


      var privKey = _crypto.Crypto.getPrivateKeyFromMnemonic(mnemonic, index, derive, saltPassword);

      var pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privKey, type);

      var address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);

      var encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password);
      var encryptedMnemonic = this.client.config.keyDAO.encrypt(mnemonic, password);
      var wallet = {
        address: address,
        privateKey: encryptedPrivKey,
        publicKey: _crypto.Crypto.aminoMarshalPubKey(pubKey),
        mnemonic: encryptedMnemonic
      }; // Save the key to app

      this.client.config.keyDAO.write(name, wallet);
      return wallet;
    }
    /**
     * Import a key from keystore
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param keystore Keystore json or object
     * @param type Pubkey Type
     * @returns types.Wallet
     * @since v0.17
     */

  }, {
    key: "import",
    value: function _import(name, password, keystore) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : types.PubkeyType.secp256k1;

      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(password)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (is.empty(keystore)) {
        throw new _errors.SdkError("Keystore can not be empty");
      }

      if (!this.client.config.keyDAO.encrypt) {
        throw new _errors.SdkError("Encrypt method of KeyDAO not implemented");
      } // const exists = this.client.config.keyDAO.read(name);
      // if (exists) {
      //   throw new SdkError(`Key with name '${name}' already exists`);
      // }


      var privKey = _crypto.Crypto.getPrivateKeyFromKeyStore(keystore, password);

      var pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privKey, type);

      var address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);

      var encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password);
      var wallet = {
        address: address,
        privateKey: encryptedPrivKey,
        publicKey: _crypto.Crypto.aminoMarshalPubKey(pubKey)
      }; // Save the key to app

      this.client.config.keyDAO.write(name, wallet);
      return wallet;
    }
    /**
     * Import a key from keystore v1.0
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param keystore Keystore v1.0
     * @returns types.Wallet
     * @since v0.17
     */

  }, {
    key: "importKeystore",
    value: function importKeystore(name, password, keystore) {
      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(password)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (is.empty(keystore)) {
        throw new _errors.SdkError("Keystore can not be empty");
      }

      if (!this.client.config.keyDAO.encrypt) {
        throw new _errors.SdkError("Encrypt method of KeyDAO not implemented");
      }

      var pk = _crypto.Crypto.getPrivateKeyFromKeystoreV1(keystore, password);

      var pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(pk.privKey, pk.type);

      var address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);

      var encryptedPrivKey = this.client.config.keyDAO.encrypt(pk.privKey, password);
      var wallet = {
        address: address,
        privateKey: encryptedPrivKey,
        publicKey: _crypto.Crypto.aminoMarshalPubKey(pubKey)
      }; // Save the key to app

      this.client.config.keyDAO.write(name, wallet);
      return wallet;
    }
    /**
     * Import a PrivateKey
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param privateKey privateKey hex
     * @param type Pubkey Type
     * @returns Bech32 address
     * @since v0.17
     */

  }, {
    key: "importPrivateKey",
    value: function importPrivateKey(name, password, privateKey) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : types.PubkeyType.secp256k1;

      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(password)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (is.empty(privateKey)) {
        throw new _errors.SdkError("privateKey can not be empty");
      } // const exists = this.client.config.keyDAO.read(name);
      // if (exists) {
      //   throw new SdkError(`Key with name '${name}' already exists`);
      // }


      var pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privateKey, type);

      var address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);

      var encryptedPrivKey = this.client.config.keyDAO.encrypt(privateKey, password);
      var wallet = {
        address: address,
        privateKey: encryptedPrivKey,
        publicKey: _crypto.Crypto.aminoMarshalPubKey(pubKey)
      }; // Save the key to app

      this.client.config.keyDAO.write(name, wallet);
      return wallet;
    }
    /**
     * Export keystore of a key
     *
     * @param name Name of the key
     * @param keyPassword Password of the key
     * @param keystorePassword Password for encrypting the keystore
     * @param iterations
     * @returns Keystore json
     * @since v0.17
     */

  }, {
    key: "export",
    value: function _export(name, keyPassword, keystorePassword, iterations) {
      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(keyPassword)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (!this.client.config.keyDAO.decrypt) {
        throw new _errors.SdkError("Decrypt method of KeyDAO not implemented");
      }

      var keyObj = this.client.config.keyDAO.read(name);

      if (!keyObj) {
        throw new _errors.SdkError("Key with name '".concat(name, "' not found"));
      }

      var privKey = this.client.config.keyDAO.decrypt(keyObj.privateKey, keyPassword);

      var keystore = _crypto.Crypto.generateKeyStore(privKey, keystorePassword, this.client.config.bech32Prefix.AccAddr, iterations);

      return JSON.stringify(keystore);
    }
    /**
     * Delete a key
     *
     * @param name Name of the key
     * @param password Password of the key
     * @since v0.17
     */

  }, {
    key: "delete",
    value: function _delete(name, password) {
      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(password)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (!this.client.config.keyDAO.decrypt) {
        throw new _errors.SdkError("Decrypt method of KeyDAO not implemented");
      }

      var keyObj = this.client.config.keyDAO.read(name);

      if (!keyObj) {
        throw new _errors.SdkError("Key with name '".concat(name, "' not found"));
      } // Check keystore password


      this.client.config.keyDAO.decrypt(keyObj.privateKey, password); // Delete the key from app

      this.client.config.keyDAO["delete"](name);
    }
    /**
     * Gets address of a key
     *
     * @param name Name of the key
     * @returns Bech32 address
     * @since v0.17
     */

  }, {
    key: "show",
    value: function show(name) {
      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      var keyObj = this.client.config.keyDAO.read(name);

      if (!keyObj) {
        throw new _errors.SdkError("Key with name '".concat(name, "' not found"), _errors.CODES.KeyNotFound);
      }

      return keyObj.address;
    } // TODO: Ledger support

  }]);
  return Keys;
}();

exports.Keys = Keys;