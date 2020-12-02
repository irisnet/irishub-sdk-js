import { BaseTest } from './basetest';
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
      'Issue Denom',
      async () => {
        let denom_id = randomStr(4);
        let denom_name = randomStr(4);
        let denom_schema = randomStr(10);

        await BaseTest.getClient()
          .nft.issueDenom(
            denom_id,
            denom_name,
            denom_schema,
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

        let nft_name_e = randomStr(7);;
        let nft_data_e = randomStr(7);;
        let nft_uri_e = `http://${randomStr(7)}`;
        await BaseTest.getClient()
        .nft.editNft(
          nft_id,
          denom_id,
          {
              name:nft_name_e,
              data:nft_data_e,
              uri:nft_uri_e
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
});
