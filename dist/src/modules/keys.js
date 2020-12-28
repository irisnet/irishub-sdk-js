"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keys = void 0;
const crypto_1 = require("../utils/crypto");
const errors_1 = require("../errors");
const is = require("is_js");
const types = require("../types");
/**
 * This module allows you to manage your local tendermint keystore (wallets) for iris.
 *
 * **NOTE:** You need to implement the [[KeyDAO]] Interface first.
 *
 * @category Modules
 * @since v0.17
 */
class Keys {
    /** @hidden */
    constructor(client) {
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
    add(name, password, type = types.PubkeyType.secp256k1) {
        if (is.empty(name)) {
            throw new errors_1.SdkError(`Name of the key can not be empty`);
        }
        if (is.empty(password)) {
            throw new errors_1.SdkError(`Password of the key can not be empty`);
        }
        if (!this.client.config.keyDAO.encrypt) {
            throw new errors_1.SdkError(`Encrypt method of KeyDAO not implemented`);
        }
        const exists = this.client.config.keyDAO.read(name);
        if (exists) {
            throw new errors_1.SdkError(`Key with name '${name}' already exists`);
        }
        const mnemonic = crypto_1.Crypto.generateMnemonic();
        const privKey = crypto_1.Crypto.getPrivateKeyFromMnemonic(mnemonic);
        const pubKey = crypto_1.Crypto.getPublicKeyFromPrivateKey(privKey, type);
        const address = crypto_1.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);
        const encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password);
        // Save the key to app
        this.client.config.keyDAO.write(name, {
            address,
            privKey: encryptedPrivKey,
        });
        return { address, mnemonic };
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
    recover(name, password, mnemonic, type = types.PubkeyType.secp256k1, index = 0, derive = true, saltPassword = '') {
        if (is.empty(name)) {
            throw new errors_1.SdkError(`Name of the key can not be empty`);
        }
        if (is.empty(password)) {
            throw new errors_1.SdkError(`Password of the key can not be empty`);
        }
        if (is.empty(mnemonic)) {
            throw new errors_1.SdkError(`Mnemonic of the key can not be empty`);
        }
        if (!this.client.config.keyDAO.encrypt) {
            throw new errors_1.SdkError(`Encrypt method of KeyDAO not implemented`);
        }
        const exists = this.client.config.keyDAO.read(name);
        if (exists) {
            throw new errors_1.SdkError(`Key with name '${name}' exists`);
        }
        const privKey = crypto_1.Crypto.getPrivateKeyFromMnemonic(mnemonic, index, derive, saltPassword);
        const pubKey = crypto_1.Crypto.getPublicKeyFromPrivateKey(privKey, type);
        const address = crypto_1.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);
        const encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password);
        // Save the key to app
        this.client.config.keyDAO.write(name, {
            address,
            privKey: encryptedPrivKey,
        });
        return address;
    }
    /**
     * Import a key from keystore
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param keystore Keystore json or object
     * @param type Pubkey Type
     * @returns Bech32 address
     * @since v0.17
     */
    import(name, password, keystore, type = types.PubkeyType.secp256k1) {
        if (is.empty(name)) {
            throw new errors_1.SdkError(`Name of the key can not be empty`);
        }
        if (is.empty(password)) {
            throw new errors_1.SdkError(`Password of the key can not be empty`);
        }
        if (is.empty(keystore)) {
            throw new errors_1.SdkError(`Keystore can not be empty`);
        }
        if (!this.client.config.keyDAO.encrypt) {
            throw new errors_1.SdkError(`Encrypt method of KeyDAO not implemented`);
        }
        const exists = this.client.config.keyDAO.read(name);
        if (exists) {
            throw new errors_1.SdkError(`Key with name '${name}' already exists`);
        }
        const privKey = crypto_1.Crypto.getPrivateKeyFromKeyStore(keystore, password);
        const pubKey = crypto_1.Crypto.getPublicKeyFromPrivateKey(privKey, type);
        const address = crypto_1.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);
        const encryptedPrivKey = this.client.config.keyDAO.encrypt(privKey, password);
        // Save the key to app
        this.client.config.keyDAO.write(name, {
            address,
            privKey: encryptedPrivKey,
        });
        return address;
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
    importPrivateKey(name, password, privateKey, type = types.PubkeyType.secp256k1) {
        if (is.empty(name)) {
            throw new errors_1.SdkError(`Name of the key can not be empty`);
        }
        if (is.empty(password)) {
            throw new errors_1.SdkError(`Password of the key can not be empty`);
        }
        if (is.empty(privateKey)) {
            throw new errors_1.SdkError(`privateKey can not be empty`);
        }
        const exists = this.client.config.keyDAO.read(name);
        if (exists) {
            throw new errors_1.SdkError(`Key with name '${name}' already exists`);
        }
        const pubKey = crypto_1.Crypto.getPublicKeyFromPrivateKey(privateKey, type);
        const address = crypto_1.Crypto.getAddressFromPublicKey(pubKey, this.client.config.bech32Prefix.AccAddr);
        const encryptedPrivKey = this.client.config.keyDAO.encrypt(privateKey, password);
        // Save the key to app
        this.client.config.keyDAO.write(name, {
            address,
            privKey: encryptedPrivKey,
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
    export(name, keyPassword, keystorePassword) {
        if (is.empty(name)) {
            throw new errors_1.SdkError(`Name of the key can not be empty`);
        }
        if (is.empty(keyPassword)) {
            throw new errors_1.SdkError(`Password of the key can not be empty`);
        }
        if (!this.client.config.keyDAO.decrypt) {
            throw new errors_1.SdkError(`Decrypt method of KeyDAO not implemented`);
        }
        const keyObj = this.client.config.keyDAO.read(name);
        if (!keyObj) {
            throw new errors_1.SdkError(`Key with name '${name}' not found`);
        }
        const privKey = this.client.config.keyDAO.decrypt(keyObj.privKey, keyPassword);
        const keystore = crypto_1.Crypto.generateKeyStore(privKey, keystorePassword, this.client.config.bech32Prefix.AccAddr);
        return JSON.stringify(keystore);
    }
    /**
     * Delete a key
     *
     * @param name Name of the key
     * @param password Password of the key
     * @since v0.17
     */
    delete(name, password) {
        if (is.empty(name)) {
            throw new errors_1.SdkError(`Name of the key can not be empty`);
        }
        if (is.empty(password)) {
            throw new errors_1.SdkError(`Password of the key can not be empty`);
        }
        if (!this.client.config.keyDAO.decrypt) {
            throw new errors_1.SdkError(`Decrypt method of KeyDAO not implemented`);
        }
        const keyObj = this.client.config.keyDAO.read(name);
        if (!keyObj) {
            throw new errors_1.SdkError(`Key with name '${name}' not found`);
        }
        // Check keystore password
        this.client.config.keyDAO.decrypt(keyObj.privKey, password);
        // Delete the key from app
        this.client.config.keyDAO.delete(name);
    }
    /**
     * Gets address of a key
     *
     * @param name Name of the key
     * @returns Bech32 address
     * @since v0.17
     */
    show(name) {
        if (is.empty(name)) {
            throw new errors_1.SdkError(`Name of the key can not be empty`);
        }
        const keyObj = this.client.config.keyDAO.read(name);
        if (!keyObj) {
            throw new errors_1.SdkError(`Key with name '${name}' not found`);
        }
        return keyObj.address;
    }
}
exports.Keys = Keys;
//# sourceMappingURL=keys.js.map