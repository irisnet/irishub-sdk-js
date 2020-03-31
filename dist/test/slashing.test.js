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
describe('Slashing Tests', () => {
    // Not supported
    // describe('Query Params', () => {
    //   test(
    //     'query params',
    //     async () => {
    //       await client.slashing
    //         .queryParams()
    //         .then(res => {
    //           console.log(JSON.stringify(res));
    //         })
    //         .catch(error => {
    //           console.log(error);
    //         });
    //     },
    //     timeout
    //   );
    // });
    describe('Query Signing Info', () => {
        test('query signing info', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .slashing.querySigningInfo('fca1f46x0s36d5ajjqjurt3znhqfdulyf7zlazpj8n')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Unjail', () => {
        test('unjail', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .slashing.unjail(basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
});
//# sourceMappingURL=slashing.test.js.map