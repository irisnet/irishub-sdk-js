/**
 * @fileoverview gRPC-Web generated client stub for ibc.applications.nft_transfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_applications_nft_transfer_v1_transfer_pb = require('../../../../ibc/applications/nft_transfer/v1/transfer_pb.js')

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.applications = {};
proto.ibc.applications.nft_transfer = {};
proto.ibc.applications.nft_transfer.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.applications.nft_transfer.v1.QueryClient =
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
proto.ibc.applications.nft_transfer.v1.QueryPromiseClient =
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
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassTraceRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassTraceResponse>}
 */
const methodDescriptor_Query_ClassTrace = new grpc.web.MethodDescriptor(
  '/ibc.applications.nft_transfer.v1.Query/ClassTrace',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.nft_transfer.v1.QueryClassTraceRequest,
  proto.ibc.applications.nft_transfer.v1.QueryClassTraceResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassTraceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryClassTraceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassTraceRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassTraceResponse>}
 */
const methodInfo_Query_ClassTrace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.applications.nft_transfer.v1.QueryClassTraceResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassTraceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryClassTraceResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassTraceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.applications.nft_transfer.v1.QueryClassTraceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.nft_transfer.v1.QueryClassTraceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.nft_transfer.v1.QueryClient.prototype.classTrace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/ClassTrace',
      request,
      metadata || {},
      methodDescriptor_Query_ClassTrace,
      callback);
};


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassTraceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.nft_transfer.v1.QueryClassTraceResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.nft_transfer.v1.QueryPromiseClient.prototype.classTrace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/ClassTrace',
      request,
      metadata || {},
      methodDescriptor_Query_ClassTrace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassTracesRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassTracesResponse>}
 */
const methodDescriptor_Query_ClassTraces = new grpc.web.MethodDescriptor(
  '/ibc.applications.nft_transfer.v1.Query/ClassTraces',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.nft_transfer.v1.QueryClassTracesRequest,
  proto.ibc.applications.nft_transfer.v1.QueryClassTracesResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassTracesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryClassTracesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassTracesRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassTracesResponse>}
 */
const methodInfo_Query_ClassTraces = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.applications.nft_transfer.v1.QueryClassTracesResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassTracesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryClassTracesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.applications.nft_transfer.v1.QueryClassTracesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.nft_transfer.v1.QueryClassTracesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.nft_transfer.v1.QueryClient.prototype.classTraces =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/ClassTraces',
      request,
      metadata || {},
      methodDescriptor_Query_ClassTraces,
      callback);
};


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.nft_transfer.v1.QueryClassTracesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.nft_transfer.v1.QueryPromiseClient.prototype.classTraces =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/ClassTraces',
      request,
      metadata || {},
      methodDescriptor_Query_ClassTraces);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassHashRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassHashResponse>}
 */
const methodDescriptor_Query_ClassHash = new grpc.web.MethodDescriptor(
  '/ibc.applications.nft_transfer.v1.Query/ClassHash',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.nft_transfer.v1.QueryClassHashRequest,
  proto.ibc.applications.nft_transfer.v1.QueryClassHashResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryClassHashResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassHashRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryClassHashResponse>}
 */
const methodInfo_Query_ClassHash = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.applications.nft_transfer.v1.QueryClassHashResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassHashRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryClassHashResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.applications.nft_transfer.v1.QueryClassHashResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.nft_transfer.v1.QueryClassHashResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.nft_transfer.v1.QueryClient.prototype.classHash =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/ClassHash',
      request,
      metadata || {},
      methodDescriptor_Query_ClassHash,
      callback);
};


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryClassHashRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.nft_transfer.v1.QueryClassHashResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.nft_transfer.v1.QueryPromiseClient.prototype.classHash =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/ClassHash',
      request,
      metadata || {},
      methodDescriptor_Query_ClassHash);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse>}
 */
const methodDescriptor_Query_EscrowAddress = new grpc.web.MethodDescriptor(
  '/ibc.applications.nft_transfer.v1.Query/EscrowAddress',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressRequest,
  proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse>}
 */
const methodInfo_Query_EscrowAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.nft_transfer.v1.QueryClient.prototype.escrowAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/EscrowAddress',
      request,
      metadata || {},
      methodDescriptor_Query_EscrowAddress,
      callback);
};


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.nft_transfer.v1.QueryEscrowAddressResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.nft_transfer.v1.QueryPromiseClient.prototype.escrowAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/EscrowAddress',
      request,
      metadata || {},
      methodDescriptor_Query_EscrowAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.applications.nft_transfer.v1.QueryParamsRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/ibc.applications.nft_transfer.v1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.ibc.applications.nft_transfer.v1.QueryParamsRequest,
  proto.ibc.applications.nft_transfer.v1.QueryParamsResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.applications.nft_transfer.v1.QueryParamsRequest,
 *   !proto.ibc.applications.nft_transfer.v1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.applications.nft_transfer.v1.QueryParamsResponse,
  /**
   * @param {!proto.ibc.applications.nft_transfer.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.applications.nft_transfer.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.applications.nft_transfer.v1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.applications.nft_transfer.v1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.applications.nft_transfer.v1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.ibc.applications.nft_transfer.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.applications.nft_transfer.v1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.applications.nft_transfer.v1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.applications.nft_transfer.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.ibc.applications.nft_transfer.v1;

