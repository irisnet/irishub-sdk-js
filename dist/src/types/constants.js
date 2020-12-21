"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MIN_UNIT_SUFFIX = exports.IRIS_ATTO = exports.STD_DENOM = exports.doNotModify = exports.RpcMethods = exports.Network = void 0;

/** Network type config */
var Network;
exports.Network = Network;

(function (Network) {
  Network[Network["Mainnet"] = 0] = "Mainnet";
  Network[Network["Testnet"] = 1] = "Testnet";
})(Network || (exports.Network = Network = {}));

var RpcMethods;
exports.RpcMethods = RpcMethods;

(function (RpcMethods) {
  RpcMethods["BroadcastTxSync"] = "broadcast_tx_sync";
  RpcMethods["BroadcastTxAsync"] = "broadcast_tx_async";
  RpcMethods["BroadcastTxCommit"] = "broadcast_tx_commit";
  RpcMethods["AbciQuery"] = "abci_query";
  RpcMethods["Subscribe"] = "subscribe";
  RpcMethods["Unsubscribe"] = "unsubscribe";
  RpcMethods["UnsubscribeAll"] = "unsubscribe_all";
  RpcMethods["Health"] = "health";
  RpcMethods["Block"] = "block";
  RpcMethods["BlockResults"] = "block_results";
  RpcMethods["Tx"] = "tx";
  RpcMethods["TxSearch"] = "tx_search";
  RpcMethods["Validators"] = "validators";
})(RpcMethods || (exports.RpcMethods = RpcMethods = {}));

var doNotModify = '[do-not-modify]';
exports.doNotModify = doNotModify;
var STD_DENOM = 'tiris',
    IRIS_ATTO = 'iris-atto',
    MIN_UNIT_SUFFIX = '-min';
exports.MIN_UNIT_SUFFIX = MIN_UNIT_SUFFIX;
exports.IRIS_ATTO = IRIS_ATTO;
exports.STD_DENOM = STD_DENOM;