/**
 * @fileoverview gRPC-Web generated client stub for ibc.core.channel.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_core_channel_v1_channel_pb = require('../../../../ibc/core/channel/v1/channel_pb.js')

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.core = {};
proto.ibc.core.channel = {};
proto.ibc.core.channel.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.core.channel.v1.QueryClient =
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
proto.ibc.core.channel.v1.QueryPromiseClient =
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
 *   !proto.ibc.core.channel.v1.QueryChannelRequest,
 *   !proto.ibc.core.channel.v1.QueryChannelResponse>}
 */
const methodDescriptor_Query_Channel = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/Channel',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryChannelRequest,
  proto.ibc.core.channel.v1.QueryChannelResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryChannelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryChannelRequest,
 *   !proto.ibc.core.channel.v1.QueryChannelResponse>}
 */
const methodInfo_Query_Channel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryChannelResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryChannelResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryChannelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryChannelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.channel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/Channel',
      request,
      metadata || {},
      methodDescriptor_Query_Channel,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryChannelResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.channel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/Channel',
      request,
      metadata || {},
      methodDescriptor_Query_Channel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryChannelsRequest,
 *   !proto.ibc.core.channel.v1.QueryChannelsResponse>}
 */
const methodDescriptor_Query_Channels = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/Channels',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryChannelsRequest,
  proto.ibc.core.channel.v1.QueryChannelsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryChannelsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryChannelsRequest,
 *   !proto.ibc.core.channel.v1.QueryChannelsResponse>}
 */
const methodInfo_Query_Channels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryChannelsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryChannelsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryChannelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryChannelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.channels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/Channels',
      request,
      metadata || {},
      methodDescriptor_Query_Channels,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryChannelsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.channels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/Channels',
      request,
      metadata || {},
      methodDescriptor_Query_Channels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryConnectionChannelsRequest,
 *   !proto.ibc.core.channel.v1.QueryConnectionChannelsResponse>}
 */
const methodDescriptor_Query_ConnectionChannels = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/ConnectionChannels',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryConnectionChannelsRequest,
  proto.ibc.core.channel.v1.QueryConnectionChannelsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryConnectionChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryConnectionChannelsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryConnectionChannelsRequest,
 *   !proto.ibc.core.channel.v1.QueryConnectionChannelsResponse>}
 */
const methodInfo_Query_ConnectionChannels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryConnectionChannelsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryConnectionChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryConnectionChannelsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryConnectionChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryConnectionChannelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryConnectionChannelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.connectionChannels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/ConnectionChannels',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionChannels,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryConnectionChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryConnectionChannelsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.connectionChannels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/ConnectionChannels',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionChannels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryChannelClientStateRequest,
 *   !proto.ibc.core.channel.v1.QueryChannelClientStateResponse>}
 */
const methodDescriptor_Query_ChannelClientState = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/ChannelClientState',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryChannelClientStateRequest,
  proto.ibc.core.channel.v1.QueryChannelClientStateResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryChannelClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryChannelClientStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryChannelClientStateRequest,
 *   !proto.ibc.core.channel.v1.QueryChannelClientStateResponse>}
 */
const methodInfo_Query_ChannelClientState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryChannelClientStateResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryChannelClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryChannelClientStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryChannelClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryChannelClientStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryChannelClientStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.channelClientState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/ChannelClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ChannelClientState,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryChannelClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryChannelClientStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.channelClientState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/ChannelClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ChannelClientState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryChannelConsensusStateRequest,
 *   !proto.ibc.core.channel.v1.QueryChannelConsensusStateResponse>}
 */
const methodDescriptor_Query_ChannelConsensusState = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/ChannelConsensusState',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryChannelConsensusStateRequest,
  proto.ibc.core.channel.v1.QueryChannelConsensusStateResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryChannelConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryChannelConsensusStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryChannelConsensusStateRequest,
 *   !proto.ibc.core.channel.v1.QueryChannelConsensusStateResponse>}
 */
