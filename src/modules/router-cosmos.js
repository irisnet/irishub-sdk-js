import {isEmpty, parseUrl} from "../utils"
import {Method} from "../constants";

let subRouter = new Map();
subRouter.set(Method.GetAccount, (args) => {
    return parseUrl("/auth/accounts/%s", ...args)
});
subRouter.set(Method.GetCoinType, (args) => {
    throw new Error("cosmos don't support the api[getCoinType]")
});

subRouter.set(Method.GetTokenStats, (args) => {
    throw new Error("cosmos don't support the api[getTokenStats]")
});

//distribution
subRouter.set(Method.GetWithdrawAddr, (args) => {
    return parseUrl("/distribution/delegators/%s/withdraw_address", ...args)
});
subRouter.set(Method.QueryRewards, (args) => {
    return parseUrl("/distribution/delegators/%s/rewards", ...args)
});
subRouter.set(Method.GetCommunityTax, (args) => {
    throw new Error("cosmos don't support the api")
});

//gov
subRouter.set(Method.GetProposals, (args) => {
    let param = new Array();
    if (!isEmpty(args[0])) {
        param.push(`voter=${args[0]}`);
    }
    if (!isEmpty(args[1])) {
        param.push(`depositor=${args[1]}`);
    }
    if (!isEmpty(args[2])) {
        param.push(`status=${args[2]}`);
    }
    if (!isEmpty(args[3])) {
        param.push(`limit=${args[3]}`);
    }

    let queryString = param.join("&");
    return `/gov/proposals?${queryString}`;
});
subRouter.set(Method.GetProposal, (args) => {
    return parseUrl("/gov/proposals/%s", ...args)
});
subRouter.set(Method.GetDeposits, (args) => {
    return parseUrl("/gov/proposals/%s/deposits", ...args)
});
subRouter.set(Method.GetDeposit, (args) => {
    return parseUrl("/gov/proposals/%s/deposits/%s", ...args)
});
subRouter.set(Method.GetVotes, (args) => {
    return parseUrl("/gov/proposals/%s/votes", ...args)
});
subRouter.set(Method.GetVote, (args) => {
    return parseUrl("/gov/proposals/%s/votes/%s", ...args)
});
subRouter.set(Method.GetParams, (args) => {
    throw new Error("cosmos don't support the api")
});

//slashing
subRouter.set(Method.GetSigningInfo, (args) => {
    return parseUrl("/slashing/validators/%s/signing_info", ...args)
});

//stake
subRouter.set(Method.GetValidators, (args) => {
    return "/staking/validators"
});
subRouter.set(Method.GetValidator, (args) => {
    return parseUrl("/staking/validators/%s", ...args)
});
subRouter.set(Method.GetDelegations, (args) => {
    return parseUrl("/staking/delegators/%s/delegations", ...args)
});
subRouter.set(Method.GetDelegationsByValidator, (args) => {
    return parseUrl("/staking/validators/%s/delegations", ...args)
});
subRouter.set(Method.GetUbDelegations, (args) => {
    return parseUrl("/staking/delegators/%s/unbonding_delegations", ...args)
});
subRouter.set(Method.GetUbDelegationsByValidator, (args) => {
    return parseUrl("/staking/validators/%s/unbonding-delegations", ...args)
});
subRouter.set(Method.GetReDelegations, (args) => {
    throw new Error("cosmos don't support the api[getReDelegations]")
});
subRouter.set(Method.GetReDelegationsByValidator, (args) => {
    throw new Error("cosmos don't support the api[getReDelegationsByValidator]")
});
subRouter.set(Method.GetAllValidatorsByDelegator, (args) => {
    return parseUrl("/staking/delegators/%s/validators", ...args)
});
subRouter.set(Method.GetValidatorByDelegator, (args) => {
    return parseUrl("/staking/delegators/%s/validators/%s", ...args)
});
subRouter.set(Method.GetDelegation, (args) => {
    return parseUrl("/staking/delegators/%s/delegations/%s", ...args)
});
subRouter.set(Method.GetUbDelegation, (args) => {
    return parseUrl("/staking/delegators/%s/unbonding-delegations/%s", ...args)
});
subRouter.set(Method.GetStakePool, (args) => {
    return "/staking/pool"
});

//tm
subRouter.set(Method.GetNodeInfo, (args) => {
    return "/node_info"
});
subRouter.set(Method.GetSyncing, (args) => {
    return "/syncing"
});
subRouter.set(Method.GetBlock, (args) => {
    let uri = "/blocks/%s";
    if (args > 0) {
        uri = parseUrl(uri, args);
    } else {
        uri = parseUrl(uri, "latest");
    }
    return uri
});
subRouter.set(Method.GetBlockResult, (args) => {
    throw new Error("cosmos don't support the api[getBlockResult]")
});
subRouter.set(Method.GetValidatorSet, (args) => {
    let uri = "/validatorsets/%s";
    if (args > 0) {
        uri = parseUrl(uri, args);
    } else {
        uri = parseUrl(uri, "latest");
    }
    return uri
});
subRouter.set(Method.GetTx, (args) => {
    return parseUrl("/txs/%s", ...args)
});

subRouter.set(Method.GetLcdVersion, (args) => {
    return "/version"
});

subRouter.set(Method.GetNodeVersion, (args) => {
    return "/node_version"
});

subRouter.set(Method.Broadcast, (args) => {
    return "/txs"
});


//coinswap
subRouter.set(Method.GetReservePool, (args) => {
    throw new Error("cosmos don't support the api[getReservePool]")
});

export default subRouter;
