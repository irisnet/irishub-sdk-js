import { BaseTest } from './basetest';
describe('Coinswap Tests', () => {
  describe('Query Liquidity', () => {
    test('query liquidity', async () => {
      await BaseTest.getClient()
        .coinswap.queryLiquidity('uni:transfer/ztezqumzyz/ubtc')
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
        .coinswap.calculateDeposit(1, 'transfer/irishubchan/uatom')
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
          denom: 'uni:transfer/irishubchan/uatom',
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
          { denom: 'transfer/irishubchan/uatom', amount: '10' },
          'transfer/ztezqumzyz/ubtc'
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
          { denom: 'transfer/iriscosmoschan/uatom', amount: '100' },
          'uiris'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Add Liquidity', () => {
    test('add liquidity', async () => {
      const btc = await BaseTest.getClient()
        .coinswap.calculateWithExactInput({denom: 'uiris', amount: '10000'}, 'transfer/ztezqumzyz/ubtc');
        console.log(btc)
      await BaseTest.getClient()
        .coinswap.deposit(
          {
            exact_standard_amt: 10000,
            max_token: { denom: 'transfer/ztezqumzyz/ubtc', amount: String(btc) },
            min_liquidity: 10000,
            deadline: 10000000,
          },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
});
