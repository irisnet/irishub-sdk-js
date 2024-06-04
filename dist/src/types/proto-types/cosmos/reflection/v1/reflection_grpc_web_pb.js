/**
 * @fileoverview gRPC-Web generated client stub for cosmos.reflection.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js')

var cosmos_query_v1_query_pb = require('../../../cosmos/query/v1/query_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.reflection = {};
proto.cosmos.reflection.v1 = require('./reflection_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.reflection.v1.ReflectionServiceClient =
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
proto.cosmos.reflection.v1.ReflectionServicePromiseClient =
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
 *   !proto.cosmos.reflection.v1.FileDescriptorsRequest,
 *   !proto.cosmos.reflection.v1.FileDescriptorsResponse>}
 */
const methodDescriptor_ReflectionService_FileDescriptors = new grpc.web.MethodDescriptor(
  '/cosmos.reflection.v1.ReflectionService/FileDescriptors',
  grpc.web.MethodType.UNARY,
  proto.cosmos.reflection.v1.FileDescriptorsRequest,
  proto.cosmos.reflection.v1.FileDescriptorsResponse,
  /**
   * @param {!proto.cosmos.reflection.v1.FileDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.reflection.v1.FileDescriptorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.reflection.v1.FileDescriptorsRequest,
 *   !proto.cosmos.reflection.v1.FileDescriptorsResponse>}
 */
const methodInfo_ReflectionService_FileDescriptors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.reflection.v1.FileDescriptorsResponse,
  /**
   * @param {!proto.cosmos.reflection.v1.FileDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.reflection.v1.FileDescriptorsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.reflection.v1.FileDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.reflection.v1.FileDescriptorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.reflection.v1.FileDescriptorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.reflection.v1.ReflectionServiceClient.prototype.fileDescriptors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.reflection.v1.ReflectionService/FileDescriptors',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_FileDescriptors,
      callback);
};


/**
 * @param {!proto.cosmos.reflection.v1.FileDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.reflection.v1.FileDescriptorsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.reflection.v1.ReflectionServicePromiseClient.prototype.fileDescriptors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.reflection.v1.ReflectionService/FileDescriptors',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_FileDescriptors);
};


module.exports = proto.cosmos.reflection.v1;

