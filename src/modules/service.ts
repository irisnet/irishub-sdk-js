import { Client } from '../client';
import * as types from '../types';
import {
  MsgDefineService,
  MsgBindService,
  MsgUpdateServiceBinding,
  MsgDisableServiceBinding,
  MsgEnableServiceBinding,
  MsgSetServiceWithdrawAddress,
  MsgRefundServiceDeposit,
  MsgStartRequestContext,
  MsgPauseRequestContext,
  MsgKillRequestContext,
  MsgUpdateRequestContext,
  MsgWithdrawEarnedFees,
  MsgWithdrawTax,
} from '../types/service';
import { SdkError } from '../errors';
import { Utils } from '../utils';
import { Coin } from '../types';

/**
 * @todo docs
 * @category Modules
 * @since v0.17
 */
export class Service {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query a service definition
   *
   * @param serviceName The unique service name
   * @returns
   * @since v0.17
   */
  queryDefinition(serviceName: string): Promise<types.ServiceDefinition> {
    return this.client.rpcClient.abciQuery<types.ServiceDefinition>(
      'custom/service/definition',
      {
        ServiceName: serviceName,
      }
    );
  }

  /**
   * Query a service binding
   *
   * @param serviceName The unique service name
   * @param provider Bech32 provider address
   * @returns
   * @since v0.17
   */
  queryBinding(
    serviceName: string,
    provider: string
  ): Promise<types.ServiceBinding> {
    return this.client.rpcClient.abciQuery<types.ServiceBinding>(
      'custom/service/binding',
      {
        ServiceName: serviceName,
        Provider: provider,
      }
    );
  }

  /**
   * Query service bindings by service name
   *
   * @param serviceName The unique service name
   * @returns
   * @since v0.17
   */
  queryBindings(serviceName: string): Promise<types.ServiceBinding[]> {
    return this.client.rpcClient.abciQuery<types.ServiceBinding[]>(
      'custom/service/bindings',
      {
        ServiceName: serviceName,
      }
    );
  }

  /**
   * Query a service request
   *
   * @param requestID The ID of the request
   * @returns
   * @since v0.17
   */
  queryRequest(requestID: string): Promise<types.ServiceRequest> {
    return this.client.rpcClient.abciQuery<types.ServiceRequest>(
      'custom/service/request',
      {
        RequestID: requestID,
      }
    );
  }

  /**
   * Query all requests of a specified service and provider
   *
   * @param serviceName The unique service name
   * @param provider Bech32 provider address
   * @returns
   * @since v0.17
   */
  queryRequests(
    serviceName: string,
    provider: string
  ): Promise<types.ServiceRequest> {
    return this.client.rpcClient.abciQuery<types.ServiceRequest>(
      'custom/service/request',
      {
        ServiceName: serviceName,
        Provider: provider,
      }
    );
  }

  /**
   * Query all requests of a specified request context ID and batch counter
   *
   * @param requestContextID The context ID of the service invocation which is returned when calling the service
   * @param batchCounter The sequence number of the request context
   * @returns
   * @since v0.17
   */
  queryRequestsByReqCtx(
    requestContextID: string,
    batchCounter: number
  ): Promise<types.ServiceRequest[]> {
    return this.client.rpcClient.abciQuery<types.ServiceRequest[]>(
      'custom/service/requests_by_ctx',
      {
        RequestContextID: Utils.str2ab(requestContextID),
        BatchCounter: batchCounter,
      }
    );
  }

  /**
   * Query a request context
   *
   * @param requestContextID The context ID of the service invocation which is returned when calling the service
   * @returns
   * @since v0.17
   */
  queryRequestContext(
    requestContextID: string
  ): Promise<types.ServiceRequestContext> {
    return this.client.rpcClient.abciQuery<types.ServiceRequestContext>(
      'custom/service/context',
      {
        RequestContextID: Utils.str2ab(requestContextID),
      }
    );
  }

  /**
   * Query a service response
   *
   * @param requestID The ID of the request
   * @returns
   * @since v0.17
   */
  queryResponse(requestID: string): Promise<types.ServiceResponse> {
    return this.client.rpcClient.abciQuery<types.ServiceResponse>(
      'custom/service/response',
      {
        RequestID: requestID,
      }
    );
  }

  /**
   * Query service responses
   *
   * @param requestContextID The context ID of the service invocation which is returned when calling the service
   * @param batchCounter The sequence number of the request context
   * @returns
   * @since v0.17
   */
  queryResponses(
    requestContextID: string,
    batchCounter: number
  ): Promise<types.ServiceResponse> {
    return this.client.rpcClient.abciQuery<types.ServiceResponse>(
      'custom/service/responses',
      {
        RequestContextID: Utils.str2ab(requestContextID),
        BatchCounter: batchCounter,
      }
    );
  }

  /**
   * Query service fee
   *
   * @param provider Bech32 provider address
   * @returns
   * @since v0.17
   */
  queryFees(provider: string): Promise<types.ServiceFee> {
    return this.client.rpcClient.abciQuery<types.ServiceFee>(
      'custom/service/fees',
      {
        Address: provider,
      }
    );
  }

