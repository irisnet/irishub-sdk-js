"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreKeys = void 0;
const utils_1 = require("./utils");
const crypto_1 = require("./crypto");
/**
 * @hidden
 */
let StoreKeys = /** @class */ (() => {
    class StoreKeys {
        /**
         * Turn an address to key used to get it from the account store
         * @param address Bech32 address
         * @returns Base64 encoded byte array
         */
        static getAccountStoreKey(address) {
            const bytes = crypto_1.Crypto.decodeAndConvert(address);
            return Uint8Array.from(StoreKeys.addressStoreKeyPrefix.concat(bytes));
        }
        static getSigningInfoKey(address) {
            const bytes = crypto_1.Crypto.decodeAndConvert(address);
            return Uint8Array.from(StoreKeys.validatorSigninginfoKey.concat(bytes));
        }
    }
    StoreKeys.addressStoreKeyPrefix = utils_1.Utils.str2ba('account:');
    StoreKeys.globalAccountNumberKey = utils_1.Utils.str2ba('globalAccountNumber');
    StoreKeys.totalLoosenTokenKey = utils_1.Utils.str2ba('totalLoosenToken');
    StoreKeys.totalSupplyKeyPrefix = utils_1.Utils.str2ba('totalSupply:');
    StoreKeys.validatorSigninginfoKey = [0x01];
    return StoreKeys;
})();
exports.StoreKeys = StoreKeys;
//# sourceMappingURL=store-keys.js.map