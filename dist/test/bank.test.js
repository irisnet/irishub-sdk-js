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
const timeout = 10000;
describe('Bank Tests', () => {
    describe('Send', () => {
        test('send coins', () => __awaiter(void 0, void 0, void 0, function* () {
            const amount = [
                {
                    denom: 'iris-atto',
                    amount: '1000000000000000000',
                },
            ];
            yield basetest_1.BaseTest.getClient()
                .bank.send('faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7', amount, basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }), timeout);
    });
    describe('Burn', () => {
        test('burn coins', () => __awaiter(void 0, void 0, void 0, function* () {
            const amount = [
                {
                    denom: 'iris-atto',
                    amount: '1000000000000000000',
                },
            ];
            yield basetest_1.BaseTest.getClient()
                .bank.burn(amount, basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }), timeout);
    });
    describe('Set Memo Regexp', () => {
        test('set memo regexp', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .bank.setMemoRegexp('test*', basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }), timeout);
    });
    describe('Query Token Stats', () => {
        test('query single token stats', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .bank.queryTokenStats('iris')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }), timeout);
        test('query all token stats', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .bank.queryTokenStats()
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }), timeout);
    });
});
//# sourceMappingURL=bank.test.js.map