/**
 * @fileoverview gRPC-Web generated client stub for irismod.service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var irismod_service_service_pb = require('../../irismod/service/service_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.service = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.service.QueryClient =
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
proto.irismod.service.QueryPromiseClient =
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
 *   !proto.irismod.service.QueryDefinitionRequest,
 *   !proto.irismod.service.QueryDefinitionResponse>}
 */
const methodDescriptor_Query_Definition = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/Definition',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryDefinitionRequest,
  proto.irismod.service.QueryDefinitionResponse,
  /**
   * @param {!proto.irismod.service.QueryDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryDefinitionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryDefinitionRequest,
 *   !proto.irismod.service.QueryDefinitionResponse>}
 */
const methodInfo_Query_Definition = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryDefinitionResponse,
  /**
   * @param {!proto.irismod.service.QueryDefinitionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryDefinitionResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryDefinitionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryDefinitionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.definition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/Definition',
      request,
      metadata || {},
      methodDescriptor_Query_Definition,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryDefinitionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryDefinitionResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.definition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/Definition',
      request,
      metadata || {},
      methodDescriptor_Query_Definition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryBindingRequest,
 *   !proto.irismod.service.QueryBindingResponse>}
 */
const methodDescriptor_Query_Binding = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/Binding',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryBindingRequest,
  proto.irismod.service.QueryBindingResponse,
  /**
   * @param {!proto.irismod.service.QueryBindingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryBindingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryBindingRequest,
 *   !proto.irismod.service.QueryBindingResponse>}
 */
const methodInfo_Query_Binding = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryBindingResponse,
  /**
   * @param {!proto.irismod.service.QueryBindingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryBindingResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryBindingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryBindingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryBindingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.binding =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/Binding',
      request,
      metadata || {},
      methodDescriptor_Query_Binding,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryBindingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryBindingResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.binding =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/Binding',
      request,
      metadata || {},
      methodDescriptor_Query_Binding);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryBindingsRequest,
 *   !proto.irismod.service.QueryBindingsResponse>}
 */
const methodDescriptor_Query_Bindings = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/Bindings',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryBindingsRequest,
  proto.irismod.service.QueryBindingsResponse,
  /**
   * @param {!proto.irismod.service.QueryBindingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryBindingsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryBindingsRequest,
 *   !proto.irismod.service.QueryBindingsResponse>}
 */
const methodInfo_Query_Bindings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryBindingsResponse,
  /**
   * @param {!proto.irismod.service.QueryBindingsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryBindingsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryBindingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryBindingsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryBindingsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.bindings =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/Bindings',
      request,
      metadata || {},
      methodDescriptor_Query_Bindings,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryBindingsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryBindingsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.bindings =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/Bindings',
      request,
      metadata || {},
      methodDescriptor_Query_Bindings);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryWithdrawAddressRequest,
 *   !proto.irismod.service.QueryWithdrawAddressResponse>}
 */
const methodDescriptor_Query_WithdrawAddress = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/WithdrawAddress',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryWithdrawAddressRequest,
  proto.irismod.service.QueryWithdrawAddressResponse,
  /**
   * @param {!proto.irismod.service.QueryWithdrawAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryWithdrawAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryWithdrawAddressRequest,
 *   !proto.irismod.service.QueryWithdrawAddressResponse>}
 */
const methodInfo_Query_WithdrawAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryWithdrawAddressResponse,
  /**
   * @param {!proto.irismod.service.QueryWithdrawAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryWithdrawAddressResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryWithdrawAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryWithdrawAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryWithdrawAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.withdrawAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/WithdrawAddress',
      request,
      metadata || {},
      methodDescriptor_Query_WithdrawAddress,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryWithdrawAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryWithdrawAddressResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.withdrawAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/WithdrawAddress',
      request,
      metadata || {},
      methodDescriptor_Query_WithdrawAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryRequestContextRequest,
 *   !proto.irismod.service.QueryRequestContextResponse>}
 */
