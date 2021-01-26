import {BaseTest} from './basetest';

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
    'issue token',
    async () => {
      await BaseTest.getClient()
        .token.issueToken({
          symbol: 'BTC',
          name: 'test',
          scale: 6,
          min_unit: 'btc',
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
          symbol: 'coinzz',
          amount: 99,
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
});
