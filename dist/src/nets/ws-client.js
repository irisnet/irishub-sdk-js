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
exports.WsClient = void 0;
const types = require("../types");
const EventEmitter = require("events");
const Websocket = require("isomorphic-ws");
const errors_1 = require("../errors");
/**
 * IRISHub Websocket Client
 * @since v0.17
 */
class WsClient {
    constructor(url) {
        this.url = url;
        this.eventEmitter = new EventEmitter();
    }
    /**
     * Initialize ws client
     * @since v0.17
     */
    connect() {
        this.ws = new Websocket(this.url + '/websocket');
        if (!this.ws) {
            throw new errors_1.SdkError('Websocket client not initialized'); // Should not happen
        }
        this.ws.onopen = () => {
            console.log('Websocket connected');
            this.eventEmitter.emit('open');
        };
        this.ws.onclose = () => {
            console.log('Websocket disconnected');
            this.eventEmitter.emit('close');
        };
        this.ws.onmessage = (resp) => {
            const data = JSON.parse(resp.data.toString());
            if (!data.id) {
                this.eventEmitter.emit('error', 'Unexpected response: ' + JSON.stringify(data));
            }
            // Route the data to the specified subscriber based on the request ID
            this.eventEmitter.emit(data.id, data.error, data.result);
        };
        this.ws.onerror = (err) => {
            console.log('Websocket error');
            this.eventEmitter.emit('error', err);
        };
    }
    /**
     * Disconnect from server
     * @since v0.17
     */
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(reslove => {
                // Unsubscribe all from server
                const id = 'unsubscribe_all';
                this.send(types.RpcMethods.UnsubscribeAll, id);
                this.eventEmitter.on(id, error => {
                    if (error) {
                        throw new errors_1.SdkError(error.message);
                    }
                    if (!this.ws) {
                        throw new errors_1.SdkError('Websocket client not initialized'); // Should not happen
                    }
                    // Remove all listeners
                    this.eventEmitter.removeAllListeners();
                    // Destroy ws instance
                    this.ws.terminate();
                    reslove();
                });
            });
        });
    }
    /**
     * Check if the ws client is connected or not
     * @since v0.17
     */
    isReady() {
        var _a;
        return ((_a = this.ws) === null || _a === void 0 ? void 0 : _a.readyState) === 1;
    }
    /**
     * Send subscription to tendermint
     * @param method The tendermint rpc method
     * @param id The request id which is the same as the incoming response
     * @param query The tendermint query string
     * @since v0.17
     */
    send(method, id, query) {
        if (!this.ws) {
            throw new errors_1.SdkError('Websocket client not initialized'); // Should not happen
        }
        this.ws.send(JSON.stringify({
            jsonrpc: '2.0',
            method,
            id,
            params: {
                query,
            },
        }));
    }
}
exports.WsClient = WsClient;
//# sourceMappingURL=ws-client.js.map