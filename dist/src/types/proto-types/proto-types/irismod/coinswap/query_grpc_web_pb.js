/**
 * @fileoverview gRPC-Web generated client stub for irismod.coinswap
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.coinswap = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.coinswap.QueryClient =
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
proto.irismod.coinswap.QueryPromiseClient =
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
 *   !proto.irismod.coinswap.QueryLiquidityPoolRequest,
 *   !proto.irismod.coinswap.QueryLiquidityPoolResponse>}
 */
const methodDescriptor_Query_LiquidityPool = new grpc.web.MethodDescriptor(
  '/irismod.coinswap.Query/LiquidityPool',
  grpc.web.MethodType.UNARY,
  proto.irismod.coinswap.QueryLiquidityPoolRequest,
  proto.irismod.coinswap.QueryLiquidityPoolResponse,
  /**
   * @param {!proto.irismod.coinswap.QueryLiquidityPoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.QueryLiquidityPoolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.coinswap.QueryLiquidityPoolRequest,
 *   !proto.irismod.coinswap.QueryLiquidityPoolResponse>}
 */
const methodInfo_Query_LiquidityPool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.coinswap.QueryLiquidityPoolResponse,
  /**
   * @param {!proto.irismod.coinswap.QueryLiquidityPoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.QueryLiquidityPoolResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.coinswap.QueryLiquidityPoolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.coinswap.QueryLiquidityPoolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.coinswap.QueryClient.prototype.liquidityPool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.coinswap.Query/LiquidityPool',
      request,
      metadata || {},
      methodDescriptor_Query_LiquidityPool,
      callback);
};


/**
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.coinswap.QueryLiquidityPoolResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.coinswap.QueryPromiseClient.prototype.liquidityPool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.coinswap.Query/LiquidityPool',
      request,
      metadata || {},
      methodDescriptor_Query_LiquidityPool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.coinswap.QueryLiquidityPoolsRequest,
 *   !proto.irismod.coinswap.QueryLiquidityPoolsResponse>}
 */
const methodDescriptor_Query_LiquidityPools = new grpc.web.MethodDescriptor(
  '/irismod.coinswap.Query/LiquidityPools',
  grpc.web.MethodType.UNARY,
  proto.irismod.coinswap.QueryLiquidityPoolsRequest,
  proto.irismod.coinswap.QueryLiquidityPoolsResponse,
  /**
   * @param {!proto.irismod.coinswap.QueryLiquidityPoolsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.QueryLiquidityPoolsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.coinswap.QueryLiquidityPoolsRequest,
 *   !proto.irismod.coinswap.QueryLiquidityPoolsResponse>}
 */
const methodInfo_Query_LiquidityPools = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.coinswap.QueryLiquidityPoolsResponse,
  /**
   * @param {!proto.irismod.coinswap.QueryLiquidityPoolsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.QueryLiquidityPoolsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.coinswap.QueryLiquidityPoolsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.coinswap.QueryLiquidityPoolsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.coinswap.QueryClient.prototype.liquidityPools =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.coinswap.Query/LiquidityPools',
      request,
      metadata || {},
      methodDescriptor_Query_LiquidityPools,
      callback);
};


/**
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.coinswap.QueryLiquidityPoolsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.coinswap.QueryPromiseClient.prototype.liquidityPools =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.coinswap.Query/LiquidityPools',
      request,
      metadata || {},
      methodDescriptor_Query_LiquidityPools);
};


module.exports = proto.irismod.coinswap;

