"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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