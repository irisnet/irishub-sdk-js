"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utils = require("./utils");

var _crypto = require("./crypto");

/**
 * Utilities for address operations
 */
var AddressUtils = /*#__PURE__*/function () {
  function AddressUtils() {
    (0, _classCallCheck2["default"])(this, AddressUtils);
  }

  (0, _createClass2["default"])(AddressUtils, null, [{
    key: "getAddrHexFromBech32",
    value:
    /**
     * Convert bech32 address to hex string
     * @param addr Bech32 address
     * @returns Hex address
     */
    function getAddrHexFromBech32(addr) {
      return _utils.Utils.ab2hexstring(_crypto.Crypto.decodeAddress(addr));
    }
  }]);
  return AddressUtils;
}();

exports.AddressUtils = AddressUtils;