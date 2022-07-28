/**
 * @fileoverview gRPC-Web generated client stub for cosmos.base.reflection.v2alpha1
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
proto.cosmos.base.reflection.v2alpha1 = require('./reflection_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServiceClient =
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
proto.cosmos.base.reflection.v2alpha1.ReflectionServicePromiseClient =
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
 *   !proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse>}
 */
const methodDescriptor_ReflectionService_GetAuthnDescriptor = new grpc.web.MethodDescriptor(
  '/cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest,
  proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse>}
 */
const methodInfo_ReflectionService_GetAuthnDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServiceClient.prototype.getAuthnDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetAuthnDescriptor,
      callback);
};


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServicePromiseClient.prototype.getAuthnDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetAuthnDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetAuthnDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse>}
 */
const methodDescriptor_ReflectionService_GetChainDescriptor = new grpc.web.MethodDescriptor(
  '/cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest,
  proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse>}
 */
const methodInfo_ReflectionService_GetChainDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServiceClient.prototype.getChainDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetChainDescriptor,
      callback);
};


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServicePromiseClient.prototype.getChainDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetChainDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetChainDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse>}
 */
const methodDescriptor_ReflectionService_GetCodecDescriptor = new grpc.web.MethodDescriptor(
  '/cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest,
  proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse>}
 */
const methodInfo_ReflectionService_GetCodecDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServiceClient.prototype.getCodecDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetCodecDescriptor,
      callback);
};


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServicePromiseClient.prototype.getCodecDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetCodecDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetCodecDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse>}
 */
const methodDescriptor_ReflectionService_GetConfigurationDescriptor = new grpc.web.MethodDescriptor(
  '/cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest,
  proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse>}
 */
const methodInfo_ReflectionService_GetConfigurationDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServiceClient.prototype.getConfigurationDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetConfigurationDescriptor,
      callback);
};


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServicePromiseClient.prototype.getConfigurationDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetConfigurationDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetConfigurationDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse>}
 */
const methodDescriptor_ReflectionService_GetQueryServicesDescriptor = new grpc.web.MethodDescriptor(
  '/cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest,
  proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse>}
 */
const methodInfo_ReflectionService_GetQueryServicesDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServiceClient.prototype.getQueryServicesDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetQueryServicesDescriptor,
      callback);
};


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServicePromiseClient.prototype.getQueryServicesDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetQueryServicesDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetQueryServicesDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse>}
 */
const methodDescriptor_ReflectionService_GetTxDescriptor = new grpc.web.MethodDescriptor(
  '/cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest,
  proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest,
 *   !proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse>}
 */
const methodInfo_ReflectionService_GetTxDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse,
  /**
   * @param {!proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServiceClient.prototype.getTxDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetTxDescriptor,
      callback);
};


/**
 * @param {!proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.reflection.v2alpha1.ReflectionServicePromiseClient.prototype.getTxDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.reflection.v2alpha1.ReflectionService/GetTxDescriptor',
      request,
      metadata || {},
      methodDescriptor_ReflectionService_GetTxDescriptor);
};


module.exports = proto.cosmos.base.reflection.v2alpha1;

