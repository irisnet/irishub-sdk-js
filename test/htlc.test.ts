import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 10000;

describe('Bank Tests', () => {
  describe('create HTLC', () => {
    test(
      'create HTLC',
      async () => {
        await BaseTest.getClient()
          .htlc.createHTLC(
            {
              sender: 'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw',
              to: 'iaa1ljemm0yznz58qxxs8xyak7fashcfxf5lgl4zjx',
              receiver_on_other_chain: 'tbnb1c88qvyufqkh4ea422fr6wc6g2t5zrpxekdl0my',
              sender_on_other_chain: 'tbnb1cegl4x48qy6mq5vg5wtryk806n2vjtyhk3sj6v',
              amount: [{
                amount:'1003',
                denom:'htltbcbnb'
              }],
              hash_lock: "f2e68d53eca99f02fc791cdb665f7ade28beb2b65c99dd302ead733c1950062a",
              timestamp: 1617353946,
              time_lock: 250,
              transfer: true
            },
            BaseTest.baseTx
          )
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('get htlc signed tx', () => {
    test(
      'get htlc signed tx',
      async () => {
        const msgs: any[] = [
          {
            type:types.TxType.MsgCreateHTLC,
            value:{
              sender: 'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw',
              to: 'iaa1ljemm0yznz58qxxs8xyak7fashcfxf5lgl4zjx',
              receiver_on_other_chain: 'tbnb1c88qvyufqkh4ea422fr6wc6g2t5zrpxekdl0my',
              sender_on_other_chain: 'tbnb1cegl4x48qy6mq5vg5wtryk806n2vjtyhk3sj6v',
              amount: [{
                amount:'1003',
                denom:'htltbcbnb'
              }],
              hash_lock: "21b2ca6da04e26523671cf2f7b7e5d807a44a22deccd76953062dcacd1d43d2e",
              timestamp: 1617278442,
              time_lock: 250,
              transfer: true
            }
          }
        ];
        let unSignedTx = BaseTest.getClient().tx.buildTx(msgs, BaseTest.baseTx);
        let SignedTx = await BaseTest.getClient().tx.sign(unSignedTx, BaseTest.baseTx);
      },
      timeout
    );
  });

  describe('claim HTLC', () => {
    test(
      'claim HTLC',
      async () => {
        await BaseTest.getClient()
          .htlc.claimHTLC(
            'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw',
            '812F174782597314097E0F7662B1678301894CFAD143907FEFB73463B6F97408',
            'ea26e5baa346b264d56d238d7509e6280a3ae27da0045604e38bf5a524a553b6',
            BaseTest.baseTx
          )
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('Query', () => {
    test(
      'query HTLC',
      async () => {
        await BaseTest.getClient()
          .htlc.queryHTLC(
            '3A90BDF3E9896F3B3FF88179446F046661C3D2E4380274E3C26881799F8400F4'
          )
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'query Asset Supply',
      async () => {
        await BaseTest.getClient()
          .htlc.queryAssetSupply(
            'htltbcbnb'
          )
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'query Asset Supplies',
      async () => {
        await BaseTest.getClient()
          .htlc.queryAssetSupplies()
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'query Params',
      async () => {
        await BaseTest.getClient()
          .htlc.queryParams()
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });
});
