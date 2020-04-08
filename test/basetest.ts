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
        node: 'http://localhost:26657',
        network: iris.Network.Testnet,
        chainId: 'test',
        gas: '200000',
        fee: { denom: 'stake', amount: '1' },
      })
      .withKeyDAO(new TestKeyDAO())
      .withRpcConfig({ timeout: Consts.timeout });

    client.keys.recover(
      Consts.keyName,
      Consts.keyPassword,
      'song nothing pole rough coffee marble sure october faculty kiss ahead act design dawn erase trick safe replace company version review dune width adult'
    );

    return client;
  }
}
