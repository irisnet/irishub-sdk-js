import {isEmpty, parseUrl} from "../utils"
import {Method} from "../constants"

let subRouter = new Map();
subRouter.set(Method.GetAccount, (args) => {
    return parseUrl("/bank/accounts/%s", ...args)
});
subRouter.set(Method.GetCoinType, (args) => {
    return parseUrl("/bank/coins/%s", ...args)
});

subRouter.set(Method.GetTokenStats, (args) => {
    return "/bank/token-stats"
});

//distribution
subRouter.set(Method.GetWithdrawAddr, (args) => {
    return parseUrl("/distribution/%s/withdrawAddress", ...args)
});
subRouter.set(Method.QueryRewards, (args) => {
    return parseUrl("/distribution/%s/rewards", ...args)
});
subRouter.set(Method.GetCommunityTax, (args) => {
    return parseUrl("/distribution/community-tax", ...args)
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
    return parseUrl("/gov/params/%s", ...args)
});

//slashing
subRouter.set(Method.GetSigningInfo, (args) => {
    return parseUrl("/slashing/validators/%s/signing_info", ...args)
});

//stake
subRouter.set(Method.GetValidators, (args) => {
    let url = "/stake/validators";
    if (!isEmpty(args) && !isEmpty(args[0]) && !isEmpty(args[1])) {
        url = `${url}?page=${args[0]}&size=${args[1]}`
    }
    return url
});
subRouter.set(Method.GetValidator, (args) => {
    return parseUrl("/stake/validators/%s", ...args)
});
subRouter.set(Method.GetDelegations, (args) => {
    return parseUrl("/stake/delegators/%s/delegation", ...args)
});
subRouter.set(Method.GetDelegationsByValidator, (args) => {
    return parseUrl("/stake/validators/%s/delegations", ...args)
});
subRouter.set(Method.GetUbDelegations, (args) => {
    return parseUrl("/stake/delegators/%s/unbonding-delegations", ...args)
});
subRouter.set(Method.GetUbDelegationsByValidator, (args) => {
    return parseUrl("/stake/validators/%s/unbonding-delegations", ...args)
});
subRouter.set(Method.GetReDelegations, (args) => {
    return parseUrl("/stake/delegators/%s/redelegations", ...args)
});
subRouter.set(Method.GetReDelegationsByValidator, (args) => {
    return parseUrl("/stake/validators/%s/redelegations", ...args)
});
subRouter.set(Method.GetAllValidatorsByDelegator, (args) => {
    return parseUrl("/stake/delegators/%s/validators", ...args)
});
subRouter.set(Method.GetValidatorByDelegator, (args) => {
    return parseUrl("/stake/delegators/%s/validators/%s", ...args)
});
subRouter.set(Method.GetDelegation, (args) => {
    return parseUrl("/stake/delegators/%s/delegations/%s", ...args)
});
subRouter.set(Method.GetUbDelegation, (args) => {
    return parseUrl("/stake/delegators/%s/unbonding-delegations/%s", ...args)
});
subRouter.set(Method.GetStakePool, (args) => {
    return "/stake/pool"
});

//tm
subRouter.set(Method.GetNodeInfo, (args) => {
    return "/node-info"
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
    let uri = "/blocks-result/%s";
    if (args > 0) {
        uri = parseUrl(uri, args);
    } else {
        uri = parseUrl(uri, "latest");
    }
    return uri
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
    return "/node-version"
});

subRouter.set(Method.Broadcast, (args) => {
    let apiUrl = parseUrl("tx/broadcast?simulate=%s", args.simulate);
    switch (args.mode) {
        case "async": {
            apiUrl = `${apiUrl}&async=true`;
            break
        }
        case "commit": {
            apiUrl = `${apiUrl}&commit=true`;
            break
        }
        case "sync": {
            // nothing
            break
        }
    }
    return apiUrl
});

//coinswap
subRouter.set(Method.GetReservePool, (args) => {
    let apiUrl = parseUrl("/coinswap/liquidities/%s", args);
    return apiUrl
});

export default subRouter;
