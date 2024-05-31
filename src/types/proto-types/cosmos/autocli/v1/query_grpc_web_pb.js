/**
 * @fileoverview gRPC-Web generated client stub for cosmos.autocli.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_autocli_v1_options_pb = require('../../../cosmos/autocli/v1/options_pb.js')

var cosmos_query_v1_query_pb = require('../../../cosmos/query/v1/query_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.autocli = {};
proto.cosmos.autocli.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.autocli.v1.QueryClient =
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
proto.cosmos.autocli.v1.QueryPromiseClient =
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
 *   !proto.cosmos.autocli.v1.AppOptionsRequest,
 *   !proto.cosmos.autocli.v1.AppOptionsResponse>}
 */
const methodDescriptor_Query_AppOptions = new grpc.web.MethodDescriptor(
  '/cosmos.autocli.v1.Query/AppOptions',
  grpc.web.MethodType.UNARY,
  proto.cosmos.autocli.v1.AppOptionsRequest,
  proto.cosmos.autocli.v1.AppOptionsResponse,
  /**
   * @param {!proto.cosmos.autocli.v1.AppOptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.autocli.v1.AppOptionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.autocli.v1.AppOptionsRequest,
 *   !proto.cosmos.autocli.v1.AppOptionsResponse>}
 */
const methodInfo_Query_AppOptions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.autocli.v1.AppOptionsResponse,
  /**
   * @param {!proto.cosmos.autocli.v1.AppOptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.autocli.v1.AppOptionsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.autocli.v1.AppOptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.autocli.v1.AppOptionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.autocli.v1.AppOptionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.autocli.v1.QueryClient.prototype.appOptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.autocli.v1.Query/AppOptions',
      request,
      metadata || {},
      methodDescriptor_Query_AppOptions,
      callback);
};


/**
 * @param {!proto.cosmos.autocli.v1.AppOptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.autocli.v1.AppOptionsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.autocli.v1.QueryPromiseClient.prototype.appOptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.autocli.v1.Query/AppOptions',
      request,
      metadata || {},
      methodDescriptor_Query_AppOptions);
};


module.exports = proto.cosmos.autocli.v1;

