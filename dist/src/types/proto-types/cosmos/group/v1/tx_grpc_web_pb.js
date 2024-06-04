/**
 * @fileoverview gRPC-Web generated client stub for cosmos.group.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var cosmos_group_v1_types_pb = require('../../../cosmos/group/v1/types_pb.js')

var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js')

var amino_amino_pb = require('../../../amino/amino_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.group = {};
proto.cosmos.group.v1 = require('./tx_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.group.v1.MsgClient =
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
proto.cosmos.group.v1.MsgPromiseClient =
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
 *   !proto.cosmos.group.v1.MsgCreateGroup,
 *   !proto.cosmos.group.v1.MsgCreateGroupResponse>}
 */
const methodDescriptor_Msg_CreateGroup = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/CreateGroup',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgCreateGroup,
  proto.cosmos.group.v1.MsgCreateGroupResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgCreateGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgCreateGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgCreateGroup,
 *   !proto.cosmos.group.v1.MsgCreateGroupResponse>}
 */
const methodInfo_Msg_CreateGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgCreateGroupResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgCreateGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgCreateGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgCreateGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgCreateGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgCreateGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.createGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroup,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgCreateGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgCreateGroupResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.createGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgUpdateGroupMembers,
 *   !proto.cosmos.group.v1.MsgUpdateGroupMembersResponse>}
 */
const methodDescriptor_Msg_UpdateGroupMembers = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/UpdateGroupMembers',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgUpdateGroupMembers,
  proto.cosmos.group.v1.MsgUpdateGroupMembersResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupMembers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupMembersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgUpdateGroupMembers,
 *   !proto.cosmos.group.v1.MsgUpdateGroupMembersResponse>}
 */
const methodInfo_Msg_UpdateGroupMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgUpdateGroupMembersResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupMembers} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupMembersResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupMembers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgUpdateGroupMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgUpdateGroupMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.updateGroupMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupMembers',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupMembers,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupMembers} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgUpdateGroupMembersResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.updateGroupMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupMembers',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgUpdateGroupAdmin,
 *   !proto.cosmos.group.v1.MsgUpdateGroupAdminResponse>}
 */
const methodDescriptor_Msg_UpdateGroupAdmin = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/UpdateGroupAdmin',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgUpdateGroupAdmin,
  proto.cosmos.group.v1.MsgUpdateGroupAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupAdmin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupAdminResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgUpdateGroupAdmin,
 *   !proto.cosmos.group.v1.MsgUpdateGroupAdminResponse>}
 */
const methodInfo_Msg_UpdateGroupAdmin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgUpdateGroupAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupAdmin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupAdminResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupAdmin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgUpdateGroupAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgUpdateGroupAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.updateGroupAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupAdmin',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupAdmin,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupAdmin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgUpdateGroupAdminResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.updateGroupAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupAdmin',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgUpdateGroupMetadata,
 *   !proto.cosmos.group.v1.MsgUpdateGroupMetadataResponse>}
 */
const methodDescriptor_Msg_UpdateGroupMetadata = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/UpdateGroupMetadata',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgUpdateGroupMetadata,
  proto.cosmos.group.v1.MsgUpdateGroupMetadataResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupMetadata} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgUpdateGroupMetadata,
 *   !proto.cosmos.group.v1.MsgUpdateGroupMetadataResponse>}
 */
const methodInfo_Msg_UpdateGroupMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgUpdateGroupMetadataResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupMetadata} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupMetadata} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgUpdateGroupMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgUpdateGroupMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.updateGroupMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupMetadata',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupMetadata,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupMetadata} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgUpdateGroupMetadataResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.updateGroupMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupMetadata',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgCreateGroupPolicy,
 *   !proto.cosmos.group.v1.MsgCreateGroupPolicyResponse>}
 */
const methodDescriptor_Msg_CreateGroupPolicy = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/CreateGroupPolicy',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgCreateGroupPolicy,
  proto.cosmos.group.v1.MsgCreateGroupPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgCreateGroupPolicy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgCreateGroupPolicyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgCreateGroupPolicy,
 *   !proto.cosmos.group.v1.MsgCreateGroupPolicyResponse>}
 */
const methodInfo_Msg_CreateGroupPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgCreateGroupPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgCreateGroupPolicy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgCreateGroupPolicyResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgCreateGroupPolicy} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgCreateGroupPolicyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgCreateGroupPolicyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.createGroupPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/CreateGroupPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroupPolicy,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgCreateGroupPolicy} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgCreateGroupPolicyResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.createGroupPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/CreateGroupPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroupPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgCreateGroupWithPolicy,
 *   !proto.cosmos.group.v1.MsgCreateGroupWithPolicyResponse>}
 */
const methodDescriptor_Msg_CreateGroupWithPolicy = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/CreateGroupWithPolicy',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgCreateGroupWithPolicy,
  proto.cosmos.group.v1.MsgCreateGroupWithPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgCreateGroupWithPolicy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgCreateGroupWithPolicyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgCreateGroupWithPolicy,
 *   !proto.cosmos.group.v1.MsgCreateGroupWithPolicyResponse>}
 */
const methodInfo_Msg_CreateGroupWithPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgCreateGroupWithPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgCreateGroupWithPolicy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgCreateGroupWithPolicyResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgCreateGroupWithPolicy} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgCreateGroupWithPolicyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgCreateGroupWithPolicyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.createGroupWithPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/CreateGroupWithPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroupWithPolicy,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgCreateGroupWithPolicy} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgCreateGroupWithPolicyResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.createGroupWithPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/CreateGroupWithPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_CreateGroupWithPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyAdmin,
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse>}
 */
