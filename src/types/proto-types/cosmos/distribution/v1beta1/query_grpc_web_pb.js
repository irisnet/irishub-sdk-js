/**
 * @fileoverview gRPC-Web generated client stub for cosmos.distribution.v1beta1
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

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_distribution_v1beta1_distribution_pb = require('../../../cosmos/distribution/v1beta1/distribution_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.distribution = {};
proto.cosmos.distribution.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.distribution.v1beta1.QueryClient =
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
proto.cosmos.distribution.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.distribution.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.QueryParamsRequest,
  proto.cosmos.distribution.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse>}
 */
const methodDescriptor_Query_ValidatorOutstandingRewards = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest,
  proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse>}
 */
const methodInfo_Query_ValidatorOutstandingRewards = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.QueryClient.prototype.validatorOutstandingRewards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorOutstandingRewards,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.QueryPromiseClient.prototype.validatorOutstandingRewards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/ValidatorOutstandingRewards',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorOutstandingRewards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorCommissionRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorCommissionResponse>}
 */
const methodDescriptor_Query_ValidatorCommission = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Query/ValidatorCommission',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.QueryValidatorCommissionRequest,
  proto.cosmos.distribution.v1beta1.QueryValidatorCommissionResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorCommissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryValidatorCommissionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorCommissionRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorCommissionResponse>}
 */
const methodInfo_Query_ValidatorCommission = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.QueryValidatorCommissionResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorCommissionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryValidatorCommissionResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorCommissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.QueryValidatorCommissionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.QueryValidatorCommissionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.QueryClient.prototype.validatorCommission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/ValidatorCommission',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorCommission,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorCommissionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.QueryValidatorCommissionResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.QueryPromiseClient.prototype.validatorCommission =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/ValidatorCommission',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorCommission);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorSlashesRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorSlashesResponse>}
 */
const methodDescriptor_Query_ValidatorSlashes = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Query/ValidatorSlashes',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.QueryValidatorSlashesRequest,
  proto.cosmos.distribution.v1beta1.QueryValidatorSlashesResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorSlashesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryValidatorSlashesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorSlashesRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryValidatorSlashesResponse>}
 */
const methodInfo_Query_ValidatorSlashes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.QueryValidatorSlashesResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorSlashesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryValidatorSlashesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorSlashesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.QueryValidatorSlashesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.QueryValidatorSlashesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.QueryClient.prototype.validatorSlashes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/ValidatorSlashes',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorSlashes,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryValidatorSlashesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.QueryValidatorSlashesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.QueryPromiseClient.prototype.validatorSlashes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/ValidatorSlashes',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorSlashes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.QueryDelegationRewardsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryDelegationRewardsResponse>}
 */
const methodDescriptor_Query_DelegationRewards = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Query/DelegationRewards',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.QueryDelegationRewardsRequest,
  proto.cosmos.distribution.v1beta1.QueryDelegationRewardsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryDelegationRewardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryDelegationRewardsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.QueryDelegationRewardsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryDelegationRewardsResponse>}
 */
const methodInfo_Query_DelegationRewards = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.QueryDelegationRewardsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryDelegationRewardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryDelegationRewardsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryDelegationRewardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.QueryDelegationRewardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.QueryDelegationRewardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.QueryClient.prototype.delegationRewards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegationRewards',
      request,
      metadata || {},
      methodDescriptor_Query_DelegationRewards,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryDelegationRewardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.QueryDelegationRewardsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.QueryPromiseClient.prototype.delegationRewards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegationRewards',
      request,
      metadata || {},
      methodDescriptor_Query_DelegationRewards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse>}
 */
const methodDescriptor_Query_DelegationTotalRewards = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Query/DelegationTotalRewards',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest,
  proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse>}
 */
const methodInfo_Query_DelegationTotalRewards = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.QueryClient.prototype.delegationTotalRewards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegationTotalRewards',
      request,
      metadata || {},
      methodDescriptor_Query_DelegationTotalRewards,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.QueryPromiseClient.prototype.delegationTotalRewards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegationTotalRewards',
      request,
      metadata || {},
      methodDescriptor_Query_DelegationTotalRewards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse>}
 */
const methodDescriptor_Query_DelegatorValidators = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Query/DelegatorValidators',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest,
  proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse>}
 */
const methodInfo_Query_DelegatorValidators = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.QueryClient.prototype.delegatorValidators =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegatorValidators',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorValidators,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.QueryPromiseClient.prototype.delegatorValidators =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegatorValidators',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorValidators);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse>}
 */
const methodDescriptor_Query_DelegatorWithdrawAddress = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest,
  proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse>}
 */
const methodInfo_Query_DelegatorWithdrawAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.QueryClient.prototype.delegatorWithdrawAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorWithdrawAddress,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.QueryPromiseClient.prototype.delegatorWithdrawAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/DelegatorWithdrawAddress',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorWithdrawAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.distribution.v1beta1.QueryCommunityPoolRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryCommunityPoolResponse>}
 */
const methodDescriptor_Query_CommunityPool = new grpc.web.MethodDescriptor(
  '/cosmos.distribution.v1beta1.Query/CommunityPool',
  grpc.web.MethodType.UNARY,
  proto.cosmos.distribution.v1beta1.QueryCommunityPoolRequest,
  proto.cosmos.distribution.v1beta1.QueryCommunityPoolResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryCommunityPoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryCommunityPoolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.distribution.v1beta1.QueryCommunityPoolRequest,
 *   !proto.cosmos.distribution.v1beta1.QueryCommunityPoolResponse>}
 */
const methodInfo_Query_CommunityPool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.distribution.v1beta1.QueryCommunityPoolResponse,
  /**
   * @param {!proto.cosmos.distribution.v1beta1.QueryCommunityPoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.distribution.v1beta1.QueryCommunityPoolResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryCommunityPoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.distribution.v1beta1.QueryCommunityPoolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.distribution.v1beta1.QueryCommunityPoolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.distribution.v1beta1.QueryClient.prototype.communityPool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/CommunityPool',
      request,
      metadata || {},
      methodDescriptor_Query_CommunityPool,
      callback);
};


/**
 * @param {!proto.cosmos.distribution.v1beta1.QueryCommunityPoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.distribution.v1beta1.QueryCommunityPoolResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.distribution.v1beta1.QueryPromiseClient.prototype.communityPool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.distribution.v1beta1.Query/CommunityPool',
      request,
      metadata || {},
      methodDescriptor_Query_CommunityPool);
};


module.exports = proto.cosmos.distribution.v1beta1;

