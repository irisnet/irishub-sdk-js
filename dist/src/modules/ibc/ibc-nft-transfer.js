"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IbcNftTransfer = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var types = _interopRequireWildcard(require("../../types"));
var _helper = require("../../helper");
var _errors = require("../../errors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * This module implements Ibc Nft Transfer related functions
 *
 * @category Modules
 * @since v3.3.0
 */
var IbcNftTransfer = exports.IbcNftTransfer = /*#__PURE__*/function () {
  /** @hidden */
  function IbcNftTransfer(client) {
    (0, _classCallCheck2["default"])(this, IbcNftTransfer);
    /** @hidden */
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }

  /**
   * ibc nft transfer
   * @param param:{
      source_port: string;
      source_channel: string;
      class_id: string;
      token_ids: string[];
      receiver: string;
      timeout_height?: {revision_number:number, revision_height:number},
      timeout_timestamp?:number,
    }
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v3.3.0
   */
  return (0, _createClass2["default"])(IbcNftTransfer, [{
    key: "transfer",
    value: (function () {
      var _transfer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(param, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!param.timeout_height && !param.timeout_timestamp)) {
                _context.next = 2;
                break;
              }
              throw new _errors.SdkError("there must be one timeout_height or timeout_timestamp");
            case 2:
              from = this.client.keys.show(baseTx.from);
              msgs = [{
                type: types.TxType.MsgIbcNftTransfer,
                value: {
                  source_port: param.source_port,
                  source_channel: param.source_channel,
                  class_id: param.class_id,
                  token_ids: param.token_ids,
                  sender: from,
                  receiver: param.receiver,
                  timeout_height: param === null || param === void 0 ? void 0 : param.timeout_height,
                  timeout_timestamp: param === null || param === void 0 ? void 0 : param.timeout_timestamp,
                  memo: param === null || param === void 0 ? void 0 : param.memo
                }
              }];
              return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function transfer(_x, _x2) {
        return _transfer.apply(this, arguments);
      }
      return transfer;
    }()
    /**
     * ClassTrace queries a class trace information.
     * @param hash (in hex format) of the denomination trace information.
     */
    )
  }, {
    key: "queryClassTrace",
    value: function queryClassTrace(hash) {
      if (!hash) {
        throw new _errors.SdkError("hash can ont be empty");
      }
      var request = new types.ibc_nft_transfer_query_pb.QueryClassTraceRequest();
      request.setHash(hash);
      return this.client.rpcClient.protoQuery('/ibc.applications.nft_transfer.v1.Query/ClassTrace', request, types.ibc_nft_transfer_query_pb.QueryClassTraceResponse);
    }

    /**
     * ClassTraces queries all class traces.
     */
  }, {
    key: "queryClassTraces",
    value: function queryClassTraces(pagination) {
      var request = new types.ibc_nft_transfer_query_pb.QueryClassTracesRequest();
      request.setPagination(_helper.ModelCreator.createPaginationModel(pagination));
      return this.client.rpcClient.protoQuery('/ibc.applications.nft_transfer.v1.Query/ClassTraces', request, types.ibc_nft_transfer_query_pb.QueryClassTracesResponse);
    }

    /**
     * ClassHash queries a class hash information.
     */
  }, {
    key: "queryClassHash",
    value: function queryClassHash(trace) {
      if (!trace) {
        throw new _errors.SdkError("trace can ont be empty");
      }
      var request = new types.ibc_nft_transfer_query_pb.QueryClassHashRequest();
      request.setTrace(trace);
      return this.client.rpcClient.protoQuery('/ibc.applications.nft_transfer.v1.Query/ClassHash', request, types.ibc_nft_transfer_query_pb.QueryClassHashResponse);
    }

    /**
     * EscrowAddress returns the escrow address for a particular port and channel id.
     */
  }, {
    key: "queryEscrowAddress",
    value: function queryEscrowAddress(port_id, channel_id) {
      if (!port_id) {
        throw new _errors.SdkError("port_id can ont be empty");
      }
      if (!channel_id) {
        throw new _errors.SdkError("channel_id can ont be empty");
      }
      var request = new types.ibc_nft_transfer_query_pb.QueryEscrowAddressRequest();
      request.setPortId(port_id);
      request.setChannelId(channel_id);
      return this.client.rpcClient.protoQuery('/ibc.applications.nft_transfer.v1.Query/EscrowAddress', request, types.ibc_nft_transfer_query_pb.QueryEscrowAddressResponse);
    }

    /**
     * Params queries all parameters of the nft-transfer module.
     */
  }, {
    key: "queryParams",
    value: function queryParams() {
      var request = new types.ibc_nft_transfer_query_pb.QueryParamsRequest();
      return this.client.rpcClient.protoQuery('/ibc.applications.nft_transfer.v1.Query/Params', request, types.ibc_nft_transfer_query_pb.QueryParamsResponse);
    }
  }]);
}();