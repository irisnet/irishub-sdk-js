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
          symbol:'coin',
          name:'name',
          scale:4,
          min_unit:'eth',
          initial_supply:1000000,
          max_supply:10000000,
          mintable:true,
          owner:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp'
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
          symbol:'coin',
          name:'coin_edits',
          mintable:'false',
          max_supply:1000000000,
          owner:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp'
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
          symbol:'testlscc',
          amount:15,
          to:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
          owner:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp'
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
          symbol:'testlsc',
          src_owner:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
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
