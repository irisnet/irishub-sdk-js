/**
 * @fileoverview gRPC-Web generated client stub for tendermint.abci
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var tendermint_crypto_proof_pb = require('../../tendermint/crypto/proof_pb.js')

var tendermint_types_types_pb = require('../../tendermint/types/types_pb.js')

var tendermint_crypto_keys_pb = require('../../tendermint/crypto/keys_pb.js')

var tendermint_types_params_pb = require('../../tendermint/types/params_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')
const proto = {};
proto.tendermint = {};
proto.tendermint.abci = require('./types_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.tendermint.abci.ABCIApplicationClient =
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
proto.tendermint.abci.ABCIApplicationPromiseClient =
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
 *   !proto.tendermint.abci.RequestEcho,
 *   !proto.tendermint.abci.ResponseEcho>}
 */
const methodDescriptor_ABCIApplication_Echo = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/Echo',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestEcho,
  proto.tendermint.abci.ResponseEcho,
  /**
   * @param {!proto.tendermint.abci.RequestEcho} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseEcho.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestEcho,
 *   !proto.tendermint.abci.ResponseEcho>}
 */
const methodInfo_ABCIApplication_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseEcho,
  /**
   * @param {!proto.tendermint.abci.RequestEcho} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseEcho.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestEcho} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseEcho)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseEcho>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Echo',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Echo,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestEcho} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseEcho>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Echo',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Echo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestFlush,
 *   !proto.tendermint.abci.ResponseFlush>}
 */
const methodDescriptor_ABCIApplication_Flush = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/Flush',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestFlush,
  proto.tendermint.abci.ResponseFlush,
  /**
   * @param {!proto.tendermint.abci.RequestFlush} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseFlush.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestFlush,
 *   !proto.tendermint.abci.ResponseFlush>}
 */
const methodInfo_ABCIApplication_Flush = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseFlush,
  /**
   * @param {!proto.tendermint.abci.RequestFlush} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseFlush.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestFlush} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseFlush)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseFlush>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.flush =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Flush',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Flush,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestFlush} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseFlush>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.flush =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Flush',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Flush);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestInfo,
 *   !proto.tendermint.abci.ResponseInfo>}
 */
const methodDescriptor_ABCIApplication_Info = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/Info',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestInfo,
  proto.tendermint.abci.ResponseInfo,
  /**
   * @param {!proto.tendermint.abci.RequestInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestInfo,
 *   !proto.tendermint.abci.ResponseInfo>}
 */
const methodInfo_ABCIApplication_Info = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseInfo,
  /**
   * @param {!proto.tendermint.abci.RequestInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseInfo.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Info',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Info,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseInfo>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Info',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestSetOption,
 *   !proto.tendermint.abci.ResponseSetOption>}
 */
const methodDescriptor_ABCIApplication_SetOption = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/SetOption',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestSetOption,
  proto.tendermint.abci.ResponseSetOption,
  /**
   * @param {!proto.tendermint.abci.RequestSetOption} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseSetOption.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestSetOption,
 *   !proto.tendermint.abci.ResponseSetOption>}
 */
const methodInfo_ABCIApplication_SetOption = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseSetOption,
  /**
   * @param {!proto.tendermint.abci.RequestSetOption} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseSetOption.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestSetOption} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseSetOption)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseSetOption>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.setOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/SetOption',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_SetOption,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestSetOption} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseSetOption>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.setOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/SetOption',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_SetOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestDeliverTx,
 *   !proto.tendermint.abci.ResponseDeliverTx>}
 */
const methodDescriptor_ABCIApplication_DeliverTx = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/DeliverTx',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestDeliverTx,
  proto.tendermint.abci.ResponseDeliverTx,
  /**
   * @param {!proto.tendermint.abci.RequestDeliverTx} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseDeliverTx.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestDeliverTx,
 *   !proto.tendermint.abci.ResponseDeliverTx>}
 */
const methodInfo_ABCIApplication_DeliverTx = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseDeliverTx,
  /**
   * @param {!proto.tendermint.abci.RequestDeliverTx} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseDeliverTx.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestDeliverTx} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseDeliverTx)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseDeliverTx>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.deliverTx =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/DeliverTx',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_DeliverTx,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestDeliverTx} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseDeliverTx>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.deliverTx =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/DeliverTx',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_DeliverTx);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestCheckTx,
 *   !proto.tendermint.abci.ResponseCheckTx>}
 */
const methodDescriptor_ABCIApplication_CheckTx = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/CheckTx',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestCheckTx,
  proto.tendermint.abci.ResponseCheckTx,
  /**
   * @param {!proto.tendermint.abci.RequestCheckTx} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseCheckTx.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestCheckTx,
 *   !proto.tendermint.abci.ResponseCheckTx>}
 */
