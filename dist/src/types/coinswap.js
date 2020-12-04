"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSwapOrder = exports.MsgRemoveLiquidity = exports.MsgAddLiquidity = void 0;
const types_1 = require("./types");
class MsgAddLiquidity extends types_1.Msg {
    constructor(request, sender) {
        super('irismod/coinswap/MsgAddLiquidity');
        const deadline = new Date();
        deadline.setTime(deadline.getTime() + request.deadline);
        this.value = {
            max_token: request.max_token,
            exact_standard_amt: String(request.exact_standard_amt),
            min_liquidity: String(request.min_liquidity),
            deadline: deadline.getTime().toString(),
            sender,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgAddLiquidity = MsgAddLiquidity;
class MsgRemoveLiquidity extends types_1.Msg {
    constructor(request, sender) {
        super('irismod/coinswap/MsgRemoveLiquidity');
        const deadline = new Date();
        deadline.setMilliseconds(deadline.getTime() + request.deadline);
        this.value = {
            min_token: String(request.min_token),
            withdraw_liquidity: request.withdraw_liquidity,
            min_standard_amt: String(request.min_standard_amt),
            deadline: deadline.getTime().toString(),
            sender,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgRemoveLiquidity = MsgRemoveLiquidity;
class MsgSwapOrder extends types_1.Msg {
    constructor(request, isBuyOrder) {
        super('irismod/coinswap/MsgSwapOrder');
        const deadline = new Date();
        deadline.setTime(deadline.getTime() + request.deadline);
        this.value = {
            input: request.input,
            output: request.output,
            deadline: deadline.getTime().toString(),
            is_buy_order: isBuyOrder,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgSwapOrder = MsgSwapOrder;
//# sourceMappingURL=coinswap.js.map