"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventTypes = void 0;
var EventTypes = exports.EventTypes = /*#__PURE__*/function (EventTypes) {
  EventTypes["NewBlock"] = "NewBlock";
  EventTypes["NewBlockHeader"] = "NewBlockHeader";
  EventTypes["ValidatorSetUpdates"] = "ValidatorSetUpdates";
  EventTypes["Tx"] = "Tx";
  return EventTypes;
}({});
/**
 * Returns by subscriptions, for clients to unscribe the specified events
 */