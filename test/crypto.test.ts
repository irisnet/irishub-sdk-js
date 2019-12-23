import { Crypto } from '../src/modules';

test('Crypto', () => {
  // Generates mnemonic
  const mnemonic = Crypto.generateMnemonic();
  expect(mnemonic.split(' ').length).toBe(24);

  // Gets a private key from mnemonic words.
  const privKey = Crypto.getPrivateKeyFromMnemonic(mnemonic);

  // Calculates the public key from a given private key.
  const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);

  // Gets an address from a public key hex.
  const address = Crypto.getAddressFromPublicKey(pubKey, 'iaa');
  expect(address.substring(0, 3)).toBe('iaa');

  // Generate keystore
  const keystore = Crypto.generateKeyStore(privKey, 'password', 'iaa');
  expect(JSON.parse(JSON.stringify(keystore)).address).toBe(address);

  // Get private key from keystore
  const privKey1 = Crypto.getPrivateKeyFromKeyStore(keystore, 'password');
  expect(privKey1).toBe(privKey);

  // TODO
});
