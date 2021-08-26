/**
 * @fileoverview gRPC-Web generated client stub for cosmos.auth.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_auth_v1beta1_auth_pb = require('../../../cosmos/auth/v1beta1/auth_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.auth = {};
proto.cosmos.auth.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.auth.v1beta1.QueryClient =
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
proto.cosmos.auth.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.auth.v1beta1.QueryAccountRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountResponse>}
 */
const methodDescriptor_Query_Account = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/Account',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.QueryAccountRequest,
  proto.cosmos.auth.v1beta1.QueryAccountResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.QueryAccountRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountResponse>}
 */
const methodInfo_Query_Account = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.QueryAccountResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.QueryAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.QueryAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.account =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Account',
      request,
      metadata || {},
      methodDescriptor_Query_Account,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.QueryAccountResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.account =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Account',
      request,
      metadata || {},
      methodDescriptor_Query_Account);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.auth.v1beta1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.QueryParamsRequest,
  proto.cosmos.auth.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.auth.v1beta1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.cosmos.auth.v1beta1;

