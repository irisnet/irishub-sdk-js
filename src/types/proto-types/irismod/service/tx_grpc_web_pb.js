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

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')
const proto = {};
proto.irismod = {};
proto.irismod.service = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.irismod.service.MsgClient =
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
proto.irismod.service.MsgPromiseClient =
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
 *   !proto.irismod.service.MsgDefineService,
 *   !proto.irismod.service.MsgDefineServiceResponse>}
 */
const methodDescriptor_Msg_DefineService = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/DefineService',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgDefineService,
  proto.irismod.service.MsgDefineServiceResponse,
  /**
   * @param {!proto.irismod.service.MsgDefineService} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgDefineServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgDefineService,
 *   !proto.irismod.service.MsgDefineServiceResponse>}
 */
const methodInfo_Msg_DefineService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgDefineServiceResponse,
  /**
   * @param {!proto.irismod.service.MsgDefineService} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgDefineServiceResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgDefineService} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgDefineServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgDefineServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.defineService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/DefineService',
      request,
      metadata || {},
      methodDescriptor_Msg_DefineService,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgDefineService} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgDefineServiceResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.defineService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/DefineService',
      request,
      metadata || {},
      methodDescriptor_Msg_DefineService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgBindService,
 *   !proto.irismod.service.MsgBindServiceResponse>}
 */
const methodDescriptor_Msg_BindService = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/BindService',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgBindService,
  proto.irismod.service.MsgBindServiceResponse,
  /**
   * @param {!proto.irismod.service.MsgBindService} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgBindServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgBindService,
 *   !proto.irismod.service.MsgBindServiceResponse>}
 */
const methodInfo_Msg_BindService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgBindServiceResponse,
  /**
   * @param {!proto.irismod.service.MsgBindService} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgBindServiceResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgBindService} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgBindServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgBindServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.bindService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/BindService',
      request,
      metadata || {},
      methodDescriptor_Msg_BindService,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgBindService} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgBindServiceResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.bindService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/BindService',
      request,
      metadata || {},
      methodDescriptor_Msg_BindService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgUpdateServiceBinding,
 *   !proto.irismod.service.MsgUpdateServiceBindingResponse>}
 */
const methodDescriptor_Msg_UpdateServiceBinding = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/UpdateServiceBinding',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgUpdateServiceBinding,
  proto.irismod.service.MsgUpdateServiceBindingResponse,
  /**
   * @param {!proto.irismod.service.MsgUpdateServiceBinding} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgUpdateServiceBindingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgUpdateServiceBinding,
 *   !proto.irismod.service.MsgUpdateServiceBindingResponse>}
 */
const methodInfo_Msg_UpdateServiceBinding = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgUpdateServiceBindingResponse,
  /**
   * @param {!proto.irismod.service.MsgUpdateServiceBinding} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgUpdateServiceBindingResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgUpdateServiceBinding} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgUpdateServiceBindingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgUpdateServiceBindingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.updateServiceBinding =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/UpdateServiceBinding',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateServiceBinding,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgUpdateServiceBinding} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgUpdateServiceBindingResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.updateServiceBinding =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/UpdateServiceBinding',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateServiceBinding);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgSetWithdrawAddress,
 *   !proto.irismod.service.MsgSetWithdrawAddressResponse>}
 */
const methodDescriptor_Msg_SetWithdrawAddress = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/SetWithdrawAddress',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgSetWithdrawAddress,
  proto.irismod.service.MsgSetWithdrawAddressResponse,
  /**
   * @param {!proto.irismod.service.MsgSetWithdrawAddress} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgSetWithdrawAddressResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgSetWithdrawAddress,
 *   !proto.irismod.service.MsgSetWithdrawAddressResponse>}
 */
