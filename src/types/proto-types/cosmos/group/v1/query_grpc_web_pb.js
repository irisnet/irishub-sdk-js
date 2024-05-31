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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var cosmos_group_v1_types_pb = require('../../../cosmos/group/v1/types_pb.js')

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js')

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js')

var amino_amino_pb = require('../../../amino/amino_pb.js')
const proto = {};
proto.cosmos = {};
proto.cosmos.group = {};
proto.cosmos.group.v1 = require('./query_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cosmos.group.v1.QueryClient =
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
proto.cosmos.group.v1.QueryPromiseClient =
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
 *   !proto.cosmos.group.v1.QueryGroupInfoRequest,
 *   !proto.cosmos.group.v1.QueryGroupInfoResponse>}
 */
const methodDescriptor_Query_GroupInfo = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/GroupInfo',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryGroupInfoRequest,
  proto.cosmos.group.v1.QueryGroupInfoResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryGroupInfoRequest,
 *   !proto.cosmos.group.v1.QueryGroupInfoResponse>}
 */
const methodInfo_Query_GroupInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryGroupInfoResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupInfoResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryGroupInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryGroupInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryGroupInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.groupInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupInfo',
      request,
      metadata || {},
      methodDescriptor_Query_GroupInfo,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryGroupInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryGroupInfoResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.groupInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupInfo',
      request,
      metadata || {},
      methodDescriptor_Query_GroupInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryGroupPolicyInfoRequest,
 *   !proto.cosmos.group.v1.QueryGroupPolicyInfoResponse>}
 */
const methodDescriptor_Query_GroupPolicyInfo = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/GroupPolicyInfo',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryGroupPolicyInfoRequest,
  proto.cosmos.group.v1.QueryGroupPolicyInfoResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupPolicyInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupPolicyInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryGroupPolicyInfoRequest,
 *   !proto.cosmos.group.v1.QueryGroupPolicyInfoResponse>}
 */
const methodInfo_Query_GroupPolicyInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryGroupPolicyInfoResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupPolicyInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupPolicyInfoResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryGroupPolicyInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryGroupPolicyInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryGroupPolicyInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.groupPolicyInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupPolicyInfo',
      request,
      metadata || {},
      methodDescriptor_Query_GroupPolicyInfo,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryGroupPolicyInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryGroupPolicyInfoResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.groupPolicyInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupPolicyInfo',
      request,
      metadata || {},
      methodDescriptor_Query_GroupPolicyInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryGroupMembersRequest,
 *   !proto.cosmos.group.v1.QueryGroupMembersResponse>}
 */
const methodDescriptor_Query_GroupMembers = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/GroupMembers',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryGroupMembersRequest,
  proto.cosmos.group.v1.QueryGroupMembersResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupMembersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryGroupMembersRequest,
 *   !proto.cosmos.group.v1.QueryGroupMembersResponse>}
 */
const methodInfo_Query_GroupMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryGroupMembersResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupMembersResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryGroupMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryGroupMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryGroupMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.groupMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupMembers',
      request,
      metadata || {},
      methodDescriptor_Query_GroupMembers,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryGroupMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryGroupMembersResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.groupMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupMembers',
      request,
      metadata || {},
      methodDescriptor_Query_GroupMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryGroupsByAdminRequest,
 *   !proto.cosmos.group.v1.QueryGroupsByAdminResponse>}
 */
const methodDescriptor_Query_GroupsByAdmin = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/GroupsByAdmin',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryGroupsByAdminRequest,
  proto.cosmos.group.v1.QueryGroupsByAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupsByAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupsByAdminResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryGroupsByAdminRequest,
 *   !proto.cosmos.group.v1.QueryGroupsByAdminResponse>}
 */
const methodInfo_Query_GroupsByAdmin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryGroupsByAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupsByAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupsByAdminResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryGroupsByAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryGroupsByAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryGroupsByAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.groupsByAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupsByAdmin',
      request,
      metadata || {},
      methodDescriptor_Query_GroupsByAdmin,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryGroupsByAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryGroupsByAdminResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.groupsByAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupsByAdmin',
      request,
      metadata || {},
      methodDescriptor_Query_GroupsByAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryGroupPoliciesByGroupRequest,
 *   !proto.cosmos.group.v1.QueryGroupPoliciesByGroupResponse>}
 */
const methodDescriptor_Query_GroupPoliciesByGroup = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/GroupPoliciesByGroup',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryGroupPoliciesByGroupRequest,
  proto.cosmos.group.v1.QueryGroupPoliciesByGroupResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupPoliciesByGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupPoliciesByGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryGroupPoliciesByGroupRequest,
 *   !proto.cosmos.group.v1.QueryGroupPoliciesByGroupResponse>}
 */
