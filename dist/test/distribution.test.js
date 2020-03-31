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
describe('Distribution Tests', () => {
    describe('Query Rewards', () => {
        test('query rewards', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().distribution
                .queryRewards('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Set Withdraw Address', () => {
        test('set withdraw address', () => __awaiter(void 0, void 0, void 0, function* () {
            const amount = [
                {
                    denom: 'iris-atto',
                    amount: '1000000000000000000',
                },
            ];
            yield basetest_1.BaseTest.getClient().distribution
                .setWithdrawAddr('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7', basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Withdraw Rewards', () => {
        test('withdraw delegation rewards from a specified validator', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .distribution.withdrawRewards(basetest_1.BaseTest.baseTx, 'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('withdraw all delegation rewards', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .distribution.withdrawRewards(basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('withdraw all rewards (delegation and validator commission)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .distribution.withdrawRewards(basetest_1.BaseTest.baseTx, 'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een', true)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
});
//# sourceMappingURL=distribution.test.js.map