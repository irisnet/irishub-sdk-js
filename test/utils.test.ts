import { BaseTest } from './basetest';

const timeout = 10000;

describe('Utils Tests', () => {
  test(
    'to min coin',
    async () => {
      await BaseTest.getClient()
        .utils.toMinCoin({
          denom: 'iris',
          amount: '1',
        })
        .then(coin => {
          console.log(JSON.stringify(coin));
        })
        .catch(err => {
          console.log(JSON.stringify(err));
        });
    },
    timeout
  );
  test(
    'to main coin',
    async () => {
      await BaseTest.getClient()
        .utils.toMainCoin({
          denom: 'iris-atto',
          amount: '1111111111111111111',
        })
        .then(coin => {
          console.log(JSON.stringify(coin));
        })
        .catch(err => {
          console.log(JSON.stringify(err));
        });
    },
    timeout
  );
});
