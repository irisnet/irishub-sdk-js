/**
 * @fileoverview gRPC-Web generated client stub for irismod.farm
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
const proto = {};
proto.irismod = {};
proto.irismod.farm = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.farm.MsgClient =
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
proto.irismod.farm.MsgPromiseClient =
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
 *   !proto.irismod.farm.MsgCreatePool,
 *   !proto.irismod.farm.MsgCreatePoolResponse>}
 */
const methodDescriptor_Msg_CreatePool = new grpc.web.MethodDescriptor(
  '/irismod.farm.Msg/CreatePool',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.MsgCreatePool,
  proto.irismod.farm.MsgCreatePoolResponse,
  /**
   * @param {!proto.irismod.farm.MsgCreatePool} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgCreatePoolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.MsgCreatePool,
 *   !proto.irismod.farm.MsgCreatePoolResponse>}
 */
const methodInfo_Msg_CreatePool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.MsgCreatePoolResponse,
  /**
   * @param {!proto.irismod.farm.MsgCreatePool} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgCreatePoolResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.MsgCreatePool} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.MsgCreatePoolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.MsgCreatePoolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.MsgClient.prototype.createPool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Msg/CreatePool',
      request,
      metadata || {},
      methodDescriptor_Msg_CreatePool,
      callback);
};


/**
 * @param {!proto.irismod.farm.MsgCreatePool} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.MsgCreatePoolResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.MsgPromiseClient.prototype.createPool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Msg/CreatePool',
      request,
      metadata || {},
      methodDescriptor_Msg_CreatePool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.farm.MsgDestroyPool,
 *   !proto.irismod.farm.MsgDestroyPoolResponse>}
 */
const methodDescriptor_Msg_DestroyPool = new grpc.web.MethodDescriptor(
  '/irismod.farm.Msg/DestroyPool',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.MsgDestroyPool,
  proto.irismod.farm.MsgDestroyPoolResponse,
  /**
   * @param {!proto.irismod.farm.MsgDestroyPool} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgDestroyPoolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.MsgDestroyPool,
 *   !proto.irismod.farm.MsgDestroyPoolResponse>}
 */
const methodInfo_Msg_DestroyPool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.MsgDestroyPoolResponse,
  /**
   * @param {!proto.irismod.farm.MsgDestroyPool} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgDestroyPoolResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.MsgDestroyPool} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.MsgDestroyPoolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.MsgDestroyPoolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.MsgClient.prototype.destroyPool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Msg/DestroyPool',
      request,
      metadata || {},
      methodDescriptor_Msg_DestroyPool,
      callback);
};


/**
 * @param {!proto.irismod.farm.MsgDestroyPool} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.MsgDestroyPoolResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.MsgPromiseClient.prototype.destroyPool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Msg/DestroyPool',
      request,
      metadata || {},
      methodDescriptor_Msg_DestroyPool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.farm.MsgAdjustPool,
 *   !proto.irismod.farm.MsgAdjustPoolResponse>}
 */
const methodDescriptor_Msg_AdjustPool = new grpc.web.MethodDescriptor(
  '/irismod.farm.Msg/AdjustPool',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.MsgAdjustPool,
  proto.irismod.farm.MsgAdjustPoolResponse,
  /**
   * @param {!proto.irismod.farm.MsgAdjustPool} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgAdjustPoolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.MsgAdjustPool,
 *   !proto.irismod.farm.MsgAdjustPoolResponse>}
 */
const methodInfo_Msg_AdjustPool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.MsgAdjustPoolResponse,
  /**
   * @param {!proto.irismod.farm.MsgAdjustPool} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgAdjustPoolResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.MsgAdjustPool} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.MsgAdjustPoolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.MsgAdjustPoolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.MsgClient.prototype.adjustPool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Msg/AdjustPool',
      request,
      metadata || {},
      methodDescriptor_Msg_AdjustPool,
      callback);
};


/**
 * @param {!proto.irismod.farm.MsgAdjustPool} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.MsgAdjustPoolResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.MsgPromiseClient.prototype.adjustPool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Msg/AdjustPool',
      request,
      metadata || {},
      methodDescriptor_Msg_AdjustPool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.farm.MsgStake,
 *   !proto.irismod.farm.MsgStakeResponse>}
 */
const methodDescriptor_Msg_Stake = new grpc.web.MethodDescriptor(
  '/irismod.farm.Msg/Stake',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.MsgStake,
  proto.irismod.farm.MsgStakeResponse,
  /**
   * @param {!proto.irismod.farm.MsgStake} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgStakeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.MsgStake,
 *   !proto.irismod.farm.MsgStakeResponse>}
 */
const methodInfo_Msg_Stake = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.MsgStakeResponse,
  /**
   * @param {!proto.irismod.farm.MsgStake} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgStakeResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.MsgStake} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.MsgStakeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.MsgStakeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.MsgClient.prototype.stake =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Msg/Stake',
      request,
      metadata || {},
      methodDescriptor_Msg_Stake,
      callback);
};


/**
 * @param {!proto.irismod.farm.MsgStake} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.MsgStakeResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.MsgPromiseClient.prototype.stake =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Msg/Stake',
      request,
      metadata || {},
      methodDescriptor_Msg_Stake);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.farm.MsgUnstake,
 *   !proto.irismod.farm.MsgUnstakeResponse>}
 */
const methodDescriptor_Msg_Unstake = new grpc.web.MethodDescriptor(
  '/irismod.farm.Msg/Unstake',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.MsgUnstake,
  proto.irismod.farm.MsgUnstakeResponse,
  /**
   * @param {!proto.irismod.farm.MsgUnstake} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgUnstakeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.MsgUnstake,
 *   !proto.irismod.farm.MsgUnstakeResponse>}
 */
const methodInfo_Msg_Unstake = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.MsgUnstakeResponse,
  /**
   * @param {!proto.irismod.farm.MsgUnstake} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgUnstakeResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.MsgUnstake} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.MsgUnstakeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.MsgUnstakeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.MsgClient.prototype.unstake =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Msg/Unstake',
      request,
      metadata || {},
      methodDescriptor_Msg_Unstake,
      callback);
};


/**
 * @param {!proto.irismod.farm.MsgUnstake} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.MsgUnstakeResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.MsgPromiseClient.prototype.unstake =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Msg/Unstake',
      request,
      metadata || {},
      methodDescriptor_Msg_Unstake);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.farm.MsgHarvest,
 *   !proto.irismod.farm.MsgHarvestResponse>}
 */
const methodDescriptor_Msg_Harvest = new grpc.web.MethodDescriptor(
  '/irismod.farm.Msg/Harvest',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.MsgHarvest,
  proto.irismod.farm.MsgHarvestResponse,
  /**
   * @param {!proto.irismod.farm.MsgHarvest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgHarvestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.MsgHarvest,
 *   !proto.irismod.farm.MsgHarvestResponse>}
 */
const methodInfo_Msg_Harvest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.MsgHarvestResponse,
  /**
   * @param {!proto.irismod.farm.MsgHarvest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.MsgHarvestResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.MsgHarvest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.MsgHarvestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.MsgHarvestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.MsgClient.prototype.harvest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Msg/Harvest',
      request,
      metadata || {},
      methodDescriptor_Msg_Harvest,
      callback);
};


/**
 * @param {!proto.irismod.farm.MsgHarvest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.MsgHarvestResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.MsgPromiseClient.prototype.harvest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Msg/Harvest',
      request,
      metadata || {},
      methodDescriptor_Msg_Harvest);
};


module.exports = proto.irismod.farm;

