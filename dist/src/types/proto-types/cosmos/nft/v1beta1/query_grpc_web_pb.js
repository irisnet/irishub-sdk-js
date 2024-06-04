/**
 * @fileoverview gRPC-Web generated client stub for cosmos.nft.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_nft_v1beta1_nft_pb = require('../../../cosmos/nft/v1beta1/nft_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.nft = {};
proto.cosmos.nft.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.nft.v1beta1.QueryClient =
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
proto.cosmos.nft.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.nft.v1beta1.QueryBalanceRequest,
 *   !proto.cosmos.nft.v1beta1.QueryBalanceResponse>}
 */
const methodDescriptor_Query_Balance = new grpc.web.MethodDescriptor(
  '/cosmos.nft.v1beta1.Query/Balance',
  grpc.web.MethodType.UNARY,
  proto.cosmos.nft.v1beta1.QueryBalanceRequest,
  proto.cosmos.nft.v1beta1.QueryBalanceResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.nft.v1beta1.QueryBalanceRequest,
 *   !proto.cosmos.nft.v1beta1.QueryBalanceResponse>}
 */
const methodInfo_Query_Balance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.nft.v1beta1.QueryBalanceResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.nft.v1beta1.QueryBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.nft.v1beta1.QueryBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.nft.v1beta1.QueryClient.prototype.balance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Balance',
      request,
      metadata || {},
      methodDescriptor_Query_Balance,
      callback);
};


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.nft.v1beta1.QueryBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.nft.v1beta1.QueryPromiseClient.prototype.balance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Balance',
      request,
      metadata || {},
      methodDescriptor_Query_Balance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.nft.v1beta1.QueryOwnerRequest,
 *   !proto.cosmos.nft.v1beta1.QueryOwnerResponse>}
 */
const methodDescriptor_Query_Owner = new grpc.web.MethodDescriptor(
  '/cosmos.nft.v1beta1.Query/Owner',
  grpc.web.MethodType.UNARY,
  proto.cosmos.nft.v1beta1.QueryOwnerRequest,
  proto.cosmos.nft.v1beta1.QueryOwnerResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.nft.v1beta1.QueryOwnerRequest,
 *   !proto.cosmos.nft.v1beta1.QueryOwnerResponse>}
 */
const methodInfo_Query_Owner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.nft.v1beta1.QueryOwnerResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.nft.v1beta1.QueryOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.nft.v1beta1.QueryOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.nft.v1beta1.QueryClient.prototype.owner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Owner',
      request,
      metadata || {},
      methodDescriptor_Query_Owner,
      callback);
};


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.nft.v1beta1.QueryOwnerResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.nft.v1beta1.QueryPromiseClient.prototype.owner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Owner',
      request,
      metadata || {},
      methodDescriptor_Query_Owner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.nft.v1beta1.QuerySupplyRequest,
 *   !proto.cosmos.nft.v1beta1.QuerySupplyResponse>}
 */
const methodDescriptor_Query_Supply = new grpc.web.MethodDescriptor(
  '/cosmos.nft.v1beta1.Query/Supply',
  grpc.web.MethodType.UNARY,
  proto.cosmos.nft.v1beta1.QuerySupplyRequest,
  proto.cosmos.nft.v1beta1.QuerySupplyResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QuerySupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QuerySupplyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.nft.v1beta1.QuerySupplyRequest,
 *   !proto.cosmos.nft.v1beta1.QuerySupplyResponse>}
 */
const methodInfo_Query_Supply = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.nft.v1beta1.QuerySupplyResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QuerySupplyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QuerySupplyResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.nft.v1beta1.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.nft.v1beta1.QuerySupplyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.nft.v1beta1.QuerySupplyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.nft.v1beta1.QueryClient.prototype.supply =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply,
      callback);
};


/**
 * @param {!proto.cosmos.nft.v1beta1.QuerySupplyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.nft.v1beta1.QuerySupplyResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.nft.v1beta1.QueryPromiseClient.prototype.supply =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Supply',
      request,
      metadata || {},
      methodDescriptor_Query_Supply);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.nft.v1beta1.QueryNFTsRequest,
 *   !proto.cosmos.nft.v1beta1.QueryNFTsResponse>}
 */
const methodDescriptor_Query_NFTs = new grpc.web.MethodDescriptor(
  '/cosmos.nft.v1beta1.Query/NFTs',
  grpc.web.MethodType.UNARY,
  proto.cosmos.nft.v1beta1.QueryNFTsRequest,
  proto.cosmos.nft.v1beta1.QueryNFTsResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryNFTsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryNFTsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.nft.v1beta1.QueryNFTsRequest,
 *   !proto.cosmos.nft.v1beta1.QueryNFTsResponse>}
 */
