import * as types from '../src/types';
import { BaseTest } from './basetest';
import {Client} from "../src/client";
import {SdkError} from "../src/errors";

const timeout = 10000;
let txExpect = function(res: any) {
    console.log(JSON.stringify(res));
    expect(res).not.toBeNull();
    expect(res.hash).not.toBeNull();
    expect(res.tags).not.toBeNull();
}

describe('Bank Tests', () => {
  describe('Send', () => {
    test('send coins ok',
      async () => {
        const target: string = 'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7';
        const amount: types.Coin[] = [{
            denom: 'iris-atto',
            amount: '1000000000000000000',
          }];
          let client: Client = BaseTest.getClient();
          await client.bank.send(target, amount, BaseTest.baseTx
          ).then(res => {
            txExpect(res);
            expect(res.tags == undefined? '': res.tags.filter(kv=>kv.key=='sender')[0].value).toEqual(client.keys.show(BaseTest.baseTx.from));
            expect(res.tags == undefined? '': res.tags.filter(kv=>kv.key=='recipient')[0].value).toEqual(target);
          }).catch(error => {
            console.log(error);
            expect(error).toBeNull();
          });
      }, timeout);
      test('send coins failed as fund not enough',
          async () => {
              const target: string = 'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7';
              const amount: types.Coin[] = [{
                      denom: 'iris-atto',
                      amount: '100000000000000000000000000000000000',
                  }];
              let client: Client = BaseTest.getClient();
              await client.bank.send(target, amount, BaseTest.baseTx
              ).catch(error => {
                  console.log(error);
                  expect(error).not.toBeNull();
                  expect(error.code).toEqual(10); // the message of code: 10 is "subtracting [100000000000000000000000000000000000iris-atto] from [1729814657319195035637027iris-atto,99999999999000000000000000000kbambo-min,995kflower-min,13700000000000000000000000000kfly-min,999899000mondex.sun-min] yields negative coin(s)"
              });
          }, timeout);
      test('send coins failed as unknown token',
          async () => {
              const target: string = 'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7';
              const amount: types.Coin[] = [{
                      denom: 'iris-attoooooooooooooooooo',
                      amount: '1000000000000000000',
                  }];
              let client: Client = BaseTest.getClient();
              await client.bank.send(target, amount, BaseTest.baseTx
              ).catch(error => {
                  console.log(error);
                  expect(error).not.toBeNull();
                  expect(error.code).toEqual(6);
              });
          }, timeout);
      test('send coins failed as target address wrong',
          async () => {
            const target: string = 'faa1nl2dxgelxu9ektxypyul8cdjp0x3k';
            const amount: types.Coin[] = [{
                    denom: 'iris-atto',
                    amount: '1000000000000000000',
                }];
            await BaseTest.getClient().bank.send(target, amount, BaseTest.baseTx).catch(error => {
                console.log(error);
                expect(() => {throw error}).toThrowError(new SdkError('Invalid bech32 address'));
            })
          }, timeout);
  });

  describe('Burn', () => {
    test('burn coins ok',
      async () => {
        const amount: types.Coin[] = [{
            denom: 'iris-atto',
            amount: '100000000000000000',
          }];
        await BaseTest.getClient().bank.burn(amount, BaseTest.baseTx)
          .then(res => {
            txExpect(res);
            expect(res.tags == undefined? '': res.tags.filter(kv=>kv.key=='burnAmount')[0].value).toEqual(`${amount[0].amount}${amount[0].denom}`);
          }).catch(error => {
            console.log(error);
            expect(error).toBeNull();
          });
      }, timeout);
    test('burn coins failed as unknown token',
        async () => {
            const amount: types.Coin[] = [{
                denom: 'iris-at',
                amount: '100000000000000000',
            }];
            await BaseTest.getClient().bank.burn(amount, BaseTest.baseTx).catch(error => {
                    console.log(error);
                    expect(() => {throw error}).toThrowError(new SdkError('Bad Request', 6));
                });
        }, timeout);
      test('burn coins failed as fund not enough',
          async () => {
              const amount: types.Coin[] = [{
                  denom: 'iris-atto',
                  amount: '100000000000000000000000000000000000',
              }];
              await BaseTest.getClient().bank.burn(amount, BaseTest.baseTx).catch(error => {
                      console.log(error);
                      expect(() => {throw error}).toThrowError(SdkError);
                  });
          }, timeout);
});

  describe('Set Memo Regexp', () => {
    test('set memo regexp ok',
      async () => {
        let reg = 'test*';
        await BaseTest.getClient().bank.setMemoRegexp(reg, BaseTest.baseTx)
          .then(res => {
            txExpect(res);
            expect(res.tags == undefined? '': res.tags.filter(kv=>kv.key=='memoRegexp')[0].value).toEqual(reg);
          }).catch(error => {
            console.log(error);
            expect(error).toBeNull();
          });
      }, timeout);
      test('set memo regexp failed as memo too length',
          async () => {
              let reg = 'test11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111*';
              await BaseTest.getClient().bank.setMemoRegexp(reg, BaseTest.baseTx).catch(error => {
                      console.log(error);
                      expect(() => {throw error}).toThrowError(SdkError);
                  });
          }, timeout);
  });

  describe('Query Token Stats', () => {
    test('query single token stats',
      async () => {
        await BaseTest.getClient()
          .bank.queryTokenStats('iris')
          .then(res => {
            console.log(JSON.stringify(res));
            expect(res).not.toBeNull();
            expect(res).toHaveLength(1);
          }).catch(error => {
            console.log(error);
            expect(error).toBeNull();
          });
      }, timeout);

    test('query all token stats',
      async () => {
        await BaseTest.getClient()
          .bank.queryTokenStats()
          .then(res => {
            console.log(JSON.stringify(res));
            expect(res).not.toBeNull();
            expect(res.total_supply.length).toBeGreaterThan(0);
            expect(res.bonded_tokens).toBeNull();
          }).catch(error => {
            console.log(error);
            expect(error).toBeNull();
          });
      }, timeout);
  });
});
