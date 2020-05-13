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
exports.Coinswap = void 0;
const mathjs = require("mathjs");
const is = require("is_js");
const types_1 = require("../types");
const errors_1 = require("../errors");
/**
 * Implementation of the [Constant Product Market Maker Model](https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf) token exchange protocol on IRISHub.
 *
 * [More Details](https://www.irisnet.org/docs/features/coinswap.html)
 *
 * @category Modules
 */
class Coinswap {
    /** @hidden */
    constructor(client) {
        /** @hidden */
        this.formatUniABSPrefix = 'uni:';
        /** @hidden */
        this.mathConfig = {
            number: 'BigNumber',
            precision: 64,
        };
        this.client = client;
        this.math = mathjs.create(mathjs.all, this.mathConfig);
    }
    /**
     *
     * Query liquidity by id
     * @param id The liquidity id
     * @returns
     * @since v1.0
     */
    queryLiquidity(id) {
        return this.client.rpcClient.abciQuery('custom/coinswap/liquidity', {
            id,
        });
    }
    /**
     * Add liquidity by exact iris amount, calculated token and liquidity amount
     * @param request Add liquidity request
     * @param baseTx
     * @returns
     * @since v1.0
     */
    deposit(request, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            const msgs = [new types_1.MsgAddLiquidity(request, from)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Remove liquidity by exact liquidity amount, calculated iris and token amount
     * @param request Remove liquidity request
     * @param baseTx
     * @returns
     * @since v1.0
     */
    withdraw(request, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const from = this.client.keys.show(baseTx.from);
            const msgs = [new types_1.MsgRemoveLiquidity(request, from)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Swap coin by exact output, calculated input
     * @param request Buy order request
     * @param baseTx
     * @returns
     * @since v1.0
     */
    buy(request, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const msgs = [new types_1.MsgSwapOrder(request, true)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Swap coin by exact input, calculated output
     * @param request Sell order request
     * @param baseTx
     * @returns
     * @since v1.0
     */
    sell(request, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const msgs = [new types_1.MsgSwapOrder(request, true)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    getUniDenomFromDenoms(denom1, denom2) {
        if (denom1 === denom2) {
            throw new errors_1.SdkError('input and output denomination are equal');
        }
        if (denom1 !== types_1.STD_DENOM && denom2 !== types_1.STD_DENOM) {
            throw new errors_1.SdkError(`standard denom: '${types_1.STD_DENOM}', denom1: '${denom1}', denom2: '${denom2}'`);
        }
        if (denom1 === types_1.STD_DENOM) {
            return this.formatUniABSPrefix + denom2;
        }
        return this.formatUniABSPrefix + denom1;
    }
    /**
     * Calculate the amount of another token to be received based on the exact amount of tokens sold
     * @param exactSoldCoin sold coin
     * @param soldTokenDenom received token's denom
     * @returns output token amount to be received
     * @since v1.0
     */
    calculateWithExactInput(exactSoldCoin, boughtTokenDenom) {
        return __awaiter(this, void 0, void 0, function* () {
            if (exactSoldCoin.denom !== types_1.STD_DENOM && boughtTokenDenom !== types_1.STD_DENOM) {
                return this.calculateDoubleWithExactInput(exactSoldCoin, boughtTokenDenom);
            }
            const uniDenom = this.getUniDenomFromDenoms(exactSoldCoin.denom, boughtTokenDenom);
            const reservePool = yield this.queryLiquidity(uniDenom);
            let inputReserve;
            let outputReserve;
            if (reservePool.standard.denom === exactSoldCoin.denom) {
                inputReserve = Number(reservePool.standard.amount);
                outputReserve = Number(reservePool.token.amount);
            }
            else {
                inputReserve = Number(reservePool.token.amount);
                outputReserve = Number(reservePool.standard.amount);
            }
            if (is.not.positive(inputReserve)) {
                throw new errors_1.SdkError(`liquidity pool insufficient funds: ['${inputReserve}${exactSoldCoin.denom}']`);
            }
            if (is.not.positive(outputReserve)) {
                throw new errors_1.SdkError(`liquidity pool insufficient funds: ['${outputReserve}${boughtTokenDenom}']`);
            }
            const boughtAmt = this.getInputPrice(Number(exactSoldCoin.amount), inputReserve, outputReserve, Number(reservePool.fee));
            if (is.above(Number(boughtAmt), outputReserve)) {
                throw new errors_1.SdkError(`liquidity pool insufficient balance of '${boughtTokenDenom}', only bought: '${outputReserve}', got: '${inputReserve}'`);
            }
            return boughtAmt;
        });
    }
    /**
     * Calculate the amount of the token to be paid based on the exact amount of the token to be bought
     * @param exactBoughtCoin
     * @param soldTokenDenom
     * @return: input amount to be paid
     * @since v1.0
     */
    calculateWithExactOutput(exactBoughtCoin, soldTokenDenom) {
        return __awaiter(this, void 0, void 0, function* () {
            if (exactBoughtCoin.denom !== types_1.STD_DENOM && soldTokenDenom !== types_1.STD_DENOM) {
                return this.calculateDoubleWithExactOutput(exactBoughtCoin, soldTokenDenom);
            }
            const uniDenom = this.getUniDenomFromDenoms(exactBoughtCoin.denom, soldTokenDenom);
            const reservePool = yield this.queryLiquidity(uniDenom);
            let inputReserve;
            let outputReserve;
            if (reservePool.standard.denom === soldTokenDenom) {
                inputReserve = Number(reservePool.standard.amount);
                outputReserve = Number(reservePool.token.amount);
            }
            else {
                inputReserve = Number(reservePool.token.amount);
                outputReserve = Number(reservePool.standard.amount);
            }
            if (is.not.positive(inputReserve)) {
                throw new errors_1.SdkError(`liquidity pool insufficient funds, actual ['${inputReserve}${soldTokenDenom}']`);
            }
            if (is.not.positive(outputReserve)) {
                throw new errors_1.SdkError(`liquidity pool insufficient funds, actual ['${outputReserve}${exactBoughtCoin.denom}']`);
            }
            if (is.above(Number(exactBoughtCoin.amount), outputReserve)) {
                throw new errors_1.SdkError(`liquidity pool insufficient balance of '${exactBoughtCoin.denom}', user expected: '${exactBoughtCoin.amount}', got: '${outputReserve}'`);
            }
            const paidAmt = this.getOutputPrice(Number(exactBoughtCoin.amount), inputReserve, outputReserve, Number(reservePool.fee));
            if (is.infinite(paidAmt)) {
                throw new errors_1.SdkError(`infinite amount of '${soldTokenDenom}' is required`);
            }
            return paidAmt;
        });
    }
    /**
     * Calculate token amount and liquidity amount of the deposit request by exact standard token amount
     * @param exactStdAmt Exact standard token amount to be deposited
     * @param calculatedDenom The token denom being calculated
     * @returns The [[DepositRequest]], max_token = -1 means the liquidity pool is empty, users can deposit any amount of the token
     * @since v1.0
     */
    calculateDeposit(exactStdAmt, calculatedDenom) {
        return __awaiter(this, void 0, void 0, function* () {
            const reservePool = yield this.queryLiquidity(this.getUniDenomFromDenoms(types_1.STD_DENOM, calculatedDenom));
            // Initiate default deposit request, max_token = -1 means the liquidity pool is empty, users can deposit any amount of the token
            const depositRequest = {
                exact_standard_amt: exactStdAmt,
                max_token: { denom: calculatedDenom, amount: '-1' },
                min_liquidity: exactStdAmt,
                deadline: 10000,
            };
            if (is.positive(Number(reservePool.standard.amount)) &&
                is.positive(Number(reservePool.token.amount))) {
                // ∆t = ⌊(∆i/i) * t⌋ + 1
                const deltaTokenAmt = this.math.floor(this.math.multiply(this.math.divide(exactStdAmt, Number(reservePool.standard.amount)), Number(reservePool.token.amount))) + 1;
                depositRequest.max_token = {
                    denom: calculatedDenom,
                    amount: String(deltaTokenAmt),
                };
            }
            return depositRequest;
        });
    }
    /**
     * Calculate how many tokens can be withdrawn by exact liquidity amount
     * @param exactWithdrawLiquidity Exact liquidity amount to be withdrawn
     * @returns The [[WithdrawRequest]]
     * @since v1.0
     */
    calculateWithdraw(exactWithdrawLiquidity) {
        return __awaiter(this, void 0, void 0, function* () {
            const reservePool = yield this.queryLiquidity(exactWithdrawLiquidity.denom);
            // Initiate default withdraw request
            const withdrawRequest = {
                min_standard_amt: 0,
                min_token: 0,
                withdraw_liquidity: exactWithdrawLiquidity,
                deadline: 10000,
            };
            if (is.positive(Number(reservePool.standard.amount)) &&
                is.positive(Number(reservePool.token.amount))) {
                // ∆i = ⌊(∆l/l) * i⌋
                const deltaStdAmt = this.math.floor(this.math.multiply(this.math.divide(Number(exactWithdrawLiquidity.amount), Number(reservePool.liquidity.amount)), Number(reservePool.standard.amount)));
                withdrawRequest.min_standard_amt = deltaStdAmt;
                // ∆t = ⌊(∆l/l) * t⌋
                const deltaTokenAmt = this.math.floor(this.math.multiply(this.math.divide(Number(exactWithdrawLiquidity.amount), Number(reservePool.liquidity.amount)), Number(reservePool.token.amount)));
                withdrawRequest.min_token = deltaTokenAmt;
            }
            return withdrawRequest;
        });
    }
    calculateDoubleWithExactInput(exactSoldCoin, boughtTokenDenom) {
        return __awaiter(this, void 0, void 0, function* () {
            const boughtStandardAmount = yield this.calculateWithExactInput(exactSoldCoin, types_1.STD_DENOM);
            const boughtTokenAmt = yield this.calculateWithExactInput({ denom: types_1.STD_DENOM, amount: String(boughtStandardAmount) }, boughtTokenDenom);
            return boughtTokenAmt;
        });
    }
    calculateDoubleWithExactOutput(exactBoughtCoin, soldTokenDenom) {
        return __awaiter(this, void 0, void 0, function* () {
            const soldStandardAmount = yield this.calculateWithExactOutput(exactBoughtCoin, types_1.STD_DENOM);
            const soldTokenAmt = yield this.calculateWithExactOutput({ denom: types_1.STD_DENOM, amount: String(soldStandardAmount) }, soldTokenDenom);
            return soldTokenAmt;
        });
    }
    // getInputPrice returns the amount of coins bought (calculated) given the input amount being sold (exact)
    // The fee is included in the input coins being bought
    // https://github.com/runtimeverification/verified-smart-contracts/blob/uniswap/uniswap/x-y-k.pdf
    getInputPrice(inputAmt, inputReserve, outputReserve, fee) {
        const deltaFee = 1 - fee;
        const inputAmtWithFee = this.math.multiply(inputAmt, deltaFee);
        const numerator = this.math.multiply(inputAmtWithFee, outputReserve);
        const denominator = this.math.add(this.math.floor(inputReserve), inputAmtWithFee);
        return this.math.floor(Number(this.math.divide(numerator, denominator)));
    }
    // getOutputPrice returns the amount of coins sold (calculated) given the output amount being bought (exact)
    // The fee is included in the output coins being bought
    getOutputPrice(outputAmt, inputReserve, outputReserve, fee) {
        const deltaFee = 1 - fee;
        const numerator = this.math.multiply(inputReserve, outputAmt);
        const denominator = this.math.multiply(this.math.subtract(outputReserve, outputAmt), deltaFee);
        return this.math.floor(Number(this.math.divide(numerator, denominator))) + 1;
    }
}
exports.Coinswap = Coinswap;
//# sourceMappingURL=coinswap.js.map