/**
 * @fileoverview gRPC-Web generated client stub for ibc.transfer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_transfer_transfer_pb = require('../../ibc/transfer/transfer_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.transfer = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.transfer.QueryClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.transfer.QueryPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.transfer.QueryDenomTraceRequest,
 *   !proto.ibc.transfer.QueryDenomTraceResponse>}
 */
const methodDescriptor_Query_DenomTrace = new grpc.web.MethodDescriptor(
  '/ibc.transfer.Query/DenomTrace',
  grpc.web.MethodType.UNARY,
  proto.ibc.transfer.QueryDenomTraceRequest,
  proto.ibc.transfer.QueryDenomTraceResponse,
  /**
   * @param {!proto.ibc.transfer.QueryDenomTraceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.transfer.QueryDenomTraceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.transfer.QueryDenomTraceRequest,
 *   !proto.ibc.transfer.QueryDenomTraceResponse>}
 */
const methodInfo_Query_DenomTrace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.transfer.QueryDenomTraceResponse,
  /**
   * @param {!proto.ibc.transfer.QueryDenomTraceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.transfer.QueryDenomTraceResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.transfer.QueryDenomTraceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.transfer.QueryDenomTraceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.transfer.QueryDenomTraceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.transfer.QueryClient.prototype.denomTrace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.transfer.Query/DenomTrace',
      request,
      metadata || {},
      methodDescriptor_Query_DenomTrace,
      callback);
};


/**
 * @param {!proto.ibc.transfer.QueryDenomTraceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.transfer.QueryDenomTraceResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.transfer.QueryPromiseClient.prototype.denomTrace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.transfer.Query/DenomTrace',
      request,
      metadata || {},
      methodDescriptor_Query_DenomTrace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.transfer.QueryDenomTracesRequest,
 *   !proto.ibc.transfer.QueryDenomTracesResponse>}
 */
const methodDescriptor_Query_DenomTraces = new grpc.web.MethodDescriptor(
  '/ibc.transfer.Query/DenomTraces',
  grpc.web.MethodType.UNARY,
  proto.ibc.transfer.QueryDenomTracesRequest,
  proto.ibc.transfer.QueryDenomTracesResponse,
  /**
   * @param {!proto.ibc.transfer.QueryDenomTracesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.transfer.QueryDenomTracesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.transfer.QueryDenomTracesRequest,
 *   !proto.ibc.transfer.QueryDenomTracesResponse>}
 */
const methodInfo_Query_DenomTraces = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.transfer.QueryDenomTracesResponse,
  /**
   * @param {!proto.ibc.transfer.QueryDenomTracesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.transfer.QueryDenomTracesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.transfer.QueryDenomTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.transfer.QueryDenomTracesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.transfer.QueryDenomTracesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.transfer.QueryClient.prototype.denomTraces =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.transfer.Query/DenomTraces',
      request,
      metadata || {},
      methodDescriptor_Query_DenomTraces,
      callback);
};


/**
 * @param {!proto.ibc.transfer.QueryDenomTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.transfer.QueryDenomTracesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.transfer.QueryPromiseClient.prototype.denomTraces =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.transfer.Query/DenomTraces',
      request,
      metadata || {},
      methodDescriptor_Query_DenomTraces);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.transfer.QueryParamsRequest,
 *   !proto.ibc.transfer.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/ibc.transfer.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.ibc.transfer.QueryParamsRequest,
  proto.ibc.transfer.QueryParamsResponse,
  /**
   * @param {!proto.ibc.transfer.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.transfer.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.transfer.QueryParamsRequest,
 *   !proto.ibc.transfer.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.transfer.QueryParamsResponse,
  /**
   * @param {!proto.ibc.transfer.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.transfer.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.transfer.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.transfer.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.transfer.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.transfer.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.transfer.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.ibc.transfer.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.transfer.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.transfer.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.transfer.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.ibc.transfer;

