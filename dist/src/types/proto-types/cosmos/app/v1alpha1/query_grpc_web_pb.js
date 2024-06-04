/**
 * @fileoverview gRPC-Web generated client stub for cosmos.app.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_app_v1alpha1_config_pb = require('../../../cosmos/app/v1alpha1/config_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.app = {};
proto.cosmos.app.v1alpha1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.app.v1alpha1.QueryClient =
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
proto.cosmos.app.v1alpha1.QueryPromiseClient =
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
 *   !proto.cosmos.app.v1alpha1.QueryConfigRequest,
 *   !proto.cosmos.app.v1alpha1.QueryConfigResponse>}
 */
const methodDescriptor_Query_Config = new grpc.web.MethodDescriptor(
  '/cosmos.app.v1alpha1.Query/Config',
  grpc.web.MethodType.UNARY,
  proto.cosmos.app.v1alpha1.QueryConfigRequest,
  proto.cosmos.app.v1alpha1.QueryConfigResponse,
  /**
   * @param {!proto.cosmos.app.v1alpha1.QueryConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.app.v1alpha1.QueryConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.app.v1alpha1.QueryConfigRequest,
 *   !proto.cosmos.app.v1alpha1.QueryConfigResponse>}
 */
const methodInfo_Query_Config = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.app.v1alpha1.QueryConfigResponse,
  /**
   * @param {!proto.cosmos.app.v1alpha1.QueryConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.app.v1alpha1.QueryConfigResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.app.v1alpha1.QueryConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.app.v1alpha1.QueryConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.app.v1alpha1.QueryConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.app.v1alpha1.QueryClient.prototype.config =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.app.v1alpha1.Query/Config',
      request,
      metadata || {},
      methodDescriptor_Query_Config,
      callback);
};


/**
 * @param {!proto.cosmos.app.v1alpha1.QueryConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.app.v1alpha1.QueryConfigResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.app.v1alpha1.QueryPromiseClient.prototype.config =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.app.v1alpha1.Query/Config',
      request,
      metadata || {},
      methodDescriptor_Query_Config);
};


module.exports = proto.cosmos.app.v1alpha1;

