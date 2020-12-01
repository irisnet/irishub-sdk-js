/**
 * @fileoverview gRPC-Web generated client stub for irismod.oracle
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var irismod_oracle_oracle_pb = require('../../irismod/oracle/oracle_pb.js')

var irismod_service_service_pb = require('../../irismod/service/service_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.oracle = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.oracle.QueryClient =
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
proto.irismod.oracle.QueryPromiseClient =
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
 *   !proto.irismod.oracle.QueryFeedRequest,
 *   !proto.irismod.oracle.QueryFeedResponse>}
 */
const methodDescriptor_Query_Feed = new grpc.web.MethodDescriptor(
  '/irismod.oracle.Query/Feed',
  grpc.web.MethodType.UNARY,
  proto.irismod.oracle.QueryFeedRequest,
  proto.irismod.oracle.QueryFeedResponse,
  /**
   * @param {!proto.irismod.oracle.QueryFeedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.QueryFeedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.oracle.QueryFeedRequest,
 *   !proto.irismod.oracle.QueryFeedResponse>}
 */
const methodInfo_Query_Feed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.oracle.QueryFeedResponse,
  /**
   * @param {!proto.irismod.oracle.QueryFeedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.QueryFeedResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.oracle.QueryFeedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.oracle.QueryFeedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.oracle.QueryFeedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.oracle.QueryClient.prototype.feed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.oracle.Query/Feed',
      request,
      metadata || {},
      methodDescriptor_Query_Feed,
      callback);
};


/**
 * @param {!proto.irismod.oracle.QueryFeedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.oracle.QueryFeedResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.oracle.QueryPromiseClient.prototype.feed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.oracle.Query/Feed',
      request,
      metadata || {},
      methodDescriptor_Query_Feed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.oracle.QueryFeedsRequest,
 *   !proto.irismod.oracle.QueryFeedsResponse>}
 */
const methodDescriptor_Query_Feeds = new grpc.web.MethodDescriptor(
  '/irismod.oracle.Query/Feeds',
  grpc.web.MethodType.UNARY,
  proto.irismod.oracle.QueryFeedsRequest,
  proto.irismod.oracle.QueryFeedsResponse,
  /**
   * @param {!proto.irismod.oracle.QueryFeedsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.QueryFeedsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.oracle.QueryFeedsRequest,
 *   !proto.irismod.oracle.QueryFeedsResponse>}
 */
const methodInfo_Query_Feeds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.oracle.QueryFeedsResponse,
  /**
   * @param {!proto.irismod.oracle.QueryFeedsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.QueryFeedsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.oracle.QueryFeedsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.oracle.QueryFeedsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.oracle.QueryFeedsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.oracle.QueryClient.prototype.feeds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.oracle.Query/Feeds',
      request,
      metadata || {},
      methodDescriptor_Query_Feeds,
      callback);
};


/**
 * @param {!proto.irismod.oracle.QueryFeedsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.oracle.QueryFeedsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.oracle.QueryPromiseClient.prototype.feeds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.oracle.Query/Feeds',
      request,
      metadata || {},
      methodDescriptor_Query_Feeds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.oracle.QueryFeedValueRequest,
 *   !proto.irismod.oracle.QueryFeedValueResponse>}
 */
const methodDescriptor_Query_FeedValue = new grpc.web.MethodDescriptor(
  '/irismod.oracle.Query/FeedValue',
  grpc.web.MethodType.UNARY,
  proto.irismod.oracle.QueryFeedValueRequest,
  proto.irismod.oracle.QueryFeedValueResponse,
  /**
   * @param {!proto.irismod.oracle.QueryFeedValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.QueryFeedValueResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.oracle.QueryFeedValueRequest,
 *   !proto.irismod.oracle.QueryFeedValueResponse>}
 */
const methodInfo_Query_FeedValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.oracle.QueryFeedValueResponse,
  /**
   * @param {!proto.irismod.oracle.QueryFeedValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.oracle.QueryFeedValueResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.oracle.QueryFeedValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.oracle.QueryFeedValueResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.oracle.QueryFeedValueResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.oracle.QueryClient.prototype.feedValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.oracle.Query/FeedValue',
      request,
      metadata || {},
      methodDescriptor_Query_FeedValue,
      callback);
};


/**
 * @param {!proto.irismod.oracle.QueryFeedValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.oracle.QueryFeedValueResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.oracle.QueryPromiseClient.prototype.feedValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.oracle.Query/FeedValue',
      request,
      metadata || {},
      methodDescriptor_Query_FeedValue);
};


module.exports = proto.irismod.oracle;

