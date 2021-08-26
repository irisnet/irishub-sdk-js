import { Msg } from './types';
/**
 * Msg struct for requesting a random number
 * @hidden
 */
export class MsgRequestRand extends Msg {
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
//# sourceMappingURL=random.js.map