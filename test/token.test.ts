import { BaseTest } from './basetest';

const timeout = 10000;

describe('Token Tests', () => {
  test(
    'query tokens',
    async () => {
      await BaseTest.getClient().token.queryTokens('iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw').then((res) => {
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    },
    timeout
  );
  test(
    'query token',
    async () => {
      await BaseTest.getClient()
        .token.queryToken('coin')
        .then(res => {
          console.log(res);
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
        .token.queryFees('coin')
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    timeout
  );
  test(
    'query parameters',
    async () => {
      await BaseTest.getClient()
        .token.queryParameters()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    timeout
  );
  test(
    'query total burn',
    async () => {
      await BaseTest.getClient()
        .token.queryTotalBurn()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    timeout,
  )
  test(
    'query balances',
    async () => {
      await BaseTest.getClient()
        .token.queryBalances(
          'unyan',
          'iaa1kmfftqp7k49n4jec87sf5t7pz9mysde07ms9qm',
        ).then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  )
  test(
    'issue token',
    async () => {
      await BaseTest.getClient()
        .token.issueToken({
          symbol: 'kittt',
          name: 'test',
          scale: 6,
          min_unit: 'kit',
          initial_supply: 1000000,
          max_supply: 10000000,
          mintable: true,
        }, BaseTest.baseTx)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    timeout
  );
  test(
    'edit token',
    async () => {
      await BaseTest.getClient()
        .token.editToken({
          symbol: 'coinzz',
          name: 'abc',
          mintable: 'true',
          max_supply: 10000000,
        }, BaseTest.baseTx)
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
    'mint token',
    async () => {
      await BaseTest.getClient()
        .token.mintToken({
          coin: {
            denom: 'coinzz',
            amount: '99',
          },
          to: 'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
        }, BaseTest.baseTx)
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
    'burn token',
    async () => {
      await BaseTest.getClient()
        .token.burnToken({
          amount: '1',
          denom: 'uiris'
        }, BaseTest.baseTx)
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
    'swap fee token token',
    async () => {
      await BaseTest.getClient()
        .token.swapFeeToken(
          {
            fee_paid: {
              amount: '2',
              denom: 'uiris'
            }
          },
          BaseTest.baseTx)
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
    'transfer token owner',
    async () => {
      await BaseTest.getClient()
        .token.transferTokenOwner({
          symbol: 'coin',
          dst_owner: 'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw'
        }, BaseTest.baseTx)
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
    'swap to ERC20',
    async () => {
      await BaseTest.getClient()
        .token.SwapToERC20({
          amount: { denom: 'unyan', amount: '500' },
          receiver: '0x6d451e38e01060a097c7d0abcaa9a1a55210f01a',
        }, BaseTest.baseTx)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    }
  )
  test(
    'swap from ERC20',
    async () => {
      await BaseTest.getClient()
        .token.SwapFromERC20({
          wanted_amount: { denom: 'unyan', amount: '300' },
          receiver: '0x6D451e38e01060A097c7D0ABCAa9A1a55210f01A',
        }, BaseTest.baseTx)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    }
  )
});
