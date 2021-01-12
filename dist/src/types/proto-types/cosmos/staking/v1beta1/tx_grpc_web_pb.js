/**
 * @fileoverview gRPC-Web generated client stub for cosmos.staking.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_staking_v1beta1_staking_pb = require('../../../cosmos/staking/v1beta1/staking_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.staking = {};
proto.cosmos.staking.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.staking.v1beta1.MsgClient =
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
proto.cosmos.staking.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.staking.v1beta1.MsgCreateValidator,
 *   !proto.cosmos.staking.v1beta1.MsgCreateValidatorResponse>}
 */
const methodDescriptor_Msg_CreateValidator = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/CreateValidator',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgCreateValidator,
  proto.cosmos.staking.v1beta1.MsgCreateValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgCreateValidator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgCreateValidatorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgCreateValidator,
 *   !proto.cosmos.staking.v1beta1.MsgCreateValidatorResponse>}
 */
const methodInfo_Msg_CreateValidator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgCreateValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgCreateValidator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgCreateValidatorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgCreateValidator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgCreateValidatorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgCreateValidatorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.createValidator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/CreateValidator',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateValidator,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgCreateValidator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgCreateValidatorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.createValidator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/CreateValidator',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateValidator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgEditValidator,
 *   !proto.cosmos.staking.v1beta1.MsgEditValidatorResponse>}
 */
const methodDescriptor_Msg_EditValidator = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/EditValidator',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgEditValidator,
  proto.cosmos.staking.v1beta1.MsgEditValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgEditValidator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgEditValidatorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgEditValidator,
 *   !proto.cosmos.staking.v1beta1.MsgEditValidatorResponse>}
 */
const methodInfo_Msg_EditValidator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgEditValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgEditValidator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgEditValidatorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgEditValidator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgEditValidatorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgEditValidatorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.editValidator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/EditValidator',
      request,
      metadata || {},
      methodDescriptor_Msg_EditValidator,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgEditValidator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgEditValidatorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.editValidator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/EditValidator',
      request,
      metadata || {},
      methodDescriptor_Msg_EditValidator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgDelegate,
 *   !proto.cosmos.staking.v1beta1.MsgDelegateResponse>}
 */
const methodDescriptor_Msg_Delegate = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/Delegate',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgDelegate,
  proto.cosmos.staking.v1beta1.MsgDelegateResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgDelegate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgDelegateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgDelegate,
 *   !proto.cosmos.staking.v1beta1.MsgDelegateResponse>}
 */
const methodInfo_Msg_Delegate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgDelegateResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgDelegate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgDelegateResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgDelegate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgDelegateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgDelegateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.delegate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/Delegate',
      request,
      metadata || {},
      methodDescriptor_Msg_Delegate,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgDelegate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgDelegateResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.delegate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/Delegate',
      request,
      metadata || {},
      methodDescriptor_Msg_Delegate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgBeginRedelegate,
 *   !proto.cosmos.staking.v1beta1.MsgBeginRedelegateResponse>}
 */
const methodDescriptor_Msg_BeginRedelegate = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/BeginRedelegate',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgBeginRedelegate,
  proto.cosmos.staking.v1beta1.MsgBeginRedelegateResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgBeginRedelegate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgBeginRedelegateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgBeginRedelegate,
 *   !proto.cosmos.staking.v1beta1.MsgBeginRedelegateResponse>}
 */
const methodInfo_Msg_BeginRedelegate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgBeginRedelegateResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgBeginRedelegate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgBeginRedelegateResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgBeginRedelegate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgBeginRedelegateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgBeginRedelegateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.beginRedelegate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/BeginRedelegate',
      request,
      metadata || {},
      methodDescriptor_Msg_BeginRedelegate,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgBeginRedelegate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgBeginRedelegateResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.beginRedelegate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/BeginRedelegate',
      request,
      metadata || {},
      methodDescriptor_Msg_BeginRedelegate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgUndelegate,
 *   !proto.cosmos.staking.v1beta1.MsgUndelegateResponse>}
 */
const methodDescriptor_Msg_Undelegate = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/Undelegate',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgUndelegate,
  proto.cosmos.staking.v1beta1.MsgUndelegateResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgUndelegate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgUndelegateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgUndelegate,
 *   !proto.cosmos.staking.v1beta1.MsgUndelegateResponse>}
 */
const methodInfo_Msg_Undelegate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgUndelegateResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgUndelegate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgUndelegateResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgUndelegate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgUndelegateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgUndelegateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.undelegate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/Undelegate',
      request,
      metadata || {},
      methodDescriptor_Msg_Undelegate,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgUndelegate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgUndelegateResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.undelegate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/Undelegate',
      request,
      metadata || {},
      methodDescriptor_Msg_Undelegate);
};


module.exports = proto.cosmos.staking.v1beta1;

