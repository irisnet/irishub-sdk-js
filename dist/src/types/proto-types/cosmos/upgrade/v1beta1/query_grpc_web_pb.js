/**
 * @fileoverview gRPC-Web generated client stub for cosmos.upgrade.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_upgrade_v1beta1_upgrade_pb = require('../../../cosmos/upgrade/v1beta1/upgrade_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.upgrade = {};
proto.cosmos.upgrade.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.upgrade.v1beta1.QueryClient =
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
proto.cosmos.upgrade.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.upgrade.v1beta1.QueryCurrentPlanRequest,
 *   !proto.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse>}
 */
const methodDescriptor_Query_CurrentPlan = new grpc.web.MethodDescriptor(
  '/cosmos.upgrade.v1beta1.Query/CurrentPlan',
  grpc.web.MethodType.UNARY,
  proto.cosmos.upgrade.v1beta1.QueryCurrentPlanRequest,
  proto.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.QueryCurrentPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.upgrade.v1beta1.QueryCurrentPlanRequest,
 *   !proto.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse>}
 */
const methodInfo_Query_CurrentPlan = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.QueryCurrentPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.upgrade.v1beta1.QueryCurrentPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.upgrade.v1beta1.QueryClient.prototype.currentPlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/CurrentPlan',
      request,
      metadata || {},
      methodDescriptor_Query_CurrentPlan,
      callback);
};


/**
 * @param {!proto.cosmos.upgrade.v1beta1.QueryCurrentPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.upgrade.v1beta1.QueryCurrentPlanResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.upgrade.v1beta1.QueryPromiseClient.prototype.currentPlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/CurrentPlan',
      request,
      metadata || {},
      methodDescriptor_Query_CurrentPlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.upgrade.v1beta1.QueryAppliedPlanRequest,
 *   !proto.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse>}
 */
const methodDescriptor_Query_AppliedPlan = new grpc.web.MethodDescriptor(
  '/cosmos.upgrade.v1beta1.Query/AppliedPlan',
  grpc.web.MethodType.UNARY,
  proto.cosmos.upgrade.v1beta1.QueryAppliedPlanRequest,
  proto.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.QueryAppliedPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.upgrade.v1beta1.QueryAppliedPlanRequest,
 *   !proto.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse>}
 */
const methodInfo_Query_AppliedPlan = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.QueryAppliedPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.upgrade.v1beta1.QueryAppliedPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.upgrade.v1beta1.QueryClient.prototype.appliedPlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/AppliedPlan',
      request,
      metadata || {},
      methodDescriptor_Query_AppliedPlan,
      callback);
};


/**
 * @param {!proto.cosmos.upgrade.v1beta1.QueryAppliedPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.upgrade.v1beta1.QueryAppliedPlanResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.upgrade.v1beta1.QueryPromiseClient.prototype.appliedPlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/AppliedPlan',
      request,
      metadata || {},
      methodDescriptor_Query_AppliedPlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest,
 *   !proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse>}
 */
const methodDescriptor_Query_UpgradedConsensusState = new grpc.web.MethodDescriptor(
  '/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState',
  grpc.web.MethodType.UNARY,
  proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest,
  proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest,
 *   !proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse>}
 */
const methodInfo_Query_UpgradedConsensusState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.upgrade.v1beta1.QueryClient.prototype.upgradedConsensusState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_UpgradedConsensusState,
      callback);
};


/**
 * @param {!proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.upgrade.v1beta1.QueryPromiseClient.prototype.upgradedConsensusState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Query/UpgradedConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_UpgradedConsensusState);
};


module.exports = proto.cosmos.upgrade.v1beta1;

