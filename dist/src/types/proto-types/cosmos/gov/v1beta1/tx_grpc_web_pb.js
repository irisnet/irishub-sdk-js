/**
 * @fileoverview gRPC-Web generated client stub for cosmos.gov.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_gov_v1beta1_gov_pb = require('../../../cosmos/gov/v1beta1/gov_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.gov = {};
proto.cosmos.gov.v1beta1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.gov.v1beta1.MsgClient =
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
proto.cosmos.gov.v1beta1.MsgPromiseClient =
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
 *   !proto.cosmos.gov.v1beta1.MsgSubmitProposal,
 *   !proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse>}
 */
const methodDescriptor_Msg_SubmitProposal = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Msg/SubmitProposal',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.MsgSubmitProposal,
  proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposal} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.MsgSubmitProposal,
 *   !proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse>}
 */
const methodInfo_Msg_SubmitProposal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposal} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposal} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.MsgClient.prototype.submitProposal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Msg/SubmitProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitProposal,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposal} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.MsgPromiseClient.prototype.submitProposal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Msg/SubmitProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitProposal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta1.MsgVote,
 *   !proto.cosmos.gov.v1beta1.MsgVoteResponse>}
 */
const methodDescriptor_Msg_Vote = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Msg/Vote',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.MsgVote,
  proto.cosmos.gov.v1beta1.MsgVoteResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.MsgVote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.MsgVoteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.MsgVote,
 *   !proto.cosmos.gov.v1beta1.MsgVoteResponse>}
 */
const methodInfo_Msg_Vote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.MsgVoteResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.MsgVote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.MsgVoteResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.MsgVote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.MsgVoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.MsgVoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.MsgClient.prototype.vote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Msg/Vote',
      request,
      metadata || {},
      methodDescriptor_Msg_Vote,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.MsgVote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.MsgVoteResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.MsgPromiseClient.prototype.vote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Msg/Vote',
      request,
      metadata || {},
      methodDescriptor_Msg_Vote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta1.MsgDeposit,
 *   !proto.cosmos.gov.v1beta1.MsgDepositResponse>}
 */
const methodDescriptor_Msg_Deposit = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Msg/Deposit',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.MsgDeposit,
  proto.cosmos.gov.v1beta1.MsgDepositResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.MsgDeposit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.MsgDepositResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.MsgDeposit,
 *   !proto.cosmos.gov.v1beta1.MsgDepositResponse>}
 */
const methodInfo_Msg_Deposit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.MsgDepositResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.MsgDeposit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.MsgDepositResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.MsgDeposit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.MsgDepositResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.MsgDepositResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.MsgClient.prototype.deposit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Msg/Deposit',
      request,
      metadata || {},
      methodDescriptor_Msg_Deposit,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.MsgDeposit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.MsgDepositResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.MsgPromiseClient.prototype.deposit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Msg/Deposit',
      request,
      metadata || {},
      methodDescriptor_Msg_Deposit);
};


module.exports = proto.cosmos.gov.v1beta1;

