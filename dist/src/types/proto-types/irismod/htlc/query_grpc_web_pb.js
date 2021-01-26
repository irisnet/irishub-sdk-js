/**
 * @fileoverview gRPC-Web generated client stub for irismod.htlc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var irismod_htlc_htlc_pb = require('../../irismod/htlc/htlc_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.htlc = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.htlc.QueryClient =
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
proto.irismod.htlc.QueryPromiseClient =
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
 *   !proto.irismod.htlc.QueryHTLCRequest,
 *   !proto.irismod.htlc.QueryHTLCResponse>}
 */
const methodDescriptor_Query_HTLC = new grpc.web.MethodDescriptor(
  '/irismod.htlc.Query/HTLC',
  grpc.web.MethodType.UNARY,
  proto.irismod.htlc.QueryHTLCRequest,
  proto.irismod.htlc.QueryHTLCResponse,
  /**
   * @param {!proto.irismod.htlc.QueryHTLCRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.QueryHTLCResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.htlc.QueryHTLCRequest,
 *   !proto.irismod.htlc.QueryHTLCResponse>}
 */
const methodInfo_Query_HTLC = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.htlc.QueryHTLCResponse,
  /**
   * @param {!proto.irismod.htlc.QueryHTLCRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.htlc.QueryHTLCResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.htlc.QueryHTLCRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.htlc.QueryHTLCResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.htlc.QueryHTLCResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.htlc.QueryClient.prototype.hTLC =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.htlc.Query/HTLC',
      request,
      metadata || {},
      methodDescriptor_Query_HTLC,
      callback);
};


/**
 * @param {!proto.irismod.htlc.QueryHTLCRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.htlc.QueryHTLCResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.htlc.QueryPromiseClient.prototype.hTLC =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.htlc.Query/HTLC',
      request,
      metadata || {},
      methodDescriptor_Query_HTLC);
};


module.exports = proto.irismod.htlc;

