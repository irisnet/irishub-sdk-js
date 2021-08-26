/** Network type config */
export var Network;
(function (Network) {
    Network[Network["Mainnet"] = 0] = "Mainnet";
    Network[Network["Testnet"] = 1] = "Testnet";
})(Network || (Network = {}));
export var ChainNetwork;
(function (ChainNetwork) {
    ChainNetwork[ChainNetwork["Iris"] = 0] = "Iris";
    ChainNetwork[ChainNetwork["Cosmos"] = 1] = "Cosmos";
    ChainNetwork[ChainNetwork["Akash"] = 2] = "Akash";
})(ChainNetwork || (ChainNetwork = {}));
export var RpcMethods;
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
})(RpcMethods || (RpcMethods = {}));
export const doNotModify = '[do-not-modify]';
export const keystoreSaltPerfix = '$2a$12$';
export const xchacha20NonceLength = 24;
export const keystoreStructure = {
    prefix: '-----BEGIN TENDERMINT PRIVATE KEY-----',
    suffix: '-----END TENDERMINT PRIVATE KEY-----'
};
export const STD_DENOM = 'tiris', IRIS_ATTO = 'iris-atto', MIN_UNIT_SUFFIX = '-min';
export const Bech32Prefix_Iris = {
    AccAddr: 'iaa',
    AccPub: 'iap',
    ValAddr: 'iva',
    ValPub: 'ivp',
    ConsAddr: 'ica',
    ConsPub: 'icp',
};
export const Bech32Prefix_Cosmos = {
    AccAddr: 'cosmos',
    AccPub: 'cosmospub',
    ValAddr: 'cosmosvaloper',
    ValPub: 'cosmosvaloperpub',
    ConsAddr: 'cosmosvalcons',
    ConsPub: 'cosmosvalconspub',
};
export const Bech32Prefix_Akash = {
    AccAddr: 'akash',
    AccPub: 'akashpub',
    ValAddr: 'akashvaloper',
    ValPub: 'akashvaloperpub',
    ConsAddr: 'akashvalcons',
    ConsPub: 'akashvalconspub',
};
//# sourceMappingURL=constants.js.map