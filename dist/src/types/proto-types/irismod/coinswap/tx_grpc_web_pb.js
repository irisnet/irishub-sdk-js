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


var irismod_coinswap_coinswap_pb = require('../../irismod/coinswap/coinswap_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.coinswap = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.coinswap.MsgClient =
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
proto.irismod.coinswap.MsgPromiseClient =
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
 *   !proto.irismod.coinswap.MsgAddLiquidity,
 *   !proto.irismod.coinswap.MsgAddLiquidityResponse>}
 */
const methodDescriptor_Msg_AddLiquidity = new grpc.web.MethodDescriptor(
  '/irismod.coinswap.Msg/AddLiquidity',
  grpc.web.MethodType.UNARY,
  proto.irismod.coinswap.MsgAddLiquidity,
  proto.irismod.coinswap.MsgAddLiquidityResponse,
  /**
   * @param {!proto.irismod.coinswap.MsgAddLiquidity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.MsgAddLiquidityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.coinswap.MsgAddLiquidity,
 *   !proto.irismod.coinswap.MsgAddLiquidityResponse>}
 */
const methodInfo_Msg_AddLiquidity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.coinswap.MsgAddLiquidityResponse,
  /**
   * @param {!proto.irismod.coinswap.MsgAddLiquidity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.MsgAddLiquidityResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.coinswap.MsgAddLiquidity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.coinswap.MsgAddLiquidityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.coinswap.MsgAddLiquidityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.coinswap.MsgClient.prototype.addLiquidity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.coinswap.Msg/AddLiquidity',
      request,
      metadata || {},
      methodDescriptor_Msg_AddLiquidity,
      callback);
};


/**
 * @param {!proto.irismod.coinswap.MsgAddLiquidity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.coinswap.MsgAddLiquidityResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.coinswap.MsgPromiseClient.prototype.addLiquidity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.coinswap.Msg/AddLiquidity',
      request,
      metadata || {},
      methodDescriptor_Msg_AddLiquidity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.coinswap.MsgRemoveLiquidity,
 *   !proto.irismod.coinswap.MsgRemoveLiquidityResponse>}
 */
const methodDescriptor_Msg_RemoveLiquidity = new grpc.web.MethodDescriptor(
  '/irismod.coinswap.Msg/RemoveLiquidity',
  grpc.web.MethodType.UNARY,
  proto.irismod.coinswap.MsgRemoveLiquidity,
  proto.irismod.coinswap.MsgRemoveLiquidityResponse,
  /**
   * @param {!proto.irismod.coinswap.MsgRemoveLiquidity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.MsgRemoveLiquidityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.coinswap.MsgRemoveLiquidity,
 *   !proto.irismod.coinswap.MsgRemoveLiquidityResponse>}
 */
const methodInfo_Msg_RemoveLiquidity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.coinswap.MsgRemoveLiquidityResponse,
  /**
   * @param {!proto.irismod.coinswap.MsgRemoveLiquidity} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.MsgRemoveLiquidityResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.coinswap.MsgRemoveLiquidity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.coinswap.MsgRemoveLiquidityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.coinswap.MsgRemoveLiquidityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.coinswap.MsgClient.prototype.removeLiquidity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.coinswap.Msg/RemoveLiquidity',
      request,
      metadata || {},
      methodDescriptor_Msg_RemoveLiquidity,
      callback);
};


/**
 * @param {!proto.irismod.coinswap.MsgRemoveLiquidity} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.coinswap.MsgRemoveLiquidityResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.coinswap.MsgPromiseClient.prototype.removeLiquidity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.coinswap.Msg/RemoveLiquidity',
      request,
      metadata || {},
      methodDescriptor_Msg_RemoveLiquidity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.coinswap.MsgSwapOrder,
 *   !proto.irismod.coinswap.MsgSwapCoinResponse>}
 */
const methodDescriptor_Msg_SwapCoin = new grpc.web.MethodDescriptor(
  '/irismod.coinswap.Msg/SwapCoin',
  grpc.web.MethodType.UNARY,
  proto.irismod.coinswap.MsgSwapOrder,
  proto.irismod.coinswap.MsgSwapCoinResponse,
  /**
   * @param {!proto.irismod.coinswap.MsgSwapOrder} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.MsgSwapCoinResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.coinswap.MsgSwapOrder,
 *   !proto.irismod.coinswap.MsgSwapCoinResponse>}
 */
const methodInfo_Msg_SwapCoin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.coinswap.MsgSwapCoinResponse,
  /**
   * @param {!proto.irismod.coinswap.MsgSwapOrder} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.coinswap.MsgSwapCoinResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.coinswap.MsgSwapOrder} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.coinswap.MsgSwapCoinResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.coinswap.MsgSwapCoinResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.coinswap.MsgClient.prototype.swapCoin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.coinswap.Msg/SwapCoin',
      request,
      metadata || {},
      methodDescriptor_Msg_SwapCoin,
      callback);
};


/**
 * @param {!proto.irismod.coinswap.MsgSwapOrder} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.coinswap.MsgSwapCoinResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.coinswap.MsgPromiseClient.prototype.swapCoin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.coinswap.Msg/SwapCoin',
      request,
      metadata || {},
      methodDescriptor_Msg_SwapCoin);
};


module.exports = proto.irismod.coinswap;

