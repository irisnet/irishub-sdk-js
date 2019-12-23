import { Sdk } from '../sdk';
import { Crypto } from './crypto';
import * as is from 'is_js';

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
    const exists = this.sdk.config.keyDAO.read(name);
    if (exists) {
      throw new Error(`Key with name '${name}' exists`);
    }
    const mnemonic = Crypto.generateMnemonic();
    const privKey = Crypto.getPrivateKeyFromMnemonic(mnemonic);
    const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);
    const address = Crypto.getAddressFromPublicKey(
      pubKey,
      this.sdk.config.bech32Prefix
    );
    const keystore = Crypto.generateKeyStore(
      privKey,
      password,
      this.sdk.config.bech32Prefix
    );

    // Save the keystore to app
    this.sdk.config.keyDAO.write(name, keystore);

    return { address, mnemonic };
  }

  /**
   * Recover a key
   *
   * @param name Name of the key
   * @param password Password for encrypting the keystore
   * @param mnemonic Mnemonic of the key
   * @returns Bech32 address
   */
  recover(name: string, password: string, mnemonic: string): string {
    const exists = this.sdk.config.keyDAO.read(name);
    if (exists) {
      throw new Error(`Key with name '${name}' exists`);
    }

    const privKey = Crypto.getPrivateKeyFromMnemonic(mnemonic);
    const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);
    const address = Crypto.getAddressFromPublicKey(
      pubKey,
      this.sdk.config.bech32Prefix
    );
    const keystore = Crypto.generateKeyStore(
      privKey,
      password,
      this.sdk.config.bech32Prefix
    );

    // Save the keystore to app
    this.sdk.config.keyDAO.write(name, keystore);

    return address;
  }

  /**
   * Import a key from keystore
   *
   * @param name Name of the key
   * @param password Password of the keystore
   * @param  keystore Keystore json or object
   * @returns Bech32 address
   */
  import(name: string, password: string, keystore: string | object): string {
    const exists = this.sdk.config.keyDAO.read(name);
    if (exists) {
      throw new Error(`Key with name '${name}' exists`);
    }

    // Check keystore password
    Crypto.getPrivateKeyFromKeyStore(keystore, password);

    // Save the keystore to app
    const keystoreObj = is.object(keystore)
      ? keystore
      : JSON.parse(keystore.toString());
    this.sdk.config.keyDAO.write(name, keystoreObj);

    return keystoreObj.address;
  }

  /**
   * Export keystore of a key
   *
   * @param name Name of the key
   * @param password Password of the keystore
   * @returns Keystore json
   */
  export(name: string, password: string): string {
    const keystore = this.sdk.config.keyDAO.read(name);
    if (!keystore) {
      throw new Error(`Key with name '${name}' not found`);
    }

    // Check keystore password
    Crypto.getPrivateKeyFromKeyStore(keystore, password);

    return JSON.stringify(keystore);
  }

  /**
   * Delete a key
   *
   * @param name Name of the key
   * @param password Password of the key
   */
  delete(name: string, password: string) {
    const keystore = this.sdk.config.keyDAO.read(name);
    if (!keystore) {
      throw new Error(`Key with name '${name}' not found`);
    }

    // Check keystore password
    Crypto.getPrivateKeyFromKeyStore(keystore, password);

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
    const keystore = this.sdk.config.keyDAO.read(name);
    if (!keystore) {
      throw new Error(`Key with name '${name}' not found`);
    }
    const keystoreObj = is.object(keystore)
      ? keystore
      : JSON.parse(keystore.toString());
    return keystoreObj.address;
  }
}
