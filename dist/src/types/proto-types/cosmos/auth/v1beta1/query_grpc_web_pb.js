/**
 * @fileoverview gRPC-Web generated client stub for cosmos.auth.v1beta1
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_auth_v1beta1_auth_pb = require('../../../cosmos/auth/v1beta1/auth_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var cosmos_query_v1_query_pb = require('../../../cosmos/query/v1/query_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.auth = {};
proto.cosmos.auth.v1beta1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.auth.v1beta1.QueryClient =
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
proto.cosmos.auth.v1beta1.QueryPromiseClient =
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
 *   !proto.cosmos.auth.v1beta1.QueryAccountsRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountsResponse>}
 */
const methodDescriptor_Query_Accounts = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/Accounts',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.QueryAccountsRequest,
  proto.cosmos.auth.v1beta1.QueryAccountsResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.QueryAccountsRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountsResponse>}
 */
const methodInfo_Query_Accounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.QueryAccountsResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.QueryAccountsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.QueryAccountsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.accounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Accounts',
      request,
      metadata || {},
      methodDescriptor_Query_Accounts,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.QueryAccountsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.accounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Accounts',
      request,
      metadata || {},
      methodDescriptor_Query_Accounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.QueryAccountRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountResponse>}
 */
const methodDescriptor_Query_Account = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/Account',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.QueryAccountRequest,
  proto.cosmos.auth.v1beta1.QueryAccountResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.QueryAccountRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountResponse>}
 */
const methodInfo_Query_Account = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.QueryAccountResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.QueryAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.QueryAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.account =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Account',
      request,
      metadata || {},
      methodDescriptor_Query_Account,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.QueryAccountResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.account =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Account',
      request,
      metadata || {},
      methodDescriptor_Query_Account);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.QueryAccountAddressByIDRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountAddressByIDResponse>}
 */
const methodDescriptor_Query_AccountAddressByID = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/AccountAddressByID',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.QueryAccountAddressByIDRequest,
  proto.cosmos.auth.v1beta1.QueryAccountAddressByIDResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountAddressByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountAddressByIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.QueryAccountAddressByIDRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountAddressByIDResponse>}
 */
const methodInfo_Query_AccountAddressByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.QueryAccountAddressByIDResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountAddressByIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountAddressByIDResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountAddressByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.QueryAccountAddressByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.QueryAccountAddressByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.accountAddressByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AccountAddressByID',
      request,
      metadata || {},
      methodDescriptor_Query_AccountAddressByID,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountAddressByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.QueryAccountAddressByIDResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.accountAddressByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AccountAddressByID',
      request,
      metadata || {},
      methodDescriptor_Query_AccountAddressByID);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.auth.v1beta1.QueryParamsResponse>}
 */
const methodDescriptor_Query_Params = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/Params',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.QueryParamsRequest,
  proto.cosmos.auth.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.QueryParamsRequest,
 *   !proto.cosmos.auth.v1beta1.QueryParamsResponse>}
 */
const methodInfo_Query_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.QueryParamsResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryParamsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.QueryParamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.QueryParamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.QueryParamsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Params',
      request,
      metadata || {},
      methodDescriptor_Query_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.QueryModuleAccountsRequest,
 *   !proto.cosmos.auth.v1beta1.QueryModuleAccountsResponse>}
 */
const methodDescriptor_Query_ModuleAccounts = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/ModuleAccounts',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.QueryModuleAccountsRequest,
  proto.cosmos.auth.v1beta1.QueryModuleAccountsResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryModuleAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryModuleAccountsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.QueryModuleAccountsRequest,
 *   !proto.cosmos.auth.v1beta1.QueryModuleAccountsResponse>}
 */
const methodInfo_Query_ModuleAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.QueryModuleAccountsResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryModuleAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryModuleAccountsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryModuleAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.QueryModuleAccountsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.QueryModuleAccountsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.moduleAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/ModuleAccounts',
      request,
      metadata || {},
      methodDescriptor_Query_ModuleAccounts,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryModuleAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.QueryModuleAccountsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.moduleAccounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/ModuleAccounts',
      request,
      metadata || {},
      methodDescriptor_Query_ModuleAccounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.QueryModuleAccountByNameRequest,
 *   !proto.cosmos.auth.v1beta1.QueryModuleAccountByNameResponse>}
 */
const methodDescriptor_Query_ModuleAccountByName = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/ModuleAccountByName',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.QueryModuleAccountByNameRequest,
  proto.cosmos.auth.v1beta1.QueryModuleAccountByNameResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryModuleAccountByNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryModuleAccountByNameResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.QueryModuleAccountByNameRequest,
 *   !proto.cosmos.auth.v1beta1.QueryModuleAccountByNameResponse>}
 */
