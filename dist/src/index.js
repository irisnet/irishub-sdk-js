"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newClient = newClient;
Object.defineProperty(exports, "Crypto", {
  enumerable: true,
  get: function get() {
    return _utils.Crypto;
  }
});
Object.defineProperty(exports, "Client", {
  enumerable: true,
  get: function get() {
    return _client.Client;
  }
});
Object.defineProperty(exports, "ClientConfig", {
  enumerable: true,
  get: function get() {
    return _client.ClientConfig;
  }
});
Object.defineProperty(exports, "KeyDAO", {
  enumerable: true,
  get: function get() {
    return _client.KeyDAO;
  }
});
exports.utils = exports.types = void 0;

var _types = _interopRequireWildcard(require("./types"));

exports.types = _types;

var _utils = _interopRequireWildcard(require("./utils"));

exports.utils = _utils;

var _client = require("./client");

/**
 * Initialize IRISHub SDK
 *
 * @param config IRISHub SDK [[ClientConfig]]
 *
 * @returns New IRISHub SDK Instance
 */
function newClient(config) {
  var copyConfig = new _client.DefaultClientConfig();
  Object.assign(copyConfig, config);
  return new _client.Client(copyConfig);
}