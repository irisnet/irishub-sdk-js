/** @module htlc */
import AbstractModule from "../module"
import {Method} from "../../constants"
import {isEmpty} from "../../utils"

export default class HTLC extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {HTLC}
     */
    constructor(provider, opt) {
        super(provider, opt);
    }

    /**
     * Query HTLC by hash-lock
     *
     * @param hash_lock {string} - the hash-lock of the HTLC
     * @return {Promise}
     */
    getHTLC(hash_lock) {
        if (isEmpty(hash_lock)) {
            throw new Error("hash_lock id is empty");
        }
        return super.__get(Method.GetHTLC, hash_lock);
    }

    /**
     * create a HTLC (TODO)
     *
     * @param sender {string} - sender's address
     * @param receiver {string} - receiver's address
     * @param receiver_on_other_chain {string} - receiver's address on other chain
     * @param hash_lock {string} - the hash lock generated from secret (and timestamp if provided)
     * @param amount {Coin} - the amount to be transferred
     * @param time_lock {Coin} - the time span after which the HTLC will expire
     * @param timestamp {Coin} - if provided, used to generate the hash lock together with secret
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    async createHTLC(sender, receiver, receiver_on_other_chain, hash_lock, amount, time_lock, timestamp, config = {}) {
        let msg = {
            sender: sender,
            receiver: receiver,
            receiverOnOtherChain: receiver_on_other_chain,
            amount: amount,
            hashLock: hash_lock,
            timestamp: timestamp,
            timeLock: time_lock,
        };
        config.txType = "create_htlc";
        return super.__sendTransaction(sender, msg, config);
    }

    /**
     * claim an opened HTLC (TODO)
     *
     * @param sender {string} - sender's address
     * @param hash_lock {string} - the hash lock identifying the HTLC to be claimed
     * @param secret {string} - the secret with which to claim
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    async claimHTLC(sender,hash_lock,secret,config = {}) {
        let msg = {
            sender: sender,
            hashLock: hash_lock,
            secret: secret,
            timeLock: time_lock,
        };
        config.txType = "claim_htlc";
        return super.__sendTransaction(sender, msg, config);
    }

    /**
     * refund from an expired HTLC (TODO)
     *
     * @param sender {string} - sender's address
     * @param hash_lock {string} - the hash lock identifying the HTLC to be claimed
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    async refundHTLC(sender,hash_lock,config = {}) {
        let msg = {
            sender: sender,
            hashLock: hash_lock,
        };
        config.txType = "refund_htlc";
        return super.__sendTransaction(sender, msg, config);
    }
}
