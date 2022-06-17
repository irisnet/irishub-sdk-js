/**
 * @fileoverview gRPC-Web generated client stub for irismod.mt
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
proto.irismod.mt = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.mt.MsgClient =
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
proto.irismod.mt.MsgPromiseClient =
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
 *   !proto.irismod.mt.MsgIssueDenom,
 *   !proto.irismod.mt.MsgIssueDenomResponse>}
 */
const methodDescriptor_Msg_IssueDenom = new grpc.web.MethodDescriptor(
  '/irismod.mt.Msg/IssueDenom',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.MsgIssueDenom,
  proto.irismod.mt.MsgIssueDenomResponse,
  /**
   * @param {!proto.irismod.mt.MsgIssueDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgIssueDenomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.MsgIssueDenom,
 *   !proto.irismod.mt.MsgIssueDenomResponse>}
 */
const methodInfo_Msg_IssueDenom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.MsgIssueDenomResponse,
  /**
   * @param {!proto.irismod.mt.MsgIssueDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgIssueDenomResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.MsgIssueDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.MsgIssueDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.MsgIssueDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.MsgClient.prototype.issueDenom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Msg/IssueDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueDenom,
      callback);
};


/**
 * @param {!proto.irismod.mt.MsgIssueDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.MsgIssueDenomResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.MsgPromiseClient.prototype.issueDenom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Msg/IssueDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_IssueDenom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.MsgTransferDenom,
 *   !proto.irismod.mt.MsgTransferDenomResponse>}
 */
const methodDescriptor_Msg_TransferDenom = new grpc.web.MethodDescriptor(
  '/irismod.mt.Msg/TransferDenom',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.MsgTransferDenom,
  proto.irismod.mt.MsgTransferDenomResponse,
  /**
   * @param {!proto.irismod.mt.MsgTransferDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgTransferDenomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.MsgTransferDenom,
 *   !proto.irismod.mt.MsgTransferDenomResponse>}
 */
const methodInfo_Msg_TransferDenom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.MsgTransferDenomResponse,
  /**
   * @param {!proto.irismod.mt.MsgTransferDenom} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgTransferDenomResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.MsgTransferDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.MsgTransferDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.MsgTransferDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.MsgClient.prototype.transferDenom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Msg/TransferDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferDenom,
      callback);
};


/**
 * @param {!proto.irismod.mt.MsgTransferDenom} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.MsgTransferDenomResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.MsgPromiseClient.prototype.transferDenom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Msg/TransferDenom',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferDenom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.MsgMintMT,
 *   !proto.irismod.mt.MsgMintMTResponse>}
 */
const methodDescriptor_Msg_MintMT = new grpc.web.MethodDescriptor(
  '/irismod.mt.Msg/MintMT',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.MsgMintMT,
  proto.irismod.mt.MsgMintMTResponse,
  /**
   * @param {!proto.irismod.mt.MsgMintMT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgMintMTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.MsgMintMT,
 *   !proto.irismod.mt.MsgMintMTResponse>}
 */
const methodInfo_Msg_MintMT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.MsgMintMTResponse,
  /**
   * @param {!proto.irismod.mt.MsgMintMT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgMintMTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.MsgMintMT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.MsgMintMTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.MsgMintMTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.MsgClient.prototype.mintMT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Msg/MintMT',
      request,
      metadata || {},
      methodDescriptor_Msg_MintMT,
      callback);
};


/**
 * @param {!proto.irismod.mt.MsgMintMT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.MsgMintMTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.MsgPromiseClient.prototype.mintMT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Msg/MintMT',
      request,
      metadata || {},
      methodDescriptor_Msg_MintMT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.MsgEditMT,
 *   !proto.irismod.mt.MsgEditMTResponse>}
 */
const methodDescriptor_Msg_EditMT = new grpc.web.MethodDescriptor(
  '/irismod.mt.Msg/EditMT',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.MsgEditMT,
  proto.irismod.mt.MsgEditMTResponse,
  /**
   * @param {!proto.irismod.mt.MsgEditMT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgEditMTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.MsgEditMT,
 *   !proto.irismod.mt.MsgEditMTResponse>}
 */
const methodInfo_Msg_EditMT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.MsgEditMTResponse,
  /**
   * @param {!proto.irismod.mt.MsgEditMT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgEditMTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.MsgEditMT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.MsgEditMTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.MsgEditMTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.MsgClient.prototype.editMT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Msg/EditMT',
      request,
      metadata || {},
      methodDescriptor_Msg_EditMT,
      callback);
};


/**
 * @param {!proto.irismod.mt.MsgEditMT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.MsgEditMTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.MsgPromiseClient.prototype.editMT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Msg/EditMT',
      request,
      metadata || {},
      methodDescriptor_Msg_EditMT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.MsgTransferMT,
 *   !proto.irismod.mt.MsgTransferMTResponse>}
 */
const methodDescriptor_Msg_TransferMT = new grpc.web.MethodDescriptor(
  '/irismod.mt.Msg/TransferMT',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.MsgTransferMT,
  proto.irismod.mt.MsgTransferMTResponse,
  /**
   * @param {!proto.irismod.mt.MsgTransferMT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgTransferMTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.MsgTransferMT,
 *   !proto.irismod.mt.MsgTransferMTResponse>}
 */
const methodInfo_Msg_TransferMT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.MsgTransferMTResponse,
  /**
   * @param {!proto.irismod.mt.MsgTransferMT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgTransferMTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.MsgTransferMT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.MsgTransferMTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.MsgTransferMTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.MsgClient.prototype.transferMT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Msg/TransferMT',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferMT,
      callback);
};


/**
 * @param {!proto.irismod.mt.MsgTransferMT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.MsgTransferMTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.MsgPromiseClient.prototype.transferMT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Msg/TransferMT',
      request,
      metadata || {},
      methodDescriptor_Msg_TransferMT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.mt.MsgBurnMT,
 *   !proto.irismod.mt.MsgBurnMTResponse>}
 */
const methodDescriptor_Msg_BurnMT = new grpc.web.MethodDescriptor(
  '/irismod.mt.Msg/BurnMT',
  grpc.web.MethodType.UNARY,
  proto.irismod.mt.MsgBurnMT,
  proto.irismod.mt.MsgBurnMTResponse,
  /**
   * @param {!proto.irismod.mt.MsgBurnMT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgBurnMTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.mt.MsgBurnMT,
 *   !proto.irismod.mt.MsgBurnMTResponse>}
 */
const methodInfo_Msg_BurnMT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.mt.MsgBurnMTResponse,
  /**
   * @param {!proto.irismod.mt.MsgBurnMT} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.mt.MsgBurnMTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.mt.MsgBurnMT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.mt.MsgBurnMTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.mt.MsgBurnMTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.mt.MsgClient.prototype.burnMT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.mt.Msg/BurnMT',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnMT,
      callback);
};


/**
 * @param {!proto.irismod.mt.MsgBurnMT} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.mt.MsgBurnMTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.mt.MsgPromiseClient.prototype.burnMT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.mt.Msg/BurnMT',
      request,
      metadata || {},
      methodDescriptor_Msg_BurnMT);
};


module.exports = proto.irismod.mt;

