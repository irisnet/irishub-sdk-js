/**
 * @fileoverview gRPC-Web generated client stub for cosmos.authz.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var cosmos_authz_v1beta1_authz_pb = require('../../../cosmos/authz/v1beta1/authz_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.authz = {};
proto.cosmos.authz.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.authz.v1beta1.QueryClient =
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
proto.cosmos.authz.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.authz.v1beta1.QueryGrantsRequest,
 *   !proto.cosmos.authz.v1beta1.QueryGrantsResponse>}
 */
const methodDescriptor_Query_Grants = new grpc.web.MethodDescriptor(
  '/cosmos.authz.v1beta1.Query/Grants',
  grpc.web.MethodType.UNARY,
  proto.cosmos.authz.v1beta1.QueryGrantsRequest,
  proto.cosmos.authz.v1beta1.QueryGrantsResponse,
  /**
   * @param {!proto.cosmos.authz.v1beta1.QueryGrantsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.authz.v1beta1.QueryGrantsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.authz.v1beta1.QueryGrantsRequest,
 *   !proto.cosmos.authz.v1beta1.QueryGrantsResponse>}
 */
const methodInfo_Query_Grants = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.authz.v1beta1.QueryGrantsResponse,
  /**
   * @param {!proto.cosmos.authz.v1beta1.QueryGrantsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.authz.v1beta1.QueryGrantsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.authz.v1beta1.QueryGrantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.authz.v1beta1.QueryGrantsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.authz.v1beta1.QueryGrantsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.authz.v1beta1.QueryClient.prototype.grants =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.authz.v1beta1.Query/Grants',
      request,
      metadata || {},
      methodDescriptor_Query_Grants,
      callback);
};


/**
 * @param {!proto.cosmos.authz.v1beta1.QueryGrantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.authz.v1beta1.QueryGrantsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.authz.v1beta1.QueryPromiseClient.prototype.grants =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.authz.v1beta1.Query/Grants',
      request,
      metadata || {},
      methodDescriptor_Query_Grants);
};


module.exports = proto.cosmos.authz.v1beta1;

