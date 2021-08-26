/**
 * @fileoverview gRPC-Web generated client stub for cosmos.base.reflection.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.base = {};
proto.cosmos.base.reflection = {};
proto.cosmos.base.reflection.v1beta1 = require('./reflection_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.base.reflection.v1beta1.ReflectionServiceClient =
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
proto.cosmos.base.reflection.v1beta1.ReflectionServicePromiseClient =
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
 *   !proto.cosmos.base.reflection.v1beta1.ListAllInterfacesRequest,
 *   !proto.cosmos.base.reflection.v1beta1.ListAllInterfacesResponse>}
 */
const methodDescriptor_ReflectionService_ListAllInterfaces = new grpc.web.MethodDescriptor(
  '/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.reflection.v1beta1.ListAllInterfacesRequest,
  proto.cosmos.base.reflection.v1beta1.ListAllInterfacesResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v1beta1.ListAllInterfacesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v1beta1.ListAllInterfacesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.reflection.v1beta1.ListAllInterfacesRequest,
 *   !proto.cosmos.base.reflection.v1beta1.ListAllInterfacesResponse>}
 */
const methodInfo_ReflectionService_ListAllInterfaces = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.reflection.v1beta1.ListAllInterfacesResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v1beta1.ListAllInterfacesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v1beta1.ListAllInterfacesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.reflection.v1beta1.ListAllInterfacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.reflection.v1beta1.ListAllInterfacesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.reflection.v1beta1.ListAllInterfacesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.reflection.v1beta1.ReflectionServiceClient.prototype.listAllInterfaces =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_ListAllInterfaces,
      callback);
};


/**
 * @param {!proto.cosmos.base.reflection.v1beta1.ListAllInterfacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.reflection.v1beta1.ListAllInterfacesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.reflection.v1beta1.ReflectionServicePromiseClient.prototype.listAllInterfaces =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.reflection.v1beta1.ReflectionService/ListAllInterfaces',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_ListAllInterfaces);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.reflection.v1beta1.ListImplementationsRequest,
 *   !proto.cosmos.base.reflection.v1beta1.ListImplementationsResponse>}
 */
const methodDescriptor_ReflectionService_ListImplementations = new grpc.web.MethodDescriptor(
  '/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.reflection.v1beta1.ListImplementationsRequest,
  proto.cosmos.base.reflection.v1beta1.ListImplementationsResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v1beta1.ListImplementationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v1beta1.ListImplementationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.reflection.v1beta1.ListImplementationsRequest,
 *   !proto.cosmos.base.reflection.v1beta1.ListImplementationsResponse>}
 */
const methodInfo_ReflectionService_ListImplementations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.reflection.v1beta1.ListImplementationsResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v1beta1.ListImplementationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v1beta1.ListImplementationsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.reflection.v1beta1.ListImplementationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.reflection.v1beta1.ListImplementationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.reflection.v1beta1.ListImplementationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.reflection.v1beta1.ReflectionServiceClient.prototype.listImplementations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_ListImplementations,
      callback);
};


/**
 * @param {!proto.cosmos.base.reflection.v1beta1.ListImplementationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.reflection.v1beta1.ListImplementationsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.reflection.v1beta1.ReflectionServicePromiseClient.prototype.listImplementations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.reflection.v1beta1.ReflectionService/ListImplementations',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_ListImplementations);
};


module.exports = proto.cosmos.base.reflection.v1beta1;

