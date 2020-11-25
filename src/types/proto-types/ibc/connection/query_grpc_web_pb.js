/**
 * @fileoverview gRPC-Web generated client stub for ibc.connection
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_client_client_pb = require('../../ibc/client/client_pb.js')

var ibc_connection_connection_pb = require('../../ibc/connection/connection_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.connection = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.connection.QueryClient =
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
proto.ibc.connection.QueryPromiseClient =
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
 *   !proto.ibc.connection.QueryConnectionRequest,
 *   !proto.ibc.connection.QueryConnectionResponse>}
 */
const methodDescriptor_Query_Connection = new grpc.web.MethodDescriptor(
  '/ibc.connection.Query/Connection',
  grpc.web.MethodType.UNARY,
  proto.ibc.connection.QueryConnectionRequest,
  proto.ibc.connection.QueryConnectionResponse,
  /**
   * @param {!proto.ibc.connection.QueryConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryConnectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.connection.QueryConnectionRequest,
 *   !proto.ibc.connection.QueryConnectionResponse>}
 */
const methodInfo_Query_Connection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.connection.QueryConnectionResponse,
  /**
   * @param {!proto.ibc.connection.QueryConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryConnectionResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.connection.QueryConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.connection.QueryConnectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.connection.QueryConnectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.connection.QueryClient.prototype.connection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.connection.Query/Connection',
      request,
      metadata || {},
      methodDescriptor_Query_Connection,
      callback);
};


/**
 * @param {!proto.ibc.connection.QueryConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.connection.QueryConnectionResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.connection.QueryPromiseClient.prototype.connection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.connection.Query/Connection',
      request,
      metadata || {},
      methodDescriptor_Query_Connection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.connection.QueryConnectionsRequest,
 *   !proto.ibc.connection.QueryConnectionsResponse>}
 */
const methodDescriptor_Query_Connections = new grpc.web.MethodDescriptor(
  '/ibc.connection.Query/Connections',
  grpc.web.MethodType.UNARY,
  proto.ibc.connection.QueryConnectionsRequest,
  proto.ibc.connection.QueryConnectionsResponse,
  /**
   * @param {!proto.ibc.connection.QueryConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryConnectionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.connection.QueryConnectionsRequest,
 *   !proto.ibc.connection.QueryConnectionsResponse>}
 */
const methodInfo_Query_Connections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.connection.QueryConnectionsResponse,
  /**
   * @param {!proto.ibc.connection.QueryConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryConnectionsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.connection.QueryConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.connection.QueryConnectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.connection.QueryConnectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.connection.QueryClient.prototype.connections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.connection.Query/Connections',
      request,
      metadata || {},
      methodDescriptor_Query_Connections,
      callback);
};


/**
 * @param {!proto.ibc.connection.QueryConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.connection.QueryConnectionsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.connection.QueryPromiseClient.prototype.connections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.connection.Query/Connections',
      request,
      metadata || {},
      methodDescriptor_Query_Connections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.connection.QueryClientConnectionsRequest,
 *   !proto.ibc.connection.QueryClientConnectionsResponse>}
 */
const methodDescriptor_Query_ClientConnections = new grpc.web.MethodDescriptor(
  '/ibc.connection.Query/ClientConnections',
  grpc.web.MethodType.UNARY,
  proto.ibc.connection.QueryClientConnectionsRequest,
  proto.ibc.connection.QueryClientConnectionsResponse,
  /**
   * @param {!proto.ibc.connection.QueryClientConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryClientConnectionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.connection.QueryClientConnectionsRequest,
 *   !proto.ibc.connection.QueryClientConnectionsResponse>}
 */
const methodInfo_Query_ClientConnections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.connection.QueryClientConnectionsResponse,
  /**
   * @param {!proto.ibc.connection.QueryClientConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryClientConnectionsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.connection.QueryClientConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.connection.QueryClientConnectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.connection.QueryClientConnectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.connection.QueryClient.prototype.clientConnections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.connection.Query/ClientConnections',
      request,
      metadata || {},
      methodDescriptor_Query_ClientConnections,
      callback);
};


/**
 * @param {!proto.ibc.connection.QueryClientConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.connection.QueryClientConnectionsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.connection.QueryPromiseClient.prototype.clientConnections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.connection.Query/ClientConnections',
      request,
      metadata || {},
      methodDescriptor_Query_ClientConnections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.connection.QueryConnectionClientStateRequest,
 *   !proto.ibc.connection.QueryConnectionClientStateResponse>}
 */
const methodDescriptor_Query_ConnectionClientState = new grpc.web.MethodDescriptor(
  '/ibc.connection.Query/ConnectionClientState',
  grpc.web.MethodType.UNARY,
  proto.ibc.connection.QueryConnectionClientStateRequest,
  proto.ibc.connection.QueryConnectionClientStateResponse,
  /**
   * @param {!proto.ibc.connection.QueryConnectionClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryConnectionClientStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.connection.QueryConnectionClientStateRequest,
 *   !proto.ibc.connection.QueryConnectionClientStateResponse>}
 */
const methodInfo_Query_ConnectionClientState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.connection.QueryConnectionClientStateResponse,
  /**
   * @param {!proto.ibc.connection.QueryConnectionClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryConnectionClientStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.connection.QueryConnectionClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.connection.QueryConnectionClientStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.connection.QueryConnectionClientStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.connection.QueryClient.prototype.connectionClientState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.connection.Query/ConnectionClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionClientState,
      callback);
};


/**
 * @param {!proto.ibc.connection.QueryConnectionClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.connection.QueryConnectionClientStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.connection.QueryPromiseClient.prototype.connectionClientState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.connection.Query/ConnectionClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionClientState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.connection.QueryConnectionConsensusStateRequest,
 *   !proto.ibc.connection.QueryConnectionConsensusStateResponse>}
 */
const methodDescriptor_Query_ConnectionConsensusState = new grpc.web.MethodDescriptor(
  '/ibc.connection.Query/ConnectionConsensusState',
  grpc.web.MethodType.UNARY,
  proto.ibc.connection.QueryConnectionConsensusStateRequest,
  proto.ibc.connection.QueryConnectionConsensusStateResponse,
  /**
   * @param {!proto.ibc.connection.QueryConnectionConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryConnectionConsensusStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.connection.QueryConnectionConsensusStateRequest,
 *   !proto.ibc.connection.QueryConnectionConsensusStateResponse>}
 */
const methodInfo_Query_ConnectionConsensusState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.connection.QueryConnectionConsensusStateResponse,
  /**
   * @param {!proto.ibc.connection.QueryConnectionConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.connection.QueryConnectionConsensusStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.connection.QueryConnectionConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.connection.QueryConnectionConsensusStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.connection.QueryConnectionConsensusStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.connection.QueryClient.prototype.connectionConsensusState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.connection.Query/ConnectionConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionConsensusState,
      callback);
};


/**
 * @param {!proto.ibc.connection.QueryConnectionConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.connection.QueryConnectionConsensusStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.connection.QueryPromiseClient.prototype.connectionConsensusState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.connection.Query/ConnectionConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionConsensusState);
};


module.exports = proto.ibc.connection;

