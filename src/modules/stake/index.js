/** @module stake */
import {isEmpty} from "../../utils"
import AbstractModule from "../module"
import {Method} from "../../constants"

export default class Stake extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return opt {Stake}
     */
    constructor(provider, opt) {
        super(provider, opt)
    }

    /**
     * Get validators
     *
     * @param page {number} - page
     * @param size {number} - page's size
     * @return {Promise}
     */
    getValidators(page, size) {
        return super.__get(Method.GetValidators, page, size);
    }

    /**
     * Query the information from a single validator
     *
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getValidator(validator) {
        if (isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get(Method.GetValidator, validator);
    }

    /**
     * Get all delegations from a delegator
     *
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    getDelegations(delegator) {
        if (isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        return super.__get(Method.GetDelegations, delegator);
    }

    /**
     * Get all delegations from a validator
     *
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getDelegationsByValidator(validator) {
        if (isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get(Method.GetDelegationsByValidator, validator);
    }

    /**
     * Get all unbonding delegations from a delegator
     *
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    getUbDelegations(delegator) {
        if (isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        return super.__get(Method.GetUbDelegations, delegator);
    }

    /**
     * Get all unbonding delegations from a validator
     *
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getUbDelegationsByValidator(validator) {
        if (isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get(Method.GetUbDelegationsByValidator, validator);
    }

    /**
     * Get all redelegations from a delegator
     *
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    getReDelegations(delegator) {
        if (isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        return super.__get(Method.GetReDelegations, delegator);
    }

    /**
     * Get all outgoing redelegations from a validator
     *
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getReDelegationsByValidator(validator) {
        if (isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get(Method.GetReDelegationsByValidator, validator);
    }

    /**
     * Query all validators that a delegator is bonded to
     *
     * @param delegator {string} - delegator's address
     * @return {Promise}
     */
    getAllValidatorsByDelegator(delegator) {
        if (isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        return super.__get(Method.GetAllValidatorsByDelegator, delegator);
    }

    /**
     * Query a validator that a delegator is bonded to
     *
     * @param delegator {string} - delegator's address
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getValidatorByDelegator(delegator, validator) {
        if (isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        if (isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get(Method.GetValidatorByDelegator, delegator, validator);
    }

    /**
     * Query the current delegation between a delegator and a validator
     * @param delegator {string} - delegator's address
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getDelegation(delegator, validator) {
        if (isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        if (isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get(Method.GetDelegation, delegator, validator);
    }

    /**
     * Query all unbonding delegations between a delegator and a validator
     *
     * @param delegator {string} - delegator's address
     * @param validator {string} - validator's address
     * @return {Promise}
     */
    getUbDelegation(delegator, validator) {
        if (isEmpty(delegator)) {
            throw new Error("delegator is empty")
        }
        if (isEmpty(validator)) {
            throw new Error("validator is empty")
        }
        return super.__get(Method.GetUbDelegation, delegator, validator);
    }

    /**
     * Get the current state of the staking pool
     *
     * @return {Promise}
     */
    getStakePool() {
        return super.__get(Method.GetStakePool);
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
    delegate(delegator, validator, amount, config = {}) {
        let msg = {
            validator_addr: validator,
            delegation: amount
        };
        config.txType = "delegate";
        return super.__sendTransaction(delegator, msg, config);
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
    redelegate(delegator, srcVarAddr, dstVarAddr, shares, config = {}) {
        let msg = {
            validator_src_addr: srcVarAddr,
            validator_dst_addr: dstVarAddr,
            shares_amount: shares
        };
        config.txType = "redelegate";
        return super.__sendTransaction(delegator, msg, config);
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
    undelegate(delegator, valAddr, shares, config = {}) {
        let msg = {
            validator_addr: valAddr,
            shares_amount: shares
        };
        config.txType = "begin_unbonding";
        return super.__sendTransaction(delegator, msg, config);
    }
}
