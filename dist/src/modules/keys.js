"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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
   * @returns Bech32 address and mnemonic
   * @since v0.17
   */


  (0, _createClass2["default"])(Keys, [{
    key: "add",
    value: function add(name, password) {
      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(password)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (!this.client.config.keyDAO.encrypt) {
        throw new _errors.SdkError("Encrypt method of KeyDAO not implemented");
      }

      var exists = this.client.config.keyDAO.read(name);

      if (exists) {
        throw new _errors.SdkError("Key with name '".concat(name, "' already exists"));
      }

      var mnemonic = _crypto.Crypto.generateMnemonic();

      var privKey = _crypto.Crypto.getPrivateKeyFromMnemonic(mnemonic);

      var pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privKey);

      var address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);

      var encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password); // Save the key to app

      this.client.config.keyDAO.write(name, {
        address: address,
        privKey: encryptedPrivKey
      });
      return {
        address: address,
        mnemonic: mnemonic
      };
    }
    /**
     * Recover a key
     *
     * @param name Name of the key
     * @param password Password for encrypting the keystore
     * @param mnemonic Mnemonic of the key
     * @param derive Derive a private key using the default HD path (default: true)
     * @param index The bip44 address index (default: 0)
     * @param saltPassword A passphrase for generating the salt, according to bip39
     * @returns Bech32 address
     * @since v0.17
     */

  }, {
    key: "recover",
    value: function recover(name, password, mnemonic) {
      var derive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var saltPassword = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';

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
      }

      var exists = this.client.config.keyDAO.read(name);

      if (exists) {
        throw new _errors.SdkError("Key with name '".concat(name, "' exists"));
      }

      var privKey = _crypto.Crypto.getPrivateKeyFromMnemonic(mnemonic, derive, index, saltPassword);

      var pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privKey);

      var address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);

      var encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password); // Save the key to app

      this.client.config.keyDAO.write(name, {
        address: address,
        privKey: encryptedPrivKey
      });
      return address;
    }
    /**
     * Import a key from keystore
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param keystore Keystore json or object
     * @returns Bech32 address
     * @since v0.17
     */

  }, {
    key: "import",
    value: function _import(name, password, keystore) {
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

      var exists = this.client.config.keyDAO.read(name);

      if (exists) {
        throw new _errors.SdkError("Key with name '".concat(name, "' already exists"));
      }

      var privKey = _crypto.Crypto.getPrivateKeyFromKeyStore(keystore, password);

      var pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privKey);

      var address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);

      var encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password); // Save the key to app

      this.client.config.keyDAO.write(name, {
        address: address,
        privKey: encryptedPrivKey
      });
      return address;
    }
    /**
     * Import a PrivateKey
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param privateKey privateKey hex
     * @returns Bech32 address
     * @since v0.17
     */

  }, {
    key: "importPrivateKey",
    value: function importPrivateKey(name, password, privateKey) {
      if (is.empty(name)) {
        throw new _errors.SdkError("Name of the key can not be empty");
      }

      if (is.empty(password)) {
        throw new _errors.SdkError("Password of the key can not be empty");
      }

      if (is.empty(privateKey)) {
        throw new _errors.SdkError("privateKey can not be empty");
      }

      var exists = this.client.config.keyDAO.read(name);

      if (exists) {
        throw new _errors.SdkError("Key with name '".concat(name, "' already exists"));
      }

      var pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privateKey);

      var address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);

      var encryptedPrivKey = this.client.config.keyDAO.encrypt(privateKey, password); // Save the key to app

      this.client.config.keyDAO.write(name, {
        address: address,
        privKey: encryptedPrivKey
      });
      return address;
    }
    /**
     * Export keystore of a key
     *
     * @param name Name of the key
     * @param keyPassword Password of the key
     * @param keystorePassword Password for encrypting the keystore
     * @returns Keystore json
     * @since v0.17
     */

  }, {
    key: "export",
    value: function _export(name, keyPassword, keystorePassword) {
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

      var privKey = this.client.config.keyDAO.decrypt(keyObj.privKey, keyPassword);

      var keystore = _crypto.Crypto.generateKeyStore(privKey, keystorePassword, this.client.config.bech32Prefix.AccAddr);

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


      this.client.config.keyDAO.decrypt(keyObj.privKey, password); // Delete the key from app

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
        throw new _errors.SdkError("Key with name '".concat(name, "' not found"));
      }

      return keyObj.address;
    } // TODO: Ledger support

  }]);
  return Keys;
}();

exports.Keys = Keys;