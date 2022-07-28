import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 10000;

describe('Coinswap Tests', () => {
  describe('Add Liquidity', () => {
    test(
      'add liquidity',
      async () => {
          let deadlineTime = (new Date().getTime()/1000 + 10000).toString()

        await BaseTest.getClient()
          .coinswap.addLiquidity(
            {
              denom: 'ubusd',
              amount: '100000000',
            }, "1000", "1",
            parseInt(deadlineTime),
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
              denom: 'lpt-1',
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
              denom: 'uiris',
              amount: '10000000',
            }, {
              denom: 'ubusd',
              amount: '100',
            }, false,
                1646636997,
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
          .coinswap.queryLiquidity('lpt-1')
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
