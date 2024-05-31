/**
 * @fileoverview gRPC-Web generated client stub for cosmos.staking.v1beta1
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

var cosmos_staking_v1beta1_staking_pb = require('../../../cosmos/staking/v1beta1/staking_pb.js')

var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var cosmos_query_v1_query_pb = require('../../../cosmos/query/v1/query_pb.js')

var amino_amino_pb = require('../../../amino/amino_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.staking = {};
proto.cosmos.staking.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.staking.v1beta1.QueryClient =
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
proto.cosmos.staking.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.staking.v1beta1.QueryValidatorsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryValidatorsResponse>}
 */
const methodDescriptor_Query_Validators = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/Validators',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryValidatorsRequest,
  proto.cosmos.staking.v1beta1.QueryValidatorsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryValidatorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryValidatorsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryValidatorsResponse>}
 */
const methodInfo_Query_Validators = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryValidatorsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryValidatorsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryValidatorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryValidatorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.validators =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Validators',
      request,
      metadata || {},
      methodDescriptor_Query_Validators,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryValidatorsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.validators =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Validators',
      request,
      metadata || {},
      methodDescriptor_Query_Validators);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryValidatorRequest,
 *   !proto.cosmos.staking.v1beta1.QueryValidatorResponse>}
 */
const methodDescriptor_Query_Validator = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/Validator',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryValidatorRequest,
  proto.cosmos.staking.v1beta1.QueryValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryValidatorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryValidatorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryValidatorRequest,
 *   !proto.cosmos.staking.v1beta1.QueryValidatorResponse>}
 */
const methodInfo_Query_Validator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryValidatorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryValidatorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryValidatorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryValidatorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.validator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Validator',
      request,
      metadata || {},
      methodDescriptor_Query_Validator,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryValidatorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.validator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Validator',
      request,
      metadata || {},
      methodDescriptor_Query_Validator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse>}
 */
const methodDescriptor_Query_ValidatorDelegations = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/ValidatorDelegations',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest,
  proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse>}
 */
const methodInfo_Query_ValidatorDelegations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.validatorDelegations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/ValidatorDelegations',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorDelegations,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryValidatorDelegationsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.validatorDelegations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/ValidatorDelegations',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorDelegations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse>}
 */
const methodDescriptor_Query_ValidatorUnbondingDelegations = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest,
  proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse>}
 */
const methodInfo_Query_ValidatorUnbondingDelegations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.validatorUnbondingDelegations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorUnbondingDelegations,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.validatorUnbondingDelegations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations',
      request,
      metadata || {},
      methodDescriptor_Query_ValidatorUnbondingDelegations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryDelegationRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegationResponse>}
 */
const methodDescriptor_Query_Delegation = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/Delegation',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryDelegationRequest,
  proto.cosmos.staking.v1beta1.QueryDelegationResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryDelegationRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegationResponse>}
 */
const methodInfo_Query_Delegation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryDelegationResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegationResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryDelegationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryDelegationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.delegation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Delegation',
      request,
      metadata || {},
      methodDescriptor_Query_Delegation,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryDelegationResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.delegation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Delegation',
      request,
      metadata || {},
      methodDescriptor_Query_Delegation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest,
 *   !proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse>}
 */
const methodDescriptor_Query_UnbondingDelegation = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/UnbondingDelegation',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest,
  proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest,
 *   !proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse>}
 */
const methodInfo_Query_UnbondingDelegation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.unbondingDelegation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/UnbondingDelegation',
      request,
      metadata || {},
      methodDescriptor_Query_UnbondingDelegation,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryUnbondingDelegationResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.unbondingDelegation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/UnbondingDelegation',
      request,
      metadata || {},
      methodDescriptor_Query_UnbondingDelegation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse>}
 */
const methodDescriptor_Query_DelegatorDelegations = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/DelegatorDelegations',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest,
  proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse>}
 */
const methodInfo_Query_DelegatorDelegations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.delegatorDelegations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorDelegations',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorDelegations,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.delegatorDelegations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorDelegations',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorDelegations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse>}
 */
