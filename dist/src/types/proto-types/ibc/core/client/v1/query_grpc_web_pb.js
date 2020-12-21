/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.client.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.core = {};
proto.ibc.core.client = {};
proto.ibc.core.client.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.core.client.v1.QueryClient =
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
proto.ibc.core.client.v1.QueryPromiseClient =
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
 *   !proto.ibc.core.client.v1.QueryClientStateRequest,
 *   !proto.ibc.core.client.v1.QueryClientStateResponse>}
 */
const methodDescriptor_Query_ClientState = new grpc.web.MethodDescriptor(
  '/ibc.core.client.v1.Query/ClientState',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.client.v1.QueryClientStateRequest,
  proto.ibc.core.client.v1.QueryClientStateResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryClientStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.client.v1.QueryClientStateRequest,
 *   !proto.ibc.core.client.v1.QueryClientStateResponse>}
 */
const methodInfo_Query_ClientState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.client.v1.QueryClientStateResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryClientStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.client.v1.QueryClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.client.v1.QueryClientStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.client.v1.QueryClientStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.client.v1.QueryClient.prototype.clientState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ClientState,
      callback);
};


/**
 * @param {!proto.ibc.core.client.v1.QueryClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.client.v1.QueryClientStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.client.v1.QueryPromiseClient.prototype.clientState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ClientState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.client.v1.QueryClientStatesRequest,
 *   !proto.ibc.core.client.v1.QueryClientStatesResponse>}
 */
const methodDescriptor_Query_ClientStates = new grpc.web.MethodDescriptor(
  '/ibc.core.client.v1.Query/ClientStates',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.client.v1.QueryClientStatesRequest,
  proto.ibc.core.client.v1.QueryClientStatesResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryClientStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryClientStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.client.v1.QueryClientStatesRequest,
 *   !proto.ibc.core.client.v1.QueryClientStatesResponse>}
 */
const methodInfo_Query_ClientStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.client.v1.QueryClientStatesResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryClientStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryClientStatesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.client.v1.QueryClientStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.client.v1.QueryClientStatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.client.v1.QueryClientStatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.client.v1.QueryClient.prototype.clientStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ClientStates',
      request,
      metadata || {},
      methodDescriptor_Query_ClientStates,
      callback);
};


/**
 * @param {!proto.ibc.core.client.v1.QueryClientStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.client.v1.QueryClientStatesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.client.v1.QueryPromiseClient.prototype.clientStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ClientStates',
      request,
      metadata || {},
      methodDescriptor_Query_ClientStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.client.v1.QueryConsensusStateRequest,
 *   !proto.ibc.core.client.v1.QueryConsensusStateResponse>}
 */
const methodDescriptor_Query_ConsensusState = new grpc.web.MethodDescriptor(
  '/ibc.core.client.v1.Query/ConsensusState',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.client.v1.QueryConsensusStateRequest,
  proto.ibc.core.client.v1.QueryConsensusStateResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryConsensusStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.client.v1.QueryConsensusStateRequest,
 *   !proto.ibc.core.client.v1.QueryConsensusStateResponse>}
 */
const methodInfo_Query_ConsensusState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.client.v1.QueryConsensusStateResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryConsensusStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.client.v1.QueryConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.client.v1.QueryConsensusStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.client.v1.QueryConsensusStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.client.v1.QueryClient.prototype.consensusState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ConsensusState,
      callback);
};


/**
 * @param {!proto.ibc.core.client.v1.QueryConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.client.v1.QueryConsensusStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.client.v1.QueryPromiseClient.prototype.consensusState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ConsensusState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.client.v1.QueryConsensusStatesRequest,
 *   !proto.ibc.core.client.v1.QueryConsensusStatesResponse>}
 */
const methodDescriptor_Query_ConsensusStates = new grpc.web.MethodDescriptor(
  '/ibc.core.client.v1.Query/ConsensusStates',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.client.v1.QueryConsensusStatesRequest,
  proto.ibc.core.client.v1.QueryConsensusStatesResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryConsensusStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryConsensusStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.client.v1.QueryConsensusStatesRequest,
 *   !proto.ibc.core.client.v1.QueryConsensusStatesResponse>}
 */
const methodInfo_Query_ConsensusStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.client.v1.QueryConsensusStatesResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryConsensusStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryConsensusStatesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.client.v1.QueryConsensusStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.client.v1.QueryConsensusStatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.client.v1.QueryConsensusStatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.client.v1.QueryClient.prototype.consensusStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ConsensusStates',
      request,
      metadata || {},
      methodDescriptor_Query_ConsensusStates,
      callback);
};


/**
 * @param {!proto.ibc.core.client.v1.QueryConsensusStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.client.v1.QueryConsensusStatesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.client.v1.QueryPromiseClient.prototype.consensusStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ConsensusStates',
      request,
      metadata || {},
      methodDescriptor_Query_ConsensusStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.client.v1.QueryClientParamsRequest,
 *   !proto.ibc.core.client.v1.QueryClientParamsResponse>}
 */
const methodDescriptor_Query_ClientParams = new grpc.web.MethodDescriptor(
  '/ibc.core.client.v1.Query/ClientParams',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.client.v1.QueryClientParamsRequest,
  proto.ibc.core.client.v1.QueryClientParamsResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryClientParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryClientParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.client.v1.QueryClientParamsRequest,
 *   !proto.ibc.core.client.v1.QueryClientParamsResponse>}
 */
const methodInfo_Query_ClientParams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.client.v1.QueryClientParamsResponse,
  /**
   * @param {!proto.ibc.core.client.v1.QueryClientParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.client.v1.QueryClientParamsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.client.v1.QueryClientParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.client.v1.QueryClientParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.client.v1.QueryClientParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.client.v1.QueryClient.prototype.clientParams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ClientParams',
      request,
      metadata || {},
      methodDescriptor_Query_ClientParams,
      callback);
};


/**
 * @param {!proto.ibc.core.client.v1.QueryClientParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.client.v1.QueryClientParamsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.client.v1.QueryPromiseClient.prototype.clientParams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.client.v1.Query/ClientParams',
      request,
      metadata || {},
      methodDescriptor_Query_ClientParams);
};


module.exports = proto.ibc.core.client.v1;

