/// <reference types="node" />
import * as bip39 from 'bip39';
import * as types from '../types';
/**
 * Crypto Utils
 * @hidden
 */
export declare class Crypto {
    static PRIVKEY_LEN: number;
    static MNEMONIC_LEN: number;
    static DECODED_ADDRESS_LEN: number;
    static CURVE: string;
    static HDPATH: string;
    static ec: any;
    /**
     * Decodes an address in bech32 format.
     * @param address The bech32 address to decode
     * @returns The decoded address buffer
     */
    static decodeAddress(address: string): Buffer;
    /**
     * Checks whether an address is valid.
     * @param address The bech32 address to decode
     * @param hrp The prefix to check for the bech32 address
     * @returns true if the address is valid
     */
    static checkAddress(address: string, hrp: string): boolean;
    /**
     * Encodes an address from input data bytes.
     * @param pubkey The public key to encode
     * @param hrp The address prefix
     * @param type The output type (default: hex)
     * @returns Bech32 address
     */
    static encodeAddress(pubkey: string, hrp?: string, type?: string): any;
    /**
     * ConvertAndEncode converts from a base64 encoded byte array to bach32 encoded byte string and then to bech32
     * @param hrp The address prefix
     * @param data Base64 encoded byte array
     * @returns Bech32 address
     */
    static convertAndEncode(hrp: string, data: Uint8Array): any;
    /**
     * DecodeAndConvert decodes a bech32 encoded string and converts to base64 encoded bytes
     * @param address Bech32 address
     * @returns Base64 encoded bytes
     */
    static decodeAndConvert(address: string): number[];
    /**
     * Generates 32 bytes of random entropy
     * @param len The output length (default: 32 bytes)
     * @returns An entropy bytes hexstring
     */
    static generatePrivateKey(len?: number): string;
    /**
     * Generates an arrayBuffer filled with random bits.
     * @param length The length of buffer.
     * @returns A random array buffer
     */
    static generateRandomArray(length: number): ArrayBuffer;
    /**
     * Gets the pubkey hexstring
     * @param publicKey Encoded public key
     * @returns Public key hexstring
     */
    static getPublicKey(publicKey: string): string;
    /**
     * Calculates the public key from a given private key.
     * @param privateKeyHex The private key hexstring
     * @returns Public key hexstring
     */
    static getPublicKeyFromPrivateKey(privateKeyHex: string): string;
    /**
     * Calculates the Secp256k1 public key from a given private key.
     * @param privateKeyHex The private key hexstring
     * @returns Tendermint public key
     */
    static getPublicKeySecp256k1FromPrivateKey(privateKeyHex: string): types.Pubkey;
    /**
     * Calculates the amino prefix Secp256k1 public key from a given private key.
     * @param privateKeyHex The private key hexstring
     * @returns Tendermint public key
     */
    static getAminoPrefixPublicKey(privateKeyHex: string): string;
    /**
     * [marshalPubKey description]
     * @param  {[type]} pubKey:{type:string, value:base64String} Tendermint public key
     * @param  {[type]} lengthPrefixed:boolean length prefixed
     * @return {[type]} Uint8Array public key with amino prefix
     */
    static aminoMarshalPubKey(pubKey: {
        type: string;
        value: string;
    }, lengthPrefixed?: boolean): Uint8Array;
    /**
     * get amino prefix from public key encode type.
     * @param public key encode type
     * @returns UintArray
     */
    static getAminoPrefix(prefix: string): Uint8Array;
    /**
     * PubKey performs the point-scalar multiplication from the privKey on the
     * generator point to get the pubkey.
     * @param privateKey
     * @returns Public key hexstring
     */
    static generatePubKey(privateKey: Buffer): string;
    /**
     * Gets an address from a public key hex.
     * @param publicKeyHex The public key hexstring
     * @param prefix The address prefix
     *
     * @returns The address
     */
    static getAddressFromPublicKey(publicKeyHex: string, prefix: string): string;
    /**
     * Gets an address from a private key.
     * @param privateKeyHex The private key hexstring
     * @param prefix Bech32 prefix
     * @returns The address
     */
    static getAddressFromPrivateKey(privateKeyHex: string, prefix: string): string;
    /**
     * Verifies a signature (64 byte <r,s>) given the sign bytes and public key.
     * @param sigHex The signature hexstring.
     * @param signBytesHex Unsigned transaction sign bytes hexstring.
     * @param publicKeyHex The public key.
     * @returns Signature. Does not include tx.
     */
    /**
     * Generates a signature (base64 string) for a signDocSerialize based on given private key.
     * @param signDocSerialize from protobuf and tx.
     * @param privateKey The private key.
     * @returns Signature. Does not include tx.
     */
    static generateSignature(signDocSerialize: Uint8Array, private_key: string): string;
    /**
     * Generates a keystore object (web3 secret storage format) given a private key to store and a password.
     * @param privateKeyHex The private key hexstring.
     * @param password The password.
     * @param prefix Bech32 prefix
     * @param iterations Number of iterations. Defaults to 262144
     * @returns The keystore object.
     */
    static generateKeyStore(privateKeyHex: string, password: string, prefix: string, iterations?: number): types.Keystore;
    /**
     * Gets a private key from a keystore given its password.
     * @param keystore The keystore in json format
     * @param password The password.
     * @returns The private key
     */
    static getPrivateKeyFromKeyStore(keystore: string | object, password: string): string;
    /**
     * Generates mnemonic phrase words using random entropy.
     *
     * @returns Mnemonic
     */
    static generateMnemonic(): string;
    /**
     * Validates mnemonic phrase words.
     * @param mnemonic The mnemonic phrase words
     * @returns Validation result
     */
    static validateMnemonic: typeof bip39.validateMnemonic;
    /**
     * Gets a private key from mnemonic words.
     * @param mnemonic The mnemonic phrase words
     * @param derive Derive a private key using the default HD path (default: true)
     * @param index The bip44 address index (default: 0)
     * @param password A passphrase for generating the salt, according to bip39
     * @returns hexstring
     */
    static getPrivateKeyFromMnemonic(mnemonic: string, derive?: boolean, index?: number, password?: string): string;
    /**
     * Generate Tx hash from stdTx
     * @param  protobuf tx :base64 string
     * @throws tx hash
     */
    static generateTxHash(tx: string): string;
    /**
     * Copy from https://github.com/sipa/bech32/blob/master/ref/javascript/segwit_addr.js
     */
    private static convertBits;
}
