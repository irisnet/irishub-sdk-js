"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const service_1 = require("../types/service");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
/**
 * @todo docs
 * @category Modules
 * @since v0.17
 */
class Service {
    /** @hidden */
    constructor(client) {
        this.client = client;
    }
    /**
     * Query a service definition
     *
     * @param serviceName The unique service name
     * @returns
     * @since v0.17
     */
    queryDefinition(serviceName) {
        return this.client.rpcClient.abciQuery('custom/service/definition', {
            ServiceName: serviceName,
        });
    }
    /**
     * Query a service binding
     *
     * @param serviceName The unique service name
     * @param provider Bech32 provider address
     * @returns
     * @since v0.17
     */
    queryBinding(serviceName, provider) {
        return this.client.rpcClient.abciQuery('custom/service/binding', {
            ServiceName: serviceName,
            Provider: provider,
        });
    }
    /**
     * Query service bindings by service name
     *
     * @param serviceName The unique service name
     * @returns
     * @since v0.17
     */
    queryBindings(serviceName) {
        return this.client.rpcClient.abciQuery('custom/service/bindings', {
            ServiceName: serviceName,
        });
    }
    /**
     * Query a service request
     *
     * @param requestID The ID of the request
     * @returns
     * @since v0.17
     */
    queryRequest(requestID) {
        return this.client.rpcClient.abciQuery('custom/service/request', {
            RequestID: requestID,
        });
    }
    /**
     * Query all requests of a specified service and provider
     *
     * @param serviceName The unique service name
     * @param provider Bech32 provider address
     * @returns
     * @since v0.17
     */
    queryRequests(serviceName, provider) {
        return this.client.rpcClient.abciQuery('custom/service/request', {
            ServiceName: serviceName,
            Provider: provider,
        });
    }
    /**
     * Query all requests of a specified request context ID and batch counter
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param batchCounter The sequence number of the request context
     * @returns
     * @since v0.17
     */
    queryRequestsByReqCtx(requestContextID, batchCounter) {
        return this.client.rpcClient.abciQuery('custom/service/requests_by_ctx', {
            RequestContextID: utils_1.Utils.str2ab(requestContextID),
            BatchCounter: batchCounter,
        });
    }
    /**
     * Query a request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @returns
     * @since v0.17
     */
    queryRequestContext(requestContextID) {
        return this.client.rpcClient.abciQuery('custom/service/context', {
            RequestContextID: utils_1.Utils.str2ab(requestContextID),
        });
    }
    /**
     * Query a service response
     *
     * @param requestID The ID of the request
     * @returns
     * @since v0.17
     */
    queryResponse(requestID) {
        return this.client.rpcClient.abciQuery('custom/service/response', {
            RequestID: requestID,
        });
    }
    /**
     * Query service responses
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param batchCounter The sequence number of the request context
     * @returns
     * @since v0.17
     */
    queryResponses(requestContextID, batchCounter) {
        return this.client.rpcClient.abciQuery('custom/service/responses', {
            RequestContextID: utils_1.Utils.str2ab(requestContextID),
            BatchCounter: batchCounter,
        });
    }
    /**
     * Query service fee
     *
     * @param provider Bech32 provider address
     * @returns
     * @since v0.17
     */
    queryFees(provider) {
        return this.client.rpcClient.abciQuery('custom/service/fees', {
            Address: provider,
        });
    }
    /**
     * Creating a new service definition
     *
     * @param definition Service definition
     * @param baseTx
     * @returns
     * @since v0.17
     */
    defineService(definition, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = this.client.keys.show(baseTx.from);
            const msgs = [
                new service_1.MsgDefineService({
                    name: definition.name,
                    author,
                    schemas: definition.schemas,
                    description: definition.description,
                    tags: definition.tags,
                    author_description: definition.author_description,
                }),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Bind an existing service definition
     *
     * @param binding Service binding
     * @param baseTx
     * @returns
     * @since v0.17
     */
    bindService(binding, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.client.keys.show(baseTx.from);
            const deposit = yield this.client.utils.toMinCoins(binding.deposit);
            const msgs = [
                new service_1.MsgBindService({
                    service_name: binding.serviceName,
                    provider,
                    deposit,
                    pricing: binding.pricing,
                }),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Update the specified service binding
     *
     * @param binding Service binding
     * @param baseTx
     * @returns
     * @since v0.17
     */
    updateServiceBinding(binding, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.client.keys.show(baseTx.from);
            const deposit = yield this.client.utils.toMinCoins(binding.deposit);
            const msgs = [
                new service_1.MsgUpdateServiceBinding({
                    service_name: binding.serviceName,
                    provider,
                    deposit,
                    pricing: binding.pricing,
                }),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Disable an available service binding
     *
     * @param serviceName The unique name of the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    disableServiceBinding(serviceName, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.client.keys.show(baseTx.from);
            const msgs = [
                new service_1.MsgDisableServiceBinding(serviceName, provider),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
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
    enableServiceBinding(serviceName, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.client.keys.show(baseTx.from);
            const msgs = [
                new service_1.MsgEnableServiceBinding(serviceName, provider),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
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
    invokeService(request, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
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
            throw new errors_1.SdkError('Not supported');
        });
    }
    /**
     * Set a withdrawal address for a provider
     *
     * @param withdrawAddress Bech32 account address
     * @param baseTx
     * @returns
     * @since v0.17
     */
    setWithdrawAddress(withdrawAddress, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.client.keys.show(baseTx.from);
            const msgs = [
                new service_1.MsgSetServiceWithdrawAddress(withdrawAddress, provider),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Refund deposits from the specified service binding
     *
     * @param serviceName The unique name of the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    refundServiceDeposit(serviceName, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.client.keys.show(baseTx.from);
            const msgs = [
                new service_1.MsgRefundServiceDeposit(serviceName, provider),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Start the specified request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    startRequestContext(requestContextID, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const consumer = this.client.keys.show(baseTx.from);
            const msgs = [
                new service_1.MsgStartRequestContext(requestContextID, consumer),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Pause the specified request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    pauseRequestContext(requestContextID, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const consumer = this.client.keys.show(baseTx.from);
            const msgs = [
                new service_1.MsgPauseRequestContext(requestContextID, consumer),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Kill the specified request context
     *
     * @param requestContextID The context ID of the service invocation which is returned when calling the service
     * @param baseTx
     * @returns
     * @since v0.17
     */
    killRequestContext(requestContextID, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const consumer = this.client.keys.show(baseTx.from);
            const msgs = [
                new service_1.MsgKillRequestContext(requestContextID, consumer),
            ];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Update the specified request context
     *
     * @param request Params to be updated
     * @param baseTx
     * @returns
     * @since v0.17
     */
    updateRequestContext(request, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const consumer = this.client.keys.show(baseTx.from);
            const serviceFeeCap = request.service_fee_cap
                ? yield this.client.utils.toMinCoins(request.service_fee_cap)
                : [];
            const msgs = [
                new service_1.MsgUpdateRequestContext({
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
        });
    }
    /**
     * Withdraw the earned fees to the specified provider
     *
     * @param baseTx
     * @returns
     * @since v0.17
     */
    withdrawEarnedFees(baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.client.keys.show(baseTx.from);
            const msgs = [new service_1.MsgWithdrawEarnedFees(provider)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
    /**
     * Withdraw the service tax to the speicified destination address by the trustee
     *
     * @param destAddress The speicified destination address to receive the service tax
     * @param baseTx
     * @returns
     * @since v0.17
     */
    withdrawTax(destAddress, amount, baseTx) {
        return __awaiter(this, void 0, void 0, function* () {
            const trustee = this.client.keys.show(baseTx.from);
            const coins = yield this.client.utils.toMinCoins(amount);
            const msgs = [new service_1.MsgWithdrawTax(trustee, destAddress, coins)];
            return this.client.tx.buildAndSend(msgs, baseTx);
        });
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map