const methodInfo_Query_ChannelConsensusState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryChannelConsensusStateResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryChannelConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryChannelConsensusStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryChannelConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryChannelConsensusStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryChannelConsensusStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.channelConsensusState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/ChannelConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ChannelConsensusState,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryChannelConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryChannelConsensusStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.channelConsensusState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/ChannelConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ChannelConsensusState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryPacketCommitmentRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketCommitmentResponse>}
 */
const methodDescriptor_Query_PacketCommitment = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/PacketCommitment',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryPacketCommitmentRequest,
  proto.ibc.core.channel.v1.QueryPacketCommitmentResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketCommitmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketCommitmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryPacketCommitmentRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketCommitmentResponse>}
 */
const methodInfo_Query_PacketCommitment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryPacketCommitmentResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketCommitmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketCommitmentResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketCommitmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryPacketCommitmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryPacketCommitmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.packetCommitment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketCommitment',
      request,
      metadata || {},
      methodDescriptor_Query_PacketCommitment,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketCommitmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryPacketCommitmentResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.packetCommitment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketCommitment',
      request,
      metadata || {},
      methodDescriptor_Query_PacketCommitment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryPacketCommitmentsRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketCommitmentsResponse>}
 */
const methodDescriptor_Query_PacketCommitments = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/PacketCommitments',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryPacketCommitmentsRequest,
  proto.ibc.core.channel.v1.QueryPacketCommitmentsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketCommitmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketCommitmentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryPacketCommitmentsRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketCommitmentsResponse>}
 */
const methodInfo_Query_PacketCommitments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryPacketCommitmentsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketCommitmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketCommitmentsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketCommitmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryPacketCommitmentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryPacketCommitmentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.packetCommitments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketCommitments',
      request,
      metadata || {},
      methodDescriptor_Query_PacketCommitments,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketCommitmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryPacketCommitmentsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.packetCommitments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketCommitments',
      request,
      metadata || {},
      methodDescriptor_Query_PacketCommitments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryPacketReceiptRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketReceiptResponse>}
 */
const methodDescriptor_Query_PacketReceipt = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/PacketReceipt',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryPacketReceiptRequest,
  proto.ibc.core.channel.v1.QueryPacketReceiptResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketReceiptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketReceiptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryPacketReceiptRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketReceiptResponse>}
 */
const methodInfo_Query_PacketReceipt = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryPacketReceiptResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketReceiptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketReceiptResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketReceiptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryPacketReceiptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryPacketReceiptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.packetReceipt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketReceipt',
      request,
      metadata || {},
      methodDescriptor_Query_PacketReceipt,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketReceiptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryPacketReceiptResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.packetReceipt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketReceipt',
      request,
      metadata || {},
      methodDescriptor_Query_PacketReceipt);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryPacketAcknowledgementRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketAcknowledgementResponse>}
 */
const methodDescriptor_Query_PacketAcknowledgement = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/PacketAcknowledgement',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementRequest,
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketAcknowledgementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryPacketAcknowledgementRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketAcknowledgementResponse>}
 */
const methodInfo_Query_PacketAcknowledgement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketAcknowledgementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketAcknowledgementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryPacketAcknowledgementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryPacketAcknowledgementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.packetAcknowledgement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketAcknowledgement',
      request,
      metadata || {},
      methodDescriptor_Query_PacketAcknowledgement,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketAcknowledgementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryPacketAcknowledgementResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.packetAcknowledgement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketAcknowledgement',
      request,
      metadata || {},
      methodDescriptor_Query_PacketAcknowledgement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryPacketAcknowledgementsRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketAcknowledgementsResponse>}
 */
const methodDescriptor_Query_PacketAcknowledgements = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/PacketAcknowledgements',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementsRequest,
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketAcknowledgementsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryPacketAcknowledgementsRequest,
 *   !proto.ibc.core.channel.v1.QueryPacketAcknowledgementsResponse>}
 */
const methodInfo_Query_PacketAcknowledgements = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryPacketAcknowledgementsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryPacketAcknowledgementsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketAcknowledgementsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryPacketAcknowledgementsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryPacketAcknowledgementsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.packetAcknowledgements =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketAcknowledgements',
      request,
      metadata || {},
      methodDescriptor_Query_PacketAcknowledgements,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryPacketAcknowledgementsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryPacketAcknowledgementsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.packetAcknowledgements =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/PacketAcknowledgements',
      request,
      metadata || {},
      methodDescriptor_Query_PacketAcknowledgements);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryUnreceivedPacketsRequest,
 *   !proto.ibc.core.channel.v1.QueryUnreceivedPacketsResponse>}
 */
