import { Sdk } from '../sdk';
import { Crypto } from '../utils/crypto';
import SdkError from '../errors';
import * as is from 'is_js';
import * as types from '../types';

export class Keys {
  sdk: Sdk;
  constructor(sdk: Sdk) {
    this.sdk = sdk;
  }

  /**
   * Create a new key
   *
   * @param name Name of the key
   * @param password Password for encrypting the keystore
   * @returns Bech32 address and mnemonic
   */
  add(name: string, password: string): { address: string; mnemonic: string } {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    if (is.empty(password)) {
      throw new SdkError(`Password of the key can not be empty`);
    }
    const exists = this.sdk.config.keyDAO.read(name);
    if (exists) {
      throw new SdkError(`Key with name '${name}' already exists`);
    }
    const mnemonic = Crypto.generateMnemonic();
    const privKey = Crypto.getPrivateKeyFromMnemonic(mnemonic);
    const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);
    const address = Crypto.getAddressFromPublicKey(
      pubKey,
      this.sdk.config.bech32Prefix
    );

    let keyObj: types.Keystore | types.Key;
    if (this.sdk.config.keyStoreType === types.StoreType.Key) {
      keyObj = {
        address: address,
        password: password,
        privKey: privKey,
      };
    } else {
      keyObj = Crypto.generateKeyStore(
        privKey,
        password,
        this.sdk.config.bech32Prefix,
        2
      );
    }

    // Save the key to app
    this.sdk.config.keyDAO.write(name, keyObj);

    return { address, mnemonic };
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
   */
  recover(
    name: string,
    password: string,
    mnemonic: string,
    derive = true,
    index = 0,
    saltPassword = ''
  ): string {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    if (is.empty(password)) {
      throw new SdkError(`Password of the key can not be empty`);
    }
    if (is.empty(mnemonic)) {
      throw new SdkError(`Mnemonic of the key can not be empty`);
    }
    const exists = this.sdk.config.keyDAO.read(name);
    if (exists) {
      throw new SdkError(`Key with name '${name}' exists`);
    }

    const privKey = Crypto.getPrivateKeyFromMnemonic(
      mnemonic,
      derive,
      index,
      saltPassword
    );
    const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);
    const address = Crypto.getAddressFromPublicKey(
      pubKey,
      this.sdk.config.bech32Prefix
    );

    let keyObj: types.Keystore | types.Key;
    if (this.sdk.config.keyStoreType === types.StoreType.Key) {
      keyObj = {
        address: address,
        password: password,
        privKey: privKey,
      };
    } else {
      keyObj = Crypto.generateKeyStore(
        privKey,
        password,
        this.sdk.config.bech32Prefix,
        2
      );
    }

    // Save the key to app
    this.sdk.config.keyDAO.write(name, keyObj);

    return address;
  }

  /**
   * Import a key from keystore
   *
   * @param name Name of the key
   * @param password Password of the keystore
   * @param keystore Keystore json or object
   * @returns Bech32 address
   */
  import(
    name: string,
    password: string,
    keystore: string | types.Keystore
  ): string {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    if (is.empty(password)) {
      throw new SdkError(`Password of the key can not be empty`);
    }
    if (is.empty(keystore)) {
      throw new SdkError(`Keystore can not be empty`);
    }
    const exists = this.sdk.config.keyDAO.read(name);
    if (exists) {
      throw new SdkError(`Key with name '${name}' exists`);
    }

    const privKey = Crypto.getPrivateKeyFromKeyStore(keystore, password);
    const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);
    const address = Crypto.getAddressFromPublicKey(
      pubKey,
      this.sdk.config.bech32Prefix
    );

    let keyObj: types.Keystore | types.Key;
    if (this.sdk.config.keyStoreType === types.StoreType.Key) {
      keyObj = {
        address: address,
        password: password,
        privKey: privKey,
      };
    } else {
      keyObj = Crypto.generateKeyStore(
        privKey,
        password,
        this.sdk.config.bech32Prefix,
        2
      );
    }

    // Save the key to app
    this.sdk.config.keyDAO.write(name, keyObj);

    return keyObj.address;
  }

  /**
   * Export keystore of a key
   *
   * @param name Name of the key
   * @param keyPassword Password of the key
   * @param keystorePassword Password for encrypting the keystore
   * @returns Keystore json
   */
  export(name: string, keyPassword: string, keystorePassword: string): string {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    if (is.empty(keyPassword)) {
      throw new SdkError(`Password of the key can not be empty`);
    }
    const keyObj = this.sdk.config.keyDAO.read(name);
    if (!keyObj) {
      throw new SdkError(`Key with name '${name}' not found`);
    }

    let keystore: types.Keystore;
    if (this.sdk.config.keyStoreType === types.StoreType.Key) {
      const key: types.Key = <types.Key>keyObj;
      keystore = Crypto.generateKeyStore(
        key.privKey,
        keystorePassword,
        this.sdk.config.bech32Prefix
      );
    } else {
      const privKey = Crypto.getPrivateKeyFromKeyStore(keyObj, keyPassword);
      keystore = Crypto.generateKeyStore(
        privKey,
        keystorePassword,
        this.sdk.config.bech32Prefix
      );
    }

    return JSON.stringify(keystore);
  }

  /**
   * Delete a key
   *
   * @param name Name of the key
   * @param password Password of the key
   */
  delete(name: string, password: string) {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    if (is.empty(password)) {
      throw new SdkError(`Password of the key can not be empty`);
    }
    const keyObj = this.sdk.config.keyDAO.read(name);
    if (!keyObj) {
      throw new SdkError(`Key with name '${name}' not found`);
    }

    if (this.sdk.config.keyStoreType === types.StoreType.Keystore) {
      // Check keystore password
      Crypto.getPrivateKeyFromKeyStore(keyObj, password);
    }

    // Delete the key from app
    this.sdk.config.keyDAO.delete(name);
  }

  /**
   * Gets address of a key
   *
   * @param name Name of the key
   * @returns Bech32 address
   */
  show(name: string) {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    const keystore = this.sdk.config.keyDAO.read(name);
    if (!keystore) {
      throw new SdkError(`Key with name '${name}' not found`);
    }
    const keystoreObj = is.object(keystore)
      ? keystore
      : JSON.parse(keystore.toString());
    return keystoreObj.address;
  }

  // TODO: Ledger support
}
