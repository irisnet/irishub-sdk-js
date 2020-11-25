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
export class MsgDefineService extends Msg {
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
  }) {
    super('irishub/service/MsgDefineService');
    this.value = definition;
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for binding a service definition
 * @hidden
 */
export class MsgBindService extends Msg {
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
  }) {
    super('irishub/service/MsgBindService');
    this.value = binding;
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for updating a service binding
 * @hidden
 */
export class MsgUpdateServiceBinding extends Msg {
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
  }) {
    super('irishub/service/MsgUpdateServiceBinding');
    this.value = binding;
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for disabling a service binding
 * @hidden
 */
export class MsgDisableServiceBinding extends Msg {
  value: {
    service_name: string;
    provider: string;
  };

  constructor(serviceName: string, provider: string) {
    super('irishub/service/MsgDisableService');
    this.value = {
      service_name: serviceName,
      provider,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for enabling a service binding
 * @hidden
 */
export class MsgEnableServiceBinding extends Msg {
  value: {
    service_name: string;
    provider: string;
  };

  constructor(serviceName: string, provider: string) {
    super('irishub/service/MsgEnableService');
    this.value = {
      service_name: serviceName,
      provider,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for invoking a service
 * @hidden
 */
export class MsgRequestService extends Msg {
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
  }) {
    super('irishub/service/MsgRequestService');
    this.value = request;
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * @hidden
 */
export class MsgSetServiceWithdrawAddress extends Msg {
  value: {
    provider: string;
    withdraw_address: string;
  };

  constructor(provider: string, withdrawAddress: string) {
    super('irishub/service/MsgSetWithdrawAddress');
    this.value = {
      provider,
      withdraw_address: withdrawAddress,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for refunding deposit from a service binding
 * @hidden
 */
export class MsgRefundServiceDeposit extends Msg {
  value: {
    service_name: string;
    provider: string;
  };

  constructor(serviceName: string, provider: string) {
    super('irishub/service/MsgRefundServiceDeposit');
    this.value = {
      service_name: serviceName,
      provider,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for resuming a request context
 * @hidden
 */
export class MsgStartRequestContext extends Msg {
  value: {
    request_context_id: string;
    consumer: string;
  };

  constructor(requestContextID: string, consumer: string) {
    super('irishub/service/MsgStartRequestContext');
    this.value = {
      request_context_id: requestContextID,
      consumer,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for pausing a request context
 * @hidden
 */
export class MsgPauseRequestContext extends Msg {
  value: {
    request_context_id: string;
    consumer: string;
  };

  constructor(requestContextID: string, consumer: string) {
    super('irishub/service/MsgPauseRequestContext');
    this.value = {
      request_context_id: requestContextID,
      consumer,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for killing a request context
 * @hidden
 */
export class MsgKillRequestContext extends Msg {
  value: {
    request_context_id: string;
    consumer: string;
  };

  constructor(requestContextID: string, consumer: string) {
    super('irishub/service/MsgKillRequestContext');
    this.value = {
      request_context_id: requestContextID,
      consumer,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for invoking a service
 * @hidden
 */
export class MsgUpdateRequestContext extends Msg {
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
  }) {
    super('irishub/service/MsgUpdateRequestContext');
    this.value = request;
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for withdrawing the fees earned by the provider
 * @hidden
 */
export class MsgWithdrawEarnedFees extends Msg {
  value: {
    provider: string;
  };

  constructor(provider: string) {
    super('irishub/service/MsgWithdrawEarnedFees');
    this.value = {
      provider,
    };
  }

  getSignBytes(): object {
    return this;
  }
}

/**
 * Msg struct for withdrawing the service tax
 * @hidden
 */
export class MsgWithdrawTax extends Msg {
  value: {
    trustee: string;
    dest_address: string;
    amount: Coin[];
  };

  constructor(trustee: string, destAddress: string, amount: Coin[]) {
    super('irishub/service/MsgWithdrawTax');
    this.value = {
      trustee,
      dest_address: destAddress,
      amount,
    };
  }

  getSignBytes(): object {
    return this;
  }
}
