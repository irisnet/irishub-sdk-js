import {BaseTest} from './basetest';
const timeout = 10000;

describe('farm Tests', () => {
    describe('stake lp', () => {
        test(
            'stake lp',
            async () => {
                await BaseTest.getClient()
                    .farm.stakeLp(
                        'farm-1',
                        {
                            denom: 'lpt-1',
                            amount: '100'
                        },
                        BaseTest.baseTx
                    )
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            timeout
        );
    });
    describe('unstake lp', () => {
        test(
            'unstake lp',
            async () => {
                await BaseTest.getClient()
                    .farm.unStakeLp(
                        'farm-1',
                        {
                            denom: 'lpt-1',
                            amount: '10'
                        },
                        BaseTest.baseTx
                    )
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            timeout
        );
    });
    describe('harvest reward', () => {
        test(
            'harvest reward',
            async () => {
                await BaseTest.getClient()
                    .farm.harvestReward(
                        'farm-1',
                        BaseTest.baseTx
                    )
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            timeout
        );
    });
});
