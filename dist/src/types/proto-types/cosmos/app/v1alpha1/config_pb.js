// source: cosmos/app/v1alpha1/config.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol('proto.cosmos.app.v1alpha1.Config', null, global);
goog.exportSymbol('proto.cosmos.app.v1alpha1.GolangBinding', null, global);
goog.exportSymbol('proto.cosmos.app.v1alpha1.ModuleConfig', null, global);
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
proto.cosmos.app.v1alpha1.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.app.v1alpha1.Config.repeatedFields_, null);
};
goog.inherits(proto.cosmos.app.v1alpha1.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.app.v1alpha1.Config.displayName = 'proto.cosmos.app.v1alpha1.Config';
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
proto.cosmos.app.v1alpha1.ModuleConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.app.v1alpha1.ModuleConfig.repeatedFields_, null);
};
goog.inherits(proto.cosmos.app.v1alpha1.ModuleConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.app.v1alpha1.ModuleConfig.displayName = 'proto.cosmos.app.v1alpha1.ModuleConfig';
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
proto.cosmos.app.v1alpha1.GolangBinding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.app.v1alpha1.GolangBinding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.app.v1alpha1.GolangBinding.displayName = 'proto.cosmos.app.v1alpha1.GolangBinding';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.app.v1alpha1.Config.repeatedFields_ = [1,2];



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
proto.cosmos.app.v1alpha1.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.app.v1alpha1.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.app.v1alpha1.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.app.v1alpha1.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    modulesList: jspb.Message.toObjectList(msg.getModulesList(),
    proto.cosmos.app.v1alpha1.ModuleConfig.toObject, includeInstance),
    golangBindingsList: jspb.Message.toObjectList(msg.getGolangBindingsList(),
    proto.cosmos.app.v1alpha1.GolangBinding.toObject, includeInstance)
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
 * @return {!proto.cosmos.app.v1alpha1.Config}
 */
proto.cosmos.app.v1alpha1.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.app.v1alpha1.Config;
  return proto.cosmos.app.v1alpha1.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.app.v1alpha1.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.app.v1alpha1.Config}
 */
proto.cosmos.app.v1alpha1.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cosmos.app.v1alpha1.ModuleConfig;
      reader.readMessage(value,proto.cosmos.app.v1alpha1.ModuleConfig.deserializeBinaryFromReader);
      msg.addModules(value);
      break;
    case 2:
      var value = new proto.cosmos.app.v1alpha1.GolangBinding;
      reader.readMessage(value,proto.cosmos.app.v1alpha1.GolangBinding.deserializeBinaryFromReader);
      msg.addGolangBindings(value);
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
proto.cosmos.app.v1alpha1.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.app.v1alpha1.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.app.v1alpha1.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.app.v1alpha1.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cosmos.app.v1alpha1.ModuleConfig.serializeBinaryToWriter
    );
  }
  f = message.getGolangBindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cosmos.app.v1alpha1.GolangBinding.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModuleConfig modules = 1;
 * @return {!Array<!proto.cosmos.app.v1alpha1.ModuleConfig>}
 */
proto.cosmos.app.v1alpha1.Config.prototype.getModulesList = function() {
  return /** @type{!Array<!proto.cosmos.app.v1alpha1.ModuleConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.app.v1alpha1.ModuleConfig, 1));
};


/**
 * @param {!Array<!proto.cosmos.app.v1alpha1.ModuleConfig>} value
 * @return {!proto.cosmos.app.v1alpha1.Config} returns this
*/
proto.cosmos.app.v1alpha1.Config.prototype.setModulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.app.v1alpha1.ModuleConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.app.v1alpha1.ModuleConfig}
 */
proto.cosmos.app.v1alpha1.Config.prototype.addModules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.app.v1alpha1.ModuleConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.app.v1alpha1.Config} returns this
 */
proto.cosmos.app.v1alpha1.Config.prototype.clearModulesList = function() {
  return this.setModulesList([]);
};


/**
 * repeated GolangBinding golang_bindings = 2;
 * @return {!Array<!proto.cosmos.app.v1alpha1.GolangBinding>}
 */
proto.cosmos.app.v1alpha1.Config.prototype.getGolangBindingsList = function() {
  return /** @type{!Array<!proto.cosmos.app.v1alpha1.GolangBinding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.app.v1alpha1.GolangBinding, 2));
};


/**
 * @param {!Array<!proto.cosmos.app.v1alpha1.GolangBinding>} value
 * @return {!proto.cosmos.app.v1alpha1.Config} returns this
*/
proto.cosmos.app.v1alpha1.Config.prototype.setGolangBindingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cosmos.app.v1alpha1.GolangBinding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.app.v1alpha1.GolangBinding}
 */
