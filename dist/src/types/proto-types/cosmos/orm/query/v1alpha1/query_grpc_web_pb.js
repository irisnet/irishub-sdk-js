/**
 * @fileoverview gRPC-Web generated client stub for cosmos.orm.query.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.orm = {};
proto.cosmos.orm.query = {};
proto.cosmos.orm.query.v1alpha1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.orm.query.v1alpha1.QueryClient =
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
proto.cosmos.orm.query.v1alpha1.QueryPromiseClient =
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
 *   !proto.cosmos.orm.query.v1alpha1.GetRequest,
 *   !proto.cosmos.orm.query.v1alpha1.GetResponse>}
 */
const methodDescriptor_Query_Get = new grpc.web.MethodDescriptor(
  '/cosmos.orm.query.v1alpha1.Query/Get',
  grpc.web.MethodType.UNARY,
  proto.cosmos.orm.query.v1alpha1.GetRequest,
  proto.cosmos.orm.query.v1alpha1.GetResponse,
  /**
   * @param {!proto.cosmos.orm.query.v1alpha1.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.orm.query.v1alpha1.GetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.orm.query.v1alpha1.GetRequest,
 *   !proto.cosmos.orm.query.v1alpha1.GetResponse>}
 */
const methodInfo_Query_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.orm.query.v1alpha1.GetResponse,
  /**
   * @param {!proto.cosmos.orm.query.v1alpha1.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.orm.query.v1alpha1.GetResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.orm.query.v1alpha1.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.orm.query.v1alpha1.GetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.orm.query.v1alpha1.GetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.orm.query.v1alpha1.QueryClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.orm.query.v1alpha1.Query/Get',
      request,
      metadata || {},
      methodDescriptor_Query_Get,
      callback);
};


/**
 * @param {!proto.cosmos.orm.query.v1alpha1.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.orm.query.v1alpha1.GetResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.orm.query.v1alpha1.QueryPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.orm.query.v1alpha1.Query/Get',
      request,
      metadata || {},
      methodDescriptor_Query_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.orm.query.v1alpha1.ListRequest,
 *   !proto.cosmos.orm.query.v1alpha1.ListResponse>}
 */
const methodDescriptor_Query_List = new grpc.web.MethodDescriptor(
  '/cosmos.orm.query.v1alpha1.Query/List',
  grpc.web.MethodType.UNARY,
  proto.cosmos.orm.query.v1alpha1.ListRequest,
  proto.cosmos.orm.query.v1alpha1.ListResponse,
  /**
   * @param {!proto.cosmos.orm.query.v1alpha1.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.orm.query.v1alpha1.ListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.orm.query.v1alpha1.ListRequest,
 *   !proto.cosmos.orm.query.v1alpha1.ListResponse>}
 */
const methodInfo_Query_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.orm.query.v1alpha1.ListResponse,
  /**
   * @param {!proto.cosmos.orm.query.v1alpha1.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.orm.query.v1alpha1.ListResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.orm.query.v1alpha1.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.orm.query.v1alpha1.ListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.orm.query.v1alpha1.ListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.orm.query.v1alpha1.QueryClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.orm.query.v1alpha1.Query/List',
      request,
      metadata || {},
      methodDescriptor_Query_List,
      callback);
};


/**
 * @param {!proto.cosmos.orm.query.v1alpha1.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.orm.query.v1alpha1.ListResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.orm.query.v1alpha1.QueryPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.orm.query.v1alpha1.Query/List',
      request,
      metadata || {},
      methodDescriptor_Query_List);
};


module.exports = proto.cosmos.orm.query.v1alpha1;

