/**
 * @fileoverview gRPC-Web generated client stub for cosmos.tx.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_base_abci_v1beta1_abci_pb = require('../../../cosmos/base/abci/v1beta1/abci_pb.js')

var cosmos_tx_v1beta1_tx_pb = require('../../../cosmos/tx/v1beta1/tx_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.tx = {};
proto.cosmos.tx.v1beta1 = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.tx.v1beta1.ServiceClient =
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
proto.cosmos.tx.v1beta1.ServicePromiseClient =
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
 *   !proto.cosmos.tx.v1beta1.SimulateRequest,
 *   !proto.cosmos.tx.v1beta1.SimulateResponse>}
 */
const methodDescriptor_Service_Simulate = new grpc.web.MethodDescriptor(
  '/cosmos.tx.v1beta1.Service/Simulate',
  grpc.web.MethodType.UNARY,
  proto.cosmos.tx.v1beta1.SimulateRequest,
  proto.cosmos.tx.v1beta1.SimulateResponse,
  /**
   * @param {!proto.cosmos.tx.v1beta1.SimulateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.tx.v1beta1.SimulateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.tx.v1beta1.SimulateRequest,
 *   !proto.cosmos.tx.v1beta1.SimulateResponse>}
 */
const methodInfo_Service_Simulate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.tx.v1beta1.SimulateResponse,
  /**
   * @param {!proto.cosmos.tx.v1beta1.SimulateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.tx.v1beta1.SimulateResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.tx.v1beta1.SimulateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.tx.v1beta1.SimulateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.tx.v1beta1.SimulateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.tx.v1beta1.ServiceClient.prototype.simulate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.tx.v1beta1.Service/Simulate',
      request,
      metadata || {},
      methodDescriptor_Service_Simulate,
      callback);
};


/**
 * @param {!proto.cosmos.tx.v1beta1.SimulateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.tx.v1beta1.SimulateResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.tx.v1beta1.ServicePromiseClient.prototype.simulate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.tx.v1beta1.Service/Simulate',
      request,
      metadata || {},
      methodDescriptor_Service_Simulate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.tx.v1beta1.GetTxRequest,
 *   !proto.cosmos.tx.v1beta1.GetTxResponse>}
 */
const methodDescriptor_Service_GetTx = new grpc.web.MethodDescriptor(
  '/cosmos.tx.v1beta1.Service/GetTx',
  grpc.web.MethodType.UNARY,
  proto.cosmos.tx.v1beta1.GetTxRequest,
  proto.cosmos.tx.v1beta1.GetTxResponse,
  /**
   * @param {!proto.cosmos.tx.v1beta1.GetTxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.tx.v1beta1.GetTxResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.tx.v1beta1.GetTxRequest,
 *   !proto.cosmos.tx.v1beta1.GetTxResponse>}
 */
const methodInfo_Service_GetTx = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.tx.v1beta1.GetTxResponse,
  /**
   * @param {!proto.cosmos.tx.v1beta1.GetTxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.tx.v1beta1.GetTxResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.tx.v1beta1.GetTxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.tx.v1beta1.GetTxResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.tx.v1beta1.GetTxResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.tx.v1beta1.ServiceClient.prototype.getTx =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.tx.v1beta1.Service/GetTx',
      request,
      metadata || {},
      methodDescriptor_Service_GetTx,
      callback);
};


/**
 * @param {!proto.cosmos.tx.v1beta1.GetTxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.tx.v1beta1.GetTxResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.tx.v1beta1.ServicePromiseClient.prototype.getTx =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.tx.v1beta1.Service/GetTx',
      request,
      metadata || {},
      methodDescriptor_Service_GetTx);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.tx.v1beta1.BroadcastTxRequest,
 *   !proto.cosmos.tx.v1beta1.BroadcastTxResponse>}
 */
const methodDescriptor_Service_BroadcastTx = new grpc.web.MethodDescriptor(
  '/cosmos.tx.v1beta1.Service/BroadcastTx',
  grpc.web.MethodType.UNARY,
  proto.cosmos.tx.v1beta1.BroadcastTxRequest,
  proto.cosmos.tx.v1beta1.BroadcastTxResponse,
  /**
   * @param {!proto.cosmos.tx.v1beta1.BroadcastTxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.tx.v1beta1.BroadcastTxResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.tx.v1beta1.BroadcastTxRequest,
 *   !proto.cosmos.tx.v1beta1.BroadcastTxResponse>}
 */
const methodInfo_Service_BroadcastTx = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.tx.v1beta1.BroadcastTxResponse,
  /**
   * @param {!proto.cosmos.tx.v1beta1.BroadcastTxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.tx.v1beta1.BroadcastTxResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.tx.v1beta1.BroadcastTxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.tx.v1beta1.BroadcastTxResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.tx.v1beta1.BroadcastTxResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.tx.v1beta1.ServiceClient.prototype.broadcastTx =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.tx.v1beta1.Service/BroadcastTx',
      request,
      metadata || {},
      methodDescriptor_Service_BroadcastTx,
      callback);
};


/**
 * @param {!proto.cosmos.tx.v1beta1.BroadcastTxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.tx.v1beta1.BroadcastTxResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.tx.v1beta1.ServicePromiseClient.prototype.broadcastTx =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.tx.v1beta1.Service/BroadcastTx',
      request,
      metadata || {},
      methodDescriptor_Service_BroadcastTx);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.tx.v1beta1.GetTxsEventRequest,
 *   !proto.cosmos.tx.v1beta1.GetTxsEventResponse>}
 */
const methodDescriptor_Service_GetTxsEvent = new grpc.web.MethodDescriptor(
  '/cosmos.tx.v1beta1.Service/GetTxsEvent',
  grpc.web.MethodType.UNARY,
  proto.cosmos.tx.v1beta1.GetTxsEventRequest,
  proto.cosmos.tx.v1beta1.GetTxsEventResponse,
  /**
   * @param {!proto.cosmos.tx.v1beta1.GetTxsEventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.tx.v1beta1.GetTxsEventResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.tx.v1beta1.GetTxsEventRequest,
 *   !proto.cosmos.tx.v1beta1.GetTxsEventResponse>}
 */
const methodInfo_Service_GetTxsEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.tx.v1beta1.GetTxsEventResponse,
  /**
   * @param {!proto.cosmos.tx.v1beta1.GetTxsEventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.tx.v1beta1.GetTxsEventResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.tx.v1beta1.GetTxsEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.tx.v1beta1.GetTxsEventResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.tx.v1beta1.GetTxsEventResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.tx.v1beta1.ServiceClient.prototype.getTxsEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.tx.v1beta1.Service/GetTxsEvent',
      request,
      metadata || {},
      methodDescriptor_Service_GetTxsEvent,
      callback);
};


/**
 * @param {!proto.cosmos.tx.v1beta1.GetTxsEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.tx.v1beta1.GetTxsEventResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.tx.v1beta1.ServicePromiseClient.prototype.getTxsEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.tx.v1beta1.Service/GetTxsEvent',
      request,
      metadata || {},
      methodDescriptor_Service_GetTxsEvent);
};


module.exports = proto.cosmos.tx.v1beta1;

