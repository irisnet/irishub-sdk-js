import { Client } from '../client';
import * as types from '../types';
import { MsgUnjail } from '../types/slashing';
import SdkError from '../errors';
import { Utils } from '../utils';

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

}
