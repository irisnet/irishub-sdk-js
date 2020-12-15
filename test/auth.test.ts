import { BaseTest } from './basetest';

const timeout = 10000;

describe('Nft Tests', () => {

  describe('query', () => {
    test(
      'query Account',
      async () => {
        await BaseTest.getClient()
        .auth.queryAccount('iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp')
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
        .auth.queryParams()
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
