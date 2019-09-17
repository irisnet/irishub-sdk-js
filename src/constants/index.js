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
export const createEvent = (type, ...param) => {
    let args = new Array();
    args.push(`tm.event='${type}'`);
    args = [...args, ...param];
    return {query: args.join(" AND ")}
};

export const EventType = {
    NewBlock:               "NewBlock",
    NewBlockHeader:         "NewBlockHeader",
    Tx:                     "Tx",
    ValidatorSetUpdates:    "ValidatorSetUpdates",
    CompleteProposal:       "CompleteProposal",
    Lock:                   "Lock",
    NewRound:               "NewRound",
    NewRoundStep:           "NewRoundStep",
    Polka:                  "Polka",
    Relock:                 "Relock",
    TimeoutPropose:         "TimeoutPropose",
    TimeoutWait:            "TimeoutWait",
    Unlock:                 "Unlock",
    ValidBlock:             "ValidBlock",
    Vote:                   "Vote"
};

export const Method = {
    GetAccount:                         "getAccount",
    GetCoinType:                        "getCoinType",
    GetTokenStats:                      "getTokenStats",
    GetWithdrawAddr:                    "getWithdrawAddr",
    QueryRewards:                       "queryRewards",
    GetCommunityTax:                    "getCommunityTax",
    GetProposals:                       "getProposals",
    GetProposal:                        "getProposal",
    GetDeposits:                        "getDeposits",
    GetVotes:                           "getVotes",
    GetVote:                            "getVote",
    GetParams:                          "getParams",
    GetSigningInfo:                     "getSigningInfo",
    GetValidators:                      "getValidators",
    GetValidator:                       "getValidator",
    GetDelegations:                     "getDelegations",
    GetDelegationsByValidator:          "getDelegationsByValidator",
    GetUbDelegations:                   "getUbDelegations",
    GetUbDelegationsByValidator:        "getUbDelegationsByValidator",
    GetReDelegations:                   "getReDelegations",
    GetReDelegationsByValidator:        "getReDelegationsByValidator",
    GetAllValidatorsByDelegator:        "getAllValidatorsByDelegator",
    GetValidatorByDelegator:            "getValidatorByDelegator",
    GetDelegation:                      "getDelegation",
    GetUbDelegation:                    "getUbDelegation",
    GetStakePool:                       "getStakePool",
    GetNodeInfo:                        "getNodeInfo",
    GetSyncing:                         "getSyncing",
    GetBlock:                           "getBlock",
    GetBlockResult:                     "getBlockResult",
    GetValidatorSet:                    "getValidatorSet",
    GetTx:                              "getTx",
    Broadcast:                          "broadcast",
    GetReservePool:                     "getReservePool",
    GetLcdVersion:                      "getLcdVersion",
    GetNodeVersion:                     "getNodeVersion",
};
