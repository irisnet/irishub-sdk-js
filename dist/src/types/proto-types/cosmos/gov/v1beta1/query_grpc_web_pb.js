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


var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_gov_v1beta1_gov_pb = require('../../../cosmos/gov/v1beta1/gov_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.gov = {};
proto.cosmos.gov.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.gov.v1beta1.QueryClient =
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
proto.cosmos.gov.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.gov.v1beta1.QueryProposalRequest,
 *   !proto.cosmos.gov.v1beta1.QueryProposalResponse>}
 */
const methodDescriptor_Query_Proposal = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Query/Proposal',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.QueryProposalRequest,
  proto.cosmos.gov.v1beta1.QueryProposalResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryProposalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryProposalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.QueryProposalRequest,
 *   !proto.cosmos.gov.v1beta1.QueryProposalResponse>}
 */
const methodInfo_Query_Proposal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.QueryProposalResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryProposalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryProposalResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryProposalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.QueryProposalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.QueryProposalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.QueryClient.prototype.proposal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Proposal',
      request,
      metadata || {},
      methodDescriptor_Query_Proposal,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryProposalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.QueryProposalResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.QueryPromiseClient.prototype.proposal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Proposal',
      request,
      metadata || {},
      methodDescriptor_Query_Proposal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta1.QueryProposalsRequest,
 *   !proto.cosmos.gov.v1beta1.QueryProposalsResponse>}
 */
const methodDescriptor_Query_Proposals = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Query/Proposals',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.QueryProposalsRequest,
  proto.cosmos.gov.v1beta1.QueryProposalsResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryProposalsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryProposalsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.QueryProposalsRequest,
 *   !proto.cosmos.gov.v1beta1.QueryProposalsResponse>}
 */
const methodInfo_Query_Proposals = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.QueryProposalsResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryProposalsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryProposalsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryProposalsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.QueryProposalsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.QueryProposalsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.QueryClient.prototype.proposals =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Proposals',
      request,
      metadata || {},
      methodDescriptor_Query_Proposals,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryProposalsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.QueryProposalsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.QueryPromiseClient.prototype.proposals =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Proposals',
      request,
      metadata || {},
      methodDescriptor_Query_Proposals);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta1.QueryVoteRequest,
 *   !proto.cosmos.gov.v1beta1.QueryVoteResponse>}
 */
const methodDescriptor_Query_Vote = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Query/Vote',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.QueryVoteRequest,
  proto.cosmos.gov.v1beta1.QueryVoteResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryVoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryVoteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.QueryVoteRequest,
 *   !proto.cosmos.gov.v1beta1.QueryVoteResponse>}
 */
const methodInfo_Query_Vote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.QueryVoteResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryVoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryVoteResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryVoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.QueryVoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.QueryVoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.QueryClient.prototype.vote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Vote',
      request,
      metadata || {},
      methodDescriptor_Query_Vote,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryVoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.QueryVoteResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.QueryPromiseClient.prototype.vote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Vote',
      request,
      metadata || {},
      methodDescriptor_Query_Vote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta1.QueryVotesRequest,
 *   !proto.cosmos.gov.v1beta1.QueryVotesResponse>}
 */
const methodDescriptor_Query_Votes = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Query/Votes',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.QueryVotesRequest,
  proto.cosmos.gov.v1beta1.QueryVotesResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryVotesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryVotesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.QueryVotesRequest,
 *   !proto.cosmos.gov.v1beta1.QueryVotesResponse>}
 */
const methodInfo_Query_Votes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.QueryVotesResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryVotesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryVotesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryVotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.QueryVotesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.QueryVotesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.QueryClient.prototype.votes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Votes',
      request,
      metadata || {},
      methodDescriptor_Query_Votes,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryVotesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.QueryVotesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.QueryPromiseClient.prototype.votes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Votes',
      request,
      metadata || {},
      methodDescriptor_Query_Votes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.gov.v1beta1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.QueryParamsRequest,
  proto.cosmos.gov.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.gov.v1beta1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta1.QueryDepositRequest,
 *   !proto.cosmos.gov.v1beta1.QueryDepositResponse>}
 */
const methodDescriptor_Query_Deposit = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Query/Deposit',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.QueryDepositRequest,
  proto.cosmos.gov.v1beta1.QueryDepositResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryDepositRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryDepositResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.QueryDepositRequest,
 *   !proto.cosmos.gov.v1beta1.QueryDepositResponse>}
 */
const methodInfo_Query_Deposit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.QueryDepositResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryDepositRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryDepositResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryDepositRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.QueryDepositResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.QueryDepositResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.QueryClient.prototype.deposit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Deposit',
      request,
      metadata || {},
      methodDescriptor_Query_Deposit,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryDepositRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.QueryDepositResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.QueryPromiseClient.prototype.deposit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Deposit',
      request,
      metadata || {},
      methodDescriptor_Query_Deposit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta1.QueryDepositsRequest,
 *   !proto.cosmos.gov.v1beta1.QueryDepositsResponse>}
 */
const methodDescriptor_Query_Deposits = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Query/Deposits',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.QueryDepositsRequest,
  proto.cosmos.gov.v1beta1.QueryDepositsResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryDepositsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryDepositsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.QueryDepositsRequest,
 *   !proto.cosmos.gov.v1beta1.QueryDepositsResponse>}
 */
const methodInfo_Query_Deposits = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.QueryDepositsResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryDepositsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryDepositsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryDepositsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.QueryDepositsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.QueryDepositsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.QueryClient.prototype.deposits =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Deposits',
      request,
      metadata || {},
      methodDescriptor_Query_Deposits,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryDepositsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.QueryDepositsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.QueryPromiseClient.prototype.deposits =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/Deposits',
      request,
      metadata || {},
      methodDescriptor_Query_Deposits);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.gov.v1beta1.QueryTallyResultRequest,
 *   !proto.cosmos.gov.v1beta1.QueryTallyResultResponse>}
 */
const methodDescriptor_Query_TallyResult = new grpc.web.MethodDescriptor(
  '/cosmos.gov.v1beta1.Query/TallyResult',
  grpc.web.MethodType.UNARY,
  proto.cosmos.gov.v1beta1.QueryTallyResultRequest,
  proto.cosmos.gov.v1beta1.QueryTallyResultResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryTallyResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryTallyResultResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.gov.v1beta1.QueryTallyResultRequest,
 *   !proto.cosmos.gov.v1beta1.QueryTallyResultResponse>}
 */
const methodInfo_Query_TallyResult = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.gov.v1beta1.QueryTallyResultResponse,
  /**
   * @param {!proto.cosmos.gov.v1beta1.QueryTallyResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.gov.v1beta1.QueryTallyResultResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryTallyResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.gov.v1beta1.QueryTallyResultResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.gov.v1beta1.QueryTallyResultResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.gov.v1beta1.QueryClient.prototype.tallyResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/TallyResult',
      request,
      metadata || {},
      methodDescriptor_Query_TallyResult,
      callback);
};


/**
 * @param {!proto.cosmos.gov.v1beta1.QueryTallyResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.gov.v1beta1.QueryTallyResultResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.gov.v1beta1.QueryPromiseClient.prototype.tallyResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.gov.v1beta1.Query/TallyResult',
      request,
      metadata || {},
      methodDescriptor_Query_TallyResult);
};


module.exports = proto.cosmos.gov.v1beta1;

