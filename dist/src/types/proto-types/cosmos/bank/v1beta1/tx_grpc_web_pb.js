/**
 * @fileoverview gRPC-Web generated client stub for cosmos.bank.v1beta1
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

var cosmos_bank_v1beta1_bank_pb = require('../../../cosmos/bank/v1beta1/bank_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js')

var amino_amino_pb = require('../../../amino/amino_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.bank = {};
proto.cosmos.bank.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.bank.v1beta1.MsgClient =
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
proto.cosmos.bank.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.bank.v1beta1.MsgSend,
 *   !proto.cosmos.bank.v1beta1.MsgSendResponse>}
 */
const methodDescriptor_Msg_Send = new grpc.web.MethodDescriptor(
  '/cosmos.bank.v1beta1.Msg/Send',
  grpc.web.MethodType.UNARY,
  proto.cosmos.bank.v1beta1.MsgSend,
  proto.cosmos.bank.v1beta1.MsgSendResponse,
  /**
   * @param {!proto.cosmos.bank.v1beta1.MsgSend} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.bank.v1beta1.MsgSendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.bank.v1beta1.MsgSend,
 *   !proto.cosmos.bank.v1beta1.MsgSendResponse>}
 */
const methodInfo_Msg_Send = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.bank.v1beta1.MsgSendResponse,
  /**
   * @param {!proto.cosmos.bank.v1beta1.MsgSend} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.bank.v1beta1.MsgSendResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.bank.v1beta1.MsgSend} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.bank.v1beta1.MsgSendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.bank.v1beta1.MsgSendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.bank.v1beta1.MsgClient.prototype.send =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/Send',
      request,
      metadata || {},
      methodDescriptor_Msg_Send,
      callback);
};


/**
 * @param {!proto.cosmos.bank.v1beta1.MsgSend} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.bank.v1beta1.MsgSendResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.bank.v1beta1.MsgPromiseClient.prototype.send =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/Send',
      request,
      metadata || {},
      methodDescriptor_Msg_Send);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.bank.v1beta1.MsgMultiSend,
 *   !proto.cosmos.bank.v1beta1.MsgMultiSendResponse>}
 */
const methodDescriptor_Msg_MultiSend = new grpc.web.MethodDescriptor(
  '/cosmos.bank.v1beta1.Msg/MultiSend',
  grpc.web.MethodType.UNARY,
  proto.cosmos.bank.v1beta1.MsgMultiSend,
  proto.cosmos.bank.v1beta1.MsgMultiSendResponse,
  /**
   * @param {!proto.cosmos.bank.v1beta1.MsgMultiSend} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.bank.v1beta1.MsgMultiSendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.bank.v1beta1.MsgMultiSend,
 *   !proto.cosmos.bank.v1beta1.MsgMultiSendResponse>}
 */
const methodInfo_Msg_MultiSend = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.bank.v1beta1.MsgMultiSendResponse,
  /**
   * @param {!proto.cosmos.bank.v1beta1.MsgMultiSend} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.bank.v1beta1.MsgMultiSendResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.bank.v1beta1.MsgMultiSend} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.bank.v1beta1.MsgMultiSendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.bank.v1beta1.MsgMultiSendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.bank.v1beta1.MsgClient.prototype.multiSend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/MultiSend',
      request,
      metadata || {},
      methodDescriptor_Msg_MultiSend,
      callback);
};


/**
 * @param {!proto.cosmos.bank.v1beta1.MsgMultiSend} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.bank.v1beta1.MsgMultiSendResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.bank.v1beta1.MsgPromiseClient.prototype.multiSend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/MultiSend',
      request,
      metadata || {},
      methodDescriptor_Msg_MultiSend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.bank.v1beta1.MsgUpdateParams,
 *   !proto.cosmos.bank.v1beta1.MsgUpdateParamsResponse>}
 */
const methodDescriptor_Msg_UpdateParams = new grpc.web.MethodDescriptor(
  '/cosmos.bank.v1beta1.Msg/UpdateParams',
  grpc.web.MethodType.UNARY,
  proto.cosmos.bank.v1beta1.MsgUpdateParams,
  proto.cosmos.bank.v1beta1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.cosmos.bank.v1beta1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.bank.v1beta1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.bank.v1beta1.MsgUpdateParams,
 *   !proto.cosmos.bank.v1beta1.MsgUpdateParamsResponse>}
 */
const methodInfo_Msg_UpdateParams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.bank.v1beta1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.cosmos.bank.v1beta1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.bank.v1beta1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.bank.v1beta1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.bank.v1beta1.MsgUpdateParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.bank.v1beta1.MsgUpdateParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.bank.v1beta1.MsgClient.prototype.updateParams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams,
      callback);
};


/**
 * @param {!proto.cosmos.bank.v1beta1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.bank.v1beta1.MsgUpdateParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.bank.v1beta1.MsgPromiseClient.prototype.updateParams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.bank.v1beta1.MsgSetSendEnabled,
 *   !proto.cosmos.bank.v1beta1.MsgSetSendEnabledResponse>}
 */
const methodDescriptor_Msg_SetSendEnabled = new grpc.web.MethodDescriptor(
  '/cosmos.bank.v1beta1.Msg/SetSendEnabled',
  grpc.web.MethodType.UNARY,
  proto.cosmos.bank.v1beta1.MsgSetSendEnabled,
  proto.cosmos.bank.v1beta1.MsgSetSendEnabledResponse,
  /**
   * @param {!proto.cosmos.bank.v1beta1.MsgSetSendEnabled} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.bank.v1beta1.MsgSetSendEnabledResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.bank.v1beta1.MsgSetSendEnabled,
 *   !proto.cosmos.bank.v1beta1.MsgSetSendEnabledResponse>}
 */
const methodInfo_Msg_SetSendEnabled = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.bank.v1beta1.MsgSetSendEnabledResponse,
  /**
   * @param {!proto.cosmos.bank.v1beta1.MsgSetSendEnabled} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.bank.v1beta1.MsgSetSendEnabledResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.bank.v1beta1.MsgSetSendEnabled} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.bank.v1beta1.MsgSetSendEnabledResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.bank.v1beta1.MsgSetSendEnabledResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.bank.v1beta1.MsgClient.prototype.setSendEnabled =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/SetSendEnabled',
      request,
      metadata || {},
      methodDescriptor_Msg_SetSendEnabled,
      callback);
};


/**
 * @param {!proto.cosmos.bank.v1beta1.MsgSetSendEnabled} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.bank.v1beta1.MsgSetSendEnabledResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.bank.v1beta1.MsgPromiseClient.prototype.setSendEnabled =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.bank.v1beta1.Msg/SetSendEnabled',
      request,
      metadata || {},
      methodDescriptor_Msg_SetSendEnabled);
};


module.exports = proto.cosmos.bank.v1beta1;

