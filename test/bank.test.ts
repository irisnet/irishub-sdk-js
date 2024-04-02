import * as types from '../src/types';
import { BaseTest, Consts } from './basetest';

const timeout = 90000;

describe('Bank Tests', () => {
  describe('Send', () => {
    test(
      'send coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'unyan',
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
            console.log(res);
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
      'multiSend coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'udev',
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
      'query Balance',
      async () => {
        const client = BaseTest.getClient();
        await client
          .bank.queryBalance(client.keys.show(Consts.keyName) ,'udev')
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
        const client = await BaseTest.getClient();
        await client
          .bank.queryAllBalances(client.keys.show(Consts.keyName))
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
      'query All Balances by Height',
      async () => {
        const client = BaseTest.getClient();
        await client
          .bank.queryAllBalances(client.keys.show(Consts.keyName),'4968')
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
        const client = BaseTest.getClient();
        await client
          .bank.queryTotalSupply({
            page_number: 2,
            page_size: 8,
            count_total: false
          })
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
      'query Params',
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

    test(
      'query Denom Metadata',
      async () => {
        await BaseTest.getClient()
          .bank.queryDenomMetadata('happy')
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
      'query Denoms Metadata',
      async () => {
        await BaseTest.getClient()
          .bank.queryDenomsMetadata()
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
