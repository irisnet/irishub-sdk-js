// source: cosmos/bank/module/v1/module.proto
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

var cosmos_app_v1alpha1_module_pb = require('../../../../cosmos/app/v1alpha1/module_pb.js');
goog.object.extend(proto, cosmos_app_v1alpha1_module_pb);
goog.exportSymbol('proto.cosmos.bank.module.v1.Module', null, global);
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
proto.cosmos.bank.module.v1.Module = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.bank.module.v1.Module.repeatedFields_, null);
};
goog.inherits(proto.cosmos.bank.module.v1.Module, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.bank.module.v1.Module.displayName = 'proto.cosmos.bank.module.v1.Module';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.bank.module.v1.Module.repeatedFields_ = [1];



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
proto.cosmos.bank.module.v1.Module.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.bank.module.v1.Module.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.bank.module.v1.Module} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.module.v1.Module.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockedModuleAccountsOverrideList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    authority: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.bank.module.v1.Module}
 */
proto.cosmos.bank.module.v1.Module.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.bank.module.v1.Module;
  return proto.cosmos.bank.module.v1.Module.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.bank.module.v1.Module} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.bank.module.v1.Module}
 */
proto.cosmos.bank.module.v1.Module.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBlockedModuleAccountsOverride(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthority(value);
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
proto.cosmos.bank.module.v1.Module.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.bank.module.v1.Module.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.bank.module.v1.Module} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.bank.module.v1.Module.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockedModuleAccountsOverrideList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAuthority();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string blocked_module_accounts_override = 1;
 * @return {!Array<string>}
 */
proto.cosmos.bank.module.v1.Module.prototype.getBlockedModuleAccountsOverrideList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.cosmos.bank.module.v1.Module} returns this
 */
proto.cosmos.bank.module.v1.Module.prototype.setBlockedModuleAccountsOverrideList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.cosmos.bank.module.v1.Module} returns this
 */
proto.cosmos.bank.module.v1.Module.prototype.addBlockedModuleAccountsOverride = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.bank.module.v1.Module} returns this
 */
proto.cosmos.bank.module.v1.Module.prototype.clearBlockedModuleAccountsOverrideList = function() {
  return this.setBlockedModuleAccountsOverrideList([]);
};


/**
 * optional string authority = 2;
 * @return {string}
 */
proto.cosmos.bank.module.v1.Module.prototype.getAuthority = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.bank.module.v1.Module} returns this
 */
proto.cosmos.bank.module.v1.Module.prototype.setAuthority = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.cosmos.bank.module.v1);
