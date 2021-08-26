import { Utils } from './utils';
import { Crypto } from './crypto';
/**
 * @hidden
 */
export class StoreKeys {
    /**
     * Turn an address to key used to get it from the account store
     * @param address Bech32 address
     * @returns Base64 encoded byte array
     */
    static getAccountStoreKey(address) {
        const bytes = Crypto.decodeAndConvert(address);
        return Uint8Array.from(StoreKeys.addressStoreKeyPrefix.concat(bytes));
    }
    static getSigningInfoKey(address) {
        const bytes = Crypto.decodeAndConvert(address);
        return Uint8Array.from(StoreKeys.validatorSigninginfoKey.concat(bytes));
    }
}
StoreKeys.addressStoreKeyPrefix = Utils.str2ba('account:');
StoreKeys.globalAccountNumberKey = Utils.str2ba('globalAccountNumber');
StoreKeys.totalLoosenTokenKey = Utils.str2ba('totalLoosenToken');
StoreKeys.totalSupplyKeyPrefix = Utils.str2ba('totalSupply:');
StoreKeys.validatorSigninginfoKey = [0x01];
//# sourceMappingURL=store-keys.js.map