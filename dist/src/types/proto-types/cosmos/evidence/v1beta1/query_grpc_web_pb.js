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


var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.evidence = {};
proto.cosmos.evidence.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.evidence.v1beta1.QueryClient =
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
proto.cosmos.evidence.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.evidence.v1beta1.QueryEvidenceRequest,
 *   !proto.cosmos.evidence.v1beta1.QueryEvidenceResponse>}
 */
const methodDescriptor_Query_Evidence = new grpc.web.MethodDescriptor(
  '/cosmos.evidence.v1beta1.Query/Evidence',
  grpc.web.MethodType.UNARY,
  proto.cosmos.evidence.v1beta1.QueryEvidenceRequest,
  proto.cosmos.evidence.v1beta1.QueryEvidenceResponse,
  /**
   * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.evidence.v1beta1.QueryEvidenceRequest,
 *   !proto.cosmos.evidence.v1beta1.QueryEvidenceResponse>}
 */
const methodInfo_Query_Evidence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.evidence.v1beta1.QueryEvidenceResponse,
  /**
   * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.evidence.v1beta1.QueryEvidenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.evidence.v1beta1.QueryEvidenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.evidence.v1beta1.QueryClient.prototype.evidence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.evidence.v1beta1.Query/Evidence',
      request,
      metadata || {},
      methodDescriptor_Query_Evidence,
      callback);
};


/**
 * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.evidence.v1beta1.QueryEvidenceResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.evidence.v1beta1.QueryPromiseClient.prototype.evidence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.evidence.v1beta1.Query/Evidence',
      request,
      metadata || {},
      methodDescriptor_Query_Evidence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest,
 *   !proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse>}
 */
const methodDescriptor_Query_AllEvidence = new grpc.web.MethodDescriptor(
  '/cosmos.evidence.v1beta1.Query/AllEvidence',
  grpc.web.MethodType.UNARY,
  proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest,
  proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse,
  /**
   * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest,
 *   !proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse>}
 */
const methodInfo_Query_AllEvidence = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse,
  /**
   * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.evidence.v1beta1.QueryClient.prototype.allEvidence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.evidence.v1beta1.Query/AllEvidence',
      request,
      metadata || {},
      methodDescriptor_Query_AllEvidence,
      callback);
};


/**
 * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.evidence.v1beta1.QueryPromiseClient.prototype.allEvidence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.evidence.v1beta1.Query/AllEvidence',
      request,
      metadata || {},
      methodDescriptor_Query_AllEvidence);
};


module.exports = proto.cosmos.evidence.v1beta1;

