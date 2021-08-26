/**
 * @fileoverview gRPC-Web generated client stub for cosmos.evidence.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.evidence = {};
proto.cosmos.evidence.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.evidence.v1beta1.MsgClient =
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
proto.cosmos.evidence.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.evidence.v1beta1.MsgSubmitEvidence,
 *   !proto.cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse>}
 */
const methodDescriptor_Msg_SubmitEvidence = new grpc.web.MethodDescriptor(
  '/cosmos.evidence.v1beta1.Msg/SubmitEvidence',
  grpc.web.MethodType.UNARY,
  proto.cosmos.evidence.v1beta1.MsgSubmitEvidence,
  proto.cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse,
  /**
   * @param {!proto.cosmos.evidence.v1beta1.MsgSubmitEvidence} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.evidence.v1beta1.MsgSubmitEvidence,
 *   !proto.cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse>}
 */
const methodInfo_Msg_SubmitEvidence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse,
  /**
   * @param {!proto.cosmos.evidence.v1beta1.MsgSubmitEvidence} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.evidence.v1beta1.MsgSubmitEvidence} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.evidence.v1beta1.MsgClient.prototype.submitEvidence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.evidence.v1beta1.Msg/SubmitEvidence',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitEvidence,
      callback);
};


/**
 * @param {!proto.cosmos.evidence.v1beta1.MsgSubmitEvidence} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.evidence.v1beta1.MsgPromiseClient.prototype.submitEvidence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.evidence.v1beta1.Msg/SubmitEvidence',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitEvidence);
};


module.exports = proto.cosmos.evidence.v1beta1;

