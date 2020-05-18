"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Msg struct for requesting a random number
 * @hidden
 */
class MsgRequestRand {
    constructor(consumer, blockInterval) {
        this.type = 'irishub/slashing/MsgUnjail';
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