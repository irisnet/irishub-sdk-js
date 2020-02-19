import * as Amino from '@irisnet/amino-js';
import { base64ToBytes, bytesToBase64 } from '@tendermint/belt';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Utils from '../utils/utils';
import SdkError from '../errors';
import * as is from 'is_js';
import * as types from '../types';
import * as EventEmitter from 'events';
import { obj as Pumpify } from 'pumpify';
import * as Ndjson from 'ndjson';
import * as Websocket from 'websocket-stream';

/**
 * IRISHub Event Listener
 */
export default class EventListener {
  private url: string;
  private ws: any;
  private em: EventEmitter;

  /**
   * @param url IRISHub RPC Address
   */
  constructor(url: string) {
    // TODO: wss support
    this.url = url + '/websocket';
    this.em = new EventEmitter();
  }

  /**
   * Initialize ws client
   */
  connect(): void {
    this.ws = Pumpify(Ndjson.stringify(), Websocket(this.url));
    this.ws.on('data', (resp: string) => {
      const data = JSON.parse(resp);
      console.log(JSON.stringify(data));
      if (!data.id) {
        this.em.emit('error', 'Unexpected response: ' + JSON.stringify(data));
      }
      // Route the data to the specified subscriber based on the request ID
      this.em.emit(data.id, data.error, data.result);
    });
    this.ws.on('error', (err: string) => {
      this.em.emit('error', err);
    });

    // TODO: removing, only used for testing
    this.ws.write({
      jsonrpc: '2.0',
      method: 'subscribe',
      id: 0,
      params: {
        query: "tm.event='NewBlock'",
      },
    });
    // TODO: removing, only used for testing
    this.onError(function(error: SdkError) {});
  }

  /**
   * Disconnect from server
   */
  disconnect(): void {
    this.ws.destroy();
  }

  /**
   * Listen on error
   * @param callback Callback function with a [[SdkError]] param
   */
  onError(callback: (error: SdkError) => any): void {
    this.em.on('error', (err: string) => {
      callback(new SdkError(err));
    });
  }
}
