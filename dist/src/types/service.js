"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgWithdrawTax = exports.MsgWithdrawEarnedFees = exports.MsgUpdateRequestContext = exports.MsgKillRequestContext = exports.MsgPauseRequestContext = exports.MsgStartRequestContext = exports.MsgRefundServiceDeposit = exports.MsgSetServiceWithdrawAddress = exports.MsgRequestService = exports.MsgEnableServiceBinding = exports.MsgDisableServiceBinding = exports.MsgUpdateServiceBinding = exports.MsgBindService = exports.MsgDefineService = void 0;
const types_1 = require("./types");
/**
 * Msg struct for creating a new service definition
 * @hidden
 */
class MsgDefineService extends types_1.Msg {
    constructor(definition) {
        super('irishub/service/MsgDefineService');
        this.value = definition;
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgDefineService = MsgDefineService;
/**
 * Msg struct for binding a service definition
 * @hidden
 */
class MsgBindService extends types_1.Msg {
    constructor(binding) {
        super('irishub/service/MsgBindService');
        this.value = binding;
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgBindService = MsgBindService;
/**
 * Msg struct for updating a service binding
 * @hidden
 */
class MsgUpdateServiceBinding extends types_1.Msg {
    constructor(binding) {
        super('irishub/service/MsgUpdateServiceBinding');
        this.value = binding;
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgUpdateServiceBinding = MsgUpdateServiceBinding;
/**
 * Msg struct for disabling a service binding
 * @hidden
 */
class MsgDisableServiceBinding extends types_1.Msg {
    constructor(serviceName, provider) {
        super('irishub/service/MsgDisableService');
        this.value = {
            service_name: serviceName,
            provider,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgDisableServiceBinding = MsgDisableServiceBinding;
/**
 * Msg struct for enabling a service binding
 * @hidden
 */
class MsgEnableServiceBinding extends types_1.Msg {
    constructor(serviceName, provider) {
        super('irishub/service/MsgEnableService');
        this.value = {
            service_name: serviceName,
            provider,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgEnableServiceBinding = MsgEnableServiceBinding;
/**
 * Msg struct for invoking a service
 * @hidden
 */
class MsgRequestService extends types_1.Msg {
    constructor(request) {
        super('irishub/service/MsgRequestService');
        this.value = request;
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgRequestService = MsgRequestService;
/**
 * @hidden
 */
class MsgSetServiceWithdrawAddress extends types_1.Msg {
    constructor(provider, withdrawAddress) {
        super('irishub/service/MsgSetWithdrawAddress');
        this.value = {
            provider,
            withdraw_address: withdrawAddress,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgSetServiceWithdrawAddress = MsgSetServiceWithdrawAddress;
/**
 * Msg struct for refunding deposit from a service binding
 * @hidden
 */
class MsgRefundServiceDeposit extends types_1.Msg {
    constructor(serviceName, provider) {
        super('irishub/service/MsgRefundServiceDeposit');
        this.value = {
            service_name: serviceName,
            provider,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgRefundServiceDeposit = MsgRefundServiceDeposit;
/**
 * Msg struct for resuming a request context
 * @hidden
 */
class MsgStartRequestContext extends types_1.Msg {
    constructor(requestContextID, consumer) {
        super('irishub/service/MsgStartRequestContext');
        this.value = {
            request_context_id: requestContextID,
            consumer,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgStartRequestContext = MsgStartRequestContext;
/**
 * Msg struct for pausing a request context
 * @hidden
 */
class MsgPauseRequestContext extends types_1.Msg {
    constructor(requestContextID, consumer) {
        super('irishub/service/MsgPauseRequestContext');
        this.value = {
            request_context_id: requestContextID,
            consumer,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgPauseRequestContext = MsgPauseRequestContext;
/**
 * Msg struct for killing a request context
 * @hidden
 */
class MsgKillRequestContext extends types_1.Msg {
    constructor(requestContextID, consumer) {
        super('irishub/service/MsgKillRequestContext');
        this.value = {
            request_context_id: requestContextID,
            consumer,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgKillRequestContext = MsgKillRequestContext;
/**
 * Msg struct for invoking a service
 * @hidden
 */
class MsgUpdateRequestContext extends types_1.Msg {
    constructor(request) {
        super('irishub/service/MsgUpdateRequestContext');
        this.value = request;
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgUpdateRequestContext = MsgUpdateRequestContext;
/**
 * Msg struct for withdrawing the fees earned by the provider
 * @hidden
 */
class MsgWithdrawEarnedFees extends types_1.Msg {
    constructor(provider) {
        super('irishub/service/MsgWithdrawEarnedFees');
        this.value = {
            provider,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgWithdrawEarnedFees = MsgWithdrawEarnedFees;
/**
 * Msg struct for withdrawing the service tax
 * @hidden
 */
class MsgWithdrawTax extends types_1.Msg {
    constructor(trustee, destAddress, amount) {
        super('irishub/service/MsgWithdrawTax');
        this.value = {
            trustee,
            dest_address: destAddress,
            amount,
        };
    }
    getSignBytes() {
        return this;
    }
}
exports.MsgWithdrawTax = MsgWithdrawTax;
//# sourceMappingURL=service.js.map