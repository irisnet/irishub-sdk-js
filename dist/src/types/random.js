"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRequestRand = void 0;
const types_1 = require("./types");
/**
 * Msg struct for requesting a random number
 * @hidden
 */
class MsgRequestRand extends types_1.Msg {
    constructor(consumer, blockInterval) {
        super('irishub/slashing/MsgUnjail');
        this.value = {
            consumer,
            'block-interval': blockInterval,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgRequestRand = MsgRequestRand;
//# sourceMappingURL=random.js.map