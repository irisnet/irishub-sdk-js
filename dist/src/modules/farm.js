import { __awaiter } from "tslib";
import * as types from '../types';
export class Farm {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * stake lpt
     * @param farmPoolName  farm pool name
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    stakeLp(pool_name, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgStake,
                    value: {
                        pool_name,
                        amount,
                        sender
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    ;
    /**
     * unstake lpt
     * @param farmPoolName  farm pool name
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    unStakeLp(pool_name, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgUnstake,
                    value: {
                        pool_name,
                        amount,
                        sender
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * harvest lpt
     * @param farmPoolName  farm pool name
     * @param baseTx { types.BaseTx }
     * @returns
     */
    harvestReward(pool_name, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const sender = this.client.keys.show(baseTx.from);
            const msgs = [
                {
                    type: types.TxType.MsgHarvest,
                    value: {
                        pool_name,
                        sender
                    }
                }
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
}
//# sourceMappingURL=farm.js.map