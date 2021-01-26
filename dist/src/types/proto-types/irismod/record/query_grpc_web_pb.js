/**
 * @fileoverview gRPC-Web generated client stub for irismod.record
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var irismod_record_record_pb = require('../../irismod/record/record_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.record = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.record.QueryClient =
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
proto.irismod.record.QueryPromiseClient =
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
 *   !proto.irismod.record.QueryRecordRequest,
 *   !proto.irismod.record.QueryRecordResponse>}
 */
const methodDescriptor_Query_Record = new grpc.web.MethodDescriptor(
  '/irismod.record.Query/Record',
  grpc.web.MethodType.UNARY,
  proto.irismod.record.QueryRecordRequest,
  proto.irismod.record.QueryRecordResponse,
  /**
   * @param {!proto.irismod.record.QueryRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.record.QueryRecordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.record.QueryRecordRequest,
 *   !proto.irismod.record.QueryRecordResponse>}
 */
const methodInfo_Query_Record = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.record.QueryRecordResponse,
  /**
   * @param {!proto.irismod.record.QueryRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.record.QueryRecordResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.record.QueryRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.record.QueryRecordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.record.QueryRecordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.record.QueryClient.prototype.record =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.record.Query/Record',
      request,
      metadata || {},
      methodDescriptor_Query_Record,
      callback);
};


/**
 * @param {!proto.irismod.record.QueryRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.record.QueryRecordResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.record.QueryPromiseClient.prototype.record =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.record.Query/Record',
      request,
      metadata || {},
      methodDescriptor_Query_Record);
};


module.exports = proto.irismod.record;

