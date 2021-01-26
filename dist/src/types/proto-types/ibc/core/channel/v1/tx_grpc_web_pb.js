/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.channel.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')

var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js')

var ibc_core_channel_v1_channel_pb = require('../../../../ibc/core/channel/v1/channel_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.core = {};
proto.ibc.core.channel = {};
proto.ibc.core.channel.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.core.channel.v1.MsgClient =
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
proto.ibc.core.channel.v1.MsgPromiseClient =
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
 *   !proto.ibc.core.channel.v1.MsgChannelOpenInit,
 *   !proto.ibc.core.channel.v1.MsgChannelOpenInitResponse>}
 */
const methodDescriptor_Msg_ChannelOpenInit = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/ChannelOpenInit',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgChannelOpenInit,
  proto.ibc.core.channel.v1.MsgChannelOpenInitResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelOpenInit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelOpenInitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgChannelOpenInit,
 *   !proto.ibc.core.channel.v1.MsgChannelOpenInitResponse>}
 */
const methodInfo_Msg_ChannelOpenInit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgChannelOpenInitResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelOpenInit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelOpenInitResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelOpenInit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgChannelOpenInitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgChannelOpenInitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.channelOpenInit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenInit',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelOpenInit,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelOpenInit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgChannelOpenInitResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.channelOpenInit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenInit',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelOpenInit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.MsgChannelOpenTry,
 *   !proto.ibc.core.channel.v1.MsgChannelOpenTryResponse>}
 */
const methodDescriptor_Msg_ChannelOpenTry = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/ChannelOpenTry',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgChannelOpenTry,
  proto.ibc.core.channel.v1.MsgChannelOpenTryResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelOpenTry} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelOpenTryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgChannelOpenTry,
 *   !proto.ibc.core.channel.v1.MsgChannelOpenTryResponse>}
 */
const methodInfo_Msg_ChannelOpenTry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgChannelOpenTryResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelOpenTry} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelOpenTryResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelOpenTry} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgChannelOpenTryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgChannelOpenTryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.channelOpenTry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenTry',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelOpenTry,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelOpenTry} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgChannelOpenTryResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.channelOpenTry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenTry',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelOpenTry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.MsgChannelOpenAck,
 *   !proto.ibc.core.channel.v1.MsgChannelOpenAckResponse>}
 */
const methodDescriptor_Msg_ChannelOpenAck = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/ChannelOpenAck',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgChannelOpenAck,
  proto.ibc.core.channel.v1.MsgChannelOpenAckResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelOpenAck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelOpenAckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgChannelOpenAck,
 *   !proto.ibc.core.channel.v1.MsgChannelOpenAckResponse>}
 */
const methodInfo_Msg_ChannelOpenAck = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgChannelOpenAckResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelOpenAck} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelOpenAckResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelOpenAck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgChannelOpenAckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgChannelOpenAckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.channelOpenAck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenAck',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelOpenAck,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelOpenAck} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgChannelOpenAckResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.channelOpenAck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenAck',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelOpenAck);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.MsgChannelOpenConfirm,
 *   !proto.ibc.core.channel.v1.MsgChannelOpenConfirmResponse>}
 */
const methodDescriptor_Msg_ChannelOpenConfirm = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/ChannelOpenConfirm',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgChannelOpenConfirm,
  proto.ibc.core.channel.v1.MsgChannelOpenConfirmResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelOpenConfirm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelOpenConfirmResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgChannelOpenConfirm,
 *   !proto.ibc.core.channel.v1.MsgChannelOpenConfirmResponse>}
 */
const methodInfo_Msg_ChannelOpenConfirm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgChannelOpenConfirmResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelOpenConfirm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelOpenConfirmResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelOpenConfirm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgChannelOpenConfirmResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgChannelOpenConfirmResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.channelOpenConfirm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenConfirm',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelOpenConfirm,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelOpenConfirm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgChannelOpenConfirmResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.channelOpenConfirm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelOpenConfirm',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelOpenConfirm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.MsgChannelCloseInit,
 *   !proto.ibc.core.channel.v1.MsgChannelCloseInitResponse>}
 */
const methodDescriptor_Msg_ChannelCloseInit = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/ChannelCloseInit',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgChannelCloseInit,
  proto.ibc.core.channel.v1.MsgChannelCloseInitResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelCloseInit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelCloseInitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgChannelCloseInit,
 *   !proto.ibc.core.channel.v1.MsgChannelCloseInitResponse>}
 */
const methodInfo_Msg_ChannelCloseInit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgChannelCloseInitResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelCloseInit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelCloseInitResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelCloseInit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgChannelCloseInitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgChannelCloseInitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.channelCloseInit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelCloseInit',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelCloseInit,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelCloseInit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgChannelCloseInitResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.channelCloseInit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelCloseInit',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelCloseInit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.MsgChannelCloseConfirm,
 *   !proto.ibc.core.channel.v1.MsgChannelCloseConfirmResponse>}
 */
