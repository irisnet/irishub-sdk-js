import { BaseTest } from './basetest';
import * as types from '../src/types';

const timeout = 10000;

describe('Tendermint Tests', () => {
  test(
    'query latest block',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryBlock()
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
    'query block by height',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryBlock(196)
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
    'query latest block result',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryBlockResult()
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
    'query block result by height',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryBlockResult(196)
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
    'query tx by hash',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryTx(
          '46A832D1509A1BF5B0F3559E1CF931A6006144D2A487E0A36D3120E6205B1FF7'
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

  test(
    'query latest validators',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryValidators()
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
    'query validators by height',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryValidators(2)
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
    'search txs',
    async () => {
      const condition = new types.EventQueryBuilder().addCondition(
        new types.Condition(types.EventKey.Action).eq(types.EventAction.Send)
      );
      await BaseTest.getClient()
        .tendermint.searchTxs(condition)
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
    'query Net Info',
    async () => {
      await BaseTest.getClient()
        .tendermint.queryNetInfo()
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
