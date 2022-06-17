/**
 * @fileoverview gRPC-Web generated client stub for irismod.mt
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var irismod_mt_mt_pb = require('../../irismod/mt/mt_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.mt = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.mt.QueryClient =
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
proto.irismod.mt.QueryPromiseClient =
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
 *   !proto.irismod.mt.QuerySupplyRequest,
 *   !proto.irismod.mt.QuerySupplyResponse>}
 */
const methodDescriptor_Query_Supply = new grpc.web.MethodDescriptor(
  '/irismod.mt.Query/Supply',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.QuerySupplyRequest,
  proto.irismod.mt.QuerySupplyResponse,
  /**
   * @param {!proto.irismod.mt.QuerySupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QuerySupplyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.QuerySupplyRequest,
 *   !proto.irismod.mt.QuerySupplyResponse>}
 */
const methodInfo_Query_Supply = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.QuerySupplyResponse,
  /**
   * @param {!proto.irismod.mt.QuerySupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QuerySupplyResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.QuerySupplyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.QuerySupplyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.QueryClient.prototype.supply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply,
      callback);
};


/**
 * @param {!proto.irismod.mt.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.QuerySupplyResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.QueryPromiseClient.prototype.supply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.QueryDenomsRequest,
 *   !proto.irismod.mt.QueryDenomsResponse>}
 */
const methodDescriptor_Query_Denoms = new grpc.web.MethodDescriptor(
  '/irismod.mt.Query/Denoms',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.QueryDenomsRequest,
  proto.irismod.mt.QueryDenomsResponse,
  /**
   * @param {!proto.irismod.mt.QueryDenomsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryDenomsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.QueryDenomsRequest,
 *   !proto.irismod.mt.QueryDenomsResponse>}
 */
const methodInfo_Query_Denoms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.QueryDenomsResponse,
  /**
   * @param {!proto.irismod.mt.QueryDenomsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryDenomsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.QueryDenomsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.QueryDenomsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.QueryDenomsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.QueryClient.prototype.denoms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Query/Denoms',
      request,
      metadata || {},
      methodDescriptor_Query_Denoms,
      callback);
};


/**
 * @param {!proto.irismod.mt.QueryDenomsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.QueryDenomsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.QueryPromiseClient.prototype.denoms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Query/Denoms',
      request,
      metadata || {},
      methodDescriptor_Query_Denoms);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.QueryDenomRequest,
 *   !proto.irismod.mt.QueryDenomResponse>}
 */
const methodDescriptor_Query_Denom = new grpc.web.MethodDescriptor(
  '/irismod.mt.Query/Denom',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.QueryDenomRequest,
  proto.irismod.mt.QueryDenomResponse,
  /**
   * @param {!proto.irismod.mt.QueryDenomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryDenomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.QueryDenomRequest,
 *   !proto.irismod.mt.QueryDenomResponse>}
 */
const methodInfo_Query_Denom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.QueryDenomResponse,
  /**
   * @param {!proto.irismod.mt.QueryDenomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryDenomResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.QueryDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.QueryDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.QueryDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.QueryClient.prototype.denom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Query/Denom',
      request,
      metadata || {},
      methodDescriptor_Query_Denom,
      callback);
};


/**
 * @param {!proto.irismod.mt.QueryDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.QueryDenomResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.QueryPromiseClient.prototype.denom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Query/Denom',
      request,
      metadata || {},
      methodDescriptor_Query_Denom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.QueryMTSupplyRequest,
 *   !proto.irismod.mt.QueryMTSupplyResponse>}
 */
const methodDescriptor_Query_MTSupply = new grpc.web.MethodDescriptor(
  '/irismod.mt.Query/MTSupply',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.QueryMTSupplyRequest,
  proto.irismod.mt.QueryMTSupplyResponse,
  /**
   * @param {!proto.irismod.mt.QueryMTSupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryMTSupplyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.QueryMTSupplyRequest,
 *   !proto.irismod.mt.QueryMTSupplyResponse>}
 */
const methodInfo_Query_MTSupply = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.QueryMTSupplyResponse,
  /**
   * @param {!proto.irismod.mt.QueryMTSupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryMTSupplyResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.QueryMTSupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.QueryMTSupplyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.QueryMTSupplyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.QueryClient.prototype.mTSupply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Query/MTSupply',
      request,
      metadata || {},
      methodDescriptor_Query_MTSupply,
      callback);
};


/**
 * @param {!proto.irismod.mt.QueryMTSupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.QueryMTSupplyResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.QueryPromiseClient.prototype.mTSupply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Query/MTSupply',
      request,
      metadata || {},
      methodDescriptor_Query_MTSupply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.QueryMTsRequest,
 *   !proto.irismod.mt.QueryMTsResponse>}
 */
const methodDescriptor_Query_MTs = new grpc.web.MethodDescriptor(
  '/irismod.mt.Query/MTs',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.QueryMTsRequest,
  proto.irismod.mt.QueryMTsResponse,
  /**
   * @param {!proto.irismod.mt.QueryMTsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryMTsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.QueryMTsRequest,
 *   !proto.irismod.mt.QueryMTsResponse>}
 */
const methodInfo_Query_MTs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.QueryMTsResponse,
  /**
   * @param {!proto.irismod.mt.QueryMTsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryMTsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.QueryMTsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.QueryMTsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.QueryMTsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.QueryClient.prototype.mTs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Query/MTs',
      request,
      metadata || {},
      methodDescriptor_Query_MTs,
      callback);
};


/**
 * @param {!proto.irismod.mt.QueryMTsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.QueryMTsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.QueryPromiseClient.prototype.mTs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Query/MTs',
      request,
      metadata || {},
      methodDescriptor_Query_MTs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.QueryMTRequest,
 *   !proto.irismod.mt.QueryMTResponse>}
 */
const methodDescriptor_Query_MT = new grpc.web.MethodDescriptor(
  '/irismod.mt.Query/MT',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.QueryMTRequest,
  proto.irismod.mt.QueryMTResponse,
  /**
   * @param {!proto.irismod.mt.QueryMTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryMTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.QueryMTRequest,
 *   !proto.irismod.mt.QueryMTResponse>}
 */
const methodInfo_Query_MT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.QueryMTResponse,
  /**
   * @param {!proto.irismod.mt.QueryMTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryMTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.QueryMTRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.QueryMTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.QueryMTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.QueryClient.prototype.mT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Query/MT',
      request,
      metadata || {},
      methodDescriptor_Query_MT,
      callback);
};


/**
 * @param {!proto.irismod.mt.QueryMTRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.QueryMTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.QueryPromiseClient.prototype.mT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Query/MT',
      request,
      metadata || {},
      methodDescriptor_Query_MT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.QueryBalancesRequest,
 *   !proto.irismod.mt.QueryBalancesResponse>}
 */
const methodDescriptor_Query_Balances = new grpc.web.MethodDescriptor(
  '/irismod.mt.Query/Balances',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.QueryBalancesRequest,
  proto.irismod.mt.QueryBalancesResponse,
  /**
   * @param {!proto.irismod.mt.QueryBalancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryBalancesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.QueryBalancesRequest,
 *   !proto.irismod.mt.QueryBalancesResponse>}
 */
const methodInfo_Query_Balances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.QueryBalancesResponse,
  /**
   * @param {!proto.irismod.mt.QueryBalancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.QueryBalancesResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.QueryBalancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.QueryBalancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.QueryBalancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.QueryClient.prototype.balances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Query/Balances',
      request,
      metadata || {},
      methodDescriptor_Query_Balances,
      callback);
};


/**
 * @param {!proto.irismod.mt.QueryBalancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.QueryBalancesResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.QueryPromiseClient.prototype.balances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Query/Balances',
      request,
      metadata || {},
      methodDescriptor_Query_Balances);
};


module.exports = proto.irismod.mt;

