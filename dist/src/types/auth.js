"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Broadcast Mode
 * - Sync: Broadcast transactions synchronously and wait for the recipient node to validate the txs
 * - Async: Broadcast transactions asynchronously and returns immediately
 * - Commit: Broadcast transactions and wait until the transactions are included by a block
 */
var BroadcastMode;
(function (BroadcastMode) {
    BroadcastMode[BroadcastMode["Sync"] = 0] = "Sync";
    BroadcastMode[BroadcastMode["Async"] = 1] = "Async";
    BroadcastMode[BroadcastMode["Commit"] = 2] = "Commit";
})(BroadcastMode = exports.BroadcastMode || (exports.BroadcastMode = {}));
//# sourceMappingURL=auth.js.map