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
describe('Coinswap Tests', () => {
    describe('Query Liquidity', () => {
        test('query liquidity', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .coinswap.queryLiquidity('uni:validatortoken')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Calculate', () => {
        test('calculateDeposit', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .coinswap.calculateDeposit(1, 'validatortoken')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('calculateWithdraw', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .coinswap.calculateWithdraw({
                denom: 'uni:validatortoken',
                amount: '1',
            })
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('calculateWithExactInput', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .coinswap.calculateWithExactInput({ denom: 'stake', amount: '1' }, 'validatortoken')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('calculateWithExactOutput', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .coinswap.calculateWithExactOutput({ denom: 'stake', amount: '1' }, 'validatortoken')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    // describe('Add Liquidity', () => {
    //   test('add liquidity', async () => {
    //     await BaseTest.getClient()
    //       .coinswap.addLiquidity(
    //         {
    //           exact_standard_amt: 1,
    //           max_token: { denom: 'validatortoken', amount: '1' },
    //           min_liquidity: 1,
    //           deadline: 10000000,
    //         },
    //         BaseTest.baseTx
    //       )
    //       .then(res => {
    //         console.log(JSON.stringify(res));
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   });
    // });
});
//# sourceMappingURL=coinswap.test.js.map