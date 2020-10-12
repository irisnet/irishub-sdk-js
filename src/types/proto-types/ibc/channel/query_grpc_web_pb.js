/**
 * @fileoverview gRPC-Web generated client stub for ibc.channel
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var ibc_client_client_pb = require('../../ibc/client/client_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js')

var ibc_channel_channel_pb = require('../../ibc/channel/channel_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js')
const proto = {};
proto.ibc = {};
proto.ibc.channel = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ibc.channel.QueryClient =
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
proto.ibc.channel.QueryPromiseClient =
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
 *   !proto.ibc.channel.QueryChannelRequest,
 *   !proto.ibc.channel.QueryChannelResponse>}
 */
const methodDescriptor_Query_Channel = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/Channel',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryChannelRequest,
  proto.ibc.channel.QueryChannelResponse,
  /**
   * @param {!proto.ibc.channel.QueryChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryChannelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryChannelRequest,
 *   !proto.ibc.channel.QueryChannelResponse>}
 */
const methodInfo_Query_Channel = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryChannelResponse,
  /**
   * @param {!proto.ibc.channel.QueryChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryChannelResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryChannelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryChannelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.channel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/Channel',
      request,
      metadata || {},
      methodDescriptor_Query_Channel,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryChannelResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.channel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/Channel',
      request,
      metadata || {},
      methodDescriptor_Query_Channel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.channel.QueryChannelsRequest,
 *   !proto.ibc.channel.QueryChannelsResponse>}
 */
const methodDescriptor_Query_Channels = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/Channels',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryChannelsRequest,
  proto.ibc.channel.QueryChannelsResponse,
  /**
   * @param {!proto.ibc.channel.QueryChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryChannelsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryChannelsRequest,
 *   !proto.ibc.channel.QueryChannelsResponse>}
 */
const methodInfo_Query_Channels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryChannelsResponse,
  /**
   * @param {!proto.ibc.channel.QueryChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryChannelsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryChannelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryChannelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.channels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/Channels',
      request,
      metadata || {},
      methodDescriptor_Query_Channels,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryChannelsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.channels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/Channels',
      request,
      metadata || {},
      methodDescriptor_Query_Channels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.channel.QueryConnectionChannelsRequest,
 *   !proto.ibc.channel.QueryConnectionChannelsResponse>}
 */
const methodDescriptor_Query_ConnectionChannels = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/ConnectionChannels',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryConnectionChannelsRequest,
  proto.ibc.channel.QueryConnectionChannelsResponse,
  /**
   * @param {!proto.ibc.channel.QueryConnectionChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryConnectionChannelsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryConnectionChannelsRequest,
 *   !proto.ibc.channel.QueryConnectionChannelsResponse>}
 */
const methodInfo_Query_ConnectionChannels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryConnectionChannelsResponse,
  /**
   * @param {!proto.ibc.channel.QueryConnectionChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryConnectionChannelsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryConnectionChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryConnectionChannelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryConnectionChannelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.connectionChannels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/ConnectionChannels',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionChannels,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryConnectionChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryConnectionChannelsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.connectionChannels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/ConnectionChannels',
      request,
      metadata || {},
      methodDescriptor_Query_ConnectionChannels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.channel.QueryChannelClientStateRequest,
 *   !proto.ibc.channel.QueryChannelClientStateResponse>}
 */
const methodDescriptor_Query_ChannelClientState = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/ChannelClientState',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryChannelClientStateRequest,
  proto.ibc.channel.QueryChannelClientStateResponse,
  /**
   * @param {!proto.ibc.channel.QueryChannelClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryChannelClientStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryChannelClientStateRequest,
 *   !proto.ibc.channel.QueryChannelClientStateResponse>}
 */
