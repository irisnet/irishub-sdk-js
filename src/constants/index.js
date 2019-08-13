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

export const EventType = {};
EventType.NewBlock = "NewBlock";
EventType.NewBlockHeader = "NewBlockHeader";
EventType.Tx = "Tx";
EventType.ValidatorSetUpdates = "ValidatorSetUpdates";
EventType.CompleteProposal = "CompleteProposal";
EventType.Lock = "Lock";
EventType.NewRound = "NewRound";
EventType.NewRoundStep = "NewRoundStep";
EventType.Polka = "Polka";
EventType.Relock = "Relock";
EventType.TimeoutPropose = "TimeoutPropose";
EventType.TimeoutWait = "TimeoutWait";
EventType.Unlock = "Unlock";
EventType.ValidBlock = "ValidBlock";
EventType.Vote = "Vote";

export const Method = {};
Method.GetAccount = "getAccount";
Method.GetCoinType = "getCoinType";
Method.GetTokenStats = "getTokenStats";

Method.GetWithdrawAddr = "getWithdrawAddr";
Method.QueryRewards = "queryRewards";
Method.GetCommunityTax = "getCommunityTax";

Method.GetProposals = "getProposals";
Method.GetProposal = "getProposal";
Method.GetDeposits = "getDeposits";
Method.GetDeposit = "getDeposit";
Method.GetVotes = "getVotes";
Method.GetVote = "getVote";
Method.GetParams = "getParams";
Method.GetSigningInfo = "getSigningInfo";

Method.GetValidators = "getValidators";
Method.GetValidator = "getValidator";
Method.GetDelegations = "getDelegations";
Method.GetDelegationsByValidator = "getDelegationsByValidator";
Method.GetUbDelegations = "getUbDelegations";
Method.GetUbDelegationsByValidator = "getUbDelegationsByValidator";
Method.GetReDelegations = "getReDelegations";
Method.GetReDelegationsByValidator = "getReDelegationsByValidator";
Method.GetAllValidatorsByDelegator = "getAllValidatorsByDelegator";
Method.GetValidatorByDelegator = "getValidatorByDelegator";
Method.GetDelegation = "getDelegation";
Method.GetUbDelegation = "getUbDelegation";
Method.GetStakePool = "getStakePool";

Method.GetNodeInfo = "getNodeInfo";
Method.GetSyncing = "getSyncing";
Method.GetBlock = "getBlock";
Method.GetBlockResult = "getBlockResult";
Method.GetValidatorSet = "getValidatorSet";
Method.GetTx = "getTx";
Method.Broadcast = "broadcast";

Method.GetReservePool = "getReservePool";

Method.GetLcdVersion = "getLcdVersion";
Method.GetNodeVersion = "getNodeVersion";