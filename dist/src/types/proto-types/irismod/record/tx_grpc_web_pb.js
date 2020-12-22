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

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.record = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.record.MsgClient =
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
proto.irismod.record.MsgPromiseClient =
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
 *   !proto.irismod.record.MsgCreateRecord,
 *   !proto.irismod.record.MsgCreateRecordResponse>}
 */
const methodDescriptor_Msg_CreateRecord = new grpc.web.MethodDescriptor(
  '/irismod.record.Msg/CreateRecord',
  grpc.web.MethodType.UNARY,
  proto.irismod.record.MsgCreateRecord,
  proto.irismod.record.MsgCreateRecordResponse,
  /**
   * @param {!proto.irismod.record.MsgCreateRecord} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.record.MsgCreateRecordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.record.MsgCreateRecord,
 *   !proto.irismod.record.MsgCreateRecordResponse>}
 */
const methodInfo_Msg_CreateRecord = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.record.MsgCreateRecordResponse,
  /**
   * @param {!proto.irismod.record.MsgCreateRecord} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.record.MsgCreateRecordResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.record.MsgCreateRecord} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.record.MsgCreateRecordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.record.MsgCreateRecordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.record.MsgClient.prototype.createRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.record.Msg/CreateRecord',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateRecord,
      callback);
};


/**
 * @param {!proto.irismod.record.MsgCreateRecord} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.record.MsgCreateRecordResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.record.MsgPromiseClient.prototype.createRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.record.Msg/CreateRecord',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateRecord);
};


module.exports = proto.irismod.record;

