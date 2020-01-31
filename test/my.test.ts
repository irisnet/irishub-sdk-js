import * as iris from '../src';
import * as types from '../src/types';
import {MsgSubmitParameterChangeProposal} from '../src/types/gov';

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

describe('Tests', () => {
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

  // test('test', async () => {
  //   const s = {
  //     type: 'irishub/bank/StdTx',
  //     value: {
  //       msg: [
  //         {
  //           getSignBytes: (): object => {return {};},
  //           type: 'irishub/gov/MsgSubmitProposal',
  //           value: {
  //             proposal_type: 'Parameter',
  //             title: 'Title',
  //             description: 'Desc',
  //             proposer: 'faa1gwr3espfjtz9su9x40p635dgfvm4ph9v6ydky5',
  //             initial_deposit: [
  //               { denom: 'iris-atto', amount: '1000000000000000000000' },
  //             ],
  //             params: [
  //               { subspace: 'slashing', key: 'MaxEvidenceAge', value: '51840' },
  //             ],
  //           },
  //         },
  //       ],
  //       fee: {
  //         amount: [{ denom: 'iris-atto', amount: '600000000000000000' }],
  //         gas: '100000',
  //       },
  //       signatures: [
  //         {
  //           pub_key: {
  //             type: 'tendermint/PubKeySecp256k1',
  //             value: 'A7WWEEPjNr8w7dAyZwZ0dChuNdzFiBCLMA3TWv7aNSPr',
  //           },
  //           account_number: '3',
  //           sequence: '37',
  //           signature:
  //             '/58+jBNL14zpXwvCT4lKmaHU6RSNDeJLZzjIvWA8tPMf0gkQ1ddcyxITnYp9OXL/XVUWo+mdxvNzAyTfrQqexg==',
  //         },
  //       ],
  //       memo: '',
  //     },
  //   };
  //   await client.tx.broadcast(s, types.BroadcastMode.Commit).then(res => {
  //     console.log(JSON.stringify(res));
  //   }).catch(err => {
  //     console.log(JSON.stringify(err))
  //   })
  // });

  test('test', () => {
    const t = new MsgSubmitParameterChangeProposal({
      proposal_type: 'Parameter',
      title: 'title',
      description: 'description',
      proposer: 'proposer',
      initial_deposit: [{ denom: 'iris-atto', amount: '10' }],
      params: [{ subspace: '', key: '', value: '' }],
    });

    console.log(JSON.stringify(t));

    console.log(JSON.parse(JSON.stringify(t)));
  });
});