const methodDescriptor_Query_RequestContext = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/RequestContext',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryRequestContextRequest,
  proto.irismod.service.QueryRequestContextResponse,
  /**
   * @param {!proto.irismod.service.QueryRequestContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryRequestContextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryRequestContextRequest,
 *   !proto.irismod.service.QueryRequestContextResponse>}
 */
const methodInfo_Query_RequestContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryRequestContextResponse,
  /**
   * @param {!proto.irismod.service.QueryRequestContextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryRequestContextResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryRequestContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryRequestContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryRequestContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.requestContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/RequestContext',
      request,
      metadata || {},
      methodDescriptor_Query_RequestContext,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryRequestContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryRequestContextResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.requestContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/RequestContext',
      request,
      metadata || {},
      methodDescriptor_Query_RequestContext);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryRequestRequest,
 *   !proto.irismod.service.QueryRequestResponse>}
 */
const methodDescriptor_Query_Request = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/Request',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryRequestRequest,
  proto.irismod.service.QueryRequestResponse,
  /**
   * @param {!proto.irismod.service.QueryRequestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryRequestResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryRequestRequest,
 *   !proto.irismod.service.QueryRequestResponse>}
 */
const methodInfo_Query_Request = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryRequestResponse,
  /**
   * @param {!proto.irismod.service.QueryRequestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryRequestResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryRequestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryRequestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.request =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/Request',
      request,
      metadata || {},
      methodDescriptor_Query_Request,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryRequestResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.request =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/Request',
      request,
      metadata || {},
      methodDescriptor_Query_Request);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryRequestsRequest,
 *   !proto.irismod.service.QueryRequestsResponse>}
 */
const methodDescriptor_Query_Requests = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/Requests',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryRequestsRequest,
  proto.irismod.service.QueryRequestsResponse,
  /**
   * @param {!proto.irismod.service.QueryRequestsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryRequestsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryRequestsRequest,
 *   !proto.irismod.service.QueryRequestsResponse>}
 */
const methodInfo_Query_Requests = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryRequestsResponse,
  /**
   * @param {!proto.irismod.service.QueryRequestsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryRequestsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryRequestsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryRequestsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryRequestsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.requests =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/Requests',
      request,
      metadata || {},
      methodDescriptor_Query_Requests,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryRequestsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryRequestsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.requests =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/Requests',
      request,
      metadata || {},
      methodDescriptor_Query_Requests);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryRequestsByReqCtxRequest,
 *   !proto.irismod.service.QueryRequestsByReqCtxResponse>}
 */
const methodDescriptor_Query_RequestsByReqCtx = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/RequestsByReqCtx',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryRequestsByReqCtxRequest,
  proto.irismod.service.QueryRequestsByReqCtxResponse,
  /**
   * @param {!proto.irismod.service.QueryRequestsByReqCtxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryRequestsByReqCtxResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryRequestsByReqCtxRequest,
 *   !proto.irismod.service.QueryRequestsByReqCtxResponse>}
 */
const methodInfo_Query_RequestsByReqCtx = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryRequestsByReqCtxResponse,
  /**
   * @param {!proto.irismod.service.QueryRequestsByReqCtxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryRequestsByReqCtxResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryRequestsByReqCtxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryRequestsByReqCtxResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryRequestsByReqCtxResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.requestsByReqCtx =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/RequestsByReqCtx',
      request,
      metadata || {},
      methodDescriptor_Query_RequestsByReqCtx,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryRequestsByReqCtxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryRequestsByReqCtxResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.requestsByReqCtx =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/RequestsByReqCtx',
      request,
      metadata || {},
      methodDescriptor_Query_RequestsByReqCtx);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryResponseRequest,
 *   !proto.irismod.service.QueryResponseResponse>}
 */
