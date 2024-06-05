/**
 * @fileoverview gRPC-Web generated client stub for cosmos.crisis.v1beta1
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

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js')

var amino_amino_pb = require('../../../amino/amino_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.crisis = {};
proto.cosmos.crisis.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.crisis.v1beta1.MsgClient =
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
proto.cosmos.crisis.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.crisis.v1beta1.MsgVerifyInvariant,
 *   !proto.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse>}
 */
const methodDescriptor_Msg_VerifyInvariant = new grpc.web.MethodDescriptor(
  '/cosmos.crisis.v1beta1.Msg/VerifyInvariant',
  grpc.web.MethodType.UNARY,
  proto.cosmos.crisis.v1beta1.MsgVerifyInvariant,
  proto.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse,
  /**
   * @param {!proto.cosmos.crisis.v1beta1.MsgVerifyInvariant} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.crisis.v1beta1.MsgVerifyInvariant,
 *   !proto.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse>}
 */
const methodInfo_Msg_VerifyInvariant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse,
  /**
   * @param {!proto.cosmos.crisis.v1beta1.MsgVerifyInvariant} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.crisis.v1beta1.MsgVerifyInvariant} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.crisis.v1beta1.MsgClient.prototype.verifyInvariant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.crisis.v1beta1.Msg/VerifyInvariant',
      request,
      metadata || {},
      methodDescriptor_Msg_VerifyInvariant,
      callback);
};


/**
 * @param {!proto.cosmos.crisis.v1beta1.MsgVerifyInvariant} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.crisis.v1beta1.MsgVerifyInvariantResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.crisis.v1beta1.MsgPromiseClient.prototype.verifyInvariant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.crisis.v1beta1.Msg/VerifyInvariant',
      request,
      metadata || {},
      methodDescriptor_Msg_VerifyInvariant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.crisis.v1beta1.MsgUpdateParams,
 *   !proto.cosmos.crisis.v1beta1.MsgUpdateParamsResponse>}
 */
const methodDescriptor_Msg_UpdateParams = new grpc.web.MethodDescriptor(
  '/cosmos.crisis.v1beta1.Msg/UpdateParams',
  grpc.web.MethodType.UNARY,
  proto.cosmos.crisis.v1beta1.MsgUpdateParams,
  proto.cosmos.crisis.v1beta1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.cosmos.crisis.v1beta1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.crisis.v1beta1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.crisis.v1beta1.MsgUpdateParams,
 *   !proto.cosmos.crisis.v1beta1.MsgUpdateParamsResponse>}
 */
const methodInfo_Msg_UpdateParams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.crisis.v1beta1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.cosmos.crisis.v1beta1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.crisis.v1beta1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.crisis.v1beta1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.crisis.v1beta1.MsgUpdateParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.crisis.v1beta1.MsgUpdateParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.crisis.v1beta1.MsgClient.prototype.updateParams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.crisis.v1beta1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams,
      callback);
};


/**
 * @param {!proto.cosmos.crisis.v1beta1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.crisis.v1beta1.MsgUpdateParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.crisis.v1beta1.MsgPromiseClient.prototype.updateParams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.crisis.v1beta1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams);
};


module.exports = proto.cosmos.crisis.v1beta1;

