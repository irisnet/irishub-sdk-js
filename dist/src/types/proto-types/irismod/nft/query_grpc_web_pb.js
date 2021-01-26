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

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var irismod_nft_nft_pb = require('../../irismod/nft/nft_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.nft = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.nft.QueryClient =
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
proto.irismod.nft.QueryPromiseClient =
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
 *   !proto.irismod.nft.QuerySupplyRequest,
 *   !proto.irismod.nft.QuerySupplyResponse>}
 */
const methodDescriptor_Query_Supply = new grpc.web.MethodDescriptor(
  '/irismod.nft.Query/Supply',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.QuerySupplyRequest,
  proto.irismod.nft.QuerySupplyResponse,
  /**
   * @param {!proto.irismod.nft.QuerySupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QuerySupplyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.QuerySupplyRequest,
 *   !proto.irismod.nft.QuerySupplyResponse>}
 */
const methodInfo_Query_Supply = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.QuerySupplyResponse,
  /**
   * @param {!proto.irismod.nft.QuerySupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QuerySupplyResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.QuerySupplyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.QuerySupplyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.QueryClient.prototype.supply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply,
      callback);
};


/**
 * @param {!proto.irismod.nft.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.QuerySupplyResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.QueryPromiseClient.prototype.supply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.nft.QueryOwnerRequest,
 *   !proto.irismod.nft.QueryOwnerResponse>}
 */
const methodDescriptor_Query_Owner = new grpc.web.MethodDescriptor(
  '/irismod.nft.Query/Owner',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.QueryOwnerRequest,
  proto.irismod.nft.QueryOwnerResponse,
  /**
   * @param {!proto.irismod.nft.QueryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.QueryOwnerRequest,
 *   !proto.irismod.nft.QueryOwnerResponse>}
 */
const methodInfo_Query_Owner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.QueryOwnerResponse,
  /**
   * @param {!proto.irismod.nft.QueryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.QueryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.QueryOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.QueryOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.QueryClient.prototype.owner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Query/Owner',
      request,
      metadata || {},
      methodDescriptor_Query_Owner,
      callback);
};


/**
 * @param {!proto.irismod.nft.QueryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.QueryOwnerResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.QueryPromiseClient.prototype.owner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Query/Owner',
      request,
      metadata || {},
      methodDescriptor_Query_Owner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.nft.QueryCollectionRequest,
 *   !proto.irismod.nft.QueryCollectionResponse>}
 */
const methodDescriptor_Query_Collection = new grpc.web.MethodDescriptor(
  '/irismod.nft.Query/Collection',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.QueryCollectionRequest,
  proto.irismod.nft.QueryCollectionResponse,
  /**
   * @param {!proto.irismod.nft.QueryCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryCollectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.QueryCollectionRequest,
 *   !proto.irismod.nft.QueryCollectionResponse>}
 */
const methodInfo_Query_Collection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.QueryCollectionResponse,
  /**
   * @param {!proto.irismod.nft.QueryCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryCollectionResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.QueryCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.QueryCollectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.QueryCollectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.QueryClient.prototype.collection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Query/Collection',
      request,
      metadata || {},
      methodDescriptor_Query_Collection,
      callback);
};


/**
 * @param {!proto.irismod.nft.QueryCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.QueryCollectionResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.QueryPromiseClient.prototype.collection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Query/Collection',
      request,
      metadata || {},
      methodDescriptor_Query_Collection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.nft.QueryDenomRequest,
 *   !proto.irismod.nft.QueryDenomResponse>}
 */
const methodDescriptor_Query_Denom = new grpc.web.MethodDescriptor(
  '/irismod.nft.Query/Denom',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.QueryDenomRequest,
  proto.irismod.nft.QueryDenomResponse,
  /**
   * @param {!proto.irismod.nft.QueryDenomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryDenomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.QueryDenomRequest,
 *   !proto.irismod.nft.QueryDenomResponse>}
 */
const methodInfo_Query_Denom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.QueryDenomResponse,
  /**
   * @param {!proto.irismod.nft.QueryDenomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryDenomResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.QueryDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.QueryDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.QueryDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.QueryClient.prototype.denom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Query/Denom',
      request,
      metadata || {},
      methodDescriptor_Query_Denom,
      callback);
};


/**
 * @param {!proto.irismod.nft.QueryDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.QueryDenomResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.QueryPromiseClient.prototype.denom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Query/Denom',
      request,
      metadata || {},
      methodDescriptor_Query_Denom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.nft.QueryDenomsRequest,
 *   !proto.irismod.nft.QueryDenomsResponse>}
 */
const methodDescriptor_Query_Denoms = new grpc.web.MethodDescriptor(
  '/irismod.nft.Query/Denoms',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.QueryDenomsRequest,
  proto.irismod.nft.QueryDenomsResponse,
  /**
   * @param {!proto.irismod.nft.QueryDenomsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryDenomsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.QueryDenomsRequest,
 *   !proto.irismod.nft.QueryDenomsResponse>}
 */
const methodInfo_Query_Denoms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.QueryDenomsResponse,
  /**
   * @param {!proto.irismod.nft.QueryDenomsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryDenomsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.QueryDenomsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.QueryDenomsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.QueryDenomsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.QueryClient.prototype.denoms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Query/Denoms',
      request,
      metadata || {},
      methodDescriptor_Query_Denoms,
      callback);
};


/**
 * @param {!proto.irismod.nft.QueryDenomsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.QueryDenomsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.QueryPromiseClient.prototype.denoms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Query/Denoms',
      request,
      metadata || {},
      methodDescriptor_Query_Denoms);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.nft.QueryNFTRequest,
 *   !proto.irismod.nft.QueryNFTResponse>}
 */
const methodDescriptor_Query_NFT = new grpc.web.MethodDescriptor(
  '/irismod.nft.Query/NFT',
  grpc.web.MethodType.UNARY,
  proto.irismod.nft.QueryNFTRequest,
  proto.irismod.nft.QueryNFTResponse,
  /**
   * @param {!proto.irismod.nft.QueryNFTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.nft.QueryNFTRequest,
 *   !proto.irismod.nft.QueryNFTResponse>}
 */
const methodInfo_Query_NFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.nft.QueryNFTResponse,
  /**
   * @param {!proto.irismod.nft.QueryNFTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.nft.QueryNFTResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.nft.QueryNFTRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.nft.QueryNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.nft.QueryNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.nft.QueryClient.prototype.nFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.nft.Query/NFT',
      request,
      metadata || {},
      methodDescriptor_Query_NFT,
      callback);
};


/**
 * @param {!proto.irismod.nft.QueryNFTRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.nft.QueryNFTResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.nft.QueryPromiseClient.prototype.nFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.nft.Query/NFT',
      request,
      metadata || {},
      methodDescriptor_Query_NFT);
};


module.exports = proto.irismod.nft;

