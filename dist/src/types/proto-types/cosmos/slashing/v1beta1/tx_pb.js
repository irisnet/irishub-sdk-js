// source: cosmos/slashing/v1beta1/tx.proto
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

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var cosmos_slashing_v1beta1_slashing_pb = require('../../../cosmos/slashing/v1beta1/slashing_pb.js');
goog.object.extend(proto, cosmos_slashing_v1beta1_slashing_pb);
var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
var cosmos_msg_v1_msg_pb = require('../../../cosmos/msg/v1/msg_pb.js');
goog.object.extend(proto, cosmos_msg_v1_msg_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.MsgUnjail', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.MsgUnjailResponse', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.MsgUpdateParams', null, global);
goog.exportSymbol('proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse', null, global);
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
proto.cosmos.slashing.v1beta1.MsgUnjail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.MsgUnjail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.MsgUnjail.displayName = 'proto.cosmos.slashing.v1beta1.MsgUnjail';
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
proto.cosmos.slashing.v1beta1.MsgUnjailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.MsgUnjailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.MsgUnjailResponse.displayName = 'proto.cosmos.slashing.v1beta1.MsgUnjailResponse';
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
proto.cosmos.slashing.v1beta1.MsgUpdateParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.MsgUpdateParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.MsgUpdateParams.displayName = 'proto.cosmos.slashing.v1beta1.MsgUpdateParams';
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
proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.displayName = 'proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse';
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
proto.cosmos.slashing.v1beta1.MsgUnjail.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.MsgUnjail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.MsgUnjail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MsgUnjail.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddr: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.cosmos.slashing.v1beta1.MsgUnjail}
 */
proto.cosmos.slashing.v1beta1.MsgUnjail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.MsgUnjail;
  return proto.cosmos.slashing.v1beta1.MsgUnjail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.MsgUnjail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.MsgUnjail}
 */
proto.cosmos.slashing.v1beta1.MsgUnjail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddr(value);
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
proto.cosmos.slashing.v1beta1.MsgUnjail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.MsgUnjail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.MsgUnjail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MsgUnjail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string validator_addr = 1;
 * @return {string}
 */
proto.cosmos.slashing.v1beta1.MsgUnjail.prototype.getValidatorAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.slashing.v1beta1.MsgUnjail} returns this
 */
proto.cosmos.slashing.v1beta1.MsgUnjail.prototype.setValidatorAddr = function(value) {
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
proto.cosmos.slashing.v1beta1.MsgUnjailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.MsgUnjailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.MsgUnjailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MsgUnjailResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cosmos.slashing.v1beta1.MsgUnjailResponse}
 */
proto.cosmos.slashing.v1beta1.MsgUnjailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.MsgUnjailResponse;
  return proto.cosmos.slashing.v1beta1.MsgUnjailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.MsgUnjailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.MsgUnjailResponse}
 */
proto.cosmos.slashing.v1beta1.MsgUnjailResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.slashing.v1beta1.MsgUnjailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.MsgUnjailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.MsgUnjailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MsgUnjailResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.cosmos.slashing.v1beta1.MsgUpdateParams.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.MsgUpdateParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.MsgUpdateParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    authority: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.cosmos.slashing.v1beta1.MsgUpdateParams}
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.MsgUpdateParams;
  return proto.cosmos.slashing.v1beta1.MsgUpdateParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.MsgUpdateParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.MsgUpdateParams}
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthority(value);
      break;
    case 2:
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
proto.cosmos.slashing.v1beta1.MsgUpdateParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.MsgUpdateParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.MsgUpdateParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthority();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_slashing_v1beta1_slashing_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional string authority = 1;
 * @return {string}
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParams.prototype.getAuthority = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.slashing.v1beta1.MsgUpdateParams} returns this
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParams.prototype.setAuthority = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Params params = 2;
 * @return {?proto.cosmos.slashing.v1beta1.Params}
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParams.prototype.getParams = function() {
  return /** @type{?proto.cosmos.slashing.v1beta1.Params} */ (
    jspb.Message.getWrapperField(this, cosmos_slashing_v1beta1_slashing_pb.Params, 2));
};


/**
 * @param {?proto.cosmos.slashing.v1beta1.Params|undefined} value
 * @return {!proto.cosmos.slashing.v1beta1.MsgUpdateParams} returns this
*/
proto.cosmos.slashing.v1beta1.MsgUpdateParams.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.slashing.v1beta1.MsgUpdateParams} returns this
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParams.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParams.prototype.hasParams = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse}
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse;
  return proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse}
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.slashing.v1beta1.MsgUpdateParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.cosmos.slashing.v1beta1);
