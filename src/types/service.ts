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
export class MsgDefineService implements Msg {
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
  }) {
    this.type = 'irishub/service/MsgDefineService';
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
export class MsgBindService implements Msg {
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
  }) {
    this.type = 'irishub/service/MsgBindService';
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
export class MsgUpdateServiceBinding implements Msg {
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
  }) {
    this.type = 'irishub/service/MsgUpdateServiceBinding';
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
export class MsgDisableServiceBinding implements Msg {
  type: string;
  value: {
    service_name: string;
    provider: string;
  };

  constructor(serviceName: string, provider: string) {
    this.type = 'irishub/service/MsgDisableService';
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
export class MsgEnableServiceBinding implements Msg {
  type: string;
  value: {
    service_name: string;
    provider: string;
  };

  constructor(serviceName: string, provider: string) {
    this.type = 'irishub/service/MsgEnableService';
    this.value = {
      service_name: serviceName,
      provider,
    };
  }

  getSignBytes(): object {
    return this;
  }
}
