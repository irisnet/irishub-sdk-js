import { unmarshalTx } from '@irisnet/amino-js';
import { base64ToBytes } from '@tendermint/belt';
import Utils from '../utils/utils';
import SdkError from '../errors';
import * as types from '../types';
import * as EventEmitter from 'events';
import { obj as Pumpify } from 'pumpify';
import * as Ndjson from 'ndjson';
import * as Websocket from 'websocket-stream';
import { Crypto } from '../utils/crypto';
import * as is from 'is_js';

/**
 * IRISHub Event Listener
 */
export class EventListener {
  /** @hidden */
  private url: string;
  private ws: any;
  private em: EventEmitter;

  constructor(url: string) {
    this.url = url;
    this.em = new EventEmitter();
  }

  /**
   * Initialize ws client
   */
  connect(): void {
    this.ws = Pumpify(Ndjson.stringify(), Websocket(this.url + '/websocket'));
    this.ws.on('data', (resp: string) => {
      const data = JSON.parse(resp);
      if (!data.id) {
        this.em.emit('error', 'Unexpected response: ' + JSON.stringify(data));
      }
      // Route the data to the specified subscriber based on the request ID
      this.em.emit(data.id, data.error, data.result);
    });
    this.ws.on('error', (err: string) => {
      this.em.emit('error', err);
    });
  }

  /**
   * Disconnect from server
   */
  disconnect(): void {
    // Unsubscribe all from server
    this.ws.write({
      jsonrpc: '2.0',
      method: 'unsubscribe_all',
      id: 'unsubscribe_all',
    });

    this.em.on('unsubscribe_all#event', (error, data) => {
      console.log(error);
      console.log(data);

      // Destroy ws instance
      this.ws.destroy();
      // Remove all listeners
      this.em.removeAllListeners();
    });
  }

  /**
   * Listen on error
   * @param callback Callback function with a [[SdkError]] param
   */
  onError(callback: (error: SdkError) => void): void {
    this.em.on('error', (err: string) => {
      callback(new SdkError(err));
    });
  }

  /**
   * Unsubscribe the specified event
   * @param subscription The event subscription instance
   */
  unscribe(subscription: types.EventSubscription): void {
    // Unsubscribe all from server
    this.ws.write({
      jsonrpc: '2.0',
      method: 'unsubscribe',
      id: 'unsubscribe#' + subscription.id,
      params: {
        query: subscription.query,
      },
    });

    this.em.on('unsubscribe#' + subscription.id, (error, data) => {
      console.log(error);
      console.log(data);
      // Remove listeners
      this.em.removeAllListeners(subscription.id + '#event');
      this.em.removeAllListeners('unsubscribe#' + subscription.id + '#event');
    });
  }

  /**
   * Subscribe new block notifications
   * @param callback A function to receive notifications
   * @returns
   */
  subscribeNewBlock(
    callback: (error?: SdkError, data?: types.EventDataNewBlock) => void
  ): types.EventSubscription {
    // Build and send subscription
    const eventType = 'NewBlock';
    const id = eventType + Math.random().toString(16);
    const query = new EventQueryBuilder()
      .addCondition(EventKey.Type, eventType)
      .build();

    this.ws.write({
      jsonrpc: '2.0',
      method: 'subscribe',
      id,
      params: {
        query,
      },
    });

    // Listen for new blocks, decode and callback
    this.em.on(id + '#event', (error, data) => {
      if (error) {
        callback(
          new SdkError(error.message, error.code, error.data),
          undefined
        );
      }

      if (!data || !data.data || !data.data.value) {
        return;
      }

      const blockData = data.data.value;

      // Decode txs
      console.log(blockData.data);
      if (blockData.block && blockData.block.data && blockData.block.data.txs) {
        const txs: string[] = blockData.block.data.txs;
        const decodedTxs = new Array<types.Tx<types.StdTx>>();
        txs.forEach(msg => {
          decodedTxs.push(
            unmarshalTx(base64ToBytes(msg)) as types.Tx<types.StdTx>
          );
        });
        blockData.block.data.txs = decodedTxs;
        console.log(JSON.stringify(decodedTxs));
      }

      const eventBlock = blockData as types.EventDataNewBlock;
      callback(undefined, eventBlock);
    });

    // Return an types.EventSubscription instance, so client could use to unsubscribe this context
    return { id, query };
  }

