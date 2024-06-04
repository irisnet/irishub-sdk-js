"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
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
Object.defineProperty(exports, "Crypto", {
  enumerable: true,
  get: function get() {
    return _utils.Crypto;
  }
});
Object.defineProperty(exports, "KeyDAO", {
  enumerable: true,
  get: function get() {
    return _client.KeyDAO;
  }
});
exports.newClient = newClient;
exports.utils = exports.types = void 0;
var _types = _interopRequireWildcard(require("./types"));
exports.types = _types;
var _utils = _interopRequireWildcard(require("./utils"));
exports.utils = _utils;
var _client = require("./client");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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