const methodInfo_ABCIApplication_CheckTx = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseCheckTx,
  /**
   * @param {!proto.tendermint.abci.RequestCheckTx} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseCheckTx.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestCheckTx} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseCheckTx)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseCheckTx>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.checkTx =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/CheckTx',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_CheckTx,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestCheckTx} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseCheckTx>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.checkTx =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/CheckTx',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_CheckTx);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestQuery,
 *   !proto.tendermint.abci.ResponseQuery>}
 */
const methodDescriptor_ABCIApplication_Query = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/Query',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestQuery,
  proto.tendermint.abci.ResponseQuery,
  /**
   * @param {!proto.tendermint.abci.RequestQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseQuery.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestQuery,
 *   !proto.tendermint.abci.ResponseQuery>}
 */
const methodInfo_ABCIApplication_Query = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseQuery,
  /**
   * @param {!proto.tendermint.abci.RequestQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseQuery.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseQuery)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseQuery>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.query =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Query',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Query,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseQuery>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.query =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Query',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Query);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestCommit,
 *   !proto.tendermint.abci.ResponseCommit>}
 */
const methodDescriptor_ABCIApplication_Commit = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/Commit',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestCommit,
  proto.tendermint.abci.ResponseCommit,
  /**
   * @param {!proto.tendermint.abci.RequestCommit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseCommit.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestCommit,
 *   !proto.tendermint.abci.ResponseCommit>}
 */
const methodInfo_ABCIApplication_Commit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseCommit,
  /**
   * @param {!proto.tendermint.abci.RequestCommit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseCommit.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestCommit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseCommit)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseCommit>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.commit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Commit',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Commit,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestCommit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseCommit>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.commit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/Commit',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_Commit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestInitChain,
 *   !proto.tendermint.abci.ResponseInitChain>}
 */
const methodDescriptor_ABCIApplication_InitChain = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/InitChain',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestInitChain,
  proto.tendermint.abci.ResponseInitChain,
  /**
   * @param {!proto.tendermint.abci.RequestInitChain} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseInitChain.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestInitChain,
 *   !proto.tendermint.abci.ResponseInitChain>}
 */
const methodInfo_ABCIApplication_InitChain = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseInitChain,
  /**
   * @param {!proto.tendermint.abci.RequestInitChain} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseInitChain.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestInitChain} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseInitChain)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseInitChain>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.initChain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/InitChain',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_InitChain,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestInitChain} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseInitChain>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.initChain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/InitChain',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_InitChain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestBeginBlock,
 *   !proto.tendermint.abci.ResponseBeginBlock>}
 */
const methodDescriptor_ABCIApplication_BeginBlock = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/BeginBlock',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestBeginBlock,
  proto.tendermint.abci.ResponseBeginBlock,
  /**
   * @param {!proto.tendermint.abci.RequestBeginBlock} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseBeginBlock.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestBeginBlock,
 *   !proto.tendermint.abci.ResponseBeginBlock>}
 */
const methodInfo_ABCIApplication_BeginBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseBeginBlock,
  /**
   * @param {!proto.tendermint.abci.RequestBeginBlock} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseBeginBlock.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestBeginBlock} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseBeginBlock)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseBeginBlock>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.beginBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/BeginBlock',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_BeginBlock,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestBeginBlock} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseBeginBlock>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.beginBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/BeginBlock',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_BeginBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestEndBlock,
 *   !proto.tendermint.abci.ResponseEndBlock>}
 */
const methodDescriptor_ABCIApplication_EndBlock = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/EndBlock',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestEndBlock,
  proto.tendermint.abci.ResponseEndBlock,
  /**
   * @param {!proto.tendermint.abci.RequestEndBlock} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseEndBlock.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestEndBlock,
 *   !proto.tendermint.abci.ResponseEndBlock>}
 */
const methodInfo_ABCIApplication_EndBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseEndBlock,
  /**
   * @param {!proto.tendermint.abci.RequestEndBlock} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseEndBlock.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestEndBlock} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseEndBlock)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseEndBlock>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.endBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/EndBlock',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_EndBlock,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestEndBlock} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseEndBlock>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.endBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/EndBlock',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_EndBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestListSnapshots,
 *   !proto.tendermint.abci.ResponseListSnapshots>}
 */
const methodDescriptor_ABCIApplication_ListSnapshots = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/ListSnapshots',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestListSnapshots,
  proto.tendermint.abci.ResponseListSnapshots,
  /**
   * @param {!proto.tendermint.abci.RequestListSnapshots} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseListSnapshots.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestListSnapshots,
 *   !proto.tendermint.abci.ResponseListSnapshots>}
 */
