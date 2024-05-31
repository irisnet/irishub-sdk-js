// source: cosmos/crypto/multisig/keys.proto
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
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var amino_amino_pb = require('../../../amino/amino_pb.js');
goog.object.extend(proto, amino_amino_pb);
goog.exportSymbol('proto.cosmos.crypto.multisig.LegacyAminoPubKey', null, global);
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
proto.cosmos.crypto.multisig.LegacyAminoPubKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.crypto.multisig.LegacyAminoPubKey.repeatedFields_, null);
};
goog.inherits(proto.cosmos.crypto.multisig.LegacyAminoPubKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crypto.multisig.LegacyAminoPubKey.displayName = 'proto.cosmos.crypto.multisig.LegacyAminoPubKey';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.repeatedFields_ = [2];



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
proto.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crypto.multisig.LegacyAminoPubKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crypto.multisig.LegacyAminoPubKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    threshold: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publicKeysList: jspb.Message.toObjectList(msg.getPublicKeysList(),
    google_protobuf_any_pb.Any.toObject, includeInstance)
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
 * @return {!proto.cosmos.crypto.multisig.LegacyAminoPubKey}
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crypto.multisig.LegacyAminoPubKey;
  return proto.cosmos.crypto.multisig.LegacyAminoPubKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crypto.multisig.LegacyAminoPubKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crypto.multisig.LegacyAminoPubKey}
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setThreshold(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addPublicKeys(value);
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
proto.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crypto.multisig.LegacyAminoPubKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crypto.multisig.LegacyAminoPubKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPublicKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 threshold = 1;
 * @return {number}
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.crypto.multisig.LegacyAminoPubKey} returns this
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.setThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated google.protobuf.Any public_keys = 2;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.getPublicKeysList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.cosmos.crypto.multisig.LegacyAminoPubKey} returns this
*/
proto.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.setPublicKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.addPublicKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.crypto.multisig.LegacyAminoPubKey} returns this
 */
proto.cosmos.crypto.multisig.LegacyAminoPubKey.prototype.clearPublicKeysList = function() {
  return this.setPublicKeysList([]);
};


goog.object.extend(exports, proto.cosmos.crypto.multisig);
