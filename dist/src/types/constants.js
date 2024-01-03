"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xchacha20NonceLength = exports.keystoreStructure = exports.keystoreSaltPerfix = exports.doNotModify = exports.STD_DENOM = exports.RpcMethods = exports.MIN_UNIT_SUFFIX = exports.IRIS_ATTO = exports.ChainNetwork = exports.Bech32Prefix_Iris = exports.Bech32Prefix_Cosmos = exports.Bech32Prefix_Akash = void 0;
var ChainNetwork = exports.ChainNetwork = /*#__PURE__*/function (ChainNetwork) {
  ChainNetwork[ChainNetwork["Iris"] = 0] = "Iris";
  ChainNetwork[ChainNetwork["Cosmos"] = 1] = "Cosmos";
  ChainNetwork[ChainNetwork["Akash"] = 2] = "Akash";
  return ChainNetwork;
}({});
var RpcMethods = exports.RpcMethods = /*#__PURE__*/function (RpcMethods) {
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
  return RpcMethods;
}({});
var doNotModify = exports.doNotModify = '[do-not-modify]';
var keystoreSaltPerfix = exports.keystoreSaltPerfix = '$2a$12$';
var xchacha20NonceLength = exports.xchacha20NonceLength = 24;
var keystoreStructure = exports.keystoreStructure = {
  prefix: '-----BEGIN TENDERMINT PRIVATE KEY-----',
  suffix: '-----END TENDERMINT PRIVATE KEY-----'
};
var STD_DENOM = exports.STD_DENOM = 'tiris',
  IRIS_ATTO = exports.IRIS_ATTO = 'iris-atto',
  MIN_UNIT_SUFFIX = exports.MIN_UNIT_SUFFIX = '-min';
var Bech32Prefix_Iris = exports.Bech32Prefix_Iris = {
  AccAddr: 'iaa',
  AccPub: 'iap',
  ValAddr: 'iva',
  ValPub: 'ivp',
  ConsAddr: 'ica',
  ConsPub: 'icp'
};
var Bech32Prefix_Cosmos = exports.Bech32Prefix_Cosmos = {
  AccAddr: 'cosmos',
  AccPub: 'cosmospub',
  ValAddr: 'cosmosvaloper',
  ValPub: 'cosmosvaloperpub',
  ConsAddr: 'cosmosvalcons',
  ConsPub: 'cosmosvalconspub'
};
var Bech32Prefix_Akash = exports.Bech32Prefix_Akash = {
  AccAddr: 'akash',
  AccPub: 'akashpub',
  ValAddr: 'akashvaloper',
  ValPub: 'akashvaloperpub',
  ConsAddr: 'akashvalcons',
  ConsPub: 'akashvalconspub'
};