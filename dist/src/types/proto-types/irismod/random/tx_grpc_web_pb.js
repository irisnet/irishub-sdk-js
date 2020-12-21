/**
 * @fileoverview gRPC-Web generated client stub for irismod.random
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
proto.irismod.random = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.random.MsgClient =
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
proto.irismod.random.MsgPromiseClient =
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
 *   !proto.irismod.random.MsgRequestRandom,
 *   !proto.irismod.random.MsgRequestRandomResponse>}
 */
const methodDescriptor_Msg_RequestRandom = new grpc.web.MethodDescriptor(
  '/irismod.random.Msg/RequestRandom',
  grpc.web.MethodType.UNARY,
  proto.irismod.random.MsgRequestRandom,
  proto.irismod.random.MsgRequestRandomResponse,
  /**
   * @param {!proto.irismod.random.MsgRequestRandom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.random.MsgRequestRandomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.random.MsgRequestRandom,
 *   !proto.irismod.random.MsgRequestRandomResponse>}
 */
const methodInfo_Msg_RequestRandom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.random.MsgRequestRandomResponse,
  /**
   * @param {!proto.irismod.random.MsgRequestRandom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.random.MsgRequestRandomResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.random.MsgRequestRandom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.random.MsgRequestRandomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.random.MsgRequestRandomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.random.MsgClient.prototype.requestRandom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.random.Msg/RequestRandom',
      request,
      metadata || {},
      methodDescriptor_Msg_RequestRandom,
      callback);
};


/**
 * @param {!proto.irismod.random.MsgRequestRandom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.random.MsgRequestRandomResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.random.MsgPromiseClient.prototype.requestRandom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.random.Msg/RequestRandom',
      request,
      metadata || {},
      methodDescriptor_Msg_RequestRandom);
};


module.exports = proto.irismod.random;

