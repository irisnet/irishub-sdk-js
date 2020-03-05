// import * as iris from '../src';

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
import {
  EventListener,
  EventQueryBuilder,
  EventKey,
  EventAction,
} from '../src/nets/event-listener';
import { marshalTx, unmarshalTx } from '@irisnet/amino-js';
import { base64ToBytes, bytesToBase64 } from '@tendermint/belt';
import { Utils } from '../src/utils/utils';
import * as iris from '../src';

test('test', async () => {
  // Init Client
  const client = iris.newClient({
    node: 'http://localhost:26657',
    network: iris.Network.Testnet,
    chainId: 'test',
  });

  client.eventListener.connect();
  client.bank.subscribeSendTx(
    {
      from: 'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
    },
    (error, data) => {
      console.log(data);
    }
  );

  client.staking.subscribeValidatorInfoUpdates({}, (error, data) => {
    console.log(JSON.stringify(data));
  });

  await timeout(1000000);
}, 1000000);

function timeout(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
