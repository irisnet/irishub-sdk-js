/**
 * @fileoverview gRPC-Web generated client stub for cosmos.distribution.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.distribution = {};
proto.cosmos.distribution.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.distribution.v1beta1.MsgClient =
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
proto.cosmos.distribution.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddress,
 *   !proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse>}
 */
const methodDescriptor_Msg_SetWithdrawAddress = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddress,
  proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddress} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddress,
 *   !proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse>}
 */
const methodInfo_Msg_SetWithdrawAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddress} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddress} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.MsgClient.prototype.setWithdrawAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress',
      request,
      metadata || {},
      methodDescriptor_Msg_SetWithdrawAddress,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddress} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.MsgPromiseClient.prototype.setWithdrawAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress',
      request,
      metadata || {},
      methodDescriptor_Msg_SetWithdrawAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
 *   !proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse>}
 */
const methodDescriptor_Msg_WithdrawDelegatorReward = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
  proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
 *   !proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse>}
 */
const methodInfo_Msg_WithdrawDelegatorReward = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.MsgClient.prototype.withdrawDelegatorReward =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawDelegatorReward,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.MsgPromiseClient.prototype.withdrawDelegatorReward =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawDelegatorReward);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission,
 *   !proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse>}
 */
const methodDescriptor_Msg_WithdrawValidatorCommission = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission,
  proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission,
 *   !proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse>}
 */
const methodInfo_Msg_WithdrawValidatorCommission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.MsgClient.prototype.withdrawValidatorCommission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawValidatorCommission,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.MsgPromiseClient.prototype.withdrawValidatorCommission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawValidatorCommission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.MsgFundCommunityPool,
 *   !proto.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse>}
 */
const methodDescriptor_Msg_FundCommunityPool = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Msg/FundCommunityPool',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.MsgFundCommunityPool,
  proto.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.MsgFundCommunityPool} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.MsgFundCommunityPool,
 *   !proto.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse>}
 */
const methodInfo_Msg_FundCommunityPool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.MsgFundCommunityPool} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.MsgFundCommunityPool} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.MsgClient.prototype.fundCommunityPool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/FundCommunityPool',
      request,
      metadata || {},
      methodDescriptor_Msg_FundCommunityPool,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.MsgFundCommunityPool} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.MsgPromiseClient.prototype.fundCommunityPool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Msg/FundCommunityPool',
      request,
      metadata || {},
      methodDescriptor_Msg_FundCommunityPool);
};


module.exports = proto.cosmos.distribution.v1beta1;

