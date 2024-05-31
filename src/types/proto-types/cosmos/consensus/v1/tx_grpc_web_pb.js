/**
 * @fileoverview gRPC-Web generated client stub for cosmos.consensus.v1
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

var tendermint_types_params_pb = require('../../../tendermint/types/params_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.consensus = {};
proto.cosmos.consensus.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.consensus.v1.MsgClient =
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
proto.cosmos.consensus.v1.MsgPromiseClient =
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
 *   !proto.cosmos.consensus.v1.MsgUpdateParams,
 *   !proto.cosmos.consensus.v1.MsgUpdateParamsResponse>}
 */
const methodDescriptor_Msg_UpdateParams = new grpc.web.MethodDescriptor(
  '/cosmos.consensus.v1.Msg/UpdateParams',
  grpc.web.MethodType.UNARY,
  proto.cosmos.consensus.v1.MsgUpdateParams,
  proto.cosmos.consensus.v1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.cosmos.consensus.v1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.consensus.v1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.consensus.v1.MsgUpdateParams,
 *   !proto.cosmos.consensus.v1.MsgUpdateParamsResponse>}
 */
const methodInfo_Msg_UpdateParams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.consensus.v1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.cosmos.consensus.v1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.consensus.v1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.consensus.v1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.consensus.v1.MsgUpdateParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.consensus.v1.MsgUpdateParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.consensus.v1.MsgClient.prototype.updateParams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.consensus.v1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams,
      callback);
};


/**
 * @param {!proto.cosmos.consensus.v1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.consensus.v1.MsgUpdateParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.consensus.v1.MsgPromiseClient.prototype.updateParams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.consensus.v1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams);
};


module.exports = proto.cosmos.consensus.v1;

