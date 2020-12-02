import {BaseTest} from './basetest';
import * as types from '../src/types';

describe('Distribution Tests', () => {
    describe('Query Rewards', () => {
        test(
            'query rewards',
            async () => {
                await BaseTest.getClient().distribution
                    .queryRewards('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7')
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
    });

    describe('Query Withdraw Address', () => {
        test(
            'query withdraw-addr',
            async () => {
                await BaseTest.getClient().distribution
                    .queryWithdrawAddr('iaa1gvq24a5vn7twjupf3l2t7pnd9l4fm7uwwm4ujp')
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
                    .setWithdrawAddr('iva1lny43v3y496wj6v05m4xpv8nv9c4ra9q57l4y4', BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );
    });

    describe('Withdraw Rewards', () => {
        test(
            'withdraw delegation rewards from a specified validator',
            async () => {

                await BaseTest.getClient()
                    .distribution.withdrawRewards(
                        'iva1svannhv2zaxefq83m7treg078udfk37lpjufkw',
                        BaseTest.baseTx,
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );

        /*test(
            'withdraw all delegation rewards',
            async () => {
                await BaseTest.getClient()
                    .distribution.withdrawRewards(BaseTest.baseTx)
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );*/

        /*test(
            'withdraw all rewards (delegation and validator commission)',
            async () => {
                await BaseTest.getClient()
                    .distribution.withdrawRewards(
                        BaseTest.baseTx,
                        'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een',
                        true
                    )
                    .then(res => {
                        console.log(JSON.stringify(res));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        );*/
    });
});