proto.cosmos.app.v1alpha1.Config.prototype.addGolangBindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.app.v1alpha1.GolangBinding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.app.v1alpha1.Config} returns this
 */
proto.cosmos.app.v1alpha1.Config.prototype.clearGolangBindingsList = function() {
  return this.setGolangBindingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.app.v1alpha1.ModuleConfig.repeatedFields_ = [3];



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
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.app.v1alpha1.ModuleConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.app.v1alpha1.ModuleConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.app.v1alpha1.ModuleConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    golangBindingsList: jspb.Message.toObjectList(msg.getGolangBindingsList(),
    proto.cosmos.app.v1alpha1.GolangBinding.toObject, includeInstance)
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
 * @return {!proto.cosmos.app.v1alpha1.ModuleConfig}
 */
proto.cosmos.app.v1alpha1.ModuleConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.app.v1alpha1.ModuleConfig;
  return proto.cosmos.app.v1alpha1.ModuleConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.app.v1alpha1.ModuleConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.app.v1alpha1.ModuleConfig}
 */
proto.cosmos.app.v1alpha1.ModuleConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new proto.cosmos.app.v1alpha1.GolangBinding;
      reader.readMessage(value,proto.cosmos.app.v1alpha1.GolangBinding.deserializeBinaryFromReader);
      msg.addGolangBindings(value);
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
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.app.v1alpha1.ModuleConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.app.v1alpha1.ModuleConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.app.v1alpha1.ModuleConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getGolangBindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cosmos.app.v1alpha1.GolangBinding.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.app.v1alpha1.ModuleConfig} returns this
 */
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Any config = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.cosmos.app.v1alpha1.ModuleConfig} returns this
*/
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.app.v1alpha1.ModuleConfig} returns this
 */
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated GolangBinding golang_bindings = 3;
 * @return {!Array<!proto.cosmos.app.v1alpha1.GolangBinding>}
 */
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.getGolangBindingsList = function() {
  return /** @type{!Array<!proto.cosmos.app.v1alpha1.GolangBinding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.app.v1alpha1.GolangBinding, 3));
};


/**
 * @param {!Array<!proto.cosmos.app.v1alpha1.GolangBinding>} value
 * @return {!proto.cosmos.app.v1alpha1.ModuleConfig} returns this
*/
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.setGolangBindingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cosmos.app.v1alpha1.GolangBinding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.app.v1alpha1.GolangBinding}
 */
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.addGolangBindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.app.v1alpha1.GolangBinding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.app.v1alpha1.ModuleConfig} returns this
 */
proto.cosmos.app.v1alpha1.ModuleConfig.prototype.clearGolangBindingsList = function() {
  return this.setGolangBindingsList([]);
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
proto.cosmos.app.v1alpha1.GolangBinding.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.app.v1alpha1.GolangBinding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.app.v1alpha1.GolangBinding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.app.v1alpha1.GolangBinding.toObject = function(includeInstance, msg) {
  var f, obj = {
    interfaceType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    implementation: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.app.v1alpha1.GolangBinding}
 */
proto.cosmos.app.v1alpha1.GolangBinding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.app.v1alpha1.GolangBinding;
  return proto.cosmos.app.v1alpha1.GolangBinding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.app.v1alpha1.GolangBinding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.app.v1alpha1.GolangBinding}
 */
proto.cosmos.app.v1alpha1.GolangBinding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInterfaceType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImplementation(value);
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
proto.cosmos.app.v1alpha1.GolangBinding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.app.v1alpha1.GolangBinding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.app.v1alpha1.GolangBinding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.app.v1alpha1.GolangBinding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInterfaceType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImplementation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string interface_type = 1;
 * @return {string}
 */
proto.cosmos.app.v1alpha1.GolangBinding.prototype.getInterfaceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.app.v1alpha1.GolangBinding} returns this
 */
proto.cosmos.app.v1alpha1.GolangBinding.prototype.setInterfaceType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string implementation = 2;
 * @return {string}
 */
proto.cosmos.app.v1alpha1.GolangBinding.prototype.getImplementation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.app.v1alpha1.GolangBinding} returns this
 */
proto.cosmos.app.v1alpha1.GolangBinding.prototype.setImplementation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.cosmos.app.v1alpha1);
