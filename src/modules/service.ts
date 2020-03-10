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
import SdkError from '../errors';
import { Utils } from '../utils';
import { Coin } from '../types';

/**
 * @category Modules
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
   * @returns
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
   * @returns
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
   * @returns
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
   * @returns
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
   * @returns
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
   * @returns
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
   * @returns
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
   * @returns
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
   * @returns
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
   * @returns
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
  ): Promise<types.ResultBroadcastTx> {
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
   */
  async bindService(
    binding: {
      serviceName: string;
      deposit: Coin[];
      pricing: string;
    },
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgBindService({
        service_name: binding.serviceName,
        provider,
        deposit: binding.deposit,
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
   */
  async updateServiceBinding(
    binding: {
      serviceName: string;
      deposit: Coin[];
      pricing: string;
    },
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgUpdateServiceBinding({
        service_name: binding.serviceName,
        provider,
        deposit: binding.deposit,
        pricing: binding.pricing,
      }),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Disable an available service binding
   *
   * @param serviceName Service name
   * @param baseTx
   * @returns
   */
  async disableServiceBinding(
    serviceName: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgDisableServiceBinding(serviceName, provider),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Enable an unavailable service binding
   *
   * @param serviceName Service name
   * @param baseTx
   * @returns
   */
  async enableServiceBinding(
    serviceName: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgEnableServiceBinding(serviceName, provider),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Call a service
   *
   * @hidden
   * @param request Service request
   * @param baseTx
   * @returns
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
  ): Promise<types.ResultBroadcastTx> {
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
   */
  async setWithdrawAddress(
    withdrawAddress: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgSetServiceWithdrawAddress(withdrawAddress, provider),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Refund deposits from the specified service binding
   *
   * @param serviceName Service name
   * @param baseTx
   * @returns
   */
  async refundServiceDeposit(
    serviceName: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgRefundServiceDeposit(serviceName, provider),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Start the specified request context
   *
   * @param requestContextID
   * @param baseTx
   * @returns
   */
  async startRequestContext(
    requestContextID: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const consumer = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgStartRequestContext(requestContextID, consumer),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Pause the specified request context
   *
   * @param requestContextID
   * @param baseTx
   * @returns
   */
  async pauseRequestContext(
    requestContextID: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const consumer = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgPauseRequestContext(requestContextID, consumer),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Kill the specified request context
   *
   * @param requestContextID
   * @param baseTx
   * @returns
   */
  async killRequestContext(
    requestContextID: string,
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
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
  ): Promise<types.ResultBroadcastTx> {
    const consumer = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgUpdateRequestContext({
        request_context_id: request.request_context_id,
        providers: request.providers,
        service_fee_cap: request.service_fee_cap || [],
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
   */
  async withdrawEarnedFees(
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const provider = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [new MsgWithdrawEarnedFees(provider)];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }

  /**
   * Withdraw the service tax to the speicified destination address by the trustee
   *
   * @param destAddress
   * @param baseTx
   * @returns
   */
  async withdrawTax(
    destAddress: string,
    amount: Coin[],
    baseTx: types.BaseTx
  ): Promise<types.ResultBroadcastTx> {
    const trustee = this.client.keys.show(baseTx.from);
    const msgs: types.Msg[] = [
      new MsgWithdrawTax(trustee, destAddress, amount),
    ];

    return this.client.tx.buildAndSend(msgs, baseTx);
  }
}
