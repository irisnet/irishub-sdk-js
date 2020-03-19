import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 10000;

describe('Asset Tests', () => {
  test(
    'query token',
    async () => {
      await BaseTest.getClient()
        .asset.queryToken('iris')
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
    'query tokens',
    async () => {
      await BaseTest.getClient()
        .asset.queryTokens()
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
    'query fees',
    async () => {
      await BaseTest.getClient()
        .asset.queryFees('testcoin')
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
