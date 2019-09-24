/** @module htlc */
import AbstractModule from "../module"
import {Method} from "../../constants"
import {isEmpty} from "../../utils"

class HTLC extends AbstractModule {
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
     * @param hashLock {string} - the hash-lock of the HTLC
     * @return {Promise}
     */
    getHTLC(hashLock) {
        if (isEmpty(hashLock)) {
            throw new Error("hash_lock id is empty");
        }
        return super.__get(Method.GetHTLC, hashLock);
    }

    /**
     * create a HTLC (TODO)
     *
     * @param sender {string} - sender's address
     * @param receiver {string} - receiver's address
     * @param receiverOnOtherChain {string} - receiver's address on other chain
     * @param hashLock {string} - the hash lock generated from secret (and timestamp if provided)
     * @param amount {Coin} - the amount to be transferred
     * @param timeLock {string} - the time span after which the HTLC will expire
     * @param timestamp {string} - if provided, used to generate the hash lock together with secret
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    createHTLC(sender, receiver, receiverOnOtherChain, hashLock, amount, timeLock, timestamp, config = {}) {
        let msg = {
            sender: sender,
            receiver: receiver,
            receiverOnOtherChain: receiverOnOtherChain,
            amount: amount,
            hashLock: hashLock,
            timestamp: timestamp,
            timeLock: timeLock,
        };
        config.txType = "create_htlc";
        return super.__sendTransaction(sender, msg, config);
    }

    /**
     * claim an opened HTLC (TODO)
     *
     * @param sender {string} - sender's address
     * @param hashLock {string} - the hash lock identifying the HTLC to be claimed
     * @param secret {string} - the secret with which to claim
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    claimHTLC(sender,hashLock,secret,config = {}) {
        let msg = {
            sender: sender,
            hashLock: hashLock,
            secret: secret,
        };
        config.txType = "claim_htlc";
        return super.__sendTransaction(sender, msg, config);
    }

    /**
     * refund from an expired HTLC (TODO)
     *
     * @param sender {string} - sender's address
     * @param hashLock {string} - the hash lock identifying the HTLC to be claimed
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    refundHTLC(sender,hashLock,config = {}) {
        let msg = {
            sender: sender,
            hashLock: hashLock,
        };
        config.txType = "refund_htlc";
        return super.__sendTransaction(sender, msg, config);
    }
}

export default HTLC;
