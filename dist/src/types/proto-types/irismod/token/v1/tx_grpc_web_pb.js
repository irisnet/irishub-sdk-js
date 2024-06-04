/**
 * @fileoverview gRPC-Web generated client stub for irismod.token.v1
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

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var irismod_token_v1_token_pb = require('../../../irismod/token/v1/token_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.token = {};
proto.irismod.token.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.token.v1.MsgClient =
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
proto.irismod.token.v1.MsgPromiseClient =
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
 *   !proto.irismod.token.v1.MsgIssueToken,
 *   !proto.irismod.token.v1.MsgIssueTokenResponse>}
 */
const methodDescriptor_Msg_IssueToken = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/IssueToken',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgIssueToken,
  proto.irismod.token.v1.MsgIssueTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgIssueToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgIssueTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgIssueToken,
 *   !proto.irismod.token.v1.MsgIssueTokenResponse>}
 */
const methodInfo_Msg_IssueToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgIssueTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgIssueToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgIssueTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgIssueToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgIssueTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgIssueTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.issueToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/IssueToken',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueToken,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgIssueToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgIssueTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.issueToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/IssueToken',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgEditToken,
 *   !proto.irismod.token.v1.MsgEditTokenResponse>}
 */
const methodDescriptor_Msg_EditToken = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/EditToken',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgEditToken,
  proto.irismod.token.v1.MsgEditTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgEditToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgEditTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgEditToken,
 *   !proto.irismod.token.v1.MsgEditTokenResponse>}
 */
const methodInfo_Msg_EditToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgEditTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgEditToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgEditTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgEditToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgEditTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgEditTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.editToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/EditToken',
      request,
      metadata || {},
      methodDescriptor_Msg_EditToken,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgEditToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgEditTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.editToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/EditToken',
      request,
      metadata || {},
      methodDescriptor_Msg_EditToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgMintToken,
 *   !proto.irismod.token.v1.MsgMintTokenResponse>}
 */
const methodDescriptor_Msg_MintToken = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/MintToken',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgMintToken,
  proto.irismod.token.v1.MsgMintTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgMintToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgMintTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgMintToken,
 *   !proto.irismod.token.v1.MsgMintTokenResponse>}
 */
const methodInfo_Msg_MintToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgMintTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgMintToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgMintTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgMintToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgMintTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgMintTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.mintToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/MintToken',
      request,
      metadata || {},
      methodDescriptor_Msg_MintToken,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgMintToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgMintTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.mintToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/MintToken',
      request,
      metadata || {},
      methodDescriptor_Msg_MintToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgBurnToken,
 *   !proto.irismod.token.v1.MsgBurnTokenResponse>}
 */
const methodDescriptor_Msg_BurnToken = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/BurnToken',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgBurnToken,
  proto.irismod.token.v1.MsgBurnTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgBurnToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgBurnTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgBurnToken,
 *   !proto.irismod.token.v1.MsgBurnTokenResponse>}
 */
const methodInfo_Msg_BurnToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgBurnTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgBurnToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgBurnTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgBurnToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgBurnTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgBurnTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.burnToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/BurnToken',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnToken,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgBurnToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgBurnTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.burnToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/BurnToken',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgTransferTokenOwner,
 *   !proto.irismod.token.v1.MsgTransferTokenOwnerResponse>}
 */
const methodDescriptor_Msg_TransferTokenOwner = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/TransferTokenOwner',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgTransferTokenOwner,
  proto.irismod.token.v1.MsgTransferTokenOwnerResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgTransferTokenOwner} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgTransferTokenOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgTransferTokenOwner,
 *   !proto.irismod.token.v1.MsgTransferTokenOwnerResponse>}
 */
const methodInfo_Msg_TransferTokenOwner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgTransferTokenOwnerResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgTransferTokenOwner} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgTransferTokenOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgTransferTokenOwner} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgTransferTokenOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgTransferTokenOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.transferTokenOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/TransferTokenOwner',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferTokenOwner,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgTransferTokenOwner} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgTransferTokenOwnerResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.transferTokenOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/TransferTokenOwner',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferTokenOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgSwapFeeToken,
 *   !proto.irismod.token.v1.MsgSwapFeeTokenResponse>}
 */
const methodDescriptor_Msg_SwapFeeToken = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/SwapFeeToken',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgSwapFeeToken,
  proto.irismod.token.v1.MsgSwapFeeTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgSwapFeeToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgSwapFeeTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgSwapFeeToken,
 *   !proto.irismod.token.v1.MsgSwapFeeTokenResponse>}
 */
const methodInfo_Msg_SwapFeeToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgSwapFeeTokenResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgSwapFeeToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgSwapFeeTokenResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgSwapFeeToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgSwapFeeTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgSwapFeeTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.swapFeeToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/SwapFeeToken',
      request,
      metadata || {},
      methodDescriptor_Msg_SwapFeeToken,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgSwapFeeToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgSwapFeeTokenResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.swapFeeToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/SwapFeeToken',
      request,
      metadata || {},
      methodDescriptor_Msg_SwapFeeToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgSwapToERC20,
 *   !proto.irismod.token.v1.MsgSwapToERC20Response>}
 */
