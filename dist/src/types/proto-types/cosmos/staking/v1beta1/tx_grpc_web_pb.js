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

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js')

var amino_amino_pb = require('../../../amino/amino_pb.js')
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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegation,
 *   !proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse>}
 */
const methodDescriptor_Msg_CancelUnbondingDelegation = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/CancelUnbondingDelegation',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegation,
  proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegation} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegation,
 *   !proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse>}
 */
const methodInfo_Msg_CancelUnbondingDelegation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegation} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegation} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.cancelUnbondingDelegation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/CancelUnbondingDelegation',
      request,
      metadata || {},
      methodDescriptor_Msg_CancelUnbondingDelegation,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegation} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.cancelUnbondingDelegation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/CancelUnbondingDelegation',
      request,
      metadata || {},
      methodDescriptor_Msg_CancelUnbondingDelegation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgUpdateParams,
 *   !proto.cosmos.staking.v1beta1.MsgUpdateParamsResponse>}
 */
const methodDescriptor_Msg_UpdateParams = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/UpdateParams',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgUpdateParams,
  proto.cosmos.staking.v1beta1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgUpdateParams,
 *   !proto.cosmos.staking.v1beta1.MsgUpdateParamsResponse>}
 */
const methodInfo_Msg_UpdateParams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgUpdateParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgUpdateParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.updateParams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgUpdateParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.updateParams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgUnbondValidator,
 *   !proto.cosmos.staking.v1beta1.MsgUnbondValidatorResponse>}
 */
const methodDescriptor_Msg_UnbondValidator = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/UnbondValidator',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgUnbondValidator,
  proto.cosmos.staking.v1beta1.MsgUnbondValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgUnbondValidator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgUnbondValidatorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgUnbondValidator,
 *   !proto.cosmos.staking.v1beta1.MsgUnbondValidatorResponse>}
 */
const methodInfo_Msg_UnbondValidator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgUnbondValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgUnbondValidator} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgUnbondValidatorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgUnbondValidator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgUnbondValidatorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgUnbondValidatorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.unbondValidator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/UnbondValidator',
      request,
      metadata || {},
      methodDescriptor_Msg_UnbondValidator,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgUnbondValidator} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgUnbondValidatorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.unbondValidator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/UnbondValidator',
      request,
      metadata || {},
      methodDescriptor_Msg_UnbondValidator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgTokenizeShares,
 *   !proto.cosmos.staking.v1beta1.MsgTokenizeSharesResponse>}
 */
const methodDescriptor_Msg_TokenizeShares = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/TokenizeShares',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgTokenizeShares,
  proto.cosmos.staking.v1beta1.MsgTokenizeSharesResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgTokenizeShares} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgTokenizeSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgTokenizeShares,
 *   !proto.cosmos.staking.v1beta1.MsgTokenizeSharesResponse>}
 */
const methodInfo_Msg_TokenizeShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgTokenizeSharesResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgTokenizeShares} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgTokenizeSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgTokenizeShares} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgTokenizeSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgTokenizeSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.tokenizeShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/TokenizeShares',
      request,
      metadata || {},
      methodDescriptor_Msg_TokenizeShares,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgTokenizeShares} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgTokenizeSharesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.tokenizeShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/TokenizeShares',
      request,
      metadata || {},
      methodDescriptor_Msg_TokenizeShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgRedeemTokensForShares,
 *   !proto.cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse>}
 */
const methodDescriptor_Msg_RedeemTokensForShares = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/RedeemTokensForShares',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgRedeemTokensForShares,
  proto.cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgRedeemTokensForShares} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgRedeemTokensForShares,
 *   !proto.cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse>}
 */
const methodInfo_Msg_RedeemTokensForShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgRedeemTokensForShares} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgRedeemTokensForShares} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.redeemTokensForShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/RedeemTokensForShares',
      request,
      metadata || {},
      methodDescriptor_Msg_RedeemTokensForShares,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgRedeemTokensForShares} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.redeemTokensForShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/RedeemTokensForShares',
      request,
      metadata || {},
      methodDescriptor_Msg_RedeemTokensForShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord,
 *   !proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse>}
 */
const methodDescriptor_Msg_TransferTokenizeShareRecord = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/TransferTokenizeShareRecord',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord,
  proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord,
 *   !proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse>}
 */
const methodInfo_Msg_TransferTokenizeShareRecord = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.transferTokenizeShareRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/TransferTokenizeShareRecord',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferTokenizeShareRecord,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.transferTokenizeShareRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/TransferTokenizeShareRecord',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferTokenizeShareRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgDisableTokenizeShares,
 *   !proto.cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse>}
 */
const methodDescriptor_Msg_DisableTokenizeShares = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/DisableTokenizeShares',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgDisableTokenizeShares,
  proto.cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgDisableTokenizeShares} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgDisableTokenizeShares,
 *   !proto.cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse>}
 */
const methodInfo_Msg_DisableTokenizeShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgDisableTokenizeShares} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgDisableTokenizeShares} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.disableTokenizeShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/DisableTokenizeShares',
      request,
      metadata || {},
      methodDescriptor_Msg_DisableTokenizeShares,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgDisableTokenizeShares} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.disableTokenizeShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/DisableTokenizeShares',
      request,
      metadata || {},
      methodDescriptor_Msg_DisableTokenizeShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgEnableTokenizeShares,
 *   !proto.cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse>}
 */
const methodDescriptor_Msg_EnableTokenizeShares = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/EnableTokenizeShares',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgEnableTokenizeShares,
  proto.cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgEnableTokenizeShares} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgEnableTokenizeShares,
 *   !proto.cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse>}
 */
const methodInfo_Msg_EnableTokenizeShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgEnableTokenizeShares} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgEnableTokenizeShares} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.enableTokenizeShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/EnableTokenizeShares',
      request,
      metadata || {},
      methodDescriptor_Msg_EnableTokenizeShares,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgEnableTokenizeShares} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.enableTokenizeShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/EnableTokenizeShares',
      request,
      metadata || {},
      methodDescriptor_Msg_EnableTokenizeShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.MsgValidatorBond,
 *   !proto.cosmos.staking.v1beta1.MsgValidatorBondResponse>}
 */
const methodDescriptor_Msg_ValidatorBond = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Msg/ValidatorBond',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.MsgValidatorBond,
  proto.cosmos.staking.v1beta1.MsgValidatorBondResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgValidatorBond} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgValidatorBondResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.MsgValidatorBond,
 *   !proto.cosmos.staking.v1beta1.MsgValidatorBondResponse>}
 */
const methodInfo_Msg_ValidatorBond = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.MsgValidatorBondResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.MsgValidatorBond} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.MsgValidatorBondResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgValidatorBond} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.MsgValidatorBondResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.MsgValidatorBondResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.MsgClient.prototype.validatorBond =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/ValidatorBond',
      request,
      metadata || {},
      methodDescriptor_Msg_ValidatorBond,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.MsgValidatorBond} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.MsgValidatorBondResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.MsgPromiseClient.prototype.validatorBond =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Msg/ValidatorBond',
      request,
      metadata || {},
      methodDescriptor_Msg_ValidatorBond);
};


module.exports = proto.cosmos.staking.v1beta1;

