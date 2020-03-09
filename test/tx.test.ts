import { BaseTest } from './basetest';
import * as types from '../src/types';

describe('Tx Tests', () => {
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
    test('sign tx online', async () => {
      await BaseTest.getClient()
        .tx.sign(unsignedTx, BaseTest.baseTx.from, BaseTest.baseTx.password)
        .then(res => {
          console.log(JSON.stringify(res));
          signedTx = res;
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('sign tx offline', async () => {
      unsignedTx.value.signatures = [
        {
          account_number: signedTx.value.signatures[0].account_number,
          sequence: signedTx.value.signatures[0].sequence,
        },
      ];
      console.log(JSON.stringify(unsignedTx));
      await BaseTest.getClient()
        .tx.sign(
          unsignedTx,
          BaseTest.baseTx.from,
          BaseTest.baseTx.password,
          true
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });

  describe('Broadcast', () => {
    test('broadcast tx', async () => {
      await BaseTest.getClient()
        .tx.broadcast(signedTx, types.BroadcastMode.Commit)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
});
