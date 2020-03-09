import { BaseTest } from './basetest';
describe('Slashing Tests', () => {
  // Not supported
  // describe('Query Params', () => {
  //   test(
  //     'query params',
  //     async () => {
  //       await client.slashing
  //         .queryParams()
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

  describe('Unjail', () => {
    test(
      'unjail',
      async () => {
        await BaseTest.getClient()
          .slashing.unjail(
            'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een',
            BaseTest.baseTx
          )
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  });
});
