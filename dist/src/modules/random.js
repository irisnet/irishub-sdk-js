"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const types = require("../types");
const random_1 = require("../types/random");
const types_1 = require("../types");
/**
 * @category Modules
 * @since v0.17
 */
class Random {
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
            const msgs = [new random_1.MsgRequestRand(consumer, blockInterval)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Subscribe notification when the random is generated
     * @param requestID The request id of the random number
     * @param callback A function to receive notifications
     * @since v0.17
     */
    subscribeRandom(requestID, callback) {
        const condition = new types_1.EventQueryBuilder().addCondition(new types.Condition(types_1.EventKey.RequestID).eq(requestID));
        const subscription = this.client.eventListener.subscribeNewBlock((error, data) => {
            if (error) {
                callback(error);
                return;
            }
            const tags = data === null || data === void 0 ? void 0 : data.result_begin_block.tags;
            if (!tags)
                return;
            tags.forEach(tag => {
                if (tag.key === 'request-id' && tag.value === requestID) {
                    this.queryRandom(requestID).then(random => {
                        callback(undefined, random);
                    });
                }
            });
        }, condition);
        return subscription;
    }
}
exports.Random = Random;
//# sourceMappingURL=random.js.map