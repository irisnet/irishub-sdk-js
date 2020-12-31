import * as iris from '../src';
import * as types from '../src/types';
import { Client } from '../src/client';

export class Consts {
  static timeout = 10000;
  static keyName = 'name';
  static keyPassword = 'password';
}

/** Test KeyDAO */
export class TestKeyDAO implements iris.KeyDAO {
  keyMap: { [key: string]: types.Key } = {};
  write(name: string, key: types.Key) {
    this.keyMap[name] = key;
  }
  read(name: string): types.Key {
    return this.keyMap[name];
  }
  delete(name: string) {
    delete this.keyMap[name];
  }
}

export class BaseTest {
  static baseTx: types.BaseTx = {
    from: Consts.keyName,
    password: Consts.keyPassword,
    mode: types.BroadcastMode.Commit,
    pubkeyType:types.PubkeyType.sm2
  };

  static getClient(): Client {
    let config = {
        node: 'http://10.1.4.101:26657',
        network: iris.Network.Mainnet,
        chainId: 'chain-dqasEu',
        gas: '2000000',
        fee: { denom: 'stake', amount: '200' },
    };
    let privateKey = '1E120611404C4B1B98FC899A8026A6A9823C35985DA3C5ED3FF57C170C822F60'

    // let config = {
    //     node: 'http://34.80.22.255:26657',
    //     network: iris.Network.Mainnet,
    //     chainId: 'bifrost-1',
    //     gas: '200000',
    //     fee: { denom: 'ubif', amount: '5000' },
    // };
    // let privateKey = '80A69946ADD77EF0C17F43E72E759164F6F0A2A7E9D5D3E0966A3BCA8DE3D177'

    const client = iris
      .newClient(config)
      .withKeyDAO(new TestKeyDAO())
      .withRpcConfig({ timeout: Consts.timeout });

    // client.keys.recover(
    //   Consts.keyName,
    //   Consts.keyPassword,
    //   'case divide galaxy brain mother bicycle sketch utility shaft resource virus swear slender evidence valid brain lonely grief join build civil update muffin swarm'
    // );

    client.keys.importPrivateKey(
      Consts.keyName,
      Consts.keyPassword,
      privateKey,
      types.PubkeyType.sm2
    );
    return client;
  }
}