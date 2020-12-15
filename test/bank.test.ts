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
            denom: 'stake',
            amount: '1',
          },
        ];

        await BaseTest.getClient()
          .bank.send(
            'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
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

  describe('multiSend', () => {
    test(
      'send coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'stake',
            amount: '1',
          },
        ];

        await BaseTest.getClient()
          .bank.multiSend(
            'iaa1gytgufwqkz9tmhjgljfxd3qcwpdzymj6022q3w',
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

  describe('Queries', () => {
    test(
      'query account',
      async () => {
        await BaseTest.getClient()
          .bank.queryAccount('iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw')
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
      'query Balance',
      async () => {
        await BaseTest.getClient()
          .bank.queryBalance('iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw','stake')
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
      'query All Balances',
      async () => {
        await BaseTest.getClient()
          .bank.queryAllBalances('iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw')
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
      'query Total Supply',
      async () => {
        await BaseTest.getClient()
          .bank.queryTotalSupply()
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
      'query Supply Of',
      async () => {
        await BaseTest.getClient()
          .bank.querySupplyOf('btc')
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
      'query All Balances',
      async () => {
        await BaseTest.getClient()
          .bank.queryParams()
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
