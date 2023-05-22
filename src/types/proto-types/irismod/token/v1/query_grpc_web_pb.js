/**
 * @fileoverview gRPC-Web generated client stub for irismod.token.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var irismod_token_v1_token_pb = require('../../../irismod/token/v1/token_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.token = {};
proto.irismod.token.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.token.v1.QueryClient =
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
proto.irismod.token.v1.QueryPromiseClient =
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
 *   !proto.irismod.token.v1.QueryTokenRequest,
 *   !proto.irismod.token.v1.QueryTokenResponse>}
 */
const methodDescriptor_Query_Token = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Query/Token',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.QueryTokenRequest,
  proto.irismod.token.v1.QueryTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.QueryTokenRequest,
 *   !proto.irismod.token.v1.QueryTokenResponse>}
 */
const methodInfo_Query_Token = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.QueryTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.QueryTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.QueryTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.QueryTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.QueryClient.prototype.token =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Query/Token',
      request,
      metadata || {},
      methodDescriptor_Query_Token,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.QueryTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.QueryTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.QueryPromiseClient.prototype.token =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Query/Token',
      request,
      metadata || {},
      methodDescriptor_Query_Token);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.QueryTokensRequest,
 *   !proto.irismod.token.v1.QueryTokensResponse>}
 */
const methodDescriptor_Query_Tokens = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Query/Tokens',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.QueryTokensRequest,
  proto.irismod.token.v1.QueryTokensResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryTokensResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.QueryTokensRequest,
 *   !proto.irismod.token.v1.QueryTokensResponse>}
 */
const methodInfo_Query_Tokens = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.QueryTokensResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryTokensResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.QueryTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.QueryTokensResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.QueryTokensResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.QueryClient.prototype.tokens =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Query/Tokens',
      request,
      metadata || {},
      methodDescriptor_Query_Tokens,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.QueryTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.QueryTokensResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.QueryPromiseClient.prototype.tokens =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Query/Tokens',
      request,
      metadata || {},
      methodDescriptor_Query_Tokens);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.QueryFeesRequest,
 *   !proto.irismod.token.v1.QueryFeesResponse>}
 */
const methodDescriptor_Query_Fees = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Query/Fees',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.QueryFeesRequest,
  proto.irismod.token.v1.QueryFeesResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryFeesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.QueryFeesRequest,
 *   !proto.irismod.token.v1.QueryFeesResponse>}
 */
const methodInfo_Query_Fees = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.QueryFeesResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryFeesResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.QueryFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.QueryFeesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.QueryFeesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.QueryClient.prototype.fees =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Query/Fees',
      request,
      metadata || {},
      methodDescriptor_Query_Fees,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.QueryFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.QueryFeesResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.QueryPromiseClient.prototype.fees =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Query/Fees',
      request,
      metadata || {},
      methodDescriptor_Query_Fees);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.QueryParamsRequest,
 *   !proto.irismod.token.v1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.QueryParamsRequest,
  proto.irismod.token.v1.QueryParamsResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.QueryParamsRequest,
 *   !proto.irismod.token.v1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.QueryParamsResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.QueryTotalBurnRequest,
 *   !proto.irismod.token.v1.QueryTotalBurnResponse>}
 */
const methodDescriptor_Query_TotalBurn = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Query/TotalBurn',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.QueryTotalBurnRequest,
  proto.irismod.token.v1.QueryTotalBurnResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryTotalBurnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryTotalBurnResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.QueryTotalBurnRequest,
 *   !proto.irismod.token.v1.QueryTotalBurnResponse>}
 */
const methodInfo_Query_TotalBurn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.QueryTotalBurnResponse,
  /**
   * @param {!proto.irismod.token.v1.QueryTotalBurnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.QueryTotalBurnResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.QueryTotalBurnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.QueryTotalBurnResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.QueryTotalBurnResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.QueryClient.prototype.totalBurn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Query/TotalBurn',
      request,
      metadata || {},
      methodDescriptor_Query_TotalBurn,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.QueryTotalBurnRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.QueryTotalBurnResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.QueryPromiseClient.prototype.totalBurn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Query/TotalBurn',
      request,
      metadata || {},
      methodDescriptor_Query_TotalBurn);
};


module.exports = proto.irismod.token.v1;

