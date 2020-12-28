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
exports.Utils = void 0;
const mathjs = require("mathjs");
/**
 * Utils for the IRISHub SDK
 * @category Modules
 * @since v0.17
 */
class Utils {
    /** @hidden */
    constructor(client) {
        /** @hidden */
        this.mathConfig = {
            number: 'BigNumber',
            precision: 64,
        };
        this.client = client;
        this.tokenMap = new Map();
        this.math = mathjs.create(mathjs.all, this.mathConfig);
    }
    /**
     * Convert the coin object to min unit
     *
     * @param coin Coin object to be converted
     * @returns
     * @since v0.17
     */
    toMinCoin(coin) {
        return __awaiter(this, void 0, void 0, function* () {
            const amt = this.math.bignumber(coin.amount);
            const token = this.tokenMap.get(coin.denom);
            if (token) {
                if (coin.denom === token.min_unit)
                    return coin;
                return {
                    denom: token.min_unit,
                    amount: this.math.multiply(amt, this.math.pow(10, token.scale)).toString(),
                };
            }
            // If token not found in local memory, then query from the blockchain
            return this.client.token.queryToken(coin.denom).then(token => {
                if (token) {
                    this.tokenMap.set(coin.denom, token);
                }
                return this.toMinCoin(coin);
            });
        });
    }
    /**
     * Convert the coin array to min unit
     * @param coins Coin array to be converted
     * @returns
     * @since v0.17
     */
    toMinCoins(coins) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = new Array();
            coins.forEach(amt => {
                const promise = this.toMinCoin(amt);
                promises.push(promise);
            });
            return Promise.all(promises).then(coins => {
                return coins;
            });
        });
    }
    /**
     * Convert the coin object to main unit
     *
     * @returns
     * @since v0.17
     */
    toMainCoin(coin) {
        return __awaiter(this, void 0, void 0, function* () {
            const amt = this.math.bignumber(coin.amount);
            const token = this.tokenMap.get(coin.denom);
            if (token) {
                if (coin.denom === token.symbol)
                    return coin;
                return {
                    denom: token.symbol,
                    amount: this.math.divide(amt, this.math.pow(10, token.scale)).toString(),
                };
            }
            // If token not found in local memory, then query from the blockchain
            return this.client.token.queryToken(coin.denom).then(token => {
                if (token) {
                    this.tokenMap.set(coin.denom, token);
                }
                return this.toMainCoin(coin);
            });
        });
    }
    /**
     * Convert the coin array to main unit
     * @param coins Coin array to be converted
     * @returns
     * @since v0.17
     */
    toMainCoins(coins) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = new Array();
            coins.forEach(amt => {
                const promise = this.toMainCoin(amt);
                promises.push(promise);
            });
            return Promise.all(promises).then(coins => {
                return coins;
            });
        });
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map