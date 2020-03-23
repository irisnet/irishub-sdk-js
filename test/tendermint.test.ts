import { BaseTest } from './basetest';

const timeout = 10000;

describe('Tendermint Tests', () => {
  test(
    'query latest block',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryBlock()
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
    'query block by height',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryBlock(2)
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
    'query latest block result',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryBlockResult()
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
    'query block result by height',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryBlockResult(10996)
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
