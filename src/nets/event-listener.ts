import { SdkError } from '../errors';
import * as types from '../types';
import { Utils, Crypto } from '../utils';
import * as is from 'is_js';
import { WsClient } from './ws-client';
import { EventQueryBuilder, EventKey } from '../types';
import { Client } from '../client';

/** Internal subscription interface */
interface Subscription {
  id: string;
  query: string;
  eventType: types.EventTypes;
  callback: (error?: SdkError, data?: any) => void;
}

/** Internal event dao for caching the events */
class EventDAO {
  private subscriptions = new Map<string, Subscription>();
  setSubscription(id: string, subscription: Subscription): void {
    this.subscriptions.set(id, subscription);
  }
  deleteSubscription(id: string): void {
    this.subscriptions.delete(id);
  }
  getAllSubscriptions(): Map<string, Subscription> {
    return this.subscriptions;
  }
  clear(): void {
    this.subscriptions.clear();
  }
}

/**
 * IRISHub Event Listener
 * @since v0.17
 */
export class EventListener {
  /** @hidden */
  private wsClient: WsClient;
  /** @hidden */
  private eventDAO: EventDAO;
  /** @hidden */
  private client: Client;

  /** @hidden */
  constructor(client: Client) {
    this.client = client;
    this.wsClient = new WsClient(this.client.config.node);
    this.eventDAO = new EventDAO();

    this.wsClient.eventEmitter.on('open', () => {
      const subscriptions = this.eventDAO.getAllSubscriptions();
      if (subscriptions) {
        subscriptions.forEach(sub => {
          // Subscribe all events in context
          console.log('Subscribe: ' + sub.query);
          this.wsClient.send(types.RpcMethods.Subscribe, sub.id, sub.query);
          const event = sub.id + '#event';
          this.wsClient.eventEmitter.removeAllListeners(event); // just in case dup of listeners

          switch (sub.eventType) {
            case types.EventTypes.NewBlock: {
              // Listen for new blocks, decode and callback
              this.wsClient.eventEmitter.on(event, (error, data) => {
                this.newBlockHandler(sub.callback, error, data);
              });
              return;
            }
            case types.EventTypes.NewBlockHeader: {
              // Listen for new block headers, decode and callback
              this.wsClient.eventEmitter.on(event, (error, data) => {
                this.newBlockHeaderHandler(sub.callback, error, data);
              });
              return;
            }
            case types.EventTypes.ValidatorSetUpdates: {
              // Listen for validator set updates, decode and callback
              this.wsClient.eventEmitter.on(event, (error, data) => {
                this.validatorSetUpdatesHandler(sub.callback, error, data);
              });
              return;
            }
            case types.EventTypes.Tx: {
              // Listen for txs, decode and callback
              this.wsClient.eventEmitter.on(event, (error, data) => {
                this.txHandler(sub.callback, error, data);
              });
              return;
            }
            default: {
              return;
            }
          }
        });
      }
    });

    // If the connection is closed subjectively, this event will not be triggered
    // see also: disconnect()
    this.wsClient.eventEmitter.on('close', () => {
      // Disconnected unexpectedly, try reconnecting
      console.log('Reconnecting...');
      setTimeout(() => {
        this.connect();
      }, 5000); // try reconnecting every 5s
    });

    this.wsClient.eventEmitter.on('error', err => {
      // TODO
    });
  }

  /**
   * Connect to server
   * @since v0.17
   */
  connect(): void {
    this.wsClient.connect();
  }

  /**
   * Disconnect from server and clear all the listeners
   * @since v0.17
   */
  async disconnect(): Promise<void> {
    return this.wsClient.disconnect().then(() => {
      this.eventDAO.clear();
    });
  }

  /**
   * Subscribe new block notifications
   * @param conditions Query conditions
   * @param callback A function to receive notifications
   * @returns
   * @since v0.17
   */
  subscribeNewBlock(
    callback: (error?: SdkError, data?: types.EventDataNewBlock) => void,
    conditions?: EventQueryBuilder
  ): types.EventSubscription {
    // Build and send subscription
    const eventType = types.EventTypes.NewBlock;
    const id = eventType + Math.random().toString(16);
    const queryBuilder = conditions ? conditions : new EventQueryBuilder();
    const query = queryBuilder
      .addCondition(new types.Condition(EventKey.Type).eq(eventType))
      .build();

    if (this.wsClient.isReady()) {
      this.wsClient.send(types.RpcMethods.Subscribe, id, query);
      // Listen for new blocks, decode and callback
      this.wsClient.eventEmitter.on(id + '#event', (error, data) => {
        this.newBlockHandler(callback, error, data);
      });
    }

    this.eventDAO.setSubscription(id, {
      id,
      query,
      eventType,
      callback,
    });
    // Return an types.EventSubscription instance, so client could use to unsubscribe this context
    return { id, query };
  }

