import { BaseTest } from './basetest';

const timeout = 10000;

describe('Nft Tests', () => {

  describe('query', () => {
    test(
      'query Accounts',
      async () => {
        await BaseTest.getClient()
        .auth.queryAccounts(1,100)
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
        .auth.queryAccount('iaa19a8gpvjlwd0ep5l6spagd7cv6s7wjl6w0ty8hx')
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
