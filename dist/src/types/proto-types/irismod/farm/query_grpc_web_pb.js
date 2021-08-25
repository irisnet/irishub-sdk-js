/**
 * @fileoverview gRPC-Web generated client stub for irismod.farm
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var irismod_farm_farm_pb = require('../../irismod/farm/farm_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.farm = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.farm.QueryClient =
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
proto.irismod.farm.QueryPromiseClient =
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
 *   !proto.irismod.farm.QueryFarmPoolsRequest,
 *   !proto.irismod.farm.QueryFarmPoolsResponse>}
 */
const methodDescriptor_Query_FarmPools = new grpc.web.MethodDescriptor(
  '/irismod.farm.Query/FarmPools',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.QueryFarmPoolsRequest,
  proto.irismod.farm.QueryFarmPoolsResponse,
  /**
   * @param {!proto.irismod.farm.QueryFarmPoolsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.QueryFarmPoolsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.QueryFarmPoolsRequest,
 *   !proto.irismod.farm.QueryFarmPoolsResponse>}
 */
const methodInfo_Query_FarmPools = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.QueryFarmPoolsResponse,
  /**
   * @param {!proto.irismod.farm.QueryFarmPoolsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.QueryFarmPoolsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.QueryFarmPoolsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.QueryFarmPoolsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.QueryFarmPoolsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.QueryClient.prototype.farmPools =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Query/FarmPools',
      request,
      metadata || {},
      methodDescriptor_Query_FarmPools,
      callback);
};


/**
 * @param {!proto.irismod.farm.QueryFarmPoolsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.QueryFarmPoolsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.QueryPromiseClient.prototype.farmPools =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Query/FarmPools',
      request,
      metadata || {},
      methodDescriptor_Query_FarmPools);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.farm.QueryFarmPoolRequest,
 *   !proto.irismod.farm.QueryFarmPoolResponse>}
 */
const methodDescriptor_Query_FarmPool = new grpc.web.MethodDescriptor(
  '/irismod.farm.Query/FarmPool',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.QueryFarmPoolRequest,
  proto.irismod.farm.QueryFarmPoolResponse,
  /**
   * @param {!proto.irismod.farm.QueryFarmPoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.QueryFarmPoolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.QueryFarmPoolRequest,
 *   !proto.irismod.farm.QueryFarmPoolResponse>}
 */
const methodInfo_Query_FarmPool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.QueryFarmPoolResponse,
  /**
   * @param {!proto.irismod.farm.QueryFarmPoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.QueryFarmPoolResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.QueryFarmPoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.QueryFarmPoolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.QueryFarmPoolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.QueryClient.prototype.farmPool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Query/FarmPool',
      request,
      metadata || {},
      methodDescriptor_Query_FarmPool,
      callback);
};


/**
 * @param {!proto.irismod.farm.QueryFarmPoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.QueryFarmPoolResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.QueryPromiseClient.prototype.farmPool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Query/FarmPool',
      request,
      metadata || {},
      methodDescriptor_Query_FarmPool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.farm.QueryFarmerRequest,
 *   !proto.irismod.farm.QueryFarmerResponse>}
 */
const methodDescriptor_Query_Farmer = new grpc.web.MethodDescriptor(
  '/irismod.farm.Query/Farmer',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.QueryFarmerRequest,
  proto.irismod.farm.QueryFarmerResponse,
  /**
   * @param {!proto.irismod.farm.QueryFarmerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.QueryFarmerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.QueryFarmerRequest,
 *   !proto.irismod.farm.QueryFarmerResponse>}
 */
const methodInfo_Query_Farmer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.QueryFarmerResponse,
  /**
   * @param {!proto.irismod.farm.QueryFarmerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.QueryFarmerResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.QueryFarmerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.QueryFarmerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.QueryFarmerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.QueryClient.prototype.farmer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Query/Farmer',
      request,
      metadata || {},
      methodDescriptor_Query_Farmer,
      callback);
};


/**
 * @param {!proto.irismod.farm.QueryFarmerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.QueryFarmerResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.QueryPromiseClient.prototype.farmer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Query/Farmer',
      request,
      metadata || {},
      methodDescriptor_Query_Farmer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.farm.QueryParamsRequest,
 *   !proto.irismod.farm.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/irismod.farm.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.irismod.farm.QueryParamsRequest,
  proto.irismod.farm.QueryParamsResponse,
  /**
   * @param {!proto.irismod.farm.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.farm.QueryParamsRequest,
 *   !proto.irismod.farm.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.farm.QueryParamsResponse,
  /**
   * @param {!proto.irismod.farm.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.farm.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.farm.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.farm.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.farm.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.farm.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.farm.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.irismod.farm.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.farm.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.farm.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.farm.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.irismod.farm;

