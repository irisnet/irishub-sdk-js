/**
 * @fileoverview gRPC-Web generated client stub for cosmos.base.node.v1beta1
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
proto.cosmos.base.node = {};
proto.cosmos.base.node.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.base.node.v1beta1.ServiceClient =
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
proto.cosmos.base.node.v1beta1.ServicePromiseClient =
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
 *   !proto.cosmos.base.node.v1beta1.ConfigRequest,
 *   !proto.cosmos.base.node.v1beta1.ConfigResponse>}
 */
const methodDescriptor_Service_Config = new grpc.web.MethodDescriptor(
  '/cosmos.base.node.v1beta1.Service/Config',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.node.v1beta1.ConfigRequest,
  proto.cosmos.base.node.v1beta1.ConfigResponse,
  /**
   * @param {!proto.cosmos.base.node.v1beta1.ConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.node.v1beta1.ConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.node.v1beta1.ConfigRequest,
 *   !proto.cosmos.base.node.v1beta1.ConfigResponse>}
 */
const methodInfo_Service_Config = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.node.v1beta1.ConfigResponse,
  /**
   * @param {!proto.cosmos.base.node.v1beta1.ConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.node.v1beta1.ConfigResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.node.v1beta1.ConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.node.v1beta1.ConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.node.v1beta1.ConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.node.v1beta1.ServiceClient.prototype.config =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.node.v1beta1.Service/Config',
      request,
      metadata || {},
      methodDescriptor_Service_Config,
      callback);
};


/**
 * @param {!proto.cosmos.base.node.v1beta1.ConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.node.v1beta1.ConfigResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.node.v1beta1.ServicePromiseClient.prototype.config =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.node.v1beta1.Service/Config',
      request,
      metadata || {},
      methodDescriptor_Service_Config);
};


module.exports = proto.cosmos.base.node.v1beta1;

