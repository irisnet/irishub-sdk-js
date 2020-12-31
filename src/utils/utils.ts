import * as hexEncoding from 'crypto-js/enc-hex';
import * as SHA3 from 'crypto-js/sha3';
import * as SHA256 from 'crypto-js/sha256';
import * as RIPEMD160 from 'crypto-js/ripemd160';
import * as is from 'is_js';
import { SdkError } from '../errors';
import * as types from '../types';

/**
 * IRISHub SDK JS Utils
 * @hidden
 */
export class Utils {
  /**
   * String to ArrayBuffer
   * @param str ASCII string
   * @returns Uint8Array
   */
  static str2ab(str: string): Uint8Array {
    if (typeof str !== 'string') {
      throw new SdkError('str2ab expects a string');
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
  static str2ba(str: string): number[] {
    if (typeof str !== 'string') {
      throw new SdkError('str2ba expects a string');
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
  static ab2hexstring(arr: Uint8Array): string {
    if (typeof arr !== 'object') {
      throw new SdkError('ab2hexstring expects an array');
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
  static str2hexstring(str: string): string {
    return Utils.ab2hexstring(Utils.str2ab(str));
  }

  /**
   * Object to Hex String
   * @param obj Json Object
   * @returns HEX string
   */
  static obj2hexstring(obj: object): string {
    return Utils.str2hexstring(JSON.stringify(obj));
  }

  /**
   * Convert an integer to big endian hex and add leading zeros
   * @param num The number to be converted
   * @returns HEX string
   */
  static int2hex(num: number) {
    if (typeof num !== 'number') {
      throw new SdkError('int2hex expects a number');
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
  static num2hexstring(num: number, size = 1, littleEndian = false) {
    if (typeof num !== 'number') throw new SdkError('num must be numeric');
    if (num < 0) throw new RangeError('num is unsigned (>= 0)');
    if (size % 1 !== 0) throw new SdkError('size must be a whole integer');
    if (!Number.isSafeInteger(num)) {
      throw new RangeError(`num (${num}) must be a safe integer`);
    }
    size = size * 2;
    let hexstring = num.toString(16);
    hexstring =
      hexstring.length % size === 0
        ? hexstring
        : ('0'.repeat(size) + hexstring).substring(hexstring.length);
    if (littleEndian) hexstring = Utils.reverseHex(hexstring);
    return hexstring;
  }

  /**
   * Converts a number to a variable length Int. Used for array length header
   * @param num Number to convert
   * @returns HEX string of the variable Int.
   */
  static num2VarInt(num: number) {
    if (num < 0xfd) {
      return Utils.num2hexstring(num);
    } else if (num <= 0xffff) {
      // uint16
      return 'fd' + Utils.num2hexstring(num, 2, true);
    } else if (num <= 0xffffffff) {
      // uint32
      return 'fe' + Utils.num2hexstring(num, 4, true);
    } else {
      // uint64
      return 'ff' + Utils.num2hexstring(num, 8, true);
    }
  }

  /**
   * Reverses an array. Accepts arrayBuffer.
   * @param arr Array to reverse
   * @returns Reversed array
   */
  static reverseArray(arr: Uint8Array): Uint8Array {
    if (typeof arr !== 'object' || !arr.length) {
      throw new SdkError('reverseArray expects an array');
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
  static reverseHex(hex: string): string {
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
  static isHex(str: string): boolean {
    try {
      const hexRegex = /^([0-9A-Fa-f]{2})*$/;
      return hexRegex.test(str);
    } catch (err) {
      return false;
    }
  }

  /**
   * Throws an error if input is not hexstring.
   * @param str
   */
  static ensureHex(str: string) {
    if (!Utils.isHex(str)) {
      throw new SdkError(`Expected a hexstring but got ${str}`);
    }
  }

  /**
   * Computes a SHA256 followed by a RIPEMD160.
   * @param hex Message to hash
   * @returns Hash output
   */
  static sha256ripemd160(hex: string): string {
    if (typeof hex !== 'string') {
      throw new SdkError('sha256ripemd160 expects a string');
    }
    if (hex.length % 2 !== 0) {
      throw new SdkError(`invalid hex string length: ${hex}`);
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
  static sha256(hex: string): string {
    if (typeof hex !== 'string') {
      throw new SdkError('sha256 expects a hex string');
    }
    if (hex.length % 2 !== 0) {
      throw new SdkError(`invalid hex string length: ${hex}`);
    }
    const hexEncoded = hexEncoding.parse(hex);
    return SHA256(hexEncoded).toString();
  }

  /**
   * Computes a single SHA3 (Keccak) digest.
   * @param hex Message to hash
   * @returns Hash output
   */
  static sha3(hex: string): string {
    if (typeof hex !== 'string') {
      throw new SdkError('sha3 expects a hex string');
    }
    if (hex.length % 2 !== 0) {
      throw new SdkError(`invalid hex string length: ${hex}`);
    }
    const hexEncoded = hexEncoding.parse(hex);
    return SHA3(hexEncoded).toString();
  }

  static sortObject(obj: any): any {
    if (obj === null) return null;
    if (is.not.object(obj)) return obj;
    if (is.array(obj)) return obj.map(Utils.sortObject);
    const sortedKeys = Object.keys(obj).sort();
    const result: { [k: string]: any } = {};
    sortedKeys.forEach(key => {
      result[key] = Utils.sortObject(obj[key]);
    });
    return result;
  }

  static base64ToString(b64: string): string {
    return Buffer.from(b64, 'base64').toString();
  }

  static bytesToBase64(bytes:Uint8Array):string{
    return Buffer.from(bytes).toString('base64');
  }

  /**
   * Decode base64 encoded tags
   * @param tags
   */
  static decodeTags(tags: types.Tag[]): types.Tag[] {
    const decodedTags: types.Tag[] = [];

    if (!tags || tags.length === 0) {
      return decodedTags;
    }
    
    tags.forEach((tag: types.Tag) => {
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
  static getAminoPrefix(prefix:string):Uint8Array{
    let b:any = Array.from(Buffer.from(SHA256(prefix).toString(),'hex'));
    while (b[0] === 0) {
        b = b.slice(1)
    }
    b = b.slice(3);
    while (b[0] === 0) {
        b = b.slice(1)
    }
    b = b.slice(0, 4);
    return b;
  }
}
