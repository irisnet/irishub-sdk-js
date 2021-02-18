"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreKeys = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("./utils");

var _crypto = require("./crypto");

/**
 * @hidden
 */
var StoreKeys = /*#__PURE__*/function () {
  function StoreKeys() {
    (0, _classCallCheck2["default"])(this, StoreKeys);
  }

  (0, _createClass2["default"])(StoreKeys, null, [{
    key: "getAccountStoreKey",
    value:
    /**
     * Turn an address to key used to get it from the account store
     * @param address Bech32 address
     * @returns Base64 encoded byte array
     */
    function getAccountStoreKey(address) {
      var bytes = _crypto.Crypto.decodeAndConvert(address);

      return Uint8Array.from(StoreKeys.addressStoreKeyPrefix.concat(bytes));
    }
  }, {
    key: "getSigningInfoKey",
    value: function getSigningInfoKey(address) {
      var bytes = _crypto.Crypto.decodeAndConvert(address);

      return Uint8Array.from(StoreKeys.validatorSigninginfoKey.concat(bytes));
    }
  }]);
  return StoreKeys;
}();

exports.StoreKeys = StoreKeys;
(0, _defineProperty2["default"])(StoreKeys, "addressStoreKeyPrefix", _utils.Utils.str2ba('account:'));
(0, _defineProperty2["default"])(StoreKeys, "globalAccountNumberKey", _utils.Utils.str2ba('globalAccountNumber'));
(0, _defineProperty2["default"])(StoreKeys, "totalLoosenTokenKey", _utils.Utils.str2ba('totalLoosenToken'));
(0, _defineProperty2["default"])(StoreKeys, "totalSupplyKeyPrefix", _utils.Utils.str2ba('totalSupply:'));
(0, _defineProperty2["default"])(StoreKeys, "validatorSigninginfoKey", [0x01]);