  /**
   * Creating a new service definition
   *
   * @param definition Service definition
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async defineService(
    definition: {
      name: string;
      schemas: string;
      description?: string;
      tags?: string[];
      author_description?: string;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const author = this.client.keys.show(baseTx.from);

    const msgs: types.Msg[] = [
      new MsgDefineService({
        name: definition.name,
        author,
        schemas: definition.schemas,
        description: definition.description,
        tags: definition.tags,
        author_description: definition.author_description,
      }),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Bind an existing service definition
   *
   * @param binding Service binding
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async bindService(
    binding: {
      serviceName: string;
      deposit: Coin[];
      pricing: string;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const provider = this.client.keys.show(baseTx.from);
    const deposit = await this.client.utils.toMinCoins(binding.deposit);
    const msgs: types.Msg[] = [
      new MsgBindService({
        service_name: binding.serviceName,
        provider,
        deposit,
        pricing: binding.pricing,
      }),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Update the specified service binding
   *
   * @param binding Service binding
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async updateServiceBinding(
    binding: {
      serviceName: string;
      deposit: Coin[];
      pricing: string;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const provider = this.client.keys.show(baseTx.from);
    const deposit = await this.client.utils.toMinCoins(binding.deposit);
    const msgs: types.Msg[] = [
      new MsgUpdateServiceBinding({
        service_name: binding.serviceName,
        provider,
        deposit,
        pricing: binding.pricing,
      }),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Disable an available service binding
   *
   * @param serviceName The unique name of the service
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async disableServiceBinding(
    serviceName: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgDisableServiceBinding(serviceName, provider),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Enable an unavailable service binding
   *
   * ** Not Supported **
   * @param serviceName The unique name of the service
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async enableServiceBinding(
    serviceName: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgEnableServiceBinding(serviceName, provider),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Initiate a service call
   *
   * @hidden
   * @param request Service request
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async invokeService(
    request: {
      serviceName: string;
      providers: string[];
      input: string;
      serviceFeeCap: Coin[];
      timeout: number;
      superMode: boolean;
      repeated: boolean;
      repeatedFrequency: number;
      repeatedTotal: number;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    // const consumer = this.client.keys.show(baseTx.from);
    // const msgs: types.Msg[] = [
    //   new MsgRequestService({
    //     service_name: request.serviceName,
    //     providers: request.providers,
    //     consumer,
    //     input: request.input,
    //     service_fee_cap: request.serviceFeeCap,
    //     timeout: request.timeout,
    //     super_mode: request.superMode,
    //     repeated: request.repeated,
    //     repeated_frequency: request.repeatedFrequency,
    //     repeated_total: request.repeatedTotal,
    //   }),
    // ];

    // return this.client.tx.buildAndSend(msgs, baseTx);
    throw new SdkError('Not supported');
  }

  /**
   * Set a withdrawal address for a provider
   *
   * @param withdrawAddress Bech32 account address
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async setWithdrawAddress(
    withdrawAddress: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgSetServiceWithdrawAddress(withdrawAddress, provider),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Refund deposits from the specified service binding
   *
   * @param serviceName The unique name of the service
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async refundServiceDeposit(
    serviceName: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgRefundServiceDeposit(serviceName, provider),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Start the specified request context
   *
   * @param requestContextID The context ID of the service invocation which is returned when calling the service
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async startRequestContext(
    requestContextID: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const consumer = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgStartRequestContext(requestContextID, consumer),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Pause the specified request context
   *
   * @param requestContextID The context ID of the service invocation which is returned when calling the service
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async pauseRequestContext(
    requestContextID: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const consumer = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgPauseRequestContext(requestContextID, consumer),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Kill the specified request context
   *
   * @param requestContextID The context ID of the service invocation which is returned when calling the service
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async killRequestContext(
    requestContextID: string,
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const consumer = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgKillRequestContext(requestContextID, consumer),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Update the specified request context
   *
   * @param request Params to be updated
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async updateRequestContext(
    request: {
      request_context_id: string;
      providers: string[];
      service_fee_cap?: Coin[];
      timeout?: number;
      repeated_frequency?: number;
      repeated_total?: number;
    },
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const consumer = this.client.keys.show(baseTx.from);
    const serviceFeeCap = request.service_fee_cap
      ? await this.client.utils.toMinCoins(request.service_fee_cap)
      : [];
    const msgs: types.Msg[] = [
      new MsgUpdateRequestContext({
        request_context_id: request.request_context_id,
        providers: request.providers,
        service_fee_cap: serviceFeeCap,
        timeout: request.timeout || 0,
        repeated_frequency: request.repeated_frequency || 0,
        repeated_total: request.repeated_total || 0,
        consumer,
      }),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Withdraw the earned fees to the specified provider
   *
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async withdrawEarnedFees(baseTx: types.BaseTx): Promise<types.TxResult> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgWithdrawEarnedFees(provider)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Withdraw the service tax to the speicified destination address by the trustee
   *
   * @param destAddress The speicified destination address to receive the service tax
   * @param baseTx
   * @returns
   * @since v0.17
   */
  async withdrawTax(
    destAddress: string,
    amount: Coin[],
    baseTx: types.BaseTx
  ): Promise<types.TxResult> {
    const trustee = this.client.keys.show(baseTx.from);
    const coins = await this.client.utils.toMinCoins(amount);
    const msgs: types.Msg[] = [new MsgWithdrawTax(trustee, destAddress, coins)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  // Service listeners not supported in browser
}
