import { BaseTest } from './basetest';

describe('Staking Tests', () => {
  describe('Query', () => {
    test('query delegation', async () => {
      await BaseTest.getClient()
        .staking.queryDelegation(
          'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
          'iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4'
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
    
    test('query unbonding delegation', async () => {
      await BaseTest.getClient()
        .staking.queryUnbondingDelegation(
          'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
          'iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4'
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query delegations of a delegator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegations({
          delegator_addr:'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw'
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query unbonding delegations of a delegator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegatorUnbondingDelegations(
          {
            delegator_addr:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query redelegation', async () => {//TODO(lsc) there is only one node in current blockchain net, redelegate tx can not work properly
      await BaseTest.getClient()
        .staking.queryRedelegation(
          {
            delegator_addr:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
            /*src_validator_addr:'iva1svannhv2zaxefq83m7treg078udfk37lpjufkw',
            dst_validator_addr:'iva1g5uv7khupczd6w03a7t066mwjdx9zkma82rnk0',*/
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query all validators info for given delegator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegatorValidators(
          {
            delegator_addr:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('queries validator info for given delegator validator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegatorValidator(
          {
            delegator_addr:'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp',
            validator_addr:'iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4',
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('queries the historical info for given height', async () => {//TODO(lsc) what can this api do?
      await BaseTest.getClient()
        .staking.queryHistoricalInfo(
          {
            height:1000,
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query pool', async () => {
      await BaseTest.getClient()
        .staking.queryPool()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query params', async () => {
      await BaseTest.getClient()
        .staking.queryParams()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query delegations to a validator', async () => {
      await BaseTest.getClient()
        .staking.queryValidatorDelegations(
          {
            validator_addr:'iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4'
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query undelegating delegations from a validator', async () => {
      await BaseTest.getClient()
        .staking.queryValidatorUnbondingDelegations(
          {
            validator_addr:'iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4'
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query a validator', async () => {
      await BaseTest.getClient()
        .staking.queryValidator('iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4')
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query all validators', async () => {
      await BaseTest.getClient()
        .staking.queryValidators({
          pagination:{
            page_number: 2,
            page_size: 8
          },
          //status:'Bonded',
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query tokenize share record by id', async () => {
      await BaseTest.getClient()
        .staking.queryTokenizeShareRecordById(2)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query tokenize share record by denom', async () => {
      await BaseTest.getClient()
        .staking.queryTokenizeShareRecordByDenom('udev')
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query tokenize share recored owned', async () => {
      await BaseTest.getClient()
        .staking.queryTokenizeShareRecordsOwned('iva1geqzj2jjeqgurpu8u9x4asq5m6rw5lm7nn22c2')
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query all tokenize share records', async () => {
      await BaseTest.getClient()
        .staking.queryAllTokenizeShareRecords(
          {
            page_number: 2,
            page_size: 5,
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query last tokenize share recordId', async () => {
      await BaseTest.getClient()
        .staking.queryLastTokenizeShareRecordId()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query total tokenize shared assets', async () => {
      await BaseTest.getClient()
        .staking.queryTotalTokenizeSharedAssets()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query total liquid staked', async () => {
      await BaseTest.getClient()
        .staking.queryTotalLiquidStaked()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query tokenize share lock info', async () => {
      await BaseTest.getClient()
        .staking.queryTokenizeShareLockInfo(
          'iva1geqzj2jjeqgurpu8u9x4asq5m6rw5lm7nn22c2'
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });

  describe('Delegate', () => {
    test('delegate', async () => {
      await BaseTest.getClient()
        .staking.delegate(
          'iva1geqzj2jjeqgurpu8u9x4asq5m6rw5lm7nn22c2',
          { denom: 'udev', amount: '5' },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Unbond', () => {
    test('unbond', async () => {
      await BaseTest.getClient()
        .staking.undelegate(
          'iva1g5uv7khupczd6w03a7t066mwjdx9zkma82rnk0',
              { denom: 'udev', amount: '1' },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Redelegate', () => {
    test('redelegate', async () => {
      await BaseTest.getClient()
        .staking.redelegate(
          'iva1geqzj2jjeqgurpu8u9x4asq5m6rw5lm7nn22c2',
          'iva1736ypcrmwvurylfprfgmjwr625c6ycdv8uyjlp',
              { denom: 'udev', amount: '1' },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('TokenizeShares', () => {
    test('tokenizeShares', async () => {
      await BaseTest.getClient()
        .staking.tokenizeShares(
          'iva1svannhv2zaxefq83m7treg078udfk37lpjufkw',
          { denom: 'unyan', amount: '100' },
          'iaa1sf69k6n6m7rq0a49cp8u07gagy8jahx7h5pztk',
          BaseTest.baseTx
        )
        .then(res => {
          console.log(res);
          return res;
        })
        .catch(error => {
          console.log(error);
        });

      await BaseTest.getClient()
        .staking.redeemTokensForShares(
          { denom: 'iva1svannhv2zaxefq83m7treg078udfk37lpjufkw/5', amount: '1000' },
          BaseTest.baseTx,
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });

      await BaseTest.getClient()
        .staking.transferTokenizeShareRecord(
          1,
          'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw',
          BaseTest.baseTx,
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('DisableTokenizeShares', () => {
    test('disableTokenizeShares', async () => {
      await BaseTest.getClient()
        .staking.disableTokenizeShares(
          BaseTest.baseTx
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('EnableTokenizeShares', () => {
    test('enableTokenizeShares', async () => {
      await BaseTest.getClient()
        .staking.enableTokenizeShares(
          BaseTest.baseTx
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('ValidatorBond', () => {
    test('validatorBond', async () => {
      await BaseTest.getClient()
        .staking.validatorBond(
          'iva1svannhv2zaxefq83m7treg078udfk37lpjufkw',
          BaseTest.baseTx,
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('UnbondValidator', () => {
    test('unbondValidator', async () => {
      await BaseTest.getClient()
        .staking.unbondValidator(
          BaseTest.baseTx,
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          
        })
    })
  })
});
