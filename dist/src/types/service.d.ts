import { Coin, Msg } from './types';
export interface ServiceDefinition {
    name: string;
    description: string;
    tags: string[];
    author: string;
    author_description: string;
    schemas: string;
}
export interface ServiceBinding {
    service_name: string;
    provider: string;
    deposit: Coin[];
    pricing: string;
    available: boolean;
    disabled_time: string;
}
export interface ServiceRequest {
    service_name: string;
    provider: string;
    consumer: string;
    input: string;
    service_fee: Coin[];
    super_mode: boolean;
    request_height: string;
    expiration_height: string;
    request_context_id: string;
    request_context_batch_counter: string;
}
export interface ServiceResponse {
    provider: string;
    consumer: string;
    output: string;
    error: string;
    request_context_id: string;
    request_context_batch_counter: string;
}
export interface ServiceRequestContext {
    service_name: string;
    providers: string[];
    consumer: string;
    input: string;
    service_fee_cap: Coin[];
    timeout: string;
    super_mode: boolean;
    repeated: boolean;
    repeated_frequency: string;
    repeated_total: string;
    batch_counter: string;
    batch_request_count: number;
    batch_response_count: number;
    batch_state: string;
    state: string;
    response_threshold: number;
    module_name: string;
}
export interface ServiceFee {
    address: string;
    coins: Coin[];
}
/**
 * Msg struct for creating a new service definition
 * @hidden
 */
export declare class MsgDefineService implements Msg {
    type: string;
    value: {
        name: string;
        description?: string;
        tags?: string[];
        author: string;
        author_description?: string;
        schemas: string;
    };
    constructor(definition: {
        name: string;
        author: string;
        schemas: string;
        description?: string;
        tags?: string[];
        author_description?: string;
    });
    getSignBytes(): object;
}
/**
 * Msg struct for binding a service definition
 * @hidden
 */
export declare class MsgBindService implements Msg {
    type: string;
    value: {
        service_name: string;
        provider: string;
        deposit: Coin[];
        pricing: string;
    };
    constructor(binding: {
        service_name: string;
        provider: string;
        deposit: Coin[];
        pricing: string;
    });
    getSignBytes(): object;
}
/**
 * Msg struct for updating a service binding
 * @hidden
 */
export declare class MsgUpdateServiceBinding implements Msg {
    type: string;
    value: {
        service_name: string;
        provider: string;
        deposit: Coin[];
        pricing: string;
    };
    constructor(binding: {
        service_name: string;
        provider: string;
        deposit: Coin[];
        pricing: string;
    });
    getSignBytes(): object;
}
/**
 * Msg struct for disabling a service binding
 * @hidden
 */
export declare class MsgDisableServiceBinding implements Msg {
    type: string;
    value: {
        service_name: string;
        provider: string;
    };
    constructor(serviceName: string, provider: string);
    getSignBytes(): object;
}
/**
 * Msg struct for enabling a service binding
 * @hidden
 */
export declare class MsgEnableServiceBinding implements Msg {
    type: string;
    value: {
        service_name: string;
        provider: string;
    };
    constructor(serviceName: string, provider: string);
    getSignBytes(): object;
}
/**
 * Msg struct for invoking a service
 * @hidden
 */
export declare class MsgRequestService implements Msg {
    type: string;
    value: {
        service_name: string;
        providers: string[];
        consumer: string;
        input: string;
        service_fee_cap: Coin[];
        timeout: number;
        super_mode: boolean;
        repeated: boolean;
        repeated_frequency: number;
        repeated_total: number;
    };
    constructor(request: {
        service_name: string;
        providers: string[];
        consumer: string;
        input: string;
        service_fee_cap: Coin[];
        timeout: number;
        super_mode: boolean;
        repeated: boolean;
        repeated_frequency: number;
        repeated_total: number;
    });
    getSignBytes(): object;
}
/**
 * @hidden
 */
export declare class MsgSetServiceWithdrawAddress implements Msg {
    type: string;
    value: {
        provider: string;
        withdraw_address: string;
    };
    constructor(provider: string, withdrawAddress: string);
    getSignBytes(): object;
}
/**
 * Msg struct for refunding deposit from a service binding
 * @hidden
 */
export declare class MsgRefundServiceDeposit implements Msg {
    type: string;
    value: {
        service_name: string;
        provider: string;
    };
    constructor(serviceName: string, provider: string);
    getSignBytes(): object;
}
/**
 * Msg struct for resuming a request context
 * @hidden
 */
export declare class MsgStartRequestContext implements Msg {
    type: string;
    value: {
        request_context_id: string;
        consumer: string;
    };
    constructor(requestContextID: string, consumer: string);
    getSignBytes(): object;
}
/**
 * Msg struct for pausing a request context
 * @hidden
 */
export declare class MsgPauseRequestContext implements Msg {
    type: string;
    value: {
        request_context_id: string;
        consumer: string;
    };
    constructor(requestContextID: string, consumer: string);
    getSignBytes(): object;
}
/**
 * Msg struct for killing a request context
 * @hidden
 */
export declare class MsgKillRequestContext implements Msg {
    type: string;
    value: {
        request_context_id: string;
        consumer: string;
    };
    constructor(requestContextID: string, consumer: string);
    getSignBytes(): object;
}
/**
 * Msg struct for invoking a service
 * @hidden
 */
export declare class MsgUpdateRequestContext implements Msg {
    type: string;
    value: {
        request_context_id: string;
        providers: string[];
        service_fee_cap: Coin[];
        timeout: number;
        repeated_frequency: number;
        repeated_total: number;
        consumer: string;
    };
    constructor(request: {
        request_context_id: string;
        providers: string[];
        service_fee_cap: Coin[];
        timeout: number;
        repeated_frequency: number;
        repeated_total: number;
        consumer: string;
    });
    getSignBytes(): object;
}
/**
 * Msg struct for withdrawing the fees earned by the provider
 * @hidden
 */
export declare class MsgWithdrawEarnedFees implements Msg {
    type: string;
    value: {
        provider: string;
    };
    constructor(provider: string);
    getSignBytes(): object;
}
/**
 * Msg struct for withdrawing the service tax
 * @hidden
 */
export declare class MsgWithdrawTax implements Msg {
    type: string;
    value: {
        trustee: string;
        dest_address: string;
        amount: Coin[];
    };
    constructor(trustee: string, destAddress: string, amount: Coin[]);
    getSignBytes(): object;
}