const methodInfo_Query_ChannelClientState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryChannelClientStateResponse,
  /**
   * @param {!proto.ibc.channel.QueryChannelClientStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryChannelClientStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryChannelClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryChannelClientStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryChannelClientStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.channelClientState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/ChannelClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ChannelClientState,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryChannelClientStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryChannelClientStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.channelClientState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/ChannelClientState',
      request,
      metadata || {},
      methodDescriptor_Query_ChannelClientState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.channel.QueryChannelConsensusStateRequest,
 *   !proto.ibc.channel.QueryChannelConsensusStateResponse>}
 */
const methodDescriptor_Query_ChannelConsensusState = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/ChannelConsensusState',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryChannelConsensusStateRequest,
  proto.ibc.channel.QueryChannelConsensusStateResponse,
  /**
   * @param {!proto.ibc.channel.QueryChannelConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryChannelConsensusStateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryChannelConsensusStateRequest,
 *   !proto.ibc.channel.QueryChannelConsensusStateResponse>}
 */
const methodInfo_Query_ChannelConsensusState = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryChannelConsensusStateResponse,
  /**
   * @param {!proto.ibc.channel.QueryChannelConsensusStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryChannelConsensusStateResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryChannelConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryChannelConsensusStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryChannelConsensusStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.channelConsensusState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/ChannelConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ChannelConsensusState,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryChannelConsensusStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryChannelConsensusStateResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.channelConsensusState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/ChannelConsensusState',
      request,
      metadata || {},
      methodDescriptor_Query_ChannelConsensusState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.channel.QueryPacketCommitmentRequest,
 *   !proto.ibc.channel.QueryPacketCommitmentResponse>}
 */
const methodDescriptor_Query_PacketCommitment = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/PacketCommitment',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryPacketCommitmentRequest,
  proto.ibc.channel.QueryPacketCommitmentResponse,
  /**
   * @param {!proto.ibc.channel.QueryPacketCommitmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryPacketCommitmentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryPacketCommitmentRequest,
 *   !proto.ibc.channel.QueryPacketCommitmentResponse>}
 */
const methodInfo_Query_PacketCommitment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryPacketCommitmentResponse,
  /**
   * @param {!proto.ibc.channel.QueryPacketCommitmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryPacketCommitmentResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryPacketCommitmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryPacketCommitmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryPacketCommitmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.packetCommitment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/PacketCommitment',
      request,
      metadata || {},
      methodDescriptor_Query_PacketCommitment,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryPacketCommitmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryPacketCommitmentResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.packetCommitment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/PacketCommitment',
      request,
      metadata || {},
      methodDescriptor_Query_PacketCommitment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.channel.QueryPacketCommitmentsRequest,
 *   !proto.ibc.channel.QueryPacketCommitmentsResponse>}
 */
const methodDescriptor_Query_PacketCommitments = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/PacketCommitments',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryPacketCommitmentsRequest,
  proto.ibc.channel.QueryPacketCommitmentsResponse,
  /**
   * @param {!proto.ibc.channel.QueryPacketCommitmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryPacketCommitmentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryPacketCommitmentsRequest,
 *   !proto.ibc.channel.QueryPacketCommitmentsResponse>}
 */
const methodInfo_Query_PacketCommitments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryPacketCommitmentsResponse,
  /**
   * @param {!proto.ibc.channel.QueryPacketCommitmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryPacketCommitmentsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryPacketCommitmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryPacketCommitmentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryPacketCommitmentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.packetCommitments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/PacketCommitments',
      request,
      metadata || {},
      methodDescriptor_Query_PacketCommitments,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryPacketCommitmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryPacketCommitmentsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.packetCommitments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/PacketCommitments',
      request,
      metadata || {},
      methodDescriptor_Query_PacketCommitments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.channel.QueryPacketAcknowledgementRequest,
 *   !proto.ibc.channel.QueryPacketAcknowledgementResponse>}
 */
const methodDescriptor_Query_PacketAcknowledgement = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/PacketAcknowledgement',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryPacketAcknowledgementRequest,
  proto.ibc.channel.QueryPacketAcknowledgementResponse,
  /**
   * @param {!proto.ibc.channel.QueryPacketAcknowledgementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryPacketAcknowledgementResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryPacketAcknowledgementRequest,
 *   !proto.ibc.channel.QueryPacketAcknowledgementResponse>}
 */
