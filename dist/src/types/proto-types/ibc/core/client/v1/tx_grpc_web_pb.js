/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.client.v1
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
const proto = {};
proto.ibc = {};
proto.ibc.core = {};
proto.ibc.core.client = {};
proto.ibc.core.client.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.core.client.v1.MsgClient =
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
proto.ibc.core.client.v1.MsgPromiseClient =
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
 *   !proto.ibc.core.client.v1.MsgCreateClient,
 *   !proto.ibc.core.client.v1.MsgCreateClientResponse>}
 */
const methodDescriptor_Msg_CreateClient = new grpc.web.MethodDescriptor(
  '/ibc.core.client.v1.Msg/CreateClient',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.client.v1.MsgCreateClient,
  proto.ibc.core.client.v1.MsgCreateClientResponse,
  /**
   * @param {!proto.ibc.core.client.v1.MsgCreateClient} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.MsgCreateClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.client.v1.MsgCreateClient,
 *   !proto.ibc.core.client.v1.MsgCreateClientResponse>}
 */
const methodInfo_Msg_CreateClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.client.v1.MsgCreateClientResponse,
  /**
   * @param {!proto.ibc.core.client.v1.MsgCreateClient} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.MsgCreateClientResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.client.v1.MsgCreateClient} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.client.v1.MsgCreateClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.client.v1.MsgCreateClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.client.v1.MsgClient.prototype.createClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.client.v1.Msg/CreateClient',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateClient,
      callback);
};


/**
 * @param {!proto.ibc.core.client.v1.MsgCreateClient} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.client.v1.MsgCreateClientResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.client.v1.MsgPromiseClient.prototype.createClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.client.v1.Msg/CreateClient',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.client.v1.MsgUpdateClient,
 *   !proto.ibc.core.client.v1.MsgUpdateClientResponse>}
 */
const methodDescriptor_Msg_UpdateClient = new grpc.web.MethodDescriptor(
  '/ibc.core.client.v1.Msg/UpdateClient',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.client.v1.MsgUpdateClient,
  proto.ibc.core.client.v1.MsgUpdateClientResponse,
  /**
   * @param {!proto.ibc.core.client.v1.MsgUpdateClient} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.MsgUpdateClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.client.v1.MsgUpdateClient,
 *   !proto.ibc.core.client.v1.MsgUpdateClientResponse>}
 */
const methodInfo_Msg_UpdateClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.client.v1.MsgUpdateClientResponse,
  /**
   * @param {!proto.ibc.core.client.v1.MsgUpdateClient} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.MsgUpdateClientResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.client.v1.MsgUpdateClient} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.client.v1.MsgUpdateClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.client.v1.MsgUpdateClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.client.v1.MsgClient.prototype.updateClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.client.v1.Msg/UpdateClient',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateClient,
      callback);
};


/**
 * @param {!proto.ibc.core.client.v1.MsgUpdateClient} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.client.v1.MsgUpdateClientResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.client.v1.MsgPromiseClient.prototype.updateClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.client.v1.Msg/UpdateClient',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.client.v1.MsgUpgradeClient,
 *   !proto.ibc.core.client.v1.MsgUpgradeClientResponse>}
 */
const methodDescriptor_Msg_UpgradeClient = new grpc.web.MethodDescriptor(
  '/ibc.core.client.v1.Msg/UpgradeClient',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.client.v1.MsgUpgradeClient,
  proto.ibc.core.client.v1.MsgUpgradeClientResponse,
  /**
   * @param {!proto.ibc.core.client.v1.MsgUpgradeClient} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.MsgUpgradeClientResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.client.v1.MsgUpgradeClient,
 *   !proto.ibc.core.client.v1.MsgUpgradeClientResponse>}
 */
const methodInfo_Msg_UpgradeClient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.client.v1.MsgUpgradeClientResponse,
  /**
   * @param {!proto.ibc.core.client.v1.MsgUpgradeClient} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.MsgUpgradeClientResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.client.v1.MsgUpgradeClient} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.client.v1.MsgUpgradeClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.client.v1.MsgUpgradeClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.client.v1.MsgClient.prototype.upgradeClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.client.v1.Msg/UpgradeClient',
      request,
      metadata || {},
      methodDescriptor_Msg_UpgradeClient,
      callback);
};


/**
 * @param {!proto.ibc.core.client.v1.MsgUpgradeClient} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.client.v1.MsgUpgradeClientResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.client.v1.MsgPromiseClient.prototype.upgradeClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.client.v1.Msg/UpgradeClient',
      request,
      metadata || {},
      methodDescriptor_Msg_UpgradeClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.client.v1.MsgSubmitMisbehaviour,
 *   !proto.ibc.core.client.v1.MsgSubmitMisbehaviourResponse>}
 */
const methodDescriptor_Msg_SubmitMisbehaviour = new grpc.web.MethodDescriptor(
  '/ibc.core.client.v1.Msg/SubmitMisbehaviour',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.client.v1.MsgSubmitMisbehaviour,
  proto.ibc.core.client.v1.MsgSubmitMisbehaviourResponse,
  /**
   * @param {!proto.ibc.core.client.v1.MsgSubmitMisbehaviour} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.MsgSubmitMisbehaviourResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.client.v1.MsgSubmitMisbehaviour,
 *   !proto.ibc.core.client.v1.MsgSubmitMisbehaviourResponse>}
 */
const methodInfo_Msg_SubmitMisbehaviour = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.client.v1.MsgSubmitMisbehaviourResponse,
  /**
   * @param {!proto.ibc.core.client.v1.MsgSubmitMisbehaviour} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.MsgSubmitMisbehaviourResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.client.v1.MsgSubmitMisbehaviour} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.client.v1.MsgSubmitMisbehaviourResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.client.v1.MsgSubmitMisbehaviourResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.client.v1.MsgClient.prototype.submitMisbehaviour =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.client.v1.Msg/SubmitMisbehaviour',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitMisbehaviour,
      callback);
};


/**
 * @param {!proto.ibc.core.client.v1.MsgSubmitMisbehaviour} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.client.v1.MsgSubmitMisbehaviourResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.client.v1.MsgPromiseClient.prototype.submitMisbehaviour =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.client.v1.Msg/SubmitMisbehaviour',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitMisbehaviour);
};


module.exports = proto.ibc.core.client.v1;

