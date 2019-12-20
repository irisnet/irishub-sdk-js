import * as iris from '../src';

test('Crypto', () => {
  const sdk = iris.newSdk('localhost:26657');
  const keys = sdk.keys.add('name', '123456');
  console.log(keys.address);
  console.log(keys.mnemonic);
});
