"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Keys = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _crypto = require("../utils/crypto");
var _errors = require("../errors");
var is = _interopRequireWildcard(require("is_js"));
var types = _interopRequireWildcard(require("../types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * This module allows you to manage your local tendermint keystore (wallets) for iris.
 *
 * **NOTE:** You need to implement the [[KeyDAO]] Interface first.
 *
 * @category Modules
 * @since v0.17
 */
var Keys = exports.Keys = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Keys(client) {
    (0, _classCallCheck2["default"])(this, Keys);
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
  return (0, _createClass2["default"])(Keys, [{
    key: "add",
    value: (function () {
      var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name, password) {
        var type,
          mnemonic,
          privKey,
          pubKey,
          address,
          encryptedPrivKey,
          encryptedMnemonic,
          wallet,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              type = _args.length > 2 && _args[2] !== undefined ? _args[2] : types.PubkeyType.secp256k1;
              if (!is.empty(name)) {
                _context.next = 3;
                break;
              }
              throw new _errors.SdkError("Name of the key can not be empty");
            case 3:
              if (!is.empty(password)) {
                _context.next = 5;
                break;
              }
              throw new _errors.SdkError("Password of the key can not be empty");
            case 5:
              if (this.client.config.keyDAO.encrypt) {
                _context.next = 7;
                break;
              }
              throw new _errors.SdkError("Encrypt method of KeyDAO not implemented");
            case 7:
              // const exists = this.client.config.keyDAO.read(name);
              // if (exists) {
              //   throw new SdkError(`Key with name '${name}' already exists`);
              // }
              mnemonic = _crypto.Crypto.generateMnemonic();
              _context.next = 10;
              return _crypto.Crypto.getPrivateKeyFromMnemonic(mnemonic);
            case 10:
              privKey = _context.sent;
              pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privKey, type);
              address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);
              encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password);
              encryptedMnemonic = this.client.config.keyDAO.encrypt(mnemonic, password);
              wallet = {
                address: address,
                privateKey: encryptedPrivKey,
                publicKey: _crypto.Crypto.aminoMarshalPubKey(pubKey),
                mnemonic: encryptedMnemonic
              }; // Save the key to app
              this.client.config.keyDAO.write(name, wallet);
              return _context.abrupt("return", wallet);
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x, _x2) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
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
    )
  }, {
    key: "recover",
    value: (function () {
      var _recover = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(name, password, mnemonic) {
        var type,
          index,
          derive,
          saltPassword,
          privKey,
          pubKey,
          address,
          encryptedPrivKey,
          encryptedMnemonic,
          wallet,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              type = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : types.PubkeyType.secp256k1;
              index = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : 0;
              derive = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : true;
              saltPassword = _args2.length > 6 && _args2[6] !== undefined ? _args2[6] : '';
              if (!is.empty(name)) {
                _context2.next = 6;
                break;
              }
              throw new _errors.SdkError("Name of the key can not be empty");
            case 6:
              if (!is.empty(password)) {
                _context2.next = 8;
                break;
              }
              throw new _errors.SdkError("Password of the key can not be empty");
            case 8:
              if (!is.empty(mnemonic)) {
                _context2.next = 10;
                break;
              }
              throw new _errors.SdkError("Mnemonic of the key can not be empty");
            case 10:
              if (this.client.config.keyDAO.encrypt) {
                _context2.next = 12;
                break;
              }
              throw new _errors.SdkError("Encrypt method of KeyDAO not implemented");
            case 12:
              _context2.next = 14;
              return _crypto.Crypto.getPrivateKeyFromMnemonic(mnemonic, index, derive, saltPassword);
            case 14:
              privKey = _context2.sent;
              pubKey = _crypto.Crypto.getPublicKeyFromPrivateKey(privKey, type);
              address = _crypto.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);
              encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password);
              encryptedMnemonic = this.client.config.keyDAO.encrypt(mnemonic, password);
              wallet = {
                address: address,
                privateKey: encryptedPrivKey,
                publicKey: _crypto.Crypto.aminoMarshalPubKey(pubKey),
                mnemonic: encryptedMnemonic
              }; // Save the key to app
              this.client.config.keyDAO.write(name, wallet);
              return _context2.abrupt("return", wallet);
            case 22:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function recover(_x3, _x4, _x5) {
        return _recover.apply(this, arguments);
      }
      return recover;
    }()
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
    )
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
      }
      // const exists = this.client.config.keyDAO.read(name);
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
      };
      // Save the key to app
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
      };
      // Save the key to app
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
      }

      // const exists = this.client.config.keyDAO.read(name);
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
      };
      // Save the key to app
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
      }

      // Check keystore password
      this.client.config.keyDAO.decrypt(keyObj.privateKey, password);

      // Delete the key from app
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
    }

    // TODO: Ledger support
  }]);
}();