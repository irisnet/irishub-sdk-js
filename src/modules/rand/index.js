/** @module rand */
import AbstractModule from "../module"
import {Method} from "../../constants"
import {isEmpty} from "../../utils"

export default class Rand extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Rand}
     */
    constructor(provider, opt) {
        super(provider, opt);
    }

    /**
     * Query a random number by the specified request id
     *
     * @param requestId {string} - the request id
     * @return {Promise}
     */
    getRand(requestId) {
        if (isEmpty(requestId)) {
            throw new Error("request id is empty");
        }
        return super.__get(Method.GetRand, requestId);
    }

    /**
     * Query the pending requests with an optional height
     *
     * @param height {int} - the destination block height
     * @return {Promise}
     */
    getPendingRands(height) {
        if (isEmpty(height)) {
            throw new Error("request id is empty");
        }
        return super.__get(Method.GetPendingRands, height);
    }

    /**
     * request a random number (TODO)
     *
     * @param consumer {string} - consumer's address
     * @param blockInterval {string} - block interval after which the requested random number will be generated
     * @param config {Object} - config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options
     * @return {Promise<{resp: *, hash: string}>}
     */
    async requestRand(consumer, blockInterval,config = {}) {
        let msg = {
            consumer: consumer,
            blockInterval: blockInterval,
        };
        config.txType = "request_rand";
        return super.__sendTransaction(consumer, msg, config);
    }
}
