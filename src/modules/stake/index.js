const Utils = require("../../utils");
const AbstractModule = require("../module");
class Stake extends AbstractModule{
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return opt {Stake}
     */
    constructor(provider,opt) {
        super(provider,opt)
    }

    /**
     * Get validators
     *
     * @param page {number} - page
     * @param size {number} - page's size
     * @return {Promise}
     */
    getValidators(page, size) {
        return super.__get("getValidators",page, size);
    }

    /**
     * Query the information from a single validator
     *
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getValidator(validator) {
        if (Utils.isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get("getValidator",validator);
    }

    /**
     * Get all delegations from a delegator
     *
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    getDelegations(delegator) {
        if (Utils.isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        return super.__get("getDelegations",delegator);
    }

    /**
     * Get all delegations from a validator
     *
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getDelegationsByValidator(validator) {
        if (Utils.isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get("getDelegationsByValidator",validator);
    }

    /**
     * Get all unbonding delegations from a delegator
     *
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    getUbDelegations(delegator) {
        if (Utils.isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        return super.__get("getUbDelegations",delegator);
    }

    /**
     * Get all unbonding delegations from a validator
     *
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getUbDelegationsByValidator(validator) {
        if (Utils.isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get("getUbDelegationsByValidator",validator);
    }

    /**
     * Get all redelegations from a delegator
     *
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    getReDelegations(delegator) {
        if (Utils.isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        return super.__get("getReDelegations",delegator);
    }

    /**
     * Get all outgoing redelegations from a validator
     *
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getReDelegationsByValidator(validator) {
        if (Utils.isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get("getReDelegationsByValidator",validator);
    }

    /**
     * Query all validators that a delegator is bonded to
     *
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    getAllValidatorsByDelegator(delegator) {
        if (Utils.isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        return super.__get("getAllValidatorsByDelegator",delegator);
    }

    /**
     * Query a validator that a delegator is bonded to
     *
     * @param delegator {string} - delegator's address
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getValidatorByDelegator(delegator, validator) {
        if (Utils.isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        if (Utils.isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get("getValidatorByDelegator",delegator,validator);
    }

    /**
     * Query the current delegation between a delegator and a validator
     * @param delegator {string} - delegator's address
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getDelegation(delegator, validator) {
        if (Utils.isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        if (Utils.isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get("getDelegation",delegator,validator);
    }

    /**
     * Query all unbonding delegations between a delegator and a validator
     *
     * @param delegator {string} - delegator's address
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getUbDelegation(delegator, validator) {
        if (Utils.isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        if (Utils.isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get("getUbDelegation",delegator,validator);
    }

    /**
     * Get the current state of the staking pool
     *
     * @return {Promise}
     */
    getStakePool() {
        return super.__get("getStakePool");
    }

    /**
     *  delegate liquid tokens to an validator
     *
     * @param delegator {string} - delegator's address
     * @param validator {string} - validator's operator address
     * @param amount {Coin} - token
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    delegate(delegator,validator,amount,config = {}){
        let msg = {
            validator_addr: validator,
            delegation: amount
        };
        config.txType = "delegate";
        return super.__sendTransaction(delegator,msg,config);
    }

    /**
     * redelegate illiquid tokens from one validator to another
     *
     * @param delegator {string} - delegator's address
     * @param srcVarAddr {string} - bech32 address of the source validator
     * @param dstVarAddr {string} - bech32 address of the destination validator
     * @param shares {string} - Amount of source-shares to either unbond or redelegate as a positive integer or decimal
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    redelegate(delegator,srcVarAddr,dstVarAddr,shares,config = {}){
        let msg = {
            validator_src_addr: srcVarAddr,
            validator_dst_addr: dstVarAddr,
            shares_amount: shares
        };
        config.txType = "redelegate";
        return super.__sendTransaction(delegator,msg,config);
    }

    /**
     * undelegate shares from a validator
     *
     * @param delegator {string} - delegator's address
     * @param valAddr {string} - bech32 address of the validator
     * @param shares {string} - Amount of source-shares to either unbond or redelegate as a positive integer or decimal
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    undelegate(delegator,valAddr,shares,config = {}){
        let msg = {
            validator_addr: valAddr,
            shares_amount: shares
        };
        config.txType = "begin_unbonding";
        return super.__sendTransaction(delegator,msg,config);
    }
}

module.exports = Stake;