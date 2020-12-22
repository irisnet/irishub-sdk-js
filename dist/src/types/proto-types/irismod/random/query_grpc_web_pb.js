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


var irismod_random_random_pb = require('../../irismod/random/random_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.random = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.random.QueryClient =
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
proto.irismod.random.QueryPromiseClient =
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
 *   !proto.irismod.random.QueryRandomRequest,
 *   !proto.irismod.random.QueryRandomResponse>}
 */
const methodDescriptor_Query_Random = new grpc.web.MethodDescriptor(
  '/irismod.random.Query/Random',
  grpc.web.MethodType.UNARY,
  proto.irismod.random.QueryRandomRequest,
  proto.irismod.random.QueryRandomResponse,
  /**
   * @param {!proto.irismod.random.QueryRandomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.random.QueryRandomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.random.QueryRandomRequest,
 *   !proto.irismod.random.QueryRandomResponse>}
 */
const methodInfo_Query_Random = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.random.QueryRandomResponse,
  /**
   * @param {!proto.irismod.random.QueryRandomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.random.QueryRandomResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.random.QueryRandomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.random.QueryRandomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.random.QueryRandomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.random.QueryClient.prototype.random =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.random.Query/Random',
      request,
      metadata || {},
      methodDescriptor_Query_Random,
      callback);
};


/**
 * @param {!proto.irismod.random.QueryRandomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.random.QueryRandomResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.random.QueryPromiseClient.prototype.random =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.random.Query/Random',
      request,
      metadata || {},
      methodDescriptor_Query_Random);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.random.QueryRandomRequestQueueRequest,
 *   !proto.irismod.random.QueryRandomRequestQueueResponse>}
 */
const methodDescriptor_Query_RandomRequestQueue = new grpc.web.MethodDescriptor(
  '/irismod.random.Query/RandomRequestQueue',
  grpc.web.MethodType.UNARY,
  proto.irismod.random.QueryRandomRequestQueueRequest,
  proto.irismod.random.QueryRandomRequestQueueResponse,
  /**
   * @param {!proto.irismod.random.QueryRandomRequestQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.random.QueryRandomRequestQueueResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.random.QueryRandomRequestQueueRequest,
 *   !proto.irismod.random.QueryRandomRequestQueueResponse>}
 */
const methodInfo_Query_RandomRequestQueue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.random.QueryRandomRequestQueueResponse,
  /**
   * @param {!proto.irismod.random.QueryRandomRequestQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.random.QueryRandomRequestQueueResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.random.QueryRandomRequestQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.random.QueryRandomRequestQueueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.random.QueryRandomRequestQueueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.random.QueryClient.prototype.randomRequestQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.random.Query/RandomRequestQueue',
      request,
      metadata || {},
      methodDescriptor_Query_RandomRequestQueue,
      callback);
};


/**
 * @param {!proto.irismod.random.QueryRandomRequestQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.random.QueryRandomRequestQueueResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.random.QueryPromiseClient.prototype.randomRequestQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.random.Query/RandomRequestQueue',
      request,
      metadata || {},
      methodDescriptor_Query_RandomRequestQueue);
};


module.exports = proto.irismod.random;

