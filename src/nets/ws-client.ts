import * as types from '../types';
import * as EventEmitter from 'events';
import * as Websocket from 'isomorphic-ws';
import { SdkError } from '../errors';

/**
 * IRISHub Websocket Client
 * @since v0.17
 */
export class WsClient {
  /** @hidden */
  private url: string;
  /** @hidden */
  private ws?: Websocket;
  /** Event emitter */
  eventEmitter: EventEmitter;

  constructor(url: string) {
    this.url = url;
    this.eventEmitter = new EventEmitter();
  }

  /**
   * Initialize ws client
   * @since v0.17
   */
  connect(): void {
    this.ws = new Websocket(this.url + '/websocket');
    if (!this.ws) {
      throw new SdkError('Websocket client not initialized'); // Should not happen
    }

    this.ws.onopen = () => {
      console.log('Websocket connected');
      this.eventEmitter.emit('open');
    };

    this.ws.onclose = () => {
      console.log('Websocket disconnected');
      this.eventEmitter.emit('close');
    };

    this.ws.onmessage = (resp: Websocket.MessageEvent) => {
      const data = JSON.parse(resp.data.toString());
      if (!data.id) {
        this.eventEmitter.emit(
          'error',
          'Unexpected response: ' + JSON.stringify(data)
        );
      }
      // Route the data to the specified subscriber based on the request ID
      this.eventEmitter.emit(data.id, data.error, data.result);
    };

    this.ws.onerror = (err: Websocket.ErrorEvent) => {
      console.log('Websocket error');
      this.eventEmitter.emit('error', err);
    };
  }

  /**
   * Disconnect from server
   * @since v0.17
   */
  async disconnect(): Promise<void> {
    return new Promise(reslove => {
      // Unsubscribe all from server
      const id = 'unsubscribe_all';
      this.send(types.RpcMethods.UnsubscribeAll, id);
      this.eventEmitter.on(id, error => {
        if (error) {
          throw new SdkError(error.message);
        }

        if (!this.ws) {
          throw new SdkError('Websocket client not initialized'); // Should not happen
        }

        // Remove all listeners
        this.eventEmitter.removeAllListeners();
        // Destroy ws instance
        this.ws.terminate();

        reslove();
      });
    });
  }

  /**
   * Check if the ws client is connected or not
   * @since v0.17
   */
  isReady(): boolean {
    return this.ws?.readyState === 1;
  }

  /**
   * Send subscription to tendermint
   * @param method The tendermint rpc method
   * @param id The request id which is the same as the incoming response
   * @param query The tendermint query string
   * @since v0.17
   */
  send(method: string, id: string, query?: string): void {
    if (!this.ws) {
      throw new SdkError('Websocket client not initialized'); // Should not happen
    }
    this.ws.send(
      JSON.stringify({
        jsonrpc: '2.0',
        method,
        id,
        params: {
          query,
        },
      })
    );
  }
}