const methodInfo_Msg_SetWithdrawAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgSetWithdrawAddressResponse,
  /**
   * @param {!proto.irismod.service.MsgSetWithdrawAddress} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgSetWithdrawAddressResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgSetWithdrawAddress} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgSetWithdrawAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgSetWithdrawAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.setWithdrawAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/SetWithdrawAddress',
      request,
      metadata || {},
      methodDescriptor_Msg_SetWithdrawAddress,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgSetWithdrawAddress} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgSetWithdrawAddressResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.setWithdrawAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/SetWithdrawAddress',
      request,
      metadata || {},
      methodDescriptor_Msg_SetWithdrawAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgEnableServiceBinding,
 *   !proto.irismod.service.MsgEnableServiceBindingResponse>}
 */
const methodDescriptor_Msg_EnableServiceBinding = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/EnableServiceBinding',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgEnableServiceBinding,
  proto.irismod.service.MsgEnableServiceBindingResponse,
  /**
   * @param {!proto.irismod.service.MsgEnableServiceBinding} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgEnableServiceBindingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgEnableServiceBinding,
 *   !proto.irismod.service.MsgEnableServiceBindingResponse>}
 */
const methodInfo_Msg_EnableServiceBinding = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgEnableServiceBindingResponse,
  /**
   * @param {!proto.irismod.service.MsgEnableServiceBinding} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgEnableServiceBindingResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgEnableServiceBinding} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgEnableServiceBindingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgEnableServiceBindingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.enableServiceBinding =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/EnableServiceBinding',
      request,
      metadata || {},
      methodDescriptor_Msg_EnableServiceBinding,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgEnableServiceBinding} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgEnableServiceBindingResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.enableServiceBinding =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/EnableServiceBinding',
      request,
      metadata || {},
      methodDescriptor_Msg_EnableServiceBinding);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgDisableServiceBinding,
 *   !proto.irismod.service.MsgDisableServiceBindingResponse>}
 */
const methodDescriptor_Msg_DisableServiceBinding = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/DisableServiceBinding',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgDisableServiceBinding,
  proto.irismod.service.MsgDisableServiceBindingResponse,
  /**
   * @param {!proto.irismod.service.MsgDisableServiceBinding} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgDisableServiceBindingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgDisableServiceBinding,
 *   !proto.irismod.service.MsgDisableServiceBindingResponse>}
 */
const methodInfo_Msg_DisableServiceBinding = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgDisableServiceBindingResponse,
  /**
   * @param {!proto.irismod.service.MsgDisableServiceBinding} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgDisableServiceBindingResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgDisableServiceBinding} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgDisableServiceBindingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgDisableServiceBindingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.disableServiceBinding =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/DisableServiceBinding',
      request,
      metadata || {},
      methodDescriptor_Msg_DisableServiceBinding,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgDisableServiceBinding} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgDisableServiceBindingResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.disableServiceBinding =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/DisableServiceBinding',
      request,
      metadata || {},
      methodDescriptor_Msg_DisableServiceBinding);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgRefundServiceDeposit,
 *   !proto.irismod.service.MsgRefundServiceDepositResponse>}
 */
const methodDescriptor_Msg_RefundServiceDeposit = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/RefundServiceDeposit',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgRefundServiceDeposit,
  proto.irismod.service.MsgRefundServiceDepositResponse,
  /**
   * @param {!proto.irismod.service.MsgRefundServiceDeposit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgRefundServiceDepositResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgRefundServiceDeposit,
 *   !proto.irismod.service.MsgRefundServiceDepositResponse>}
 */
const methodInfo_Msg_RefundServiceDeposit = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgRefundServiceDepositResponse,
  /**
   * @param {!proto.irismod.service.MsgRefundServiceDeposit} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgRefundServiceDepositResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgRefundServiceDeposit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgRefundServiceDepositResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgRefundServiceDepositResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.refundServiceDeposit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/RefundServiceDeposit',
      request,
      metadata || {},
      methodDescriptor_Msg_RefundServiceDeposit,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgRefundServiceDeposit} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgRefundServiceDepositResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.refundServiceDeposit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/RefundServiceDeposit',
      request,
      metadata || {},
      methodDescriptor_Msg_RefundServiceDeposit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgCallService,
 *   !proto.irismod.service.MsgCallServiceResponse>}
 */