  /**
   * Subscribe new block header notifications
   * @param conditions Query conditions
   * @param callback A function to receive notifications
   * @returns
   * @since v0.17
   */
  subscribeNewBlockHeader(
    callback: (error?: SdkError, data?: types.EventDataNewBlockHeader) => void
  ): types.EventSubscription {
    // Build and send subscription
    const eventType = types.EventTypes.NewBlockHeader;
    const id = eventType + Math.random().toString(16);
    const query = new EventQueryBuilder()
      .addCondition(new types.Condition(EventKey.Type).eq(eventType))
      .build();

    if (this.wsClient.isReady()) {
      this.wsClient.send(types.RpcMethods.Subscribe, id, query);
      // Listen for new block headers, decode and callback
      this.wsClient.eventEmitter.on(id + '#event', (error, data) => {
        this.newBlockHeaderHandler(callback, error, data);
      });
    }

    this.eventDAO.setSubscription(id, {
      id,
      query,
      eventType,
      callback,
    });
    // Return an types.EventSubscription instance, so client could use to unsubscribe this context
    return { id, query };
  }

  /**
   * Subscribe validator set update notifications
   * @param conditions Query conditions
   * @param callback A function to receive notifications
   * @returns
   * @since v0.17
   */
  subscribeValidatorSetUpdates(
    callback: (
      error?: SdkError,
      data?: types.EventDataValidatorSetUpdates[]
    ) => void
  ): types.EventSubscription {
    // Build and send subscription
    const eventType = types.EventTypes.ValidatorSetUpdates;
    const id = eventType + Math.random().toString(16);
    const query = new EventQueryBuilder()
      .addCondition(new types.Condition(EventKey.Type).eq(eventType))
      .build();

    if (this.wsClient.isReady()) {
      this.wsClient.send(types.RpcMethods.Subscribe, id, query);
      // Listen for validator set updates, decode and callback
      this.wsClient.eventEmitter.on(id + '#event', (error, data) => {
        this.validatorSetUpdatesHandler(callback, error, data);
      });
    }
    this.eventDAO.setSubscription(id, {
      id,
      query,
      eventType,
      callback,
    });
    // Return an types.EventSubscription instance, so client could use to unsubscribe this context
    return { id, query };
  }

  /**
   * Subscribe successful Txs notifications
   * @param conditions Query conditions
   * @param callback A function to receive notifications
   * @returns
   * @since v0.17
   */
  subscribeTx(
    conditions: EventQueryBuilder,
    callback: (error?: SdkError, data?: types.EventDataResultTx) => void
  ): types.EventSubscription {
    // Build and send subscription
    const eventType = types.EventTypes.Tx;
    const id = eventType + Math.random().toString(16);
    const queryBuilder = conditions ? conditions : new EventQueryBuilder();
    const query = queryBuilder
      .addCondition(new types.Condition(EventKey.Type).eq(eventType))
      .build();

    if (this.wsClient.isReady()) {
      this.wsClient.send(types.RpcMethods.Subscribe, id, query);
      // Listen for txs, decode and callback
      this.wsClient.eventEmitter.on(id + '#event', (error, data) => {
        this.txHandler(callback, error, data);
      });
    }
    this.eventDAO.setSubscription(id, {
      id,
      query,
      eventType,
      callback,
    });
    // Return an types.EventSubscription instance, so client could use to unsubscribe this context
    return { id, query };
  }

  /**
   * Unsubscribe the specified event
   * @param subscription The event subscription instance
   * @since v0.17
   */
  unsubscribe(subscription: types.EventSubscription): void {
    // Unsubscribe the specified event from server
    this.wsClient.send(
      types.RpcMethods.Unsubscribe,
      'unsubscribe#' + subscription.id,
      subscription.query
    );
    this.wsClient.eventEmitter.on(
      'unsubscribe#' + subscription.id,
      (error, data) => {
        console.log(error);
        console.log(data);
        // Remove the subscription listeners
        this.wsClient.eventEmitter.removeAllListeners(
          subscription.id + '#event'
        );
        // Remove the current `unsubscribe` operation listener
        this.wsClient.eventEmitter.removeAllListeners(
          'unsubscribe#' + subscription.id
        );
      }
    );
  }

