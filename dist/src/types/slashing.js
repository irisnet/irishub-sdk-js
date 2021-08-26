import { Msg } from './types';
/**
 * Msg struct for unjailing jailed validator
 * @hidden
 */
export class MsgUnjail extends Msg {
    constructor(address) {
        super('irishub/slashing/MsgUnjail');
        this.value = {
            address,
        };
    }
    getSignBytes() {
        return this.value;
    }
}
//# sourceMappingURL=slashing.js.map