const methodDescriptor_Query_UnreceivedPackets = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/UnreceivedPackets',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryUnreceivedPacketsRequest,
  proto.ibc.core.channel.v1.QueryUnreceivedPacketsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryUnreceivedPacketsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryUnreceivedPacketsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryUnreceivedPacketsRequest,
 *   !proto.ibc.core.channel.v1.QueryUnreceivedPacketsResponse>}
 */
const methodInfo_Query_UnreceivedPackets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryUnreceivedPacketsResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryUnreceivedPacketsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryUnreceivedPacketsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryUnreceivedPacketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryUnreceivedPacketsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryUnreceivedPacketsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.unreceivedPackets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/UnreceivedPackets',
      request,
      metadata || {},
      methodDescriptor_Query_UnreceivedPackets,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryUnreceivedPacketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryUnreceivedPacketsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.unreceivedPackets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/UnreceivedPackets',
      request,
      metadata || {},
      methodDescriptor_Query_UnreceivedPackets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryUnreceivedAcksRequest,
 *   !proto.ibc.core.channel.v1.QueryUnreceivedAcksResponse>}
 */
const methodDescriptor_Query_UnreceivedAcks = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/UnreceivedAcks',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryUnreceivedAcksRequest,
  proto.ibc.core.channel.v1.QueryUnreceivedAcksResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryUnreceivedAcksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryUnreceivedAcksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryUnreceivedAcksRequest,
 *   !proto.ibc.core.channel.v1.QueryUnreceivedAcksResponse>}
 */
const methodInfo_Query_UnreceivedAcks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryUnreceivedAcksResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryUnreceivedAcksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryUnreceivedAcksResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryUnreceivedAcksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryUnreceivedAcksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryUnreceivedAcksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.unreceivedAcks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/UnreceivedAcks',
      request,
      metadata || {},
      methodDescriptor_Query_UnreceivedAcks,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryUnreceivedAcksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryUnreceivedAcksResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.unreceivedAcks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/UnreceivedAcks',
      request,
      metadata || {},
      methodDescriptor_Query_UnreceivedAcks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.core.channel.v1.QueryNextSequenceReceiveRequest,
 *   !proto.ibc.core.channel.v1.QueryNextSequenceReceiveResponse>}
 */
const methodDescriptor_Query_NextSequenceReceive = new grpc.web.MethodDescriptor(
  '/ibc.core.channel.v1.Query/NextSequenceReceive',
  grpc.web.MethodType.UNARY,
  proto.ibc.core.channel.v1.QueryNextSequenceReceiveRequest,
  proto.ibc.core.channel.v1.QueryNextSequenceReceiveResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryNextSequenceReceiveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryNextSequenceReceiveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.core.channel.v1.QueryNextSequenceReceiveRequest,
 *   !proto.ibc.core.channel.v1.QueryNextSequenceReceiveResponse>}
 */
const methodInfo_Query_NextSequenceReceive = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.core.channel.v1.QueryNextSequenceReceiveResponse,
  /**
   * @param {!proto.ibc.core.channel.v1.QueryNextSequenceReceiveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.core.channel.v1.QueryNextSequenceReceiveResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.core.channel.v1.QueryNextSequenceReceiveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.core.channel.v1.QueryNextSequenceReceiveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.core.channel.v1.QueryNextSequenceReceiveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.core.channel.v1.QueryClient.prototype.nextSequenceReceive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/NextSequenceReceive',
      request,
      metadata || {},
      methodDescriptor_Query_NextSequenceReceive,
      callback);
};


/**
 * @param {!proto.ibc.core.channel.v1.QueryNextSequenceReceiveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.core.channel.v1.QueryNextSequenceReceiveResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.core.channel.v1.QueryPromiseClient.prototype.nextSequenceReceive =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.core.channel.v1.Query/NextSequenceReceive',
      request,
      metadata || {},
      methodDescriptor_Query_NextSequenceReceive);
};


module.exports = proto.ibc.core.channel.v1;

