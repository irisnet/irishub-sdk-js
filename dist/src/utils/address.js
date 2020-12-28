"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUtils = void 0;
const utils_1 = require("./utils");
const crypto_1 = require("./crypto");
/**
 * Utilities for address operations
 */
class AddressUtils {
    /**
     * Convert bech32 address to hex string
     * @param addr Bech32 address
     * @returns Hex address
     */
    static getAddrHexFromBech32(addr) {
        return utils_1.Utils.ab2hexstring(crypto_1.Crypto.decodeAddress(addr));
    }
}
exports.AddressUtils = AddressUtils;
//# sourceMappingURL=address.js.map