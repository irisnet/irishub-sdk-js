import { Msg } from './types';
/**
 * Msg struct for creating a new service definition
 * @hidden
 */
export class MsgDefineService extends Msg {
    constructor(definition) {
        super('irishub/service/MsgDefineService');
        this.value = definition;
    }
    getSignBytes() {
        return this;
    }
}
/**
 * Msg struct for binding a service definition
 * @hidden
 */
export class MsgBindService extends Msg {
    constructor(binding) {
        super('irishub/service/MsgBindService');
        this.value = binding;
    }
    getSignBytes() {
        return this;
    }
}
/**
 * Msg struct for updating a service binding
 * @hidden
 */
export class MsgUpdateServiceBinding extends Msg {
    constructor(binding) {
        super('irishub/service/MsgUpdateServiceBinding');
        this.value = binding;
    }
    getSignBytes() {
        return this;
    }
}
/**
 * Msg struct for disabling a service binding
 * @hidden
 */
export class MsgDisableServiceBinding extends Msg {
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
/**
 * Msg struct for enabling a service binding
 * @hidden
 */
export class MsgEnableServiceBinding extends Msg {
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
/**
 * Msg struct for invoking a service
 * @hidden
 */
export class MsgRequestService extends Msg {
    constructor(request) {
        super('irishub/service/MsgRequestService');
        this.value = request;
    }
    getSignBytes() {
        return this;
    }
}
/**
 * @hidden
 */
export class MsgSetServiceWithdrawAddress extends Msg {
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
/**
 * Msg struct for refunding deposit from a service binding
 * @hidden
 */
export class MsgRefundServiceDeposit extends Msg {
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
/**
 * Msg struct for resuming a request context
 * @hidden
 */
export class MsgStartRequestContext extends Msg {
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
/**
 * Msg struct for pausing a request context
 * @hidden
 */
export class MsgPauseRequestContext extends Msg {
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
/**
 * Msg struct for killing a request context
 * @hidden
 */
export class MsgKillRequestContext extends Msg {
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
/**
 * Msg struct for invoking a service
 * @hidden
 */
export class MsgUpdateRequestContext extends Msg {
    constructor(request) {
        super('irishub/service/MsgUpdateRequestContext');
        this.value = request;
    }
    getSignBytes() {
        return this;
    }
}
/**
 * Msg struct for withdrawing the fees earned by the provider
 * @hidden
 */
export class MsgWithdrawEarnedFees extends Msg {
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
/**
 * Msg struct for withdrawing the service tax
 * @hidden
 */
export class MsgWithdrawTax extends Msg {
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
//# sourceMappingURL=service.js.map