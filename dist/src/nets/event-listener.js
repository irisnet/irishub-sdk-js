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
exports.EventListener = void 0;
const errors_1 = require("../errors");
const types = require("../types");
const utils_1 = require("../utils");
const is = require("is_js");
const ws_client_1 = require("./ws-client");
const types_1 = require("../types");
/** Internal event dao for caching the events */
class EventDAO {
    constructor() {
        this.subscriptions = new Map();
    }
    setSubscription(id, subscription) {
        this.subscriptions.set(id, subscription);
    }
    deleteSubscription(id) {
        this.subscriptions.delete(id);
    }
    getAllSubscriptions() {
        return this.subscriptions;
    }
    clear() {
        this.subscriptions.clear();
    }
}
/**
 * IRISHub Event Listener
 * @since v0.17
 */
class EventListener {
    /** @hidden */
    constructor(client) {
        this.client = client;
        this.wsClient = new ws_client_1.WsClient(this.client.config.node);
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
    connect() {
        this.wsClient.connect();
    }
    /**
     * Disconnect from server and clear all the listeners
     * @since v0.17
     */
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.wsClient.disconnect().then(() => {
                this.eventDAO.clear();
            });
        });
    }
    /**
     * Subscribe new block notifications
     * @param conditions Query conditions
     * @param callback A function to receive notifications
     * @returns
     * @since v0.17
     */
    subscribeNewBlock(callback, conditions) {
        // Build and send subscription
        const eventType = types.EventTypes.NewBlock;
        const id = eventType + Math.random().toString(16);
        const queryBuilder = conditions ? conditions : new types_1.EventQueryBuilder();
        const query = queryBuilder
            .addCondition(new types.Condition(types_1.EventKey.Type).eq(eventType))
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
    subscribeNewBlockHeader(callback) {
        // Build and send subscription
        const eventType = types.EventTypes.NewBlockHeader;
        const id = eventType + Math.random().toString(16);
        const query = new types_1.EventQueryBuilder()
            .addCondition(new types.Condition(types_1.EventKey.Type).eq(eventType))
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
    subscribeValidatorSetUpdates(callback) {
        // Build and send subscription
        const eventType = types.EventTypes.ValidatorSetUpdates;
        const id = eventType + Math.random().toString(16);
        const query = new types_1.EventQueryBuilder()
            .addCondition(new types.Condition(types_1.EventKey.Type).eq(eventType))
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
    subscribeTx(conditions, callback) {
        // Build and send subscription
        const eventType = types.EventTypes.Tx;
        const id = eventType + Math.random().toString(16);
        const queryBuilder = conditions ? conditions : new types_1.EventQueryBuilder();
        const query = queryBuilder
            .addCondition(new types.Condition(types_1.EventKey.Type).eq(eventType))
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
    unsubscribe(subscription) {
        // Unsubscribe the specified event from server
        this.wsClient.send(types.RpcMethods.Unsubscribe, 'unsubscribe#' + subscription.id, subscription.query);
        this.wsClient.eventEmitter.on('unsubscribe#' + subscription.id, (error, data) => {
            console.log(error);
            console.log(data);
            // Remove the subscription listeners
            this.wsClient.eventEmitter.removeAllListeners(subscription.id + '#event');
            // Remove the current `unsubscribe` operation listener
            this.wsClient.eventEmitter.removeAllListeners('unsubscribe#' + subscription.id);
        });
    }
    newBlockHandler(callback, error, data) {
        if (error) {
            callback(new errors_1.SdkError(error.message, error.code), undefined);
        }
        if (!data || !data.data || !data.data.value) {
            return;
        }
        const blockData = data.data.value;
        // Decode txs
        if (blockData.block && blockData.block.data && blockData.block.data.txs) {
            const txs = blockData.block.data.txs;
            const decodedTxs = new Array();
            txs.forEach(msg => {
                decodedTxs.push(this.client.protobuf.deserializeTx(msg));
            });
            blockData.block.data.txs = decodedTxs;
        }
        // Decode proposer address
        if (blockData.block) {
            blockData.block.header.bech32_proposer_address = utils_1.Crypto.encodeAddress(blockData.block.header.proposer_address, this.client.config.bech32Prefix.ConsAddr);
        }
        // Decode begin block tags
        if (blockData.result_begin_block) {
            blockData.result_begin_block.tags = utils_1.Utils.decodeTags(blockData.result_begin_block.tags);
        }
        if (blockData.result_end_block) {
            // Decode end block tags
            blockData.result_end_block.tags = utils_1.Utils.decodeTags(blockData.result_end_block.tags);
            // Decode validator updates
            if (blockData.result_end_block.validator_updates) {
                const validators = [];
                blockData.result_end_block.validator_updates.forEach((v) => {
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
                            throw new errors_1.SdkError(`Unsupported pubkey type: ${v.pub_key.type}`);
                    }
                    const valPubkey = {
                        type,
                        value: v.pub_key.data,
                    };
                    const bech32Pubkey = utils_1.Crypto.encodeAddress(utils_1.Crypto.aminoMarshalPubKey(valPubkey, false), this.client.config.bech32Prefix.ConsPub);
                    validators.push({
                        bech32_pubkey: bech32Pubkey,
                        pub_key: valPubkey,
                        voting_power: v.power,
                    });
                });
                blockData.result_end_block.validator_updates = validators;
            }
        }
        const eventBlock = blockData;
        callback(undefined, eventBlock);
    }
    newBlockHeaderHandler(callback, error, data) {
        if (error) {
            callback(new errors_1.SdkError(error.message, error.code), undefined);
        }
        if (!data.data || !data.data.value) {
            return;
        }
        const blockHeader = data.data.value;
        // Decode proposer address
        blockHeader.header.bech32_proposer_address = utils_1.Crypto.encodeAddress(blockHeader.header.proposer_address, this.client.config.bech32Prefix.ConsAddr);
        // Decode begin block tags
        if (blockHeader.result_begin_block) {
            blockHeader.result_begin_block.tags = utils_1.Utils.decodeTags(blockHeader.result_begin_block.tags);
        }
        if (blockHeader.result_end_block) {
            // Decode end block tags
            blockHeader.result_end_block.tags = utils_1.Utils.decodeTags(blockHeader.result_end_block.tags);
            // Decode validator updates
            if (blockHeader.result_end_block.validator_updates) {
                const validators = [];
                blockHeader.result_end_block.validator_updates.forEach((v) => {
                    const type = v.pub_key.type === 'secp256k1'
                        ? types.PubkeyType.secp256k1
                        : types.PubkeyType.ed25519;
                    const valPubkey = {
                        type,
                        value: v.pub_key.data,
                    };
                    const bech32Pubkey = utils_1.Crypto.encodeAddress(utils_1.Crypto.aminoMarshalPubKey(valPubkey, false), this.client.config.bech32Prefix.ConsPub);
                    validators.push({
                        bech32_pubkey: bech32Pubkey,
                        pub_key: valPubkey,
                        voting_power: v.power,
                    });
                });
                blockHeader.result_end_block.validator_updates = validators;
            }
        }
        callback(undefined, blockHeader);
    }
    validatorSetUpdatesHandler(callback, error, data) {
        if (error) {
            callback(new errors_1.SdkError(error.message, error.code), undefined);
        }
        if (!data.data || !data.data.value || !data.data.value.validator_updates) {
            return;
        }
        const eventValidatorUpdates = data.data.value
            .validator_updates;
        callback(undefined, eventValidatorUpdates);
    }
    txHandler(callback, error, data) {
        if (error) {
            callback(new errors_1.SdkError(error.message, error.code), undefined);
        }
        if (!data || !data.data || !data.data.value || !data.data.value.TxResult) {
            return;
        }
        const txResult = data.data.value.TxResult;
        txResult.tx = this.client.protobuf.deserializeTx(txResult.tx);
        if (txResult.result.tags) {
            const tags = txResult.result.tags;
            const decodedTags = new Array();
            tags.forEach(element => {
                const key = utils_1.Utils.base64ToString(element.key);
                const value = !element.value || is.empty(element.value)
                    ? ''
                    : utils_1.Utils.base64ToString(element.value);
                decodedTags.push({
                    key,
                    value,
                });
            });
            txResult.result.tags = decodedTags;
        }
        txResult.hash = utils_1.Crypto.generateTxHash(txResult.tx);
        callback(undefined, txResult);
    }
}
exports.EventListener = EventListener;
//# sourceMappingURL=event-listener.js.map