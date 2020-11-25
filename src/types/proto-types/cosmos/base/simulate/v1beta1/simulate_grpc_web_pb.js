/**
 * @fileoverview gRPC-Web generated client stub for cosmos.base.simulate.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var cosmos_base_abci_v1beta1_abci_pb = require('../../../../cosmos/base/abci/v1beta1/abci_pb.js')

var cosmos_tx_v1beta1_tx_pb = require('../../../../cosmos/tx/v1beta1/tx_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.base = {};
proto.cosmos.base.simulate = {};
proto.cosmos.base.simulate.v1beta1 = require('./simulate_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.base.simulate.v1beta1.SimulateServiceClient =
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
proto.cosmos.base.simulate.v1beta1.SimulateServicePromiseClient =
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
 *   !proto.cosmos.base.simulate.v1beta1.SimulateRequest,
 *   !proto.cosmos.base.simulate.v1beta1.SimulateResponse>}
 */
const methodDescriptor_SimulateService_Simulate = new grpc.web.MethodDescriptor(
  '/cosmos.base.simulate.v1beta1.SimulateService/Simulate',
  grpc.web.MethodType.UNARY,
  proto.cosmos.base.simulate.v1beta1.SimulateRequest,
  proto.cosmos.base.simulate.v1beta1.SimulateResponse,
  /**
   * @param {!proto.cosmos.base.simulate.v1beta1.SimulateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.simulate.v1beta1.SimulateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.base.simulate.v1beta1.SimulateRequest,
 *   !proto.cosmos.base.simulate.v1beta1.SimulateResponse>}
 */
const methodInfo_SimulateService_Simulate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.base.simulate.v1beta1.SimulateResponse,
  /**
   * @param {!proto.cosmos.base.simulate.v1beta1.SimulateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.base.simulate.v1beta1.SimulateResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.base.simulate.v1beta1.SimulateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.base.simulate.v1beta1.SimulateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.base.simulate.v1beta1.SimulateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.base.simulate.v1beta1.SimulateServiceClient.prototype.simulate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.base.simulate.v1beta1.SimulateService/Simulate',
      request,
      metadata || {},
      methodDescriptor_SimulateService_Simulate,
      callback);
};


/**
 * @param {!proto.cosmos.base.simulate.v1beta1.SimulateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.base.simulate.v1beta1.SimulateResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.base.simulate.v1beta1.SimulateServicePromiseClient.prototype.simulate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.base.simulate.v1beta1.SimulateService/Simulate',
      request,
      metadata || {},
      methodDescriptor_SimulateService_Simulate);
};


module.exports = proto.cosmos.base.simulate.v1beta1;

