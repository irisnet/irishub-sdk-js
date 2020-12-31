import * as types from '../src/types';
import { BaseTest } from './basetest';
import * as fs from 'fs';

const timeout = 100000;

describe('Construct Tests', () => {
  describe('storeCode', () => {
    test(
      'store Code',
      async () => {
        // Store Code
        const wasmCode= fs.readFileSync(`${__dirname}/election.wasm`);
        const funds: types.Coin[] = [
          {
            denom: 'stake',
            amount: '100',
          },
        ];

        const code:any =  await BaseTest.getClient()
          .contract.storeCode(
            wasmCode,
            {},
            BaseTest.baseTx
          ).catch(error => {
            console.log(error);
          });
        console.log('code:',code);

        // Instantiate Contract
        let code_id = 1;
        code.log[0].events[0].attributes.forEach((item:any)=>{
          if (item.key == 'code_id') {
            code_id = Number(item.value);
          }
        });

        const InstantiateMsg = {
          start:1,
          end:1000000,
          candidates:[
            'iaa1qvty8x0c78am8c44zv2n7tgm6gfqt78j0verqa',
            'iaa1zk2tse0pkk87p2v8tcsfs0ytfw3t88kejecye5'
          ]
        };

        const instantiate = await BaseTest.getClient()
          .contract.instantiateContract(
            code_id,
            Buffer.from(JSON.stringify(InstantiateMsg)),
            funds,
            '234234',
            '',
            BaseTest.baseTx
          ).catch(error => {
            console.log(error);
          });
          console.log('instantiate:',instantiate);
        
        // Execute Contract
        let contract_address = 'iaa1hqrdl6wstt8qzshwc6mrumpjk9338k0lkhd3yu';
        code.log[0].events[0].attributes.forEach((item:any)=>{
          if (item.key == 'contract_address') {
            contract_address = item.value;
          }
        });
        const executeMsg = {
          vote:{
            candidate:'iaa1qvty8x0c78am8c44zv2n7tgm6gfqt78j0verqa',
          }
        }
        const execute = await BaseTest.getClient()
          .contract.executeContract(
            'iaa1hqrdl6wstt8qzshwc6mrumpjk9338k0lkhd3yu',
            Buffer.from(JSON.stringify(executeMsg)),
            funds,
            BaseTest.baseTx
          ).catch(error => {
            console.log(error);
          });
        console.log('execute:',execute);
      },
      timeout
    );
  });

  // describe('Migrate Contract', () => {
  //   test(
  //     'Migrate Contract',
  //     async () => {
  //       const msg = {
  //         vote:{
  //           candidate:'iaa1qvty8x0c78am8c44zv2n7tgm6gfqt78j0verqa',
  //         }
  //       }
  //       await BaseTest.getClient()
  //         .contract.migrateContract(
  //           'iaa1hqrdl6wstt8qzshwc6mrumpjk9338k0lkhd3yu',
  //           1,
  //           Buffer.from(JSON.stringify(msg)),
  //           BaseTest.baseTx
  //         )
  //         .then(res => {
  //           console.log(JSON.stringify(res));
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     },
  //     timeout
  //   );
  // });

  // describe('update Admin', () => {
  //   test(
  //     'update Admin',
  //     async () => {
  //       await BaseTest.getClient()
  //         .contract.updateAdmin(
  //           'new_admin',
  //           'contract',
  //           BaseTest.baseTx
  //         )
  //         .then(res => {
  //           console.log(JSON.stringify(res));
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     },
  //     timeout
  //   );
  // });

  // describe('clear Admin', () => {
  //   test(
  //     'clear Admin',
  //     async () => {
  //       await BaseTest.getClient()
  //         .contract.clearAdmin(
  //           'contract',
  //           BaseTest.baseTx
  //         )
  //         .then(res => {
  //           console.log(JSON.stringify(res));
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     },
  //     timeout
  //   );
  // });

  describe('query', () => {
    test(
      'query Contract Info',
      async () => {
        await BaseTest.getClient()
          .contract.contractInfo(
            'iaa1uq0haxdf5cgg7s76frd3rtnr0trzaazyhf4rqc',
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

    test(
      'query contract History',
      async () => {
        await BaseTest.getClient()
          .contract.contractHistory(
            'iaa1uq0haxdf5cgg7s76frd3rtnr0trzaazyhf4rqc',
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

    test(
      'query contracts By Code',
      async () => {
        await BaseTest.getClient()
          .contract.contractsByCode(
            1,
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
    
    test(
      'query all Contract State',
      async () => {
        await BaseTest.getClient()
          .contract.allContractState(
            'iaa18vd8fpwxzck93qlwghaj6arh4p7c5n89fqcgm9',
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
    
    test(
      'query raw Contract State',
      async () => {
        await BaseTest.getClient()
          .contract.rawContractState(
            'iaa18vd8fpwxzck93qlwghaj6arh4p7c5n89fqcgm9',
            Buffer.from('')
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

    test(
      'query smart Contract State',
      async () => {
        await BaseTest.getClient()
          .contract.smartContractState(
            'iaa18vd8fpwxzck93qlwghaj6arh4p7c5n89fqcgm9',
            Buffer.from('')
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

    test(
      'query code',
      async () => {
        await BaseTest.getClient()
          .contract.code(1)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'query code',
      async () => {
        await BaseTest.getClient()
          .contract.codes()
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
});