const methodDescriptor_Msg_ChannelCloseConfirm = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/ChannelCloseConfirm',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgChannelCloseConfirm,
  proto.ibc.core.channel.v1.MsgChannelCloseConfirmResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelCloseConfirm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelCloseConfirmResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgChannelCloseConfirm,
 *   !proto.ibc.core.channel.v1.MsgChannelCloseConfirmResponse>}
 */
const methodInfo_Msg_ChannelCloseConfirm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgChannelCloseConfirmResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgChannelCloseConfirm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgChannelCloseConfirmResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelCloseConfirm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgChannelCloseConfirmResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgChannelCloseConfirmResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.channelCloseConfirm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelCloseConfirm',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelCloseConfirm,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgChannelCloseConfirm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgChannelCloseConfirmResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.channelCloseConfirm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/ChannelCloseConfirm',
      request,
      metadata || {},
      methodDescriptor_Msg_ChannelCloseConfirm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.MsgRecvPacket,
 *   !proto.ibc.core.channel.v1.MsgRecvPacketResponse>}
 */
const methodDescriptor_Msg_RecvPacket = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/RecvPacket',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgRecvPacket,
  proto.ibc.core.channel.v1.MsgRecvPacketResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgRecvPacket} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgRecvPacketResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgRecvPacket,
 *   !proto.ibc.core.channel.v1.MsgRecvPacketResponse>}
 */
const methodInfo_Msg_RecvPacket = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgRecvPacketResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgRecvPacket} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgRecvPacketResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgRecvPacket} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgRecvPacketResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgRecvPacketResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.recvPacket =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/RecvPacket',
      request,
      metadata || {},
      methodDescriptor_Msg_RecvPacket,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgRecvPacket} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgRecvPacketResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.recvPacket =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/RecvPacket',
      request,
      metadata || {},
      methodDescriptor_Msg_RecvPacket);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.MsgTimeout,
 *   !proto.ibc.core.channel.v1.MsgTimeoutResponse>}
 */
const methodDescriptor_Msg_Timeout = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/Timeout',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgTimeout,
  proto.ibc.core.channel.v1.MsgTimeoutResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgTimeout} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgTimeoutResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgTimeout,
 *   !proto.ibc.core.channel.v1.MsgTimeoutResponse>}
 */
const methodInfo_Msg_Timeout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgTimeoutResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgTimeout} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgTimeoutResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgTimeout} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgTimeoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgTimeoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.timeout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/Timeout',
      request,
      metadata || {},
      methodDescriptor_Msg_Timeout,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgTimeout} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgTimeoutResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.timeout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/Timeout',
      request,
      metadata || {},
      methodDescriptor_Msg_Timeout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.MsgTimeoutOnClose,
 *   !proto.ibc.core.channel.v1.MsgTimeoutOnCloseResponse>}
 */
const methodDescriptor_Msg_TimeoutOnClose = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/TimeoutOnClose',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgTimeoutOnClose,
  proto.ibc.core.channel.v1.MsgTimeoutOnCloseResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgTimeoutOnClose} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgTimeoutOnCloseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgTimeoutOnClose,
 *   !proto.ibc.core.channel.v1.MsgTimeoutOnCloseResponse>}
 */
const methodInfo_Msg_TimeoutOnClose = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgTimeoutOnCloseResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgTimeoutOnClose} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgTimeoutOnCloseResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgTimeoutOnClose} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgTimeoutOnCloseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgTimeoutOnCloseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.timeoutOnClose =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/TimeoutOnClose',
      request,
      metadata || {},
      methodDescriptor_Msg_TimeoutOnClose,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgTimeoutOnClose} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgTimeoutOnCloseResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.timeoutOnClose =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/TimeoutOnClose',
      request,
      metadata || {},
      methodDescriptor_Msg_TimeoutOnClose);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.MsgAcknowledgement,
 *   !proto.ibc.core.channel.v1.MsgAcknowledgementResponse>}
 */
const methodDescriptor_Msg_Acknowledgement = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Msg/Acknowledgement',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.MsgAcknowledgement,
  proto.ibc.core.channel.v1.MsgAcknowledgementResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgAcknowledgement} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgAcknowledgementResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.MsgAcknowledgement,
 *   !proto.ibc.core.channel.v1.MsgAcknowledgementResponse>}
 */
const methodInfo_Msg_Acknowledgement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.MsgAcknowledgementResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.MsgAcknowledgement} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.MsgAcknowledgementResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.MsgAcknowledgement} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.MsgAcknowledgementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.MsgAcknowledgementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.MsgClient.prototype.acknowledgement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/Acknowledgement',
      request,
      metadata || {},
      methodDescriptor_Msg_Acknowledgement,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.MsgAcknowledgement} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.MsgAcknowledgementResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.MsgPromiseClient.prototype.acknowledgement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Msg/Acknowledgement',
      request,
      metadata || {},
      methodDescriptor_Msg_Acknowledgement);
};


module.exports = proto.ibc.core.channel.v1;

