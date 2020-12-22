"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RpcClient = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _axios = _interopRequireDefault(require("axios"));

var _utils = require("../utils");

var _errors = require("../errors");

var is = _interopRequireWildcard(require("is_js"));

var types = _interopRequireWildcard(require("../types"));

/**
 * Tendermint JSON RPC Client
 * @since v0.17
 */
var RpcClient = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */

  /**
   * Initialize Tendermint JSON RPC Client
   * @param url Rpc address of irishub node
   * @param config The other configurations, refer to { [[AxiosRequestConfig]] }
   * @returns
   * @since v0.17
   */
  function RpcClient(config) {
    (0, _classCallCheck2["default"])(this, RpcClient);
    (0, _defineProperty2["default"])(this, "instance", void 0);
    (0, _defineProperty2["default"])(this, "config", void 0);

    if (is.empty(config)) {
      throw new _errors.SdkError('RpcClient Config not initialized');
    }

    if (is.empty(config.baseURL)) {
      throw new _errors.SdkError('baseURL of RpcClient cannot be empty');
    }

    if (is.empty(config.timeout)) {
      config.timeout = 2000; // Set default timeout
    }

    config.url = '/'; // Fixed url

    this.config = config;
    this.instance = _axios["default"].create(config);
  }
  /**
   * Post Tendermint JSON RPC Request
   *
   * @param method Tendermint RPC method
   * @param params Request params
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(RpcClient, [{
    key: "request",
    value: function request(method) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = {
        jsonrpc: '2.0',
        id: 'jsonrpc-client',
        method: method,
        params: params
      };
      return this.instance.post(this.config.baseURL, data).then(function (response) {
        var res = response.data; // Internal error

        if (res.error) {
          console.error(res.error);
          throw new _errors.SdkError(res.error.message, res.error.code);
        }

        return res.result;
      });
    }
    /**
     * Tendermint ABCI protobuf Query
     *
     * @param path Querier path
     * @param protoRequest protobuf Request
     * @param protoResponse protobuf Response so if "protoResponse" exists, well deserialize "ABCI Response" with "protoResponse" and return json object, else return base64 string
     * @returns
     * @since v0.17
     */

  }, {
    key: "protoQuery",
    value: function protoQuery(path, protoRequest, protoResponse) {
      var params = {
        path: path
      };

      if (protoRequest && protoRequest.serializeBinary) {
        params.data = Buffer.from(protoRequest.serializeBinary()).toString('hex');
      }

      return this.request(types.RpcMethods.AbciQuery, params).then(function (response) {
        if (response && response.response) {
          if (response.response.value) {
            if (protoResponse) {
              try {
                return protoResponse.deserializeBinary(response.response.value).toObject();
              } catch (err) {
                console.error("protobuf deserialize  error from ".concat(path));
                return response.response.value;
              }
            } else {
              return response.response.value;
            }
          } else if (response.response.code) {
            throw new _errors.SdkError(response.response.log, response.response.code);
          } else {
            return null;
          }
        }

        throw new _errors.SdkError("Internal Error from ".concat(path, ":").concat(response.response.log));
      });
    }
    /**
     * Tendermint ABCI Query
     *
     * @param path Querier path
     * @param data Input params
     * @param height Use a specific height to query state at (this can error if the node is pruning state)
     * @returns
     * @since v0.17
     */

  }, {
    key: "abciQuery",
    value: function abciQuery(path, data, height) {
      var params = {
        path: path
      };

      if (data) {
        params.data = _utils.Utils.obj2hexstring(data);
      }

      if (height) {
        params.height = String(height);
      }

      return this.request(types.RpcMethods.AbciQuery, params).then(function (response) {
        if (response && response.response) {
          if (response.response.value) {
            var value = Buffer.from(response.response.value, 'base64').toString();

            try {
              return JSON.parse(value).value;
            } catch (err) {
              return value;
            } // const res = JSON.parse(value);
            // if (!res) return {};
            // if (res.type && res.value) return res.value;
            // return res;

          } else if (response.response.code) {
            throw new _errors.SdkError(response.response.log, response.response.code);
          } else {
            return null;
          }
        }

        throw new _errors.SdkError("Internal Error from ".concat(path, ":").concat(response.response.log));
      });
    }
    /**
     *
     * @param key The store key
     * @param storeName The store name
     * @param height Block height to query, omit to get most recent provable block
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryStore",
    value: function queryStore(key, storeName, height) {
      var path = "/store/".concat(storeName, "/key");
      var params = {
        path: path,
        data: _utils.Utils.ab2hexstring(key),
        height: height ? String(height) : '0'
      };
      return this.request(types.RpcMethods.AbciQuery, params);
    }
  }]);
  return RpcClient;
}();

exports.RpcClient = RpcClient;