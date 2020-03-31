/**
 * Keystore struct
 * @hidden
 */
export interface Keystore {
    version: number;
    id: string;
    address: string;
    crypto: Crypto;
}
/**
 * Keys struct
 * @hidden
 */
export interface Key {
    address: string;
    privKey: string;
}
/**
 * Crypto struct
 * @hidden
 */
export interface Crypto {
    ciphertext: string;
    cipherparams: Cipherparams;
    cipher: string;
    kdf: string;
    kdfparams: Kdfparams;
    mac: string;
}
/**
 * Cipherparams struct
 * @hidden
 */
export interface Cipherparams {
    iv: string;
}
/**
 * Kdfparams struct
 * @hidden
 */
export interface Kdfparams {
    dklen: number;
    salt: string;
    c: number;
    prf: string;
}
/**
 * StoreType of a key
 * - Keystore: save the key as an encrypted keystore
 * - Key: save the key as a plaintext private key
 */
export declare enum StoreType {
    Keystore = 0,
    Key = 1
}
