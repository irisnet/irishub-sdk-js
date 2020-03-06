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

describe('Slashing Tests', () => {
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

  const baseTx: types.BaseTx = {
    from: name,
    password,
    mode: types.BroadcastMode.Commit,
  };

  const unsignedTx: types.Tx<types.StdTx> = {
    type: 'irishub/bank/StdTx',
    value: {
      msg: [
        {
          type: 'irishub/bank/Send',
          value: {
            inputs: [
              {
                address: 'faa1gwr3espfjtz9su9x40p635dgfvm4ph9v6ydky5',
                coins: [{ denom: 'iris-atto', amount: '1000000000000000000' }],
              },
            ],
            outputs: [
              {
                address: 'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
                coins: [{ denom: 'iris-atto', amount: '1000000000000000000' }],
              },
            ],
          },
        },
      ],
      fee: {
        amount: [{ denom: 'iris-atto', amount: '600000000000000000' }],
        gas: '100000',
      },
      signatures: [],
      memo: '',
    },
  };


  let signedTx: types.Tx<types.StdTx>;

  describe('Signing', () => {
    test(
      'sign tx online',
      async () => {
        await client.tx
          .sign(unsignedTx, baseTx.from, baseTx.password)
          .then(res => {
            console.log(JSON.stringify(res));
            signedTx = res;
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'sign tx offline',
      async () => {
        unsignedTx.value.signatures = [
          {
            account_number: signedTx.value.signatures[0].account_number,
            sequence: signedTx.value.signatures[0].sequence,
          },
        ];
        console.log(JSON.stringify(unsignedTx));
        await client.tx
          .sign(unsignedTx, baseTx.from, baseTx.password, true)
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

  describe('Broadcast', () => {
    test(
      'broadcast tx',
      async () => {
        await client.tx
          .broadcast(signedTx, types.BroadcastMode.Commit)
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
