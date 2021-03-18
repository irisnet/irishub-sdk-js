import { BaseTest, Consts } from './basetest';

test('Keys', () => {
  const password = Consts.keyPassword;
  const client = BaseTest.getClient();
  
  // Create a new key
  const addedKey = client.keys.add('name1', password);
  expect(addedKey.address.substring(0, 3)).toBe('iaa');
  let mnemonic = client.config.keyDAO.decrypt!(addedKey.mnemonic!,password);
  expect(mnemonic.split(' ').length).toBe(24);

  // Export keystore of a key
  const keystore = client.keys.export('name1', password, password);
  const keystoreObj = JSON.parse(keystore.toString());
  expect(keystoreObj.address).toBe(addedKey.address);

  // Import a keystore
  const importedKey = client.keys.import('name3', password, keystore);
  expect(importedKey.address).toBe(addedKey.address);

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
    const key = client.keys.recover('1', 'test',nmemonic);
    console.log(key)
});

test('add', () => {
    const client = BaseTest.getClient();
    const key = client.keys.add('1', 'test');
    console.log(key)
});


