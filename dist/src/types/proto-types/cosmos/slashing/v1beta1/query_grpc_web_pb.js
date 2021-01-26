/**
 * @fileoverview gRPC-Web generated client stub for cosmos.slashing.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_slashing_v1beta1_slashing_pb = require('../../../cosmos/slashing/v1beta1/slashing_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.slashing = {};
proto.cosmos.slashing.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.slashing.v1beta1.QueryClient =
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
proto.cosmos.slashing.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.slashing.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.slashing.v1beta1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/cosmos.slashing.v1beta1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.cosmos.slashing.v1beta1.QueryParamsRequest,
  proto.cosmos.slashing.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.slashing.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.slashing.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.slashing.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.slashing.v1beta1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.slashing.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.slashing.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.slashing.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.slashing.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.slashing.v1beta1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.slashing.v1beta1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.slashing.v1beta1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.slashing.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.cosmos.slashing.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.slashing.v1beta1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.slashing.v1beta1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.slashing.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest,
 *   !proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse>}
 */
const methodDescriptor_Query_SigningInfo = new grpc.web.MethodDescriptor(
  '/cosmos.slashing.v1beta1.Query/SigningInfo',
  grpc.web.MethodType.UNARY,
  proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest,
  proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse,
  /**
   * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest,
 *   !proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse>}
 */
const methodInfo_Query_SigningInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse,
  /**
   * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.slashing.v1beta1.QueryClient.prototype.signingInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.slashing.v1beta1.Query/SigningInfo',
      request,
      metadata || {},
      methodDescriptor_Query_SigningInfo,
      callback);
};


/**
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.slashing.v1beta1.QueryPromiseClient.prototype.signingInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.slashing.v1beta1.Query/SigningInfo',
      request,
      metadata || {},
      methodDescriptor_Query_SigningInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest,
 *   !proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse>}
 */
const methodDescriptor_Query_SigningInfos = new grpc.web.MethodDescriptor(
  '/cosmos.slashing.v1beta1.Query/SigningInfos',
  grpc.web.MethodType.UNARY,
  proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest,
  proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse,
  /**
   * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest,
 *   !proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse>}
 */
const methodInfo_Query_SigningInfos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse,
  /**
   * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.slashing.v1beta1.QueryClient.prototype.signingInfos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.slashing.v1beta1.Query/SigningInfos',
      request,
      metadata || {},
      methodDescriptor_Query_SigningInfos,
      callback);
};


/**
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.slashing.v1beta1.QueryPromiseClient.prototype.signingInfos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.slashing.v1beta1.Query/SigningInfos',
      request,
      metadata || {},
      methodDescriptor_Query_SigningInfos);
};


module.exports = proto.cosmos.slashing.v1beta1;

