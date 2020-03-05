import AddressUtils from './address';
import { Utils } from './utils';
import { Crypto } from './crypto';

/**
 * @Unused
 * @hidden
 */
export class StoreKeys {
  static addressStoreKeyPrefix = Utils.str2ba('account:');
  static globalAccountNumberKey = Utils.str2ba('globalAccountNumber');
  static TotalLoosenTokenKey = Utils.str2ba('totalLoosenToken');
  static totalSupplyKeyPrefix = Utils.str2ba('totalSupply:');

  /**
   * Turn an address to key used to get it from the account store
   * @param address Bech32 address
   * @returns Base64 encoded byte array
   */
  static getAccountStoreKey(address: string): number[] {
    const bytes = Crypto.decodeAndConvert(address);
    return StoreKeys.addressStoreKeyPrefix.concat(bytes);
  }
}
