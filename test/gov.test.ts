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

describe('Gov Tests', () => {
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
    .withRpcConfig({ timeout: timeout });

  // Add a key
  const key = client.keys.recover(
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
    test('query proposal', async () => {
      await client.gov
        .queryProposal(164)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query proposals', async () => {
      await client.gov
        .queryProposals({
          limit: 1,
        })
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query vote', async () => {
      await client.gov
        .queryVote(1, 'faa1rug6dlx3rugu50ha0a35at6fwv2sss9l9amknx')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query votes', async () => {
      await client.gov
        .queryVotes(2)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query deposit', async () => {
      await client.gov
        .queryDeposit(260, 'faa1rug6dlx3rugu50ha0a35at6fwv2sss9l9amknx')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query deposits', async () => {
      await client.gov
        .queryDeposits(260)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query tally', async () => {
      await client.gov
        .queryTally(260)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });

  const initDeposit: types.Coin[] = [
    {
      denom: 'iris-atto',
      amount: '1000000000000000000000',
    },
  ];
  describe('Submit ParameterChange Proposal', () => {
    test(
      'submitParameterChangeProposal',
      async () => {
        const params: types.ChangeParameter[] = [
          {
            subspace: 'slashing',
            key: 'MaxEvidenceAge',
            value: '51840',
          },
        ];
        await client.gov
          .submitParameterChangeProposal(
            'Title',
            'Desc',
            initDeposit,
            params,
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

  describe('Submit PlainText Proposal', () => {
    test(
      'submitPlainTextProposal',
      async () => {
        await client.gov
          .submitPlainTextProposal('Title', 'Desc', initDeposit, baseTx)
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

  describe('Submit CommunityTaxUsag Proposal', () => {
    test(
      'submitCommunityTaxUsageProposal',
      async () => {
        await client.gov
          .submitCommunityTaxUsageProposal(
            'Title',
            'Desc',
            initDeposit,
            types.CommunityTaxUsageType.Distribute,
            'faa1rug6dlx3rugu50ha0a35at6fwv2sss9l9amknx',
            0.5,
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
