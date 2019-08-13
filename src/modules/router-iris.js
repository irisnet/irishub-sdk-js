import {isEmpty,parseUrl} from "../utils"

let subRouter = new Map();
subRouter.set("getAccount",(args) =>{
    return parseUrl("/auth/accounts/%s",...args) //TODO
});
subRouter.set("getCoinType",(args) =>{
    return parseUrl("/bank/coins/%s",...args)
});

subRouter.set("getTokenStats",(args) =>{
    return "/bank/token-stats"
});

//distribution
subRouter.set("getWithdrawAddr",(args) =>{
    return parseUrl("/distribution/%s/withdrawAddress",...args)
});
subRouter.set("queryRewards",(args) =>{
    return parseUrl("/distribution/%s/rewards",...args)
});
subRouter.set("getCommunityTax",(args) =>{
    return parseUrl("/distribution/community-tax",...args)
});

//gov
subRouter.set("getProposals",(args) =>{
    let param = new Array();
    if (!isEmpty(args[0])){
        param.push(`voter=${args[0]}`);
    }
    if (!isEmpty(args[1])){
        param.push(`depositor=${args[1]}`);
    }
    if (!isEmpty(args[2])){
        param.push(`status=${args[2]}`);
    }
    if (!isEmpty(args[3])){
        param.push(`limit=${args[3]}`);
    }

    let queryString = param.join("&");
    return `/gov/proposals?${queryString}`;
});
subRouter.set("getProposal",(args) =>{
    return parseUrl("/gov/proposals/%s",...args)
});
subRouter.set("getDeposits",(args) =>{
    return parseUrl("/gov/proposals/%s/deposits",...args)
});
subRouter.set("getDeposit",(args) =>{
    return parseUrl("/gov/proposals/%s/deposits/%s",...args)
});
subRouter.set("getVotes",(args) =>{
    return parseUrl("/gov/proposals/%s/votes",...args)
});
subRouter.set("getVote",(args) =>{
    return parseUrl("/gov/proposals/%s/votes/%s",...args)
});
subRouter.set("getParams",(args) =>{
    return parseUrl("/gov/params/%s",...args)
});

//slashing
subRouter.set("getSigningInfo",(args) =>{
    return parseUrl("/slashing/validators/%s/signing_info",...args)
});

//stake
subRouter.set("getValidators",(args) =>{
    let url = "/stake/validators";
    if (!isEmpty(args) && !isEmpty(args[0]) &&!isEmpty(args[1])) {
        url = `${url}?page=${args[0]}&size=${args[1]}`
    }
    return url
});
subRouter.set("getValidator",(args) =>{
    return parseUrl("/stake/validators/%s",...args)
});
subRouter.set("getDelegations",(args) =>{
    return parseUrl("/stake/delegators/%s/delegation",...args)
});
subRouter.set("getDelegationsByValidator",(args) =>{
    return parseUrl("/stake/validators/%s/delegations",...args)
});
subRouter.set("getUbDelegations",(args) =>{
    return parseUrl("/stake/delegators/%s/unbonding-delegations",...args)
});
subRouter.set("getUbDelegationsByValidator",(args) =>{
    return parseUrl("/stake/validators/%s/unbonding-delegations",...args)
});
subRouter.set("getReDelegations",(args) =>{
    return parseUrl("/stake/delegators/%s/redelegations",...args)
});
subRouter.set("getReDelegationsByValidator",(args) =>{
    return parseUrl("/stake/validators/%s/redelegations",...args)
});
subRouter.set("getAllValidatorsByDelegator",(args) =>{
    return parseUrl("/stake/delegators/%s/validators",...args)
});
subRouter.set("getValidatorByDelegator",(args) =>{
    return parseUrl("/stake/delegators/%s/validators/%s",...args)
});
subRouter.set("getDelegation",(args) =>{
    return parseUrl("/stake/delegators/%s/delegations/%s",...args)
});
subRouter.set("getUbDelegation",(args) =>{
    return parseUrl("/stake/delegators/%s/unbonding-delegations/%s",...args)
});
subRouter.set("getStakePool",(args) =>{
    return "/stake/pool"
});

//tm
subRouter.set("getNodeInfo",(args) =>{
    return "/node_info"
});
subRouter.set("getSyncing",(args) =>{
    return "/syncing"
});
subRouter.set("getBlock",(args) =>{
    let uri = "/blocks/%s";
    if (args > 0){
        uri = parseUrl(uri, args);
    }else {
        uri = parseUrl(uri, "latest");
    }
    return uri
});
subRouter.set("getBlockResult",(args) =>{
    let uri = "/blocks-result/%s";
    if (args > 0){
        uri = parseUrl(uri, args);
    }else {
        uri = parseUrl(uri, "latest");
    }
    return uri
});
subRouter.set("getValidatorSet",(args) =>{
    let uri = "/validatorsets/%s";
    if (args > 0){
        uri = parseUrl(uri, args);
    }else {
        uri = parseUrl(uri, "latest");
    }
    return uri
});
subRouter.set("getTx",(args) =>{
    return parseUrl("/txs/%s",...args)
});

subRouter.set("getLcdVersion",(args) =>{
    return "/version"
});

subRouter.set("getNodeVersion",(args) =>{
    return "/node-version"
});

subRouter.set("broadcast",(args) =>{
    let apiUrl = parseUrl("tx/broadcast?simulate=%s",args.simulate);
    switch (args.mode) {
        case "async": {
            apiUrl = `${apiUrl}&async=true`;
            break
        }
        case "commit": {
            apiUrl = `${apiUrl}&commit=true`;
            break
        }
        case "sync":{
            // nothing
            break
        }
    }
    return apiUrl
});

//coinswap
subRouter.set("getReservePool",(args) =>{
    let apiUrl = parseUrl("/coinswap/liquidities/%s",args);
    return apiUrl
});

export const IrisRouter = subRouter;