// source: ibc/core/connection/v1/genesis.proto
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

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var ibc_core_connection_v1_connection_pb = require('../../../../ibc/core/connection/v1/connection_pb.js');
goog.object.extend(proto, ibc_core_connection_v1_connection_pb);
goog.exportSymbol('proto.ibc.core.connection.v1.GenesisState', null, global);
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
proto.ibc.core.connection.v1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ibc.core.connection.v1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.ibc.core.connection.v1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.core.connection.v1.GenesisState.displayName = 'proto.ibc.core.connection.v1.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ibc.core.connection.v1.GenesisState.repeatedFields_ = [1,2];



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
proto.ibc.core.connection.v1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.core.connection.v1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.core.connection.v1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.core.connection.v1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionsList: jspb.Message.toObjectList(msg.getConnectionsList(),
    ibc_core_connection_v1_connection_pb.IdentifiedConnection.toObject, includeInstance),
    clientConnectionPathsList: jspb.Message.toObjectList(msg.getClientConnectionPathsList(),
    ibc_core_connection_v1_connection_pb.ConnectionPaths.toObject, includeInstance),
    nextConnectionSequence: jspb.Message.getFieldWithDefault(msg, 3, 0),
    params: (f = msg.getParams()) && ibc_core_connection_v1_connection_pb.Params.toObject(includeInstance, f)
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
 * @return {!proto.ibc.core.connection.v1.GenesisState}
 */
proto.ibc.core.connection.v1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.core.connection.v1.GenesisState;
  return proto.ibc.core.connection.v1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.core.connection.v1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.core.connection.v1.GenesisState}
 */
proto.ibc.core.connection.v1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ibc_core_connection_v1_connection_pb.IdentifiedConnection;
      reader.readMessage(value,ibc_core_connection_v1_connection_pb.IdentifiedConnection.deserializeBinaryFromReader);
      msg.addConnections(value);
      break;
    case 2:
      var value = new ibc_core_connection_v1_connection_pb.ConnectionPaths;
      reader.readMessage(value,ibc_core_connection_v1_connection_pb.ConnectionPaths.deserializeBinaryFromReader);
      msg.addClientConnectionPaths(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNextConnectionSequence(value);
      break;
    case 4:
      var value = new ibc_core_connection_v1_connection_pb.Params;
      reader.readMessage(value,ibc_core_connection_v1_connection_pb.Params.deserializeBinaryFromReader);
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
proto.ibc.core.connection.v1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.core.connection.v1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.core.connection.v1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.core.connection.v1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      ibc_core_connection_v1_connection_pb.IdentifiedConnection.serializeBinaryToWriter
    );
  }
  f = message.getClientConnectionPathsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      ibc_core_connection_v1_connection_pb.ConnectionPaths.serializeBinaryToWriter
    );
  }
  f = message.getNextConnectionSequence();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ibc_core_connection_v1_connection_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IdentifiedConnection connections = 1;
 * @return {!Array<!proto.ibc.core.connection.v1.IdentifiedConnection>}
 */
proto.ibc.core.connection.v1.GenesisState.prototype.getConnectionsList = function() {
  return /** @type{!Array<!proto.ibc.core.connection.v1.IdentifiedConnection>} */ (
    jspb.Message.getRepeatedWrapperField(this, ibc_core_connection_v1_connection_pb.IdentifiedConnection, 1));
};


/**
 * @param {!Array<!proto.ibc.core.connection.v1.IdentifiedConnection>} value
 * @return {!proto.ibc.core.connection.v1.GenesisState} returns this
*/
proto.ibc.core.connection.v1.GenesisState.prototype.setConnectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ibc.core.connection.v1.IdentifiedConnection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.core.connection.v1.IdentifiedConnection}
 */
proto.ibc.core.connection.v1.GenesisState.prototype.addConnections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ibc.core.connection.v1.IdentifiedConnection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.core.connection.v1.GenesisState} returns this
 */
proto.ibc.core.connection.v1.GenesisState.prototype.clearConnectionsList = function() {
  return this.setConnectionsList([]);
};


/**
 * repeated ConnectionPaths client_connection_paths = 2;
 * @return {!Array<!proto.ibc.core.connection.v1.ConnectionPaths>}
 */
proto.ibc.core.connection.v1.GenesisState.prototype.getClientConnectionPathsList = function() {
  return /** @type{!Array<!proto.ibc.core.connection.v1.ConnectionPaths>} */ (
    jspb.Message.getRepeatedWrapperField(this, ibc_core_connection_v1_connection_pb.ConnectionPaths, 2));
};


/**
 * @param {!Array<!proto.ibc.core.connection.v1.ConnectionPaths>} value
 * @return {!proto.ibc.core.connection.v1.GenesisState} returns this
*/
proto.ibc.core.connection.v1.GenesisState.prototype.setClientConnectionPathsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ibc.core.connection.v1.ConnectionPaths=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ibc.core.connection.v1.ConnectionPaths}
 */
proto.ibc.core.connection.v1.GenesisState.prototype.addClientConnectionPaths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ibc.core.connection.v1.ConnectionPaths, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.core.connection.v1.GenesisState} returns this
 */
proto.ibc.core.connection.v1.GenesisState.prototype.clearClientConnectionPathsList = function() {
  return this.setClientConnectionPathsList([]);
};


/**
 * optional uint64 next_connection_sequence = 3;
 * @return {number}
 */
proto.ibc.core.connection.v1.GenesisState.prototype.getNextConnectionSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ibc.core.connection.v1.GenesisState} returns this
 */
proto.ibc.core.connection.v1.GenesisState.prototype.setNextConnectionSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Params params = 4;
 * @return {?proto.ibc.core.connection.v1.Params}
 */
proto.ibc.core.connection.v1.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.ibc.core.connection.v1.Params} */ (
    jspb.Message.getWrapperField(this, ibc_core_connection_v1_connection_pb.Params, 4));
};


/**
 * @param {?proto.ibc.core.connection.v1.Params|undefined} value
 * @return {!proto.ibc.core.connection.v1.GenesisState} returns this
*/
proto.ibc.core.connection.v1.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ibc.core.connection.v1.GenesisState} returns this
 */
proto.ibc.core.connection.v1.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ibc.core.connection.v1.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.ibc.core.connection.v1);
