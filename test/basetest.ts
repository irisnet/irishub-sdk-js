// support cosmos-sdk v0.44.x、 irismod 1.5.2、ibc 1.1.0
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
    // pubkeyType:types.PubkeyType.sm2
  };

  static getClient(): Client {
    let config = {
        node: 'http://192.168.150.33:26657',
        chainNetwork: iris.types.ChainNetwork.Iris,
        chainId: 'iris',
        gas: '20000000',
        fee: { denom: 'uiris', amount: '200' },
    };
    // let privateKey = '1E120611404C4B1B98FC899A8026A6A9823C35985DA3C5ED3FF57C170C822F60'

    // let config = {
    //     node: 'http://34.80.22.255:26657',
    //     network: iris.types.Network.Mainnet,
    //     chainId: 'bifrost-1',
    //     gas: '200000',
    //     fee: { denom: 'udev', amount: '5000' },
    // };
    // let privateKey = '80A69946ADD77EF0C17F43E72E759164F6F0A2A7E9D5D3E0966A3BCA8DE3D177'

    const client = iris
      .newClient(config)
      .withKeyDAO(new TestKeyDAO())
      .withRpcConfig({ timeout: Consts.timeout });

    client.keys.recover(
      Consts.keyName,
      Consts.keyPassword,
      'razor educate ostrich pave permit comic collect square believe decade scan day frozen language make winter lyrics spice dawn deliver jaguar arrest decline success'
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
