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

describe('Distribution Tests', () => {
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

  describe('Query Rewards', () => {
    test(
      'query rewards',
      async () => {
        await client.distribution
          .queryRewards('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7')
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

  describe('Set Withdraw Address', () => {
    test(
      'set withdraw address',
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

        await client.distribution
          .setWithdrawAddr('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7', baseTx)
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

  describe('Withdraw Rewards', () => {
    test(
      'withdraw delegation rewards from a specified validator',
      async () => {
        const baseTx: types.BaseTx = {
          from: name,
          password,
          mode: types.BroadcastMode.Commit,
        };

        await client.distribution
          .withdrawRewards(
            baseTx,
            'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e'
          )
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
      'withdraw all delegation rewards',
      async () => {
        const baseTx: types.BaseTx = {
          from: name,
          password,
          mode: types.BroadcastMode.Commit,
        };

        await client.distribution
          .withdrawRewards(baseTx)
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
      'withdraw all rewards (delegation and validator commission)',
      async () => {
        const baseTx: types.BaseTx = {
          from: name,
          password,
          mode: types.BroadcastMode.Commit,
        };

        await client.distribution
          .withdrawRewards(
            baseTx,
            'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een',
            true
          )
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
