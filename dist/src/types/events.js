"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventTypes = void 0;
var EventTypes;
/**
 * Returns by subscriptions, for clients to unscribe the specified events
 */

exports.EventTypes = EventTypes;

(function (EventTypes) {
  EventTypes["NewBlock"] = "NewBlock";
  EventTypes["NewBlockHeader"] = "NewBlockHeader";
  EventTypes["ValidatorSetUpdates"] = "ValidatorSetUpdates";
  EventTypes["Tx"] = "Tx";
})(EventTypes || (exports.EventTypes = EventTypes = {}));