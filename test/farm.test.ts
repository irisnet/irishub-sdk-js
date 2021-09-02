import * as types from '../src/types';
import {BaseTest} from './basetest';
import {Farm} from "../src/modules/farm";

const timeout = 10000;

describe('farm Tests', () => {
    describe('stake lp', () => {
        test(
            'stake lp',
            async () => {
                await BaseTest.getClient()
                    .farm.stakeLp(
                        'apple',
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
            'stake lp',
            async () => {
                await BaseTest.getClient()
                    .farm.unStakeLp(
                        'apple',
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
    describe('harvest reward', () => {
        test(
            'harvest reward',
            async () => {
                await BaseTest.getClient()
                    .farm.harvestReward(
                        'apple',
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
