/**
 * @fileoverview gRPC-Web generated client stub for cosmos.base.tendermint.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var tendermint_p2p_types_pb = require('../../../../tendermint/p2p/types_pb.js')

var tendermint_types_block_pb = require('../../../../tendermint/types/block_pb.js')

var tendermint_types_types_pb = require('../../../../tendermint/types/types_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.base = {};
proto.cosmos.base.tendermint = {};
proto.cosmos.base.tendermint.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.base.tendermint.v1beta1.ServiceClient =
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
proto.cosmos.base.tendermint.v1beta1.ServicePromiseClient =
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
 *   !proto.cosmos.base.tendermint.v1beta1.GetNodeInfoRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetNodeInfoResponse>}
 */
const methodDescriptor_Service_GetNodeInfo = new grpc.web.MethodDescriptor(
  '/cosmos.base.tendermint.v1beta1.Service/GetNodeInfo',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.tendermint.v1beta1.GetNodeInfoRequest,
  proto.cosmos.base.tendermint.v1beta1.GetNodeInfoResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetNodeInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetNodeInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.tendermint.v1beta1.GetNodeInfoRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetNodeInfoResponse>}
 */
const methodInfo_Service_GetNodeInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.tendermint.v1beta1.GetNodeInfoResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetNodeInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetNodeInfoResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetNodeInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.tendermint.v1beta1.GetNodeInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.tendermint.v1beta1.GetNodeInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.tendermint.v1beta1.ServiceClient.prototype.getNodeInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetNodeInfo',
      request,
      metadata || {},
      methodDescriptor_Service_GetNodeInfo,
      callback);
};


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetNodeInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.tendermint.v1beta1.GetNodeInfoResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.tendermint.v1beta1.ServicePromiseClient.prototype.getNodeInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetNodeInfo',
      request,
      metadata || {},
      methodDescriptor_Service_GetNodeInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.tendermint.v1beta1.GetSyncingRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetSyncingResponse>}
 */
const methodDescriptor_Service_GetSyncing = new grpc.web.MethodDescriptor(
  '/cosmos.base.tendermint.v1beta1.Service/GetSyncing',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.tendermint.v1beta1.GetSyncingRequest,
  proto.cosmos.base.tendermint.v1beta1.GetSyncingResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetSyncingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetSyncingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.tendermint.v1beta1.GetSyncingRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetSyncingResponse>}
 */
const methodInfo_Service_GetSyncing = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.tendermint.v1beta1.GetSyncingResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetSyncingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetSyncingResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetSyncingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.tendermint.v1beta1.GetSyncingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.tendermint.v1beta1.GetSyncingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.tendermint.v1beta1.ServiceClient.prototype.getSyncing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetSyncing',
      request,
      metadata || {},
      methodDescriptor_Service_GetSyncing,
      callback);
};


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetSyncingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.tendermint.v1beta1.GetSyncingResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.tendermint.v1beta1.ServicePromiseClient.prototype.getSyncing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetSyncing',
      request,
      metadata || {},
      methodDescriptor_Service_GetSyncing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.tendermint.v1beta1.GetLatestBlockRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetLatestBlockResponse>}
 */
const methodDescriptor_Service_GetLatestBlock = new grpc.web.MethodDescriptor(
  '/cosmos.base.tendermint.v1beta1.Service/GetLatestBlock',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.tendermint.v1beta1.GetLatestBlockRequest,
  proto.cosmos.base.tendermint.v1beta1.GetLatestBlockResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetLatestBlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetLatestBlockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.tendermint.v1beta1.GetLatestBlockRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetLatestBlockResponse>}
 */
const methodInfo_Service_GetLatestBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.tendermint.v1beta1.GetLatestBlockResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetLatestBlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetLatestBlockResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetLatestBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.tendermint.v1beta1.GetLatestBlockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.tendermint.v1beta1.GetLatestBlockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.tendermint.v1beta1.ServiceClient.prototype.getLatestBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetLatestBlock',
      request,
      metadata || {},
      methodDescriptor_Service_GetLatestBlock,
      callback);
};


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetLatestBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.tendermint.v1beta1.GetLatestBlockResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.tendermint.v1beta1.ServicePromiseClient.prototype.getLatestBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetLatestBlock',
      request,
      metadata || {},
      methodDescriptor_Service_GetLatestBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse>}
 */
const methodDescriptor_Service_GetBlockByHeight = new grpc.web.MethodDescriptor(
  '/cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest,
  proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse>}
 */
const methodInfo_Service_GetBlockByHeight = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.tendermint.v1beta1.ServiceClient.prototype.getBlockByHeight =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight',
      request,
      metadata || {},
      methodDescriptor_Service_GetBlockByHeight,
      callback);
};


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.tendermint.v1beta1.ServicePromiseClient.prototype.getBlockByHeight =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetBlockByHeight',
      request,
      metadata || {},
      methodDescriptor_Service_GetBlockByHeight);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse>}
 */
const methodDescriptor_Service_GetLatestValidatorSet = new grpc.web.MethodDescriptor(
  '/cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest,
  proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse>}
 */
const methodInfo_Service_GetLatestValidatorSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.tendermint.v1beta1.ServiceClient.prototype.getLatestValidatorSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet',
      request,
      metadata || {},
      methodDescriptor_Service_GetLatestValidatorSet,
      callback);
};


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.tendermint.v1beta1.ServicePromiseClient.prototype.getLatestValidatorSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetLatestValidatorSet',
      request,
      metadata || {},
      methodDescriptor_Service_GetLatestValidatorSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse>}
 */
const methodDescriptor_Service_GetValidatorSetByHeight = new grpc.web.MethodDescriptor(
  '/cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest,
  proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest,
 *   !proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse>}
 */
const methodInfo_Service_GetValidatorSetByHeight = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse,
  /**
   * @param {!proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.tendermint.v1beta1.ServiceClient.prototype.getValidatorSetByHeight =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight',
      request,
      metadata || {},
      methodDescriptor_Service_GetValidatorSetByHeight,
      callback);
};


/**
 * @param {!proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.tendermint.v1beta1.ServicePromiseClient.prototype.getValidatorSetByHeight =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.tendermint.v1beta1.Service/GetValidatorSetByHeight',
      request,
      metadata || {},
      methodDescriptor_Service_GetValidatorSetByHeight);
};


module.exports = proto.cosmos.base.tendermint.v1beta1;