const methodDescriptor_Query_Response = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/Response',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryResponseRequest,
  proto.irismod.service.QueryResponseResponse,
  /**
   * @param {!proto.irismod.service.QueryResponseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryResponseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryResponseRequest,
 *   !proto.irismod.service.QueryResponseResponse>}
 */
const methodInfo_Query_Response = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryResponseResponse,
  /**
   * @param {!proto.irismod.service.QueryResponseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryResponseResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryResponseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryResponseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryResponseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.response =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/Response',
      request,
      metadata || {},
      methodDescriptor_Query_Response,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryResponseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryResponseResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.response =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/Response',
      request,
      metadata || {},
      methodDescriptor_Query_Response);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryResponsesRequest,
 *   !proto.irismod.service.QueryResponsesResponse>}
 */
const methodDescriptor_Query_Responses = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/Responses',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryResponsesRequest,
  proto.irismod.service.QueryResponsesResponse,
  /**
   * @param {!proto.irismod.service.QueryResponsesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryResponsesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryResponsesRequest,
 *   !proto.irismod.service.QueryResponsesResponse>}
 */
const methodInfo_Query_Responses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryResponsesResponse,
  /**
   * @param {!proto.irismod.service.QueryResponsesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryResponsesResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryResponsesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryResponsesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryResponsesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.responses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/Responses',
      request,
      metadata || {},
      methodDescriptor_Query_Responses,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryResponsesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryResponsesResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.responses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/Responses',
      request,
      metadata || {},
      methodDescriptor_Query_Responses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryEarnedFeesRequest,
 *   !proto.irismod.service.QueryEarnedFeesResponse>}
 */
const methodDescriptor_Query_EarnedFees = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/EarnedFees',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryEarnedFeesRequest,
  proto.irismod.service.QueryEarnedFeesResponse,
  /**
   * @param {!proto.irismod.service.QueryEarnedFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryEarnedFeesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryEarnedFeesRequest,
 *   !proto.irismod.service.QueryEarnedFeesResponse>}
 */
const methodInfo_Query_EarnedFees = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryEarnedFeesResponse,
  /**
   * @param {!proto.irismod.service.QueryEarnedFeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryEarnedFeesResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryEarnedFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryEarnedFeesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryEarnedFeesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.earnedFees =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/EarnedFees',
      request,
      metadata || {},
      methodDescriptor_Query_EarnedFees,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryEarnedFeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryEarnedFeesResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.earnedFees =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/EarnedFees',
      request,
      metadata || {},
      methodDescriptor_Query_EarnedFees);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QuerySchemaRequest,
 *   !proto.irismod.service.QuerySchemaResponse>}
 */
const methodDescriptor_Query_Schema = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/Schema',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QuerySchemaRequest,
  proto.irismod.service.QuerySchemaResponse,
  /**
   * @param {!proto.irismod.service.QuerySchemaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QuerySchemaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QuerySchemaRequest,
 *   !proto.irismod.service.QuerySchemaResponse>}
 */
const methodInfo_Query_Schema = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QuerySchemaResponse,
  /**
   * @param {!proto.irismod.service.QuerySchemaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QuerySchemaResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QuerySchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QuerySchemaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QuerySchemaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.schema =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/Schema',
      request,
      metadata || {},
      methodDescriptor_Query_Schema,
      callback);
};


/**
 * @param {!proto.irismod.service.QuerySchemaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QuerySchemaResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.schema =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/Schema',
      request,
      metadata || {},
      methodDescriptor_Query_Schema);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.QueryParamsRequest,
 *   !proto.irismod.service.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/irismod.service.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.QueryParamsRequest,
  proto.irismod.service.QueryParamsResponse,
  /**
   * @param {!proto.irismod.service.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.QueryParamsRequest,
 *   !proto.irismod.service.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.QueryParamsResponse,
  /**
   * @param {!proto.irismod.service.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.irismod.service.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


module.exports = proto.irismod.service;

