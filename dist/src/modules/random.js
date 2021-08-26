import { __awaiter } from "tslib";
import { MsgRequestRand } from '../types/random';
/**
 * @category Modules
 * @since v0.17
 */
export class Random {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Query the random information by the specified reqID
     *
     * @param reqID The ID of the random request
     * @returns
     * @since v0.17
     */
    queryRandom(reqID) {
        return new Promise(resolve => {
            this.client.rpcClient
                .abciQuery('custom/rand/rand', {
                ReqID: reqID,
            })
                .then((random) => {
                random.request_id = reqID;
                resolve(random);
            });
        });
    }
    /**
     * Query random requests of a specified block height
     *
     * @param height The block height
     * @returns
     * @since v0.17
     */
    queryRequest(height) {
        return this.client.rpcClient.abciQuery('custom/rand/queue', {
            Height: height,
        });
    }
    /**
     * Request a random number
     *
     * @param blockInterval The block interval to wait for generating the random number
     * @param baseTx
     * @since v0.17
     */
    request(blockInterval, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const consumer = this.client.keys.show(baseTx.from);
            const msgs = [new MsgRequestRand(consumer, blockInterval)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
}
//# sourceMappingURL=random.js.map