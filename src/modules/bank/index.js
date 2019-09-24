/** @module bank */
import {isEmpty} from "../../utils"
import {Method} from "../../constants"
import AbstractModule from "../module"

class Bank extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Bank}
     */
    constructor(provider, opt) {
        super(provider, opt)
    }

    /**
     * Get the account information on blockchain
     *
     * @param address {string} - address of account
     * @returns {*}
     */
    getAccount(address) {
        return super.__getAccount(address)
    }

    /**
     * Get the detailed information about the given coin type
     *
     * @param coinType {string} - token's symbol
     * @returns {*}
     */
    getCoinType(coinType) {
        if (isEmpty(coinType)) {
            throw new Error("coinType is empty");
        }
        return super.__get(Method.GetCoinType, coinType)
    }

    /**
     * Get token statistics, such as total loose tokens, total bonded token and total burned token
     *
     * @returns {*}
     */
    getTokenStats() {
        return super.__get(Method.GetTokenStats)
    }

    /**
     *
     * @param from {string} - sender's address
     * @param to {string} - receiver's address
     * @param tokens {Coin[]} - token array
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    transfer(from, to, tokens, config = {}) {
        let msg = {
            to: to,
            coins: tokens
        };
        config.txType = "transfer";
        return super.__sendTransaction(from, msg, config);
    }
}

export default Bank;
