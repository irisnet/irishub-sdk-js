import { BaseTest } from './basetest';

const timeout = 10000;

describe('Token Tests', () => {
  test(
    'query token',
    async () => {
      try {
        console.log(await BaseTest.getClient().token.queryToken('iris'));
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    },
    timeout
  );
  test(
    'query tokens',
    async () => {
      await BaseTest.getClient()
        .token.queryTokens()
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
    'query fees',
    async () => {
      await BaseTest.getClient()
        .token.queryFees('testcoin')
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
    'issue token',
    async () => {
      await BaseTest.getClient()
        .token.issueToken({
          symbol:'coinzz',
          name:'names',
          scale:4,
          min_unit:'eths',
          initial_supply:1000000,
          max_supply:10000000,
          mintable:true,
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
    'edit token',
    async () => {
      await BaseTest.getClient()
        .token.editToken({
          symbol:'coinzz',
          name:'abc',
          mintable:'true',
          max_supply:10000000,
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
          symbol:'coinzz',
          amount:99,
          to:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
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
          symbol:'coin',
          dst_owner:'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw'
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
