import { BaseTest } from './basetest';

const timeout = 10000;

describe('Asset Tests', () => {
  test(
    'query token',
    async () => {
      try {
        console.log(await BaseTest.getClient().asset.queryToken('iris'));
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
        .asset.queryTokens()
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
        .asset.queryFees('testcoin')
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
        .asset.issueToken({
          symbol:'testlsc',
          name:'lsc',
          scale:6,
          min_unit:'btc',
          initial_supply:100000,
          max_supply:1000000,
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
        .asset.editToken({
          symbol:'testlsc',
          name:'lvsc',
          mintable:'true',
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
        .asset.mintToken({
          symbol:'testlsc',
          amount:15,
          to:'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw',
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
        .asset.transferTokenOwner({
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
