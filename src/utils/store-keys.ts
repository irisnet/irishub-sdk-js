import { Utils } from './utils';
import { Crypto } from './crypto';

/**
 * @hidden
 */
export class StoreKeys {
  static addressStoreKeyPrefix = Utils.str2ba('account:');
  static globalAccountNumberKey = Utils.str2ba('globalAccountNumber');
  static totalLoosenTokenKey = Utils.str2ba('totalLoosenToken');
  static totalSupplyKeyPrefix = Utils.str2ba('totalSupply:');
  static validatorSigninginfoKey = [0x01];
  /**
   * Turn an address to key used to get it from the account store
   * @param address Bech32 address
   * @returns Base64 encoded byte array
   */
  static getAccountStoreKey(address: string): Uint8Array {
    const bytes = Crypto.decodeAndConvert(address);
    return Uint8Array.from(StoreKeys.addressStoreKeyPrefix.concat(bytes));
  }

  static getSigningInfoKey(address: string): Uint8Array {
    const bytes = Crypto.decodeAndConvert(address);
    return Uint8Array.from(StoreKeys.validatorSigninginfoKey.concat(bytes));
  }
}
