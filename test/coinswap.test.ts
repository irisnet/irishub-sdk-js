import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 10000;

describe('Coinswap Tests', () => {
  describe('Add Liquidity', () => {
    test(
      'add liquidity',
      async () => {
        await BaseTest.getClient()
          .coinswap.addLiquidity(
            {
              denom: 'kit',
              amount: '500',
            }, "1000", "1",
            1615642486,
            BaseTest.baseTx
          )
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('Remove Liquidity', () => {
    test(
      'remove liquidity',
      async () => {
        await BaseTest.getClient()
          .coinswap.removeLiquidity(
            {
              denom: 'swap/kit',
              amount: '10',
            }, "1", "1",
            1615642486,
            BaseTest.baseTx
          )
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('Swap Order', () => {
    test(
      'swap order',
      async () => {
        await BaseTest.getClient()
          .coinswap.swapOrder(
            {
              denom: 'kit',
              amount: '10',
            }, {
              denom: 'ubif',
              amount: '10',
            }, false,
            1615642486,
            BaseTest.baseTx
          )
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('Query', () => {
    test(
      'query Liquidity',
      async () => {
        await BaseTest.getClient()
          .coinswap.queryLiquidity('kit')
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
