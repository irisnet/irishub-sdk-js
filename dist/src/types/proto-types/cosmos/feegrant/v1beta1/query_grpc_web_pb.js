/**
 * @fileoverview gRPC-Web generated client stub for cosmos.feegrant.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_feegrant_v1beta1_feegrant_pb = require('../../../cosmos/feegrant/v1beta1/feegrant_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.feegrant = {};
proto.cosmos.feegrant.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.feegrant.v1beta1.QueryClient =
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
proto.cosmos.feegrant.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest,
 *   !proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse>}
 */
const methodDescriptor_Query_Allowance = new grpc.web.MethodDescriptor(
  '/cosmos.feegrant.v1beta1.Query/Allowance',
  grpc.web.MethodType.UNARY,
  proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest,
  proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse,
  /**
   * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest,
 *   !proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse>}
 */
const methodInfo_Query_Allowance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse,
  /**
   * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.feegrant.v1beta1.QueryClient.prototype.allowance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.feegrant.v1beta1.Query/Allowance',
      request,
      metadata || {},
      methodDescriptor_Query_Allowance,
      callback);
};


/**
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.feegrant.v1beta1.QueryPromiseClient.prototype.allowance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.feegrant.v1beta1.Query/Allowance',
      request,
      metadata || {},
      methodDescriptor_Query_Allowance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest,
 *   !proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse>}
 */
const methodDescriptor_Query_Allowances = new grpc.web.MethodDescriptor(
  '/cosmos.feegrant.v1beta1.Query/Allowances',
  grpc.web.MethodType.UNARY,
  proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest,
  proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse,
  /**
   * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest,
 *   !proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse>}
 */
const methodInfo_Query_Allowances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse,
  /**
   * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.feegrant.v1beta1.QueryClient.prototype.allowances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.feegrant.v1beta1.Query/Allowances',
      request,
      metadata || {},
      methodDescriptor_Query_Allowances,
      callback);
};


/**
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.feegrant.v1beta1.QueryPromiseClient.prototype.allowances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.feegrant.v1beta1.Query/Allowances',
      request,
      metadata || {},
      methodDescriptor_Query_Allowances);
};


module.exports = proto.cosmos.feegrant.v1beta1;

