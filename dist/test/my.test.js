"use strict";
// import * as iris from '../src';
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
test('test client', () => __awaiter(void 0, void 0, void 0, function* () {
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
    console.log(deadline.toLocaleString());
}), 10000000);
function timeout(ms) {
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
//# sourceMappingURL=my.test.js.map