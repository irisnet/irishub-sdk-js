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
describe('Tx Tests', () => {
    const unsignedTx = {
        type: 'irishub/bank/StdTx',
        value: {
            msg: [
                {
                    type: 'irishub/bank/Send',
                    value: {
                        inputs: [
                            {
                                address: 'faa1gwr3espfjtz9su9x40p635dgfvm4ph9v6ydky5',
                                coins: [{ denom: 'iris-atto', amount: '1000000000000000000' }],
                            },
                        ],
                        outputs: [
                            {
                                address: 'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
                                coins: [{ denom: 'iris-atto', amount: '1000000000000000000' }],
                            },
                        ],
                    },
                },
            ],
            fee: {
                amount: [{ denom: 'iris-atto', amount: '600000000000000000' }],
                gas: '100000',
            },
            signatures: [],
            memo: '',
        },
    };
    let signedTx;
    describe('Signing', () => {
        test('sign tx online', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .tx.sign(unsignedTx, basetest_1.BaseTest.baseTx.from, basetest_1.BaseTest.baseTx.password)
                .then(res => {
                console.log(JSON.stringify(res));
                signedTx = res;
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('sign tx offline', () => __awaiter(void 0, void 0, void 0, function* () {
            unsignedTx.value.signatures = [
                {
                    account_number: signedTx.value.signatures[0].account_number,
                    sequence: signedTx.value.signatures[0].sequence,
                },
            ];
            console.log(JSON.stringify(unsignedTx));
            yield basetest_1.BaseTest.getClient()
                .tx.sign(unsignedTx, basetest_1.BaseTest.baseTx.from, basetest_1.BaseTest.baseTx.password, true)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Broadcast', () => {
        test('broadcast tx', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .tx.broadcast(signedTx, types.BroadcastMode.Commit)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
});
//# sourceMappingURL=tx.test.js.map