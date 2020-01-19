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

describe('Staking Tests', () => {
  const name = 'name';
  const password = 'password';

  // Init SDK
  const sdk = iris
    .newSdk({
      node: 'http://localhost:26657',
      network: iris.Network.Testnet,
      chainId: 'test',
    })
    .withKeyDAO(new TestKeyDAO())
    .withRpcConfig({ timeout: timeout });

  // Add a key
  const key = sdk.keys.recover(
    name,
    password,
    'balcony reopen dumb battle smile crisp snake truth expose bird thank peasant best opera faint scorpion debate skill ethics fossil dinner village news logic'
  );

  const baseTx: types.BaseTx = {
    from: name,
    password: password,
    mode: types.BroadcastMode.Commit,
  };

  describe('Query', () => {
    test('query delegation', async () => {
      await sdk.stake
        .queryDelegation(
          'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
          'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query delegations of a delegator', async () => {
      await sdk.stake
        .queryDelegations('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query unbonding delegation', async () => {
      await sdk.stake
        .queryUnbondingDelegation(
          'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
          'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query unbonding delegations of a delegator', async () => {
      await sdk.stake
        .queryUnbondingDelegations('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query redelegation', async () => {
      await sdk.stake
        .queryRedelegation(
          'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
          'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e',
          'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query redelegations of a delegator', async () => {
      await sdk.stake
        .queryRedelegations('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query delegations to a validator', async () => {
      await sdk.stake
        .queryDelegationsTo('fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query unbonding delegations from a validator', async () => {
      await sdk.stake
        .queryUnbondingDelegationsFrom(
          'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query redelegations from a validator', async () => {
      await sdk.stake
        .queryRedelegationsFrom('fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query a validator', async () => {
      await sdk.stake
        .queryValidator('fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query all validators', async () => {
      await sdk.stake
        .queryValidators(1)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query pool', async () => {
      await sdk.stake
        .queryPool()
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query params', async () => {
      await sdk.stake
        .queryParams()
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });

  describe('Delegate', () => {
    test(
      'delegate',
      async () => {
        await sdk.stake
          .delegate(
            'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e',
            { denom: 'iris-atto', amount: '5000000000000000000' },
            baseTx
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
  describe('Unbond', () => {
    test(
      'unbond',
      async () => {
        await sdk.stake
          .unbond(
            'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e',
            '100000000000000000',
            baseTx
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
  describe('Redelegate', () => {
    test(
      'redelegate',
      async () => {
        await sdk.stake
          .redelegate(
            'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e',
            'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e',
            '10000000000000000',
            baseTx
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
