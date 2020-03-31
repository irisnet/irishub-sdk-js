import { Client } from '../client';
import * as types from '../types';
import { Coin } from '../types';
/**
 * @todo docs
 * @category Modules
 * @since v0.17
 */
export declare class Service {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Query a service definition
     *
     * @param serviceName The unique service name
     * @returns
     * @since v0.17
     */
    queryDefinition(serviceName: string): Promise<types.ServiceDefinition>;
    /**
     * Query a service binding
     *
     * @param serviceName The unique service name
     * @param provider Bech32 provider address
     * @returns
     * @since v0.17
     */
    queryBinding(serviceName: string, provider: string): Promise<types.ServiceBinding>;
    /**
     * Query service bindings by service name
     *
     * @param serviceName The unique service name
     * @returns
     * @since v0.17
     */
    queryBindings(serviceName: string): Promise<types.ServiceBinding[]>;
    /**
     * Query a service request
     *
     * @param requestID The ID of the request
     * @returns
     * @since v0.17
     */
    queryRequest(requestID: string): Promise<types.ServiceRequest>;
    /**
     * Query all requests of a specified service and provider
     *
     * @param serviceName The unique service name
     * @param provider Bech32 provider address
     * @returns
     * @since v0.17
     */
    queryRequests(serviceName: string, provider: string): Promise<types.ServiceRequest>;
    /**
     * Query all requests of a specified request context ID and batch counter
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param batchCounter The sequence number of the request context
     * @returns
     * @since v0.17
     */
    queryRequestsByReqCtx(requestContextID: string, batchCounter: number): Promise<types.ServiceRequest[]>;
    /**
     * Query a request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @returns
     * @since v0.17
     */
    queryRequestContext(requestContextID: string): Promise<types.ServiceRequestContext>;
    /**
     * Query a service response
     *
     * @param requestID The ID of the request
     * @returns
     * @since v0.17
     */
    queryResponse(requestID: string): Promise<types.ServiceResponse>;
    /**
     * Query service responses
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param batchCounter The sequence number of the request context
     * @returns
     * @since v0.17
     */
    queryResponses(requestContextID: string, batchCounter: number): Promise<types.ServiceResponse>;
    /**
     * Query service fee
     *
     * @param provider Bech32 provider address
     * @returns
     * @since v0.17
     */
    queryFees(provider: string): Promise<types.ServiceFee>;
    /**
     * Creating a new service definition
     *
     * @param definition Service definition
     * @param baseTx
     * @returns
     * @since v0.17
     */
    defineService(definition: {
        name: string;
        schemas: string;
        description?: string;
        tags?: string[];
        author_description?: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Bind an existing service definition
     *
     * @param binding Service binding
     * @param baseTx
     * @returns
     * @since v0.17
     */
    bindService(binding: {
        serviceName: string;
        deposit: Coin[];
        pricing: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Update the specified service binding
     *
     * @param binding Service binding
     * @param baseTx
     * @returns
     * @since v0.17
     */
    updateServiceBinding(binding: {
        serviceName: string;
        deposit: Coin[];
        pricing: string;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Disable an available service binding
     *
     * @param serviceName The unique name of the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    disableServiceBinding(serviceName: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Enable an unavailable service binding
     *
     * ** Not Supported **
     * @param serviceName The unique name of the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    enableServiceBinding(serviceName: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Initiate a service call
     *
     * @hidden
     * @param request Service request
     * @param baseTx
     * @returns
     * @since v0.17
     */
    invokeService(request: {
        serviceName: string;
        providers: string[];
        input: string;
        serviceFeeCap: Coin[];
        timeout: number;
        superMode: boolean;
        repeated: boolean;
        repeatedFrequency: number;
        repeatedTotal: number;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Set a withdrawal address for a provider
     *
     * @param withdrawAddress Bech32 account address
     * @param baseTx
     * @returns
     * @since v0.17
     */
    setWithdrawAddress(withdrawAddress: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Refund deposits from the specified service binding
     *
     * @param serviceName The unique name of the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    refundServiceDeposit(serviceName: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Start the specified request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    startRequestContext(requestContextID: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Pause the specified request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    pauseRequestContext(requestContextID: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Kill the specified request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    killRequestContext(requestContextID: string, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Update the specified request context
     *
     * @param request Params to be updated
     * @param baseTx
     * @returns
     * @since v0.17
     */
    updateRequestContext(request: {
        request_context_id: string;
        providers: string[];
        service_fee_cap?: Coin[];
        timeout?: number;
        repeated_frequency?: number;
        repeated_total?: number;
    }, baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Withdraw the earned fees to the specified provider
     *
     * @param baseTx
     * @returns
     * @since v0.17
     */
    withdrawEarnedFees(baseTx: types.BaseTx): Promise<types.TxResult>;
    /**
     * Withdraw the service tax to the speicified destination address by the trustee
     *
     * @param destAddress The speicified destination address to receive the service tax
     * @param baseTx
     * @returns
     * @since v0.17
     */
    withdrawTax(destAddress: string, amount: Coin[], baseTx: types.BaseTx): Promise<types.TxResult>;
}