  /**
   * Subscribe new block header notifications
   * @param callback A function to receive notifications
   * @returns
   */
  subscribeNewBlockHeader(
    callback: (error?: SdkError, data?: types.EventDataNewBlockHeader) => void
  ): types.EventSubscription {
    // Build and send subscription
    const eventType = 'NewBlockHeader';
    const id = eventType + Math.random().toString(16);
    const query = new EventQueryBuilder()
      .addCondition(EventKey.Type, eventType)
      .build();

    this.ws.write({
      jsonrpc: '2.0',
      method: 'subscribe',
      id,
      params: {
        query,
      },
    });

    // Listen for new blocks, decode and callback
    this.em.on(id + '#event', (error, data) => {
      if (error) {
        callback(
          new SdkError(error.message, error.code, error.data),
          undefined
        );
      }

      if (!data.data || !data.data.value) {
        return;
      }
      const eventBlockHeader = data.data.value as types.EventDataNewBlockHeader;
      callback(undefined, eventBlockHeader);
    });

    // Return an types.EventSubscription instance, so client could use to unsubscribe this context
    return { id, query };
  }

  /**
   * Subscribe validator set update notifications
   * @param callback A function to receive notifications
   * @returns
   */
  subscribeValidatorSetUpdates(
    callback: (
      error?: SdkError,
      data?: types.EventDataValidatorSetUpdates[]
    ) => void
  ): types.EventSubscription {
    // Build and send subscription
    const eventType = 'ValidatorSetUpdates';
    const id = eventType + Math.random().toString(16);
    const query = new EventQueryBuilder()
      .addCondition(EventKey.Type, eventType)
      .build();

    this.ws.write({
      jsonrpc: '2.0',
      method: 'subscribe',
      id,
      params: {
        query,
      },
    });

    // Listen for new blocks, decode and callback
    this.em.on(id + '#event', (error, data) => {
      if (error) {
        callback(
          new SdkError(error.message, error.code, error.data),
          undefined
        );
      }

      if (
        !data.data ||
        !data.data.value ||
        !data.data.value.validator_updates
      ) {
        return;
      }
      const eventValidatorUpdates = data.data.value
        .validator_updates as types.EventDataValidatorSetUpdates[];
      callback(undefined, eventValidatorUpdates);
    });

    // Return an types.EventSubscription instance, so client could use to unsubscribe this context
    return { id, query };
  }

  /**
   * Subscribe successful Txs notifications
   * @param callback A function to receive notifications
   * @returns
   */
  subscribeTx(
    conditions: EventQueryBuilder,
    callback: (error?: SdkError, data?: types.EventDataResultTx) => void
  ): types.EventSubscription {
    // Build and send subscription
    const eventType = 'Tx';
    const id = eventType + Math.random().toString(16);
    const queryBuilder = conditions ? conditions : new EventQueryBuilder();
    const query = queryBuilder.addCondition(EventKey.Type, eventType).build();

    this.ws.write({
      jsonrpc: '2.0',
      method: 'subscribe',
      id,
      params: {
        query,
      },
    });

    // Listen for new blocks, decode and callback
    this.em.on(id + '#event', (error, data) => {
      if (error) {
        callback(
          new SdkError(error.message, error.code, error.data),
          undefined
        );
      }

      if (
        !data ||
        !data.data ||
        !data.data.value ||
        !data.data.value.TxResult
      ) {
        return;
      }

      const txResult = data.data.value.TxResult;
      txResult.tx = unmarshalTx(base64ToBytes(txResult.tx));

      // Decode tags from base64
      if (txResult.result.tags) {
        const tags = txResult.result.tags as types.EventDataTag[];
        const decodedTags = new Array<types.EventDataTag>();
        tags.forEach(element => {
          const key = Utils.base64ToString(element.key);
          const value =
            !element.value || is.empty(element.value)
              ? ''
              : Utils.base64ToString(element.value);
          decodedTags.push({
            key,
            value,
          });
        });
        txResult.result.tags = decodedTags;
      }

      txResult.hash = Crypto.generateTxHash(txResult.tx);

      callback(undefined, txResult);
    });

    // Return an types.EventSubscription instance, so client could use to unsubscribe this context
    return { id, query };
  }
}

/**
 * A builder for building event query strings
 */
export class EventQueryBuilder {
  private conditions = new Array<string>();

  /**
   * Add a query condition
   * @param eventKey
   * @param value
   * @returns The builder itself
   */
  addCondition(
    eventKey: EventKey,
    value: string | EventAction
  ): EventQueryBuilder {
    this.conditions.push(eventKey + "='" + value + "'");
    return this;
  }

  /**
   * Convert the current builder to the query string
   * @returns The query string
   */
  build(): string {
    return this.conditions.join(' and ');
  }
}

export enum EventKey {
  Type = 'tm.event',
  Action = 'action',
  Sender = 'sender',
  Recipient = 'recipient',
  DestinationValidator = 'destination-validator',
  // TODO: more
}

export enum EventAction {
  Send = 'send',
  Burn = 'burn',
  SetMemoRegexp = 'set-memo-regexp',
  EditValidator = 'edit_validator',
  // TODO: more
}
