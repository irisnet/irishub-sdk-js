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
            denom: 'ubif',
            amount: '10000000',
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

  // describe('Burn', () => {
  //   test(
  //     'burn coins',
  //     async () => {
  //       const amount: types.Coin[] = [
  //         {
  //           denom: 'iris-atto',
  //           amount: '1000000000000000000',
  //         },
  //       ];

  //       await BaseTest.getClient()
  //         .bank.burn(amount, BaseTest.baseTx)
  //         .then(res => {
  //           console.log(JSON.stringify(res));
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     },
  //     timeout
  //   );
  // });

  // describe('Set Memo Regexp', () => {
  //   test(
  //     'set memo regexp',
  //     async () => {
  //       await BaseTest.getClient()
  //         .bank.setMemoRegexp('test*', BaseTest.baseTx)
  //         .then(res => {
  //           console.log(JSON.stringify(res));
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     },
  //     timeout
  //   );
  // });

  describe('Queries', () => {
    test(
      'query total supply',
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
      'query account',
      async () => {
        await BaseTest.getClient()
          .bank.queryAccount('iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp')
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    // test(
    //   'query single token stats',
    //   async () => {
    //     await BaseTest.getClient()
    //       .bank.queryTokenStats('uiris')
    //       .then(res => {
    //         console.log(JSON.stringify(res));
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   },
    //   timeout
    // );

    // test(
    //   'query all token stats',
    //   async () => {
    //     await BaseTest.getClient()
    //       .bank.queryTokenStats()
    //       .then(res => {
    //         console.log(JSON.stringify(res));
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   },
    //   timeout
    // );
  });
});
