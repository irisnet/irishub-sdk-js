import {BaseTest} from './basetest';
const timeout = 10000;

describe('farm Tests', () => {
    describe('stake lp', () => {
        test(
            'stake lp',
            async () => {
                await BaseTest.getClient()
                    .farm.stakeLp(
                        'farm-15',
                        {
                            denom: 'lpt-1',
                            amount: '1'
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
                        'farm-15',
                        {
                            denom: 'lpt-1',
                            amount: '1'
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
                        'farm-15',
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
    describe('Query', () => {
        test(
            'query Farm Pools',
            async () => {
                await BaseTest.getClient()
                    .farm.queryFarmPools({
                        page_number: 1,
                        page_size: 5
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
            'query Farm Pool',
            async () => {
                await BaseTest.getClient()
                    .farm.queryFarmPool('farm-1')
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
            'query Farmer',
            async () => {
                await BaseTest.getClient()
                    .farm.queryFarmer('iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw', 'farm-62')
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
                    .farm.queryParams()
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