const methodInfo_ABCIApplication_ListSnapshots = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseListSnapshots,
  /**
   * @param {!proto.tendermint.abci.RequestListSnapshots} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseListSnapshots.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestListSnapshots} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseListSnapshots)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseListSnapshots>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.listSnapshots =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/ListSnapshots',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_ListSnapshots,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestListSnapshots} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseListSnapshots>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.listSnapshots =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/ListSnapshots',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_ListSnapshots);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestOfferSnapshot,
 *   !proto.tendermint.abci.ResponseOfferSnapshot>}
 */
const methodDescriptor_ABCIApplication_OfferSnapshot = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/OfferSnapshot',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestOfferSnapshot,
  proto.tendermint.abci.ResponseOfferSnapshot,
  /**
   * @param {!proto.tendermint.abci.RequestOfferSnapshot} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseOfferSnapshot.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestOfferSnapshot,
 *   !proto.tendermint.abci.ResponseOfferSnapshot>}
 */
const methodInfo_ABCIApplication_OfferSnapshot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseOfferSnapshot,
  /**
   * @param {!proto.tendermint.abci.RequestOfferSnapshot} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseOfferSnapshot.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestOfferSnapshot} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseOfferSnapshot)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseOfferSnapshot>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.offerSnapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/OfferSnapshot',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_OfferSnapshot,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestOfferSnapshot} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseOfferSnapshot>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.offerSnapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/OfferSnapshot',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_OfferSnapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestLoadSnapshotChunk,
 *   !proto.tendermint.abci.ResponseLoadSnapshotChunk>}
 */
const methodDescriptor_ABCIApplication_LoadSnapshotChunk = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/LoadSnapshotChunk',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestLoadSnapshotChunk,
  proto.tendermint.abci.ResponseLoadSnapshotChunk,
  /**
   * @param {!proto.tendermint.abci.RequestLoadSnapshotChunk} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseLoadSnapshotChunk.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestLoadSnapshotChunk,
 *   !proto.tendermint.abci.ResponseLoadSnapshotChunk>}
 */
const methodInfo_ABCIApplication_LoadSnapshotChunk = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseLoadSnapshotChunk,
  /**
   * @param {!proto.tendermint.abci.RequestLoadSnapshotChunk} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseLoadSnapshotChunk.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestLoadSnapshotChunk} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseLoadSnapshotChunk)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseLoadSnapshotChunk>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.loadSnapshotChunk =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/LoadSnapshotChunk',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_LoadSnapshotChunk,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestLoadSnapshotChunk} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseLoadSnapshotChunk>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.loadSnapshotChunk =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/LoadSnapshotChunk',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_LoadSnapshotChunk);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tendermint.abci.RequestApplySnapshotChunk,
 *   !proto.tendermint.abci.ResponseApplySnapshotChunk>}
 */
const methodDescriptor_ABCIApplication_ApplySnapshotChunk = new grpc.web.MethodDescriptor(
  '/tendermint.abci.ABCIApplication/ApplySnapshotChunk',
  grpc.web.MethodType.UNARY,
  proto.tendermint.abci.RequestApplySnapshotChunk,
  proto.tendermint.abci.ResponseApplySnapshotChunk,
  /**
   * @param {!proto.tendermint.abci.RequestApplySnapshotChunk} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseApplySnapshotChunk.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.tendermint.abci.RequestApplySnapshotChunk,
 *   !proto.tendermint.abci.ResponseApplySnapshotChunk>}
 */
const methodInfo_ABCIApplication_ApplySnapshotChunk = new grpc.web.AbstractClientBase.MethodInfo(
  proto.tendermint.abci.ResponseApplySnapshotChunk,
  /**
   * @param {!proto.tendermint.abci.RequestApplySnapshotChunk} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tendermint.abci.ResponseApplySnapshotChunk.deserializeBinary
);


/**
 * @param {!proto.tendermint.abci.RequestApplySnapshotChunk} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.tendermint.abci.ResponseApplySnapshotChunk)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tendermint.abci.ResponseApplySnapshotChunk>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tendermint.abci.ABCIApplicationClient.prototype.applySnapshotChunk =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/ApplySnapshotChunk',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_ApplySnapshotChunk,
      callback);
};


/**
 * @param {!proto.tendermint.abci.RequestApplySnapshotChunk} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tendermint.abci.ResponseApplySnapshotChunk>}
 *     Promise that resolves to the response
 */
proto.tendermint.abci.ABCIApplicationPromiseClient.prototype.applySnapshotChunk =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tendermint.abci.ABCIApplication/ApplySnapshotChunk',
      request,
      metadata || {},
      methodDescriptor_ABCIApplication_ApplySnapshotChunk);
};


module.exports = proto.tendermint.abci;

