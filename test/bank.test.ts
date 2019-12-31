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

test('Bank', async () => {
  const name = 'name';
  const password = 'password';
  // Init SDK
  const sdk = iris.newSdk('http://localhost:26657', iris.Network.Testnet).withKeyDAO(new TestKeyDAO());

  const key = sdk.keys.recover(
    name,
    password,
    'balcony reopen dumb battle smile crisp snake truth expose bird thank peasant best opera faint scorpion debate skill ethics fossil dinner village news logic'
  );

  const amount: types.Coin[] = [
    { denom: 'iris-atto', amount: '10000000000000000000' },
  ];

  const baseTx: types.BaseTx = {
    from: name,
    password: password,
  };
//   await sdk.bank
//     .send('faa169x02pq8km0rvum8tgqseexaq7dk5mx57cpyc4', amount, baseTx)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(error => {
//       console.log(error);
//     });

  await sdk.bank.getAccount('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7').then(res => {
      console.log(res);
  }).catch(err => {
      console.log(err);
  });
});