const methodDescriptor_Query_DelegatorUnbondingDelegations = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest,
  proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse>}
 */
const methodInfo_Query_DelegatorUnbondingDelegations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.delegatorUnbondingDelegations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorUnbondingDelegations,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.delegatorUnbondingDelegations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorUnbondingDelegations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryRedelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryRedelegationsResponse>}
 */
const methodDescriptor_Query_Redelegations = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/Redelegations',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryRedelegationsRequest,
  proto.cosmos.staking.v1beta1.QueryRedelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryRedelegationsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryRedelegationsResponse>}
 */
const methodInfo_Query_Redelegations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryRedelegationsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryRedelegationsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryRedelegationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.redelegations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Redelegations',
      request,
      metadata || {},
      methodDescriptor_Query_Redelegations,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryRedelegationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryRedelegationsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.redelegations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Redelegations',
      request,
      metadata || {},
      methodDescriptor_Query_Redelegations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse>}
 */
const methodDescriptor_Query_DelegatorValidators = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/DelegatorValidators',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest,
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse>}
 */
const methodInfo_Query_DelegatorValidators = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.delegatorValidators =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorValidators',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorValidators,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.delegatorValidators =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorValidators',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorValidators);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse>}
 */
const methodDescriptor_Query_DelegatorValidator = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/DelegatorValidator',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest,
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest,
 *   !proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse>}
 */
const methodInfo_Query_DelegatorValidator = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.delegatorValidator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorValidator',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorValidator,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryDelegatorValidatorResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.delegatorValidator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/DelegatorValidator',
      request,
      metadata || {},
      methodDescriptor_Query_DelegatorValidator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest,
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse>}
 */
const methodDescriptor_Query_TokenizeShareRecordById = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/TokenizeShareRecordById',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest,
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest,
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse>}
 */
const methodInfo_Query_TokenizeShareRecordById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.tokenizeShareRecordById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TokenizeShareRecordById',
      request,
      metadata || {},
      methodDescriptor_Query_TokenizeShareRecordById,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.tokenizeShareRecordById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TokenizeShareRecordById',
      request,
      metadata || {},
      methodDescriptor_Query_TokenizeShareRecordById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest,
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse>}
 */
const methodDescriptor_Query_TokenizeShareRecordByDenom = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/TokenizeShareRecordByDenom',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest,
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest,
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse>}
 */
const methodInfo_Query_TokenizeShareRecordByDenom = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.tokenizeShareRecordByDenom =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TokenizeShareRecordByDenom',
      request,
      metadata || {},
      methodDescriptor_Query_TokenizeShareRecordByDenom,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.tokenizeShareRecordByDenom =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TokenizeShareRecordByDenom',
      request,
      metadata || {},
      methodDescriptor_Query_TokenizeShareRecordByDenom);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest,
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse>}
 */
const methodDescriptor_Query_TokenizeShareRecordsOwned = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/TokenizeShareRecordsOwned',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest,
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest,
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse>}
 */
const methodInfo_Query_TokenizeShareRecordsOwned = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.tokenizeShareRecordsOwned =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TokenizeShareRecordsOwned',
      request,
      metadata || {},
      methodDescriptor_Query_TokenizeShareRecordsOwned,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.tokenizeShareRecordsOwned =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TokenizeShareRecordsOwned',
      request,
      metadata || {},
      methodDescriptor_Query_TokenizeShareRecordsOwned);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse>}
 */
const methodDescriptor_Query_AllTokenizeShareRecords = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/AllTokenizeShareRecords',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest,
  proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse>}
 */
const methodInfo_Query_AllTokenizeShareRecords = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.allTokenizeShareRecords =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/AllTokenizeShareRecords',
      request,
      metadata || {},
      methodDescriptor_Query_AllTokenizeShareRecords,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.allTokenizeShareRecords =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/AllTokenizeShareRecords',
      request,
      metadata || {},
      methodDescriptor_Query_AllTokenizeShareRecords);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest,
 *   !proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse>}
 */
