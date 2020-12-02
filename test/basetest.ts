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
  };

  static getClient(): Client {
    const client = iris
      .newClient({
        node: 'http://106.53.32.134:26657',
        network: iris.Network.Mainnet,
        chainId: 'test',
        gas: '200000',
        fee: { denom: 'stake', amount: '2' },
      })
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
      '1E120611404C4B1B98FC899A8026A6A9823C35985DA3C5ED3FF57C170C822F60'
    );
    return client;
  }
}