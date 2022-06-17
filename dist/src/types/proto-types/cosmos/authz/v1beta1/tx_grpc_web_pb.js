/**
 * @fileoverview gRPC-Web generated client stub for cosmos.authz.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var cosmos_base_abci_v1beta1_abci_pb = require('../../../cosmos/base/abci/v1beta1/abci_pb.js')

var cosmos_authz_v1beta1_authz_pb = require('../../../cosmos/authz/v1beta1/authz_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.authz = {};
proto.cosmos.authz.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.authz.v1beta1.MsgClient =
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
proto.cosmos.authz.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.authz.v1beta1.MsgGrant,
 *   !proto.cosmos.authz.v1beta1.MsgGrantResponse>}
 */
const methodDescriptor_Msg_Grant = new grpc.web.MethodDescriptor(
  '/cosmos.authz.v1beta1.Msg/Grant',
  grpc.web.MethodType.UNARY,
  proto.cosmos.authz.v1beta1.MsgGrant,
  proto.cosmos.authz.v1beta1.MsgGrantResponse,
  /**
   * @param {!proto.cosmos.authz.v1beta1.MsgGrant} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.authz.v1beta1.MsgGrantResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.authz.v1beta1.MsgGrant,
 *   !proto.cosmos.authz.v1beta1.MsgGrantResponse>}
 */
const methodInfo_Msg_Grant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.authz.v1beta1.MsgGrantResponse,
  /**
   * @param {!proto.cosmos.authz.v1beta1.MsgGrant} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.authz.v1beta1.MsgGrantResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.authz.v1beta1.MsgGrant} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.authz.v1beta1.MsgGrantResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.authz.v1beta1.MsgGrantResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.authz.v1beta1.MsgClient.prototype.grant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.authz.v1beta1.Msg/Grant',
      request,
      metadata || {},
      methodDescriptor_Msg_Grant,
      callback);
};


/**
 * @param {!proto.cosmos.authz.v1beta1.MsgGrant} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.authz.v1beta1.MsgGrantResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.authz.v1beta1.MsgPromiseClient.prototype.grant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.authz.v1beta1.Msg/Grant',
      request,
      metadata || {},
      methodDescriptor_Msg_Grant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.authz.v1beta1.MsgExec,
 *   !proto.cosmos.authz.v1beta1.MsgExecResponse>}
 */
const methodDescriptor_Msg_Exec = new grpc.web.MethodDescriptor(
  '/cosmos.authz.v1beta1.Msg/Exec',
  grpc.web.MethodType.UNARY,
  proto.cosmos.authz.v1beta1.MsgExec,
  proto.cosmos.authz.v1beta1.MsgExecResponse,
  /**
   * @param {!proto.cosmos.authz.v1beta1.MsgExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.authz.v1beta1.MsgExecResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.authz.v1beta1.MsgExec,
 *   !proto.cosmos.authz.v1beta1.MsgExecResponse>}
 */
const methodInfo_Msg_Exec = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.authz.v1beta1.MsgExecResponse,
  /**
   * @param {!proto.cosmos.authz.v1beta1.MsgExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.authz.v1beta1.MsgExecResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.authz.v1beta1.MsgExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.authz.v1beta1.MsgExecResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.authz.v1beta1.MsgExecResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.authz.v1beta1.MsgClient.prototype.exec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.authz.v1beta1.Msg/Exec',
      request,
      metadata || {},
      methodDescriptor_Msg_Exec,
      callback);
};


/**
 * @param {!proto.cosmos.authz.v1beta1.MsgExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.authz.v1beta1.MsgExecResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.authz.v1beta1.MsgPromiseClient.prototype.exec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.authz.v1beta1.Msg/Exec',
      request,
      metadata || {},
      methodDescriptor_Msg_Exec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.authz.v1beta1.MsgRevoke,
 *   !proto.cosmos.authz.v1beta1.MsgRevokeResponse>}
 */
const methodDescriptor_Msg_Revoke = new grpc.web.MethodDescriptor(
  '/cosmos.authz.v1beta1.Msg/Revoke',
  grpc.web.MethodType.UNARY,
  proto.cosmos.authz.v1beta1.MsgRevoke,
  proto.cosmos.authz.v1beta1.MsgRevokeResponse,
  /**
   * @param {!proto.cosmos.authz.v1beta1.MsgRevoke} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.authz.v1beta1.MsgRevokeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.authz.v1beta1.MsgRevoke,
 *   !proto.cosmos.authz.v1beta1.MsgRevokeResponse>}
 */
const methodInfo_Msg_Revoke = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.authz.v1beta1.MsgRevokeResponse,
  /**
   * @param {!proto.cosmos.authz.v1beta1.MsgRevoke} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.authz.v1beta1.MsgRevokeResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.authz.v1beta1.MsgRevoke} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.authz.v1beta1.MsgRevokeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.authz.v1beta1.MsgRevokeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.authz.v1beta1.MsgClient.prototype.revoke =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.authz.v1beta1.Msg/Revoke',
      request,
      metadata || {},
      methodDescriptor_Msg_Revoke,
      callback);
};


/**
 * @param {!proto.cosmos.authz.v1beta1.MsgRevoke} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.authz.v1beta1.MsgRevokeResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.authz.v1beta1.MsgPromiseClient.prototype.revoke =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.authz.v1beta1.Msg/Revoke',
      request,
      metadata || {},
      methodDescriptor_Msg_Revoke);
};


module.exports = proto.cosmos.authz.v1beta1;

