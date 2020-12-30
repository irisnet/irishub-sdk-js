"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const hexEncoding = require("crypto-js/enc-hex");
const SHA3 = require("crypto-js/sha3");
const SHA256 = require("crypto-js/sha256");
const RIPEMD160 = require("crypto-js/ripemd160");
const is = require("is_js");
const errors_1 = require("../errors");
/**
 * IRISHub SDK JS Utils
 * @hidden
 */
class Utils {
    /**
     * String to ArrayBuffer
     * @param str ASCII string
     * @returns Uint8Array
     */
    static str2ab(str) {
        if (typeof str !== 'string') {
            throw new errors_1.SdkError('str2ab expects a string');
        }
        const result = new Uint8Array(str.length);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            result[i] = str.charCodeAt(i);
        }
        return result;
    }
    /**
     * String to Byte Array
     * @param str ASCII string
     * @returns Uint8Array
     */
    static str2ba(str) {
        if (typeof str !== 'string') {
            throw new errors_1.SdkError('str2ba expects a string');
        }
        const result = [];
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            result[i] = str.charCodeAt(i);
        }
        return result;
    }
    /**
     * ArrayBuffer to String
     * @param arr Uint8Array
     * @returns HEX string
     */
    static ab2hexstring(arr) {
        if (typeof arr !== 'object') {
            throw new errors_1.SdkError('ab2hexstring expects an array');
        }
        let result = '';
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i].toString(16);
            str = str.length === 0 ? '00' : str.length === 1 ? '0' + str : str;
            result += str;
        }
        return result;
    }
    /**
     * String to Hex String
     * @param str ASCII string
     * @returns HEX string
     */
    static str2hexstring(str) {
        return Utils.ab2hexstring(Utils.str2ab(str));
    }
    /**
     * Object to Hex String
     * @param obj Json Object
     * @returns HEX string
     */
    static obj2hexstring(obj) {
        return Utils.str2hexstring(JSON.stringify(obj));
    }
    /**
     * Convert an integer to big endian hex and add leading zeros
     * @param num The number to be converted
     * @returns HEX string
     */
    static int2hex(num) {
        if (typeof num !== 'number') {
            throw new errors_1.SdkError('int2hex expects a number');
        }
        const h = num.toString(16);
        return h.length % 2 ? '0' + h : h;
    }
    /**
     * Converts a number to a big endian hexstring of a suitable size, optionally little endian
     * @param num Number to convert
     * @param size The required size in bytes, eg 1 for Uint8, 2 for Uint16. Defaults to 1.
     * @param littleEndian Encode the hex in little endian form
     * @returns HEX string
     */
    static num2hexstring(num, size = 1, littleEndian = false) {
        if (typeof num !== 'number')
            throw new errors_1.SdkError('num must be numeric');
        if (num < 0)
            throw new RangeError('num is unsigned (>= 0)');
        if (size % 1 !== 0)
            throw new errors_1.SdkError('size must be a whole integer');
        if (!Number.isSafeInteger(num)) {
            throw new RangeError(`num (${num}) must be a safe integer`);
        }
        size = size * 2;
        let hexstring = num.toString(16);
        hexstring =
            hexstring.length % size === 0
                ? hexstring
                : ('0'.repeat(size) + hexstring).substring(hexstring.length);
        if (littleEndian)
            hexstring = Utils.reverseHex(hexstring);
        return hexstring;
    }
    /**
     * Converts a number to a variable length Int. Used for array length header
     * @param num Number to convert
     * @returns HEX string of the variable Int.
     */
    static num2VarInt(num) {
        if (num < 0xfd) {
            return Utils.num2hexstring(num);
        }
        else if (num <= 0xffff) {
            // uint16
            return 'fd' + Utils.num2hexstring(num, 2, true);
        }
        else if (num <= 0xffffffff) {
            // uint32
            return 'fe' + Utils.num2hexstring(num, 4, true);
        }
        else {
            // uint64
            return 'ff' + Utils.num2hexstring(num, 8, true);
        }
    }
    /**
     * Reverses an array. Accepts arrayBuffer.
     * @param arr Array to reverse
     * @returns Reversed array
     */
    static reverseArray(arr) {
        if (typeof arr !== 'object' || !arr.length) {
            throw new errors_1.SdkError('reverseArray expects an array');
        }
        const result = new Uint8Array(arr.length);
        for (let i = 0; i < arr.length; i++) {
            result[i] = arr[arr.length - 1 - i];
        }
        return result;
    }
    /**
     * Reverses a HEX string, treating 2 chars as a byte.
     * @example
     * reverseHex('abcdef') = 'efcdab'
     * @param hex HEX string
     * @returns HEX string reversed in 2s.
     */
    static reverseHex(hex) {
        Utils.ensureHex(hex);
        let out = '';
        for (let i = hex.length - 2; i >= 0; i -= 2) {
            out += hex.substr(i, 2);
        }
        return out;
    }
    /**
     * Checks if input is a hexstring. Empty string is considered a hexstring.
     * @example
     * isHex('0101') = true
     * isHex('') = true
     * isHex('0x01') = false
     * @param str
     * @returns {boolean}
     */
    static isHex(str) {
        try {
            const hexRegex = /^([0-9A-Fa-f]{2})*$/;
            return hexRegex.test(str);
        }
        catch (err) {
            return false;
        }
    }
    /**
     * Throws an error if input is not hexstring.
     * @param str
     */
    static ensureHex(str) {
        if (!Utils.isHex(str)) {
            throw new errors_1.SdkError(`Expected a hexstring but got ${str}`);
        }
    }
    /**
     * Computes a SHA256 followed by a RIPEMD160.
     * @param hex Message to hash
     * @returns Hash output
     */
    static sha256ripemd160(hex) {
        if (typeof hex !== 'string') {
            throw new errors_1.SdkError('sha256ripemd160 expects a string');
        }
        if (hex.length % 2 !== 0) {
            throw new errors_1.SdkError(`invalid hex string length: ${hex}`);
        }
        const hexEncoded = hexEncoding.parse(hex);
        const programSha256 = SHA256(hexEncoded);
        return RIPEMD160(programSha256).toString();
    }
    /**
     * Computes a single SHA256 digest.
     * @param hex Message to hash
     * @returns Hash output
     */
    static sha256(hex) {
        if (typeof hex !== 'string') {
            throw new errors_1.SdkError('sha256 expects a hex string');
        }
        if (hex.length % 2 !== 0) {
            throw new errors_1.SdkError(`invalid hex string length: ${hex}`);
        }
        const hexEncoded = hexEncoding.parse(hex);
        return SHA256(hexEncoded).toString();
    }
    /**
     * Computes a single SHA3 (Keccak) digest.
     * @param hex Message to hash
     * @returns Hash output
     */
    static sha3(hex) {
        if (typeof hex !== 'string') {
            throw new errors_1.SdkError('sha3 expects a hex string');
        }
        if (hex.length % 2 !== 0) {
            throw new errors_1.SdkError(`invalid hex string length: ${hex}`);
        }
        const hexEncoded = hexEncoding.parse(hex);
        return SHA3(hexEncoded).toString();
    }
    static sortObject(obj) {
        if (obj === null)
            return null;
        if (is.not.object(obj))
            return obj;
        if (is.array(obj))
            return obj.map(Utils.sortObject);
        const sortedKeys = Object.keys(obj).sort();
        const result = {};
        sortedKeys.forEach(key => {
            result[key] = Utils.sortObject(obj[key]);
        });
        return result;
    }
    static base64ToString(b64) {
        return Buffer.from(b64, 'base64').toString();
    }
    static bytesToBase64(bytes) {
        return Buffer.from(bytes).toString('base64');
    }
    /**
     * Decode base64 encoded tags
     * @param tags
     */
    static decodeTags(tags) {
        const decodedTags = [];
        if (!tags || tags.length === 0) {
            return decodedTags;
        }
        tags.forEach((tag) => {
            decodedTags.push({
                key: Utils.base64ToString(tag.key),
                value: Utils.base64ToString(tag.value),
            });
        });
        return decodedTags;
    }
    /**
   * get amino prefix from public key encode type.
   * @param public key encode type
   * @returns UintArray
   */
    static getAminoPrefix(prefix) {
        let b = Array.from(Buffer.from(SHA256(prefix).toString(), 'hex'));
        while (b[0] === 0) {
            b = b.slice(1);
        }
        b = b.slice(3);
        while (b[0] === 0) {
            b = b.slice(1);
        }
        b = b.slice(0, 4);
        return b;
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map