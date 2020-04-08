// import * as iris from '../src';

import { Utils, Crypto, AddressUtils, StoreKeys } from '../src/utils';

// export interface SdkError {}
// export interface Block {}
// export interface BlockHeader {}
// export interface TxResult {}
// export interface ValidatorUpdates {}

// export class EventListener {
//   private url: string;
//   private ws: WebSocket;
//   private em: EventEmitter;

//   constructor(url: string) {
//     this.url = url;
//   }

//   connect(): void {
//     this.ws = new WebSocket(this.url);
//     this.em = new EventEmitter();
//     this.ws.on('data', data => {
//       // 根据请求ID将监听到的数据路由给指定的订阅者
//       this.em.emit(data.id, data.error, data.result);
//     });
//     this.ws.on('error', err => {
//       this.em.emit('error', err);
//     });
//     // on xxx
//   }

//   disconnect(): void {
//     this.ws.destroy();
//   }

//   subscribeNewBlock(callback: (block: Block) => any): Subscription {
//     callback('Block');
//   }

//   subscribeNewBlockHeader(
//     callback: (blockHeader: BlockHeader) => any
//   ): Subscription {
//     callback('BlockHeader');
//   }

//   subscribeValidatorSetUpdates(
//     callback: (validatorUpdates: ValidatorUpdates) => any
//   ): Subscription {
//     callback('validatorUpdates');
//   }

//   // Tx 订阅不应再细分具体类型，因为订阅参数中可能不包含 `action`
//   subscribeTx(
//     query: EventQueryBuilder,
//     callback: (tx: TxResult) => any
//   ): Subscription {
//     // 发送订阅请求
//     // 监听
//     // Decode
//     // 回调
//     callback('TxResult');
//   }

//   onError(callback: (error: SdkError) => any): void {}
// }

// export class Subscription {
//   private query: EventQueryBuilder;
//   unsubscribe() {}
// }

// export class EventQueryBuilder {
//   condition: Map<string, string>;
//   addCondition(event: Event, value: string): EventQueryBuilder {}
//   build(): string {}
// }

// export enum Event {
//   Action = 0,
//   Sender,
//   Recipient,
//   xxx,
// }

// export class EventAction {
//   Send = 'send';
//   Burn = 'burn';
//   SetMemoRegexp = 'set-memo-regexp';
//   xxx;
// }

// describe('Tests', () => {
//   test('Test', () => {
//     const listener = new EventLisener();
//     listener.subscribeNewBlock(function(error: string, block: Block) {
//       console.log(block);
//     });
//   });
// });

// Test events
import { EventListener } from '../src/nets/event-listener';
import { marshalTx, unmarshalTx, unmarshalPubKey } from '@irisnet/amino-js';
import { base64ToBytes, bytesToBase64, bytesToJSON } from '@tendermint/belt';
import * as iris from '../src';
import * as Amino from '@irisnet/amino-js';
import { BaseTest } from './basetest';

test('test client', async () => {
  // Init Client
  // const client = iris.newClient({
  //   node: 'http://localhost:26657',
  //   network: iris.Network.Testnet,
  //   chainId: 'test',
  // });

  // client.eventListener.connect();
  // client.eventListener.subscribeNewBlock((err, data) => {
  //   console.log(JSON.stringify(data));
  // });
  // await timeout(100000);
  // // eventListener.disconnect();
  // await timeout(5000000);

  // const bytes = Crypto.decodeAndConvert(
  //   'fcp1zcjduepq0yn2e94aq07uvlzu65jtknyp9an68w5jlngrmxyhhvwdgykm3z5q0uwxg2'
  // );
  // console.log(bytes);
  // const bech = Uint8Array.from(bytes);

  // const pk = unmarshalPubKey(bech, false);

  const deadline = new Date();
  deadline.setTime(deadline.getTime() + 1000 * 60 * 60);
  console.log(deadline.toLocaleString())
}, 10000000);

function timeout(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// const WebSocket = require('ws');
// test('Crypto', async () => {
//   const eventListener: any = {};
//   const subscriptions = {};

//   const ws = new WebSocket('wss://echo.websocket.org/', {
//     origin: 'https://websocket.org',
//   });

//   ws.on('open', function open() {
//     console.log('connected');
//     // Initialize subscriptions on connected
//     eventListener.subscribeAll(subscriptions);
//     setTimeout(() => {
//       // ws.send("call health");
//     }, 5000);
//   });

//   ws.on('close', function close() {
//     console.log('disconnected');
//   });

//   ws.on('message', function incoming(data: any) {

//   });

//   await timeout(1000000);
// }, 1000000);

// function timeout(ms: number) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }
