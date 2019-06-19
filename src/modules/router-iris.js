const Utils = require("../utils");

let subRouter = new Map();
subRouter.set("getAccount",(args) =>{
    return Utils.parseUrl("/auth/accounts/%s",...args) //TODO
});
subRouter.set("getCoinType",(args) =>{
    return Utils.parseUrl("/bank/coins/%s",...args)
});

subRouter.set("getTokenStats",(args) =>{
    return "/bank/token-stats"
});

//distribution
subRouter.set("getWithdrawAddr",(args) =>{
    return Utils.parseUrl("/distribution/%s/withdrawAddress",...args)
});
subRouter.set("queryRewards",(args) =>{
    return Utils.parseUrl("/distribution/%s/rewards",...args)
});
subRouter.set("getCommunityTax",(args) =>{
    return Utils.parseUrl("/distribution/community-tax",...args)
});

//gov
subRouter.set("getProposals",(args) =>{
    let param = new Array();
    if (!Utils.isEmpty(args[0])){
        param.push(`voter=${args[0]}`);
    }
    if (!Utils.isEmpty(args[1])){
        param.push(`depositor=${args[1]}`);
    }
    if (!Utils.isEmpty(args[2])){
        param.push(`status=${args[2]}`);
    }
    if (!Utils.isEmpty(args[3])){
        param.push(`limit=${args[3]}`);
    }

    let queryString = param.join("&");
    return `/gov/proposals?${queryString}`;
});
subRouter.set("getProposal",(args) =>{
    return Utils.parseUrl("/gov/proposals/%s",...args)
});
subRouter.set("getDeposits",(args) =>{
    return Utils.parseUrl("/gov/proposals/%s/deposits",...args)
});
subRouter.set("getDeposit",(args) =>{
    return Utils.parseUrl("/gov/proposals/%s/deposits/%s",...args)
});
subRouter.set("getVotes",(args) =>{
    return Utils.parseUrl("/gov/proposals/%s/votes",...args)
});
subRouter.set("getVote",(args) =>{
    return Utils.parseUrl("/gov/proposals/%s/votes/%s",...args)
});
subRouter.set("getParams",(args) =>{
    return Utils.parseUrl("/gov/params/%s",...args)
});

//slashing
subRouter.set("getSigningInfo",(args) =>{
    return Utils.parseUrl("/slashing/validators/%s/signing_info",...args)
});

//stake
subRouter.set("getValidators",(args) =>{
    let url = "/stake/validators";
    if (!Utils.isEmpty(args) && !Utils.isEmpty(args[0]) &&!Utils.isEmpty(args[1])) {
        url = `${url}?page=${args[0]}&size=${args[1]}`
    }
    return url
});
subRouter.set("getValidator",(args) =>{
    return Utils.parseUrl("/stake/validators/%s",...args)
});
subRouter.set("getDelegations",(args) =>{
    return Utils.parseUrl("/stake/delegators/%s/delegation",...args)
});
subRouter.set("getDelegationsByValidator",(args) =>{
    return Utils.parseUrl("/stake/validators/%s/delegations",...args)
});
subRouter.set("getUbDelegations",(args) =>{
    return Utils.parseUrl("/stake/delegators/%s/unbonding-delegations",...args)
});
subRouter.set("getUbDelegationsByValidator",(args) =>{
    return Utils.parseUrl("/stake/validators/%s/unbonding-delegations",...args)
});
subRouter.set("getReDelegations",(args) =>{
    return Utils.parseUrl("/stake/delegators/%s/redelegations",...args)
});
subRouter.set("getReDelegationsByValidator",(args) =>{
    return Utils.parseUrl("/stake/validators/%s/redelegations",...args)
});
subRouter.set("getAllValidatorsByDelegator",(args) =>{
    return Utils.parseUrl("/stake/delegators/%s/validators",...args)
});
subRouter.set("getValidatorByDelegator",(args) =>{
    return Utils.parseUrl("/stake/delegators/%s/validators/%s",...args)
});
subRouter.set("getDelegation",(args) =>{
    return Utils.parseUrl("/stake/delegators/%s/delegations/%s",...args)
});
subRouter.set("getUbDelegation",(args) =>{
    return Utils.parseUrl("/stake/delegators/%s/unbonding-delegations/%s",...args)
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
        uri = Utils.parseUrl(uri, args);
    }else {
        uri = Utils.parseUrl(uri, "latest");
    }
    return uri
});
subRouter.set("getBlockResult",(args) =>{
    let uri = "/blocks-result/%s";
    if (args > 0){
        uri = Utils.parseUrl(uri, args);
    }else {
        uri = Utils.parseUrl(uri, "latest");
    }
    return uri
});
subRouter.set("getValidatorSet",(args) =>{
    let uri = "/validatorsets/%s";
    if (args > 0){
        uri = Utils.parseUrl(uri, args);
    }else {
        uri = Utils.parseUrl(uri, "latest");
    }
    return uri
});
subRouter.set("getTx",(args) =>{
    return Utils.parseUrl("/txs/%s",...args)
});

subRouter.set("getLcdVersion",(args) =>{
    return "/version"
});

subRouter.set("getNodeVersion",(args) =>{
    return "/node-version"
});

subRouter.set("broadcast",(args) =>{
    let apiUrl = Utils.parseUrl("tx/broadcast?simulate=%s",args.simulate);
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
exports.module = subRouter;