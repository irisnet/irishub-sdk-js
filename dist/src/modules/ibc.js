"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ibc = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _helper = require("../helper");

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This module implements IBC related functions
 *
 *
 * @category Modules
 * @since v0.17
 */
var Ibc = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Ibc(client) {
    (0, _classCallCheck2["default"])(this, Ibc);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * ibc transfer
   * @param param:{
      source_port: string;
      source_channel: string;
      token: Coin;
      receiver: string;
      timeout_height?: {revision_number:number, revision_height:number},
      timeout_timestamp?:number,
    }
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Ibc, [{
    key: "transfer",
    value: function () {
      var _transfer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(param, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!param.timeout_height && !param.timeout_timestamp)) {
                  _context.next = 2;
                  break;
                }

                throw new _errors.SdkError("there must be one timeout_height or timeout_timestamp");

              case 2:
                from = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgTransfer,
                  value: {
                    source_port: param.source_port,
                    source_channel: param.source_channel,
                    token: param.token,
                    sender: from,
                    receiver: param.receiver,
                    timeout_height: param.timeout_height,
                    timeout_timestamp: param.timeout_timestamp
                  }
                }];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function transfer(_x, _x2) {
        return _transfer.apply(this, arguments);
      }

      return transfer;
    }()
    /**
     * DenomTrace queries a denomination trace information.
     * @param hash (in hex format) of the denomination trace information.
     */

  }, {
    key: "queryDenomTrace",
    value: function queryDenomTrace(hash) {
      if (!hash) {
        throw new _errors.SdkError("hash can ont be empty");
      }

      var request = new types.ibc_transfer_query_pb.QueryDenomTraceRequest();
      request.setHash(hash);
      return this.client.rpcClient.protoQuery('/ibc.applications.transfer.v1.Query/DenomTrace', request, types.ibc_transfer_query_pb.QueryDenomTraceResponse);
    }
    /**
     * DenomTraces queries all denomination traces.
     */

  }, {
    key: "queryDenomTraces",
    value: function queryDenomTraces() {
      var page_number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var page_size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var pagination = _helper.ModelCreator.createPaginationModel(page_number, page_size, true);

      var request = new types.ibc_transfer_query_pb.QueryDenomTracesRequest();
      request.setPagination(pagination);
      return this.client.rpcClient.protoQuery('/ibc.applications.transfer.v1.Query/DenomTraces', request, types.ibc_transfer_query_pb.QueryDenomTracesResponse);
    }
    /**
     * Params queries all parameters of the ibc-transfer module.
     */

  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.ibc_transfer_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/ibc.applications.transfer.v1.Query/Params', request, types.ibc_transfer_query_pb.QueryParamsResponse);
    }
    /**
     * Channels queries all the IBC channels of a chain.
     */

  }, {
    key: "queryChannels",
    value: function queryChannels() {
      var page_number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var page_size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var pagination = _helper.ModelCreator.createPaginationModel(page_number, page_size, true);

      var request = new types.ibc_channel_query_pb.QueryChannelsRequest();
      request.setPagination(pagination);
      return this.client.rpcClient.protoQuery('/ibc.core.channel.v1.Query/Channels', request, types.ibc_channel_query_pb.QueryChannelsResponse);
    }
  }]);
  return Ibc;
}();

exports.Ibc = Ibc;