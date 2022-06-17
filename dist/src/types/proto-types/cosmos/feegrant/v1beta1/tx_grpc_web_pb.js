/**
 * @fileoverview gRPC-Web generated client stub for cosmos.feegrant.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.feegrant = {};
proto.cosmos.feegrant.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.feegrant.v1beta1.MsgClient =
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
proto.cosmos.feegrant.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.feegrant.v1beta1.MsgGrantAllowance,
 *   !proto.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse>}
 */
const methodDescriptor_Msg_GrantAllowance = new grpc.web.MethodDescriptor(
  '/cosmos.feegrant.v1beta1.Msg/GrantAllowance',
  grpc.web.MethodType.UNARY,
  proto.cosmos.feegrant.v1beta1.MsgGrantAllowance,
  proto.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse,
  /**
   * @param {!proto.cosmos.feegrant.v1beta1.MsgGrantAllowance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.feegrant.v1beta1.MsgGrantAllowance,
 *   !proto.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse>}
 */
const methodInfo_Msg_GrantAllowance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse,
  /**
   * @param {!proto.cosmos.feegrant.v1beta1.MsgGrantAllowance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.feegrant.v1beta1.MsgGrantAllowance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.feegrant.v1beta1.MsgClient.prototype.grantAllowance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.feegrant.v1beta1.Msg/GrantAllowance',
      request,
      metadata || {},
      methodDescriptor_Msg_GrantAllowance,
      callback);
};


/**
 * @param {!proto.cosmos.feegrant.v1beta1.MsgGrantAllowance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.feegrant.v1beta1.MsgPromiseClient.prototype.grantAllowance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.feegrant.v1beta1.Msg/GrantAllowance',
      request,
      metadata || {},
      methodDescriptor_Msg_GrantAllowance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.feegrant.v1beta1.MsgRevokeAllowance,
 *   !proto.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse>}
 */
const methodDescriptor_Msg_RevokeAllowance = new grpc.web.MethodDescriptor(
  '/cosmos.feegrant.v1beta1.Msg/RevokeAllowance',
  grpc.web.MethodType.UNARY,
  proto.cosmos.feegrant.v1beta1.MsgRevokeAllowance,
  proto.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse,
  /**
   * @param {!proto.cosmos.feegrant.v1beta1.MsgRevokeAllowance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.feegrant.v1beta1.MsgRevokeAllowance,
 *   !proto.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse>}
 */
const methodInfo_Msg_RevokeAllowance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse,
  /**
   * @param {!proto.cosmos.feegrant.v1beta1.MsgRevokeAllowance} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.feegrant.v1beta1.MsgRevokeAllowance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.feegrant.v1beta1.MsgClient.prototype.revokeAllowance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.feegrant.v1beta1.Msg/RevokeAllowance',
      request,
      metadata || {},
      methodDescriptor_Msg_RevokeAllowance,
      callback);
};


/**
 * @param {!proto.cosmos.feegrant.v1beta1.MsgRevokeAllowance} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.feegrant.v1beta1.MsgPromiseClient.prototype.revokeAllowance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.feegrant.v1beta1.Msg/RevokeAllowance',
      request,
      metadata || {},
      methodDescriptor_Msg_RevokeAllowance);
};


module.exports = proto.cosmos.feegrant.v1beta1;

