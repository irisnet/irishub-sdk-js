/**
 * @fileoverview gRPC-Web generated client stub for cosmos.mint.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_mint_v1beta1_mint_pb = require('../../../cosmos/mint/v1beta1/mint_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.mint = {};
proto.cosmos.mint.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.mint.v1beta1.QueryClient =
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
proto.cosmos.mint.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.mint.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.mint.v1beta1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/cosmos.mint.v1beta1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.cosmos.mint.v1beta1.QueryParamsRequest,
  proto.cosmos.mint.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.mint.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.mint.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.mint.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.mint.v1beta1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.mint.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.mint.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.mint.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.mint.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.mint.v1beta1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.mint.v1beta1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.mint.v1beta1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.mint.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.cosmos.mint.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.mint.v1beta1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.mint.v1beta1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.mint.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.mint.v1beta1.QueryInflationRequest,
 *   !proto.cosmos.mint.v1beta1.QueryInflationResponse>}
 */
const methodDescriptor_Query_Inflation = new grpc.web.MethodDescriptor(
  '/cosmos.mint.v1beta1.Query/Inflation',
  grpc.web.MethodType.UNARY,
  proto.cosmos.mint.v1beta1.QueryInflationRequest,
  proto.cosmos.mint.v1beta1.QueryInflationResponse,
  /**
   * @param {!proto.cosmos.mint.v1beta1.QueryInflationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.mint.v1beta1.QueryInflationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.mint.v1beta1.QueryInflationRequest,
 *   !proto.cosmos.mint.v1beta1.QueryInflationResponse>}
 */
const methodInfo_Query_Inflation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.mint.v1beta1.QueryInflationResponse,
  /**
   * @param {!proto.cosmos.mint.v1beta1.QueryInflationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.mint.v1beta1.QueryInflationResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.mint.v1beta1.QueryInflationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.mint.v1beta1.QueryInflationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.mint.v1beta1.QueryInflationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.mint.v1beta1.QueryClient.prototype.inflation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.mint.v1beta1.Query/Inflation',
      request,
      metadata || {},
      methodDescriptor_Query_Inflation,
      callback);
};


/**
 * @param {!proto.cosmos.mint.v1beta1.QueryInflationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.mint.v1beta1.QueryInflationResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.mint.v1beta1.QueryPromiseClient.prototype.inflation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.mint.v1beta1.Query/Inflation',
      request,
      metadata || {},
      methodDescriptor_Query_Inflation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.mint.v1beta1.QueryAnnualProvisionsRequest,
 *   !proto.cosmos.mint.v1beta1.QueryAnnualProvisionsResponse>}
 */
const methodDescriptor_Query_AnnualProvisions = new grpc.web.MethodDescriptor(
  '/cosmos.mint.v1beta1.Query/AnnualProvisions',
  grpc.web.MethodType.UNARY,
  proto.cosmos.mint.v1beta1.QueryAnnualProvisionsRequest,
  proto.cosmos.mint.v1beta1.QueryAnnualProvisionsResponse,
  /**
   * @param {!proto.cosmos.mint.v1beta1.QueryAnnualProvisionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.mint.v1beta1.QueryAnnualProvisionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.mint.v1beta1.QueryAnnualProvisionsRequest,
 *   !proto.cosmos.mint.v1beta1.QueryAnnualProvisionsResponse>}
 */
const methodInfo_Query_AnnualProvisions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.mint.v1beta1.QueryAnnualProvisionsResponse,
  /**
   * @param {!proto.cosmos.mint.v1beta1.QueryAnnualProvisionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.mint.v1beta1.QueryAnnualProvisionsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.mint.v1beta1.QueryAnnualProvisionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.mint.v1beta1.QueryAnnualProvisionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.mint.v1beta1.QueryAnnualProvisionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.mint.v1beta1.QueryClient.prototype.annualProvisions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.mint.v1beta1.Query/AnnualProvisions',
      request,
      metadata || {},
      methodDescriptor_Query_AnnualProvisions,
      callback);
};


/**
 * @param {!proto.cosmos.mint.v1beta1.QueryAnnualProvisionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.mint.v1beta1.QueryAnnualProvisionsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.mint.v1beta1.QueryPromiseClient.prototype.annualProvisions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.mint.v1beta1.Query/AnnualProvisions',
      request,
      metadata || {},
      methodDescriptor_Query_AnnualProvisions);
};


module.exports = proto.cosmos.mint.v1beta1;