const methodInfo_Query_GroupPoliciesByGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryGroupPoliciesByGroupResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupPoliciesByGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupPoliciesByGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryGroupPoliciesByGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryGroupPoliciesByGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryGroupPoliciesByGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.groupPoliciesByGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupPoliciesByGroup',
      request,
      metadata || {},
      methodDescriptor_Query_GroupPoliciesByGroup,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryGroupPoliciesByGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryGroupPoliciesByGroupResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.groupPoliciesByGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupPoliciesByGroup',
      request,
      metadata || {},
      methodDescriptor_Query_GroupPoliciesByGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryGroupPoliciesByAdminRequest,
 *   !proto.cosmos.group.v1.QueryGroupPoliciesByAdminResponse>}
 */
const methodDescriptor_Query_GroupPoliciesByAdmin = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/GroupPoliciesByAdmin',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryGroupPoliciesByAdminRequest,
  proto.cosmos.group.v1.QueryGroupPoliciesByAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupPoliciesByAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupPoliciesByAdminResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryGroupPoliciesByAdminRequest,
 *   !proto.cosmos.group.v1.QueryGroupPoliciesByAdminResponse>}
 */
const methodInfo_Query_GroupPoliciesByAdmin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryGroupPoliciesByAdminResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupPoliciesByAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupPoliciesByAdminResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryGroupPoliciesByAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryGroupPoliciesByAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryGroupPoliciesByAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.groupPoliciesByAdmin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupPoliciesByAdmin',
      request,
      metadata || {},
      methodDescriptor_Query_GroupPoliciesByAdmin,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryGroupPoliciesByAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryGroupPoliciesByAdminResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.groupPoliciesByAdmin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupPoliciesByAdmin',
      request,
      metadata || {},
      methodDescriptor_Query_GroupPoliciesByAdmin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryProposalRequest,
 *   !proto.cosmos.group.v1.QueryProposalResponse>}
 */
const methodDescriptor_Query_Proposal = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/Proposal',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryProposalRequest,
  proto.cosmos.group.v1.QueryProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryProposalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryProposalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryProposalRequest,
 *   !proto.cosmos.group.v1.QueryProposalResponse>}
 */
const methodInfo_Query_Proposal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryProposalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryProposalResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryProposalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryProposalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryProposalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.proposal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/Proposal',
      request,
      metadata || {},
      methodDescriptor_Query_Proposal,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryProposalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryProposalResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.proposal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/Proposal',
      request,
      metadata || {},
      methodDescriptor_Query_Proposal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryProposalsByGroupPolicyRequest,
 *   !proto.cosmos.group.v1.QueryProposalsByGroupPolicyResponse>}
 */
const methodDescriptor_Query_ProposalsByGroupPolicy = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/ProposalsByGroupPolicy',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryProposalsByGroupPolicyRequest,
  proto.cosmos.group.v1.QueryProposalsByGroupPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryProposalsByGroupPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryProposalsByGroupPolicyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryProposalsByGroupPolicyRequest,
 *   !proto.cosmos.group.v1.QueryProposalsByGroupPolicyResponse>}
 */
const methodInfo_Query_ProposalsByGroupPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryProposalsByGroupPolicyResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryProposalsByGroupPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryProposalsByGroupPolicyResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryProposalsByGroupPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryProposalsByGroupPolicyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryProposalsByGroupPolicyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.proposalsByGroupPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/ProposalsByGroupPolicy',
      request,
      metadata || {},
      methodDescriptor_Query_ProposalsByGroupPolicy,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryProposalsByGroupPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryProposalsByGroupPolicyResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.proposalsByGroupPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/ProposalsByGroupPolicy',
      request,
      metadata || {},
      methodDescriptor_Query_ProposalsByGroupPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryVoteByProposalVoterRequest,
 *   !proto.cosmos.group.v1.QueryVoteByProposalVoterResponse>}
 */
const methodDescriptor_Query_VoteByProposalVoter = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/VoteByProposalVoter',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryVoteByProposalVoterRequest,
  proto.cosmos.group.v1.QueryVoteByProposalVoterResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryVoteByProposalVoterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryVoteByProposalVoterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryVoteByProposalVoterRequest,
 *   !proto.cosmos.group.v1.QueryVoteByProposalVoterResponse>}
 */
const methodInfo_Query_VoteByProposalVoter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryVoteByProposalVoterResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryVoteByProposalVoterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryVoteByProposalVoterResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryVoteByProposalVoterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryVoteByProposalVoterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryVoteByProposalVoterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.voteByProposalVoter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/VoteByProposalVoter',
      request,
      metadata || {},
      methodDescriptor_Query_VoteByProposalVoter,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryVoteByProposalVoterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryVoteByProposalVoterResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.voteByProposalVoter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/VoteByProposalVoter',
      request,
      metadata || {},
      methodDescriptor_Query_VoteByProposalVoter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryVotesByProposalRequest,
 *   !proto.cosmos.group.v1.QueryVotesByProposalResponse>}
 */
