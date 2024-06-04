/**
 * @fileoverview gRPC-Web generated client stub for cosmos.nft.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.nft = {};
proto.cosmos.nft.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.nft.v1beta1.MsgClient =
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
proto.cosmos.nft.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.nft.v1beta1.MsgSend,
 *   !proto.cosmos.nft.v1beta1.MsgSendResponse>}
 */
const methodDescriptor_Msg_Send = new grpc.web.MethodDescriptor(
  '/cosmos.nft.v1beta1.Msg/Send',
  grpc.web.MethodType.UNARY,
  proto.cosmos.nft.v1beta1.MsgSend,
  proto.cosmos.nft.v1beta1.MsgSendResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.MsgSend} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.MsgSendResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.nft.v1beta1.MsgSend,
 *   !proto.cosmos.nft.v1beta1.MsgSendResponse>}
 */
const methodInfo_Msg_Send = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.nft.v1beta1.MsgSendResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.MsgSend} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.MsgSendResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.nft.v1beta1.MsgSend} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.nft.v1beta1.MsgSendResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.nft.v1beta1.MsgSendResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.nft.v1beta1.MsgClient.prototype.send =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Msg/Send',
      request,
      metadata || {},
      methodDescriptor_Msg_Send,
      callback);
};


/**
 * @param {!proto.cosmos.nft.v1beta1.MsgSend} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.nft.v1beta1.MsgSendResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.nft.v1beta1.MsgPromiseClient.prototype.send =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Msg/Send',
      request,
      metadata || {},
      methodDescriptor_Msg_Send);
};


module.exports = proto.cosmos.nft.v1beta1;

