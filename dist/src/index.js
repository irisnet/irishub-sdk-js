"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  newClient: true
};
exports.newClient = newClient;

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _client = require("./client");

//export * from './types';
//export { Client, ClientConfig, KeyDAO } from './client';

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