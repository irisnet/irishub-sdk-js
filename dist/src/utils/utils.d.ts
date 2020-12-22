import * as types from '../types';
/**
 * IRISHub SDK JS Utils
 * @hidden
 */
export declare class Utils {
    /**
     * String to ArrayBuffer
     * @param str ASCII string
     * @returns Uint8Array
     */
    static str2ab(str: string): Uint8Array;
    /**
     * String to Byte Array
     * @param str ASCII string
     * @returns Uint8Array
     */
    static str2ba(str: string): number[];
    /**
     * ArrayBuffer to String
     * @param arr Uint8Array
     * @returns HEX string
     */
    static ab2hexstring(arr: Uint8Array): string;
    /**
     * String to Hex String
     * @param str ASCII string
     * @returns HEX string
     */
    static str2hexstring(str: string): string;
    /**
     * Object to Hex String
     * @param obj Json Object
     * @returns HEX string
     */
    static obj2hexstring(obj: object): string;
    /**
     * Convert an integer to big endian hex and add leading zeros
     * @param num The number to be converted
     * @returns HEX string
     */
    static int2hex(num: number): string;
    /**
     * Converts a number to a big endian hexstring of a suitable size, optionally little endian
     * @param num Number to convert
     * @param size The required size in bytes, eg 1 for Uint8, 2 for Uint16. Defaults to 1.
     * @param littleEndian Encode the hex in little endian form
     * @returns HEX string
     */
    static num2hexstring(num: number, size?: number, littleEndian?: boolean): string;
    /**
     * Converts a number to a variable length Int. Used for array length header
     * @param num Number to convert
     * @returns HEX string of the variable Int.
     */
    static num2VarInt(num: number): string;
    /**
     * Reverses an array. Accepts arrayBuffer.
     * @param arr Array to reverse
     * @returns Reversed array
     */
    static reverseArray(arr: Uint8Array): Uint8Array;
    /**
     * Reverses a HEX string, treating 2 chars as a byte.
     * @example
     * reverseHex('abcdef') = 'efcdab'
     * @param hex HEX string
     * @returns HEX string reversed in 2s.
     */
    static reverseHex(hex: string): string;
    /**
     * Checks if input is a hexstring. Empty string is considered a hexstring.
     * @example
     * isHex('0101') = true
     * isHex('') = true
     * isHex('0x01') = false
     * @param str
     * @returns {boolean}
     */
    static isHex(str: string): boolean;
    /**
     * Throws an error if input is not hexstring.
     * @param str
     */
    static ensureHex(str: string): void;
    /**
     * Computes a SHA256 followed by a RIPEMD160.
     * @param hex Message to hash
     * @returns Hash output
     */
    static sha256ripemd160(hex: string): string;
    /**
     * Computes a single SHA256 digest.
     * @param hex Message to hash
     * @returns Hash output
     */
    static sha256(hex: string): string;
    /**
     * Computes a single SHA3 (Keccak) digest.
     * @param hex Message to hash
     * @returns Hash output
     */
    static sha3(hex: string): string;
    static sortObject(obj: any): any;
    static base64ToString(b64: string): string;
    static bytesToBase64(bytes: Uint8Array): string;
    /**
     * Decode base64 encoded tags
     * @param tags
     */
    static decodeTags(tags: types.Tag[]): types.Tag[];
}
