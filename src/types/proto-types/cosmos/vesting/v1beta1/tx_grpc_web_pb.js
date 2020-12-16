/**
 * @fileoverview gRPC-Web generated client stub for cosmos.vesting.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.vesting = {};
proto.cosmos.vesting.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.vesting.v1beta1.MsgClient =
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
proto.cosmos.vesting.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount,
 *   !proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse>}
 */
const methodDescriptor_Msg_CreateVestingAccount = new grpc.web.MethodDescriptor(
  '/cosmos.vesting.v1beta1.Msg/CreateVestingAccount',
  grpc.web.MethodType.UNARY,
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount,
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse,
  /**
   * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount,
 *   !proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse>}
 */
const methodInfo_Msg_CreateVestingAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse,
  /**
   * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.vesting.v1beta1.MsgClient.prototype.createVestingAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.vesting.v1beta1.Msg/CreateVestingAccount',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateVestingAccount,
      callback);
};


/**
 * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.vesting.v1beta1.MsgPromiseClient.prototype.createVestingAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.vesting.v1beta1.Msg/CreateVestingAccount',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateVestingAccount);
};


module.exports = proto.cosmos.vesting.v1beta1;

