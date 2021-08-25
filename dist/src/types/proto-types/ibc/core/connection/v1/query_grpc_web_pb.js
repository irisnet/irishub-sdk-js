/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.connection.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js')

var ibc_core_connection_v1_connection_pb = require('../../../../ibc/core/connection/v1/connection_pb.js')

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.core = {};
proto.ibc.core.connection = {};
proto.ibc.core.connection.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.core.connection.v1.QueryClient =
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
proto.ibc.core.connection.v1.QueryPromiseClient =
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
 *   !proto.ibc.core.connection.v1.QueryConnectionRequest,
 *   !proto.ibc.core.connection.v1.QueryConnectionResponse>}
 */
const methodDescriptor_Query_Connection = new grpc.web.MethodDescriptor(
  '/ibc.core.connection.v1.Query/Connection',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.connection.v1.QueryConnectionRequest,
  proto.ibc.core.connection.v1.QueryConnectionResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryConnectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.connection.v1.QueryConnectionRequest,
 *   !proto.ibc.core.connection.v1.QueryConnectionResponse>}
 */
const methodInfo_Query_Connection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.connection.v1.QueryConnectionResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryConnectionResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.connection.v1.QueryConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.connection.v1.QueryConnectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.connection.v1.QueryConnectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.connection.v1.QueryClient.prototype.connection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/Connection',
      request,
      metadata || {},
      methodDescriptor_Query_Connection,
      callback);
};


/**
 * @param {!proto.ibc.core.connection.v1.QueryConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.connection.v1.QueryConnectionResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.connection.v1.QueryPromiseClient.prototype.connection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/Connection',
      request,
      metadata || {},
      methodDescriptor_Query_Connection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.connection.v1.QueryConnectionsRequest,
 *   !proto.ibc.core.connection.v1.QueryConnectionsResponse>}
 */
const methodDescriptor_Query_Connections = new grpc.web.MethodDescriptor(
  '/ibc.core.connection.v1.Query/Connections',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.connection.v1.QueryConnectionsRequest,
  proto.ibc.core.connection.v1.QueryConnectionsResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryConnectionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.connection.v1.QueryConnectionsRequest,
 *   !proto.ibc.core.connection.v1.QueryConnectionsResponse>}
 */
const methodInfo_Query_Connections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.connection.v1.QueryConnectionsResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryConnectionsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.connection.v1.QueryConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.connection.v1.QueryConnectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.connection.v1.QueryConnectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.connection.v1.QueryClient.prototype.connections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/Connections',
      request,
      metadata || {},
      methodDescriptor_Query_Connections,
      callback);
};


/**
 * @param {!proto.ibc.core.connection.v1.QueryConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.connection.v1.QueryConnectionsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.connection.v1.QueryPromiseClient.prototype.connections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/Connections',
      request,
      metadata || {},
      methodDescriptor_Query_Connections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.connection.v1.QueryClientConnectionsRequest,
 *   !proto.ibc.core.connection.v1.QueryClientConnectionsResponse>}
 */
const methodDescriptor_Query_ClientConnections = new grpc.web.MethodDescriptor(
  '/ibc.core.connection.v1.Query/ClientConnections',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.connection.v1.QueryClientConnectionsRequest,
  proto.ibc.core.connection.v1.QueryClientConnectionsResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryClientConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryClientConnectionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.connection.v1.QueryClientConnectionsRequest,
 *   !proto.ibc.core.connection.v1.QueryClientConnectionsResponse>}
 */
const methodInfo_Query_ClientConnections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.connection.v1.QueryClientConnectionsResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryClientConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryClientConnectionsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.connection.v1.QueryClientConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.connection.v1.QueryClientConnectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.connection.v1.QueryClientConnectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.connection.v1.QueryClient.prototype.clientConnections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/ClientConnections',
      request,
      metadata || {},
      methodDescriptor_Query_ClientConnections,
      callback);
};


/**
 * @param {!proto.ibc.core.connection.v1.QueryClientConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.connection.v1.QueryClientConnectionsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.connection.v1.QueryPromiseClient.prototype.clientConnections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/ClientConnections',
      request,
      metadata || {},
      methodDescriptor_Query_ClientConnections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.connection.v1.QueryConnectionClientStateRequest,
 *   !proto.ibc.core.connection.v1.QueryConnectionClientStateResponse>}
 */
const methodDescriptor_Query_ConnectionClientState = new grpc.web.MethodDescriptor(
  '/ibc.core.connection.v1.Query/ConnectionClientState',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.connection.v1.QueryConnectionClientStateRequest,
  proto.ibc.core.connection.v1.QueryConnectionClientStateResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryConnectionClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryConnectionClientStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.connection.v1.QueryConnectionClientStateRequest,
 *   !proto.ibc.core.connection.v1.QueryConnectionClientStateResponse>}
 */
const methodInfo_Query_ConnectionClientState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.connection.v1.QueryConnectionClientStateResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryConnectionClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryConnectionClientStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.connection.v1.QueryConnectionClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.connection.v1.QueryConnectionClientStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.connection.v1.QueryConnectionClientStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.connection.v1.QueryClient.prototype.connectionClientState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/ConnectionClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionClientState,
      callback);
};


/**
 * @param {!proto.ibc.core.connection.v1.QueryConnectionClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.connection.v1.QueryConnectionClientStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.connection.v1.QueryPromiseClient.prototype.connectionClientState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/ConnectionClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionClientState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.connection.v1.QueryConnectionConsensusStateRequest,
 *   !proto.ibc.core.connection.v1.QueryConnectionConsensusStateResponse>}
 */
const methodDescriptor_Query_ConnectionConsensusState = new grpc.web.MethodDescriptor(
  '/ibc.core.connection.v1.Query/ConnectionConsensusState',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.connection.v1.QueryConnectionConsensusStateRequest,
  proto.ibc.core.connection.v1.QueryConnectionConsensusStateResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryConnectionConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryConnectionConsensusStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.connection.v1.QueryConnectionConsensusStateRequest,
 *   !proto.ibc.core.connection.v1.QueryConnectionConsensusStateResponse>}
 */
const methodInfo_Query_ConnectionConsensusState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.connection.v1.QueryConnectionConsensusStateResponse,
  /**
   * @param {!proto.ibc.core.connection.v1.QueryConnectionConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.connection.v1.QueryConnectionConsensusStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.connection.v1.QueryConnectionConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.connection.v1.QueryConnectionConsensusStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.connection.v1.QueryConnectionConsensusStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.connection.v1.QueryClient.prototype.connectionConsensusState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/ConnectionConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionConsensusState,
      callback);
};


/**
 * @param {!proto.ibc.core.connection.v1.QueryConnectionConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.connection.v1.QueryConnectionConsensusStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.connection.v1.QueryPromiseClient.prototype.connectionConsensusState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.connection.v1.Query/ConnectionConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionConsensusState);
};


module.exports = proto.ibc.core.connection.v1;

