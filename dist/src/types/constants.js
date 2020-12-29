"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIN_UNIT_SUFFIX = exports.IRIS_ATTO = exports.STD_DENOM = exports.doNotModify = exports.RpcMethods = exports.Network = void 0;
/** Network type config */
var Network;
(function (Network) {
    Network[Network["Mainnet"] = 0] = "Mainnet";
    Network[Network["Testnet"] = 1] = "Testnet";
})(Network = exports.Network || (exports.Network = {}));
var RpcMethods;
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
    RpcMethods["NetInfo"] = "net_info";
})(RpcMethods = exports.RpcMethods || (exports.RpcMethods = {}));
exports.doNotModify = '[do-not-modify]';
exports.STD_DENOM = 'tiris', exports.IRIS_ATTO = 'iris-atto', exports.MIN_UNIT_SUFFIX = '-min';
//# sourceMappingURL=constants.js.map