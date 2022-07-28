import { BaseTest } from './basetest';

const timeout = 99999;

describe('Nft Tests', () => {

  describe('query', () => {
    test(
      'query Accounts',
      async () => {
        await BaseTest.getClient()
        .auth.queryAccounts({
          page_number: 1,
          page_size: 2,
          reverse:true,
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
      'query Account',
      async () => {
        await BaseTest.getClient()
        .auth.queryAccount('iaa1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3qef7mx')
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
