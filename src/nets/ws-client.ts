import * as types from '../types';
import * as EventEmitter from 'events';
import * as Websocket from 'isomorphic-ws';
import { SdkError } from '../errors';

/**
 * IRISHub Websocket Client
 */
export class WsClient {
  /** @hidden */
  private url: string;
  private ws?: Websocket;
  eventEmitter: EventEmitter;

  constructor(url: string) {
    this.url = url;
    this.eventEmitter = new EventEmitter();
  }

  /**
   * Initialize ws client
   */
  async connect(): Promise<void> {
    return new Promise((reslove, reject) => {
      this.ws = new Websocket(this.url + '/websocket');

      if (!this.ws) {
        reject('Websocket client not initialized'); // Should not happen
        return;
      }

      this.ws.onopen = () => {
        console.log('Websocket connected');
        reslove();
      };

      this.ws.onclose = () => {
        console.log('Websocket disconnected');
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
        this.eventEmitter.emit('wserror', err);
        reject(err);
      };
    });
  }

  /**
   * Disconnect from server
   */
  async disconnect(): Promise<void> {
    return new Promise((reslove, reject) => {
      // Unsubscribe all from server
      this.send(types.RpcMethods.UnsubscribeAll, 'unsubscribe_all');
      this.eventEmitter.on('unsubscribe_all', (error, data) => {
        if (error) {
          reject(error);
        }

        if (!this.ws) {
          reject('Websocket client not initialized'); // Should not happen
          return;
        }
        // Destroy ws instance
        this.ws.terminate();
        // Remove all listeners
        this.eventEmitter.removeAllListeners();
        reslove();
      });
    });
  }

  /**
   * Send subscription to tendermint
   * @param method The tendermint rpc method
   * @param id The request id which is the same as the incoming response
   * @param query The tendermint query string
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
