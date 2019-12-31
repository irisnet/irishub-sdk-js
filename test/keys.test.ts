import * as iris from '../src';
import * as types from '../src/types';

class TestKeyDAO implements iris.KeyDAO {
  keyMap: { [key: string]: types.Keystore } = {};
  write(name: string, keystore: types.Keystore) {
    this.keyMap[name] = keystore;
  }
  read(name: string): types.Keystore {
    return this.keyMap[name];
  }
  delete(name: string) {
    delete this.keyMap[name];
  }
}

test('Keys', () => {
  const password = 'password';
  // Init SDK
  const sdk = iris.newSdk('localhost:26657', iris.Network.Testnet).withKeyDAO(new TestKeyDAO());

  // Create a new key
  const addedKey = sdk.keys.add('name1', password);
  expect(addedKey.address.substring(0, 3)).toBe('faa');
  expect(addedKey.mnemonic.split(' ').length).toBe(24);

  // Recover a key
  const recoveredKeyAddr = sdk.keys.recover(
    'name2',
    password,
    addedKey.mnemonic
  );
  expect(recoveredKeyAddr).toBe(addedKey.address);

  // Export keystore of a key
  const keystore = sdk.keys.export('name1', password);
  const keystoreObj = JSON.parse(keystore.toString());
console.log(keystore.toString());
  expect(keystoreObj.address).toBe(addedKey.address);

  // Import a keystore
  const importedKeyAddr = sdk.keys.import('name3', password, keystore);
  expect(importedKeyAddr).toBe(addedKey.address);

  // Show address of a key
  const showAddr = sdk.keys.show('name1');
  expect(showAddr).toBe(addedKey.address);

  // Delete a key
  sdk.keys.delete('name1', password);
  expect(() => {
    sdk.keys.show('name1');
  }).toThrow("Key with name 'name1' not found");
});
