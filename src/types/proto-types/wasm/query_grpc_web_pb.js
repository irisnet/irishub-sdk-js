/**
 * @fileoverview gRPC-Web generated client stub for wasmd.x.wasmd.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../gogoproto/gogo_pb.js')

var wasm_types_pb = require('../wasm/types_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../cosmos/base/query/v1beta1/pagination_pb.js')
const proto = {};
proto.wasmd = {};
proto.wasmd.x = {};
proto.wasmd.x.wasmd = {};
proto.wasmd.x.wasmd.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wasmd.x.wasmd.v1beta1.QueryClient =
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
proto.wasmd.x.wasmd.v1beta1.QueryPromiseClient =
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
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractInfoRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse>}
 */
const methodDescriptor_Query_ContractInfo = new grpc.web.MethodDescriptor(
  '/wasmd.x.wasmd.v1beta1.Query/ContractInfo',
  grpc.web.MethodType.UNARY,
  proto.wasmd.x.wasmd.v1beta1.QueryContractInfoRequest,
  proto.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractInfoRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse>}
 */
const methodInfo_Query_ContractInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse.deserializeBinary
);


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmd.x.wasmd.v1beta1.QueryClient.prototype.contractInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/ContractInfo',
      request,
      metadata || {},
      methodDescriptor_Query_ContractInfo,
      callback);
};


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmd.x.wasmd.v1beta1.QueryContractInfoResponse>}
 *     Promise that resolves to the response
 */
proto.wasmd.x.wasmd.v1beta1.QueryPromiseClient.prototype.contractInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/ContractInfo',
      request,
      metadata || {},
      methodDescriptor_Query_ContractInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse>}
 */
const methodDescriptor_Query_ContractHistory = new grpc.web.MethodDescriptor(
  '/wasmd.x.wasmd.v1beta1.Query/ContractHistory',
  grpc.web.MethodType.UNARY,
  proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest,
  proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse>}
 */
const methodInfo_Query_ContractHistory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse.deserializeBinary
);


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmd.x.wasmd.v1beta1.QueryClient.prototype.contractHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/ContractHistory',
      request,
      metadata || {},
      methodDescriptor_Query_ContractHistory,
      callback);
};


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmd.x.wasmd.v1beta1.QueryContractHistoryResponse>}
 *     Promise that resolves to the response
 */
proto.wasmd.x.wasmd.v1beta1.QueryPromiseClient.prototype.contractHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/ContractHistory',
      request,
      metadata || {},
      methodDescriptor_Query_ContractHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse>}
 */
const methodDescriptor_Query_ContractsByCode = new grpc.web.MethodDescriptor(
  '/wasmd.x.wasmd.v1beta1.Query/ContractsByCode',
  grpc.web.MethodType.UNARY,
  proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest,
  proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse>}
 */
const methodInfo_Query_ContractsByCode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse.deserializeBinary
);


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmd.x.wasmd.v1beta1.QueryClient.prototype.contractsByCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/ContractsByCode',
      request,
      metadata || {},
      methodDescriptor_Query_ContractsByCode,
      callback);
};


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmd.x.wasmd.v1beta1.QueryContractsByCodeResponse>}
 *     Promise that resolves to the response
 */
proto.wasmd.x.wasmd.v1beta1.QueryPromiseClient.prototype.contractsByCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/ContractsByCode',
      request,
      metadata || {},
      methodDescriptor_Query_ContractsByCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse>}
 */
const methodDescriptor_Query_AllContractState = new grpc.web.MethodDescriptor(
  '/wasmd.x.wasmd.v1beta1.Query/AllContractState',
  grpc.web.MethodType.UNARY,
  proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest,
  proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse>}
 */
const methodInfo_Query_AllContractState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse.deserializeBinary
);


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmd.x.wasmd.v1beta1.QueryClient.prototype.allContractState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/AllContractState',
      request,
      metadata || {},
      methodDescriptor_Query_AllContractState,
      callback);
};


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmd.x.wasmd.v1beta1.QueryAllContractStateResponse>}
 *     Promise that resolves to the response
 */
proto.wasmd.x.wasmd.v1beta1.QueryPromiseClient.prototype.allContractState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/AllContractState',
      request,
      metadata || {},
      methodDescriptor_Query_AllContractState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse>}
 */
const methodDescriptor_Query_RawContractState = new grpc.web.MethodDescriptor(
  '/wasmd.x.wasmd.v1beta1.Query/RawContractState',
  grpc.web.MethodType.UNARY,
  proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest,
  proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse>}
 */