const methodInfo_Query_NFTs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.nft.v1beta1.QueryNFTsResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryNFTsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryNFTsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryNFTsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.nft.v1beta1.QueryNFTsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.nft.v1beta1.QueryNFTsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.nft.v1beta1.QueryClient.prototype.nFTs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/NFTs',
      request,
      metadata || {},
      methodDescriptor_Query_NFTs,
      callback);
};


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryNFTsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.nft.v1beta1.QueryNFTsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.nft.v1beta1.QueryPromiseClient.prototype.nFTs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/NFTs',
      request,
      metadata || {},
      methodDescriptor_Query_NFTs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.nft.v1beta1.QueryNFTRequest,
 *   !proto.cosmos.nft.v1beta1.QueryNFTResponse>}
 */
const methodDescriptor_Query_NFT = new grpc.web.MethodDescriptor(
  '/cosmos.nft.v1beta1.Query/NFT',
  grpc.web.MethodType.UNARY,
  proto.cosmos.nft.v1beta1.QueryNFTRequest,
  proto.cosmos.nft.v1beta1.QueryNFTResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryNFTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryNFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.nft.v1beta1.QueryNFTRequest,
 *   !proto.cosmos.nft.v1beta1.QueryNFTResponse>}
 */
const methodInfo_Query_NFT = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.nft.v1beta1.QueryNFTResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryNFTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryNFTResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryNFTRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.nft.v1beta1.QueryNFTResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.nft.v1beta1.QueryNFTResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.nft.v1beta1.QueryClient.prototype.nFT =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/NFT',
      request,
      metadata || {},
      methodDescriptor_Query_NFT,
      callback);
};


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryNFTRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.nft.v1beta1.QueryNFTResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.nft.v1beta1.QueryPromiseClient.prototype.nFT =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/NFT',
      request,
      metadata || {},
      methodDescriptor_Query_NFT);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.nft.v1beta1.QueryClassRequest,
 *   !proto.cosmos.nft.v1beta1.QueryClassResponse>}
 */
const methodDescriptor_Query_Class = new grpc.web.MethodDescriptor(
  '/cosmos.nft.v1beta1.Query/Class',
  grpc.web.MethodType.UNARY,
  proto.cosmos.nft.v1beta1.QueryClassRequest,
  proto.cosmos.nft.v1beta1.QueryClassResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryClassRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryClassResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.nft.v1beta1.QueryClassRequest,
 *   !proto.cosmos.nft.v1beta1.QueryClassResponse>}
 */
const methodInfo_Query_Class = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.nft.v1beta1.QueryClassResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryClassRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryClassResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryClassRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.nft.v1beta1.QueryClassResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.nft.v1beta1.QueryClassResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.nft.v1beta1.QueryClient.prototype.class =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Class',
      request,
      metadata || {},
      methodDescriptor_Query_Class,
      callback);
};


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryClassRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.nft.v1beta1.QueryClassResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.nft.v1beta1.QueryPromiseClient.prototype.class =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Class',
      request,
      metadata || {},
      methodDescriptor_Query_Class);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.nft.v1beta1.QueryClassesRequest,
 *   !proto.cosmos.nft.v1beta1.QueryClassesResponse>}
 */
const methodDescriptor_Query_Classes = new grpc.web.MethodDescriptor(
  '/cosmos.nft.v1beta1.Query/Classes',
  grpc.web.MethodType.UNARY,
  proto.cosmos.nft.v1beta1.QueryClassesRequest,
  proto.cosmos.nft.v1beta1.QueryClassesResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryClassesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryClassesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.nft.v1beta1.QueryClassesRequest,
 *   !proto.cosmos.nft.v1beta1.QueryClassesResponse>}
 */
const methodInfo_Query_Classes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.nft.v1beta1.QueryClassesResponse,
  /**
   * @param {!proto.cosmos.nft.v1beta1.QueryClassesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.nft.v1beta1.QueryClassesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryClassesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.nft.v1beta1.QueryClassesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.nft.v1beta1.QueryClassesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.nft.v1beta1.QueryClient.prototype.classes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Classes',
      request,
      metadata || {},
      methodDescriptor_Query_Classes,
      callback);
};


/**
 * @param {!proto.cosmos.nft.v1beta1.QueryClassesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.nft.v1beta1.QueryClassesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.nft.v1beta1.QueryPromiseClient.prototype.classes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.nft.v1beta1.Query/Classes',
      request,
      metadata || {},
      methodDescriptor_Query_Classes);
};


module.exports = proto.cosmos.nft.v1beta1;

