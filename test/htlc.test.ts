import {BaseTest} from "./basetest";
import * as types from '../src/types';

describe('test', () => {
    var originalTimeout;
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    test('example', async () => {
        const target = 'faa1gwr3espfjtz9su9x40p635dgfvm4ph9v6ydky5'
        let secret = undefined
        let sleep = function(ms: number) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
        let qaClient = BaseTest.getQaClient();
        let devClient = BaseTest.getDevClient();
        await devClient.bank.queryAccount(target).then(res => console.log({"address": res.address, "coins": res.coins})).catch(e => console.error(e))
        let devHtlc: types.CreateHTLCResult = await devClient.htlc.create(
            BaseTest.testTx,
            target,
            "qa",
            [{
                denom: 'iris-atto',
                amount: '3000000000000000000',
            }],
            '', '1000', '');
        console.info(devHtlc.secret)
        console.info(devHtlc.hashLock)
        await qaClient.bank.queryAccount(target).then(res => console.log({"address": res.address, "coins": res.coins})).catch(e => console.error(e))
        let qaHtlc: types.CreateHTLCResult = await qaClient.htlc.create(
            BaseTest.testTx,
            target,
            "dev",
            [{
                denom: 'iris-atto',
                amount: '7000000000000000000',
            }],
            '', '100', devHtlc.hashLock + '');
        setTimeout(()=>{
            qaClient.htlc.claim(BaseTest.testTx, devHtlc.hashLock + '', devHtlc.secret + '').then(res => console.info(res))
        }, 10000)
        while(!secret) {
            try {
                var queryHTLCResult = await qaClient.htlc.queryHTLC(devHtlc.hashLock+'');
                console.log(queryHTLCResult)
                secret = queryHTLCResult.secret
            } catch (e) {
                console.log('not found secret in qa htlc')
            }
            await sleep(3000)
        }
        devClient.htlc.claim(BaseTest.testTx, devHtlc.hashLock + '', secret).then(res => console.info(res))
        await sleep(5000)
        await devClient.bank.queryAccount(target).then(res => console.log({"address": res.address, "coins": res.coins})).catch(e => console.error(e))
        await qaClient.bank.queryAccount(target).then(res => console.log({"address": res.address, "coins": res.coins})).catch(e => console.error(e))
    })
})

describe('htlc', () => {
    test('query htlc', async () => {
            await BaseTest.getDevClient().htlc.queryHTLC('8ae0378a625cc8eda88ae35be2e3aae506298182d39fea3c0ce8f6e30cffdab4')
                .then(res => {
                    console.log(JSON.stringify(res));
                }).catch(error => {
                    console.log(error);
                });
        });
    test('create htlc', async () => {
            BaseTest.getQaClient().htlc.create(
                BaseTest.testTx,
                "faa14utpczlzcefq7rtf6h5cp6zxj7lxp5z2yvlmgl",
                "",
                [{
                        denom: 'iris-atto',
                        amount: '3000000000000000000',
                    }],
                '', '1000', '6e8765153ae2964d66a213a2c0c152153a480695d9c393eb34e79c8458897f01', ''
                ).then(res => {
                    console.log(JSON.stringify(res));
                }).catch(error => {
                    console.log(error);
                });
        });
    test('claim htlc', async () => {
            await BaseTest.getDevClient().htlc.claim(BaseTest.testTx, "8ae0378a625cc8eda88ae35be2e3aae506298182d39fea3c0ce8f6e30cffdab4", "17cfe0385ad68e820bcaa78f7b3883485153c715a63f349703cc6cf4736b0531")
                .then(res => {
                    console.log(JSON.stringify(res));
                }).catch(error => {
                    console.log(error);
                });
        });
    test('refund htlc', async () => {
            await BaseTest.getDevClient().htlc.refund(BaseTest.testTx, "4131689eaf58210992841a9aabe37980225def96ae8f85849b18a95ce7746769")
                .then(res => {
                    console.log(JSON.stringify(res));
                }).catch(error => {
                    console.log(error);
                });
        });
});