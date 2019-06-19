const Utils = require("../utils");

let subRouter = new Map();
subRouter.set("getAccount",(args) =>{
    return Utils.parseUrl("/auth/accounts/%s",...args)
});
subRouter.set("getCoinType",(args) =>{
    throw new Error("cosmos don't support the api[getCoinType]")
});

subRouter.set("getTokenStats",(args) =>{
    throw new Error("cosmos don't support the api[getTokenStats]")
});

//distribution
subRouter.set("getWithdrawAddr",(args) =>{
    return Utils.parseUrl("/distribution/delegators/%s/withdraw_address",...args)
});
subRouter.set("queryRewards",(args) =>{
    return Utils.parseUrl("/distribution/delegators/%s/rewards",...args)
});
subRouter.set("getCommunityTax",(args) =>{
    throw new Error("cosmos don't support the api")
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
    throw new Error("cosmos don't support the api")
});

//slashing
subRouter.set("getSigningInfo",(args) =>{
    return Utils.parseUrl("/slashing/validators/%s/signing_info",...args)
});

//stake
subRouter.set("getValidators",(args) =>{
    return "/staking/validators"
});
subRouter.set("getValidator",(args) =>{
    return Utils.parseUrl("/staking/validators/%s",...args)
});
subRouter.set("getDelegations",(args) =>{
    return Utils.parseUrl("/staking/delegators/%s/delegations",...args)
});
subRouter.set("getDelegationsByValidator",(args) =>{
    return Utils.parseUrl("/staking/validators/%s/delegations",...args)
});
subRouter.set("getUbDelegations",(args) =>{
    return Utils.parseUrl("/staking/delegators/%s/unbonding_delegations",...args)
});
subRouter.set("getUbDelegationsByValidator",(args) =>{
    return Utils.parseUrl("/staking/validators/%s/unbonding-delegations",...args)
});
subRouter.set("getReDelegations",(args) =>{
    throw new Error("cosmos don't support the api[getReDelegations]")
});
subRouter.set("getReDelegationsByValidator",(args) =>{
    throw new Error("cosmos don't support the api[getReDelegationsByValidator]")
});
subRouter.set("getAllValidatorsByDelegator",(args) =>{
    return Utils.parseUrl("/staking/delegators/%s/validators",...args)
});
subRouter.set("getValidatorByDelegator",(args) =>{
    return Utils.parseUrl("/staking/delegators/%s/validators/%s",...args)
});
subRouter.set("getDelegation",(args) =>{
    return Utils.parseUrl("/staking/delegators/%s/delegations/%s",...args)
});
subRouter.set("getUbDelegation",(args) =>{
    return Utils.parseUrl("/staking/delegators/%s/unbonding-delegations/%s",...args)
});
subRouter.set("getStakePool",(args) =>{
    return "/staking/pool"
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
    throw new Error("cosmos don't support the api[getBlockResult]")
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
    return "/node_version"
});

subRouter.set("broadcast",(args) =>{
    return "/txs"
});
exports.module = subRouter;