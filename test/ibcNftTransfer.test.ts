import { BaseTest } from './basetest';

const timeout = 90000;

describe('Ibc Nft Transfer Tests', () => {
  describe('transfer', () => {
    test(
      'ibc nft transfer',
      async () => {
        await (await BaseTest.getClient())
          .ibcNftTransfer.transfer(
            {
              source_port: 'nft-transfer',
              source_channel: 'channel-99',
              class_id: 'rldn',
              token_ids: ['tmausyz', 'hibwynm'],
              receiver: 'cosmos10nzeu2lf7lrcyvmtr8u7lygs8nj6vslqshcu06',
              timeout_timestamp:1704285997287000000,
              memo: '66666'
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

  describe('Queries', () => {
    test(
      'query Class Trace',
      async () => {
        await (await BaseTest.getClient())
          .ibcNftTransfer.queryClassTrace('EEB2AAF7E39CEEE41A53D8AE7A8B3746963F96261A2F73309C56B2622A259F36')
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
      'query Class Traces',
      async () => {
        await (await BaseTest.getClient())
          .ibcNftTransfer.queryClassTraces()
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
      'query Class Hash',
      async () => {
        await (await BaseTest.getClient())
          .ibcNftTransfer.queryClassHash('nft-transfer/channel-101/class1')
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
      'query Escrow Address',
      async () => {
        await (await BaseTest.getClient())
          .ibcNftTransfer.queryEscrowAddress('nft-transfer', 'channel-99')
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
      'queries all parameters of the ibc-nft-transfer module',
      async () => {
        await (await BaseTest.getClient())
          .ibcNftTransfer.queryParams()
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
