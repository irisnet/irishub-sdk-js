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

const timeout = 10000;

describe('Bank Tests', () => {
  const name = 'name';
  const password = 'password';

  // Init Client
  const client = iris
    .newClient({
      node: 'http://localhost:26657',
      network: iris.Network.Testnet,
      chainId: 'test',
    })
    .withKeyDAO(new TestKeyDAO())
    .withRpcConfig({ timeout });

  // Add a key
  const key = client.keys.recover(
    name,
    password,
    'balcony reopen dumb battle smile crisp snake truth expose bird thank peasant best opera faint scorpion debate skill ethics fossil dinner village news logic'
  );

  describe('Send', () => {
    test(
      'send coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'iris-atto',
            amount: '1000000000000000000',
          },
        ];

        const baseTx: types.BaseTx = {
          from: name,
          password,
          mode: types.BroadcastMode.Commit,
        };

        await client.bank
          .send('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7', amount, baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('Burn', () => {
    test(
      'burn coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'iris-atto',
            amount: '1000000000000000000',
          },
        ];

        const baseTx: types.BaseTx = {
          from: name,
          password,
          mode: types.BroadcastMode.Commit,
        };

        await client.bank
          .burn(amount, baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('Set Memo Regexp', () => {
    test(
      'set memo regexp',
      async () => {
        const baseTx: types.BaseTx = {
          from: name,
          password,
          mode: types.BroadcastMode.Commit,
        };

        await client.bank
          .setMemoRegexp('test*', baseTx)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('Query Token Stats', () => {
    test(
      'query single token stats',
      async () => {
        await client.bank
          .queryTokenStats('iris')
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'query all token stats',
      async () => {
        await client.bank
          .queryTokenStats()
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });
});
