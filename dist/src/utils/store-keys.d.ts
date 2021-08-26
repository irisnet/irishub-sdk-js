/**
 * @hidden
 */
export declare class StoreKeys {
    static addressStoreKeyPrefix: number[];
    static globalAccountNumberKey: number[];
    static totalLoosenTokenKey: number[];
    static totalSupplyKeyPrefix: number[];
    static validatorSigninginfoKey: number[];
    /**
     * Turn an address to key used to get it from the account store
     * @param address Bech32 address
     * @returns Base64 encoded byte array
     */
    static getAccountStoreKey(address: string): Uint8Array;
    static getSigningInfoKey(address: string): Uint8Array;
}
