/**
 * @fileoverview gRPC-Web generated client stub for irismod.token
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_proto_cosmos_pb = require('../../cosmos_proto/cosmos_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var irismod_token_token_pb = require('../../irismod/token/token_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.token = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.token.QueryClient =
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
proto.irismod.token.QueryPromiseClient =
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
 *   !proto.irismod.token.QueryTokenRequest,
 *   !proto.irismod.token.QueryTokenResponse>}
 */
const methodDescriptor_Query_Token = new grpc.web.MethodDescriptor(
  '/irismod.token.Query/Token',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.QueryTokenRequest,
  proto.irismod.token.QueryTokenResponse,
  /**
   * @param {!proto.irismod.token.QueryTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.QueryTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.QueryTokenRequest,
 *   !proto.irismod.token.QueryTokenResponse>}
 */
const methodInfo_Query_Token = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.QueryTokenResponse,
  /**
   * @param {!proto.irismod.token.QueryTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.QueryTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.QueryTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.QueryTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.QueryTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.QueryClient.prototype.token =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.Query/Token',
      request,
      metadata || {},
      methodDescriptor_Query_Token,
      callback);
};


/**
 * @param {!proto.irismod.token.QueryTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.QueryTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.QueryPromiseClient.prototype.token =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.Query/Token',
      request,
      metadata || {},
      methodDescriptor_Query_Token);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.QueryTokensRequest,
 *   !proto.irismod.token.QueryTokensResponse>}
 */
const methodDescriptor_Query_Tokens = new grpc.web.MethodDescriptor(
  '/irismod.token.Query/Tokens',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.QueryTokensRequest,
  proto.irismod.token.QueryTokensResponse,
  /**
   * @param {!proto.irismod.token.QueryTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.QueryTokensResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.QueryTokensRequest,
 *   !proto.irismod.token.QueryTokensResponse>}
 */
const methodInfo_Query_Tokens = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.QueryTokensResponse,
  /**
   * @param {!proto.irismod.token.QueryTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.QueryTokensResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.QueryTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.QueryTokensResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.QueryTokensResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.QueryClient.prototype.tokens =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.Query/Tokens',
      request,
      metadata || {},
      methodDescriptor_Query_Tokens,
      callback);
};


/**
 * @param {!proto.irismod.token.QueryTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.QueryTokensResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.QueryPromiseClient.prototype.tokens =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.Query/Tokens',
      request,
      metadata || {},
      methodDescriptor_Query_Tokens);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.QueryFeesRequest,
 *   !proto.irismod.token.QueryFeesResponse>}
 */
const methodDescriptor_Query_Fees = new grpc.web.MethodDescriptor(
  '/irismod.token.Query/Fees',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.QueryFeesRequest,
  proto.irismod.token.QueryFeesResponse,
  /**
   * @param {!proto.irismod.token.QueryFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.QueryFeesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.QueryFeesRequest,
 *   !proto.irismod.token.QueryFeesResponse>}
 */
const methodInfo_Query_Fees = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.QueryFeesResponse,
  /**
   * @param {!proto.irismod.token.QueryFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.QueryFeesResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.QueryFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.QueryFeesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.QueryFeesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.QueryClient.prototype.fees =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.Query/Fees',
      request,
      metadata || {},
      methodDescriptor_Query_Fees,
      callback);
};


/**
 * @param {!proto.irismod.token.QueryFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.QueryFeesResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.QueryPromiseClient.prototype.fees =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.Query/Fees',
      request,
      metadata || {},
      methodDescriptor_Query_Fees);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.QueryParamsRequest,
 *   !proto.irismod.token.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/irismod.token.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.QueryParamsRequest,
  proto.irismod.token.QueryParamsResponse,
  /**
   * @param {!proto.irismod.token.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.QueryParamsRequest,
 *   !proto.irismod.token.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.QueryParamsResponse,
  /**
   * @param {!proto.irismod.token.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.irismod.token.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.irismod.token;

