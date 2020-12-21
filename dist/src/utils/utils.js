"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var hexEncoding = _interopRequireWildcard(require("crypto-js/enc-hex"));

var SHA3 = _interopRequireWildcard(require("crypto-js/sha3"));

var SHA256 = _interopRequireWildcard(require("crypto-js/sha256"));

var RIPEMD160 = _interopRequireWildcard(require("crypto-js/ripemd160"));

var is = _interopRequireWildcard(require("is_js"));

var _errors = require("../errors");

/**
 * IRISHub SDK JS Utils
 * @hidden
 */
var Utils = /*#__PURE__*/function () {
  function Utils() {
    (0, _classCallCheck2["default"])(this, Utils);
  }

  (0, _createClass2["default"])(Utils, null, [{
    key: "str2ab",

    /**
     * String to ArrayBuffer
     * @param str ASCII string
     * @returns Uint8Array
     */
    value: function str2ab(str) {
      if (typeof str !== 'string') {
        throw new _errors.SdkError('str2ab expects a string');
      }

      var result = new Uint8Array(str.length);

      for (var i = 0, strLen = str.length; i < strLen; i++) {
        result[i] = str.charCodeAt(i);
      }

      return result;
    }
    /**
     * String to Byte Array
     * @param str ASCII string
     * @returns Uint8Array
     */

  }, {
    key: "str2ba",
    value: function str2ba(str) {
      if (typeof str !== 'string') {
        throw new _errors.SdkError('str2ba expects a string');
      }

      var result = [];

      for (var i = 0, strLen = str.length; i < strLen; i++) {
        result[i] = str.charCodeAt(i);
      }

      return result;
    }
    /**
     * ArrayBuffer to String
     * @param arr Uint8Array
     * @returns HEX string
     */

  }, {
    key: "ab2hexstring",
    value: function ab2hexstring(arr) {
      if ((0, _typeof2["default"])(arr) !== 'object') {
        throw new _errors.SdkError('ab2hexstring expects an array');
      }

      var result = '';

      for (var i = 0; i < arr.length; i++) {
        var str = arr[i].toString(16);
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

  }, {
    key: "str2hexstring",
    value: function str2hexstring(str) {
      return Utils.ab2hexstring(Utils.str2ab(str));
    }
    /**
     * Object to Hex String
     * @param obj Json Object
     * @returns HEX string
     */

  }, {
    key: "obj2hexstring",
    value: function obj2hexstring(obj) {
      return Utils.str2hexstring(JSON.stringify(obj));
    }
    /**
     * Convert an integer to big endian hex and add leading zeros
     * @param num The number to be converted
     * @returns HEX string
     */

  }, {
    key: "int2hex",
    value: function int2hex(num) {
      if (typeof num !== 'number') {
        throw new _errors.SdkError('int2hex expects a number');
      }

      var h = num.toString(16);
      return h.length % 2 ? '0' + h : h;
    }
    /**
     * Converts a number to a big endian hexstring of a suitable size, optionally little endian
     * @param num Number to convert
     * @param size The required size in bytes, eg 1 for Uint8, 2 for Uint16. Defaults to 1.
     * @param littleEndian Encode the hex in little endian form
     * @returns HEX string
     */

  }, {
    key: "num2hexstring",
    value: function num2hexstring(num) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var littleEndian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (typeof num !== 'number') throw new _errors.SdkError('num must be numeric');
      if (num < 0) throw new RangeError('num is unsigned (>= 0)');
      if (size % 1 !== 0) throw new _errors.SdkError('size must be a whole integer');

      if (!Number.isSafeInteger(num)) {
        throw new RangeError("num (".concat(num, ") must be a safe integer"));
      }

      size = size * 2;
      var hexstring = num.toString(16);
      hexstring = hexstring.length % size === 0 ? hexstring : ('0'.repeat(size) + hexstring).substring(hexstring.length);
      if (littleEndian) hexstring = Utils.reverseHex(hexstring);
      return hexstring;
    }
    /**
     * Converts a number to a variable length Int. Used for array length header
     * @param num Number to convert
     * @returns HEX string of the variable Int.
     */

  }, {
    key: "num2VarInt",
    value: function num2VarInt(num) {
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

  }, {
    key: "reverseArray",
    value: function reverseArray(arr) {
      if ((0, _typeof2["default"])(arr) !== 'object' || !arr.length) {
        throw new _errors.SdkError('reverseArray expects an array');
      }

      var result = new Uint8Array(arr.length);

      for (var i = 0; i < arr.length; i++) {
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

  }, {
    key: "reverseHex",
    value: function reverseHex(hex) {
      Utils.ensureHex(hex);
      var out = '';

      for (var i = hex.length - 2; i >= 0; i -= 2) {
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

  }, {
    key: "isHex",
    value: function isHex(str) {
      try {
        var hexRegex = /^([0-9A-Fa-f]{2})*$/;
        return hexRegex.test(str);
      } catch (err) {
        return false;
      }
    }
    /**
     * Throws an error if input is not hexstring.
     * @param str
     */

  }, {
    key: "ensureHex",
    value: function ensureHex(str) {
      if (!Utils.isHex(str)) {
        throw new _errors.SdkError("Expected a hexstring but got ".concat(str));
      }
    }
    /**
     * Computes a SHA256 followed by a RIPEMD160.
     * @param hex Message to hash
     * @returns Hash output
     */

  }, {
    key: "sha256ripemd160",
    value: function sha256ripemd160(hex) {
      if (typeof hex !== 'string') {
        throw new _errors.SdkError('sha256ripemd160 expects a string');
      }

      if (hex.length % 2 !== 0) {
        throw new _errors.SdkError("invalid hex string length: ".concat(hex));
      }

      var hexEncoded = hexEncoding.parse(hex);
      var programSha256 = SHA256(hexEncoded);
      return RIPEMD160(programSha256).toString();
    }
    /**
     * Computes a single SHA256 digest.
     * @param hex Message to hash
     * @returns Hash output
     */

  }, {
    key: "sha256",
    value: function sha256(hex) {
      if (typeof hex !== 'string') {
        throw new _errors.SdkError('sha256 expects a hex string');
      }

      if (hex.length % 2 !== 0) {
        throw new _errors.SdkError("invalid hex string length: ".concat(hex));
      }

      var hexEncoded = hexEncoding.parse(hex);
      return SHA256(hexEncoded).toString();
    }
    /**
     * Computes a single SHA3 (Keccak) digest.
     * @param hex Message to hash
     * @returns Hash output
     */

  }, {
    key: "sha3",
    value: function sha3(hex) {
      if (typeof hex !== 'string') {
        throw new _errors.SdkError('sha3 expects a hex string');
      }

      if (hex.length % 2 !== 0) {
        throw new _errors.SdkError("invalid hex string length: ".concat(hex));
      }

      var hexEncoded = hexEncoding.parse(hex);
      return SHA3(hexEncoded).toString();
    }
  }, {
    key: "sortObject",
    value: function sortObject(obj) {
      if (obj === null) return null;
      if (is.not.object(obj)) return obj;
      if (is.array(obj)) return obj.map(Utils.sortObject);
      var sortedKeys = Object.keys(obj).sort();
      var result = {};
      sortedKeys.forEach(function (key) {
        result[key] = Utils.sortObject(obj[key]);
      });
      return result;
    }
  }, {
    key: "base64ToString",
    value: function base64ToString(b64) {
      return Buffer.from(b64, 'base64').toString();
    }
  }, {
    key: "bytesToBase64",
    value: function bytesToBase64(bytes) {
      return Buffer.from(bytes).toString('base64');
    }
    /**
     * Decode base64 encoded tags
     * @param tags
     */

  }, {
    key: "decodeTags",
    value: function decodeTags(tags) {
      var decodedTags = [];

      if (!tags || tags.length === 0) {
        return decodedTags;
      }

      tags.forEach(function (tag) {
        decodedTags.push({
          key: Utils.base64ToString(tag.key),
          value: Utils.base64ToString(tag.value)
        });
      });
      return decodedTags;
    }
  }]);
  return Utils;
}();

exports.Utils = Utils;