const methodDescriptor_Msg_CallService = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/CallService',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgCallService,
  proto.irismod.service.MsgCallServiceResponse,
  /**
   * @param {!proto.irismod.service.MsgCallService} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgCallServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgCallService,
 *   !proto.irismod.service.MsgCallServiceResponse>}
 */
const methodInfo_Msg_CallService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgCallServiceResponse,
  /**
   * @param {!proto.irismod.service.MsgCallService} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgCallServiceResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgCallService} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgCallServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgCallServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.callService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/CallService',
      request,
      metadata || {},
      methodDescriptor_Msg_CallService,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgCallService} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgCallServiceResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.callService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/CallService',
      request,
      metadata || {},
      methodDescriptor_Msg_CallService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgRespondService,
 *   !proto.irismod.service.MsgRespondServiceResponse>}
 */
const methodDescriptor_Msg_RespondService = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/RespondService',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgRespondService,
  proto.irismod.service.MsgRespondServiceResponse,
  /**
   * @param {!proto.irismod.service.MsgRespondService} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgRespondServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgRespondService,
 *   !proto.irismod.service.MsgRespondServiceResponse>}
 */
const methodInfo_Msg_RespondService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgRespondServiceResponse,
  /**
   * @param {!proto.irismod.service.MsgRespondService} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgRespondServiceResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgRespondService} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgRespondServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgRespondServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.respondService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/RespondService',
      request,
      metadata || {},
      methodDescriptor_Msg_RespondService,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgRespondService} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgRespondServiceResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.respondService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/RespondService',
      request,
      metadata || {},
      methodDescriptor_Msg_RespondService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgPauseRequestContext,
 *   !proto.irismod.service.MsgPauseRequestContextResponse>}
 */
const methodDescriptor_Msg_PauseRequestContext = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/PauseRequestContext',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgPauseRequestContext,
  proto.irismod.service.MsgPauseRequestContextResponse,
  /**
   * @param {!proto.irismod.service.MsgPauseRequestContext} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgPauseRequestContextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgPauseRequestContext,
 *   !proto.irismod.service.MsgPauseRequestContextResponse>}
 */
const methodInfo_Msg_PauseRequestContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgPauseRequestContextResponse,
  /**
   * @param {!proto.irismod.service.MsgPauseRequestContext} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgPauseRequestContextResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgPauseRequestContext} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgPauseRequestContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgPauseRequestContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.pauseRequestContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/PauseRequestContext',
      request,
      metadata || {},
      methodDescriptor_Msg_PauseRequestContext,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgPauseRequestContext} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgPauseRequestContextResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.pauseRequestContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/PauseRequestContext',
      request,
      metadata || {},
      methodDescriptor_Msg_PauseRequestContext);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgStartRequestContext,
 *   !proto.irismod.service.MsgStartRequestContextResponse>}
 */
const methodDescriptor_Msg_StartRequestContext = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/StartRequestContext',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgStartRequestContext,
  proto.irismod.service.MsgStartRequestContextResponse,
  /**
   * @param {!proto.irismod.service.MsgStartRequestContext} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgStartRequestContextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgStartRequestContext,
 *   !proto.irismod.service.MsgStartRequestContextResponse>}
 */
const methodInfo_Msg_StartRequestContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgStartRequestContextResponse,
  /**
   * @param {!proto.irismod.service.MsgStartRequestContext} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgStartRequestContextResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgStartRequestContext} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgStartRequestContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgStartRequestContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.startRequestContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/StartRequestContext',
      request,
      metadata || {},
      methodDescriptor_Msg_StartRequestContext,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgStartRequestContext} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgStartRequestContextResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.startRequestContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/StartRequestContext',
      request,
      metadata || {},
      methodDescriptor_Msg_StartRequestContext);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgKillRequestContext,
 *   !proto.irismod.service.MsgKillRequestContextResponse>}
 */
