/**
 * @fileoverview gRPC-Web generated client stub for ibc.client
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_client_client_pb = require('../../ibc/client/client_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.client = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.client.QueryClient =
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
proto.ibc.client.QueryPromiseClient =
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
 *   !proto.ibc.client.QueryClientStateRequest,
 *   !proto.ibc.client.QueryClientStateResponse>}
 */
const methodDescriptor_Query_ClientState = new grpc.web.MethodDescriptor(
  '/ibc.client.Query/ClientState',
  grpc.web.MethodType.UNARY,
  proto.ibc.client.QueryClientStateRequest,
  proto.ibc.client.QueryClientStateResponse,
  /**
   * @param {!proto.ibc.client.QueryClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.client.QueryClientStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.client.QueryClientStateRequest,
 *   !proto.ibc.client.QueryClientStateResponse>}
 */
const methodInfo_Query_ClientState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.client.QueryClientStateResponse,
  /**
   * @param {!proto.ibc.client.QueryClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.client.QueryClientStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.client.QueryClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.client.QueryClientStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.client.QueryClientStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.client.QueryClient.prototype.clientState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.client.Query/ClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ClientState,
      callback);
};


/**
 * @param {!proto.ibc.client.QueryClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.client.QueryClientStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.client.QueryPromiseClient.prototype.clientState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.client.Query/ClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ClientState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.client.QueryClientStatesRequest,
 *   !proto.ibc.client.QueryClientStatesResponse>}
 */
const methodDescriptor_Query_ClientStates = new grpc.web.MethodDescriptor(
  '/ibc.client.Query/ClientStates',
  grpc.web.MethodType.UNARY,
  proto.ibc.client.QueryClientStatesRequest,
  proto.ibc.client.QueryClientStatesResponse,
  /**
   * @param {!proto.ibc.client.QueryClientStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.client.QueryClientStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.client.QueryClientStatesRequest,
 *   !proto.ibc.client.QueryClientStatesResponse>}
 */
const methodInfo_Query_ClientStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.client.QueryClientStatesResponse,
  /**
   * @param {!proto.ibc.client.QueryClientStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.client.QueryClientStatesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.client.QueryClientStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.client.QueryClientStatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.client.QueryClientStatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.client.QueryClient.prototype.clientStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.client.Query/ClientStates',
      request,
      metadata || {},
      methodDescriptor_Query_ClientStates,
      callback);
};


/**
 * @param {!proto.ibc.client.QueryClientStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.client.QueryClientStatesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.client.QueryPromiseClient.prototype.clientStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.client.Query/ClientStates',
      request,
      metadata || {},
      methodDescriptor_Query_ClientStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.client.QueryConsensusStateRequest,
 *   !proto.ibc.client.QueryConsensusStateResponse>}
 */
const methodDescriptor_Query_ConsensusState = new grpc.web.MethodDescriptor(
  '/ibc.client.Query/ConsensusState',
  grpc.web.MethodType.UNARY,
  proto.ibc.client.QueryConsensusStateRequest,
  proto.ibc.client.QueryConsensusStateResponse,
  /**
   * @param {!proto.ibc.client.QueryConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.client.QueryConsensusStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.client.QueryConsensusStateRequest,
 *   !proto.ibc.client.QueryConsensusStateResponse>}
 */
const methodInfo_Query_ConsensusState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.client.QueryConsensusStateResponse,
  /**
   * @param {!proto.ibc.client.QueryConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.client.QueryConsensusStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.client.QueryConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.client.QueryConsensusStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.client.QueryConsensusStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.client.QueryClient.prototype.consensusState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.client.Query/ConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ConsensusState,
      callback);
};


/**
 * @param {!proto.ibc.client.QueryConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.client.QueryConsensusStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.client.QueryPromiseClient.prototype.consensusState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.client.Query/ConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ConsensusState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.client.QueryConsensusStatesRequest,
 *   !proto.ibc.client.QueryConsensusStatesResponse>}
 */
const methodDescriptor_Query_ConsensusStates = new grpc.web.MethodDescriptor(
  '/ibc.client.Query/ConsensusStates',
  grpc.web.MethodType.UNARY,
  proto.ibc.client.QueryConsensusStatesRequest,
  proto.ibc.client.QueryConsensusStatesResponse,
  /**
   * @param {!proto.ibc.client.QueryConsensusStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.client.QueryConsensusStatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.client.QueryConsensusStatesRequest,
 *   !proto.ibc.client.QueryConsensusStatesResponse>}
 */
const methodInfo_Query_ConsensusStates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.client.QueryConsensusStatesResponse,
  /**
   * @param {!proto.ibc.client.QueryConsensusStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.client.QueryConsensusStatesResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.client.QueryConsensusStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.client.QueryConsensusStatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.client.QueryConsensusStatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.client.QueryClient.prototype.consensusStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.client.Query/ConsensusStates',
      request,
      metadata || {},
      methodDescriptor_Query_ConsensusStates,
      callback);
};


/**
 * @param {!proto.ibc.client.QueryConsensusStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.client.QueryConsensusStatesResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.client.QueryPromiseClient.prototype.consensusStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.client.Query/ConsensusStates',
      request,
      metadata || {},
      methodDescriptor_Query_ConsensusStates);
};


module.exports = proto.ibc.client;

