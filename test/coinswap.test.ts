import { BaseTest } from './basetest';
describe('Coinswap Tests', () => {
  describe('Query Liquidity', () => {
    test('query liquidity', async () => {
      await BaseTest.getClient()
        .coinswap.queryLiquidity('uni:validatortoken')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Calculate', () => {
    test('calculateDeposit', async () => {
      await BaseTest.getClient()
        .coinswap.calculateDeposit(1, 'validatortoken')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('calculateWithdraw', async () => {
      await BaseTest.getClient()
        .coinswap.calculateWithdraw({
          denom: 'uni:validatortoken',
          amount: '1',
        })
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('calculateWithExactInput', async () => {
      await BaseTest.getClient()
        .coinswap.calculateWithExactInput(
          { denom: 'stake', amount: '1' },
          'validatortoken'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('calculateWithExactOutput', async () => {
      await BaseTest.getClient()
        .coinswap.calculateWithExactOutput(
          { denom: 'stake', amount: '1' },
          'validatortoken'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  // describe('Add Liquidity', () => {
  //   test('add liquidity', async () => {
  //     await BaseTest.getClient()
  //       .coinswap.addLiquidity(
  //         {
  //           exact_standard_amt: 1,
  //           max_token: { denom: 'validatortoken', amount: '1' },
  //           min_liquidity: 1,
  //           deadline: 10000000,
  //         },
  //         BaseTest.baseTx
  //       )
  //       .then(res => {
  //         console.log(JSON.stringify(res));
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   });
  // });
});
