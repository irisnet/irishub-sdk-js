import { BaseTest } from './basetest';
import * as is from "is_js";

const timeout = 999999;

function randomStr(length:number):string{
  let random = '';
  let lexicon = 'abcdefghijklmnopqrstuvwxyz'
  for (let i=0; i<length; i++) {
    let randomIndex = Math.floor(Math.random()*1000)%lexicon.length;
    random += lexicon.substr(randomIndex,1);
  }
  return random;
}

describe('Nft Tests', () => {
  describe('nft tx', () => {
    test(
      'nft tx',
      async () => {
        let denom_id = randomStr(4);
        let denom_name = randomStr(4);
        let denom_schema = randomStr(10);

        await BaseTest.getClient()
          .nft.issueDenom(
            denom_id,
            denom_name,
            denom_schema,
            {
              symbol: '1',
              mint_restricted: false,
              update_restricted: false,
              description: '2',
              uri: '3',
              uri_hash: '',
              data: '5',
            },
            BaseTest.baseTx
          )
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });

        let nft_id = randomStr(7);
        let nft_name = randomStr(7);
        let nft_data = randomStr(7);
        let nft_uri = `http://${randomStr(7)}`;
        await BaseTest.getClient()
        .nft.mintNft(
          nft_id,
          denom_id,
          nft_name,
          nft_uri,
          '',
          nft_data,
          '',
          BaseTest.baseTx
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });

        let nft_name_e = randomStr(7);
        let nft_data_e = randomStr(7);
        let nft_uri_e = `http://${randomStr(7)}`;
        let nft_uri_hash_e = randomStr(7);
        await BaseTest.getClient()
        .nft.editNft(
          nft_id, 
          denom_id,
          {
              name:nft_name_e,
              data:nft_data_e,
              uri:nft_uri_e,
              uri_hash: nft_uri_hash_e
          },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });

        await BaseTest.getClient()
        .nft.transferNft(
          nft_id,
          denom_id,
          'iaa1gytgufwqkz9tmhjgljfxd3qcwpdzymj6022q3w',
          {},
          BaseTest.baseTx
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });

        nft_id = randomStr(7);
        nft_name = randomStr(7);
        nft_data = randomStr(7);
        nft_uri = `http://${randomStr(7)}`;
        await BaseTest.getClient()
        .nft.mintNft(
          nft_id,
          denom_id,
          nft_name,
          nft_uri,
          '',
          nft_data,
          '',
          BaseTest.baseTx
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });

        await BaseTest.getClient()
        .nft.burnNft(
          nft_id,
          denom_id,
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

  describe('query nft', () => {
    test(
      'query Supply',
      async () => {
        await BaseTest.getClient()
        .nft.querySupply('bczd','iaa1gytgufwqkz9tmhjgljfxd3qcwpdzymj6022q3w')
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
      'query Owner',
      async () => {
        await BaseTest.getClient()
        .nft.queryOwner('iaa14x8a7y88py9xkvkxzld3jxhgpjpm03whruzwzp','rzfj')
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
      'query Collection',
      async () => {
        await BaseTest.getClient()
        .nft.queryCollection('wwid11111')
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
      'query Denom',
      async () => {
        await BaseTest.getClient()
        .nft.queryDenom('wwid11111')
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
      'query Denoms',
      async () => {
        await BaseTest.getClient()
        .nft.queryDenoms()
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
      'query NFT',
      async () => {
        await BaseTest.getClient()
        .nft.queryNFT('wwid11111','wwntest01')
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
