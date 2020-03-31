"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Msg struct for unjailing jailed validator
 * @hidden
 */
class MsgUnjail {
    constructor(address) {
        this.type = 'irishub/slashing/MsgUnjail';
        this.value = {
            address,
        };
    }
    getSignBytes() {
        return this.value;
    }
}
exports.MsgUnjail = MsgUnjail;
//# sourceMappingURL=slashing.js.map