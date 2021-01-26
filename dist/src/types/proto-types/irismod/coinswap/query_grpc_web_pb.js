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
 *   !proto.irismod.coinswap.QueryLiquidityRequest,
 *   !proto.irismod.coinswap.QueryLiquidityResponse>}
 */
const methodDescriptor_Query_Liquidity = new grpc.web.MethodDescriptor(
  '/irismod.coinswap.Query/Liquidity',
  grpc.web.MethodType.UNARY,
  proto.irismod.coinswap.QueryLiquidityRequest,
  proto.irismod.coinswap.QueryLiquidityResponse,
  /**
   * @param {!proto.irismod.coinswap.QueryLiquidityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.QueryLiquidityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.coinswap.QueryLiquidityRequest,
 *   !proto.irismod.coinswap.QueryLiquidityResponse>}
 */
const methodInfo_Query_Liquidity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.coinswap.QueryLiquidityResponse,
  /**
   * @param {!proto.irismod.coinswap.QueryLiquidityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.QueryLiquidityResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.coinswap.QueryLiquidityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.coinswap.QueryLiquidityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.coinswap.QueryLiquidityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.coinswap.QueryClient.prototype.liquidity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.coinswap.Query/Liquidity',
      request,
      metadata || {},
      methodDescriptor_Query_Liquidity,
      callback);
};


/**
 * @param {!proto.irismod.coinswap.QueryLiquidityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.coinswap.QueryLiquidityResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.coinswap.QueryPromiseClient.prototype.liquidity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.coinswap.Query/Liquidity',
      request,
      metadata || {},
      methodDescriptor_Query_Liquidity);
};


module.exports = proto.irismod.coinswap;

