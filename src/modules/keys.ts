import { Sdk } from '../sdk';
import { Crypto } from './crypto';

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
      throw new Error('Key with name "${name}" exists');
    }
    const mnemonic = Crypto.generateMnemonic();
    console.log('mnemonic: ' + mnemonic);
    const privKey = Crypto.getPrivateKeyFromMnemonic(mnemonic);
    console.log('private key: ' + privKey);
    const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);
    console.log('public key: ' + pubKey);
    const address = Crypto.getAddressFromPublicKey(pubKey, this.sdk.config.bech32Prefix);
    console.log('address: ' + address);
    const keystore = Crypto.generateKeyStore(privKey, password);

    // Save the keystore to app
    this.sdk.config.keyDAO.write(name, keystore);

    return { address, mnemonic };
  }
}
