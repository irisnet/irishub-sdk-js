"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bech32Prefix_Akash = exports.Bech32Prefix_Cosmos = exports.Bech32Prefix_Iris = exports.MIN_UNIT_SUFFIX = exports.IRIS_ATTO = exports.STD_DENOM = exports.keystoreStructure = exports.xchacha20NonceLength = exports.keystoreSaltPerfix = exports.doNotModify = exports.RpcMethods = exports.ChainNetwork = exports.Network = void 0;

/** Network type config */
var Network;
exports.Network = Network;

(function (Network) {
  Network[Network["Mainnet"] = 0] = "Mainnet";
  Network[Network["Testnet"] = 1] = "Testnet";
})(Network || (exports.Network = Network = {}));

var ChainNetwork;
exports.ChainNetwork = ChainNetwork;

(function (ChainNetwork) {
  ChainNetwork[ChainNetwork["Iris"] = 0] = "Iris";
  ChainNetwork[ChainNetwork["Cosmos"] = 1] = "Cosmos";
  ChainNetwork[ChainNetwork["Akash"] = 2] = "Akash";
})(ChainNetwork || (exports.ChainNetwork = ChainNetwork = {}));

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
  RpcMethods["NetInfo"] = "net_info";
})(RpcMethods || (exports.RpcMethods = RpcMethods = {}));

var doNotModify = '[do-not-modify]';
exports.doNotModify = doNotModify;
var keystoreSaltPerfix = '$2a$12$';
exports.keystoreSaltPerfix = keystoreSaltPerfix;
var xchacha20NonceLength = 24;
exports.xchacha20NonceLength = xchacha20NonceLength;
var keystoreStructure = {
  prefix: '-----BEGIN TENDERMINT PRIVATE KEY-----',
  suffix: '-----END TENDERMINT PRIVATE KEY-----'
};
exports.keystoreStructure = keystoreStructure;
var STD_DENOM = 'tiris',
    IRIS_ATTO = 'iris-atto',
    MIN_UNIT_SUFFIX = '-min';
exports.MIN_UNIT_SUFFIX = MIN_UNIT_SUFFIX;
exports.IRIS_ATTO = IRIS_ATTO;
exports.STD_DENOM = STD_DENOM;
var Bech32Prefix_Iris = {
  AccAddr: 'iaa',
  AccPub: 'iap',
  ValAddr: 'iva',
  ValPub: 'ivp',
  ConsAddr: 'ica',
  ConsPub: 'icp'
};
exports.Bech32Prefix_Iris = Bech32Prefix_Iris;
var Bech32Prefix_Cosmos = {
  AccAddr: 'cosmos',
  AccPub: 'cosmospub',
  ValAddr: 'cosmosvaloper',
  ValPub: 'cosmosvaloperpub',
  ConsAddr: 'cosmosvalcons',
  ConsPub: 'cosmosvalconspub'
};
exports.Bech32Prefix_Cosmos = Bech32Prefix_Cosmos;
var Bech32Prefix_Akash = {
  AccAddr: 'akash',
  AccPub: 'akashpub',
  ValAddr: 'akashvaloper',
  ValPub: 'akashvaloperpub',
  ConsAddr: 'akashvalcons',
  ConsPub: 'akashvalconspub'
};
exports.Bech32Prefix_Akash = Bech32Prefix_Akash;