const methodInfo_Query_PacketAcknowledgement = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryPacketAcknowledgementResponse,
  /**
   * @param {!proto.ibc.channel.QueryPacketAcknowledgementRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryPacketAcknowledgementResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryPacketAcknowledgementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryPacketAcknowledgementResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryPacketAcknowledgementResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.packetAcknowledgement =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/PacketAcknowledgement',
      request,
      metadata || {},
      methodDescriptor_Query_PacketAcknowledgement,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryPacketAcknowledgementRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryPacketAcknowledgementResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.packetAcknowledgement =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/PacketAcknowledgement',
      request,
      metadata || {},
      methodDescriptor_Query_PacketAcknowledgement);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.channel.QueryUnrelayedPacketsRequest,
 *   !proto.ibc.channel.QueryUnrelayedPacketsResponse>}
 */
const methodDescriptor_Query_UnrelayedPackets = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/UnrelayedPackets',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryUnrelayedPacketsRequest,
  proto.ibc.channel.QueryUnrelayedPacketsResponse,
  /**
   * @param {!proto.ibc.channel.QueryUnrelayedPacketsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryUnrelayedPacketsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryUnrelayedPacketsRequest,
 *   !proto.ibc.channel.QueryUnrelayedPacketsResponse>}
 */
const methodInfo_Query_UnrelayedPackets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryUnrelayedPacketsResponse,
  /**
   * @param {!proto.ibc.channel.QueryUnrelayedPacketsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryUnrelayedPacketsResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryUnrelayedPacketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryUnrelayedPacketsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryUnrelayedPacketsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.unrelayedPackets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/UnrelayedPackets',
      request,
      metadata || {},
      methodDescriptor_Query_UnrelayedPackets,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryUnrelayedPacketsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryUnrelayedPacketsResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.unrelayedPackets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/UnrelayedPackets',
      request,
      metadata || {},
      methodDescriptor_Query_UnrelayedPackets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ibc.channel.QueryNextSequenceReceiveRequest,
 *   !proto.ibc.channel.QueryNextSequenceReceiveResponse>}
 */
const methodDescriptor_Query_NextSequenceReceive = new grpc.web.MethodDescriptor(
  '/ibc.channel.Query/NextSequenceReceive',
  grpc.web.MethodType.UNARY,
  proto.ibc.channel.QueryNextSequenceReceiveRequest,
  proto.ibc.channel.QueryNextSequenceReceiveResponse,
  /**
   * @param {!proto.ibc.channel.QueryNextSequenceReceiveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryNextSequenceReceiveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ibc.channel.QueryNextSequenceReceiveRequest,
 *   !proto.ibc.channel.QueryNextSequenceReceiveResponse>}
 */
const methodInfo_Query_NextSequenceReceive = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ibc.channel.QueryNextSequenceReceiveResponse,
  /**
   * @param {!proto.ibc.channel.QueryNextSequenceReceiveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ibc.channel.QueryNextSequenceReceiveResponse.deserializeBinary
);


/**
 * @param {!proto.ibc.channel.QueryNextSequenceReceiveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ibc.channel.QueryNextSequenceReceiveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ibc.channel.QueryNextSequenceReceiveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ibc.channel.QueryClient.prototype.nextSequenceReceive =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ibc.channel.Query/NextSequenceReceive',
      request,
      metadata || {},
      methodDescriptor_Query_NextSequenceReceive,
      callback);
};


/**
 * @param {!proto.ibc.channel.QueryNextSequenceReceiveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ibc.channel.QueryNextSequenceReceiveResponse>}
 *     Promise that resolves to the response
 */
proto.ibc.channel.QueryPromiseClient.prototype.nextSequenceReceive =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ibc.channel.Query/NextSequenceReceive',
      request,
      metadata || {},
      methodDescriptor_Query_NextSequenceReceive);
};


module.exports = proto.ibc.channel;

