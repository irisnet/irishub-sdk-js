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
const stake_1 = require("../types/stake");
class Stake {
    constructor(client) {
        this.client = client;
    }
    queryDelegation(delegatorAddr, validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/delegation', {
            DelegatorAddr: delegatorAddr,
            ValidatorAddr: validatorAddr,
        });
    }
    queryDelegations(delegatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/delegatorDelegations', {
            DelegatorAddr: delegatorAddr,
        });
    }
    queryUnbondingDelegation(delegatorAddr, validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/unbondingDelegation', {
            DelegatorAddr: delegatorAddr,
            ValidatorAddr: validatorAddr,
        });
    }
    queryUnbondingDelegations(delegatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/delegatorUnbondingDelegations', {
            DelegatorAddr: delegatorAddr,
        });
    }
    queryRedelegation(delegatorAddr, srcValidatorAddr, dstValidatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/redelegation', {
            DelegatorAddr: delegatorAddr,
            ValSrcAddr: srcValidatorAddr,
            ValDstAddr: dstValidatorAddr,
        });
    }
    queryRedelegations(delegatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/delegatorRedelegations', {
            DelegatorAddr: delegatorAddr,
        });
    }
    queryDelegationsTo(validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/validatorDelegations', {
            ValidatorAddr: validatorAddr,
        });
    }
    queryUnbondingDelegationsFrom(validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/validatorUnbondingDelegations', {
            ValidatorAddr: validatorAddr,
        });
    }
    queryRedelegationsFrom(validatorAddr) {
        return this.client.rpcClient.abciQuery('custom/stake/validatorRedelegations', {
            ValidatorAddr: validatorAddr,
        });
    }
    queryValidator(address) {
        return this.client.rpcClient.abciQuery('custom/stake/validator', {
            ValidatorAddr: address,
        });
    }
    queryValidators(page, size = 100) {
        return this.client.rpcClient.abciQuery('custom/stake/validators', {
            Page: page,
            Size: size,
        });
    }
    queryPool() {
        return this.client.rpcClient.abciQuery('custom/stake/pool');
    }
    queryParams() {
        return this.client.rpcClient.abciQuery('custom/stake/parameters');
    }
    // TODO: querySigningInfo
    // TODO: Do we need `Create Validator` function?
    delegate(validatorAddr, amount, baseTx) {
        const delegatorAddr = this.client.keys.show(baseTx.from);
        const msgs = [
            new stake_1.MsgDelegate(delegatorAddr, validatorAddr, amount),
        ];
        return this.client.tx.buildAndSend(msgs, baseTx);
    }
    /**
     * Undelegate from a validator
     * @param validatorAddr
     * @param amount Amount to be unbonded in iris-atto
     */
    unbond(validatorAddr, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const delegatorAddr = this.client.keys.show(baseTx.from);
            const validator = yield this.queryValidator(validatorAddr);
            const shares = Number(amount) *
                (Number(validator.tokens) / Number(validator.delegator_shares));
            const msgs = [
                new stake_1.MsgUndelegate(delegatorAddr, validatorAddr, this.appendZero(String(shares), 10)),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Undelegate from a validator
     * @param validatorAddr
     * @param amount Amount to be unbonded in iris-atto
     */
    redelegate(validatorSrcAddr, validatorDstAddr, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const delegatorAddr = this.client.keys.show(baseTx.from);
            const srcValidator = yield this.queryValidator(validatorSrcAddr);
            const shares = Number(amount) *
                (Number(srcValidator.tokens) / Number(srcValidator.delegator_shares));
            const msgs = [
                new stake_1.MsgRedelegate(delegatorAddr, validatorSrcAddr, validatorDstAddr, this.appendZero(String(shares), 10)),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * TODO: Historical issue, irishub only accepts 10 decimal places due to `sdk.Dec`
     */
    appendZero(num, count) {
        const length = num.length;
        const dotIndex = num.lastIndexOf('.');
        if (dotIndex <= 0) {
            return this.appendZero(num + '.0', count);
        }
        if (length - (dotIndex + 1) < count) {
            return this.appendZero(num + '0', count);
        }
        return num;
    }
}
exports.Stake = Stake;
//# sourceMappingURL=stake.js.map