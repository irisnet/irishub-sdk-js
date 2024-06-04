// source: cosmos/slashing/v1beta1/query.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
goog.object.extend(proto, cosmos_base_query_v1beta1_pagination_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var cosmos_slashing_v1beta1_slashing_pb = require('../../../cosmos/slashing/v1beta1/slashing_pb.js');
goog.object.extend(proto, cosmos_slashing_v1beta1_slashing_pb);
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.QueryParamsRequest', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.QueryParamsResponse', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.slashing.v1beta1.QueryParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.QueryParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.QueryParamsRequest.displayName = 'proto.cosmos.slashing.v1beta1.QueryParamsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.QueryParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.QueryParamsResponse.displayName = 'proto.cosmos.slashing.v1beta1.QueryParamsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.displayName = 'proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.displayName = 'proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.displayName = 'proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.displayName = 'proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.slashing.v1beta1.QueryParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.QueryParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.QueryParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QueryParamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.slashing.v1beta1.QueryParamsRequest}
 */
proto.cosmos.slashing.v1beta1.QueryParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.QueryParamsRequest;
  return proto.cosmos.slashing.v1beta1.QueryParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.QueryParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.QueryParamsRequest}
 */
proto.cosmos.slashing.v1beta1.QueryParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.slashing.v1beta1.QueryParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.QueryParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.QueryParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QueryParamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.QueryParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.QueryParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && cosmos_slashing_v1beta1_slashing_pb.Params.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.slashing.v1beta1.QueryParamsResponse}
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.QueryParamsResponse;
  return proto.cosmos.slashing.v1beta1.QueryParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.QueryParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.QueryParamsResponse}
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_slashing_v1beta1_slashing_pb.Params;
      reader.readMessage(value,cosmos_slashing_v1beta1_slashing_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.QueryParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.QueryParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_slashing_v1beta1_slashing_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.cosmos.slashing.v1beta1.Params}
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse.prototype.getParams = function() {
  return /** @type{?proto.cosmos.slashing.v1beta1.Params} */ (
    jspb.Message.getWrapperField(this, cosmos_slashing_v1beta1_slashing_pb.Params, 1));
};


/**
 * @param {?proto.cosmos.slashing.v1beta1.Params|undefined} value
 * @return {!proto.cosmos.slashing.v1beta1.QueryParamsResponse} returns this
*/
proto.cosmos.slashing.v1beta1.QueryParamsResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.slashing.v1beta1.QueryParamsResponse} returns this
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.slashing.v1beta1.QueryParamsResponse.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    consAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest;
  return proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cons_address = 1;
 * @return {string}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.prototype.getConsAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest} returns this
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoRequest.prototype.setConsAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valSigningInfo: (f = msg.getValSigningInfo()) && cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse;
  return proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo;
      reader.readMessage(value,cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.deserializeBinaryFromReader);
      msg.setValSigningInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValSigningInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ValidatorSigningInfo val_signing_info = 1;
 * @return {?proto.cosmos.slashing.v1beta1.ValidatorSigningInfo}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.prototype.getValSigningInfo = function() {
  return /** @type{?proto.cosmos.slashing.v1beta1.ValidatorSigningInfo} */ (
    jspb.Message.getWrapperField(this, cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo, 1));
};


/**
 * @param {?proto.cosmos.slashing.v1beta1.ValidatorSigningInfo|undefined} value
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse} returns this
*/
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.prototype.setValSigningInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse} returns this
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.prototype.clearValSigningInfo = function() {
  return this.setValSigningInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfoResponse.prototype.hasValSigningInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest;
  return proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 1;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 1));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest} returns this
*/
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest} returns this
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    infoList: jspb.Message.toObjectList(msg.getInfoList(),
    cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse;
  return proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo;
      reader.readMessage(value,cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.deserializeBinaryFromReader);
      msg.addInfo(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ValidatorSigningInfo info = 1;
 * @return {!Array<!proto.cosmos.slashing.v1beta1.ValidatorSigningInfo>}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.getInfoList = function() {
  return /** @type{!Array<!proto.cosmos.slashing.v1beta1.ValidatorSigningInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_slashing_v1beta1_slashing_pb.ValidatorSigningInfo, 1));
};


/**
 * @param {!Array<!proto.cosmos.slashing.v1beta1.ValidatorSigningInfo>} value
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse} returns this
*/
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.setInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.slashing.v1beta1.ValidatorSigningInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.slashing.v1beta1.ValidatorSigningInfo}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.addInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.slashing.v1beta1.ValidatorSigningInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse} returns this
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.clearInfoList = function() {
  return this.setInfoList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse} returns this
*/
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse} returns this
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.slashing.v1beta1.QuerySigningInfosResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.cosmos.slashing.v1beta1);