const methodInfo_Query_RawContractState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse.deserializeBinary
);


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmd.x.wasmd.v1beta1.QueryClient.prototype.rawContractState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/RawContractState',
      request,
      metadata || {},
      methodDescriptor_Query_RawContractState,
      callback);
};


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmd.x.wasmd.v1beta1.QueryRawContractStateResponse>}
 *     Promise that resolves to the response
 */
proto.wasmd.x.wasmd.v1beta1.QueryPromiseClient.prototype.rawContractState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/RawContractState',
      request,
      metadata || {},
      methodDescriptor_Query_RawContractState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse>}
 */
const methodDescriptor_Query_SmartContractState = new grpc.web.MethodDescriptor(
  '/wasmd.x.wasmd.v1beta1.Query/SmartContractState',
  grpc.web.MethodType.UNARY,
  proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest,
  proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse>}
 */
const methodInfo_Query_SmartContractState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse.deserializeBinary
);


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmd.x.wasmd.v1beta1.QueryClient.prototype.smartContractState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/SmartContractState',
      request,
      metadata || {},
      methodDescriptor_Query_SmartContractState,
      callback);
};


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmd.x.wasmd.v1beta1.QuerySmartContractStateResponse>}
 *     Promise that resolves to the response
 */
proto.wasmd.x.wasmd.v1beta1.QueryPromiseClient.prototype.smartContractState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/SmartContractState',
      request,
      metadata || {},
      methodDescriptor_Query_SmartContractState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryCodeRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryCodeResponse>}
 */
const methodDescriptor_Query_Code = new grpc.web.MethodDescriptor(
  '/wasmd.x.wasmd.v1beta1.Query/Code',
  grpc.web.MethodType.UNARY,
  proto.wasmd.x.wasmd.v1beta1.QueryCodeRequest,
  proto.wasmd.x.wasmd.v1beta1.QueryCodeResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryCodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryCodeRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryCodeResponse>}
 */
const methodInfo_Query_Code = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wasmd.x.wasmd.v1beta1.QueryCodeResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryCodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryCodeResponse.deserializeBinary
);


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wasmd.x.wasmd.v1beta1.QueryCodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmd.x.wasmd.v1beta1.QueryCodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmd.x.wasmd.v1beta1.QueryClient.prototype.code =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/Code',
      request,
      metadata || {},
      methodDescriptor_Query_Code,
      callback);
};


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryCodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmd.x.wasmd.v1beta1.QueryCodeResponse>}
 *     Promise that resolves to the response
 */
proto.wasmd.x.wasmd.v1beta1.QueryPromiseClient.prototype.code =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/Code',
      request,
      metadata || {},
      methodDescriptor_Query_Code);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryCodesRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryCodesResponse>}
 */
const methodDescriptor_Query_Codes = new grpc.web.MethodDescriptor(
  '/wasmd.x.wasmd.v1beta1.Query/Codes',
  grpc.web.MethodType.UNARY,
  proto.wasmd.x.wasmd.v1beta1.QueryCodesRequest,
  proto.wasmd.x.wasmd.v1beta1.QueryCodesResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryCodesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryCodesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wasmd.x.wasmd.v1beta1.QueryCodesRequest,
 *   !proto.wasmd.x.wasmd.v1beta1.QueryCodesResponse>}
 */
const methodInfo_Query_Codes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wasmd.x.wasmd.v1beta1.QueryCodesResponse,
  /**
   * @param {!proto.wasmd.x.wasmd.v1beta1.QueryCodesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmd.x.wasmd.v1beta1.QueryCodesResponse.deserializeBinary
);


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryCodesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wasmd.x.wasmd.v1beta1.QueryCodesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmd.x.wasmd.v1beta1.QueryCodesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmd.x.wasmd.v1beta1.QueryClient.prototype.codes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/Codes',
      request,
      metadata || {},
      methodDescriptor_Query_Codes,
      callback);
};


/**
 * @param {!proto.wasmd.x.wasmd.v1beta1.QueryCodesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmd.x.wasmd.v1beta1.QueryCodesResponse>}
 *     Promise that resolves to the response
 */
proto.wasmd.x.wasmd.v1beta1.QueryPromiseClient.prototype.codes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmd.x.wasmd.v1beta1.Query/Codes',
      request,
      metadata || {},
      methodDescriptor_Query_Codes);
};


module.exports = proto.wasmd.x.wasmd.v1beta1;

