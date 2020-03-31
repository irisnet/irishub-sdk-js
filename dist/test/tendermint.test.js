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
const types = require("../src/types");
const timeout = 10000;
describe('Tendermint Tests', () => {
    test('query latest block', () => __awaiter(void 0, void 0, void 0, function* () {
        yield basetest_1.BaseTest.getClient()
            .tendermint.queryBlock()
            .then(res => {
            console.log(JSON.stringify(res));
        })
            .catch(error => {
            console.log(error);
        });
    }), timeout);
    test('query block by height', () => __awaiter(void 0, void 0, void 0, function* () {
        yield basetest_1.BaseTest.getClient()
            .tendermint.queryBlock(2)
            .then(res => {
            console.log(JSON.stringify(res));
        })
            .catch(error => {
            console.log(error);
        });
    }), timeout);
    test('query latest block result', () => __awaiter(void 0, void 0, void 0, function* () {
        yield basetest_1.BaseTest.getClient()
            .tendermint.queryBlockResult()
            .then(res => {
            console.log(JSON.stringify(res));
        })
            .catch(error => {
            console.log(error);
        });
    }), timeout);
    test('query block result by height', () => __awaiter(void 0, void 0, void 0, function* () {
        yield basetest_1.BaseTest.getClient()
            .tendermint.queryBlockResult(10996)
            .then(res => {
            console.log(JSON.stringify(res));
        })
            .catch(error => {
            console.log(error);
        });
    }), timeout);
    test('query tx by hash', () => __awaiter(void 0, void 0, void 0, function* () {
        yield basetest_1.BaseTest.getClient()
            .tendermint.queryTx('0D0B65520771CE6F74267230B30C14F64EE732751EDA79547FCA881841BA5E51')
            .then(res => {
            console.log(JSON.stringify(res));
        })
            .catch(error => {
            console.log(error);
        });
    }), timeout);
    test('query latest validators', () => __awaiter(void 0, void 0, void 0, function* () {
        yield basetest_1.BaseTest.getClient()
            .tendermint.queryValidators()
            .then(res => {
            console.log(JSON.stringify(res));
        })
            .catch(error => {
            console.log(error);
        });
    }), timeout);
    test('query validators by height', () => __awaiter(void 0, void 0, void 0, function* () {
        yield basetest_1.BaseTest.getClient()
            .tendermint.queryValidators(2)
            .then(res => {
            console.log(JSON.stringify(res));
        })
            .catch(error => {
            console.log(error);
        });
    }), timeout);
    test('search txs', () => __awaiter(void 0, void 0, void 0, function* () {
        const condition = new types.EventQueryBuilder().addCondition(new types.Condition(types.EventKey.Action).eq(types.EventAction.Send));
        yield basetest_1.BaseTest.getClient()
            .tendermint.searchTxs(condition)
            .then(res => {
            console.log(JSON.stringify(res));
        })
            .catch(error => {
            console.log(error);
        });
    }), timeout);
});
//# sourceMappingURL=tendermint.test.js.map