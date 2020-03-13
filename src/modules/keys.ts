import { Client, KeyDAO } from '../client';
import { Crypto } from '../utils/crypto';
import { SdkError } from '../errors';
import * as is from 'is_js';
import * as types from '../types';

/**
 * This module allows you to manage your local tendermint keystore (wallets) for iris.
 *
 * **NOTE:** You need to implement the [[KeyDAO]] Interface first.
 *
 * @category Modules
 */
export class Keys {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
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
    if (!this.client.config.keyDAO.encrypt) {
      throw new SdkError(`Encrypt method of KeyDAO not implemented`);
    }
    const exists = this.client.config.keyDAO.read(name);
    if (exists) {
      throw new SdkError(`Key with name '${name}' already exists`);
    }
    const mnemonic = Crypto.generateMnemonic();
    const privKey = Crypto.getPrivateKeyFromMnemonic(mnemonic);
    const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);
    const address = Crypto.getAddressFromPublicKey(
      pubKey,
      this.client.config.bech32Prefix.AccAddr
    );

    const encryptedPrivKey = this.client.config.keyDAO.encrypt(
      privKey,
      password
    );

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
    if (!this.client.config.keyDAO.encrypt) {
      throw new SdkError(`Encrypt method of KeyDAO not implemented`);
    }
    const exists = this.client.config.keyDAO.read(name);
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
      this.client.config.bech32Prefix.AccAddr
    );

    const encryptedPrivKey = this.client.config.keyDAO.encrypt(
      privKey,
      password
    );

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
    if (!this.client.config.keyDAO.encrypt) {
      throw new SdkError(`Encrypt method of KeyDAO not implemented`);
    }
    const exists = this.client.config.keyDAO.read(name);
    if (exists) {
      throw new SdkError(`Key with name '${name}' already exists`);
    }

    const privKey = Crypto.getPrivateKeyFromKeyStore(keystore, password);
    const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);
    const address = Crypto.getAddressFromPublicKey(
      pubKey,
      this.client.config.bech32Prefix.AccAddr
    );

    const encryptedPrivKey = this.client.config.keyDAO.encrypt(
      privKey,
      password
    );

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
   */
  export(name: string, keyPassword: string, keystorePassword: string): string {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    if (is.empty(keyPassword)) {
      throw new SdkError(`Password of the key can not be empty`);
    }
    if (!this.client.config.keyDAO.decrypt) {
      throw new SdkError(`Decrypt method of KeyDAO not implemented`);
    }
    const keyObj = this.client.config.keyDAO.read(name);
    if (!keyObj) {
      throw new SdkError(`Key with name '${name}' not found`);
    }

    const privKey = this.client.config.keyDAO.decrypt(
      keyObj.privKey,
      keyPassword
    );

    const keystore = Crypto.generateKeyStore(
      privKey,
      keystorePassword,
      this.client.config.bech32Prefix.AccAddr
    );
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
    if (!this.client.config.keyDAO.decrypt) {
      throw new SdkError(`Decrypt method of KeyDAO not implemented`);
    }
    const keyObj = this.client.config.keyDAO.read(name);
    if (!keyObj) {
      throw new SdkError(`Key with name '${name}' not found`);
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
   */
  show(name: string) {
    if (is.empty(name)) {
      throw new SdkError(`Name of the key can not be empty`);
    }
    const keyObj = this.client.config.keyDAO.read(name);
    if (!keyObj) {
      throw new SdkError(`Key with name '${name}' not found`);
    }
    return keyObj.address;
  }

  // TODO: Ledger support
}
