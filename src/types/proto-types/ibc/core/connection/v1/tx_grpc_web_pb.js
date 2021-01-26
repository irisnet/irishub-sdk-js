/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.connection.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js')

var ibc_core_connection_v1_connection_pb = require('../../../../ibc/core/connection/v1/connection_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.core = {};
proto.ibc.core.connection = {};
proto.ibc.core.connection.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.core.connection.v1.MsgClient =
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
proto.ibc.core.connection.v1.MsgPromiseClient =
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
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenInit,
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenInitResponse>}
 */
const methodDescriptor_Msg_ConnectionOpenInit = new grpc.web.MethodDescriptor(
  '/ibc.core.connection.v1.Msg/ConnectionOpenInit',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.connection.v1.MsgConnectionOpenInit,
  proto.ibc.core.connection.v1.MsgConnectionOpenInitResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenInit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.MsgConnectionOpenInitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenInit,
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenInitResponse>}
 */
const methodInfo_Msg_ConnectionOpenInit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.connection.v1.MsgConnectionOpenInitResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenInit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.MsgConnectionOpenInitResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenInit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.connection.v1.MsgConnectionOpenInitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.connection.v1.MsgConnectionOpenInitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.connection.v1.MsgClient.prototype.connectionOpenInit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenInit',
      request,
      metadata || {},
      methodDescriptor_Msg_ConnectionOpenInit,
      callback);
};


/**
 * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenInit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.connection.v1.MsgConnectionOpenInitResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.connection.v1.MsgPromiseClient.prototype.connectionOpenInit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenInit',
      request,
      metadata || {},
      methodDescriptor_Msg_ConnectionOpenInit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenTry,
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenTryResponse>}
 */
const methodDescriptor_Msg_ConnectionOpenTry = new grpc.web.MethodDescriptor(
  '/ibc.core.connection.v1.Msg/ConnectionOpenTry',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.connection.v1.MsgConnectionOpenTry,
  proto.ibc.core.connection.v1.MsgConnectionOpenTryResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenTry} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.MsgConnectionOpenTryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenTry,
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenTryResponse>}
 */
const methodInfo_Msg_ConnectionOpenTry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.connection.v1.MsgConnectionOpenTryResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenTry} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.MsgConnectionOpenTryResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenTry} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.connection.v1.MsgConnectionOpenTryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.connection.v1.MsgConnectionOpenTryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.connection.v1.MsgClient.prototype.connectionOpenTry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenTry',
      request,
      metadata || {},
      methodDescriptor_Msg_ConnectionOpenTry,
      callback);
};


/**
 * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenTry} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.connection.v1.MsgConnectionOpenTryResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.connection.v1.MsgPromiseClient.prototype.connectionOpenTry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenTry',
      request,
      metadata || {},
      methodDescriptor_Msg_ConnectionOpenTry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenAck,
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenAckResponse>}
 */
const methodDescriptor_Msg_ConnectionOpenAck = new grpc.web.MethodDescriptor(
  '/ibc.core.connection.v1.Msg/ConnectionOpenAck',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.connection.v1.MsgConnectionOpenAck,
  proto.ibc.core.connection.v1.MsgConnectionOpenAckResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenAck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.MsgConnectionOpenAckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenAck,
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenAckResponse>}
 */
const methodInfo_Msg_ConnectionOpenAck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.connection.v1.MsgConnectionOpenAckResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenAck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.MsgConnectionOpenAckResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenAck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.connection.v1.MsgConnectionOpenAckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.connection.v1.MsgConnectionOpenAckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.connection.v1.MsgClient.prototype.connectionOpenAck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenAck',
      request,
      metadata || {},
      methodDescriptor_Msg_ConnectionOpenAck,
      callback);
};


/**
 * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenAck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.connection.v1.MsgConnectionOpenAckResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.connection.v1.MsgPromiseClient.prototype.connectionOpenAck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenAck',
      request,
      metadata || {},
      methodDescriptor_Msg_ConnectionOpenAck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenConfirm,
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse>}
 */
const methodDescriptor_Msg_ConnectionOpenConfirm = new grpc.web.MethodDescriptor(
  '/ibc.core.connection.v1.Msg/ConnectionOpenConfirm',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.connection.v1.MsgConnectionOpenConfirm,
  proto.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenConfirm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenConfirm,
 *   !proto.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse>}
 */
const methodInfo_Msg_ConnectionOpenConfirm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenConfirm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenConfirm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.connection.v1.MsgClient.prototype.connectionOpenConfirm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenConfirm',
      request,
      metadata || {},
      methodDescriptor_Msg_ConnectionOpenConfirm,
      callback);
};


/**
 * @param {!proto.ibc.core.connection.v1.MsgConnectionOpenConfirm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.connection.v1.MsgConnectionOpenConfirmResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.connection.v1.MsgPromiseClient.prototype.connectionOpenConfirm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.connection.v1.Msg/ConnectionOpenConfirm',
      request,
      metadata || {},
      methodDescriptor_Msg_ConnectionOpenConfirm);
};


module.exports = proto.ibc.core.connection.v1;