const methodDescriptor_Query_LastTokenizeShareRecordId = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/LastTokenizeShareRecordId',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest,
  proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest,
 *   !proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse>}
 */
const methodInfo_Query_LastTokenizeShareRecordId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.lastTokenizeShareRecordId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/LastTokenizeShareRecordId',
      request,
      metadata || {},
      methodDescriptor_Query_LastTokenizeShareRecordId,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.lastTokenizeShareRecordId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/LastTokenizeShareRecordId',
      request,
      metadata || {},
      methodDescriptor_Query_LastTokenizeShareRecordId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse>}
 */
const methodDescriptor_Query_TotalTokenizeSharedAssets = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/TotalTokenizeSharedAssets',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest,
  proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse>}
 */
const methodInfo_Query_TotalTokenizeSharedAssets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.totalTokenizeSharedAssets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TotalTokenizeSharedAssets',
      request,
      metadata || {},
      methodDescriptor_Query_TotalTokenizeSharedAssets,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.totalTokenizeSharedAssets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TotalTokenizeSharedAssets',
      request,
      metadata || {},
      methodDescriptor_Query_TotalTokenizeSharedAssets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked,
 *   !proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse>}
 */
const methodDescriptor_Query_TotalLiquidStaked = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/TotalLiquidStaked',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked,
  proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked,
 *   !proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse>}
 */
const methodInfo_Query_TotalLiquidStaked = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.totalLiquidStaked =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TotalLiquidStaked',
      request,
      metadata || {},
      methodDescriptor_Query_TotalLiquidStaked,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTotalLiquidStaked} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.totalLiquidStaked =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TotalLiquidStaked',
      request,
      metadata || {},
      methodDescriptor_Query_TotalLiquidStaked);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo,
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse>}
 */
const methodDescriptor_Query_TokenizeShareLockInfo = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/TokenizeShareLockInfo',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo,
  proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo,
 *   !proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse>}
 */
const methodInfo_Query_TokenizeShareLockInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.tokenizeShareLockInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TokenizeShareLockInfo',
      request,
      metadata || {},
      methodDescriptor_Query_TokenizeShareLockInfo,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.tokenizeShareLockInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/TokenizeShareLockInfo',
      request,
      metadata || {},
      methodDescriptor_Query_TokenizeShareLockInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest,
 *   !proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse>}
 */
const methodDescriptor_Query_HistoricalInfo = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/HistoricalInfo',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest,
  proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest,
 *   !proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse>}
 */
const methodInfo_Query_HistoricalInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.historicalInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/HistoricalInfo',
      request,
      metadata || {},
      methodDescriptor_Query_HistoricalInfo,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryHistoricalInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryHistoricalInfoResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.historicalInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/HistoricalInfo',
      request,
      metadata || {},
      methodDescriptor_Query_HistoricalInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryPoolRequest,
 *   !proto.cosmos.staking.v1beta1.QueryPoolResponse>}
 */
const methodDescriptor_Query_Pool = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/Pool',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryPoolRequest,
  proto.cosmos.staking.v1beta1.QueryPoolResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryPoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryPoolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryPoolRequest,
 *   !proto.cosmos.staking.v1beta1.QueryPoolResponse>}
 */
const methodInfo_Query_Pool = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryPoolResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryPoolRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryPoolResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryPoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryPoolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryPoolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.pool =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Pool',
      request,
      metadata || {},
      methodDescriptor_Query_Pool,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryPoolRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryPoolResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.pool =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Pool',
      request,
      metadata || {},
      methodDescriptor_Query_Pool);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.staking.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/cosmos.staking.v1beta1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.cosmos.staking.v1beta1.QueryParamsRequest,
  proto.cosmos.staking.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.staking.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.staking.v1beta1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.staking.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.staking.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.staking.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.staking.v1beta1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.staking.v1beta1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.staking.v1beta1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.cosmos.staking.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.staking.v1beta1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.staking.v1beta1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.staking.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.cosmos.staking.v1beta1;