const methodDescriptor_Msg_KillRequestContext = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/KillRequestContext',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgKillRequestContext,
  proto.irismod.service.MsgKillRequestContextResponse,
  /**
   * @param {!proto.irismod.service.MsgKillRequestContext} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgKillRequestContextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgKillRequestContext,
 *   !proto.irismod.service.MsgKillRequestContextResponse>}
 */
const methodInfo_Msg_KillRequestContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgKillRequestContextResponse,
  /**
   * @param {!proto.irismod.service.MsgKillRequestContext} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgKillRequestContextResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgKillRequestContext} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgKillRequestContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgKillRequestContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.killRequestContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/KillRequestContext',
      request,
      metadata || {},
      methodDescriptor_Msg_KillRequestContext,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgKillRequestContext} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgKillRequestContextResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.killRequestContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/KillRequestContext',
      request,
      metadata || {},
      methodDescriptor_Msg_KillRequestContext);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgUpdateRequestContext,
 *   !proto.irismod.service.MsgUpdateRequestContextResponse>}
 */
const methodDescriptor_Msg_UpdateRequestContext = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/UpdateRequestContext',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgUpdateRequestContext,
  proto.irismod.service.MsgUpdateRequestContextResponse,
  /**
   * @param {!proto.irismod.service.MsgUpdateRequestContext} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgUpdateRequestContextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgUpdateRequestContext,
 *   !proto.irismod.service.MsgUpdateRequestContextResponse>}
 */
const methodInfo_Msg_UpdateRequestContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgUpdateRequestContextResponse,
  /**
   * @param {!proto.irismod.service.MsgUpdateRequestContext} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgUpdateRequestContextResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgUpdateRequestContext} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgUpdateRequestContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgUpdateRequestContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.updateRequestContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/UpdateRequestContext',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateRequestContext,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgUpdateRequestContext} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgUpdateRequestContextResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.updateRequestContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/UpdateRequestContext',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateRequestContext);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.irismod.service.MsgWithdrawEarnedFees,
 *   !proto.irismod.service.MsgWithdrawEarnedFeesResponse>}
 */
const methodDescriptor_Msg_WithdrawEarnedFees = new grpc.web.MethodDescriptor(
  '/irismod.service.Msg/WithdrawEarnedFees',
  grpc.web.MethodType.UNARY,
  proto.irismod.service.MsgWithdrawEarnedFees,
  proto.irismod.service.MsgWithdrawEarnedFeesResponse,
  /**
   * @param {!proto.irismod.service.MsgWithdrawEarnedFees} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgWithdrawEarnedFeesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.irismod.service.MsgWithdrawEarnedFees,
 *   !proto.irismod.service.MsgWithdrawEarnedFeesResponse>}
 */
const methodInfo_Msg_WithdrawEarnedFees = new grpc.web.AbstractClientBase.MethodInfo(
  proto.irismod.service.MsgWithdrawEarnedFeesResponse,
  /**
   * @param {!proto.irismod.service.MsgWithdrawEarnedFees} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.irismod.service.MsgWithdrawEarnedFeesResponse.deserializeBinary
);


/**
 * @param {!proto.irismod.service.MsgWithdrawEarnedFees} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.irismod.service.MsgWithdrawEarnedFeesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.irismod.service.MsgWithdrawEarnedFeesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.irismod.service.MsgClient.prototype.withdrawEarnedFees =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/irismod.service.Msg/WithdrawEarnedFees',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawEarnedFees,
      callback);
};


/**
 * @param {!proto.irismod.service.MsgWithdrawEarnedFees} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.irismod.service.MsgWithdrawEarnedFeesResponse>}
 *     Promise that resolves to the response
 */
proto.irismod.service.MsgPromiseClient.prototype.withdrawEarnedFees =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/irismod.service.Msg/WithdrawEarnedFees',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawEarnedFees);
};


module.exports = proto.irismod.service;

