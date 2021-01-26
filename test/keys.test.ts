import { BaseTest, Consts } from './basetest';

test('Keys', () => {
  const password = Consts.keyPassword;
  const client = BaseTest.getClient();
  
  // Create a new key
  const addedKey = client.keys.add('name1', password);
  expect(addedKey.address.substring(0, 3)).toBe('iaa');
  expect(addedKey.mnemonic.split(' ').length).toBe(24);

  /*// Recover a key
  const recoveredKeyAddr = client.keys.recover(
    'name2',
    password,
    addedKey.mnemonic
  );
  expect(recoveredKeyAddr).toBe(addedKey.address);*/

  // Export keystore of a key
  const keystore = client.keys.export('name1', password, password);
  const keystoreObj = JSON.parse(keystore.toString());
  expect(keystoreObj.address).toBe(addedKey.address);

  // Import a keystore
  const importedKeyAddr = client.keys.import('name3', password, keystore);
  expect(importedKeyAddr).toBe(addedKey.address);

  // Show address of a key
  const showAddr = client.keys.show('name1');
  expect(showAddr).toBe(addedKey.address);

  // Delete a key
  client.keys.delete('name1', password);
  expect(() => {
    client.keys.show('name1');
  }).toThrow("Key with name 'name1' not found");
});

test('recover', () => {
    const client = BaseTest.getClient();
    const nmemonic = 'fatigue panther innocent dress person fluid animal raven material embark target spread kiss smile cycle begin rocket pull couple story mass analyst guilt network'
    const key = client.keys.recover('', 'test',nmemonic);
    console.log(key)
});

test('add', () => {
    const client = BaseTest.getClient();
    const key = client.keys.add('', 'test');
    console.log(key)
});


