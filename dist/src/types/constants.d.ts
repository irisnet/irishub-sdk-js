/** Network type config */
export declare enum Network {
    Mainnet = 0,
    Testnet = 1
}
export declare enum RpcMethods {
    BroadcastTxSync = "broadcast_tx_sync",
    BroadcastTxAsync = "broadcast_tx_async",
    BroadcastTxCommit = "broadcast_tx_commit",
    AbciQuery = "abci_query",
    Subscribe = "subscribe",
    Unsubscribe = "unsubscribe",
    UnsubscribeAll = "unsubscribe_all",
    Health = "health",
    Block = "block",
    BlockResults = "block_results",
    Tx = "tx",
    TxSearch = "tx_search",
    Validators = "validators"
}
export declare const doNotModify = "[do-not-modify]";
export declare const STD_DENOM = "tiris", IRIS_ATTO = "iris-atto", MIN_UNIT_SUFFIX = "-min";
