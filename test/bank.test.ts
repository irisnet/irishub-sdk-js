import * as iris from '../src';
import * as types from '../src/types';

class TestKeyDAO implements iris.KeyDAO {
  storeType: types.StoreType = types.StoreType.Keystore;

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

test('Bank', async () => {
  const name = 'name';
  const password = 'password';

  // Init SDK
  const sdk = iris
    .newSdk({node: 'http://localhost:26657', network: iris.Network.Testnet, chainId: 'test'})
    .withKeyDAO(new TestKeyDAO())
    .withRpcConfig({ timeout: 10000 });

  // Add a key
  const key = sdk.keys.recover(
    name,
    password,
    'balcony reopen dumb battle smile crisp snake truth expose bird thank peasant best opera faint scorpion debate skill ethics fossil dinner village news logic'
  );

  // Send coins
  const amount: types.Coin[] = [
    { denom: 'iris-atto', amount: '1000000000000000000' },
  ];

  const baseTx: types.BaseTx = {
    from: name,
    password: password,
    mode: types.BroadcastMode.Commit,
  };

  await sdk.bank
    .send('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7', amount, baseTx)
    .then(res => {
      console.log(JSON.stringify(res));
    })
    .catch(error => {
      console.log(error);
    });
});
