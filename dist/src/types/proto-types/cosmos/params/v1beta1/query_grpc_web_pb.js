/**
 * @fileoverview gRPC-Web generated client stub for cosmos.params.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_params_v1beta1_params_pb = require('../../../cosmos/params/v1beta1/params_pb.js')

var amino_amino_pb = require('../../../amino/amino_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.params = {};
proto.cosmos.params.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.params.v1beta1.QueryClient =
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
proto.cosmos.params.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.params.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.params.v1beta1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/cosmos.params.v1beta1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.cosmos.params.v1beta1.QueryParamsRequest,
  proto.cosmos.params.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.params.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.params.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.params.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.params.v1beta1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.params.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.params.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.params.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.params.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.params.v1beta1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.params.v1beta1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.params.v1beta1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.params.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.cosmos.params.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.params.v1beta1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.params.v1beta1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.params.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.params.v1beta1.QuerySubspacesRequest,
 *   !proto.cosmos.params.v1beta1.QuerySubspacesResponse>}
 */
const methodDescriptor_Query_Subspaces = new grpc.web.MethodDescriptor(
  '/cosmos.params.v1beta1.Query/Subspaces',
  grpc.web.MethodType.UNARY,
  proto.cosmos.params.v1beta1.QuerySubspacesRequest,
  proto.cosmos.params.v1beta1.QuerySubspacesResponse,
  /**
   * @param {!proto.cosmos.params.v1beta1.QuerySubspacesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.params.v1beta1.QuerySubspacesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.params.v1beta1.QuerySubspacesRequest,
 *   !proto.cosmos.params.v1beta1.QuerySubspacesResponse>}
 */
const methodInfo_Query_Subspaces = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.params.v1beta1.QuerySubspacesResponse,
  /**
   * @param {!proto.cosmos.params.v1beta1.QuerySubspacesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.params.v1beta1.QuerySubspacesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.params.v1beta1.QuerySubspacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.params.v1beta1.QuerySubspacesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.params.v1beta1.QuerySubspacesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.params.v1beta1.QueryClient.prototype.subspaces =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.params.v1beta1.Query/Subspaces',
      request,
      metadata || {},
      methodDescriptor_Query_Subspaces,
      callback);
};


/**
 * @param {!proto.cosmos.params.v1beta1.QuerySubspacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.params.v1beta1.QuerySubspacesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.params.v1beta1.QueryPromiseClient.prototype.subspaces =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.params.v1beta1.Query/Subspaces',
      request,
      metadata || {},
      methodDescriptor_Query_Subspaces);
};


module.exports = proto.cosmos.params.v1beta1;

