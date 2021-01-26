import {BaseTest} from './basetest';
import * as types from '../src/types';

describe('Distribution Tests', () => {
    let timeOut = 9999;
    describe('Query', () => {
        test(
            'query Params',
            async () => {
                await BaseTest.getClient().distribution
                    .queryParams()
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Validator Outstanding Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorOutstandingRewards('iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4')
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Validator Commission',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorCommission('iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4')
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Validator Slashes',
            async () => {
                await BaseTest.getClient().distribution
                    .queryValidatorSlashes(
                        'iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4',

                    )
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegation Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegationRewards(
                        'iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4',
                        'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp'
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegation Total Rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegationTotalRewards(
                        'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp'
                    )
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegator Validators',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegatorValidators(
                        'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp'
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Delegator Withdraw Address',
            async () => {
                await BaseTest.getClient().distribution
                    .queryDelegatorWithdrawAddress(
                        'iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp'
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        test(
            'query Community Pool',
            async () => {
                await BaseTest.getClient().distribution
                    .queryCommunityPool()
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
        
    });

    describe('withdraw Validator Commission', () => {
        test(
            'withdraw Validator Commission',
            async () => {
                await BaseTest.getClient().distribution
                    .withdrawValidatorCommission('iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4', BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
    });

    describe('fund Community Pool', () => {
        test(
            'fund Community Pool',
            async () => {
                const amount: types.Coin[] = [
                    {
                        denom: 'stake',
                        amount: '1',
                    },
                ];
                await BaseTest.getClient().distribution
                    .fundCommunityPool(amount, BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
    });

    describe('Set Withdraw Address', () => {
        test(
            'set withdraw address',
            async () => {
                await BaseTest.getClient().distribution
                    .setWithdrawAddr('iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp', BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            timeOut
        );
    });

    describe('Withdraw Rewards', () => {
        test(
            'withdraw delegation rewards from a specified validator',
            async () => {

                await BaseTest.getClient()
                    .distribution.withdrawRewards(
                        'iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4',
                        BaseTest.baseTx,
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            timeOut
        );
    });
});