  private newBlockHandler(
    callback: (error?: SdkError, data?: types.EventDataNewBlock) => void,
    error?: any,
    data?: any
  ): void {
    if (error) {
      callback(new SdkError(error.message, error.code), undefined);
    }

    if (!data || !data.data || !data.data.value) {
      return;
    }

    const blockData = data.data.value;

    // Decode txs
    if (blockData.block && blockData.block.data && blockData.block.data.txs) {
      const txs: string[] = blockData.block.data.txs;
      const decodedTxs = new Array();
      txs.forEach(msg => {
        decodedTxs.push(
          this.client.protobuf.deserializeTx(msg)
        );
      });
      blockData.block.data.txs = decodedTxs;
    }

    // Decode proposer address
    if (blockData.block) {
      blockData.block.header.bech32_proposer_address = Crypto.encodeAddress(
        blockData.block.header.proposer_address,
        this.client.config.bech32Prefix.ConsAddr
      );
    }

    // Decode begin block tags
    if (blockData.result_begin_block) {
      blockData.result_begin_block.tags = Utils.decodeTags(
        blockData.result_begin_block.tags
      );
    }

    if (blockData.result_end_block) {
      // Decode end block tags
      blockData.result_end_block.tags = Utils.decodeTags(
        blockData.result_end_block.tags
      );

      // Decode validator updates
      if (blockData.result_end_block.validator_updates) {
        const validators: types.EventDataValidatorUpdate[] = [];
        blockData.result_end_block.validator_updates.forEach((v: any) => {
          let type = types.PubkeyType.secp256k1;
          switch (v.pub_key.type) {
            case 'secp256k1': {
              type = types.PubkeyType.secp256k1;
              break;
            }
            case 'ed25519': {
              type = types.PubkeyType.ed25519;
              break;
            }
            default:
              throw new SdkError(`Unsupported pubkey type: ${v.pub_key.type}`);
          }
          const valPubkey: types.Pubkey = {
            type,
            value: v.pub_key.data,
          };
          const bech32Pubkey = Crypto.encodeAddress(
            Crypto.aminoMarshalPubKey(valPubkey, false),
            this.client.config.bech32Prefix.ConsPub
          );
          validators.push({
            bech32_pubkey: bech32Pubkey,
            pub_key: valPubkey,
            voting_power: v.power,
          });
        });
        blockData.result_end_block.validator_updates = validators;
      }
    }

    const eventBlock = blockData as types.EventDataNewBlock;
    callback(undefined, eventBlock);
  }

  private newBlockHeaderHandler(
    callback: (error?: SdkError, data?: types.EventDataNewBlockHeader) => void,
    error: any,
    data: any
  ) {
    if (error) {
      callback(new SdkError(error.message, error.code), undefined);
    }

    if (!data.data || !data.data.value) {
      return;
    }

    const blockHeader = data.data.value;
    // Decode proposer address
    blockHeader.header.bech32_proposer_address = Crypto.encodeAddress(
      blockHeader.header.proposer_address,
      this.client.config.bech32Prefix.ConsAddr
    );

    // Decode begin block tags
    if (blockHeader.result_begin_block) {
      blockHeader.result_begin_block.tags = Utils.decodeTags(
        blockHeader.result_begin_block.tags
      );
    }

    if (blockHeader.result_end_block) {
      // Decode end block tags
      blockHeader.result_end_block.tags = Utils.decodeTags(
        blockHeader.result_end_block.tags
      );

      // Decode validator updates
      if (blockHeader.result_end_block.validator_updates) {
        const validators: types.EventDataValidatorUpdate[] = [];
        blockHeader.result_end_block.validator_updates.forEach((v: any) => {
          const type =
            v.pub_key.type === 'secp256k1'
              ? types.PubkeyType.secp256k1
              : types.PubkeyType.ed25519;
          const valPubkey: types.Pubkey = {
            type,
            value: v.pub_key.data,
          };
          const bech32Pubkey = Crypto.encodeAddress(
            Crypto.aminoMarshalPubKey(valPubkey, false),
            this.client.config.bech32Prefix.ConsPub
          );
          validators.push({
            bech32_pubkey: bech32Pubkey,
            pub_key: valPubkey,
            voting_power: v.power,
          });
        });
        blockHeader.result_end_block.validator_updates = validators;
      }
    }

    callback(undefined, blockHeader as types.EventDataNewBlockHeader);
  }

  private validatorSetUpdatesHandler(
    callback: (
      error?: SdkError,
      data?: types.EventDataValidatorSetUpdates[]
    ) => void,
    error: any,
    data: any
  ) {
    if (error) {
      callback(new SdkError(error.message, error.code), undefined);
    }

    if (!data.data || !data.data.value || !data.data.value.validator_updates) {
      return;
    }
    const eventValidatorUpdates = data.data.value
      .validator_updates as types.EventDataValidatorSetUpdates[];
    callback(undefined, eventValidatorUpdates);
  }

  private txHandler(
    callback: (error?: SdkError, data?: types.EventDataResultTx) => void,
    error: any,
    data: any
  ) {
    if (error) {
      callback(new SdkError(error.message, error.code), undefined);
    }

    if (!data || !data.data || !data.data.value || !data.data.value.TxResult) {
      return;
    }

    const txResult = data.data.value.TxResult;
    txResult.tx = this.client.protobuf.deserializeTx(txResult.tx);
    if (txResult.result.tags) {
      const tags = txResult.result.tags as types.Tag[];
      const decodedTags = new Array<types.Tag>();
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
  }
}
