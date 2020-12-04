"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUnjail = void 0;
const types_1 = require("./types");
/**
 * Msg struct for unjailing jailed validator
 * @hidden
 */
class MsgUnjail extends types_1.Msg {
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
exports.MsgUnjail = MsgUnjail;
//# sourceMappingURL=slashing.js.map