const methodDescriptor_Msg_SwapToERC20 = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/SwapToERC20',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgSwapToERC20,
  proto.irismod.token.v1.MsgSwapToERC20Response,
  /**
   * @param {!proto.irismod.token.v1.MsgSwapToERC20} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgSwapToERC20Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgSwapToERC20,
 *   !proto.irismod.token.v1.MsgSwapToERC20Response>}
 */
const methodInfo_Msg_SwapToERC20 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgSwapToERC20Response,
  /**
   * @param {!proto.irismod.token.v1.MsgSwapToERC20} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgSwapToERC20Response.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgSwapToERC20} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgSwapToERC20Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgSwapToERC20Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.swapToERC20 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/SwapToERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_SwapToERC20,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgSwapToERC20} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgSwapToERC20Response>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.swapToERC20 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/SwapToERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_SwapToERC20);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgSwapFromERC20,
 *   !proto.irismod.token.v1.MsgSwapFromERC20Response>}
 */
const methodDescriptor_Msg_SwapFromERC20 = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/SwapFromERC20',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgSwapFromERC20,
  proto.irismod.token.v1.MsgSwapFromERC20Response,
  /**
   * @param {!proto.irismod.token.v1.MsgSwapFromERC20} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgSwapFromERC20Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgSwapFromERC20,
 *   !proto.irismod.token.v1.MsgSwapFromERC20Response>}
 */
const methodInfo_Msg_SwapFromERC20 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgSwapFromERC20Response,
  /**
   * @param {!proto.irismod.token.v1.MsgSwapFromERC20} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgSwapFromERC20Response.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgSwapFromERC20} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgSwapFromERC20Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgSwapFromERC20Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.swapFromERC20 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/SwapFromERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_SwapFromERC20,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgSwapFromERC20} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgSwapFromERC20Response>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.swapFromERC20 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/SwapFromERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_SwapFromERC20);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgUpdateParams,
 *   !proto.irismod.token.v1.MsgUpdateParamsResponse>}
 */
const methodDescriptor_Msg_UpdateParams = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/UpdateParams',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgUpdateParams,
  proto.irismod.token.v1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgUpdateParams,
 *   !proto.irismod.token.v1.MsgUpdateParamsResponse>}
 */
const methodInfo_Msg_UpdateParams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgUpdateParamsResponse,
  /**
   * @param {!proto.irismod.token.v1.MsgUpdateParams} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgUpdateParamsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgUpdateParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgUpdateParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.updateParams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgUpdateParams} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgUpdateParamsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.updateParams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/UpdateParams',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateParams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgDeployERC20,
 *   !proto.irismod.token.v1.MsgDeployERC20Response>}
 */
const methodDescriptor_Msg_DeployERC20 = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/DeployERC20',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgDeployERC20,
  proto.irismod.token.v1.MsgDeployERC20Response,
  /**
   * @param {!proto.irismod.token.v1.MsgDeployERC20} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgDeployERC20Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgDeployERC20,
 *   !proto.irismod.token.v1.MsgDeployERC20Response>}
 */
const methodInfo_Msg_DeployERC20 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgDeployERC20Response,
  /**
   * @param {!proto.irismod.token.v1.MsgDeployERC20} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgDeployERC20Response.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgDeployERC20} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgDeployERC20Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgDeployERC20Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.deployERC20 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/DeployERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_DeployERC20,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgDeployERC20} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgDeployERC20Response>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.deployERC20 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/DeployERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_DeployERC20);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.token.v1.MsgUpgradeERC20,
 *   !proto.irismod.token.v1.MsgUpgradeERC20Response>}
 */
const methodDescriptor_Msg_UpgradeERC20 = new grpc.web.MethodDescriptor(
  '/irismod.token.v1.Msg/UpgradeERC20',
  grpc.web.MethodType.UNARY,
  proto.irismod.token.v1.MsgUpgradeERC20,
  proto.irismod.token.v1.MsgUpgradeERC20Response,
  /**
   * @param {!proto.irismod.token.v1.MsgUpgradeERC20} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgUpgradeERC20Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.token.v1.MsgUpgradeERC20,
 *   !proto.irismod.token.v1.MsgUpgradeERC20Response>}
 */
const methodInfo_Msg_UpgradeERC20 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.token.v1.MsgUpgradeERC20Response,
  /**
   * @param {!proto.irismod.token.v1.MsgUpgradeERC20} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.token.v1.MsgUpgradeERC20Response.deserializeBinary
);


/**
 * @param {!proto.irismod.token.v1.MsgUpgradeERC20} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.token.v1.MsgUpgradeERC20Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.token.v1.MsgUpgradeERC20Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.token.v1.MsgClient.prototype.upgradeERC20 =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.token.v1.Msg/UpgradeERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_UpgradeERC20,
      callback);
};


/**
 * @param {!proto.irismod.token.v1.MsgUpgradeERC20} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.token.v1.MsgUpgradeERC20Response>}
 *     Promise that resolves to the response
 */
proto.irismod.token.v1.MsgPromiseClient.prototype.upgradeERC20 =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.token.v1.Msg/UpgradeERC20',
      request,
      metadata || {},
      methodDescriptor_Msg_UpgradeERC20);
};


module.exports = proto.irismod.token.v1;

