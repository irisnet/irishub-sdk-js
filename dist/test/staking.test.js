"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const basetest_1 = require("./basetest");
describe('Staking Tests', () => {
    describe('Query', () => {
        test('query delegation', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryDelegation('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7', 'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query delegations of a delegator', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryDelegations('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query unbonding delegation', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryUnbondingDelegation('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7', 'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query unbonding delegations of a delegator', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryUnbondingDelegations('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query redelegation', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryRedelegation('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7', 'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e', 'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query redelegations of a delegator', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryRedelegations('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query delegations to a validator', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryDelegationsTo('fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query unbonding delegations from a validator', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryUnbondingDelegationsFrom('fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query redelegations from a validator', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryRedelegationsFrom('fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query a validator', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryValidator('fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query all validators', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryValidators(1)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query pool', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryPool()
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query params', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.queryParams()
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Delegate', () => {
        test('delegate', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.delegate('fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e', { denom: 'iris-atto', amount: '5000000000000000000' }, basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Unbond', () => {
        test('unbond', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.undelegate('fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e', '100000000000000000', basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Redelegate', () => {
        test('redelegate', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .staking.redelegate('fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e', 'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e', '10000000000000000', basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
});
//# sourceMappingURL=staking.test.js.map