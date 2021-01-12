/**
 * @fileoverview gRPC-Web generated client stub for irismod.token
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.token = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.token.MsgClient =
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
proto.irismod.token.MsgPromiseClient =
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
 *   !proto.irismod.token.MsgIssueToken,
 *   !proto.irismod.token.MsgIssueTokenResponse>}
 */
const methodDescriptor_Msg_IssueToken = new grpc.web.MethodDescriptor(
  '/irismod.token.Msg/IssueToken',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.MsgIssueToken,
  proto.irismod.token.MsgIssueTokenResponse,
  /**
   * @param {!proto.irismod.token.MsgIssueToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.MsgIssueTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.MsgIssueToken,
 *   !proto.irismod.token.MsgIssueTokenResponse>}
 */
const methodInfo_Msg_IssueToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.MsgIssueTokenResponse,
  /**
   * @param {!proto.irismod.token.MsgIssueToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.MsgIssueTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.MsgIssueToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.MsgIssueTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.MsgIssueTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.MsgClient.prototype.issueToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.Msg/IssueToken',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueToken,
      callback);
};


/**
 * @param {!proto.irismod.token.MsgIssueToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.MsgIssueTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.MsgPromiseClient.prototype.issueToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.Msg/IssueToken',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.MsgEditToken,
 *   !proto.irismod.token.MsgEditTokenResponse>}
 */
const methodDescriptor_Msg_EditToken = new grpc.web.MethodDescriptor(
  '/irismod.token.Msg/EditToken',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.MsgEditToken,
  proto.irismod.token.MsgEditTokenResponse,
  /**
   * @param {!proto.irismod.token.MsgEditToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.MsgEditTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.MsgEditToken,
 *   !proto.irismod.token.MsgEditTokenResponse>}
 */
const methodInfo_Msg_EditToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.MsgEditTokenResponse,
  /**
   * @param {!proto.irismod.token.MsgEditToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.MsgEditTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.MsgEditToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.MsgEditTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.MsgEditTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.MsgClient.prototype.editToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.Msg/EditToken',
      request,
      metadata || {},
      methodDescriptor_Msg_EditToken,
      callback);
};


/**
 * @param {!proto.irismod.token.MsgEditToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.MsgEditTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.MsgPromiseClient.prototype.editToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.Msg/EditToken',
      request,
      metadata || {},
      methodDescriptor_Msg_EditToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.MsgMintToken,
 *   !proto.irismod.token.MsgMintTokenResponse>}
 */
const methodDescriptor_Msg_MintToken = new grpc.web.MethodDescriptor(
  '/irismod.token.Msg/MintToken',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.MsgMintToken,
  proto.irismod.token.MsgMintTokenResponse,
  /**
   * @param {!proto.irismod.token.MsgMintToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.MsgMintTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.MsgMintToken,
 *   !proto.irismod.token.MsgMintTokenResponse>}
 */
const methodInfo_Msg_MintToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.MsgMintTokenResponse,
  /**
   * @param {!proto.irismod.token.MsgMintToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.MsgMintTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.MsgMintToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.MsgMintTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.MsgMintTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.MsgClient.prototype.mintToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.Msg/MintToken',
      request,
      metadata || {},
      methodDescriptor_Msg_MintToken,
      callback);
};


/**
 * @param {!proto.irismod.token.MsgMintToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.MsgMintTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.MsgPromiseClient.prototype.mintToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.Msg/MintToken',
      request,
      metadata || {},
      methodDescriptor_Msg_MintToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.MsgTransferTokenOwner,
 *   !proto.irismod.token.MsgTransferTokenOwnerResponse>}
 */
const methodDescriptor_Msg_TransferTokenOwner = new grpc.web.MethodDescriptor(
  '/irismod.token.Msg/TransferTokenOwner',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.MsgTransferTokenOwner,
  proto.irismod.token.MsgTransferTokenOwnerResponse,
  /**
   * @param {!proto.irismod.token.MsgTransferTokenOwner} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.MsgTransferTokenOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.MsgTransferTokenOwner,
 *   !proto.irismod.token.MsgTransferTokenOwnerResponse>}
 */
const methodInfo_Msg_TransferTokenOwner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.MsgTransferTokenOwnerResponse,
  /**
   * @param {!proto.irismod.token.MsgTransferTokenOwner} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.MsgTransferTokenOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.MsgTransferTokenOwner} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.MsgTransferTokenOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.MsgTransferTokenOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.MsgClient.prototype.transferTokenOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.Msg/TransferTokenOwner',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferTokenOwner,
      callback);
};


/**
 * @param {!proto.irismod.token.MsgTransferTokenOwner} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.MsgTransferTokenOwnerResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.MsgPromiseClient.prototype.transferTokenOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.Msg/TransferTokenOwner',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferTokenOwner);
};


module.exports = proto.irismod.token;

