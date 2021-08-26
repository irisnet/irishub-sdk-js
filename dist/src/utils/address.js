import { Utils } from './utils';
import { Crypto } from './crypto';
/**
 * Utilities for address operations
 */
export class AddressUtils {
    /**
     * Convert bech32 address to hex string
     * @param addr Bech32 address
     * @returns Hex address
     */
    static getAddrHexFromBech32(addr) {
        return Utils.ab2hexstring(Crypto.decodeAddress(addr));
    }
}
//# sourceMappingURL=address.js.map