import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 10000;

describe('Bank Tests', () => {
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

        await BaseTest.getClient()
          .bank.send(
            'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
            amount,
            BaseTest.baseTx
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

        await BaseTest.getClient()
          .bank.burn(amount, BaseTest.baseTx)
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
        await BaseTest.getClient()
          .bank.setMemoRegexp('test*', BaseTest.baseTx)
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

  describe('Queries', () => {
    test(
      'query account',
      async () => {
        await BaseTest.getClient()
          .bank.queryAccount('cosmos1pqyy93jfdj9p5y8lfwqyk4y3kyksethnejx7l3')
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
      'query single token stats',
      async () => {
        await BaseTest.getClient()
          .bank.queryTokenStats('iris')
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
        await BaseTest.getClient()
          .bank.queryTokenStats()
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
