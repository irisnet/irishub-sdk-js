import BigNumber from 'bignumber.js'

export const _0 = new BigNumber('0');
export const _1 = new BigNumber('1');
export const _MAX_UINT256 = new BigNumber(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
);

export const defaultOpts = {
    network: "mainnet",
    chain_id: "irishub",
    chain: "iris",
    timeout: 2000,
    fee: {denom: "iris-atto", amount: 600000000000000000},
    gas: 30000,
    mode: "sync",
    simulate: false
};
export const defaultServer = "https://rpc.irisnet.org/";
export const rpcMethods = [
    "subscribe",
    "unsubscribe",
    "unsubscribe_all",
    "status",
    "net_info",
    "blockchain",
    "genesis",
    "health",
    "block",
    "block_results",
    "validators",
    "consensus_state",
    "dump_consensus_state",
    "broadcast_tx_commit",
    "broadcast_tx_sync",
    "broadcast_tx_async",
    "unconfirmed_txs",
    "num_unconfirmed_txs",
    "commit",
    "tx",
    "tx_search",
    "abci_query",
    "abci_info"
];