"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  newClient: true,
  Client: true,
  ClientConfig: true,
  KeyDAO: true,
  Crypto: true
};
exports.newClient = newClient;
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
Object.defineProperty(exports, "Crypto", {
  enumerable: true,
  get: function get() {
    return _utils.Crypto;
  }
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _client = require("./client");

var _utils = require("./utils");

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