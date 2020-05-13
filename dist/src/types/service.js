"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgWithdrawTax = exports.MsgWithdrawEarnedFees = exports.MsgUpdateRequestContext = exports.MsgKillRequestContext = exports.MsgPauseRequestContext = exports.MsgStartRequestContext = exports.MsgRefundServiceDeposit = exports.MsgSetServiceWithdrawAddress = exports.MsgRequestService = exports.MsgEnableServiceBinding = exports.MsgDisableServiceBinding = exports.MsgUpdateServiceBinding = exports.MsgBindService = exports.MsgDefineService = void 0;
/**
 * Msg struct for creating a new service definition
 * @hidden
 */
class MsgDefineService {
    constructor(definition) {
        this.type = 'irishub/service/MsgDefineService';
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
class MsgBindService {
    constructor(binding) {
        this.type = 'irishub/service/MsgBindService';
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
class MsgUpdateServiceBinding {
    constructor(binding) {
        this.type = 'irishub/service/MsgUpdateServiceBinding';
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
class MsgDisableServiceBinding {
    constructor(serviceName, provider) {
        this.type = 'irishub/service/MsgDisableService';
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
class MsgEnableServiceBinding {
    constructor(serviceName, provider) {
        this.type = 'irishub/service/MsgEnableService';
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
class MsgRequestService {
    constructor(request) {
        this.type = 'irishub/service/MsgRequestService';
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
class MsgSetServiceWithdrawAddress {
    constructor(provider, withdrawAddress) {
        this.type = 'irishub/service/MsgSetWithdrawAddress';
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
class MsgRefundServiceDeposit {
    constructor(serviceName, provider) {
        this.type = 'irishub/service/MsgRefundServiceDeposit';
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
class MsgStartRequestContext {
    constructor(requestContextID, consumer) {
        this.type = 'irishub/service/MsgStartRequestContext';
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
class MsgPauseRequestContext {
    constructor(requestContextID, consumer) {
        this.type = 'irishub/service/MsgPauseRequestContext';
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
class MsgKillRequestContext {
    constructor(requestContextID, consumer) {
        this.type = 'irishub/service/MsgKillRequestContext';
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
class MsgUpdateRequestContext {
    constructor(request) {
        this.type = 'irishub/service/MsgUpdateRequestContext';
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
class MsgWithdrawEarnedFees {
    constructor(provider) {
        this.type = 'irishub/service/MsgWithdrawEarnedFees';
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
class MsgWithdrawTax {
    constructor(trustee, destAddress, amount) {
        this.type = 'irishub/service/MsgWithdrawTax';
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