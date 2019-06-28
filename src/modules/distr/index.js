const Utils = require("../../utils");
const AbstractModule = require("../module");

class Distribution extends AbstractModule{
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Distribution}
     */
    constructor(provider,opt) {
        super(provider,opt)
    }

    /**
     * Query withdraw address
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    getWithdrawAddr(delegator){
        if (Utils.isEmpty(delegator)) {
            throw new Error("delegator is empty");
        }
        return super.__get("getWithdrawAddr",delegator);
    }

    /**
     * Query all the rewards of validator or delegator
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    queryRewards(delegator){
        if (Utils.isEmpty(delegator)) {
            throw new Error("delegator is empty");
        }
        return super.__get("queryRewards",delegator);
    }

    /**
     * Query community tax
     *
     * @return {Promise}
     */
    getCommunityTax(){
        return super.__get("getCommunityTax");
    }

    /**
     * delegator withdraw all rewards from the validators
     *
     * @param delegator {string} - delegator's address
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    withdrawAllRewards(delegator,config = {}){
        config.txType = "withdraw_delegation_rewards_all";
        return super.__sendTransaction(delegator,null,config);
    }

    /**
     *  delegator withdraw rewards from a validators
     *
     * @param delegator {string} - delegator's address
     * @param varAddr {string} - validator's address
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    withdrawRewards(delegator,varAddr,config = {}){
        let msg = {
            validator_addr: varAddr,
        };
        config.txType = "withdraw_delegation_reward";
        return super.__sendTransaction(delegator,msg,config);
    }
}

module.exports = Distribution;