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

  describe('Query Signing Info', () => {
    test('query signing info', async () => {
      await BaseTest.getClient()
        .slashing.querySigningInfo('ica12x4wemz4qtwr5rql4awp0r6rx0pxws35t4wkdp')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Unjail', () => {
    test('unjail', async () => {
      await BaseTest.getClient()
        .slashing.unjail(
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