const methodInfo_Query_ModuleAccountByName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.QueryModuleAccountByNameResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryModuleAccountByNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryModuleAccountByNameResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryModuleAccountByNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.QueryModuleAccountByNameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.QueryModuleAccountByNameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.moduleAccountByName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/ModuleAccountByName',
      request,
      metadata || {},
      methodDescriptor_Query_ModuleAccountByName,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryModuleAccountByNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.QueryModuleAccountByNameResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.moduleAccountByName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/ModuleAccountByName',
      request,
      metadata || {},
      methodDescriptor_Query_ModuleAccountByName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.Bech32PrefixRequest,
 *   !proto.cosmos.auth.v1beta1.Bech32PrefixResponse>}
 */
const methodDescriptor_Query_Bech32Prefix = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/Bech32Prefix',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.Bech32PrefixRequest,
  proto.cosmos.auth.v1beta1.Bech32PrefixResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.Bech32PrefixRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.Bech32PrefixResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.Bech32PrefixRequest,
 *   !proto.cosmos.auth.v1beta1.Bech32PrefixResponse>}
 */
const methodInfo_Query_Bech32Prefix = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.Bech32PrefixResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.Bech32PrefixRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.Bech32PrefixResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.Bech32PrefixRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.Bech32PrefixResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.Bech32PrefixResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.bech32Prefix =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Bech32Prefix',
      request,
      metadata || {},
      methodDescriptor_Query_Bech32Prefix,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.Bech32PrefixRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.Bech32PrefixResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.bech32Prefix =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/Bech32Prefix',
      request,
      metadata || {},
      methodDescriptor_Query_Bech32Prefix);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.AddressBytesToStringRequest,
 *   !proto.cosmos.auth.v1beta1.AddressBytesToStringResponse>}
 */
const methodDescriptor_Query_AddressBytesToString = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/AddressBytesToString',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.AddressBytesToStringRequest,
  proto.cosmos.auth.v1beta1.AddressBytesToStringResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.AddressBytesToStringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.AddressBytesToStringResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.AddressBytesToStringRequest,
 *   !proto.cosmos.auth.v1beta1.AddressBytesToStringResponse>}
 */
const methodInfo_Query_AddressBytesToString = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.AddressBytesToStringResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.AddressBytesToStringRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.AddressBytesToStringResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.AddressBytesToStringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.AddressBytesToStringResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.AddressBytesToStringResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.addressBytesToString =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AddressBytesToString',
      request,
      metadata || {},
      methodDescriptor_Query_AddressBytesToString,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.AddressBytesToStringRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.AddressBytesToStringResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.addressBytesToString =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AddressBytesToString',
      request,
      metadata || {},
      methodDescriptor_Query_AddressBytesToString);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.AddressStringToBytesRequest,
 *   !proto.cosmos.auth.v1beta1.AddressStringToBytesResponse>}
 */
const methodDescriptor_Query_AddressStringToBytes = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/AddressStringToBytes',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.AddressStringToBytesRequest,
  proto.cosmos.auth.v1beta1.AddressStringToBytesResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.AddressStringToBytesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.AddressStringToBytesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.AddressStringToBytesRequest,
 *   !proto.cosmos.auth.v1beta1.AddressStringToBytesResponse>}
 */
const methodInfo_Query_AddressStringToBytes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.AddressStringToBytesResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.AddressStringToBytesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.AddressStringToBytesResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.AddressStringToBytesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.AddressStringToBytesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.AddressStringToBytesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.addressStringToBytes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AddressStringToBytes',
      request,
      metadata || {},
      methodDescriptor_Query_AddressStringToBytes,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.AddressStringToBytesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.AddressStringToBytesResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.addressStringToBytes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AddressStringToBytes',
      request,
      metadata || {},
      methodDescriptor_Query_AddressStringToBytes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.auth.v1beta1.QueryAccountInfoRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountInfoResponse>}
 */
const methodDescriptor_Query_AccountInfo = new grpc.web.MethodDescriptor(
  '/cosmos.auth.v1beta1.Query/AccountInfo',
  grpc.web.MethodType.UNARY,
  proto.cosmos.auth.v1beta1.QueryAccountInfoRequest,
  proto.cosmos.auth.v1beta1.QueryAccountInfoResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.auth.v1beta1.QueryAccountInfoRequest,
 *   !proto.cosmos.auth.v1beta1.QueryAccountInfoResponse>}
 */
const methodInfo_Query_AccountInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.auth.v1beta1.QueryAccountInfoResponse,
  /**
   * @param {!proto.cosmos.auth.v1beta1.QueryAccountInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.auth.v1beta1.QueryAccountInfoResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.auth.v1beta1.QueryAccountInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.auth.v1beta1.QueryAccountInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.auth.v1beta1.QueryClient.prototype.accountInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AccountInfo',
      request,
      metadata || {},
      methodDescriptor_Query_AccountInfo,
      callback);
};


/**
 * @param {!proto.cosmos.auth.v1beta1.QueryAccountInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.auth.v1beta1.QueryAccountInfoResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.auth.v1beta1.QueryPromiseClient.prototype.accountInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.auth.v1beta1.Query/AccountInfo',
      request,
      metadata || {},
      methodDescriptor_Query_AccountInfo);
};


module.exports = proto.cosmos.auth.v1beta1;

