import StoreKeys from '../src/utils/store-keys';
import * as bech32 from 'bech32';
import Utils from '../src/utils/utils';
import { Crypto } from '../src/utils/crypto';
import * as Amino from '@irisnet/amino-js';

test('test', async () => {

  console.log(
    Utils.str2ba(
      JSON.stringify({
        Address: 'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
      })
    )
  );

  console.log(
    Utils.str2hexstring(
      JSON.stringify({
        Address: 'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
      })
    )
  );
});
