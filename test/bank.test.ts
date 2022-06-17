import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 90000;

describe('Bank Tests', () => {
  describe('Send', () => {
    test(
      'send coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'uiris',
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
        await BaseTest.getClient()
          .bank.queryBalance('iaa174qyl02cupyqq77cqqtdl0frda6dl3rp2h9snu','udev')
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
      'query All Balances by Height',
      async () => {
        await BaseTest.getClient()
          .bank.queryAllBalances('iaa176dd0tgn38grpc8hpxfmwl6sl8jfmkneg8mkxr','4968')
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
