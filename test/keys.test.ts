// import * as iris from '../src';

import { Crypto } from '../src/modules';

test('Crypto', () => {
  const mnemonic = Crypto.generateMnemonic();
  console.log('mnemonic: ' + mnemonic);
  const privKey = Crypto.getPrivateKeyFromMnemonic(mnemonic);
  console.log('private key: ' + privKey);
  const pubKey = Crypto.getPublicKeyFromPrivateKey(privKey);
  console.log('public key: ' + pubKey);
  const addr = Crypto.getAddressFromPublicKey(pubKey, 'iaa');
  console.log('address: ' + addr);
});
