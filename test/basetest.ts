import * as iris from '../src';
import { Client } from '../src/client';

export class Consts {
  static timeout = 10000;
  static keyName = 'name';
  static keyPassword = 'password';
}

/** Test KeyDAO */
export class TestKeyDAO implements iris.KeyDAO {
  keyMap: { [key: string]: iris.types.Wallet } = {};
  write(name: string, key: iris.types.Wallet) {
    this.keyMap[name] = key;
  }
  read(name: string): iris.types.Wallet {
    return this.keyMap[name];
  }
  delete(name: string) {
    delete this.keyMap[name];
  }
}

export class BaseTest {
  static baseTx: iris.types.BaseTx = {
    from: Consts.keyName,
    password: Consts.keyPassword,
    mode: iris.types.BroadcastMode.Commit,
    pubkeyType:iris.types.PubkeyType.sm2
  };

  static getClient(): Client {
    let config = {
        node: 'https://opbningxia.bsngate.com:18602/api/7b3c53beda5c48c6b07d98804e156389/rpc',
        network: iris.types.Network.Mainnet,
        chainId: 'wenchangchain',
        gas: '200000', 
        fee: { denom: 'uirita', amount: '200000' },
    };
    let privateKey = '1E120611404C4B1B98FC899A8026A6A9823C35985DA3C5ED3FF57C170C822F60'
    let mnemonic = 'tent monster mouse crowd hamster oval maple until flame journey pen post have render goose erupt box blue bridge hope fence caught marble dance';

    // let config = {
    //     node: 'http://34.80.22.255:26657',
    //     network: iris.types.Network.Mainnet,
    //     chainId: 'bifrost-1',
    //     gas: '200000',
    //     fee: { denom: 'ubif', amount: '5000' },
    // };
    // let privateKey = '80A69946ADD77EF0C17F43E72E759164F6F0A2A7E9D5D3E0966A3BCA8DE3D177'

    const client = iris
      .newClient(config)
      .withKeyDAO(new TestKeyDAO())
      .withRpcConfig({ 
        timeout: Consts.timeout , 
        headers: {'x-api-key': '7a3b5660c0ae47e2be4f309050c1d304'}
      });

    client.keys.recover(
      Consts.keyName,
      Consts.keyPassword,
      mnemonic,
      iris.types.PubkeyType.sm2
    );

    // client.keys.importPrivateKey(
    //   Consts.keyName,
    //   Consts.keyPassword,
    //   privateKey,
    //   types.PubkeyType.sm2
    // );
    return client;
  }
}
