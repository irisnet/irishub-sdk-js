/// <reference types="node" />
import * as EventEmitter from 'events';
/**
 * IRISHub Websocket Client
 * @since v0.17
 */
export declare class WsClient {
    /** @hidden */
    private url;
    /** @hidden */
    private ws?;
    /** Event emitter */
    eventEmitter: EventEmitter;
    constructor(url: string);
    /**
     * Initialize ws client
     * @since v0.17
     */
    connect(): void;
    /**
     * Disconnect from server
     * @since v0.17
     */
    disconnect(): Promise<void>;
    /**
     * Check if the ws client is connected or not
     * @since v0.17
     */
    isReady(): boolean;
    /**
     * Send subscription to tendermint
     * @param method The tendermint rpc method
     * @param id The request id which is the same as the incoming response
     * @param query The tendermint query string
     * @since v0.17
     */
    send(method: string, id: string, query?: string): void;
}
