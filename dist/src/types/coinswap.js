"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MsgAddLiquidity {
    constructor(request, sender) {
        const deadline = new Date();
        deadline.setTime(deadline.getTime() + request.deadline);
        this.type = 'irismod/coinswap/MsgAddLiquidity';
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
class MsgRemoveLiquidity {
    constructor(request, sender) {
        const deadline = new Date();
        deadline.setMilliseconds(deadline.getTime() + request.deadline);
        this.type = 'irismod/coinswap/MsgRemoveLiquidity';
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
class MsgSwapOrder {
    constructor(request, isBuyOrder) {
        const deadline = new Date();
        deadline.setTime(deadline.getTime() + request.deadline);
        this.type = 'irismod/coinswap/MsgSwapOrder';
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