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


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var cosmos_upgrade_v1beta1_upgrade_pb = require('../../../cosmos/upgrade/v1beta1/upgrade_pb.js')

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js')

var amino_amino_pb = require('../../../amino/amino_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.upgrade = {};
proto.cosmos.upgrade.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.upgrade.v1beta1.MsgClient =
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
proto.cosmos.upgrade.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgrade,
 *   !proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse>}
 */
const methodDescriptor_Msg_SoftwareUpgrade = new grpc.web.MethodDescriptor(
  '/cosmos.upgrade.v1beta1.Msg/SoftwareUpgrade',
  grpc.web.MethodType.UNARY,
  proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgrade,
  proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgrade} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgrade,
 *   !proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse>}
 */
const methodInfo_Msg_SoftwareUpgrade = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgrade} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgrade} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.upgrade.v1beta1.MsgClient.prototype.softwareUpgrade =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Msg/SoftwareUpgrade',
      request,
      metadata || {},
      methodDescriptor_Msg_SoftwareUpgrade,
      callback);
};


/**
 * @param {!proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgrade} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.upgrade.v1beta1.MsgPromiseClient.prototype.softwareUpgrade =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Msg/SoftwareUpgrade',
      request,
      metadata || {},
      methodDescriptor_Msg_SoftwareUpgrade);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.upgrade.v1beta1.MsgCancelUpgrade,
 *   !proto.cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse>}
 */
const methodDescriptor_Msg_CancelUpgrade = new grpc.web.MethodDescriptor(
  '/cosmos.upgrade.v1beta1.Msg/CancelUpgrade',
  grpc.web.MethodType.UNARY,
  proto.cosmos.upgrade.v1beta1.MsgCancelUpgrade,
  proto.cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.MsgCancelUpgrade} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.upgrade.v1beta1.MsgCancelUpgrade,
 *   !proto.cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse>}
 */
const methodInfo_Msg_CancelUpgrade = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse,
  /**
   * @param {!proto.cosmos.upgrade.v1beta1.MsgCancelUpgrade} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.upgrade.v1beta1.MsgCancelUpgrade} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.upgrade.v1beta1.MsgClient.prototype.cancelUpgrade =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Msg/CancelUpgrade',
      request,
      metadata || {},
      methodDescriptor_Msg_CancelUpgrade,
      callback);
};


/**
 * @param {!proto.cosmos.upgrade.v1beta1.MsgCancelUpgrade} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.upgrade.v1beta1.MsgPromiseClient.prototype.cancelUpgrade =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.upgrade.v1beta1.Msg/CancelUpgrade',
      request,
      metadata || {},
      methodDescriptor_Msg_CancelUpgrade);
};


module.exports = proto.cosmos.upgrade.v1beta1;

