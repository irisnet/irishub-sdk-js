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
describe('Gov Tests', () => {
    describe('Query', () => {
        test('query proposal', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().gov
                .queryProposal(164)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query proposals', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().gov
                .queryProposals({
                limit: 1,
            })
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query vote', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().gov
                .queryVote(1, 'faa1rug6dlx3rugu50ha0a35at6fwv2sss9l9amknx')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query votes', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().gov
                .queryVotes(2)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query deposit', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().gov
                .queryDeposit(260, 'faa1rug6dlx3rugu50ha0a35at6fwv2sss9l9amknx')
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query deposits', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().gov
                .queryDeposits(260)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
        test('query tally', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().gov
                .queryTally(260)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    const initDeposit = [
        {
            denom: 'iris-atto',
            amount: '1000000000000000000000',
        },
    ];
    describe('Submit ParameterChange Proposal', () => {
        test('submitParameterChangeProposal', () => __awaiter(void 0, void 0, void 0, function* () {
            const params = [
                {
                    subspace: 'slashing',
                    key: 'MaxEvidenceAge',
                    value: '51840',
                },
            ];
            yield basetest_1.BaseTest.getClient()
                .gov.submitParameterChangeProposal('Title', 'Desc', initDeposit, params, basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Submit PlainText Proposal', () => {
        test('submitPlainTextProposal', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().gov
                .submitPlainTextProposal('Title', 'Desc', initDeposit, basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Submit CommunityTaxUsag Proposal', () => {
        test('submitCommunityTaxUsageProposal', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .gov.submitCommunityTaxUsageProposal('Title', 'Desc', initDeposit, types.CommunityTaxUsageType.Distribute, 'faa1rug6dlx3rugu50ha0a35at6fwv2sss9l9amknx', 0.5, basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Deposit', () => {
        test('deposit', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient()
                .gov.deposit(1, [
                {
                    denom: 'iris-atto',
                    amount: '1000000000000000000000',
                },
            ], basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
    describe('Vote', () => {
        test('vote', () => __awaiter(void 0, void 0, void 0, function* () {
            yield basetest_1.BaseTest.getClient().gov
                .vote(1, types.VoteOption.Yes, basetest_1.BaseTest.baseTx)
                .then(res => {
                console.log(JSON.stringify(res));
            })
                .catch(error => {
                console.log(error);
            });
        }));
    });
});
//# sourceMappingURL=gov.test.js.map