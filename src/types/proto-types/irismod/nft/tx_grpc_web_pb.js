/**
 * @fileoverview gRPC-Web generated client stub for irismod.nft
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
proto.irismod.nft = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.nft.MsgClient =
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
proto.irismod.nft.MsgPromiseClient =
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
 *   !proto.irismod.nft.MsgIssueDenom,
 *   !proto.irismod.nft.MsgIssueDenomResponse>}
 */
const methodDescriptor_Msg_IssueDenom = new grpc.web.MethodDescriptor(
  '/irismod.nft.Msg/IssueDenom',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.MsgIssueDenom,
  proto.irismod.nft.MsgIssueDenomResponse,
  /**
   * @param {!proto.irismod.nft.MsgIssueDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgIssueDenomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.MsgIssueDenom,
 *   !proto.irismod.nft.MsgIssueDenomResponse>}
 */
const methodInfo_Msg_IssueDenom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.MsgIssueDenomResponse,
  /**
   * @param {!proto.irismod.nft.MsgIssueDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgIssueDenomResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.MsgIssueDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.MsgIssueDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.MsgIssueDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.MsgClient.prototype.issueDenom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Msg/IssueDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueDenom,
      callback);
};


/**
 * @param {!proto.irismod.nft.MsgIssueDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.MsgIssueDenomResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.MsgPromiseClient.prototype.issueDenom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Msg/IssueDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueDenom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.nft.MsgMintNFT,
 *   !proto.irismod.nft.MsgMintNFTResponse>}
 */
const methodDescriptor_Msg_MintNFT = new grpc.web.MethodDescriptor(
  '/irismod.nft.Msg/MintNFT',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.MsgMintNFT,
  proto.irismod.nft.MsgMintNFTResponse,
  /**
   * @param {!proto.irismod.nft.MsgMintNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgMintNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.MsgMintNFT,
 *   !proto.irismod.nft.MsgMintNFTResponse>}
 */
const methodInfo_Msg_MintNFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.MsgMintNFTResponse,
  /**
   * @param {!proto.irismod.nft.MsgMintNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgMintNFTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.MsgMintNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.MsgMintNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.MsgMintNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.MsgClient.prototype.mintNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Msg/MintNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_MintNFT,
      callback);
};


/**
 * @param {!proto.irismod.nft.MsgMintNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.MsgMintNFTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.MsgPromiseClient.prototype.mintNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Msg/MintNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_MintNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.nft.MsgEditNFT,
 *   !proto.irismod.nft.MsgEditNFTResponse>}
 */
const methodDescriptor_Msg_EditNFT = new grpc.web.MethodDescriptor(
  '/irismod.nft.Msg/EditNFT',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.MsgEditNFT,
  proto.irismod.nft.MsgEditNFTResponse,
  /**
   * @param {!proto.irismod.nft.MsgEditNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgEditNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.MsgEditNFT,
 *   !proto.irismod.nft.MsgEditNFTResponse>}
 */
const methodInfo_Msg_EditNFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.MsgEditNFTResponse,
  /**
   * @param {!proto.irismod.nft.MsgEditNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgEditNFTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.MsgEditNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.MsgEditNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.MsgEditNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.MsgClient.prototype.editNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Msg/EditNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_EditNFT,
      callback);
};


/**
 * @param {!proto.irismod.nft.MsgEditNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.MsgEditNFTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.MsgPromiseClient.prototype.editNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Msg/EditNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_EditNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.nft.MsgTransferNFT,
 *   !proto.irismod.nft.MsgTransferNFTResponse>}
 */
const methodDescriptor_Msg_TransferNFT = new grpc.web.MethodDescriptor(
  '/irismod.nft.Msg/TransferNFT',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.MsgTransferNFT,
  proto.irismod.nft.MsgTransferNFTResponse,
  /**
   * @param {!proto.irismod.nft.MsgTransferNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgTransferNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.MsgTransferNFT,
 *   !proto.irismod.nft.MsgTransferNFTResponse>}
 */
const methodInfo_Msg_TransferNFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.MsgTransferNFTResponse,
  /**
   * @param {!proto.irismod.nft.MsgTransferNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgTransferNFTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.MsgTransferNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.MsgTransferNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.MsgTransferNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.MsgClient.prototype.transferNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Msg/TransferNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferNFT,
      callback);
};


/**
 * @param {!proto.irismod.nft.MsgTransferNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.MsgTransferNFTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.MsgPromiseClient.prototype.transferNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Msg/TransferNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferNFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.nft.MsgBurnNFT,
 *   !proto.irismod.nft.MsgBurnNFTResponse>}
 */
const methodDescriptor_Msg_BurnNFT = new grpc.web.MethodDescriptor(
  '/irismod.nft.Msg/BurnNFT',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.MsgBurnNFT,
  proto.irismod.nft.MsgBurnNFTResponse,
  /**
   * @param {!proto.irismod.nft.MsgBurnNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgBurnNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.MsgBurnNFT,
 *   !proto.irismod.nft.MsgBurnNFTResponse>}
 */
const methodInfo_Msg_BurnNFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.MsgBurnNFTResponse,
  /**
   * @param {!proto.irismod.nft.MsgBurnNFT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.MsgBurnNFTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.MsgBurnNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.MsgBurnNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.MsgBurnNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.MsgClient.prototype.burnNFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Msg/BurnNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnNFT,
      callback);
};


/**
 * @param {!proto.irismod.nft.MsgBurnNFT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.MsgBurnNFTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.MsgPromiseClient.prototype.burnNFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Msg/BurnNFT',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnNFT);
};


module.exports = proto.irismod.nft;