const methodDescriptor_Query_VotesByProposal = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/VotesByProposal',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryVotesByProposalRequest,
  proto.cosmos.group.v1.QueryVotesByProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryVotesByProposalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryVotesByProposalResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryVotesByProposalRequest,
 *   !proto.cosmos.group.v1.QueryVotesByProposalResponse>}
 */
const methodInfo_Query_VotesByProposal = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryVotesByProposalResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryVotesByProposalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryVotesByProposalResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryVotesByProposalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryVotesByProposalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryVotesByProposalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.votesByProposal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/VotesByProposal',
      request,
      metadata || {},
      methodDescriptor_Query_VotesByProposal,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryVotesByProposalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryVotesByProposalResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.votesByProposal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/VotesByProposal',
      request,
      metadata || {},
      methodDescriptor_Query_VotesByProposal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryVotesByVoterRequest,
 *   !proto.cosmos.group.v1.QueryVotesByVoterResponse>}
 */
const methodDescriptor_Query_VotesByVoter = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/VotesByVoter',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryVotesByVoterRequest,
  proto.cosmos.group.v1.QueryVotesByVoterResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryVotesByVoterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryVotesByVoterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryVotesByVoterRequest,
 *   !proto.cosmos.group.v1.QueryVotesByVoterResponse>}
 */
const methodInfo_Query_VotesByVoter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryVotesByVoterResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryVotesByVoterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryVotesByVoterResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryVotesByVoterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryVotesByVoterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryVotesByVoterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.votesByVoter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/VotesByVoter',
      request,
      metadata || {},
      methodDescriptor_Query_VotesByVoter,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryVotesByVoterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryVotesByVoterResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.votesByVoter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/VotesByVoter',
      request,
      metadata || {},
      methodDescriptor_Query_VotesByVoter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryGroupsByMemberRequest,
 *   !proto.cosmos.group.v1.QueryGroupsByMemberResponse>}
 */
const methodDescriptor_Query_GroupsByMember = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/GroupsByMember',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryGroupsByMemberRequest,
  proto.cosmos.group.v1.QueryGroupsByMemberResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupsByMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupsByMemberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryGroupsByMemberRequest,
 *   !proto.cosmos.group.v1.QueryGroupsByMemberResponse>}
 */
const methodInfo_Query_GroupsByMember = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryGroupsByMemberResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupsByMemberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupsByMemberResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryGroupsByMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryGroupsByMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryGroupsByMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.groupsByMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupsByMember',
      request,
      metadata || {},
      methodDescriptor_Query_GroupsByMember,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryGroupsByMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryGroupsByMemberResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.groupsByMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/GroupsByMember',
      request,
      metadata || {},
      methodDescriptor_Query_GroupsByMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryTallyResultRequest,
 *   !proto.cosmos.group.v1.QueryTallyResultResponse>}
 */
const methodDescriptor_Query_TallyResult = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/TallyResult',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryTallyResultRequest,
  proto.cosmos.group.v1.QueryTallyResultResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryTallyResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryTallyResultResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryTallyResultRequest,
 *   !proto.cosmos.group.v1.QueryTallyResultResponse>}
 */
const methodInfo_Query_TallyResult = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryTallyResultResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryTallyResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryTallyResultResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryTallyResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryTallyResultResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryTallyResultResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.tallyResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/TallyResult',
      request,
      metadata || {},
      methodDescriptor_Query_TallyResult,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryTallyResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryTallyResultResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.tallyResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/TallyResult',
      request,
      metadata || {},
      methodDescriptor_Query_TallyResult);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cosmos.group.v1.QueryGroupsRequest,
 *   !proto.cosmos.group.v1.QueryGroupsResponse>}
 */
const methodDescriptor_Query_Groups = new grpc.web.MethodDescriptor(
  '/cosmos.group.v1.Query/Groups',
  grpc.web.MethodType.UNARY,
  proto.cosmos.group.v1.QueryGroupsRequest,
  proto.cosmos.group.v1.QueryGroupsResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cosmos.group.v1.QueryGroupsRequest,
 *   !proto.cosmos.group.v1.QueryGroupsResponse>}
 */
const methodInfo_Query_Groups = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cosmos.group.v1.QueryGroupsResponse,
  /**
   * @param {!proto.cosmos.group.v1.QueryGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cosmos.group.v1.QueryGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.cosmos.group.v1.QueryGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cosmos.group.v1.QueryGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cosmos.group.v1.QueryGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cosmos.group.v1.QueryClient.prototype.groups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cosmos.group.v1.Query/Groups',
      request,
      metadata || {},
      methodDescriptor_Query_Groups,
      callback);
};


/**
 * @param {!proto.cosmos.group.v1.QueryGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cosmos.group.v1.QueryGroupsResponse>}
 *     Promise that resolves to the response
 */
proto.cosmos.group.v1.QueryPromiseClient.prototype.groups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cosmos.group.v1.Query/Groups',
      request,
      metadata || {},
      methodDescriptor_Query_Groups);
};


module.exports = proto.cosmos.group.v1;

