/**
 * @fileoverview gRPC-Web generated client stub for irismod.oracle
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.oracle = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.oracle.MsgClient =
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
proto.irismod.oracle.MsgPromiseClient =
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
 *   !proto.irismod.oracle.MsgCreateFeed,
 *   !proto.irismod.oracle.MsgCreateFeedResponse>}
 */
const methodDescriptor_Msg_CreateFeed = new grpc.web.MethodDescriptor(
  '/irismod.oracle.Msg/CreateFeed',
  grpc.web.MethodType.UNARY,
  proto.irismod.oracle.MsgCreateFeed,
  proto.irismod.oracle.MsgCreateFeedResponse,
  /**
   * @param {!proto.irismod.oracle.MsgCreateFeed} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.MsgCreateFeedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.oracle.MsgCreateFeed,
 *   !proto.irismod.oracle.MsgCreateFeedResponse>}
 */
const methodInfo_Msg_CreateFeed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.oracle.MsgCreateFeedResponse,
  /**
   * @param {!proto.irismod.oracle.MsgCreateFeed} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.MsgCreateFeedResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.oracle.MsgCreateFeed} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.oracle.MsgCreateFeedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.oracle.MsgCreateFeedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.oracle.MsgClient.prototype.createFeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.oracle.Msg/CreateFeed',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateFeed,
      callback);
};


/**
 * @param {!proto.irismod.oracle.MsgCreateFeed} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.oracle.MsgCreateFeedResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.oracle.MsgPromiseClient.prototype.createFeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.oracle.Msg/CreateFeed',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateFeed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.oracle.MsgEditFeed,
 *   !proto.irismod.oracle.MsgEditFeedResponse>}
 */
const methodDescriptor_Msg_EditFeed = new grpc.web.MethodDescriptor(
  '/irismod.oracle.Msg/EditFeed',
  grpc.web.MethodType.UNARY,
  proto.irismod.oracle.MsgEditFeed,
  proto.irismod.oracle.MsgEditFeedResponse,
  /**
   * @param {!proto.irismod.oracle.MsgEditFeed} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.MsgEditFeedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.oracle.MsgEditFeed,
 *   !proto.irismod.oracle.MsgEditFeedResponse>}
 */
const methodInfo_Msg_EditFeed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.oracle.MsgEditFeedResponse,
  /**
   * @param {!proto.irismod.oracle.MsgEditFeed} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.MsgEditFeedResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.oracle.MsgEditFeed} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.oracle.MsgEditFeedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.oracle.MsgEditFeedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.oracle.MsgClient.prototype.editFeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.oracle.Msg/EditFeed',
      request,
      metadata || {},
      methodDescriptor_Msg_EditFeed,
      callback);
};


/**
 * @param {!proto.irismod.oracle.MsgEditFeed} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.oracle.MsgEditFeedResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.oracle.MsgPromiseClient.prototype.editFeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.oracle.Msg/EditFeed',
      request,
      metadata || {},
      methodDescriptor_Msg_EditFeed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.oracle.MsgStartFeed,
 *   !proto.irismod.oracle.MsgStartFeedResponse>}
 */
const methodDescriptor_Msg_StartFeed = new grpc.web.MethodDescriptor(
  '/irismod.oracle.Msg/StartFeed',
  grpc.web.MethodType.UNARY,
  proto.irismod.oracle.MsgStartFeed,
  proto.irismod.oracle.MsgStartFeedResponse,
  /**
   * @param {!proto.irismod.oracle.MsgStartFeed} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.MsgStartFeedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.oracle.MsgStartFeed,
 *   !proto.irismod.oracle.MsgStartFeedResponse>}
 */
const methodInfo_Msg_StartFeed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.oracle.MsgStartFeedResponse,
  /**
   * @param {!proto.irismod.oracle.MsgStartFeed} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.MsgStartFeedResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.oracle.MsgStartFeed} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.oracle.MsgStartFeedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.oracle.MsgStartFeedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.oracle.MsgClient.prototype.startFeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.oracle.Msg/StartFeed',
      request,
      metadata || {},
      methodDescriptor_Msg_StartFeed,
      callback);
};


/**
 * @param {!proto.irismod.oracle.MsgStartFeed} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.oracle.MsgStartFeedResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.oracle.MsgPromiseClient.prototype.startFeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.oracle.Msg/StartFeed',
      request,
      metadata || {},
      methodDescriptor_Msg_StartFeed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.oracle.MsgPauseFeed,
 *   !proto.irismod.oracle.MsgPauseFeedResponse>}
 */
const methodDescriptor_Msg_PauseFeed = new grpc.web.MethodDescriptor(
  '/irismod.oracle.Msg/PauseFeed',
  grpc.web.MethodType.UNARY,
  proto.irismod.oracle.MsgPauseFeed,
  proto.irismod.oracle.MsgPauseFeedResponse,
  /**
   * @param {!proto.irismod.oracle.MsgPauseFeed} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.MsgPauseFeedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.oracle.MsgPauseFeed,
 *   !proto.irismod.oracle.MsgPauseFeedResponse>}
 */
const methodInfo_Msg_PauseFeed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.oracle.MsgPauseFeedResponse,
  /**
   * @param {!proto.irismod.oracle.MsgPauseFeed} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.MsgPauseFeedResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.oracle.MsgPauseFeed} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.oracle.MsgPauseFeedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.oracle.MsgPauseFeedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.oracle.MsgClient.prototype.pauseFeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.oracle.Msg/PauseFeed',
      request,
      metadata || {},
      methodDescriptor_Msg_PauseFeed,
      callback);
};


/**
 * @param {!proto.irismod.oracle.MsgPauseFeed} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.oracle.MsgPauseFeedResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.oracle.MsgPromiseClient.prototype.pauseFeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.oracle.Msg/PauseFeed',
      request,
      metadata || {},
      methodDescriptor_Msg_PauseFeed);
};


module.exports = proto.irismod.oracle;

