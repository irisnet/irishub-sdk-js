import { BaseTest } from './basetest';
import * as types from '../src/types';

let timeout = 9999;

describe('Tx Tests', () => {
  const amount: types.Coin[] = [
    {
      denom: 'udev',
      amount: '100',
    },
  ];

  const msgs: any[] = [
    {
      type:types.TxType.MsgSend,
      value:{
        from_address:'iaa176dd0tgn38grpc8hpxfmwl6sl8jfmkneg8mkxr',
        to_address:'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw',
        amount
      }
    }
  ];

  const moreMessages: any[] = [
    {
      type:types.TxType.MsgSend,
      value:{
        from_address:'iaa176dd0tgn38grpc8hpxfmwl6sl8jfmkneg8mkxr',
        to_address:'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw',
        amount
      }
    },
    {
      type:types.TxType.MsgSend,
      value:{
        from_address:'iaa176dd0tgn38grpc8hpxfmwl6sl8jfmkneg8mkxr',
        to_address:'iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw',
        amount
      }
    }
  ];

  describe('watch/cold wallet', () => {
    test('watch/cold wallet tx', async () => {
      let baseTx = {...BaseTest.baseTx};
      baseTx.account_number = 2;
      baseTx.sequence = 40;
      baseTx.chainId = BaseTest.getClient().config.chainId;
      // watch wallet
      let unsignedStdTx =  BaseTest.getClient().tx.buildTx(msgs, baseTx);
      let unsignedTxStr = Buffer.from(unsignedStdTx.getData()).toString('base64');
      // cold wallet
      let recover_unsigned_std_tx = BaseTest.getClient().tx.newStdTxFromTxData(unsignedTxStr);
      let recover_signed_std_tx = await BaseTest.getClient().tx.sign(recover_unsigned_std_tx, baseTx, true);
      let recover_signed_std_tx_str = Buffer.from(recover_signed_std_tx.getData()).toString('base64'); 
      // watch wallet
      let signed_std_tx = BaseTest.getClient().tx.newStdTxFromTxData(recover_signed_std_tx_str);
      await BaseTest.getClient().tx.broadcast(signed_std_tx, baseTx.mode).then(res=>{
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    });
  });

  let signedTx:any;

  describe('Signing', () => {
    test('sign tx online', async () => {
      let unsignedTx = BaseTest.getClient().tx.buildTx(msgs, BaseTest.baseTx);
      signedTx =  await BaseTest.getClient().tx.sign(unsignedTx, BaseTest.baseTx);
      console.log(signedTx);
    });

    test('sign tx offline', async () => {
      let baseTx = {...BaseTest.baseTx};
      baseTx.account_number = 8;
      baseTx.sequence = 356;
      let unsignedTx = BaseTest.getClient().tx.buildTx(msgs, BaseTest.baseTx);
      
      let offlineSignedTx = await BaseTest.getClient().tx.sign(unsignedTx,baseTx);
      console.log(offlineSignedTx);
    });
  });

  describe('Broadcast', () => {
    test('broadcast tx', async () => {
        await BaseTest.getClient()
          .tx.broadcast(signedTx, types.BroadcastMode.Commit)
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test('more messages', async () => {
        await BaseTest.getClient()
        .tx.buildAndSend(moreMessages,BaseTest.baseTx)
        .then(res => {
            console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });;
      },
      timeout
    );
  });
});