const methodDescriptor_Msg_UpdateGroupPolicyAdmin = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/UpdateGroupPolicyAdmin',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgUpdateGroupPolicyAdmin,
  proto.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyAdmin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyAdmin,
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse>}
 */
const methodInfo_Msg_UpdateGroupPolicyAdmin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyAdmin} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyAdmin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.updateGroupPolicyAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupPolicyAdmin',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyAdmin,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyAdmin} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.updateGroupPolicyAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupPolicyAdmin',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy,
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse>}
 */
const methodDescriptor_Msg_UpdateGroupPolicyDecisionPolicy = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/UpdateGroupPolicyDecisionPolicy',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy,
  proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy,
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse>}
 */
const methodInfo_Msg_UpdateGroupPolicyDecisionPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.updateGroupPolicyDecisionPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupPolicyDecisionPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyDecisionPolicy,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.updateGroupPolicyDecisionPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupPolicyDecisionPolicy',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyDecisionPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadata,
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse>}
 */
const methodDescriptor_Msg_UpdateGroupPolicyMetadata = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/UpdateGroupPolicyMetadata',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadata,
  proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadata} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadata,
 *   !proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse>}
 */
const methodInfo_Msg_UpdateGroupPolicyMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadata} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadata} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.updateGroupPolicyMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupPolicyMetadata',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyMetadata,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadata} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.updateGroupPolicyMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/UpdateGroupPolicyMetadata',
      request,
      metadata || {},
      methodDescriptor_Msg_UpdateGroupPolicyMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgSubmitProposal,
 *   !proto.cosmos.group.v1.MsgSubmitProposalResponse>}
 */
const methodDescriptor_Msg_SubmitProposal = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/SubmitProposal',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgSubmitProposal,
  proto.cosmos.group.v1.MsgSubmitProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgSubmitProposal} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgSubmitProposalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgSubmitProposal,
 *   !proto.cosmos.group.v1.MsgSubmitProposalResponse>}
 */
const methodInfo_Msg_SubmitProposal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgSubmitProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgSubmitProposal} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgSubmitProposalResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgSubmitProposal} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgSubmitProposalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgSubmitProposalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.submitProposal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/SubmitProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitProposal,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgSubmitProposal} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgSubmitProposalResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.submitProposal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/SubmitProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_SubmitProposal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgWithdrawProposal,
 *   !proto.cosmos.group.v1.MsgWithdrawProposalResponse>}
 */
const methodDescriptor_Msg_WithdrawProposal = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/WithdrawProposal',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgWithdrawProposal,
  proto.cosmos.group.v1.MsgWithdrawProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgWithdrawProposal} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgWithdrawProposalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgWithdrawProposal,
 *   !proto.cosmos.group.v1.MsgWithdrawProposalResponse>}
 */
const methodInfo_Msg_WithdrawProposal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgWithdrawProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgWithdrawProposal} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgWithdrawProposalResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgWithdrawProposal} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgWithdrawProposalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgWithdrawProposalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.withdrawProposal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/WithdrawProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawProposal,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgWithdrawProposal} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgWithdrawProposalResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.withdrawProposal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/WithdrawProposal',
      request,
      metadata || {},
      methodDescriptor_Msg_WithdrawProposal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgVote,
 *   !proto.cosmos.group.v1.MsgVoteResponse>}
 */
const methodDescriptor_Msg_Vote = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/Vote',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgVote,
  proto.cosmos.group.v1.MsgVoteResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgVote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgVoteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgVote,
 *   !proto.cosmos.group.v1.MsgVoteResponse>}
 */
const methodInfo_Msg_Vote = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgVoteResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgVote} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgVoteResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgVote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgVoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgVoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.vote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/Vote',
      request,
      metadata || {},
      methodDescriptor_Msg_Vote,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgVote} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgVoteResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.vote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/Vote',
      request,
      metadata || {},
      methodDescriptor_Msg_Vote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgExec,
 *   !proto.cosmos.group.v1.MsgExecResponse>}
 */
const methodDescriptor_Msg_Exec = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/Exec',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgExec,
  proto.cosmos.group.v1.MsgExecResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgExecResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgExec,
 *   !proto.cosmos.group.v1.MsgExecResponse>}
 */
const methodInfo_Msg_Exec = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgExecResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgExecResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgExecResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgExecResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.exec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/Exec',
      request,
      metadata || {},
      methodDescriptor_Msg_Exec,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgExecResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.exec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/Exec',
      request,
      metadata || {},
      methodDescriptor_Msg_Exec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.MsgLeaveGroup,
 *   !proto.cosmos.group.v1.MsgLeaveGroupResponse>}
 */
const methodDescriptor_Msg_LeaveGroup = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Msg/LeaveGroup',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.MsgLeaveGroup,
  proto.cosmos.group.v1.MsgLeaveGroupResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgLeaveGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgLeaveGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.MsgLeaveGroup,
 *   !proto.cosmos.group.v1.MsgLeaveGroupResponse>}
 */
const methodInfo_Msg_LeaveGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.MsgLeaveGroupResponse,
  /**
   * @param {!proto.cosmos.group.v1.MsgLeaveGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.MsgLeaveGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.MsgLeaveGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.MsgLeaveGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.MsgLeaveGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.MsgClient.prototype.leaveGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Msg/LeaveGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_LeaveGroup,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.MsgLeaveGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.MsgLeaveGroupResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.MsgPromiseClient.prototype.leaveGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Msg/LeaveGroup',
      request,
      metadata || {},
      methodDescriptor_Msg_LeaveGroup);
};


module.exports = proto.cosmos.group.v1;

